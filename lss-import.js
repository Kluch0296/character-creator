/* Long Story Short (LSS) import, part A1: reads a downloaded sheet file and prepares it for the wizard.
   Accepts an array of wrappers, one wrapper or a bare sheet; marks which characters can be imported
   (level 1-2, data readable) and which warnings apply (edition label); cleans wrappers and extracts plain
   text from TipTap documents, HTML strings and plain strings. Loads nothing at load time.
   Output is plain text only: the UI must render these strings with textContent, never innerHTML.
   Every regex here is linear or bounded: the file is untrusted and may be up to MAX_FILE_CHARS. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.LssImport = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const MAX_FILE_CHARS = 2000000;
  const MAX_STORED_CHARS = 1000000;
  const DEFAULT_NAME = 'Безымянный герой';
  const SUPPORTED_EDITION = '2014';
  const MAX_DEPTH = 200;
  const MAX_LABEL = 200;
  const DANGEROUS_KEYS = new Set(['__proto__', 'constructor', 'prototype']);
  // Service keys: dropped from disabledBlocks and from the top level of the sheet data.
  const SERVICE_KEYS = /^(?:_id|__v|createdAt|updatedAt|lastWriterSessionId|owner(?:Id|Name|_id)?)$/;
  // Service keys dropped at any depth inside tags and spells.
  const ID_KEYS = /^(?:_id|__v)$/;
  // Wrapper-only keys that must not survive at the top level of the sheet data.
  const SHEET_TOP_EXTRA = /^(?:wizard|rooms|linkAccess)$/;
  const ENTITIES = new Map([['nbsp', ' '], ['amp', '&'], ['lt', '<'], ['gt', '>'], ['quot', '"'], ['apos', "'"],
    ['mdash', '—'], ['ndash', '–'], ['laquo', '«'], ['raquo', '»'], ['hellip', '…']]);
  const EMOJI = /[\p{Extended_Pictographic}\p{Emoji_Presentation}‍️⃣]/gu;
  // TipTap node types that form blocks; every other node type is inline and is flattened into its line.
  const BLOCK_TYPES = new Set(['doc', 'paragraph', 'heading', 'bulletList', 'orderedList', 'listItem', 'blockquote', 'codeBlock', 'taskList', 'taskItem']);
  const CONTAINER_TYPES = new Set(['doc', 'bulletList', 'orderedList', 'listItem', 'blockquote', 'taskList', 'taskItem']);
  // Trailing "N" of a class part: "Воин 2", "Воин 2 уровень", "Воин 2 (Чемпион)". The lookbehind keeps "12" whole.
  const LEVEL_TAIL = /(?<!\d)(\d+)\s*(?:(?:уровень|уровня|уровней|ур)\.?\s*)?(?:\([^()]*\)\s*)?$/i;
  const FILE_ERRORS = {
    too_large: 'Файл слишком большой для листа персонажа. Скачайте лист из LSS заново.',
    not_json: 'Файл не похож на JSON. Выберите файл, скачанный из LSS («.json → Скачать .json»).',
    empty: 'Файл пуст: в нём нет ни одного листа персонажа.',
    not_character: 'В файле нет листов персонажей. Проверьте, что это файл из Long Story Short.'
  };

  const isObject = v => v !== null && typeof v === 'object' && !Array.isArray(v);
  // LSS wraps most scalar fields as {name, value}; bare values are accepted too.
  const fieldValue = f => isObject(f) && 'value' in f ? f.value : f;
  const scalar = (v, fallback) => (typeof v === 'string' && v !== '') || typeof v === 'number' ? String(v) : fallback;
  const cap = s => String(s ?? '').slice(0, MAX_LABEL);
  const parseObject = text => { try { const v = JSON.parse(text); return isObject(v) ? v : null; } catch { return null; } };

  /* Tolerant number: 12, "12", "30 футов", "+5", "-1" -> number; "1к10" -> 1 (leading number only:
     dice notation is not a number and must be parsed by its own helper); anything else -> NaN. */
  function num(v) {
    if (typeof v === 'number') return Number.isFinite(v) ? v : NaN;
    if (typeof v !== 'string') return NaN;
    const m = v.trim().replace(/[−–]/g, '-').match(/^[+-]?\d+(?:\.\d+)?/);
    return m ? Number(m[0]) : NaN;
  }

  /* Level field: an integer, or a whole-string integer such as "2" or "1.0". "1.5", "1e3", "2abc" are unusable (NaN). */
  function levelValue(field) {
    const raw = fieldValue(field);
    if (typeof raw === 'number') return Number.isInteger(raw) ? raw : NaN;
    if (typeof raw !== 'string') return NaN;
    const s = raw.trim();
    return /^\d{1,6}(?:\.0+)?$/.test(s) ? Number(s) : NaN;
  }

  /* Normalized label for matching: lowercase, ё -> е, hyphens/apostrophes removed (полу-эльф -> полуэльф),
     emoji and other punctuation -> space, whitespace collapsed. */
  function normalizeLabel(s) {
    return String(s ?? '').normalize('NFC').toLowerCase().replace(/ё/g, 'е').replace(/[-'’ʼ`]/g, '')
      .replace(EMOJI, ' ').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
  }

  // Numeric references to NUL and surrogates, and code points above U+10FFFF, are dropped.
  function decodeEntities(s) {
    return s.replace(/&(#[xX][0-9a-fA-F]{1,6}|#\d{1,7}|[a-zA-Z]{1,12});/g, (m, e) => {
      if (e[0] === '#') {
        const code = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
        return code === 0 || (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff ? '' : String.fromCodePoint(code);
      }
      const key = e.toLowerCase();
      return ENTITIES.has(key) ? ENTITIES.get(key) : m;
    });
  }

  const cleanText = s => s.replace(/\r\n?/g, '\n').split('\n').map(line => line.trimEnd()).join('\n').replace(/\n{3,}/g, '\n\n').trim();

  /* HTML string (regex only, no DOM). Runs of whitespace collapse first, then <br> and block ends become
     line breaks, tags are removed, entities decoded last, so &lt;b&gt; stays visible text, not markup. */
  function htmlToText(html) {
    // Plain text (no tag-like "<letter", "</" or "<!") keeps its own line breaks; only markup collapses whitespace.
    if (!/<[a-zA-Z\/!]/.test(String(html))) return cleanText(decodeEntities(String(html)).split('\n').map(line => line.trim()).join('\n'));
    const noTags = String(html)
      .replace(/[ \t\r\n]+/g, ' ')
      .replace(/<!--[\s\S]*?(?:-->|$)/g, '')
      .replace(/<(script|style)\b[^<>]*>[\s\S]*?(?:<\/\1\s*>|$)/gi, '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(?:p|div|li|h[1-6]|tr|blockquote)\s*>/gi, '\n')
      .replace(/<\/?[a-zA-Z][^<>]*>/g, '');
    return cleanText(decodeEntities(noTags).split('\n').map(line => line.trim()).join('\n'));
  }

  // Inline content (text, hardBreak, inline nodes such as roller) is flattened recursively into one string.
  function inlineText(node, depth) {
    if (typeof node === 'string') return node;
    if (!isObject(node) || depth > MAX_DEPTH) return '';
    if (node.type === 'hardBreak') return '\n';
    if (typeof node.text === 'string') return node.text;
    return Array.isArray(node.content) ? node.content.map(c => inlineText(c, depth + 1)).join('') : '';
  }
  // A container yields one line per block child; loose inline children between blocks form their own line.
  function containerLines(node, depth) {
    const lines = [];
    let run = '';
    const kids = Array.isArray(node.content) ? node.content : [];
    for (const child of kids) {
      if (isObject(child) && BLOCK_TYPES.has(child.type)) {
        if (run) lines.push(run);
        run = '';
        for (const line of blockLines(child, depth + 1)) lines.push(line);
      } else run += inlineText(child, depth + 1);
    }
    if (run) lines.push(run);
    return lines;
  }
  function blockLines(node, depth) {
    if (!isObject(node) || depth > MAX_DEPTH) return [];
    return CONTAINER_TYPES.has(node.type) ? containerLines(node, depth) : [inlineText(node, depth)];
  }

  /* Text of a block: {value:{data:TipTapDoc}} (optionally with an extra `id`), {value:'html or text'},
     {value:{data:'html string'}}, a bare doc, or a plain string. Never returns undefined. */
  function plainText(block) {
    const value = isObject(block) && 'value' in block ? block.value : block;
    if (typeof value === 'string') return htmlToText(value);
    if (!isObject(value)) return '';
    const doc = 'data' in value ? value.data : value;
    if (typeof doc === 'string') {
      const trimmed = doc.trim();
      const parsed = trimmed.startsWith('{') ? parseObject(trimmed) : null;
      // Only a JSON object with a content array is a TipTap doc; any other string is HTML/text.
      return parsed && Array.isArray(parsed.content) ? cleanText(containerLines(parsed, 0).join('\n')) : htmlToText(doc);
    }
    return isObject(doc) ? cleanText(containerLines(doc, 0).join('\n')) : '';
  }

  /* Class string "Плут 2 / Воин 1" -> [{label:'Плут', level:2}, {label:'Воин', level:1}]; "Воин" -> level null.
     Parts are separated by / , ; + ; input is capped to MAX_LABEL characters. */
  function classLevels(text) {
    return cap(text).split(/[\/,;+]/).map(part => part.trim()).filter(Boolean).flatMap(part => {
      const m = part.match(LEVEL_TAIL);
      if (!m) return [{label: part, level: null}];
      const label = part.slice(0, m.index).trim();
      return label ? [{label, level: Number(m[1])}] : [];
    });
  }

  // Deep copy that drops prototype-polluting keys (and `drop` keys) at any depth; undefined values are skipped.
  function copyDeep(v, depth = 0, drop = null) {
    if (v === null || typeof v !== 'object') return v;
    if (depth > MAX_DEPTH) return null;
    if (Array.isArray(v)) return v.map(x => (x === undefined ? null : copyDeep(x, depth + 1, drop)));
    const out = {};
    for (const key of Object.keys(v)) if (!DANGEROUS_KEYS.has(key) && !(drop && drop.test(key)) && v[key] !== undefined) out[key] = copyDeep(v[key], depth + 1, drop);
    return out;
  }
  // Top level of the sheet data: service keys and wrapper-only keys go; everything else (hiddenName, weapons, abilities...) stays.
  function copySheet(data) {
    const out = {};
    if (!isObject(data)) return out;
    for (const key of Object.keys(data)) if (!DANGEROUS_KEYS.has(key) && !SERVICE_KEYS.test(key) && !SHEET_TOP_EXTRA.test(key) && data[key] !== undefined) out[key] = copyDeep(data[key]);
    return out;
  }

  /* Wrapper reduced to an allowlist. `sheet` (already parsed) wins over wrapper.data; data is copied and
     stripped of its service keys. `id` keys inside nested data (weaponsList, bonuses) are kept. */
  function sanitizeWrapper(wrapper, sheet) {
    const w = isObject(wrapper) ? wrapper : {};
    let data = sheet !== undefined ? sheet : w.data;
    if (typeof data === 'string') data = parseObject(data);
    return {
      jsonType: scalar(w.jsonType, 'character'),
      version: scalar(w.version, '2'),
      edition: scalar(w.edition, SUPPORTED_EDITION),
      sheetEdition: scalar(w.sheetEdition, SUPPORTED_EDITION),
      tags: Array.isArray(w.tags) ? copyDeep(w.tags, 0, ID_KEYS) : [],
      disabledBlocks: isObject(w.disabledBlocks) ? copyDeep(w.disabledBlocks, 0, SERVICE_KEYS) : {},
      spells: isObject(w.spells) ? copyDeep(w.spells, 0, ID_KEYS) : {},
      data: copySheet(data)
    };
  }

  // A wrapper carries `data`; a bare sheet is the object itself (it has info or stats and no data).
  function readSheet(item) {
    if ('data' in item) return isObject(item.data) ? item.data : typeof item.data === 'string' ? parseObject(item.data) : null;
    return isObject(item.info) || isObject(item.stats) ? item : null;
  }
  const isCharacterLike = o => o.jsonType === 'character' || (o.jsonType === undefined && ('data' in o || 'info' in o || 'stats' in o));

  function makeEntry(item, index) {
    const sheet = readSheet(item);
    const info = isObject(sheet?.info) ? sheet.info : {};
    const classText = cap(plainText(info.charClass));
    const classes = classLevels(classText);
    const numbered = classes.some(c => c.level !== null);
    // A conflict is raised only when every class part carries a number; otherwise info.level is trusted.
    const allNumbered = classes.length > 0 && classes.every(c => c.level !== null);
    // Without a number, a class counts as level 1 once some other part has one (e.g. "Плут 1 / Воин").
    const classSum = numbered ? classes.reduce((sum, c) => sum + (c.level ?? 1), 0) : null;
    const infoNum = levelValue(info.level);
    const hasInfoLevel = Number.isFinite(infoNum);
    const rawLevel = hasInfoLevel ? infoNum : classSum;
    const level = Number.isInteger(rawLevel) && rawLevel >= 1 ? rawLevel : null;
    const sourceEdition = scalar(item.sheetEdition, '') || scalar(item.edition, '') || SUPPORTED_EDITION;
    const mismatch = [item.edition, item.sheetEdition].map(v => scalar(v, '')).find(v => v !== '' && v !== SUPPORTED_EDITION);
    const warnings = mismatch ? [{code: 'edition_mismatch', message: `Лист отмечен в LSS редакцией ${mismatch}. Мастер работает по правилам 2014 и выгрузит лист редакции 2014 — проверьте распознанные выборы.`}] : [];
    let support;
    if (!sheet) support = {ok: false, code: 'corrupt', message: 'Данные листа повреждены: их не удалось прочитать. Скачайте лист из LSS заново.'};
    else if (level === null) support = {ok: false, code: 'level_unknown', message: 'Не удалось определить уровень персонажа. Проверьте лист в LSS и скачайте его заново.'};
    else if (allNumbered && hasInfoLevel && infoNum !== classSum) support = {ok: false, code: 'level_conflict', message: `Уровень в листе (${infoNum}) не совпадает с уровнями классов «${classText}». Исправьте лист в LSS и скачайте его заново.`};
    else if (level >= 3) support = {ok: false, code: 'level_unsupported', message: `Лист ${level}-го уровня: пока поддерживаются только персонажи 1-го и 2-го уровня.`};
    else support = {ok: true, code: 'ok', message: ''};
    // Entries expose copies only: the raw parsed objects can carry own "__proto__" keys.
    const sheetCopy = sheet ? copyDeep(sheet) : null;
    const wrapper = 'data' in item ? copyDeep(item) : {jsonType: 'character', version: '2', data: sheetCopy};
    return {
      index, name: cap(plainText(sheet?.name)) || DEFAULT_NAME, level, classText,
      subclassText: cap(plainText(info.charSubclass)), raceText: cap(plainText(info.race)), backgroundText: cap(plainText(info.background)),
      edition: sourceEdition, sourceEdition, wrapper, sheet: sheetCopy, support, warnings
    };
  }

  /* File -> {entries, errors}. Errors are file-level only (too_large, not_json, empty, not_character);
     per-character problems are reported in entry.support and entry.warnings.
     A leading BOM is ignored. Blank text or an empty array is `empty`; a non-empty array with no character is `not_character`. */
  function readLssFile(text) {
    const fileError = code => ({entries: [], errors: [{code, message: FILE_ERRORS[code]}]});
    if (typeof text !== 'string') return fileError('not_json');
    if (text.length > MAX_FILE_CHARS) return fileError('too_large');
    const body = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
    if (!body.trim()) return fileError('empty');
    let parsed;
    try { parsed = JSON.parse(body); } catch { return fileError('not_json'); }
    if (!Array.isArray(parsed) && !isObject(parsed)) return fileError('not_character');
    const items = Array.isArray(parsed) ? parsed : [parsed];
    if (!items.length) return fileError('empty');
    const entries = [];
    items.forEach((item, index) => { if (isObject(item) && isCharacterLike(item)) entries.push(makeEntry(item, index)); });
    return entries.length ? {entries, errors: []} : fileError('not_character');
  }

  return {MAX_FILE_CHARS, MAX_STORED_CHARS, readLssFile, num, plainText, htmlToText, normalizeLabel, sanitizeWrapper, classLevels};
});
