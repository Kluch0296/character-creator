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

  /* ---------- A2: recognition of a sheet as a creation draft, the level-2 restore plan and HP inference ----------
     Dependencies are injected (see depsOf). Browser: LssImport.recognize(entry, {config, rules: CharacterRules, creation: CreationOptions,
     levelup: LevelUpRules, spellIds: LssExport.SPELL_IDS, spellData: LevelUpData.spells}). Node: spellData defaults to levelup-data.js. */
  const ABILITY_IDS = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
  const ABILITY_CODES = {str: 'strength', dex: 'dexterity', con: 'constitution', int: 'intelligence', wis: 'wisdom', cha: 'charisma'};
  const STANDARD_SCORES = [8, 10, 12, 13, 14, 15];
  const POINT_COST = {8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9};
  // Alignment abbreviations (normalizeLabel form). ИН is the "true neutral" abbreviation.
  const ALIGNMENT_ABBR = {зд: 'lawful-good', нд: 'neutral-good', хд: 'chaotic-good', зн: 'lawful-neutral', н: 'neutral', ин: 'neutral', хн: 'chaotic-neutral', зз: 'lawful-evil', нз: 'neutral-evil', хз: 'chaotic-evil'};
  // Subclass-type groups, plain or prefixed by a multiclass entry ("cleric:creation_domain").
  const SUBCLASS_GROUP = /(^|:)creation_(?:domain|origin|patron)$|(^|:)subclass$/;
  const DRAGON_GROUP = /(^|:)creation_(?:dragon|dragonborn_ancestry)$/;
  const ANCESTRY_GROUP = /(^|:)creation_dragonborn_ancestry$/;
  // Generic head words of a subclass text ("Домен Жизни", "Школа: Военная магия").
  const SUBCLASS_HEAD = /^(?:домен|школа|круг|коллегия|путь|архетип|покровитель|происхождение|клятва)\s*:?\s*/i;
  const REPLACEMENT_GROUP = /(^|:)(?:spell_remove|spell_add|cantrip_remove|cantrip_add|invocation_remove|invocation_add|bonus_remove|bonus_add|infusion_remove|infusion_add)$/;
  const FEAT_SPELL_GROUP = /(^|:)creation_(?:nature_cantrip|feat_cantrips|feat_spells)$/;
  // Subclass-domain cantrips (cleric Arcana, Trickery...): named on subclass lines, so they are granted cards for the sheet.
  const DOMAIN_CANTRIP_GROUP = /(^|:)creation_domain_cantrips$/;
  // Groups that take cantrips: a cantrip one of them holds is not a candidate for another.
  const CANTRIP_GROUP = /(^|:)creation_(?:cantrips|domain_cantrips|nature_cantrip|feat_cantrips)$/;
  // Subclass bonus cantrips, granted by the subclass (levelup-rules: bonus_cantrip, illusion_cantrip, archer_cantrip, giant_cantrip, guidance_bonus, tome_cantrips).
  const BONUS_CANTRIP_GROUP = /(^|:)(?:bonus_cantrip|illusion_cantrip|archer_cantrip|giant_cantrip|guidance_bonus|tome_cantrips)$/;
  const PREPARED_GROUP = /(^|:)prepared$/;
  const INVOCATION_GROUP = /(^|:)invocations$/;
  const STYLE_GROUP = /(^|:)style$/;
  const ENTRY_SKILL_GROUP = /(^|:)entry_skill$/;
  // A spell line whose parenthesis names a grant (racial, feat, ritual, invocation, no slot) is not a class pick.
  const GRANT_NOTE = /расов|черта|ритуал|invocation|без ячейки/i;
  const finite = v => typeof v === 'number' && Number.isFinite(v);
  const values = v => Array.isArray(v) ? v : v === undefined || v === null || v === '' ? [] : [v];
  const sameList = (a, b) => JSON.stringify(values(a)) === JSON.stringify(values(b));

  // Config options of a page (race, background, class, alignment...). Emoji in labels are dropped by normalizeLabel.
  function optionsOf(config, pageId, elementId) {
    const page = (config?.pages || []).find(p => p.id === pageId);
    if (!page) return [];
    if (elementId === undefined) return Array.isArray(page.options) ? page.options : [];
    return (page.elements || []).find(e => e.id === elementId)?.options || [];
  }

  // Spell data: deps.spellData, then the browser global LevelUpData, then (Node only) levelup-data.js.
  function depsOf(deps) {
    const d = deps || {};
    if (!d.config || !d.rules || !d.creation || !d.levelup || !d.spellIds) throw new Error('LssImport: нужны зависимости правил: config, rules, creation, levelup, spellIds.');
    let spellData = d.spellData || globalThis.LevelUpData?.spells;
    if (!spellData && typeof module === 'object' && module.exports) spellData = require('./levelup-data.js').spells;
    if (!spellData) throw new Error('LssImport: не переданы данные заклинаний: передайте deps.spellData (LevelUpData.spells).');
    return {config: d.config, rules: d.rules, creation: d.creation, levelup: d.levelup, spellIds: d.spellIds, spellData};
  }

  // 0 (none), 1 (proficient) or 2 (expertise). Sheets write true/false, 0/1/2 or numeric strings.
  function profLevel(v) {
    if (v === true) return 1;
    const n = typeof v === 'string' ? num(v) : v;
    return finite(n) ? Math.floor(n) : 0;
  }

  /* Match a label against options. Exact normalized label first; then a prefix of the whole label or of one of its words
     (abbreviation, status 'check'); several prefix hits are ambiguous and match nothing. `minPrefix` is the shortest abbreviation. */
  function matchOption(text, options, minPrefix = 4) {
    const q = normalizeLabel(text);
    if (!q) return {option: null, status: 'none'};
    const labelled = options.map(option => ({option, n: normalizeLabel(option.label)})).filter(x => x.n);
    const exact = labelled.filter(x => x.n === q);
    if (exact.length === 1) return {option: exact[0].option, status: 'recognized'};
    if (exact.length > 1) return {option: null, ambiguous: exact.map(x => x.option), status: 'check'};
    if (q.length < minPrefix) return {option: null, status: 'none'};
    const prefix = labelled.filter(x => x.n.startsWith(q) || x.n.split(' ').some(word => word.startsWith(q)));
    if (prefix.length === 1) return {option: prefix[0].option, status: 'check'};
    if (prefix.length > 1) return {option: null, ambiguous: prefix.map(x => x.option), status: 'check'};
    return {option: null, status: 'none'};
  }

  // "Полурослик (к)" -> base «Полурослик» plus remainder «к». The whole text is tried first.
  function matchWithRemainder(text, options, minPrefix) {
    const whole = matchOption(text, options, minPrefix);
    if (whole.option || whole.ambiguous) return {...whole, remainder: null};
    const m = /^(.*?)\s*\((.+)\)\s*$/.exec(String(text));
    if (m) {
      const base = matchOption(m[1], options, minPrefix);
      if (base.option) return {...base, status: 'check', remainder: m[2].trim()};
    }
    return {...whole, remainder: null};
  }

  // Subclass text without its generic head word, then matched like any label: «Драконья кровь (медный)» leaves «медный».
  // Grammatical case («Жизни» for «Жизнь», «Школы» for «Школа»): each word agrees with the label on its first four letters.
  // Names that share no stem with the label: the wizard's War school is «Военная магия» (value war), written «Войны» in sheets.
  const SUBCLASS_ALIASES = {войны: 'war', война: 'war'};
  function matchSubclass(text, options) {
    const core = String(text || '').trim().replace(SUBCLASS_HEAD, '').trim();
    const alias = SUBCLASS_ALIASES[normalizeLabel(core)];
    const aliased = alias ? options.find(o => o.value === alias) : null;
    if (aliased) return {option: aliased, status: 'check', remainder: null};
    const hit = matchWithRemainder(core, options, 4);
    if (hit.option || hit.ambiguous || !core) return hit;
    const q = normalizeLabel(core.replace(/\(.*$/, '')).split(' ').filter(Boolean);
    const fits = options.filter(o => {
      const l = normalizeLabel(o.label).split(' ').filter(Boolean);
      return l.length === q.length && q.every((w, i) => w.length >= 4 && l[i].slice(0, 4) === w.slice(0, 4));
    });
    return fits.length === 1 ? {option: fits[0], status: 'check', remainder: null} : hit;
  }

  /* Race from the sheet: "Раса — Подраса", "Раса (подраса)", "Эльф — астральный" (the whole label «астральный эльф» first),
     only a subrace, or "Драконорожд. (Медн.)". Leftover text is returned for the race-related groups. Leftovers mean status check. */
  function resolveRace(raceText, config) {
    const races = optionsOf(config, 'race');
    const text = String(raceText || '').trim();
    const out = {race: null, sub: null, status: 'none', leftovers: [], ambiguous: null};
    if (!text) return out;
    const dash = text.split(/\s+[—–-]\s+/).map(s => s.trim()).filter(Boolean);
    const paren = /^(.*?)\s*\((.+)\)\s*$/.exec(text);
    const halves = dash.length === 2 ? dash : paren ? [paren[1].trim(), paren[2].trim()] : null;
    if (halves && halves[0] && halves[1]) {
      const whole = matchOption(`${halves[1]} ${halves[0]}`, races, 99);
      if (whole.option) { out.race = whole.option; out.status = 'recognized'; return out; }
    }
    let head = matchWithRemainder(dash[0] || text, races, 4);
    // «Дварф горный»: no separator; the first word is the race, the rest is the subrace text.
    const words = text.split(/\s+/);
    let spaced = null;
    if (!head.option && dash.length === 1 && !paren && words.length > 1) {
      const first = matchOption(words[0], races, 4);
      if (first.option) { head = {...first, remainder: null}; spaced = words.slice(1).join(' '); }
    }
    if (head.option) {
      out.race = head.option;
      out.status = head.status;
      const subs = head.option.suboptions || [];
      // «Эльф — Тёмный — лишнее»: the first piece after the race that matches is the subrace, every other piece is a leftover.
      const subTexts = [...dash.slice(1), spaced, head.remainder].filter(Boolean);
      for (const subText of subTexts) {
        const hit = !out.sub && subs.length ? matchOption(subText, subs, 1) : {option: null};
        if (hit.option) { out.sub = hit.option; if (hit.status === 'check') out.status = 'check'; }
        else out.leftovers.push(subText);
      }
    } else {
      // Only a subrace: every race whose subraces match. Several races (e.g. «Лесной») are ambiguous: nothing is picked.
      const found = races.map(race => ({race, hit: matchWithRemainder(text, race.suboptions || [], 4)})).filter(x => x.hit.option);
      if (found.length === 1) {
        out.race = found[0].race; out.sub = found[0].hit.option; out.status = 'check';
        if (found[0].hit.remainder) out.leftovers.push(found[0].hit.remainder);
      } else if (found.length > 1) {
        out.ambiguous = found.map(x => x.race.label); out.status = 'check';
      } else out.leftovers.push(text);
    }
    if (out.leftovers.length && out.status === 'recognized') out.status = 'check';
    return out;
  }

  // Subclass of one class from charSubclass: "Жрец: Жизнь / Волшебник: Школа" for multiclass, plain text for one class.
  function subclassFor(classLabel, text) {
    const raw = String(text || '').trim();
    if (!raw) return '';
    // «Класс: Подкласс» counts only when the text before the colon is this class; «Домен: Света» is a head word and stays whole.
    const own = part => {
      const at = part.indexOf(':');
      return at > 0 && normalizeLabel(part.slice(0, at)) === normalizeLabel(classLabel) ? part.slice(at + 1).trim() : null;
    };
    const parts = raw.split(/\s*\/\s*/).filter(Boolean);
    if (parts.length > 1) {
      // Multiclass: only the parts of this class.
      for (const part of parts) {
        const hit = own(part);
        if (hit !== null) return hit;
      }
      return '';
    }
    const hit = own(raw);
    return hit !== null ? hit : raw;
  }

  const sortedKey = list => [...list].sort().join(',');

  /* Classes of the sheet. The starting class is the one whose saving throws match the sheet (single known part: that one).
     Any part without a known class makes the result a check, and a multiclass sheet can only restore its SECOND known class
     (never the starting one). */
  function resolveClasses(entry, sheet, D) {
    const options = optionsOf(D.config, 'class', 'class');
    const seen = new Set();
    const parts = classLevels(entry.classText || '').map(part => {
      const m = matchOption(part.label, options, 4);
      // The same class twice («Воин 1 / Воин 1») is not a multiclass: the repeat is an unknown part.
      const id = m.option && !seen.has(m.option.value) ? m.option.value : null;
      if (id) seen.add(id);
      return {label: part.label, level: part.level, id, status: id ? m.status : 'duplicate', optionLabel: m.option ? m.option.label : ''};
    });
    const sheetSaves = sortedKey(Object.entries(isObject(sheet.saves) ? sheet.saves : {})
      .filter(([, v]) => profLevel(isObject(v) ? v.isProf : v) >= 1).map(([k]) => ABILITY_CODES[k]).filter(Boolean));
    const savesMatch = part => D.rules.CLASSES[part.id] && sortedKey(D.rules.CLASSES[part.id].saves) === sheetSaves;
    const known = parts.filter(p => p.id);
    const unknown = parts.filter(p => !p.id);
    let start = null, status = 'missing';
    if (parts.length === 1) {
      start = known[0] || null;
      status = start ? (start.status === 'check' ? 'check' : 'recognized') : 'missing';
    } else if (known.length) {
      const matching = known.filter(savesMatch);
      start = matching.length === 1 ? matching[0] : known[0];
      status = matching.length === 1 && !unknown.length ? 'recognized' : 'check';
    }
    const second = parts.length > 1 ? known.find(p => p !== start) || null : null;
    return {parts, unknown, start, second, status};
  }

  // Every creation ability input (creation context used by the UI): abilities with the derived bonuses.
  function creationContext(c, D) {
    const base = D.rules.finalAbilities(c);
    return {abilities: D.rules.finalAbilities(c, D.creation.derive(c, {abilities: base}))};
  }
  // Same shape the level-up UI passes (computeAdvancementContext in levelup-ui.js).
  function advancementContext(c, deps) {
    const D = depsOf(deps);
    const abilities = creationContext(c, D).abilities;
    const baseExtras = D.creation.derive(c, {abilities});
    return {abilities, baseExtras, proficiencies: D.rules.resolveProficiencies(c, baseExtras)};
  }
  const raceSpellIds = (c, D) => D.creation.raceSpells(c).map(s => s.id);
  const automaticIds = (c, D) => (c.class ? D.levelup.automaticSpells(c) : []);

  /* Ability base scores from the final sheet values. Each candidate is a race variant (human_stats / human_alt) and a bonus plan
     with a list of slot assignments. Base must lie in 3..18. Order: tier (exact standard array, then point buy, then manual),
     then variant order, then plan order, then the plan that puts bonuses into the highest final scores. */
  function solveAbilities(draft, finals, D) {
    const candidates = [];
    const features = draft.race === 'human' ? ['human_stats', 'human_alt'] : [null];
    features.forEach((feature, featureIndex) => {
      const probe = {...draft, ...(feature ? {human_feature: feature} : {})};
      const profile = D.rules.abilityProfile(probe);
      if (!profile || profile.missingVariant) return;
      const plans = profile.plans ? profile.plans.map(plan => ({id: plan.id, slots: plan.choiceSlots || []})) : [{id: null, slots: profile.choiceSlots || []}];
      plans.forEach((plan, planIndex) => {
        let combos = [[]];
        for (let i = 0; i < plan.slots.length; i++) {
          const next = [];
          for (const combo of combos) for (const id of ABILITY_IDS) {
            if (profile.distinct && combo.includes(id)) continue;
            if (profile.excludeFixed && profile.fixed?.[id]) continue;
            next.push([...combo, id]);
          }
          combos = next;
        }
        for (const combo of combos) {
          const bonus = {...(profile.fixed || {})};
          combo.forEach((id, i) => { bonus[id] = (bonus[id] || 0) + plan.slots[i]; });
          const base = {};
          let ok = true;
          for (const id of ABILITY_IDS) {
            const score = finals[id];
            if (!finite(score)) { ok = false; break; }
            base[id] = score - (bonus[id] || 0);
            if (!Number.isInteger(base[id]) || base[id] < 3 || base[id] > 18) { ok = false; break; }
          }
          if (!ok) continue;
          const sorted = ABILITY_IDS.map(id => base[id]).sort((a, b) => a - b);
          const cost = ABILITY_IDS.reduce((sum, id) => sum + (POINT_COST[base[id]] ?? 99), 0);
          const tier = sorted.join(',') === STANDARD_SCORES.join(',') ? 0 : ABILITY_IDS.every(id => POINT_COST[base[id]] !== undefined) && cost <= 27 ? 1 : 2;
          const plausibility = combo.reduce((sum, id, i) => sum + finals[id] * plan.slots[i], 0);
          candidates.push({featureIndex, planIndex, feature, plan: plan.id, combo, base, tier, plausibility, slots: plan.slots});
        }
      });
    });
    candidates.sort((a, b) => a.tier - b.tier || a.featureIndex - b.featureIndex || a.planIndex - b.planIndex || b.plausibility - a.plausibility);
    const best = candidates[0];
    if (!best) {
      // No valid split: keep the final values minus the fixed bonuses of the first variant; the wizard shows them for a check.
      const profile = D.rules.abilityProfile({...draft, ...(draft.race === 'human' ? {human_feature: 'human_stats'} : {})});
      const abilities = Object.fromEntries(ABILITY_IDS.map(id => [id, finite(finals[id]) ? finals[id] - (profile?.fixed?.[id] || 0) : undefined]));
      return {abilities, method: 'manual', check: true, feature: draft.race === 'human' ? 'human_stats' : null, plan: null, choices: {}, unresolved: true};
    }
    const choices = {};
    best.combo.forEach((id, i) => { choices['slot_' + i] = id; });
    return {abilities: best.base, method: ['standard', 'point_buy', 'manual'][best.tier], check: candidates.length > 1 || best.combo.length > 0,
      feature: best.feature, plan: best.plan, choices, unresolved: false};
  }

  // Spell names: English in brackets (always a spell), or the Russian label before the parenthesis when the parenthesis says it is a spell.
  function spellIndex(D) {
    const english = new Map(), russian = [];
    for (const [id, spell] of Object.entries(D.spellData)) {
      if (spell?.name && !english.has(normalizeLabel(spell.name))) english.set(normalizeLabel(spell.name), id);
      const ru = normalizeLabel(D.levelup.label(id));
      if (ru && /[а-я]/.test(ru)) russian.push([ru, id]);
    }
    return {english, russian};
  }
  function spellsInLine(line, index) {
    const bracket = /\[([^[\]]{2,80})\]/.exec(line);
    if (bracket) { const id = index.english.get(normalizeLabel(bracket[1])); return id ? [id] : []; }
    const cut = line.search(/[([]/);
    if (cut < 0) return [];
    // «Дубинка (1к4 …)» is a weapon: a Russian name counts only with a spell word in the parenthesis.
    if (!/заговор|уровень|круг/i.test(line.slice(cut))) return [];
    const head = normalizeLabel(line.slice(0, cut));
    const hit = index.russian.find(([ru]) => head === ru);
    return hit ? [hit[1]] : [];
  }
  /* Spell evidence of a sheet, as our ids. `all` is the ordered union; `granted` are the cards the sheet grants
     (racial, feat, invocation, slotless, ritual). `book` and `prepared` are the card lists. */
  // The source of a spell line: «Заговор (заговор; Иллюзия; …)» -> «иллюзия»; null when the line has no source segment.
  function lineSource(line) {
    const m = /\(([^()]*)\)/.exec(line);
    if (!m) return null;
    const seg = m[1].split(';');
    return seg.length > 1 ? normalizeLabel(seg[1]) : null;
  }
  function spellEvidence(entry, D, classLabels = []) {
    const wrapper = isObject(entry.wrapper) ? entry.wrapper : {};
    const sheet = isObject(entry.sheet) ? entry.sheet : {};
    const reverse = new Map(Object.entries(D.spellIds).map(([ours, lss]) => [lss, ours]));
    const ours = list => [...new Set(values(list).map(id => reverse.get(id)).filter(Boolean))];
    const book = ours(wrapper.spells?.book);
    const preparedCards = ours(wrapper.spells?.prepared);
    const grantedCards = ours([...values(wrapper.spells?.slotless), ...values(wrapper.spells?.granted).map(g => (isObject(g) ? g.id : g))]);
    const available = ours(sheet.spellsInfo?.available?.spells);
    const index = spellIndex(D);
    const names = [], grantedNames = [], preparedNames = [];
    const blocks = [...Object.keys(sheet.text || {}).filter(k => /^spells-level-\d+$/.test(k)).sort(), 'attacks'];
    for (const key of blocks) {
      for (const line of plainText(sheet.text?.[key]).split('\n')) {
        const ids = spellsInLine(line, index);
        // A spell whose source is not one of the sheet's classes (a subclass bonus cantrip, a race) is a grant, not a class pick.
        const source = lineSource(line);
        const foreign = source !== null && classLabels.length > 0 && !classLabels.includes(source);
        (GRANT_NOTE.test(line) || foreign ? grantedNames : names).push(...ids);
        // A prepared spell without an LSS card (ceremony, chromatic-orb...) is named only in its line: its status says «подготовлено».
        if (/;\s*подготовлено/.test(line)) preparedNames.push(...ids);
      }
    }
    const granted = [...new Set([...grantedCards, ...grantedNames])];
    const prepared = [...new Set([...preparedCards, ...preparedNames])];
    const all = [...new Set([...book, ...prepared, ...available, ...names, ...granted])];
    return {all, granted, book, prepared};
  }

  // Lines of a rich text block; empty lines dropped.
  const textLines = block => plainText(block).split('\n').map(line => line.trim()).filter(Boolean);
  // Lines normalized once (padded with spaces) and then searched for whole labels: a large trait block is not re-normalized per option.
  const padLines = lines => lines.map(line => ' ' + normalizeLabel(line) + ' ');
  const hasLabel = (paddedLines, label) => {
    const n = normalizeLabel(label);
    return n.length >= 4 && paddedLines.some(line => line.includes(' ' + n + ' '));
  };

  // Proficiencies from the sheet: skills (proficiency level), tools and languages from «Языки: …» / «Инструменты: …» in text.prof.
  function sheetProficiencies(sheet, D) {
    const skills = new Set(), expertise = new Set(), tools = new Set(), languages = new Set();
    const skillSource = isObject(sheet.skills) ? sheet.skills : isObject(sheet.abilities) ? sheet.abilities : {};
    for (const [key, value] of Object.entries(skillSource)) {
      const id = key.trim().replace(/\s+/g, '_');
      if (!Object.hasOwn(D.rules.SKILLS, id)) continue;
      const level = profLevel(isObject(value) ? value.isProf : value);
      if (level >= 1) skills.add(id);
      if (level >= 2) expertise.add(id);
    }
    const byLabel = table => new Map(Object.entries(table).map(([id, label]) => [normalizeLabel(label), id]));
    const toolIds = byLabel(D.rules.TOOLS), langIds = byLabel(D.rules.LANGUAGES);
    for (const line of textLines(sheet.text?.prof)) {
      const m = /^(Языки|Инструменты)\s*:\s*(.*)$/i.exec(line);
      if (!m) continue;
      const table = /^языки/i.test(m[1]) ? langIds : toolIds;
      for (const token of m[2].split(/[,;]/)) {
        const id = table.get(normalizeLabel(token));
        if (id) (table === langIds ? languages : tools).add(id);
      }
    }
    return {skills, expertise, tools, languages, all: new Set([...skills, ...tools, ...languages])};
  }

  // Maximum matching of proficiency slots to evidence items (augmenting paths): every slot gets one item if any assignment exists.
  function matchSlots(slots, items) {
    const owner = new Map(), slotItem = new Map();
    const place = (i, seen) => {
      for (const id of slots[i].options) {
        if (!items.includes(id) || seen.has(id)) continue;
        seen.add(id);
        if (!owner.has(id) || place(owner.get(id), seen)) { owner.set(id, i); slotItem.set(i, id); return true; }
      }
      return false;
    };
    slots.forEach((_, i) => place(i, new Set()));
    return new Map([...slotItem].map(([i, id]) => [slots[i].id, id]));
  }
  // Proficiency slots (background, class, race, human variant) receive the sheet's proficiencies; fixed grants are never reassigned.
  function placeProficiencies(character, ev, D) {
    let prof = D.rules.resolveProficiencies(character, D.creation.derive(character, creationContext(character, D)));
    for (let round = 0; round < 3; round++) {
      const held = new Set([...prof.skills, ...prof.tools, ...prof.languages]);
      const expertiseHeld = new Set(prof.expertise);
      const open = prof.slots.filter(s => !character.proficiencyChoices?.[s.id] && !(s.expertise || s.type === 'expertise'));
      const openExpertise = prof.slots.filter(s => !character.proficiencyChoices?.[s.id] && (s.expertise || s.type === 'expertise'));
      const placed = matchSlots(open, [...ev.all].filter(id => !held.has(id)));
      const placedExpertise = matchSlots(openExpertise, [...ev.expertise].filter(id => held.has(id) && !expertiseHeld.has(id)));
      if (!placed.size && !placedExpertise.size) break;
      character.proficiencyChoices = {...(character.proficiencyChoices || {}), ...Object.fromEntries([...placed, ...placedExpertise])};
      prof = D.rules.resolveProficiencies(character, D.creation.derive(character, creationContext(character, D)));
    }
    return prof;
  }

  /* Sheet -> creation draft (level 1, or the level-1 part of a level-2 sheet). Never mutates the entry.
     Unknown things stay unset and are listed in the report. */
  function recognize(entry, deps) {
    if (!isObject(entry) || !isObject(entry.support) || entry.support.ok !== true) {
      throw new Error(entry?.support?.message || 'Этот лист нельзя импортировать.');
    }
    const D = depsOf(deps);
    const sheet = isObject(entry.sheet) ? entry.sheet : {};
    const info = isObject(sheet.info) ? sheet.info : {};
    const text = isObject(sheet.text) ? sheet.text : {};
    const sourceLevel = entry.level;
    const report = [];
    const add = (field, label, status, value, source = '') => report.push({field, label, status, value: String(value ?? '').replace(EMOJI, '').replace(/\s+/g, ' ').trim(), source: String(source ?? '')});
    const character = {level: 1, proficiencyChoices: {}};

    if (Array.isArray(entry.warnings) && entry.warnings.some(w => w?.code === 'edition_mismatch')) {
      add('edition', 'Редакция листа', 'check', entry.sourceEdition, 'LSS');
    }

    // Classes -------------------------------------------------------------
    const cls = resolveClasses(entry, sheet, D);
    if (cls.start) character.class = cls.start.id;
    add('class', 'Класс', cls.status, cls.parts.map(p => p.level ? `${p.optionLabel || p.label} ${p.level}` : (p.optionLabel || p.label)).join(' / '), entry.classText);
    for (const part of cls.unknown) add('class_part', 'Класс не распознан', 'missing', part.label, entry.classText);
    const startLabel = cls.start ? cls.start.optionLabel || cls.start.label : '';
    const leftovers = [];

    // Race ---------------------------------------------------------------
    const race = resolveRace(entry.raceText, D.config);
    const raceLabel = race.race ? [race.race.label, race.sub?.label].filter(Boolean).join(' — ') : '';
    if (race.race) {
      character.race = race.race.value;
      if (race.sub) character.race_sub = race.sub.value;
      add('race', 'Раса', race.status, raceLabel, entry.raceText);
    } else if (race.ambiguous) add('race', 'Раса', 'check', `несколько рас с подрасой: ${race.ambiguous.join(', ')}`, entry.raceText);
    else add('race', 'Раса', 'missing', '', entry.raceText);
    if (race.race && race.race.suboptions?.length && !race.sub) add('race_sub', 'Подраса', 'missing', '', entry.raceText);
    leftovers.push(...race.leftovers);

    // Background, alignment ---------------------------------------------------
    const bgText = entry.backgroundText || '';
    const bg = matchWithRemainder(bgText, optionsOf(D.config, 'background'), 4);
    if (bg.option) { character.background = bg.option.value; add('background', 'Предыстория', bg.status, bg.option.label, bgText); }
    else add('background', 'Предыстория', 'missing', '', bgText);
    if (bg.remainder) leftovers.push(bg.remainder);

    const alignments = optionsOf(D.config, 'general', 'alignment');
    const alignText = plainText(info.alignment);
    // Stems: words of the label (hyphen = space), first three letters, «истинно» dropped: «Законно-доброе» = «Законно доброе».
    const alignStems = s => String(s ?? '').toLowerCase().replace(/ё/g, 'е').split(/[\s\-—–]+/).filter(w => w && w !== 'истинно').map(w => w.slice(0, 3)).sort().join(' ');
    const alignKey = alignStems(alignText);
    const alignHit = matchOption(alignText, alignments, 99).option
      || (ALIGNMENT_ABBR[normalizeLabel(alignText)] ? alignments.find(o => o.value === ALIGNMENT_ABBR[normalizeLabel(alignText)]) : null)
      || (alignKey ? alignments.find(o => alignStems(o.label) === alignKey) : null);
    if (alignHit) { character.alignment = alignHit.value; add('alignment', 'Мировоззрение', 'recognized', alignHit.label, alignText); }
    else if (alignText) add('alignment', 'Мировоззрение', 'missing', '', alignText);

    // Abilities ----------------------------------------------------------
    const stats = isObject(sheet.stats) ? sheet.stats : null;
    if (stats) {
      const finals = {};
      for (const [code, id] of Object.entries(ABILITY_CODES)) finals[id] = num(fieldValue(stats[code]?.score ?? stats[code]));
      const solved = solveAbilities({race: character.race, race_sub: character.race_sub}, finals, D);
      character.abilities = solved.abilities;
      character.abilityMethod = solved.method;
      if (solved.feature && character.race === 'human') {
        character.human_feature = solved.feature;
        add('human_feature', 'Вариант человека', solved.check ? 'check' : 'recognized', solved.feature === 'human_alt' ? 'Вариантный человек' : 'Увеличение характеристик', 'LSS');
      }
      if (solved.plan) character.abilityBonusPlan = solved.plan;
      if (Object.keys(solved.choices).length) character.abilityBonusChoices = solved.choices;
      const shown = ABILITY_IDS.map(id => `${finite(solved.abilities[id]) ? solved.abilities[id] : '?'}`).join(', ');
      const label = solved.method === 'standard' ? 'Стандартный набор' : solved.method === 'point_buy' ? 'Покупка характеристик' : 'Вручную';
      add('abilities', 'Характеристики', solved.unresolved || solved.check ? 'check' : 'recognized', `${label}: ${shown} (до расовых бонусов)`, 'Итоговые значения LSS');
    } else add('abilities', 'Характеристики', 'missing', '', 'stats');

    // Texts ----------------------------------------------------------------
    const name = plainText(sheet.name);
    if (name) { character.name = name.slice(0, 80); add('name', 'Имя персонажа', 'recognized', character.name, 'LSS'); }
    else add('name', 'Имя персонажа', 'missing', 'заполните в мастере', 'LSS');
    const subInfo = isObject(sheet.subInfo) ? sheet.subInfo : {};
    for (const key of ['age', 'height', 'weight']) {
      const value = plainText(subInfo[key]).slice(0, 40);
      if (value) character[key] = value;
    }
    for (const key of ['personality', 'ideals', 'bonds', 'flaws']) {
      const value = plainText(text[key]);
      if (value) character[key] = value.slice(0, 2000);
    }
    const concept = plainText(text.background).slice(0, 1000);
    if (concept) character.concept = concept;
    if (concept || character.personality) add('texts', 'Описание и черты', 'recognized', 'текст перенесён из LSS', 'LSS');

    // Creation choices -----------------------------------------------------
    const ev = sheetProficiencies(sheet, D);
    const spells = spellEvidence(entry, D, cls.parts.map(p => normalizeLabel(p.optionLabel || p.label)));
    const multiclass = cls.parts.length > 1;
    if (character.class) {
      // Phase A: subclass, ancestry and other non-spell groups to a fixed point. Only set groups are never revisited.
      const traitLines = padLines([...textLines(text.traits), ...textLines(text.features)]);
      const nonSpell = () => {
        let changed = false;
        for (const g of D.creation.getChoices(character, creationContext(character, D))) {
          if (g.section === 'spells' || values(character[g.id]).length) continue;
          if (SUBCLASS_GROUP.test(g.id)) {
            const sub = subclassFor(startLabel, entry.subclassText);
            const hit = matchSubclass(sub, g.options);
            if (hit.option) {
              character[g.id] = hit.option.value;
              add(g.id, g.label, hit.status, hit.option.label, entry.subclassText);
              if (hit.remainder) leftovers.push(hit.remainder);
              changed = true;
            }
          } else if (DRAGON_GROUP.test(g.id)) {
            for (const part of [...leftovers]) {
              const hit = matchOption(part, g.options, 4);
              if (!hit.option) continue;
              character[g.id] = hit.option.value;
              leftovers.splice(leftovers.indexOf(part), 1);
              add(g.id, g.label, hit.status, hit.option.label, entry.raceText || entry.subclassText);
              changed = true;
              break;
            }
            if (!values(character[g.id]).length && ANCESTRY_GROUP.test(g.id)) {
              // The ancestry line of the sheet's traits («Драконье наследие: Медный — кислота»).
              const option = g.options.find(o => hasLabel(traitLines, o.label));
              if (option) { character[g.id] = option.value; add(g.id, g.label, 'recognized', option.label, 'LSS: черты'); changed = true; }
            }
          }
        }
        return changed;
      };
      for (let round = 0; round < 4 && nonSpell(); round++);

      // Phase B: spells, only for a single-class sheet (a multiclass sheet mixes the classes' cards). Excluded: granted cards,
      // racial and automatic spells, so no class pool receives them. Preference: prepared cards first, book cards first for the book.
      const spellRows = new Map();
      if (!multiclass) {
        const raceIds = new Set(raceSpellIds(character, D));
        const automatic = new Set(automaticIds(character, D));
        // Granted cards and automatic spells never enter a class pool. Racial spells (a drow's dancing-lights) rank last:
        // they fill a group only when the class candidates cannot, since a class may legitimately choose the same spell.
        const hardExcluded = new Set([...spells.granted.filter(id => !raceIds.has(id)), ...automatic]);
        for (let pass = 0; pass < 6; pass++) {
          let changed = false;
          // Domain and feat/nature cantrips first: their names come from the subclass or feat lines, and a class cantrip group must not take them.
          const groups = D.creation.getChoices(character, creationContext(character, D)).filter(g => g.section === 'spells')
            .sort((a, b) => Number(!(DOMAIN_CANTRIP_GROUP.test(a.id) || FEAT_SPELL_GROUP.test(a.id))) - Number(!(DOMAIN_CANTRIP_GROUP.test(b.id) || FEAT_SPELL_GROUP.test(b.id))));
          for (const g of groups) {
            const options = new Set(g.options.map(o => o.value));
            const feat = FEAT_SPELL_GROUP.test(g.id) || DOMAIN_CANTRIP_GROUP.test(g.id);
            // A cantrip already held by another cantrip group is not a candidate here.
            const heldElsewhere = new Set(CANTRIP_GROUP.test(g.id) ? groups.filter(h => h.id !== g.id && CANTRIP_GROUP.test(h.id)).flatMap(h => values(character[h.id])) : []);
            const preferred = ids => {
              if (/(^|:)creation_spellbook$/.test(g.id)) return [...ids.filter(id => spells.book.includes(id)), ...ids.filter(id => !spells.book.includes(id))];
              if (PREPARED_GROUP.test(g.id) || /creation_prepared$/.test(g.id)) return [...ids.filter(id => spells.prepared.includes(id)), ...ids.filter(id => !spells.prepared.includes(id))];
              if (DOMAIN_CANTRIP_GROUP.test(g.id)) return [...ids.filter(id => spells.granted.includes(id)), ...ids.filter(id => !spells.granted.includes(id))];
              return ids;
            };
            const tier1 = spells.all.filter(id => options.has(id) && !heldElsewhere.has(id) && (feat || (!hardExcluded.has(id) && !raceIds.has(id))));
            const tier2 = feat ? [] : spells.all.filter(id => options.has(id) && !heldElsewhere.has(id) && raceIds.has(id) && !automatic.has(id));
            const pool = [...preferred(tier1), ...preferred(tier2)];
            if (!pool.length) continue;
            const picks = pool.slice(0, g.count);
            const value = g.count === 1 ? picks[0] : picks;
            spellRows.set(g.id, {pool: pool.length, picks: picks.length, count: g.count, label: g.label, ids: picks, racial: picks.filter(id => raceIds.has(id)).length});
            if (sameList(character[g.id], value)) continue;
            character[g.id] = value;
            changed = true;
          }
          if (!changed) break;
        }
        for (const [id, row] of spellRows) {
          const exact = row.picks === row.count && row.pool === row.count && !row.racial;
          const rest = sourceLevel === 2 && row.pool > row.picks ? ' Остальные заклинания листа добавятся при восстановлении 2-го уровня.' : '';
          const racial = row.racial ? ' Расовое заклинание взято без других кандидатов — проверьте.' : '';
          add(id, row.label, exact ? 'recognized' : 'check', row.ids.map(x => D.levelup.label(x)).join(', ') + (exact ? '' : ' — проверьте заклинания') + racial + rest, 'LSS');
        }
      }

      // Phase C: a value that is no longer an option of its group (the options moved) is dropped.
      for (const g of D.creation.getChoices(character, creationContext(character, D))) {
        const selected = values(character[g.id]);
        if (!selected.length) continue;
        const valid = selected.filter(id => g.options.some(o => o.value === id));
        if (valid.length === selected.length) continue;
        if (valid.length) character[g.id] = g.count === 1 ? valid[0] : valid;
        else delete character[g.id];
      }

      // Proficiencies, then the report of what the sheet could not answer.
      const prof = placeProficiencies(character, ev, D);
      const names = list => list.map(id => D.rules.LABELS[id] || id).join(', ');
      const placed = new Set([...prof.skills, ...prof.tools, ...prof.languages]);
      const unplacedSkills = [...ev.skills].filter(id => !placed.has(id));
      const unplaced = [...ev.all].filter(id => !placed.has(id));
      const proven = list => list.filter(id => ev.all.has(id));
      if (proven(prof.skills).length) add('skills', 'Навыки', unplacedSkills.length ? 'check' : 'recognized', names(proven(prof.skills)), 'LSS');
      if (proven(prof.tools).length) add('tools', 'Инструменты', 'recognized', names(proven(prof.tools)), 'LSS');
      if (proven(prof.languages).length) add('languages', 'Языки', 'recognized', names(proven(prof.languages)), 'LSS');
      if (unplaced.length) add('proficiencies_unplaced', 'Владения из листа без места в выборах', 'check', names(unplaced), 'LSS: проверьте в мастере');
      for (const slot of prof.slots) if (!character.proficiencyChoices[slot.id]) add('proficiency:' + slot.id, slot.label, 'missing', '', 'LSS: в листе нет подходящего владения');

      // Remaining creation groups: the sheet answers none of them, the user chooses (optional groups are not reported).
      const unresolved = D.creation.getChoices(character, creationContext(character, D)).filter(g => !g.optional && !values(character[g.id]).length);
      if (unresolved.some(g => g.section === 'equipment')) add('equipment', 'Снаряжение', 'missing', 'выберите стартовый комплект — инвентарь из LSS сохранится при выгрузке', 'LSS');
      for (const g of unresolved) {
        if (g.section === 'equipment') continue;
        if (SUBCLASS_GROUP.test(g.id) && entry.subclassText) add(g.id, g.label, 'check', subclassFor(startLabel, entry.subclassText), entry.subclassText);
        else add(g.id, g.label, 'missing', '', 'LSS: в листе нет этого выбора');
      }
    }
    if (leftovers.length && character.race) add('race_extra', 'Раса: не распознано', 'check', leftovers.join(', '), entry.raceText);

    // Level 2: data for the restore plan.
    let restore = null;
    if (sourceLevel === 2) {
      const restoreClass = multiclass ? cls.second : cls.start;
      const restoreLabel = restoreClass ? restoreClass.optionLabel || restoreClass.label : '';
      const lines = [...textLines(text.traits), ...textLines(text.features)];
      const hpMax = num(fieldValue(sheet.vitality?.['hp-max']));
      restore = {
        classId: restoreClass?.id || null,
        subclassText: restoreClass ? subclassFor(restoreLabel, entry.subclassText) : '',
        hpMax: finite(hpMax) ? hpMax : null,
        spellIds: spells.all,
        prepared: spells.prepared,
        grantedIds: spells.granted,
        skillIds: [...ev.skills],
        invocationTexts: lines
      };
      if (restore.classId) add('restore', 'Уровень 2 из листа', 'check', `${restoreLabel}: выборы 2-го уровня восстановятся при повышении`, entry.classText);
      else add('restore', 'Уровень 2 из листа', 'missing', 'Второй класс не распознан — выберите класс при повышении', entry.classText);
    }

    const original = sanitizeWrapper(entry.wrapper, entry.sheet);
    character.lssImport = {
      version: 1,
      sourceLevel,
      sourceName: entry.name,
      sourceEdition: entry.sourceEdition,
      importedAt: new Date().toISOString(),
      original: JSON.stringify(original).length > MAX_STORED_CHARS ? null : original,
      report,
      restore,
      warnings: Array.isArray(entry.warnings) ? entry.warnings.map(w => ({code: w.code, message: w.message})) : []
    };
    return {character, report, restore};
  }

  /* Level-2 advancement from the sheet: the pending advancement (step 0). Groups are filled only with sheet evidence:
     a group takes its candidates only when they all fit its remaining room (a choice between several is left to the user).
     Excluded from learning: cards already known or in the book, racial, automatic and granted spells. */
  function buildRestorePlan(character, context, deps) {
    const D = depsOf(deps);
    const restore = character?.lssImport?.restore;
    if (!restore) throw new Error('Нет данных для восстановления 2-го уровня: лист не 2-го уровня или не распознан.');
    if (!restore.classId) throw new Error('В листе не распознан класс 2-го уровня: выберите повышение вручную.');
    const L = D.levelup;
    let p = L.begin(character, context);
    if (restore.classId !== character.class) p = L.selectClass(character, p, restore.classId, context);
    const state = L.inspect(character, context).state;
    const racial = new Set(raceSpellIds(character, D));
    const granted = new Set([...(restore.grantedIds || [])].filter(id => !racial.has(id)));
    const automatic = new Set(automaticIds(character, D));
    const learnExcluded = new Set([...granted, ...automatic, ...values(state.known), ...values(state.book), ...values(state.cantrips)]);
    const prepareExcluded = new Set([...granted, ...automatic]);
    const order = restore.spellIds || [];
    const preparedOrder = restore.prepared && restore.prepared.length ? restore.prepared : order;
    const texts = (restore.invocationTexts || []).map(t => normalizeLabel(t));
    const inText = label => {
      const n = normalizeLabel(label);
      return n.length >= 4 && texts.some(t => (' ' + t + ' ').includes(' ' + n + ' '));
    };
    const subclassText = restore.subclassText || '';
    const remainder = /\(([^()]+)\)\s*$/.exec(subclassText)?.[1] || '';
    const heldSkills = new Set(context.proficiencies?.skills || []);
    const heads = new Set((restore.invocationTexts || []).map(t => normalizeLabel(t.split(':')[0])));

    const step = spellPhase => {
      let changed = false;
      const groups = L.getChoices(character, p, context);
      const active = new Set(groups.map(g => g.id));
      for (const key of Object.keys(p.choices)) if (!active.has(key)) delete p.choices[key];
      for (const g of groups) {
        if (REPLACEMENT_GROUP.test(g.id)) continue;
        const isSpell = g.section === 'spells';
        if (isSpell !== spellPhase) continue;
        const selected = values(p.choices[g.id]);
        if (selected.length >= g.count) continue;
        const opts = new Set(g.options.map(o => o.value));
        let cands = [];
        if (SUBCLASS_GROUP.test(g.id)) {
          const hit = matchSubclass(subclassText, g.options);
          if (hit.option) cands = [hit.option.value];
        } else if (DRAGON_GROUP.test(g.id)) {
          const hit = remainder ? matchOption(remainder, g.options, 4) : {option: null};
          if (hit.option) cands = [hit.option.value];
        } else if (INVOCATION_GROUP.test(g.id)) {
          // An invocation is a trait line whose name (before the colon) is the invocation label.
          cands = g.options.filter(o => heads.has(normalizeLabel(o.label))).map(o => o.value);
        } else if (STYLE_GROUP.test(g.id)) {
          cands = g.options.filter(o => inText(o.label)).map(o => o.value);
        } else if (ENTRY_SKILL_GROUP.test(g.id)) {
          const skills = (restore.skillIds || []).filter(id => opts.has(id) && !heldSkills.has(id));
          if (skills.length === 1) cands = skills;
        } else if (isSpell && BONUS_CANTRIP_GROUP.test(g.id)) {
          // Subclass bonus cantrips (Land druid, Illusion wizard) are exported as granted cards: they are the candidates here.
          const bonusExcluded = new Set([...automatic, ...values(state.known), ...values(state.book), ...values(state.cantrips)]);
          cands = (restore.grantedIds || []).filter(id => opts.has(id) && !bonusExcluded.has(id) && !racial.has(id));
        } else if (isSpell) {
          const prepared = PREPARED_GROUP.test(g.id);
          const excluded = prepared ? prepareExcluded : learnExcluded;
          const src = prepared ? preparedOrder : order;
          // Class candidates first; racial spells only when the class candidates cannot fill the group.
          cands = [...src.filter(id => opts.has(id) && !excluded.has(id) && !racial.has(id)), ...src.filter(id => opts.has(id) && !excluded.has(id) && racial.has(id))];
        }
        cands = [...new Set(cands)].filter(id => !selected.includes(id));
        if (!cands.length || cands.length > g.count - selected.length) continue;
        p.choices[g.id] = g.count === 1 ? cands[0] : [...selected, ...cands];
        changed = true;
      }
      return changed;
    };
    for (let round = 0; round < 8; round++) {
      const a = step(false);
      const b = step(true);
      if (!a && !b) break;
    }

    // HP: hp-max of the sheet minus the level-1 maximum, inverted through levelHp (plan flag lssHpInferred is set by the UI, not here).
    const base = L.derive(character, context, context.baseExtras || {});
    const hpBefore = D.rules.derivedStats(character, base).hp;
    const info = L.hpGain(character, p, context);
    const inferred = inferHpRoll({hpMax: restore.hpMax, hpBefore, constitutionMod: info.constitution, bonus: info.bonus, die: info.die});
    p.hp = inferred || {mode: 'average', value: info.die / 2 + 1};
    p.lssHpInferred = !!inferred;
    return {...p, step: 0};
  }

  /* Inverse of R.levelHp = max(1, raw + CON) + bonus. Returns {mode, value} for a single raw die result (1..die),
     'average' when the result is die/2 + 1, and null when the gain does not determine one result (floor at 1 with several raw values)
     or when it is out of range. */
  function inferHpRoll({hpMax, hpBefore, constitutionMod, bonus = 0, die} = {}) {
    if (![hpMax, hpBefore, constitutionMod, bonus, die].every(finite) || die < 2) return null;
    const inner = hpMax - hpBefore - bonus;
    if (inner < 1) return null;
    let raw;
    if (inner > 1) raw = inner - constitutionMod;
    else {
      const candidates = [];
      for (let r = 1; r <= die; r++) if (r + constitutionMod <= 1) candidates.push(r);
      if (candidates.length !== 1) return null;
      raw = candidates[0];
    }
    if (!Number.isInteger(raw) || raw < 1 || raw > die) return null;
    return {mode: raw === die / 2 + 1 ? 'average' : 'roll', value: raw};
  }

  return {MAX_FILE_CHARS, MAX_STORED_CHARS, readLssFile, num, plainText, htmlToText, normalizeLabel, sanitizeWrapper, classLevels,
    recognize, buildRestorePlan, inferHpRoll, advancementContext, solveAbilities};
});
