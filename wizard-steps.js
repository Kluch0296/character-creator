/* Dynamic steps use the same state and DOM helpers as script.js. */
function getCreationContext() {
  const base = CharacterRules.finalAbilities(character);
  const extras = CreationOptions.derive(character, { abilities: base });
  return { abilities: CharacterRules.finalAbilities(character, extras) };
}

function getCreationExtras() {
  const context = getCreationContext();
  const extras = CreationOptions.derive(character, context);
  const proficiencies = CharacterRules.resolveProficiencies(character, extras);
  const base=CreationOptions.derive(character, { ...context, proficiencies });
  if(typeof LevelUpRules==='undefined')return base;
  const progression=LevelUpRules.derive(character,{...context,baseExtras:base,proficiencies},base);
  const finalProficiencies=CharacterRules.resolveProficiencies(character,progression);
  const recalculated=CreationOptions.derive(character,{...context,proficiencies:finalProficiencies});
  return LevelUpRules.derive(character,{...context,baseExtras:base,proficiencies},recalculated);
}

function getResolvedProficiencies() {
  return CharacterRules.resolveProficiencies(character, getCreationExtras());
}

function getDerivedCharacter() {
  return CharacterRules.derivedStats(character, getCreationExtras());
}

function renderChoiceSelect(container, { id, label, options, value, onChange, description }) {
  const field = createElement('div', 'form-field mechanic-field');
  registerFieldNode(id, field);
  field.setAttribute('data-field-id', id);
  const caption = createElement('label', 'field-label', label);
  caption.htmlFor = `field-${id}`;
  field.appendChild(caption);
  if (description) field.appendChild(createElement('p', 'choice-help', description));
  const select = createElement('select', 'mechanic-select');
  select.id = `field-${id}`;
  const placeholder = createElement('option', '', 'Выберите…');
  placeholder.value = '';
  select.appendChild(placeholder);
  options.forEach(option => {
    const node = createElement('option', '', option.label);
    node.value = option.value;
    node.disabled = !!option.disabled;
    select.appendChild(node);
  });
  if (value && !options.some(option => option.value === value)) {
    const invalid = createElement('option', '', 'Предыдущий выбор больше недоступен — выберите заново');
    invalid.value = value;
    select.appendChild(invalid);
    field.classList.add('field-error');
  }
  select.value = value || '';
  select.addEventListener('change', () => {
    onChange(select.value);
    saveDraft();
    renderPage();
    // Keep keyboard position after dependent fields are rebuilt.
    document.getElementById(`field-${id}`)?.focus({ preventScroll: true });
  });
  field.appendChild(select);
  container.appendChild(field);
  return field;
}

const MECHANIC_SECTIONS = [
  { id: 'class', title: 'Особенности класса' },
  { id: 'race', title: 'Особенности расы' },
  { id: 'feat', title: 'Черта' },
  { id: 'equipment', title: 'Стартовое снаряжение', note: 'Один вариант в каждой группе' },
  { id: 'spells', title: 'Заклинания', note: 'Нажмите на карточку, чтобы выбрать' }
];
const DAMAGE_TYPES = { slashing: 'рубящий', piercing: 'колющий', bludgeoning: 'дробящий' };
const WEAPON_PROPERTIES = {
  light: 'лёгкое', finesse: 'фехтовальное', thrown: 'метательное', 'two-handed': 'двуручное', versatile: 'универсальное',
  ranged: 'дальнобойное', ammunition: 'боеприпасы', loading: 'перезарядка', heavy: 'тяжёлое', reach: 'досягаемость', special: 'особое'
};
const ARMOR_TYPES = { light: 'лёгкий', medium: 'средний', heavy: 'тяжёлый' };
const pickerState = new Map();

function normalizeChoiceSelection(choice) {
  const count = choice.count ?? 1;
  const previous = character[choice.id];
  const previousValues = (Array.isArray(previous) ? previous : previous ? [previous] : []).filter(Boolean);
  const available = [...new Set(previousValues.filter(value => choice.options.some(option => option.value === value)))];
  const selected = available.slice(0, count);
  if (previous !== undefined) character[choice.id] = count === 1 ? selected[0] || '' : selected;
  return {
    count,
    selected,
    trimmedFrom: available.length > count ? available.length : 0,
    dropped: previousValues.length - available.length
  };
}

function describeOption(option) {
  if (option.description) return option.description;
  const weapon = CreationOptions.WEAPONS[option.value];
  if (weapon) {
    const properties = (weapon.properties || []).map(id => WEAPON_PROPERTIES[id]).filter(Boolean);
    return [`${String(weapon.damage || '').replace('d', 'к')} ${DAMAGE_TYPES[weapon.type] || ''}`.trim(), ...properties].filter(Boolean).join(' · ');
  }
  const armor = CreationOptions.ARMOR[option.value];
  if (armor && armor.base) {
    const dex = armor.dex === null || armor.dex === Infinity ? ' + ЛОВ' : armor.dex ? ` + ЛОВ (макс. ${armor.dex})` : '';
    return [`КД ${armor.base}${dex}`, ARMOR_TYPES[armor.type], armor.strength ? `Сила ${armor.strength}` : '', armor.stealthDisadvantage ? 'помеха Скрытности' : ''].filter(Boolean).join(' · ');
  }
  return '';
}

function isSpellChoice(choice) {
  return choice.section === 'spells' || (choice.options.length > 0 && choice.options.every(option => SpellInfo.get(option.value)));
}

function afterChoiceChange(id, focusKey) {
  clearValidationFor(id);
  saveDraft();
  renderPage();
  focusByKey(getApp(), focusKey);
}

function toggleChoiceValue(choice, state, value) {
  if (state.count === 1) {
    character[choice.id] = value;
    return true;
  }
  const next = state.selected.slice();
  const index = next.indexOf(value);
  if (index >= 0) next.splice(index, 1);
  else if (next.length >= state.count) return false;
  else next.push(value);
  character[choice.id] = next;
  return true;
}

function renderMechanics(container) {
  const choices = CreationOptions.getChoices(character, getCreationContext());
  const byId = new Map(choices.map(choice => [choice.id, choice]));
  const states = new Map(choices.map(choice => [choice.id, normalizeChoiceSelection(choice)]));
  const mergePrepared = byId.has('creation_spellbook') && byId.has('creation_prepared');
  const wrapper = createElement('div', 'mechanics-sections');
  const sections = [...MECHANIC_SECTIONS];
  choices.forEach(choice => {
    if (!sections.some(section => section.id === (choice.section || 'class'))) sections.push({ id: choice.section, title: 'Другое' });
  });
  sections.forEach(section => {
    const list = choices.filter(choice => (choice.section || 'class') === section.id && !(mergePrepared && choice.id === 'creation_prepared'));
    if (!list.length) return;
    const block = createElement('section', `mechanics-section mechanics-section--${section.id}`);
    const heading = createElement('div', 'mechanics-section__heading');
    heading.appendChild(createElement('h3', '', section.title));
    if (section.note) heading.appendChild(createElement('p', '', section.note));
    block.appendChild(heading);
    const body = createElement('div', 'mechanics-section__body');
    list.forEach(choice => {
      if (choice.id === 'creation_spellbook' && mergePrepared) {
        body.appendChild(renderSpellbookGroup(choice, states.get(choice.id), byId.get('creation_prepared'), states.get('creation_prepared')));
      } else {
        body.appendChild(renderPickGroup(choice, states.get(choice.id)));
      }
    });
    block.appendChild(body);
    wrapper.appendChild(block);
  });
  if (!choices.length) wrapper.appendChild(createElement('p', 'choice-help', 'Для этого сочетания нет дополнительных выборов первого уровня.'));
  container.appendChild(wrapper);
}

function createPickGroupShell(choice, state, extraClass) {
  const group = createElement('section', `pick-group${extraClass ? ` ${extraClass}` : ''}`);
  group.id = `field-${choice.id}`;
  group.setAttribute('data-field-id', choice.id);
  registerFieldNode(choice.id, group);
  const header = createElement('div', 'pick-group__header');
  header.appendChild(createElement('h4', '', choice.label));
  const counters = createElement('div', 'pick-group__counters');
  header.appendChild(counters);
  group.appendChild(header);
  if (choice.description) group.appendChild(createElement('p', 'choice-help', choice.description));
  if (state.trimmedFrom) group.appendChild(createElement('p', 'conflict-note', `После изменения персонажа доступно ${state.count} вместо ${state.trimmedFrom} выборов. Лишние пункты сняты; проверьте оставшиеся.`));
  if (state.dropped) group.appendChild(createElement('p', 'conflict-note', 'Часть прежних выборов больше недоступна для этого персонажа и снята — выберите заново.'));
  return { group, counters };
}

function appendCounter(counters, text, complete, id) {
  const counter = createElement('span', `pick-counter${complete ? ' is-complete' : ''}`, text);
  if (id) counter.id = id;
  counters.appendChild(counter);
  return counter;
}

function renderPickGroup(choice, state) {
  const spell = isSpellChoice(choice);
  const wide = spell || choice.options.length > 6;
  const { group, counters } = createPickGroupShell(choice, state, `${spell ? 'pick-group--spells' : 'pick-group--options'}${wide ? ' pick-group--wide' : ''}`);
  appendCounter(counters, `${state.selected.length} / ${state.count}`, state.selected.length === state.count);
  if (!choice.options.length) {
    group.appendChild(createElement('p', 'choice-help', 'Сначала сделайте выбор выше — варианты появятся здесь.'));
    return group;
  }
  const full = state.count > 1 && state.selected.length >= state.count;
  const cards = choice.options.map(option => {
    const selected = state.selected.includes(option.value);
    const card = spell
      ? createSpellCard(choice, option, { selected, locked: full && !selected })
      : createOptionCard(choice, option, { selected, locked: full && !selected, multi: state.count > 1 });
    const main = spell ? card.querySelector('.spell-card__main') : card;
    main.addEventListener('click', () => {
      if (!toggleChoiceValue(choice, state, option.value)) return;
      afterChoiceChange(choice.id, `${choice.id}:${option.value}`);
    });
    return { card, option };
  });
  const grid = createElement('div', spell ? 'spell-grid' : 'pick-grid');
  const filters = choice.options.length > (spell ? 6 : 10) ? renderPickerFilters(choice, cards, spell) : null;
  if (filters) group.appendChild(filters.bar);
  cards.forEach(({ card }) => grid.appendChild(card));
  group.appendChild(grid);
  applyPickerFilter(choice.id, cards, spell, filters && filters.chips);
  return group;
}

function renderSpellbookGroup(bookChoice, bookState, preparedChoice, preparedState) {
  const { group, counters } = createPickGroupShell(bookChoice, bookState, 'pick-group--spells pick-group--spellbook pick-group--wide');
  registerFieldNode(preparedChoice.id, group);
  appendCounter(counters, `В книге ${bookState.selected.length} / ${bookState.count}`, bookState.selected.length === bookState.count);
  appendCounter(counters, `★ Подготовлено ${preparedState.selected.length} / ${preparedState.count}`, preparedState.selected.length === preparedState.count, `field-${preparedChoice.id}`);
  if (preparedState.trimmedFrom) group.appendChild(createElement('p', 'conflict-note', `После изменения персонажа доступно ${preparedState.count} вместо ${preparedState.trimmedFrom} выборов. Лишние пункты сняты; проверьте оставшиеся.`));
  group.appendChild(createElement('p', 'pick-hint', `Нажмите на карточку, чтобы вписать заклинание в книгу, затем отметьте ★ те, что подготовлены сегодня (до ${preparedState.count}).`));
  const bookFull = bookState.selected.length >= bookState.count;
  const prepFull = preparedState.selected.length >= preparedState.count;
  const cards = bookChoice.options.map(option => {
    const inBook = bookState.selected.includes(option.value);
    const prepared = preparedState.selected.includes(option.value);
    const card = createSpellCard(bookChoice, option, {
      selected: inBook,
      locked: bookFull && !inBook,
      prepare: inBook ? { prepared, locked: prepFull && !prepared } : null
    });
    card.querySelector('.spell-card__main').addEventListener('click', () => {
      if (!toggleChoiceValue(bookChoice, bookState, option.value)) return;
      if (inBook) {
        const current = character[preparedChoice.id];
        if (Array.isArray(current)) character[preparedChoice.id] = current.filter(value => value !== option.value);
        else if (current === option.value) character[preparedChoice.id] = '';
      }
      afterChoiceChange(bookChoice.id, `${bookChoice.id}:${option.value}`);
    });
    const prepButton = card.querySelector('.spell-card__prep');
    if (prepButton) prepButton.addEventListener('click', () => {
      if (prepared) {
        const current = character[preparedChoice.id];
        character[preparedChoice.id] = Array.isArray(current) ? current.filter(value => value !== option.value) : '';
      } else {
        const prepState = { ...preparedState, selected: preparedState.selected.filter(value => bookState.selected.includes(value)) };
        if (!toggleChoiceValue(preparedChoice, prepState, option.value)) return;
      }
      afterChoiceChange(preparedChoice.id, `prep:${option.value}`);
    });
    return { card, option };
  });
  const filters = renderPickerFilters(bookChoice, cards, true);
  group.appendChild(filters.bar);
  const grid = createElement('div', 'spell-grid');
  cards.forEach(({ card }) => grid.appendChild(card));
  group.appendChild(grid);
  applyPickerFilter(bookChoice.id, cards, true, filters.chips);
  return group;
}

function createOptionCard(choice, option, { selected, locked, multi }) {
  const card = createElement('button', 'pick-card');
  card.type = 'button';
  setAttributes(card, {
    'aria-pressed': selected ? 'true' : 'false',
    'data-choice-option': `${choice.id}:${option.value}`,
    'data-focus-key': `${choice.id}:${option.value}`
  });
  toggleClass(card, 'is-selected', selected);
  toggleClass(card, 'is-multi', multi);
  if (locked) {
    card.disabled = true;
    card.classList.add('is-locked');
    card.setAttribute('title', 'Лимит выбора исчерпан — сначала снимите другой вариант');
  }
  const head = createElement('span', 'pick-card__head');
  head.appendChild(createElement('span', 'pick-card__name', softHyphenate(option.label)));
  const check = createElement('span', 'pick-card__check', selected ? '✓' : '');
  check.setAttribute('aria-hidden', 'true');
  head.appendChild(check);
  card.appendChild(head);
  const description = describeOption(option);
  if (description) card.appendChild(createElement('span', 'pick-card__text', description));
  return card;
}

function createSpellCard(choice, option, { selected, locked, prepare }) {
  const info = SpellInfo.get(option.value);
  const card = createElement('div', `spell-card${info ? ` school-${info.school}` : ''}`);
  toggleClass(card, 'is-selected', selected);
  toggleClass(card, 'is-locked', locked);
  toggleClass(card, 'is-prepared', !!(prepare && prepare.prepared));
  const main = createElement('button', 'spell-card__main');
  main.type = 'button';
  setAttributes(main, {
    'aria-pressed': selected ? 'true' : 'false',
    'data-choice-option': `${choice.id}:${option.value}`,
    'data-focus-key': `${choice.id}:${option.value}`
  });
  if (locked) {
    main.disabled = true;
    main.setAttribute('title', 'Лимит выбора исчерпан — сначала снимите другое заклинание');
  }
  const head = createElement('span', 'spell-card__head');
  head.appendChild(createElement('span', 'spell-card__name', softHyphenate(option.label)));
  const check = createElement('span', 'pick-card__check', selected ? '✓' : '');
  check.setAttribute('aria-hidden', 'true');
  head.appendChild(check);
  main.appendChild(head);
  const text = info ? info.text : option.description;
  if (text) main.appendChild(createElement('span', 'spell-card__text', text));
  if (info) {
    const tags = createElement('span', 'spell-card__tags');
    tags.appendChild(createElement('span', 'spell-tag spell-tag--school', info.schoolLabel));
    tags.appendChild(createElement('span', 'spell-tag', info.range));
    tags.appendChild(createElement('span', 'spell-tag', info.time));
    if (info.concentration) tags.appendChild(createElement('span', 'spell-tag spell-tag--flag', 'Конц.'));
    if (info.ritual) tags.appendChild(createElement('span', 'spell-tag spell-tag--flag', 'Ритуал'));
    main.appendChild(tags);
  }
  card.appendChild(main);
  if (prepare) {
    const prep = createElement('button', 'spell-card__prep', prepare.prepared ? '★ Подготовлено' : '☆ Подготовить');
    prep.type = 'button';
    setAttributes(prep, {
      'aria-pressed': prepare.prepared ? 'true' : 'false',
      'data-focus-key': `prep:${option.value}`,
      'aria-label': `${prepare.prepared ? 'Снять подготовку' : 'Подготовить'}: ${option.label}`
    });
    if (prepare.locked) {
      prep.disabled = true;
      prep.setAttribute('title', 'Подготовлено максимальное число заклинаний');
    }
    card.appendChild(prep);
  }
  return card;
}

function renderPickerFilters(choice, cards, spell) {
  const state = pickerState.get(choice.id) || { kind: 'all', query: '' };
  pickerState.set(choice.id, state);
  const bar = createElement('div', 'picker-filters');
  let chips = null;
  if (spell) {
    const kinds = Object.entries(SpellInfo.KINDS).map(([id, label]) => ({ id, label, count: cards.filter(({ option }) => SpellInfo.get(option.value)?.kind === id).length })).filter(kind => kind.count);
    if (kinds.length < 2 || !kinds.some(kind => kind.id === state.kind)) state.kind = 'all';
    if (kinds.length > 1) {
      chips = createElement('div', 'filter-chips');
      chips.setAttribute('role', 'group');
      chips.setAttribute('aria-label', `Фильтр: ${choice.label}`);
      [{ id: 'all', label: 'Все', count: cards.length }, ...kinds].forEach(kind => {
        const chip = createElement('button', 'filter-chip');
        chip.type = 'button';
        chip.setAttribute('data-kind', kind.id);
        chip.appendChild(createElement('span', '', kind.label));
        chip.appendChild(createElement('em', '', String(kind.count)));
        chip.addEventListener('click', () => {
          state.kind = kind.id;
          applyPickerFilter(choice.id, cards, spell, chips);
        });
        chips.appendChild(chip);
      });
      bar.appendChild(chips);
    }
  }
  if (cards.length > 8) {
    const label = createElement('label', 'search-field search-field--compact');
    const icon = createElement('span', 'search-field__icon', '⌕');
    icon.setAttribute('aria-hidden', 'true');
    const input = createElement('input');
    input.type = 'search';
    input.placeholder = spell ? 'Найти заклинание' : 'Найти вариант';
    input.value = state.query;
    input.setAttribute('aria-label', `Поиск: ${choice.label}`);
    input.addEventListener('input', () => {
      state.query = input.value;
      applyPickerFilter(choice.id, cards, spell, chips);
    });
    label.appendChild(icon);
    label.appendChild(input);
    bar.appendChild(label);
  } else {
    state.query = '';
  }
  return { bar, chips };
}

function applyPickerFilter(choiceId, cards, spell, chips) {
  const state = pickerState.get(choiceId) || { kind: 'all', query: '' };
  const query = state.query.trim().toLocaleLowerCase('ru');
  cards.forEach(({ card, option }) => {
    const info = spell ? SpellInfo.get(option.value) : null;
    const kindMatch = !spell || state.kind === 'all' || (info && info.kind === state.kind);
    const haystack = `${option.label} ${info ? info.text : describeOption(option)}`.toLocaleLowerCase('ru');
    card.hidden = !(kindMatch && (!query || haystack.includes(query)));
  });
  if (!chips) return;
  Array.from(chips.children).forEach(chip => {
    const on = chip.getAttribute('data-kind') === state.kind;
    toggleClass(chip, 'is-active', on);
    chip.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

function proficiencyLabel(type, id) {
  if (type === 'save') return `Спасбросок: ${ABILITY_LABELS.find(ability => ability.id === id)?.label || id}`;
  if (CharacterRules.labelFor) return CharacterRules.labelFor(type, id);
  const catalog = { skill: CharacterRules.SKILLS, tool: CharacterRules.TOOLS, language: CharacterRules.LANGUAGES }[type];
  const item = catalog?.[id];
  return typeof item === 'string' ? item : item?.label || id;
}

function renderProficiencies(container) {
  let resolved = getResolvedProficiencies();
  const inactive = Object.keys(character.proficiencyChoices || {}).filter(id => !resolved.slots.some(slot => slot.id === id));
  if (inactive.length) {
    inactive.forEach(id => delete character.proficiencyChoices[id]);
    resolved = getResolvedProficiencies();
    container.appendChild(createElement('p', 'conflict-note', 'После изменения персонажа удалены выборы от прежних источников. Проверьте оставшиеся владения.'));
  }
  const overview = createElement('section', 'proficiency-overview');
  overview.appendChild(createElement('h3', '', 'Уже получено'));
  const fixed = resolved.fixed || CharacterRules.getProficiencyPlan(character, getCreationExtras()).fixed;
  const grantGroups = [['save', 'Спасброски'], ['skill', 'Навыки'], ['tool', 'Инструменты'], ['language', 'Языки'], ['weapon', 'Оружие'], ['armor', 'Доспехи']];
  const grantGrid = createElement('div', 'grant-groups');
  [...grantGroups, ...[...new Set(fixed.map(grant => grant.type))].filter(type => !grantGroups.some(([id]) => id === type)).map(type => [type, type])].forEach(([type, title]) => {
    const grants = fixed.filter(grant => grant.type === type);
    if (!grants.length) return;
    const group = createElement('div', 'grant-group');
    group.appendChild(createElement('h4', '', title));
    const list = createElement('ul', 'grant-list');
    grants.forEach(grant => {
      const item = createElement('li');
      item.appendChild(createElement('strong', '', proficiencyLabel(grant.type, grant.id)));
      item.appendChild(createElement('span', 'grant-source', grant.source));
      list.appendChild(item);
    });
    group.appendChild(list);
    grantGrid.appendChild(group);
  });
  overview.appendChild(grantGrid);
  container.appendChild(overview);
  for (const conflict of resolved.conflicts || []) {
    container.appendChild(createElement('p', 'conflict-note', typeof conflict === 'string' ? conflict : conflict.message || `Совпадение: ${proficiencyLabel(conflict.type, conflict.id)}. Выберите замену ниже.`));
  }
  container.appendChild(createElement('p', 'choice-help', 'Навыки класса выбираются из списка класса. При совпадении выданных навыков или инструментов появляется отдельный выбор замены того же типа. Владение не складывается само с собой.'));
  const fields = createElement('div', 'mechanics-grid');
  const choices = character.proficiencyChoices || {};
  const slots = resolved.slots || [];
  const groupLabels = { skill: 'Навыки', tool: 'Инструменты', language: 'Языки', weapon: 'Оружие', expertise: 'Компетентность', skillOrTool: 'Навык или инструмент', weaponOrTool: 'Оружие или инструмент' };
  for (const type of [...new Set(slots.map(slot => slot.type))]) {
    const group = createElement('section', 'mechanics-group');
    group.appendChild(createElement('h3', '', groupLabels[type] || type));
    slots.filter(slot => slot.type === type).forEach(slot => {
      const options = slot.options.map(option => {
        const id = typeof option === 'string' ? option : option.value || option.id;
        const actualType = CharacterRules.optionType(type, id);
        const duplicate = (!slot.grantExpertise && fixed.some(grant => grant.type === actualType && grant.id === id)) || slots.some(other => other.id !== slot.id && !!other.grantExpertise === !!slot.grantExpertise && CharacterRules.optionType(other.type, choices[other.id]) === actualType && choices[other.id] === id);
        return { value: id, label: (typeof option === 'object' && option.label || proficiencyLabel(type, id)) + (duplicate ? ' · уже выбрано' : ''), disabled: duplicate && choices[slot.id] !== id };
      });
      renderChoiceSelect(group, { id: slot.id, label: slot.label, description: slot.description, options, value: choices[slot.id], onChange(value) {
        character.proficiencyChoices = { ...choices, [slot.id]: value };
      } });
    });
    fields.appendChild(group);
  }
  container.appendChild(fields);
  const activeErrors = (resolved.errors || []).filter(error => choices[error.id]);
  if (activeErrors.length) showValidationErrors(activeErrors);
}

function renderMechanicalSummary(container) {
  const stats = getDerivedCharacter();
  const extras = getCreationExtras();
  const profs = getResolvedProficiencies();
  const section = createElement('section', 'result-section');
  section.appendChild(createElement('h3', '', 'Игровые показатели'));
  const list = createElement('dl', 'summary-grid');
  appendDefinition(list, 'Хиты', stats.hp ?? stats.hitPoints);
  appendDefinition(list, 'Класс доспеха', stats.armorClass ?? extras.armorClass);
  appendDefinition(list, 'Скорость', typeof stats.speed === 'number' ? `${stats.speed} футов` : stats.speed?.walk);
  appendDefinition(list, 'Инициатива', signedNumber(stats.initiative));
  appendDefinition(list, 'Кости хитов', characterHitDiceLabel(stats, extras));
  appendDefinition(list, 'Бонус мастерства', '+2');
  appendDefinition(list, 'Пассивное Восприятие', stats.passivePerception);
  for (const [id, label] of [['darkvision','Тёмное зрение'],['fly','Полёт'],['swim','Плавание'],['climb','Лазание']]) if (stats[id]) appendDefinition(list, label, `${stats[id]} футов`);
  for (const [key, type, label] of [['skills', 'skill', 'Навыки'], ['tools', 'tool', 'Инструменты'], ['languages', 'language', 'Языки'], ['weapons', 'weapon', 'Оружие'], ['armor', 'armor', 'Доспехи'], ['savingThrows', 'save', 'Спасброски'], ['expertise', 'expertise', 'Компетентность']]) {
    const values = profs[key];
    if (Array.isArray(values)) appendDefinition(list, label, values.map(item => proficiencyLabel(type, typeof item === 'string' ? item : item.id)).join(', '));
  }
  section.appendChild(list);
  const choices = CreationOptions.getChoices(character, getCreationContext());
  const choiceList = createElement('dl', 'summary-grid');
  choices.forEach(choice => {
    const values = Array.isArray(character[choice.id]) ? character[choice.id] : [character[choice.id]];
    appendDefinition(choiceList, choice.label, values.map(value => choice.options.find(option => option.value === value)?.label).filter(Boolean).join(', '));
  });
  section.appendChild(choiceList);
  container.appendChild(section);
  const checks = createElement('section', 'result-section');
  checks.appendChild(createElement('h3', '', 'Навыки и спасброски'));
  const checkList = createElement('dl', 'summary-grid');
  Object.entries(stats.skills || {}).forEach(([id, value]) => appendDefinition(checkList, proficiencyLabel('skill', id), `${signedNumber(value)}${profs.expertise.includes(id) ? ' · компетентность' : profs.skills.includes(id) ? ' · владение' : ''}`));
  Object.entries(stats.saves || {}).forEach(([id, value]) => appendDefinition(checkList, proficiencyLabel('save', id), signedNumber(value)));
  checks.appendChild(checkList);
  container.appendChild(checks);
  appendResultList(container, 'Снаряжение', [
    ...(extras.equipment || []).map(item => `${item.label || item.id} × ${item.quantity || 1}`),
    extras.money ? `Монеты: ${Object.entries(extras.money).filter(([,n]) => n).map(([id,n]) => `${n} ${{cp:'мм',sp:'см',ep:'эм',gp:'зм',pp:'пм'}[id] || id}`).join(', ') || '0'}` : ''
  ]);
  appendResultList(container, 'Атаки', (extras.attacks || []).map(attack => `${attack.label}: ${signedNumber(attack.attackBonus)} к попаданию, ${attack.damage} урона${attack.notes?.length ? `. ${attack.notes.join(' ')}` : ''}`));
  if (extras.spellcasting) {
    const casting = extras.spellcasting;
    const castings=extras.spellcastingByClass?.length ? extras.spellcastingByClass : [casting];
    const details=castings.map(item=>`${item.label ? `${plainLabel(item.label)} ${item.level}: ` : ''}базовая характеристика ${ABILITY_LABELS.find(a => a.id === item.ability)?.label}; атака ${signedNumber(item.attackBonus)}; Сл спасброска ${item.saveDC}.`);
    const ordinary=Object.entries(casting.slotTiers||{}).map(([level,count])=>`${count} × ${level}-й круг`).join(', ');
    if(ordinary) details.push(`Ячейки заклинаний: ${ordinary}; восстановление после долгого отдыха.`);
    if(casting.pactSlots)details.push(`Магия договора: ${casting.pactSlots.count} × ${casting.pactSlots.level}-й круг; восстановление после короткого или долгого отдыха.`);
    appendResultList(container, 'Использование заклинаний', details);
  }
  appendResultList(container, 'Заклинания и заговоры', (extras.spells || []).map(spell => `${spell.label || spell.id}${spell.ability ? ` · ${ABILITY_LABELS.find(a => a.id === spell.ability)?.label || spell.ability}` : ''} · ${spell.level ? `${spell.level}-й уровень` : 'заговор'} · ${spell.source}${spell.status ? ` · ${{prepared:'подготовлено',known:'известно',spellbook:'в книге',racial:'от расы',ritual:'ритуал',feat:'от черты',cantrip:'известно',invocation:'воззвание',feature:'от умения'}[spell.status] || spell.status}` : ''}${spell.usage ? ` · ${spell.usage}` : ''}`));
  appendResultList(container, 'Ресурсы', (extras.resources || []).map(resource => `${resource.name}: максимум ${resource.max}; ${resource.recovery || `восстановление после ${resource.rest === 'short-rest' ? 'короткого или долгого' : 'долгого'} отдыха`}.`));
  appendResultList(container, 'Особенности и примечания', [...new Set([...(stats.notes || []), ...(extras.features || []).map(feature => `${feature.name}: ${feature.description}`)])]);
}

function signedNumber(value) { return Number.isFinite(value) ? `${value >= 0 ? '+' : ''}${value}` : '—'; }

function appendResultList(container, title, items) {
  if (!items.filter(Boolean).length) return;
  const section = createElement('section', 'result-section');
  section.appendChild(createElement('h3', '', title));
  const list = createElement('ul', 'mechanical-list');
  items.filter(Boolean).forEach(item => list.appendChild(createElement('li', '', item)));
  section.appendChild(list);
  container.appendChild(section);
}
