/* Interface pieces shared by the wizard: stepper, character sheet, race picker and ability board. */

const CLASS_GUIDE = {
  barbarian: {
    genitive: 'варвара',
    order: ['strength', 'constitution', 'dexterity', 'wisdom', 'charisma', 'intelligence'],
    tip: 'Варвар бьёт Силой — от неё зависят попадание и урон. Телосложение даёт хиты и КД без доспехов, Ловкость — КД и инициативу.'
  },
  bard: {
    genitive: 'барда',
    order: ['charisma', 'dexterity', 'constitution', 'wisdom', 'intelligence', 'strength'],
    tip: 'Бард колдует Харизмой — от неё зависят Сл заклинаний, атака и Вдохновение барда. Ловкость защищает в лёгком доспехе, Телосложение даёт хиты.'
  },
  fighter: {
    genitive: 'воина',
    order: ['strength', 'constitution', 'dexterity', 'wisdom', 'charisma', 'intelligence'],
    primary: ['strength', 'dexterity'],
    secondary: ['constitution'],
    tip: 'Воин опирается на Силу (тяжёлое оружие и доспехи) или Ловкость (луки и фехтовальное оружие). Телосложение даёт хиты.'
  },
  wizard: {
    genitive: 'волшебника',
    order: ['intelligence', 'constitution', 'dexterity', 'wisdom', 'charisma', 'strength'],
    tip: 'Волшебник колдует Интеллектом — от него зависят Сл заклинаний и бонус атаки. Дальше важны Телосложение (хиты) и Ловкость (КД и инициатива).'
  },
  druid: {
    genitive: 'друида',
    order: ['wisdom', 'constitution', 'dexterity', 'intelligence', 'charisma', 'strength'],
    tip: 'Друид колдует Мудростью. Телосложение помогает удерживать концентрацию, Ловкость — КД в лёгком или среднем доспехе.'
  },
  cleric: {
    genitive: 'жреца',
    order: ['wisdom', 'constitution', 'strength', 'dexterity', 'charisma', 'intelligence'],
    tip: 'Жрец колдует Мудростью. Телосложение даёт хиты и концентрацию, Сила нужна в тяжёлом доспехе и ближнем бою.'
  },
  artificer: {
    genitive: 'изобретателя',
    order: ['intelligence', 'constitution', 'dexterity', 'wisdom', 'charisma', 'strength'],
    tip: 'Изобретатель колдует Интеллектом. Телосложение даёт хиты, Ловкость — КД в среднем доспехе и меткость с арбалетом.'
  },
  warlock: {
    genitive: 'колдуна',
    order: ['charisma', 'constitution', 'dexterity', 'wisdom', 'intelligence', 'strength'],
    tip: 'Колдун колдует Харизмой — она определяет Сл заклинаний и меткость Мистического заряда. Телосложение и Ловкость отвечают за живучесть.'
  },
  monk: {
    genitive: 'монаха',
    order: ['dexterity', 'wisdom', 'constitution', 'strength', 'intelligence', 'charisma'],
    tip: 'Монах дерётся Ловкостью, а Мудрость вместе с Ловкостью даёт КД без доспехов. Телосложение — хиты.'
  },
  paladin: {
    genitive: 'паладина',
    order: ['strength', 'charisma', 'constitution', 'wisdom', 'dexterity', 'intelligence'],
    tip: 'Паладин бьёт Силой, а Харизма усиливает его заклинания и ауры. Телосложение даёт хиты.'
  },
  rogue: {
    genitive: 'плута',
    order: ['dexterity', 'constitution', 'wisdom', 'intelligence', 'charisma', 'strength'],
    tip: 'Плут атакует Ловкостью — она же даёт КД, инициативу и Скрытность. Телосложение даёт хиты, Мудрость — Восприятие.'
  },
  ranger: {
    genitive: 'следопыта',
    order: ['dexterity', 'wisdom', 'constitution', 'strength', 'intelligence', 'charisma'],
    tip: 'Следопыт стреляет и фехтует Ловкостью, а заклинания со 2-го уровня использует через Мудрость. Телосложение даёт хиты.'
  },
  sorcerer: {
    genitive: 'чародея',
    order: ['charisma', 'constitution', 'dexterity', 'wisdom', 'intelligence', 'strength'],
    tip: 'Чародей колдует Харизмой. Телосложение даёт хиты и помогает удерживать концентрацию, Ловкость — КД и инициативу.'
  }
};

const RACE_SOURCES = {
  human: 'PHB', elf: 'PHB', dwarf: 'PHB', halfling: 'PHB', gnome: 'PHB', dragonborn: 'PHB',
  'half-elf': 'PHB', 'half-orc': 'PHB', tiefling: 'PHB',
  aarakocra: 'EEPC', genasi: 'EEPC', goliath: 'EEPC',
  aasimar: 'VGM', bugbear: 'VGM', goblin: 'VGM', hobgoblin: 'VGM', firbolg: 'VGM', kenku: 'VGM',
  kobold: 'VGM', lizardfolk: 'VGM', orc: 'VGM', tabaxi: 'VGM', triton: 'VGM', 'yuan-ti-pureblood': 'VGM',
  gith: 'MTF',
  vedalken: 'GGR', 'simic-hybrid': 'GGR', centaur: 'GGR', loxodon: 'GGR', minotaur: 'GGR',
  changeling: 'ERLW', kalashtar: 'ERLW', shifter: 'ERLW', warforged: 'ERLW',
  leonin: 'MOT', satyr: 'MOT',
  autognome: 'AAG', 'astral-elf': 'AAG', giff: 'AAG', hadozee: 'AAG', plasmoid: 'AAG', 'thri-kreen': 'AAG',
  fairy: 'WBtW', harengon: 'WBtW',
  owlin: 'SCC', kender: 'DSotDQ', tortle: 'TTP', locathah: 'LR', grung: 'OGA', verdan: 'AI'
};

const ABILITY_EFFECTS = {
  strength: 'атака и урон в ближнем бою, Атлетика, переносимый вес',
  dexterity: 'КД, дальние атаки, Акробатика, Скрытность, Ловкость рук',
  constitution: 'хиты и концентрация на заклинаниях',
  intelligence: 'Магия, История, Анализ, Природа, Религия',
  wisdom: 'Восприятие, Проницательность, Медицина, Выживание',
  charisma: 'Убеждение, Обман, Запугивание, Выступление'
};

const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];
const POINT_BUY_COSTS = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 };
const POINT_BUY_BUDGET = 27;
const ABILITY_METHODS = [
  { value: 'standard', label: 'Стандартный набор', hint: '15, 14, 13, 12, 10, 8 — проще всего', base: 'набор' },
  { value: 'point_buy', label: 'Покупка за 27 очков', hint: 'Тонкая настройка каждого значения', base: 'покупка' },
  { value: 'manual', label: 'Броски 4к6', hint: 'Введите результаты своих бросков', base: 'бросок' }
];

let sheetExpanded = false;
let abilityPick = null;
let liveRefs = null;
let liveRefreshTimer = null;
let saveIndicatorNode = null;
let actionBarObserver = null;
const raceViewState = { filter: 'all', query: '', sort: 'fit' };

function abilityInfo(id) {
  return ABILITY_LABELS.find(ability => ability.id === id) || { id, short: id, label: id };
}

function plainLabel(label) {
  return String(label || '').replace(/^[^\p{L}\p{N}]+/u, '').trim();
}

const RU_VOWELS = 'аеёиоуыэюя';

/* Soft hyphens let long names wrap by syllable in browsers without Russian hyphenation dictionaries. */
function softHyphenate(text) {
  return String(text || '').replace(/[А-Яа-яЁё]{11,}/g, word => {
    const lower = word.toLowerCase();
    const isVowel = index => RU_VOWELS.includes(lower[index]);
    const isSign = index => 'йьъ'.includes(lower[index]);
    const hasVowel = (from, to) => [...lower.slice(from, to)].some(char => RU_VOWELS.includes(char));
    let result = word[0];
    for (let index = 1; index < word.length; index++) {
      const consonant = !isVowel(index) && !isSign(index);
      const doubled = consonant && lower[index] === lower[index - 1];
      const afterSyllable = (isVowel(index - 1) || isSign(index - 1)) && consonant && lower[index] !== lower[index + 1];
      const breakable = index >= 2 && word.length - index >= 3
        && (afterSyllable || doubled)
        && hasVowel(0, index) && hasVowel(index, word.length);
      result += (breakable ? '\u00ad' : '') + word[index];
    }
    return result;
  });
}

function signedValue(value) {
  return value >= 0 ? `+${value}` : String(value);
}

function hasAbilityValue(id) {
  const value = character.abilities && character.abilities[id];
  return value !== undefined && value !== null && value !== '';
}

function getClassGuide(classId) {
  const guide = CLASS_GUIDE[classId];
  if (!guide) return null;
  return {
    ...guide,
    primary: guide.primary || guide.order.slice(0, 1),
    secondary: guide.secondary || guide.order.slice(1, 3)
  };
}

function getSelectedSubrace(race) {
  return race && race.suboptions ? race.suboptions.find(option => option.value === character.race_sub) || null : null;
}

function focusByKey(root, key) {
  if (!key || !root) return;
  const target = root.querySelector(`[data-focus-key="${key}"]`);
  if (target && typeof target.focus === 'function') target.focus({ preventScroll: true });
}

/* ---------- Race fit ---------- */

function raceBonusVariants(rule) {
  const profile = rule && rule.abilities ? rule.abilities : {};
  const bases = profile.variantField ? Object.values(profile.variants || {}) : [profile];
  const subraces = Object.entries(rule && rule.subraces || {});
  const variants = [];
  bases.forEach(base => {
    const slotSets = base.plans ? base.plans.map(plan => plan.choiceSlots || []) : [base.choiceSlots || []];
    (subraces.length ? subraces : [[null, null]]).forEach(([subId, sub]) => {
      const fixed = { ...(base.fixed || {}) };
      Object.entries(sub && sub.abilities || {}).forEach(([id, amount]) => { fixed[id] = (fixed[id] || 0) + amount; });
      slotSets.forEach(slots => variants.push({
        subId,
        fixed,
        slots: [...slots].sort((a, b) => b - a),
        excludeFixed: !!base.excludeFixed
      }));
    });
  });
  return variants;
}

function scoreRaceVariant(variant, guide) {
  const allowed = id => !(variant.excludeFixed && variant.fixed[id]);
  const best = (ids, slot) => Math.max(0, ...ids.map(id => (variant.fixed[id] || 0) + (slot && allowed(id) ? slot : 0)));
  const [first = 0, second = 0] = variant.slots;
  const primaryFixed = best(guide.primary, 0);
  const primary = best(guide.primary, first);
  const secondaryIds = guide.secondary.filter(id => !guide.primary.includes(id));
  const secondary = best(secondaryIds, primary > primaryFixed ? second : first);
  return { primary, secondary, score: primary * 10 + secondary };
}

function getRaceFit(rule, guide) {
  if (!rule || !guide) return null;
  let best = null;
  const bySubrace = {};
  raceBonusVariants(rule).forEach(variant => {
    const result = { ...scoreRaceVariant(variant, guide), subId: variant.subId };
    if (variant.subId && (!bySubrace[variant.subId] || bySubrace[variant.subId] < result.score)) bySubrace[variant.subId] = result.score;
    if (!best || result.score > best.score) best = result;
  });
  if (!best) return null;
  const scores = Object.values(bySubrace);
  const bestSubrace = scores.length > 1 && Math.min(...scores) < best.score ? best.subId : null;
  return {
    ...best,
    bestSubrace,
    recommended: best.primary >= 2 || (best.primary >= 1 && best.secondary >= 1)
  };
}

function describeSlots(slots) {
  if (!slots || !slots.length) return '';
  if (slots.length === 1) return `${signedValue(slots[0])} на выбор`;
  if (slots.every(slot => slot === 1)) return `+1 к ${slots.length === 2 ? 'двум' : 'трём'} на выбор`;
  return `${slots.map(signedValue).join(' и ')} на выбор`;
}

function describeBonusProfile(profile) {
  const fixed = Object.entries(profile.fixed || {});
  if (fixed.length === 6 && fixed.every(([, amount]) => amount === fixed[0][1])) return `${signedValue(fixed[0][1])} ко всем`;
  const parts = fixed.map(([id, amount]) => `${abilityInfo(id).short} ${signedValue(amount)}`);
  if (profile.choiceSlots) parts.push(describeSlots(profile.choiceSlots));
  return parts.join(', ');
}

function raceBonusChips(rule, guide) {
  const chips = [];
  const profile = rule && rule.abilities ? rule.abilities : {};
  if (profile.variantField) {
    const text = Object.values(profile.variants || {}).map(describeBonusProfile).filter(Boolean).join(' или ');
    chips.push({ text: text || 'Бонусы на выбор', tone: 'muted' });
  } else {
    Object.entries(profile.fixed || {}).forEach(([id, amount]) => chips.push({
      text: `${abilityInfo(id).short} ${signedValue(amount)}`,
      tone: guide && guide.primary.includes(id) ? 'key' : 'base'
    }));
    if (profile.choiceSlots) chips.push({ text: describeSlots(profile.choiceSlots), tone: 'muted' });
    if (profile.plans) chips.push({ text: `${profile.plans.map(plan => plan.choiceSlots.map(signedValue).join('/')).join(' или ')} на выбор`, tone: 'muted' });
  }
  if (Object.values(rule && rule.subraces || {}).some(sub => sub.abilities && Object.keys(sub.abilities).length)) {
    chips.push({ text: '+ подраса', tone: 'muted' });
  }
  return chips;
}

function raceDarkvision(rule) {
  if (!rule) return 0;
  if (rule.darkvision) return rule.darkvision;
  const subraces = Object.values(rule.subraces || {});
  return subraces.length && subraces.every(sub => sub.darkvision) ? Math.min(...subraces.map(sub => sub.darkvision)) : 0;
}

const VARIABLE_SIZE_RACES = ['harengon', 'owlin', 'hadozee', 'plasmoid', 'thri-kreen'];

function raceSize(raceId, rule) {
  if (!VARIABLE_SIZE_RACES.includes(raceId)) return rule.size === 'small' ? 'small' : 'medium';
  return character.race === raceId && ['small', 'medium'].includes(character.creation_size) ? character.creation_size : 'choice';
}

function raceTraitParts(rule, raceId) {
  if (!rule) return [];
  const parts = [`${rule.speed || 30} фт`];
  const darkvision = raceDarkvision(rule);
  if (darkvision) parts.push(`тёмное зрение ${darkvision}`);
  if (rule.fly) parts.push(`полёт ${rule.fly}`);
  if (rule.swim) parts.push(`плавание ${rule.swim}`);
  if (rule.climb) parts.push(`лазание ${rule.climb}`);
  const size = raceSize(raceId, rule);
  if (size === 'small') parts.push('маленький');
  if (size === 'choice') parts.push('маленький или средний');
  return parts;
}

function raceTraitItems(rule, subRule, raceId) {
  const pick = key => (subRule && subRule[key]) || rule[key];
  const items = [];
  const movement = [`${pick('speed') || 30} фт`];
  if (pick('fly')) movement.push(`полёт ${pick('fly')} фт`);
  if (pick('swim')) movement.push(`плавание ${pick('swim')} фт`);
  if (pick('climb')) movement.push(`лазание ${pick('climb')} фт`);
  items.push(['Скорость', movement.join(', ')]);
  if (pick('darkvision')) items.push(['Тёмное зрение', `${pick('darkvision')} фт`]);
  items.push(['Размер', { small: 'Маленький', medium: 'Средний', choice: 'Маленький или средний, на выбор' }[raceSize(raceId, rule)]]);
  const languages = [...(rule.languages || []), ...(subRule && subRule.languages || [])];
  if (languages.length) items.push(['Языки', [...new Set(languages)].map(id => proficiencyLabel('language', id)).join(', ')]);
  const grants = [...(rule.grants || []), ...(subRule && subRule.grants || [])];
  if (grants.length) items.push(['Владения', grants.map(grant => proficiencyLabel(grant.type, grant.id)).join(', ')]);
  [...(rule.notes || []), ...(subRule && subRule.notes || [])].forEach(note => items.push([null, note]));
  return items;
}

/* ---------- Steps ---------- */

function validatePageAt(index) {
  const previous = currentPageIndex;
  try {
    currentPageIndex = index;
    return validateCurrentPage();
  } catch (error) {
    return [{ id: '', message: 'Проверьте этот шаг.' }];
  } finally {
    currentPageIndex = previous;
  }
}

function getStepSummary(page, index, errors, complete) {
  if (page.id === 'class') return plainLabel(getSelectedOption('class', character.class)?.label);
  if (page.id === 'race') {
    const race = getSelectedRace();
    if (!race) return '';
    const subrace = getSelectedSubrace(race);
    return plainLabel(subrace ? subrace.label : race.label);
  }
  if (page.id === 'background') return plainLabel(getSelectedOption('background', character.background)?.label);
  if (page.id === 'general') return (character.name || '').trim();
  if (page.id === 'abilities') {
    const filled = ABILITY_LABELS.filter(ability => hasAbilityValue(ability.id));
    if (!filled.length) return '';
    if (filled.length < 6) return `${filled.length} из 6 расставлено`;
    const guide = getClassGuide(character.class);
    const ids = guide ? guide.order.slice(0, 2) : [...filled].sort((a, b) => character.abilities[b.id] - character.abilities[a.id]).slice(0, 2).map(ability => ability.id);
    return ids.map(id => `${abilityInfo(id).short} ${getFinalAbilityValue(id)}`).join(' · ');
  }
  if (!complete && index > currentPageIndex) return '';
  return errors.length ? `осталось ${errors.length}` : 'готово';
}

function getStepStates(complete) {
  const states = config.pages.map((page, index) => {
    const errors = complete ? [] : validatePageAt(index);
    return { page, index, errors, valid: errors.length === 0, label: STEP_LABELS[page.id] || page.title };
  });
  const firstInvalid = states.findIndex(step => !step.valid);
  states.forEach(step => {
    const { index, valid } = step;
    step.current = !complete && index === currentPageIndex;
    step.complete = complete || (!step.current && valid && index < currentPageIndex);
    step.warning = !complete && !step.current && !valid && index < currentPageIndex;
    step.reachable = complete || index < currentPageIndex || firstInvalid === -1 || index <= firstInvalid;
    step.summary = getStepSummary(step.page, index, step.errors, complete);
  });
  return states;
}

function createStepperNode() {
  const nav = createElement('nav', 'stepper');
  nav.setAttribute('aria-label', 'Этапы создания персонажа');
  return nav;
}

function fillStepper(nav, steps, complete) {
  nav.innerHTML = '';
  const list = createElement('ol', 'stepper-list');
  steps.forEach(step => {
    const item = createElement('li', 'stepper-item');
    toggleClass(item, 'is-complete', step.complete);
    toggleClass(item, 'is-current', step.current);
    toggleClass(item, 'is-warning', step.warning);
    if (step.current) item.setAttribute('aria-current', 'step');

    const button = createElement('button', 'stepper-button');
    button.type = 'button';
    button.disabled = step.current || !step.reachable;
    const number = createElement('span', 'stepper-number', step.complete ? '✓' : step.warning ? '!' : String(step.index + 1));
    number.setAttribute('aria-hidden', 'true');
    button.appendChild(number);
    const text = createElement('span', 'stepper-text');
    text.appendChild(createElement('span', 'stepper-label', step.label));
    text.appendChild(createElement('span', 'stepper-summary', step.summary || '—'));
    button.appendChild(text);
    button.setAttribute('aria-label', `${step.label}${step.summary ? `: ${step.summary}` : ''}`);
    button.setAttribute('title', `${step.label}${step.summary ? ` — ${step.summary}` : ''}`);
    button.addEventListener('click', () => {
      if(typeof LevelUpRules!=='undefined'&&currentPageIndex>=config.pages.length&&!confirmProgressionResetForEdit(()=>{currentPageIndex=step.index;renderPage();scrollToPageTop();}))return;
      currentPageIndex = step.index;
      renderPage();
      scrollToPageTop();
    });
    item.appendChild(button);
    list.appendChild(item);
  });
  nav.appendChild(list);

  const percent = complete ? 100 : ((currentPageIndex + 1) / config.pages.length) * 100;
  const progress = createElement('div', 'progress-track');
  setAttributes(progress, {
    role: 'progressbar',
    'aria-label': 'Прогресс создания персонажа',
    'aria-valuemin': 0,
    'aria-valuemax': 100,
    'aria-valuenow': Math.round(percent)
  });
  const bar = createElement('div', 'progress-value');
  bar.style.width = `${percent}%`;
  progress.appendChild(bar);
  nav.appendChild(progress);
}

function updateActionStatus(node, errors) {
  if (!node) return;
  node.innerHTML = '';
  const ready = !errors.length;
  toggleClass(node, 'is-ready', ready);
  if (ready) {
    const last = currentPageIndex >= config.pages.length - 1;
    node.appendChild(createElement('strong', '', '✓ Всё готово'));
    node.appendChild(document.createTextNode(last ? ' — можно создавать карточку' : ' — можно идти дальше'));
    return;
  }
  node.appendChild(createElement('strong', '', `Осталось: ${errors.length}`));
  node.appendChild(document.createTextNode(` · ${errors[0].message}`));
}

/* ---------- Live refresh ---------- */

/* Sticky panels and scroll targets must stop above the sticky action bar, whose height depends on width and status text. */
function trackActionBarHeight(bar) {
  if (actionBarObserver) actionBarObserver.disconnect();
  actionBarObserver = null;
  if (typeof ResizeObserver === 'undefined' || !document.documentElement || !document.documentElement.style) return;
  if (!bar) {
    document.documentElement.style.setProperty('--actions-height', '0px');
    return;
  }
  const update = () => document.documentElement.style.setProperty('--actions-height', `${Math.ceil(bar.getBoundingClientRect().height)}px`);
  if (bar.isConnected) update();
  actionBarObserver = new ResizeObserver(update);
  actionBarObserver.observe(bar);
}

function markDraftSaved(saved) {
  if (!saveIndicatorNode) return;
  saveIndicatorNode.textContent = saved ? 'Черновик сохранён' : 'Автосохранение недоступно';
  toggleClass(saveIndicatorNode, 'is-off', !saved);
}

function cancelLiveRefresh() {
  if (liveRefreshTimer) clearTimeout(liveRefreshTimer);
  liveRefreshTimer = null;
}

function scheduleLiveRefresh() {
  if (!liveRefs || typeof setTimeout !== 'function') return;
  cancelLiveRefresh();
  liveRefreshTimer = setTimeout(refreshLiveParts, 60);
}

function refreshLiveParts() {
  liveRefreshTimer = null;
  if (!liveRefs || !config || currentPageIndex >= config.pages.length) return;
  try {
    const steps = getStepStates(false);
    fillStepper(liveRefs.stepper, steps, false);
    renderCharacterSheet(liveRefs.sheet, steps);
    updateActionStatus(liveRefs.status, steps[currentPageIndex].errors);
  } catch (error) {
    // Живые подсказки не должны мешать заполнению формы.
  }
}

/* ---------- Character sheet ---------- */

function sheetSection(container, title) {
  const section = createElement('section', 'sheet-section');
  section.appendChild(createElement('h4', '', title));
  container.appendChild(section);
  return section;
}

function sheetTags(container, items, emptyText) {
  const tags = createElement('div', 'sheet-tags');
  const visible = items.slice(0, 12);
  visible.forEach(item => {
    const tag = createElement('span', `sheet-tag${item.star ? ' is-star' : ''}`, `${item.star ? '★ ' : ''}${item.text}`);
    tags.appendChild(tag);
  });
  if (items.length > visible.length) tags.appendChild(createElement('span', 'sheet-tag is-more', `ещё ${items.length - visible.length}`));
  if (!items.length && emptyText) tags.appendChild(createElement('span', 'sheet-empty', emptyText));
  container.appendChild(tags);
}

function dependsOnMissingAbility(read) {
  const missing = ABILITY_LABELS.map(ability => ability.id).filter(id => !hasAbilityValue(id));
  if (!missing.length) return false;
  const original = character;
  const probe = value => {
    character = { ...original, abilities: { ...(original.abilities || {}), ...Object.fromEntries(missing.map(id => [id, value])) } };
    try {
      return read(CharacterRules.derivedStats(character, getCreationExtras()));
    } finally {
      character = original;
    }
  };
  try {
    return probe(3) !== probe(20);
  } catch (error) {
    return true;
  }
}

function characterClassLabel(model, extras) {
  return extras?.classes?.length
    ? extras.classes.map(item => `${plainLabel(item.label || getSelectedOption('class', item.id)?.label || item.id)} ${item.level}`).join(' / ')
    : `${plainLabel(getSelectedOption('class', model.class)?.label)} ${extras?.effectiveLevel || model.level || 1}`;
}

function characterHitDiceLabel(stats, extras) {
  const pools = extras?.hitDicePools || stats?.hitDicePools;
  return pools?.length ? pools.map(pool => `${pool.count}к${pool.die}`).join(' + ') : `${stats?.hitDice || stats?.level || 1}к${stats?.hitDie || '—'}`;
}

function renderCharacterSheet(aside, steps, view = {}) {
  aside.innerHTML = '';
  toggleClass(aside, 'is-expanded', sheetExpanded);
  const model = view.character || character;
  const race = getSelectedOption('race', model.race);
  const subrace = race?.suboptions?.find(option => option.value === model.race_sub);
  const classOption = getSelectedOption('class', model.class);
  const background = getSelectedOption('background', model.background);
  const guide = getClassGuide(model.class);
  let extras = null;
  let stats = null;
  let profs = null;
  try {
    extras = view.extras || getCreationExtras();
    stats = view.stats || CharacterRules.derivedStats(model, extras);
    profs = CharacterRules.resolveProficiencies(model, extras);
  } catch (error) {
    extras = null;
  }
  const finalAbilities = stats?.abilities || {};
  const hasScore = id => model.abilities?.[id] !== undefined && model.abilities[id] !== null && model.abilities[id] !== '' && Number.isFinite(Number(model.abilities[id]));

  const summary = createElement('div', 'sheet-summary');
  const hero = createElement('div', 'sheet-hero');
  const portrait = createElement('div', 'sheet-portrait');
  if (race && race.image) {
    const image = createElement('img', 'sheet-portrait__race');
    image.src = race.image;
    image.alt = '';
    image.width = 80;
    image.height = 80;
    portrait.appendChild(image);
  } else {
    portrait.appendChild(createElement('span', 'sheet-portrait__mark', '20'));
  }
  if (classOption && classOption.image) {
    const badge = createElement('img', 'sheet-portrait__class');
    badge.src = classOption.image;
    badge.alt = '';
    badge.width = 36;
    badge.height = 36;
    portrait.appendChild(badge);
  }
  hero.appendChild(portrait);

  const copy = createElement('div', 'sheet-hero__copy');
  copy.appendChild(createElement('p', 'sheet-kicker', view.label || 'Ваш персонаж'));
  const name = (model.name || '').trim();
  copy.appendChild(createElement('h3', `sheet-name${name ? '' : ' is-placeholder'}`, name ? softHyphenate(name) : 'Без имени'));
  const line = [plainLabel(subrace ? subrace.label : race && race.label), classOption && characterClassLabel(model, extras)].filter(Boolean);
  copy.appendChild(createElement('p', 'sheet-line', line.length ? line.join(' · ') : 'Класс и раса ещё не выбраны'));
  if (background) copy.appendChild(createElement('p', 'sheet-line sheet-line--muted', plainLabel(background.label)));
  hero.appendChild(copy);

  const toggle = createElement('button', 'sheet-toggle', sheetExpanded ? 'Свернуть' : 'Подробнее');
  toggle.type = 'button';
  setAttributes(toggle, { 'aria-expanded': sheetExpanded ? 'true' : 'false', 'aria-controls': 'sheet-details' });
  toggle.addEventListener('click', () => {
    sheetExpanded = !sheetExpanded;
    toggleClass(aside, 'is-expanded', sheetExpanded);
    toggle.textContent = sheetExpanded ? 'Свернуть' : 'Подробнее';
    toggle.setAttribute('aria-expanded', sheetExpanded ? 'true' : 'false');
  });
  hero.appendChild(toggle);
  summary.appendChild(hero);

  const vitals = createElement('dl', 'sheet-vitals');
  const walkSpeed = result => (typeof result.speed === 'number' ? result.speed : result.speed && result.speed.walk);
  const speed = stats && (view.stats || !dependsOnMissingAbility(walkSpeed)) ? walkSpeed(stats) : null;
  const vitalValues = [
    ['Хиты', classOption && hasScore('constitution') && stats && Number.isFinite(stats.hp) ? stats.hp : '—'],
    ['КД', race && stats && Number.isFinite(stats.ac) && (view.stats || !dependsOnMissingAbility(result => result.ac)) ? stats.ac : '—'],
    ['Скорость', race && speed ? speed : '—'],
    ['Иниц.', hasScore('dexterity') && stats && Number.isFinite(stats.initiative) ? signedValue(stats.initiative) : '—']
  ];
  vitalValues.forEach(([label, value]) => {
    const item = createElement('div', `sheet-vital${value === '—' ? ' is-unknown' : ''}`);
    item.appendChild(createElement('dd', '', String(value)));
    item.appendChild(createElement('dt', '', label));
    vitals.appendChild(item);
  });
  summary.appendChild(vitals);

  const abilities = createElement('div', 'sheet-abilities');
  ABILITY_LABELS.forEach(ability => {
    const value = hasScore(ability.id) ? finalAbilities[ability.id] : undefined;
    const item = createElement('div', 'sheet-ability');
    toggleClass(item, 'is-empty', value === undefined);
    toggleClass(item, 'is-key', !!guide && guide.primary.includes(ability.id));
    item.appendChild(createElement('small', '', ability.short));
    item.appendChild(createElement('b', '', value === undefined ? '—' : String(value)));
    item.appendChild(createElement('i', '', value === undefined ? '' : formatModifier(value)));
    item.setAttribute('title', `${ability.label}: ${value === undefined ? 'не задано' : `${value} (${formatModifier(value)})`}`);
    abilities.appendChild(item);
  });
  summary.appendChild(abilities);
  aside.appendChild(summary);
  if (view.note) summary.appendChild(createElement('p', 'advancement-sheet-note', view.note));

  const details = createElement('div', 'sheet-details');
  details.id = 'sheet-details';

  const casting = extras && extras.spellcasting;
  const castings = extras?.spellcastingByClass?.length ? extras.spellcastingByClass : casting ? [casting] : [];
  for (const classCasting of castings) {
    const known = hasScore(classCasting.ability);
    const magic = sheetSection(details, classCasting.label ? `Магия · ${plainLabel(classCasting.label)} ${classCasting.level}` : 'Магия');
    const grid = createElement('dl', 'sheet-magic');
    [['Сл спасброска', known ? classCasting.saveDC : '—'], ['Атака', known ? signedValue(classCasting.attackBonus) : '—'], ['Базовая', abilityInfo(classCasting.ability).short]].forEach(([label, value]) => {
      const item = createElement('div');
      item.appendChild(createElement('dd', '', String(value)));
      item.appendChild(createElement('dt', '', label));
      grid.appendChild(item);
    });
    magic.appendChild(grid);
  }
  if (casting) {
    const magic = sheetSection(details, 'Ячейки заклинаний');
    const slotPools = [...Object.entries(casting.slotTiers || {}).map(([level, count]) => ({ level, count })), ...(casting.pactSlots ? [{ ...casting.pactSlots, pact: true }] : [])];
    if (!slotPools.length && casting.slots) slotPools.push({level:casting.slotLevel,count:casting.slots});
    for (const {level,count,pact} of slotPools) {
      const slots = createElement('p', 'sheet-slots', `Ячейки ${level}-го круга${pact?' (договор, короткий отдых)':''}: `);
      for (let index = 0; index < count; index++) slots.appendChild(createElement('span', 'sheet-slot'));
      magic.appendChild(slots);
    }
  }
  if (stats?.hitDie) sheetTags(sheetSection(details, 'Кости хитов'), [{ text: characterHitDiceLabel(stats, extras) }]);

  const spells = extras && extras.spells || [];
  if (extras && extras.resources && extras.resources.length) {
    const section = sheetSection(details, 'Ресурсы');
    for (const resource of extras.resources) section.appendChild(createElement('p', 'sheet-note', `${resource.name}: максимум ${resource.max}; ${resource.recovery || `восстановление после ${resource.rest === 'short-rest' ? 'короткого или долгого' : 'долгого'} отдыха`}.`));
  }
  const cantrips = spells.filter(spell => !spell.level);
  const classSpells = spells.filter(spell => spell.level && ['prepared', 'known'].includes(spell.status));
  const bookOnly = spells.filter(spell => spell.status === 'spellbook');
  const innate = spells.filter(spell => spell.level && ['racial', 'feat', 'ritual', 'feature', 'invocation'].includes(spell.status));
  const spellLabel = spell => `${spell.label || spell.id}${castings.length > 1 && !['racial','feat','ritual','feature','invocation'].includes(spell.status) ? ` · ${plainLabel(getSelectedOption('class', spell.classId || model.class)?.label)}` : ''}`;
  if (cantrips.length) sheetTags(sheetSection(details, 'Заговоры'), cantrips.map(spell => ({ text: spellLabel(spell) })));
  if (classSpells.length || bookOnly.length) {
    const section = sheetSection(details, casting && casting.mode === 'book' ? 'Подготовлено' : 'Заклинания');
    sheetTags(section, classSpells.map(spell => ({ text: spellLabel(spell), star: spell.status === 'prepared' })), 'Пока ничего не подготовлено');
    if (bookOnly.length) section.appendChild(createElement('p', 'sheet-note', `Ещё в книге: ${bookOnly.map(spellLabel).join(', ')}`));
  }
  if (innate.length) {
    sheetTags(sheetSection(details, 'Особые заклинания'), innate.map(spell => ({ text: spell.source ? `${spell.label || spell.id} · ${spell.source}` : spell.label || spell.id })));
  }

  const equipment = extras && extras.equipment || [];
  if (equipment.length) {
    sheetTags(sheetSection(details, 'Снаряжение'), equipment.map(item => ({ text: `${item.label || item.id}${item.quantity > 1 ? ` × ${item.quantity}` : ''}` })));
  }

  if (profs) {
    const known = [
      ...(profs.savingThrows || []).map(id => ({ text: `Спасбросок ${abilityInfo(id).short}` })),
      ...(profs.skills || []).map(id => ({ text: proficiencyLabel('skill', id) })),
      ...(profs.languages || []).map(id => ({ text: proficiencyLabel('language', id) }))
    ];
    if (known.length) sheetTags(sheetSection(details, 'Уже известно'), known);
  }

  if (steps && steps.length) {
    const progress = sheetSection(details, 'Прогресс');
    const list = createElement('ul', 'sheet-progress');
    steps.forEach(step => {
      const state = step.complete ? 'is-done' : step.current ? 'is-current' : step.warning ? 'is-warning' : 'is-todo';
      const item = createElement('li', state);
      item.appendChild(createElement('span', 'sheet-progress__icon', step.complete ? '✓' : step.warning ? '!' : step.current ? '•' : ''));
      item.appendChild(createElement('span', 'sheet-progress__label', step.label));
      if (step.summary) item.appendChild(createElement('span', 'sheet-progress__value', step.summary));
      list.appendChild(item);
    });
    progress.appendChild(list);
  }
  aside.appendChild(details);
}

/* ---------- Race step ---------- */

function renderRaceSelection(container, element) {
  const guide = getClassGuide(character.class);
  const wrapper = createElement('div', 'race-selector');
  registerFieldNode('race', wrapper);

  const entries = element.options.map(option => {
    const rule = CharacterRules.RACES[option.value] || {};
    return { option, rule, source: RACE_SOURCES[option.value] || '', fit: getRaceFit(rule, guide) };
  });
  const filters = [
    { id: 'all', label: 'Все', test: () => true },
    guide && { id: 'fit', label: `★ Для ${guide.genitive}`, test: entry => !!(entry.fit && entry.fit.recommended) },
    { id: 'phb', label: 'Книга игрока', test: entry => entry.source === 'PHB' },
    { id: 'darkvision', label: 'Тёмное зрение', test: entry => raceDarkvision(entry.rule) > 0 },
    { id: 'fly', label: 'Полёт', test: entry => !!entry.rule.fly }
  ].filter(Boolean);
  if (!filters.some(filter => filter.id === raceViewState.filter)) raceViewState.filter = 'all';

  const toolbar = createElement('div', 'race-toolbar');
  const searchLabel = createElement('label', 'search-field');
  const searchIcon = createElement('span', 'search-field__icon', '⌕');
  searchIcon.setAttribute('aria-hidden', 'true');
  const search = createElement('input');
  search.type = 'search';
  search.placeholder = 'Найти расу или черту';
  search.value = raceViewState.query;
  search.setAttribute('aria-label', 'Поиск по расам');
  searchLabel.appendChild(searchIcon);
  searchLabel.appendChild(search);
  toolbar.appendChild(searchLabel);

  const chips = createElement('div', 'filter-chips');
  chips.setAttribute('role', 'group');
  chips.setAttribute('aria-label', 'Фильтры рас');
  const chipNodes = filters.map(filter => {
    const chip = createElement('button', `filter-chip${filter.id === 'fit' ? ' filter-chip--fit' : ''}`);
    chip.type = 'button';
    chip.appendChild(createElement('span', '', filter.label));
    chip.appendChild(createElement('em', '', String(entries.filter(filter.test).length)));
    chip.addEventListener('click', () => {
      raceViewState.filter = filter.id;
      apply();
    });
    chips.appendChild(chip);
    return { chip, filter };
  });
  toolbar.appendChild(chips);

  if (guide) {
    const sortLabel = createElement('label', 'race-sort');
    sortLabel.appendChild(createElement('span', '', 'Порядок'));
    const sort = createElement('select');
    [['fit', 'Сначала подходящие'], ['alpha', 'По алфавиту']].forEach(([value, label]) => {
      const option = createElement('option', '', label);
      option.value = value;
      sort.appendChild(option);
    });
    sort.value = raceViewState.sort;
    sort.addEventListener('change', () => {
      raceViewState.sort = sort.value;
      buildGrid();
      apply();
    });
    sortLabel.appendChild(sort);
    toolbar.appendChild(sortLabel);
  }
  wrapper.appendChild(toolbar);

  const layout = createElement('div', 'race-layout');
  const listPane = createElement('div', 'race-list-pane');
  const grid = createElement('div', 'race-grid');
  grid.setAttribute('role', 'group');
  grid.setAttribute('aria-label', 'Расы');
  const counter = createElement('p', 'race-counter');
  counter.setAttribute('aria-live', 'polite');
  const empty = createElement('div', 'race-empty');
  empty.appendChild(createElement('p', '', 'Ничего не найдено.'));
  const resetFilters = createElement('button', 'secondary-button', 'Сбросить фильтры');
  resetFilters.type = 'button';
  resetFilters.addEventListener('click', () => {
    raceViewState.filter = 'all';
    raceViewState.query = '';
    search.value = '';
    apply();
  });
  empty.appendChild(resetFilters);
  const details = createElement('aside', 'race-details');
  details.setAttribute('aria-live', 'polite');
  details.setAttribute('aria-label', 'Выбранная раса');
  let cards = [];

  const updateButtons = selectedValue => {
    cards.forEach(({ button, entry }) => {
      const selected = entry.option.value === selectedValue;
      toggleClass(button, 'is-selected', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
  };

  function buildGrid() {
    grid.innerHTML = '';
    const sorted = !guide ? entries
      : raceViewState.sort === 'fit'
        ? [...entries].sort((a, b) => Number(!!(b.fit && b.fit.recommended)) - Number(!!(a.fit && a.fit.recommended)))
        : [...entries].sort((a, b) => plainLabel(a.option.label).localeCompare(plainLabel(b.option.label), 'ru'));
    cards = sorted.map(entry => {
      const button = createRaceCard(entry, guide);
      button.addEventListener('click', () => {
        if (character.race !== entry.option.value) {
          clearAllRaceSpecificData();
          character.race = entry.option.value;
          delete character.race_sub;
        }
        updateButtons(entry.option.value);
        updateRaceDetails(details, entry.option);
        clearValidationFor('race');
        saveDraft();
        if (typeof details.getBoundingClientRect === 'function' && typeof details.scrollIntoView === 'function' && details.getBoundingClientRect().top < 0) {
          const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          details.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
        }
      });
      grid.appendChild(button);
      return { button, entry };
    });
    updateButtons(character.race);
  }

  function apply() {
    const query = raceViewState.query.trim().toLocaleLowerCase('ru');
    const active = filters.find(filter => filter.id === raceViewState.filter) || filters[0];
    let visible = 0;
    cards.forEach(({ button, entry }) => {
      const haystack = `${entry.option.label} ${entry.option.description || ''} ${entry.source}`.toLocaleLowerCase('ru');
      const match = active.test(entry) && (!query || haystack.includes(query));
      button.hidden = !match;
      if (match) visible += 1;
    });
    chipNodes.forEach(({ chip, filter }) => {
      const on = filter.id === active.id;
      toggleClass(chip, 'is-active', on);
      chip.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    counter.textContent = visible ? `Показано ${visible} из ${entries.length}` : '';
    empty.hidden = visible > 0;
  }

  search.addEventListener('input', () => {
    raceViewState.query = search.value;
    apply();
  });

  listPane.appendChild(grid);
  listPane.appendChild(empty);
  listPane.appendChild(counter);
  layout.appendChild(listPane);
  layout.appendChild(details);
  wrapper.appendChild(layout);
  container.appendChild(wrapper);

  buildGrid();
  apply();
  const selected = element.options.find(option => option.value === character.race);
  if (selected) updateRaceDetails(details, selected);
  else renderEmptyRaceDetails(details);
}

function createRaceCard(entry, guide) {
  const { option, rule, source, fit } = entry;
  const button = createElement('button', 'race-card');
  button.type = 'button';
  button.setAttribute('aria-pressed', 'false');
  button.setAttribute('data-value', String(option.value));
  if (option.image) {
    const image = createElement('img', 'race-card__image');
    image.src = option.image;
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.width = 56;
    image.height = 56;
    image.addEventListener('error', () => image.classList.add('is-broken'));
    button.appendChild(image);
  }
  const body = createElement('span', 'race-card__body');
  const head = createElement('span', 'race-card__head');
  head.appendChild(createElement('span', 'race-card__name', softHyphenate(option.label)));
  if (source) head.appendChild(createElement('span', 'source-badge', source));
  body.appendChild(head);
  const chips = createElement('span', 'race-card__chips');
  raceBonusChips(rule, guide).forEach(chip => chips.appendChild(createElement('span', `bonus-chip bonus-chip--${chip.tone}`, chip.text)));
  if (fit && fit.recommended) chips.appendChild(createElement('span', 'fit-chip', `★ для ${guide.genitive}`));
  body.appendChild(chips);
  const traits = raceTraitParts(rule, option.value);
  if (traits.length) body.appendChild(createElement('span', 'race-card__traits', traits.join(' · ')));
  button.appendChild(body);
  return button;
}

function renderEmptyRaceDetails(panel) {
  panel.innerHTML = '';
  panel.classList.add('is-empty');
  panel.appendChild(createElement('span', 'details-mark', '✦'));
  panel.appendChild(createElement('h3', '', 'Выберите расу'));
  panel.appendChild(createElement('p', '', 'Здесь появятся бонусы, подраса, особенности и обязательные дополнительные выборы.'));
}

function updateRaceDetails(panel, raceOption) {
  panel.innerHTML = '';
  panel.classList.remove('is-empty');
  const rule = CharacterRules.RACES[raceOption.value] || {};
  const guide = getClassGuide(character.class);
  const fit = getRaceFit(rule, guide);

  if (raceOption.suboptions && raceOption.suboptions.length) {
    const validSubrace = raceOption.suboptions.some(option => option.value === character.race_sub);
    if (character.race_sub && !validSubrace) {
      clearSubraceAdditionalFields(raceOption);
      delete character.race_sub;
    }
  }
  const subrace = getSelectedSubrace(raceOption);
  const subRule = subrace && rule.subraces ? rule.subraces[subrace.value] : null;

  const hero = createElement('div', 'race-hero');
  if (raceOption.image) {
    const image = createElement('img', 'race-hero__image');
    image.src = raceOption.image;
    image.alt = '';
    image.width = 72;
    image.height = 72;
    hero.appendChild(image);
  }
  const copy = createElement('div', 'race-hero__copy');
  const kicker = createElement('p', 'details-kicker', 'Выбрано');
  if (RACE_SOURCES[raceOption.value]) kicker.appendChild(createElement('span', 'source-badge', RACE_SOURCES[raceOption.value]));
  copy.appendChild(kicker);
  copy.appendChild(createElement('h3', '', softHyphenate(raceOption.label)));
  if (raceOption.description) copy.appendChild(createElement('p', 'race-description', raceOption.description));
  const link = createDndLink(raceOption.link, 'Полное описание на dnd.su ↗');
  if (link) copy.appendChild(link);
  hero.appendChild(copy);
  panel.appendChild(hero);

  if (raceOption.suboptions && raceOption.suboptions.length) {
    const section = createElement('section', 'details-section subrace-section');
    registerFieldNode('race_sub', section);
    section.appendChild(createElement('h4', '', 'Подраса'));
    const options = createElement('div', 'subrace-options');
    raceOption.suboptions.forEach(option => {
      const optionRule = rule.subraces ? rule.subraces[option.value] : null;
      const button = createElement('button', 'subrace-option');
      button.type = 'button';
      button.setAttribute('data-focus-key', `sub-${option.value}`);
      const selected = character.race_sub === option.value;
      toggleClass(button, 'is-selected', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
      button.appendChild(createElement('span', 'subrace-option__dot'));
      const body = createElement('span', 'subrace-option__body');
      const title = createElement('span', 'subrace-option__title');
      title.appendChild(createElement('span', 'subrace-option__name', option.label));
      if (fit && fit.bestSubrace === option.value) title.appendChild(createElement('span', 'fit-chip', '★ лучший выбор'));
      body.appendChild(title);
      const bonus = optionRule && optionRule.abilities ? Object.entries(optionRule.abilities).map(([id, amount]) => `${abilityInfo(id).short} ${signedValue(amount)}`).join(', ') : '';
      if (bonus) body.appendChild(createElement('span', 'subrace-option__bonus', bonus));
      if (option.description) body.appendChild(createElement('span', 'subrace-option__text', option.description));
      button.appendChild(body);
      button.addEventListener('click', () => {
        if (character.race_sub !== option.value) {
          clearSubraceAdditionalFields(raceOption);
          character.race_sub = option.value;
        }
        clearValidationFor('race_sub');
        updateRaceDetails(panel, raceOption);
        saveDraft();
        focusByKey(panel, `sub-${option.value}`);
      });
      options.appendChild(button);
    });
    section.appendChild(options);
    const subLink = subrace && createDndLink(subrace.link, 'Подробнее о подрасе ↗');
    if (subLink) section.appendChild(subLink);
    panel.appendChild(section);
  }

  const extra = createElement('section', 'details-section race-extra');
  extra.appendChild(createElement('h4', '', 'Осталось выбрать'));
  if (raceOption.additionalFields) updateAdditionalFields(extra, raceOption);
  if (subrace && subrace.additionalFields) updateAdditionalFields(extra, subrace);
  if (extra.querySelector('.popup-field') || extra.querySelector('.form-field')) panel.appendChild(extra);

  const traits = createElement('section', 'details-section');
  traits.appendChild(createElement('h4', '', 'Вы получите'));
  const bonusRow = createElement('div', 'race-card__chips');
  const profile = CharacterRules.abilityProfile({ ...character, race: raceOption.value });
  Object.entries(profile && profile.fixed || {}).forEach(([id, amount]) => bonusRow.appendChild(createElement('span', `bonus-chip bonus-chip--${guide && guide.primary.includes(id) ? 'key' : 'base'}`, `${abilityInfo(id).short} ${signedValue(amount)}`)));
  if (profile && (profile.choiceSlots || profile.plans)) bonusRow.appendChild(createElement('span', 'bonus-chip bonus-chip--muted', 'остальное — на шаге характеристик'));
  if (bonusRow.children.length) traits.appendChild(bonusRow);
  const list = createElement('ul', 'trait-list');
  raceTraitItems(rule, subRule, raceOption.value).forEach(([term, text]) => {
    const item = createElement('li');
    if (term) item.appendChild(createElement('strong', '', `${term}: `));
    item.appendChild(createElement('span', '', text));
    list.appendChild(item);
  });
  traits.appendChild(list);
  panel.appendChild(traits);
  syncActiveAdditionalFieldIds();
}

/* ---------- Abilities step ---------- */

function pointBuySpent() {
  return ABILITY_LABELS.reduce((sum, ability) => sum + (POINT_BUY_COSTS[character.abilities[ability.id]] || 0), 0);
}

function renderAbilities(container) {
  if (!character.abilities || typeof character.abilities !== 'object') character.abilities = {};
  const method = ABILITY_METHODS.some(item => item.value === character.abilityMethod) ? character.abilityMethod : 'standard';
  abilityPick = null;
  const wrapper = createElement('div', 'abilities-panel');
  registerFieldNode('abilities', wrapper);

  const switcher = createElement('div', 'method-switch');
  setAttributes(switcher, { role: 'radiogroup', 'aria-label': 'Способ определения характеристик' });
  ABILITY_METHODS.forEach(item => {
    const button = createElement('button', 'method-option');
    button.type = 'button';
    const selected = item.value === method;
    setAttributes(button, { role: 'radio', 'aria-checked': selected ? 'true' : 'false', 'data-focus-key': `method-${item.value}` });
    toggleClass(button, 'is-selected', selected);
    button.appendChild(createElement('span', 'method-option__title', item.label));
    button.appendChild(createElement('span', 'method-option__hint', item.hint));
    button.addEventListener('click', () => {
      if (item.value === method) return;
      character.abilityMethod = item.value;
      character.abilities = item.value === 'point_buy' ? Object.fromEntries(ABILITY_LABELS.map(ability => [ability.id, 8])) : {};
      clearValidationFor('abilities');
      saveDraft();
      renderPage();
      focusByKey(getApp(), `method-${item.value}`);
    });
    switcher.appendChild(button);
  });
  wrapper.appendChild(switcher);

  const toolbar = createElement('div', 'ability-toolbar');
  const board = createElement('div', 'ability-board');
  board.setAttribute('role', 'group');
  board.setAttribute('aria-label', 'Характеристики');
  const refresh = focusKey => {
    fillAbilityToolbar(toolbar, method, onChange);
    fillAbilityBoard(board, method, onChange);
    focusByKey(wrapper, focusKey);
  };
  const onChange = focusKey => {
    clearValidationFor('abilities');
    saveDraft();
    refresh(focusKey);
  };

  renderAbilityBonusControls(wrapper, () => refresh());
  wrapper.appendChild(toolbar);
  const guide = getClassGuide(character.class);
  if (guide) {
    const tip = createElement('div', 'class-tip');
    const classOption = getSelectedOption('class', character.class);
    if (classOption && classOption.image) {
      const image = createElement('img', 'class-tip__image');
      image.src = classOption.image;
      image.alt = '';
      image.width = 40;
      image.height = 40;
      tip.appendChild(image);
    }
    tip.appendChild(createElement('p', '', guide.tip));
    wrapper.appendChild(tip);
  }
  wrapper.appendChild(board);
  refresh();
  wrapper.appendChild(createElement('p', 'abilities-footnote', `${method === 'standard' ? 'Каждое значение набора используется ровно один раз. ' : ''}Итог и модификатор учитывают бонусы расы и выбранной черты.`));
  container.appendChild(wrapper);
}

function fillAbilityToolbar(toolbar, method, onChange) {
  toolbar.innerHTML = '';
  const abilities = character.abilities;
  const guide = getClassGuide(character.class);
  const main = createElement('div', 'ability-toolbar__main');

  if (method === 'standard') {
    main.appendChild(createElement('span', 'ability-toolbar__label', 'Набор'));
    const pool = createElement('div', 'value-pool');
    STANDARD_ARRAY.forEach(value => {
      const holder = ABILITY_LABELS.find(ability => abilities[ability.id] === value);
      const chip = createElement('button', 'pool-chip');
      chip.type = 'button';
      chip.setAttribute('data-focus-key', `pool-${value}`);
      toggleClass(chip, 'is-used', !!holder);
      toggleClass(chip, 'is-picked', abilityPick === value);
      chip.setAttribute('aria-pressed', abilityPick === value ? 'true' : 'false');
      chip.setAttribute('aria-label', holder ? `${value}: стоит в ${holder.label}. Выбрать, чтобы переставить` : `${value}: свободно. Выбрать, чтобы поставить`);
      chip.appendChild(createElement('span', 'pool-chip__value', String(value)));
      chip.appendChild(createElement('span', 'pool-chip__where', holder ? holder.short : 'свободно'));
      chip.addEventListener('click', () => {
        abilityPick = abilityPick === value ? null : value;
        fillAbilityToolbar(toolbar, method, onChange);
        const board = toolbar.parentNode && toolbar.parentNode.querySelector('.ability-board');
        if (board) fillAbilityBoard(board, method, onChange);
        focusByKey(toolbar, `pool-${value}`);
      });
      pool.appendChild(chip);
    });
    main.appendChild(pool);
    main.appendChild(createElement('p', 'ability-toolbar__hint', abilityPick === null ? 'Выберите значение, затем характеристику — или нажмите число прямо на карточке.' : `Теперь нажмите «Поставить ${abilityPick}» на нужной характеристике.`));
  } else if (method === 'point_buy') {
    const spent = pointBuySpent();
    const left = POINT_BUY_BUDGET - spent;
    const budget = createElement('div', 'point-budget');
    toggleClass(budget, 'is-over', left < 0);
    budget.setAttribute('role', 'status');
    const label = createElement('p', 'point-budget__label');
    label.appendChild(createElement('strong', '', String(left)));
    label.appendChild(document.createTextNode(` из ${POINT_BUY_BUDGET} очков осталось`));
    budget.appendChild(label);
    const meter = createElement('div', 'point-budget__meter');
    const fill = createElement('div', 'point-budget__fill');
    fill.style.width = `${Math.min(100, Math.max(0, spent / POINT_BUY_BUDGET * 100))}%`;
    meter.appendChild(fill);
    budget.appendChild(meter);
    budget.appendChild(createElement('p', 'ability-toolbar__hint', 'Стоимость значений 8–15: 0, 1, 2, 3, 4, 5, 7, 9.'));
    main.appendChild(budget);
  } else {
    main.appendChild(createElement('p', 'ability-toolbar__hint', 'Бросьте 4к6 шесть раз, отбросьте наименьшую кость и внесите результаты, согласованные с Мастером.'));
  }
  toolbar.appendChild(main);

  const actions = createElement('div', 'ability-toolbar__actions');
  if (guide && method !== 'manual') {
    const auto = createElement('button', 'secondary-button secondary-button--accent', `✦ Расставить под ${guide.genitive}`);
    auto.type = 'button';
    auto.setAttribute('data-focus-key', 'auto');
    auto.addEventListener('click', () => {
      STANDARD_ARRAY.forEach((value, index) => { abilities[guide.order[index]] = value; });
      abilityPick = null;
      onChange('auto');
    });
    actions.appendChild(auto);
  }
  const reset = createElement('button', 'secondary-button', 'Сбросить');
  reset.type = 'button';
  reset.setAttribute('data-focus-key', 'reset');
  reset.addEventListener('click', () => {
    character.abilities = method === 'point_buy' ? Object.fromEntries(ABILITY_LABELS.map(ability => [ability.id, 8])) : {};
    abilityPick = null;
    onChange('reset');
  });
  actions.appendChild(reset);
  toolbar.appendChild(actions);
}

function assignStandardValue(abilityId, value) {
  const abilities = character.abilities;
  const current = abilities[abilityId];
  const holder = ABILITY_LABELS.find(ability => ability.id !== abilityId && abilities[ability.id] === value);
  if (holder) {
    if (current !== undefined) abilities[holder.id] = current;
    else delete abilities[holder.id];
  }
  abilities[abilityId] = value;
}

function abilityEffectText(id, finalValue, casting, stats) {
  const modifier = finalValue === undefined ? null : Math.floor((finalValue - 10) / 2);
  const classRule = CharacterRules.CLASSES[character.class];
  const parts = [];
  if (casting && casting.ability === id) parts.push(modifier === null ? 'Сл и атака заклинаний' : `Сл заклинаний ${10 + modifier}, атака заклинанием ${signedValue(modifier + 2)}`);
  if (id === 'constitution' && classRule && modifier !== null && stats && Number.isFinite(stats.hp)) parts.push(`хиты на 1-м уровне: ${stats.hp}`);
  if (id === 'dexterity' && modifier !== null) parts.push(`инициатива ${signedValue(modifier)}`);
  parts.push(ABILITY_EFFECTS[id]);
  if (classRule && (classRule.saves || []).includes(id)) parts.push('спасбросок с владением');
  return parts.join('; ');
}

function fillAbilityBoard(board, method, onChange) {
  board.innerHTML = '';
  const abilities = character.abilities;
  const guide = getClassGuide(character.class);
  const racial = getRacialAbilityBonuses();
  let extras = {};
  let stats = null;
  try {
    extras = getCreationExtras();
    stats = CharacterRules.derivedStats(character, extras);
  } catch (error) {
    extras = {};
  }
  const extraBonuses = extras.abilityBonuses || {};
  const race = getSelectedRace();
  const raceName = plainLabel((getSelectedSubrace(race) || race || {}).label) || 'раса';
  const methodInfo = ABILITY_METHODS.find(item => item.value === method);
  const free = STANDARD_ARRAY.filter(value => !ABILITY_LABELS.some(ability => abilities[ability.id] === value));
  const placing = method === 'standard' && abilityPick !== null;
  toggleClass(board, 'is-placing', placing);

  ABILITY_LABELS.forEach(ability => {
    const hasBase = hasAbilityValue(ability.id);
    const base = hasBase ? Number(abilities[ability.id]) : undefined;
    const racialBonus = racial[ability.id] || 0;
    const extraBonus = extraBonuses[ability.id] || 0;
    const finalValue = hasBase ? base + racialBonus + extraBonus : undefined;
    const isPrimary = !!guide && guide.primary.includes(ability.id);
    const isSecondary = !!guide && !isPrimary && guide.secondary.includes(ability.id);

    const tile = createElement('div', 'ability-tile');
    toggleClass(tile, 'is-empty', !hasBase);
    toggleClass(tile, 'is-primary', isPrimary);
    toggleClass(tile, 'is-secondary', isSecondary);

    const head = createElement('div', 'ability-tile__head');
    head.appendChild(createElement('span', 'ability-short', ability.short));
    const name = createElement(method === 'manual' ? 'label' : 'span', 'ability-tile__name', ability.label);
    if (method === 'manual') name.htmlFor = `ability-${ability.id}`;
    head.appendChild(name);
    if (isPrimary) head.appendChild(createElement('span', 'priority-badge priority-badge--key', '★ Ключевая'));
    else if (isSecondary) head.appendChild(createElement('span', 'priority-badge', 'Важная'));
    tile.appendChild(head);

    const score = createElement('div', 'ability-tile__score');
    score.appendChild(createElement('strong', 'ability-total', finalValue === undefined ? '—' : String(finalValue)));
    score.appendChild(createElement('span', 'ability-modifier', formatModifier(finalValue)));
    const calc = createElement('div', 'ability-tile__calc');
    if (hasBase) calc.appendChild(createElement('span', '', `${base} ${methodInfo.base}`));
    if (racialBonus) calc.appendChild(createElement('span', 'ability-bonus', `${signedValue(racialBonus)} ${raceName}`));
    if (extraBonus) calc.appendChild(createElement('span', 'ability-bonus', `${signedValue(extraBonus)} черта`));
    score.appendChild(calc);
    tile.appendChild(score);

    const controls = createElement('div', 'ability-tile__controls');
    if (method === 'standard') {
      if (placing && abilityPick !== base) {
        const place = createElement('button', 'place-button', `Поставить ${abilityPick}`);
        place.type = 'button';
        place.setAttribute('data-focus-key', `place-${ability.id}`);
        place.addEventListener('click', () => {
          assignStandardValue(ability.id, abilityPick);
          abilityPick = null;
          onChange(`clear-${ability.id}`);
        });
        controls.appendChild(place);
      } else if (hasBase) {
        const clear = createElement('button', 'text-button text-button--small', 'Убрать значение');
        clear.type = 'button';
        clear.setAttribute('data-focus-key', `clear-${ability.id}`);
        clear.setAttribute('aria-label', `Убрать значение ${base} из характеристики ${ability.label}`);
        clear.addEventListener('click', () => {
          delete abilities[ability.id];
          onChange(`quick-${ability.id}-${base}`);
        });
        controls.appendChild(clear);
      } else {
        const quick = createElement('div', 'quick-values');
        free.forEach(value => {
          const button = createElement('button', 'quick-value', String(value));
          button.type = 'button';
          button.setAttribute('data-focus-key', `quick-${ability.id}-${value}`);
          button.setAttribute('aria-label', `Поставить ${value} в характеристику ${ability.label}`);
          button.addEventListener('click', () => {
            assignStandardValue(ability.id, value);
            onChange(`clear-${ability.id}`);
          });
          quick.appendChild(button);
        });
        controls.appendChild(quick);
      }
    } else if (method === 'point_buy') {
      const current = hasBase ? base : 8;
      const spent = pointBuySpent();
      const stepper = createElement('div', 'point-stepper');
      const minus = createElement('button', 'point-stepper__button', '−');
      minus.type = 'button';
      minus.disabled = current <= 8;
      setAttributes(minus, { 'data-focus-key': `minus-${ability.id}`, 'aria-label': `Уменьшить ${ability.label}` });
      minus.addEventListener('click', () => {
        abilities[ability.id] = Math.max(8, current - 1);
        onChange(`minus-${ability.id}`);
      });
      const plus = createElement('button', 'point-stepper__button', '+');
      plus.type = 'button';
      const nextCost = POINT_BUY_COSTS[current + 1];
      plus.disabled = current >= 15 || nextCost === undefined || spent - (POINT_BUY_COSTS[current] || 0) + nextCost > POINT_BUY_BUDGET;
      setAttributes(plus, { 'data-focus-key': `plus-${ability.id}`, 'aria-label': `Увеличить ${ability.label}` });
      plus.addEventListener('click', () => {
        abilities[ability.id] = Math.min(15, current + 1);
        onChange(`plus-${ability.id}`);
      });
      stepper.appendChild(minus);
      stepper.appendChild(createElement('span', 'point-stepper__cost', `стоимость ${POINT_BUY_COSTS[current] ?? '—'}`));
      stepper.appendChild(plus);
      controls.appendChild(stepper);
    } else {
      const select = createElement('select', 'ability-select');
      select.id = `ability-${ability.id}`;
      select.setAttribute('data-focus-key', `manual-${ability.id}`);
      const empty = createElement('option', '', '—');
      empty.value = '';
      select.appendChild(empty);
      for (let value = 3; value <= 18; value++) {
        const option = createElement('option', '', String(value));
        option.value = String(value);
        select.appendChild(option);
      }
      select.value = hasBase ? String(base) : '';
      select.addEventListener('change', () => {
        if (select.value === '') delete abilities[ability.id];
        else abilities[ability.id] = Number(select.value);
        onChange(`manual-${ability.id}`);
      });
      controls.appendChild(select);
    }
    tile.appendChild(controls);

    const effects = createElement('p', 'ability-tile__effects');
    effects.appendChild(createElement('span', '', 'Влияет на: '));
    effects.appendChild(document.createTextNode(abilityEffectText(ability.id, finalValue, extras.spellcasting, stats)));
    tile.appendChild(effects);
    board.appendChild(tile);
  });
}
