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
  return CreationOptions.derive(character, { ...context, proficiencies });
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

function renderMechanics(container) {
  const choices = CreationOptions.getChoices(character, getCreationContext());
  const wrapper = createElement('div', 'mechanics-grid');
  choices.forEach(choice => {
    const count = choice.count ?? 1;
    const previous = character[choice.id];
    const previousValues = Array.isArray(previous) ? previous : previous ? [previous] : [];
    const selected = previousValues.slice(0, count);
    if (previous !== undefined) character[choice.id] = count === 1 ? selected[0] || '' : selected;
    const group = createElement('section', 'mechanics-group');
    registerFieldNode(choice.id, group);
    if (previousValues.length > count) group.appendChild(createElement('p', 'conflict-note', `После изменения персонажа доступно ${count} вместо ${previousValues.length} выборов. Лишние пункты сняты; проверьте оставшиеся.`));
    if (count > 1) group.appendChild(createElement('h3', '', `${choice.label} · ${selected.filter(Boolean).length} / ${count}`));
    for (let index = 0; index < count; index++) {
      renderChoiceSelect(group, {
        id: count === 1 ? choice.id : `${choice.id}_${index}`,
        label: count === 1 ? choice.label : `${choice.label}: выбор ${index + 1}`,
        description: index === 0 ? choice.description : '',
        options: choice.options.map(option => ({ ...option, disabled: count > 1 && selected.some((item, position) => position !== index && item === option.value) })),
        value: selected[index],
        onChange(value) {
          if (count === 1) character[choice.id] = value;
          else { const next = selected.slice(0, count); next[index] = value; character[choice.id] = next; }
        }
      });
    }
    wrapper.appendChild(group);
  });
  if (!choices.length) wrapper.appendChild(createElement('p', '', 'Для этого сочетания нет дополнительных выборов первого уровня.'));
  container.appendChild(wrapper);
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
  const list = createElement('ul', 'grant-list');
  const fixed = resolved.fixed || CharacterRules.getProficiencyPlan(character, getCreationExtras()).fixed;
  fixed.forEach(grant => {
    const item = createElement('li');
    item.appendChild(createElement('strong', '', proficiencyLabel(grant.type, grant.id)));
    item.appendChild(createElement('span', 'grant-source', grant.source));
    list.appendChild(item);
  });
  overview.appendChild(list);
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
        const duplicate = fixed.some(grant => grant.type === actualType && grant.id === id) || slots.some(other => other.id !== slot.id && CharacterRules.optionType(other.type, choices[other.id]) === actualType && choices[other.id] === id);
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
  appendDefinition(list, 'Кость хитов', `1к${stats.hitDie}`);
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
    appendResultList(container, 'Использование заклинаний', [`Базовая характеристика: ${ABILITY_LABELS.find(a => a.id === casting.ability)?.label}; атака ${signedNumber(casting.attackBonus)}; Сл спасброска ${casting.saveDC}.`, `Ячейки: ${casting.slots} × ${casting.slotLevel}-го уровня; восстановление после ${casting.slotRecovery === 'short-rest' ? 'короткого или долгого' : 'долгого'} отдыха.`]);
  }
  appendResultList(container, 'Заклинания и заговоры', (extras.spells || []).map(spell => `${spell.label || spell.id} · ${spell.level ? `${spell.level}-й уровень` : 'заговор'} · ${spell.source}${spell.status ? ` · ${{prepared:'подготовлено',known:'известно',spellbook:'в книге',racial:'от расы',ritual:'ритуал',feat:'от черты',cantrip:'известно'}[spell.status] || spell.status}` : ''}${spell.usage ? ` · ${spell.usage}` : ''}`));
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
