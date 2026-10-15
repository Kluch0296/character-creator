let config;
let character = {};
let currentPageIndex = 0;
let activeAdditionalFieldIds = [];
let validationSummaryNode = null;
let renderedFieldNodes = new Map();
let modalSequence = 0;
let lssImportSession = null;
let lssLoadSequence = 0;
let lastExportNotice = '';
let lssOriginal = null;
let lssStorage = 'none';
let lssAdvancementNotice = '';

const STORAGE_KEY = 'dnd-character-draft-v2';
const DEFAULT_FLOW = ['class', 'race', 'background', 'abilities', 'mechanics', 'general', 'proficiencies'];
const ABILITY_LABELS = [
  { id: 'strength', short: 'СИЛ', label: 'Сила' },
  { id: 'dexterity', short: 'ЛОВ', label: 'Ловкость' },
  { id: 'constitution', short: 'ТЕЛ', label: 'Телосложение' },
  { id: 'intelligence', short: 'ИНТ', label: 'Интеллект' },
  { id: 'wisdom', short: 'МДР', label: 'Мудрость' },
  { id: 'charisma', short: 'ХАР', label: 'Харизма' }
];
const STEP_LABELS = {
  class: 'Класс',
  race: 'Раса',
  background: 'Предыстория',
  abilities: 'Характеристики',
  mechanics: 'Умения и снаряжение',
  proficiencies: 'Владения',
  general: 'Образ'
};
const FIELD_LABELS = {
  class: 'Класс',
  race: 'Раса',
  race_sub: 'Подраса',
  background: 'Предыстория',
  name: 'Имя',
  gender: 'Пол',
  age: 'Возраст',
  height: 'Рост',
  weight: 'Вес',
  concept: 'Заметка'
};

function createElement(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}

function setAttributes(node, attributes) {
  Object.entries(attributes).forEach(([name, value]) => {
    if (value !== undefined && value !== null) node.setAttribute(name, String(value));
  });
  return node;
}

function toggleClass(node, className, enabled) {
  if (enabled) node.classList.add(className);
  else node.classList.remove(className);
}

function getApp() {
  return document.getElementById('app');
}

function renderLoading() {
  const app = getApp();
  if (!app) return;
  app.innerHTML = '';
  app.setAttribute('aria-busy', 'true');
  const state = createElement('div', 'boot-state');
  state.setAttribute('role', 'status');
  state.appendChild(createElement('span', 'boot-mark', '20'));
  state.appendChild(createElement('p', '', 'Готовим мастер персонажа…'));
  app.appendChild(state);
}

async function loadConfig() {
  renderLoading();
  try {
    if (typeof LevelUpRules === 'undefined' || typeof LevelUpData === 'undefined' || typeof showAdvancement !== 'function' || typeof CharacterRules === 'undefined' || typeof CreationOptions === 'undefined' || typeof LssExport === 'undefined' || typeof LssImport === 'undefined' || typeof SpellInfo === 'undefined' || typeof renderMechanics !== 'function' || typeof renderCharacterSheet !== 'function') throw new Error('Не удалось загрузить модули правил. Обновите страницу или проверьте доступность файлов приложения.');
    const response = await fetch('config.json', { cache: 'no-store' });
    if (response && response.ok === false) {
      throw new Error(`Конфигурация недоступна (HTTP ${response.status || 'ошибка'})`);
    }
    const data = await response.json();
    config = prepareConfig(data);
    restoreDraft();
    renderPage();
  } catch (error) {
    renderLoadError(error);
  }
}

function prepareConfig(data) {
  if (!data || !Array.isArray(data.pages) || data.pages.length === 0) {
    throw new Error('В конфигурации нет страниц мастера.');
  }

  const pageIds = new Set();
  data.pages.forEach(page => {
    if (!page || typeof page.id !== 'string' || !page.id.trim()) {
      throw new Error('У каждой страницы должен быть непустой id.');
    }
    if (pageIds.has(page.id)) throw new Error(`Повторяется id страницы: ${page.id}`);
    pageIds.add(page.id);
    validateConfigElement(page, `страница ${page.id}`);
  });

  const flow = Array.isArray(data.flow) && data.flow.length ? data.flow : DEFAULT_FLOW;
  const pagesById = new Map(data.pages.map(page => [page.id, page]));
  const orderedPages = flow.map(id => {
    const page = pagesById.get(id);
    if (!page) throw new Error(`Страница из flow не найдена: ${id}`);
    return page;
  });

  return {
    ...data,
    allPages: data.pages,
    pages: orderedPages,
    flow: [...flow]
  };
}

function validateConfigElement(element, context) {
  if (element.link && !getSafeDndUrl(element.link)) {
    throw new Error(`Недопустимая ссылка в ${context}.`);
  }
  if (element.image && !/^img\/[A-Za-z0-9._-]+$/.test(element.image)) {
    throw new Error(`Недопустимый путь изображения в ${context}.`);
  }
  if (element.options) {
    if (!Array.isArray(element.options) || element.options.length === 0) {
      throw new Error(`Пустой список вариантов в ${context}.`);
    }
    const values = new Set();
    element.options.forEach(option => {
      if (!option || option.value === undefined || !option.label) {
        throw new Error(`Некорректный вариант в ${context}.`);
      }
      const key = String(option.value);
      if (values.has(key)) throw new Error(`Повторяется value ${key} в ${context}.`);
      values.add(key);
      validateConfigElement(option, `${context}, вариант ${option.label}`);
    });
  }
  if (element.elements) {
    if (!Array.isArray(element.elements) || element.elements.length === 0) {
      throw new Error(`Пустой список элементов в ${context}.`);
    }
    element.elements.forEach(child => validateConfigElement(child, `${context}, поле ${child.id || '?'}`));
  }
  if (element.additionalFields) {
    if (!Array.isArray(element.additionalFields) || element.additionalFields.length === 0) {
      throw new Error(`Пустой список дополнительных полей в ${context}.`);
    }
    element.additionalFields.forEach(child => validateConfigElement(child, `${context}, доп. поле ${child.id || '?'}`));
  }
  if (element.suboptions) {
    if (!Array.isArray(element.suboptions) || element.suboptions.length === 0) {
      throw new Error(`Пустой список подрас в ${context}.`);
    }
    const values = new Set();
    element.suboptions.forEach(option => {
      const key = String(option.value);
      if (values.has(key)) throw new Error(`Повторяется подраса ${key} в ${context}.`);
      values.add(key);
      validateConfigElement(option, `${context}, подраса ${option.label}`);
    });
  }
}

function renderLoadError(error) {
  const app = getApp();
  if (!app) return;
  app.innerHTML = '';
  app.setAttribute('aria-busy', 'false');

  const panel = createElement('main', 'load-error');
  panel.setAttribute('role', 'alert');
  panel.appendChild(createElement('div', 'load-error__mark', '!'));
  panel.appendChild(createElement('h1', '', 'Не удалось открыть мастер'));
  panel.appendChild(createElement('p', '', 'Проверьте, что проект запущен через локальный веб-сервер, и попробуйте ещё раз.'));
  const details = createElement('p', 'load-error__details', error && error.message ? error.message : 'Неизвестная ошибка');
  panel.appendChild(details);
  const retry = createElement('button', 'primary-button', 'Повторить');
  retry.type = 'button';
  retry.addEventListener('click', loadConfig);
  panel.appendChild(retry);
  app.appendChild(panel);
}

function restoreDraft() {
  pruneLssOriginal();
  const base = { level: config.meta && config.meta.level ? config.meta.level : 1 };
  character = base;
  currentPageIndex = 0;

  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const draft = JSON.parse(raw);
    if (!draft || !draft.character || draft.edition !== config.meta.edition) return;
    if (typeof draft.character !== 'object' || Array.isArray(draft.character)) return;
    character = { ...base, ...draft.character };
    restoreLssOriginal();
    if (typeof LevelUpRules !== 'undefined') {
      const upgraded = LevelUpRules.upgradeLegacyFoundation(character, getAdvancementContext());
      if (upgraded !== character) {
        // Persist before validation can route an incomplete draft to editable creation.
        character = upgraded;
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...draft, character }));
          markDraftSaved(true);
        } catch (error) {
          markDraftSaved(false);
        }
      }
      // Heroes who already levelled a restricted subclass confirmed the DM permission in their ledger; creation need not ask again.
      // The field is outside the foundation fingerprint, so adding it never invalidates saved advancement.
      // The migration is best-effort: a malformed ledger must never reach the outer catch, which would discard the hero.
      try {
        const entries = character.advancement?.entries;
        if (!character.creation_campaign_permission && LevelUpRules.subclass(character)?.restrictions
          && Array.isArray(entries)
          && entries.some(entry => entry && typeof entry === 'object' && (!entry.classId || entry.classId === character.class) && entry.choices?.campaign_permission === 'yes')) {
          character = { ...character, creation_campaign_permission: 'yes' };
          try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...draft, character }));
            markDraftSaved(true);
          } catch (error) {
            markDraftSaved(false);
          }
        }
      } catch (error) {
        // Skip the migration; damaged ledgers are reported by LevelUpRules.inspect.
      }
    }
    if (draft.pageId === 'result') {
      currentPageIndex = config.pages.length;
    } else {
      const restoredIndex = config.pages.findIndex(page => page.id === draft.pageId);
      if (restoredIndex >= 0) currentPageIndex = restoredIndex;
    }
    // New required steps must also be completed in previously saved drafts.
    const savedIndex = currentPageIndex;
    for (let index = 0; index < savedIndex; index++) {
      currentPageIndex = index;
      if (validateCurrentPage().length) return;
    }
    currentPageIndex = savedIndex;
  } catch (error) {
    character = base;
    currentPageIndex = 0;
  }
}

function saveDraft(pageId) {
  if (!config) return;
  try {
    if (typeof window === 'undefined' || !window.localStorage) throw new Error('localStorage unavailable');
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 3,
      edition: config.meta.edition,
      pageId: pageId || (config.pages[currentPageIndex] ? config.pages[currentPageIndex].id : 'result'),
      character
    }));
    markDraftSaved(true);
  } catch (error) {
    // Браузер может запрещать localStorage. Мастер остаётся работоспособным без автосохранения.
    markDraftSaved(false);
  }
  scheduleLiveRefresh();
}

function clearDraft() {
  clearLssOriginal();
  try {
    if (typeof window !== 'undefined' && window.localStorage) window.localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    // Нечего делать: локальное сохранение необязательно.
  }
}

function renderPage() {
  const app = getApp();
  if (!app || !config) return;
  if (lssImportSession) { renderLssImport(app); return; }
  if (currentPageIndex >= config.pages.length && character.pendingAdvancement && typeof LevelUpRules!=='undefined') { showAdvancement(app); return; }
  if (currentPageIndex >= config.pages.length) {
    showResult(app);
    return;
  }

  cancelLiveRefresh();
  liveRefs = null;
  renderedFieldNodes = new Map();
  activeAdditionalFieldIds = [];
  app.innerHTML = '';
  app.setAttribute('aria-busy', 'false');

  const shell = createElement('div', 'app-shell');
  renderHeader(shell);
  const stepper = createStepperNode();
  shell.appendChild(stepper);
  const layout = createElement('div', 'wizard-layout');
  const main = createElement('main', 'wizard-main');

  const page = config.pages[currentPageIndex];
  const card = createElement('section', `page-card page-card--${page.id}`);
  setAttributes(card, { 'aria-labelledby': 'page-title' });

  const headingGroup = createElement('div', 'page-heading');
  const eyebrow = createElement('p', 'page-eyebrow', `Шаг ${currentPageIndex + 1} из ${config.pages.length}`);
  const title = createElement('h2', '', page.title);
  title.id = 'page-title';
  title.tabIndex = -1;
  headingGroup.appendChild(eyebrow);
  headingGroup.appendChild(title);
  if (page.description) headingGroup.appendChild(createElement('p', 'page-description', page.description));
  card.appendChild(headingGroup);

  validationSummaryNode = createElement('div', 'validation-summary');
  validationSummaryNode.setAttribute('role', 'alert');
  validationSummaryNode.hidden = true;
  card.appendChild(validationSummaryNode);

  const content = createElement('div', 'page-content');
  const elements = page.elements || [page];
  elements.forEach(element => renderElement(content, element));
  card.appendChild(content);
  const status = renderNavigation(card);
  renderLssImportNote(main, true);
  main.appendChild(card);
  renderScopeNote(main);
  layout.appendChild(main);
  const sheet = createElement('aside', 'character-sheet');
  sheet.setAttribute('aria-label', 'Лист персонажа');
  layout.appendChild(sheet);
  shell.appendChild(layout);
  app.appendChild(shell);

  syncActiveAdditionalFieldIds();
  const steps = getStepStates(false);
  fillStepper(stepper, steps, false);
  renderCharacterSheet(sheet, steps);
  updateActionStatus(status, steps[currentPageIndex].errors);
  trackActionBarHeight(card.querySelector('.wizard-actions'));
  saveDraft(page.id);
  liveRefs = { stepper, sheet, status };
  focusPageTitle(title);
}

function renderHeader(container) {
  const header = createElement('header', 'site-header');
  const brand = createElement('div', 'brand');
  const mark = createElement('span', 'brand-mark', '20');
  mark.setAttribute('aria-hidden', 'true');
  const brandCopy = createElement('div', 'brand-copy');
  brandCopy.appendChild(createElement('p', 'brand-kicker', config.meta.edition));
  brandCopy.appendChild(createElement('h1', '', config.meta.title));
  brand.appendChild(mark);
  brand.appendChild(brandCopy);
  header.appendChild(brand);

  const tools = createElement('div', 'header-tools');
  saveIndicatorNode = createElement('span', 'save-indicator');
  markDraftSaved(draftSaved);
  tools.appendChild(saveIndicatorNode);
  const importInput = createElement('input');
  importInput.type = 'file';
  importInput.accept = '.json,application/json';
  importInput.id = 'lss-file-input';
  importInput.hidden = true;
  importInput.tabIndex = -1;
  importInput.setAttribute('aria-hidden', 'true');
  importInput.addEventListener('change', () => { const file = importInput.files && importInput.files[0]; importInput.value = ''; openLssFile(file); });
  tools.appendChild(importInput);
  const importButton = createElement('button', 'header-button', 'Загрузить из LSS');
  importButton.type = 'button';
  importButton.addEventListener('click', openLssPicker);
  tools.appendChild(importButton);
  const reset = createElement('button', 'header-button', 'Начать заново');
  reset.type = 'button';
  reset.addEventListener('click', confirmRestart);
  tools.appendChild(reset);
  const reference = createDndLink(config.meta.reference, 'Справочник dnd.su ↗');
  if (reference) {
    reference.classList.add('header-link');
    tools.appendChild(reference);
  }
  header.appendChild(tools);
  container.appendChild(header);
}

function confirmRestart() {
  const confirmed = typeof window === 'undefined' || typeof window.confirm !== 'function' || window.confirm('Начать заново? Текущий черновик будет удалён.');
  if (confirmed) restartWizard();
}

function renderProgress(container, complete) {
  const nav = createStepperNode();
  fillStepper(nav, getStepStates(complete), complete);
  container.appendChild(nav);
  return nav;
}

function renderScopeNote(container) {
  const note = createElement('aside', 'scope-note');
  note.appendChild(createElement('span', 'scope-note__icon', 'i'));
  const copy = createElement('p');
  copy.appendChild(document.createTextNode('Создание и прокачка до 3-го уровня, правила 2014 года. Доступность книг и дополнительных вариантов согласуйте с Мастером. Справка: '));
  const link = createDndLink('https://5e14.dnd.su/newbie/character-creation/', 'правилам 5e14');
  if (link) copy.appendChild(link);
  copy.appendChild(document.createTextNode('.'));
  note.appendChild(copy);
  container.appendChild(note);
}

function renderElement(container, element) {
  if (element.type === 'buttons') {
    renderButtons(container, element);
  } else if (element.type === 'text' || element.type === 'textarea' || element.type === 'radio' || element.type === 'checkbox') {
    renderField(element, container);
  } else if (element.type === 'abilities') {
    renderAbilities(container, element);
  } else if (element.type === 'mechanics') {
    renderMechanics(container);
  } else if (element.type === 'proficiencies') {
    renderProficiencies(container);
  }
}

function renderNavigation(container) {
  const actions = createElement('div', 'wizard-actions');
  if (currentPageIndex > 0) {
    const previous = config.pages[currentPageIndex - 1];
    const previousLabel = STEP_LABELS[previous.id] || previous.title;
    const back = createElement('button', 'secondary-button wizard-back');
    back.type = 'button';
    back.setAttribute('aria-label', `Назад: ${previousLabel}`);
    back.appendChild(document.createTextNode('← '));
    back.appendChild(createElement('span', 'nav-step-name', previousLabel));
    back.addEventListener('click', () => {
      currentPageIndex -= 1;
      renderPage();
      scrollToPageTop();
    });
    actions.appendChild(back);
  }

  const status = createElement('p', 'wizard-status');
  status.setAttribute('aria-live', 'polite');
  actions.appendChild(status);

  const isLast = currentPageIndex === config.pages.length - 1;
  const next = createElement('button', 'primary-button wizard-next');
  if (isLast) {
    next.textContent = 'Создать карточку →';
  } else {
    const upcoming = config.pages[currentPageIndex + 1];
    const upcomingLabel = STEP_LABELS[upcoming.id] || upcoming.title;
    next.setAttribute('aria-label', `Далее: ${upcomingLabel}`);
    next.appendChild(document.createTextNode('Далее'));
    next.appendChild(createElement('span', 'nav-step-name', `: ${upcomingLabel}`));
    next.appendChild(document.createTextNode(' →'));
  }
  next.type = 'button';
  next.addEventListener('click', () => {
    const errors = validateCurrentPage();
    if (errors.length) {
      showValidationErrors(errors);
      return;
    }
    currentPageIndex += 1;
    if (currentPageIndex >= config.pages.length) {
      const invalid = findFirstInvalidPage();
      if (invalid) {
        currentPageIndex = invalid.index;
        renderPage();
        showValidationErrors(invalid.errors);
        return;
      }
    }
    saveDraft(currentPageIndex >= config.pages.length ? 'result' : config.pages[currentPageIndex].id);
    renderPage();
    scrollToPageTop();
  });
  actions.appendChild(next);
  container.appendChild(actions);
  return status;
}

function renderButtons(container, element) {
  if (element.id === 'race') {
    renderRaceSelection(container, element);
    return;
  }

  const group = createElement('div', `choice-grid choice-grid--${element.id}`);
  group.setAttribute('role', 'group');
  group.setAttribute('aria-label', element.title || FIELD_LABELS[element.id] || 'Варианты');
  registerFieldNode(element.id, group);
  const buttons = [];
  const detail = createElement('div', 'selection-detail');
  detail.setAttribute('aria-live', 'polite');

  const updateSelection = selected => {
    buttons.forEach(({ button, option }) => {
      const isSelected = selected && option.value === selected.value;
      toggleClass(button, 'is-selected', isSelected);
      button.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });
    renderSelectionDetail(detail, selected);
  };

  element.options.forEach(option => {
    const button = createChoiceButton(option, element.id);
    buttons.push({ button, option });
    button.addEventListener('click', () => {
      character[element.id] = option.value;
      updateSelection(option);
      clearValidationFor(element.id);
      saveDraft();
    });
    group.appendChild(button);
  });

  const selected = element.options.find(option => option.value === character[element.id]);
  updateSelection(selected || null);
  container.appendChild(group);
  container.appendChild(detail);
}

function createChoiceButton(option, groupId) {
  const button = createElement('button', `choice-card ${option.image ? 'choice-card--with-image' : ''}`);
  button.type = 'button';
  button.setAttribute('aria-pressed', 'false');
  if (option.image) {
    const image = createElement('img', 'choice-card__image');
    image.src = option.image;
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.width = 64;
    image.height = 64;
    image.addEventListener('error', () => image.classList.add('is-broken'));
    button.appendChild(image);
  }

  const body = createElement('span', 'choice-card__body');
  const top = createElement('span', 'choice-card__topline');
  top.appendChild(createElement('span', 'choice-card__label', option.label));
  if (option.source) top.appendChild(createElement('span', 'source-badge', option.source));
  body.appendChild(top);
  if (option.description) body.appendChild(createElement('span', 'choice-card__description', option.description));
  const classRule = groupId === 'class' ? CharacterRules.CLASSES[option.value] : null;
  const guide = groupId === 'class' ? getClassGuide(option.value) : null;
  if (classRule || guide) {
    const meta = createElement('span', 'choice-card__meta');
    if (classRule) meta.appendChild(createElement('span', 'meta-chip', `Кость хитов к${classRule.hitDie}`));
    if (guide) meta.appendChild(createElement('span', 'meta-chip meta-chip--key', guide.primary.map(id => abilityInfo(id).label).join(' или ')));
    body.appendChild(meta);
  }
  button.appendChild(body);
  button.setAttribute('data-value', String(option.value));
  button.setAttribute('data-group', groupId);
  return button;
}

function renderSelectionDetail(container, option) {
  container.innerHTML = '';
  if (!option) return;
  const row = createElement('div', 'selection-detail__inner');
  const copy = createElement('div');
  copy.appendChild(createElement('strong', '', option.label));
  if (option.description) copy.appendChild(createElement('p', '', option.description));
  row.appendChild(copy);
  const link = createDndLink(option.link, 'Подробнее на dnd.su');
  if (link) row.appendChild(link);
  container.appendChild(row);
}

function updateAdditionalFields(panel, option) {
  if (!option.additionalFields || !option.additionalFields.length) return;
  const section = createElement('section', 'additional-fields');
  option.additionalFields.forEach(field => {
    if (isDeferredRaceField(field)) return;
    if (field.type === 'popup') {
      const wrapper = createElement('div', 'popup-field');
      wrapper.setAttribute('data-field-id', field.id);
      if (field.title) wrapper.appendChild(createElement('h5', '', field.title));
      const button = createElement('button', 'popup-open-button', field.label || 'Открыть выбор');
      button.type = 'button';
      const result = createElement('p', 'popup-result');
      updatePopupResult(field, result, button);
      button.addEventListener('click', () => openPopup(field, result, button));
      wrapper.appendChild(button);
      wrapper.appendChild(result);
      section.appendChild(wrapper);
      (field.additionalFields || []).forEach(inner => registerFieldNode(inner.id, wrapper));
    } else {
      renderField(field, section);
    }
  });
  panel.appendChild(section);
}

function updatePopupResult(field, result, button) {
  const labels = (field.additionalFields || [])
    .map(inner => getFieldValueLabel(inner, character[inner.id]))
    .filter(Boolean);
  if (labels.length) {
    result.textContent = labels.join(' · ');
    result.hidden = false;
  } else {
    result.textContent = 'Выбор пока не сделан';
    result.hidden = false;
  }
  const complete = labels.length === (field.additionalFields || []).filter(inner => inner.required !== false).length;
  toggleClass(button, 'is-complete', complete);
}

function openPopup(field, resultContainer, opener) {
  const fields = field.additionalFields || [];
  if (!fields.length) return;
  const snapshot = new Map(fields.map(inner => [inner.id, cloneValue(character[inner.id])]));
  const root = document.body || getApp();
  const overlay = createElement('div', 'modal-overlay');
  const dialog = createElement('section', 'modal-dialog');
  modalSequence += 1;
  const titleId = `modal-title-${modalSequence}`;
  setAttributes(dialog, { role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': titleId });

  const header = createElement('div', 'modal-header');
  const title = createElement('h3', '', field.title || 'Сделайте выбор');
  title.id = titleId;
  const close = createElement('button', 'modal-close', '×');
  close.type = 'button';
  close.setAttribute('aria-label', 'Закрыть без сохранения');
  header.appendChild(title);
  header.appendChild(close);
  dialog.appendChild(header);

  const content = createElement('div', 'modal-content');
  const error = createElement('p', 'modal-error');
  error.setAttribute('role', 'alert');
  error.hidden = true;
  content.appendChild(error);
  fields.forEach(inner => renderField(inner, content, {
    persist: false,
    register: false,
    onChange: () => {
      error.hidden = true;
    }
  }));
  dialog.appendChild(content);

  const footer = createElement('div', 'modal-actions');
  const cancel = createElement('button', 'secondary-button', 'Отмена');
  cancel.type = 'button';
  const done = createElement('button', 'primary-button', 'Сохранить выбор');
  done.type = 'button';
  footer.appendChild(cancel);
  footer.appendChild(done);
  dialog.appendChild(footer);
  overlay.appendChild(dialog);
  root.appendChild(overlay);
  if (document.body) document.body.classList.add('modal-open');

  const restoreSnapshot = () => {
    snapshot.forEach((value, id) => {
      if (value === undefined) delete character[id];
      else character[id] = cloneValue(value);
    });
  };
  const closeModal = (save, restore) => {
    if (restore) restoreSnapshot();
    if (save) saveDraft();
    document.removeEventListener('keydown', onKeyDown);
    overlay.remove();
    if (document.body) document.body.classList.remove('modal-open');
    updatePopupResult(field, resultContainer, opener);
    if (opener && typeof opener.focus === 'function') opener.focus();
  };
  const onKeyDown = event => {
    if (event.key === 'Escape') closeModal(false, true);
  };

  close.addEventListener('click', () => closeModal(false, true));
  cancel.addEventListener('click', () => closeModal(false, true));
  overlay.addEventListener('click', event => {
    if (event.target === overlay) closeModal(false, true);
  });
  done.addEventListener('click', () => {
    const message = getPopupValidationMessage(field);
    if (message) {
      error.textContent = message;
      error.hidden = false;
      dialog.classList.add('shake');
      const removeShake = () => dialog.classList.remove('shake');
      dialog.addEventListener('animationend', removeShake, { once: true });
      return;
    }
    fields.forEach(inner => clearValidationFor(inner.id));
    closeModal(true, false);
  });
  document.addEventListener('keydown', onKeyDown);

  const firstInput = content.querySelector('input') || content.querySelector('select') || close;
  if (firstInput && typeof firstInput.focus === 'function') firstInput.focus();
}

function renderField(field, container, options = {}) {
  const persist = options.persist !== false;
  const shouldRegister = options.register !== false;
  const wrapperTag = field.type === 'radio' || field.type === 'checkbox' ? 'fieldset' : 'div';
  const wrapper = createElement(wrapperTag, `form-field form-field--${field.type}`);
  wrapper.setAttribute('data-field-id', field.id);
  if (shouldRegister) registerFieldNode(field.id, wrapper);

  const titleText = field.title || FIELD_LABELS[field.id] || 'Поле';
  if (field.type === 'radio' || field.type === 'checkbox') {
    const legend = createElement('legend', 'field-label');
    legend.appendChild(document.createTextNode(titleText));
    appendOptionalMark(legend, field);
    wrapper.appendChild(legend);
  } else {
    const label = createElement('label', 'field-label');
    label.htmlFor = `field-${field.id}`;
    label.appendChild(document.createTextNode(titleText));
    appendOptionalMark(label, field);
    wrapper.appendChild(label);
  }

  const onValueChanged = () => {
    const profileSource = CharacterRules.RACES[character.race]?.abilities;
    if (profileSource && profileSource.variantField === field.id) resetAbilityBonusChoices();
    clearValidationFor(field.id);
    if (persist) saveDraft();
    if (options.onChange) options.onChange(character[field.id]);
  };

  if (field.type === 'radio') {
    const choices = createElement('div', 'radio-grid');
    (field.options || []).forEach((option, index) => {
      const label = createElement('label', 'radio-card');
      const input = createElement('input');
      input.type = 'radio';
      input.name = field.id;
      input.value = option.value;
      input.id = `field-${field.id}-${index}`;
      input.checked = character[field.id] === option.value;
      input.addEventListener('change', () => {
        if (!input.checked) return;
        character[field.id] = option.value;
        onValueChanged();
      });
      label.appendChild(input);
      label.appendChild(createElement('span', '', option.label));
      choices.appendChild(label);
    });
    wrapper.appendChild(choices);
  } else if (field.type === 'checkbox') {
    if (!Array.isArray(character[field.id])) character[field.id] = [];
    const choices = createElement('div', 'checkbox-grid');
    (field.options || []).forEach((option, index) => {
      const label = createElement('label', 'checkbox-card');
      const input = createElement('input');
      input.type = 'checkbox';
      input.value = option.value;
      input.id = `field-${field.id}-${index}`;
      input.checked = character[field.id].includes(option.value);
      input.addEventListener('change', () => {
        if (input.checked) {
          const max = field.maxSelections || Infinity;
          if (character[field.id].length >= max) {
            input.checked = false;
            return;
          }
          if (!character[field.id].includes(option.value)) character[field.id].push(option.value);
        } else {
          character[field.id] = character[field.id].filter(value => value !== option.value);
        }
        onValueChanged();
      });
      label.appendChild(input);
      label.appendChild(createElement('span', '', option.label));
      choices.appendChild(label);
    });
    wrapper.appendChild(choices);
  } else if (field.type === 'text' || field.type === 'textarea') {
    const input = createElement(field.type === 'textarea' ? 'textarea' : 'input');
    if (field.type === 'text') input.type = 'text';
    input.id = `field-${field.id}`;
    input.placeholder = field.placeholder || '';
    input.value = character[field.id] || '';
    if (field.maxlength) input.maxLength = field.maxlength;
    if (field.inputmode) input.inputMode = field.inputmode;
    input.addEventListener('input', () => {
      character[field.id] = input.value;
      onValueChanged();
    });
    wrapper.appendChild(input);
  }

  container.appendChild(wrapper);
  return wrapper;
}

function appendOptionalMark(label, field) {
  const mark = createElement('span', 'field-requirement', field.required === false ? 'необязательно' : 'обязательно');
  label.appendChild(mark);
}

function addAbilityBonuses(target, additions) {
  Object.entries(additions || {}).forEach(([abilityId, amount]) => {
    target[abilityId] = (target[abilityId] || 0) + Number(amount);
  });
  return target;
}

function getAbilityBonusProfile() { return CharacterRules.abilityProfile(character); }

function getSelectedAbilityBonusPlan(profile) {
  if (!profile || !profile.plans) return profile;
  return profile.plans.find(plan => plan.id === character.abilityBonusPlan) || null;
}

function getAbilityBonusChoiceSlots(profile) {
  const plan = getSelectedAbilityBonusPlan(profile);
  return plan && Array.isArray(plan.choiceSlots) ? plan.choiceSlots : [];
}

function getRacialAbilityBonuses() { return CharacterRules.abilityBonuses(character); }

function getFinalAbilityValue(abilityId) {
  const base = character.abilities && character.abilities[abilityId];
  if (base === undefined || base === null || base === '') return undefined;
  const extra = typeof CreationOptions !== 'undefined' ? getCreationExtras().abilityBonuses?.[abilityId] || 0 : 0;
  return Math.min(20, Number(base) + (getRacialAbilityBonuses()[abilityId] || 0) + extra);
}

function resetAbilityBonusChoices() {
  delete character.abilityBonusPlan;
  delete character.abilityBonusChoices;
}

function formatAbilityBonus(amount) {
  return amount > 0 ? `+${amount}` : String(amount);
}

function renderAbilityBonusControls(container, onChange) {
  const profile = getAbilityBonusProfile();
  if (!profile) return;
  if (!character.abilityBonusChoices || typeof character.abilityBonusChoices !== 'object') {
    character.abilityBonusChoices = {};
  }

  const panel = createElement('section', 'racial-bonuses');
  panel.setAttribute('aria-labelledby', 'racial-bonuses-title');
  const header = createElement('div', 'racial-bonuses__header');
  const titleGroup = createElement('div');
  const title = createElement('h3', '', 'Бонусы расы');
  title.id = 'racial-bonuses-title';
  titleGroup.appendChild(title);
  const race = getSelectedRace();
  const subrace = race && race.suboptions ? race.suboptions.find(option => option.value === character.race_sub) : null;
  titleGroup.appendChild(createElement('p', '', [race && race.label, subrace && subrace.label].filter(Boolean).join(' · ')));
  header.appendChild(titleGroup);

  const fixedEntries = Object.entries(profile.fixed || {});
  if (fixedEntries.length) {
    const fixed = createElement('div', 'racial-bonuses__fixed');
    fixedEntries.forEach(([abilityId, amount]) => {
      const ability = ABILITY_LABELS.find(item => item.id === abilityId);
      fixed.appendChild(createElement('span', 'racial-bonus-chip', `${ability ? ability.short : abilityId} ${formatAbilityBonus(amount)}`));
    });
    header.appendChild(fixed);
  }
  panel.appendChild(header);

  if (profile.missingVariant) {
    panel.appendChild(createElement('p', 'racial-bonuses__note', 'Сначала завершите выбор варианта расы на предыдущем этапе.'));
    container.appendChild(panel);
    return;
  }

  if (profile.plans) {
    const plans = createElement('fieldset', 'bonus-plans');
    plans.appendChild(createElement('legend', '', 'Как распределить прибавки'));
    profile.plans.forEach(plan => {
      const label = createElement('label', 'bonus-plan');
      const input = createElement('input');
      input.type = 'radio';
      input.name = 'ability-bonus-plan';
      input.value = plan.id;
      input.checked = character.abilityBonusPlan === plan.id;
      input.addEventListener('change', () => {
        if (!input.checked) return;
        character.abilityBonusPlan = plan.id;
        character.abilityBonusChoices = {};
        clearValidationFor('abilities');
        saveDraft();
        renderPage();
      });
      label.appendChild(input);
      label.appendChild(createElement('span', '', plan.label));
      plans.appendChild(label);
    });
    panel.appendChild(plans);
  }

  const slots = getAbilityBonusChoiceSlots(profile);
  if (slots.length) {
    const choices = createElement('div', 'bonus-choices');
    slots.forEach((amount, index) => {
      const field = createElement('label', 'bonus-choice');
      field.appendChild(createElement('span', '', slots.length > 1 ? `Прибавка ${formatAbilityBonus(amount)} — выбор ${index + 1}` : `Прибавка ${formatAbilityBonus(amount)}`));
      const select = createElement('select');
      select.setAttribute('aria-label', `Характеристика для бонуса ${formatAbilityBonus(amount)}`);
      const empty = createElement('option', '', 'Выберите характеристику');
      empty.value = '';
      select.appendChild(empty);
      ABILITY_LABELS.forEach(ability => {
        if (profile.excludeFixed && profile.fixed && profile.fixed[ability.id]) return;
        const option = createElement('option', '', ability.label);
        option.value = ability.id;
        select.appendChild(option);
      });
      select.value = character.abilityBonusChoices[`slot_${index}`] || '';
      select.addEventListener('change', () => {
        if (select.value) character.abilityBonusChoices[`slot_${index}`] = select.value;
        else delete character.abilityBonusChoices[`slot_${index}`];
        clearValidationFor('abilities');
        saveDraft();
        onChange();
      });
      field.appendChild(select);
      choices.appendChild(field);
    });
    panel.appendChild(choices);
    if (profile.distinct || slots.length > 1) {
      panel.appendChild(createElement('p', 'racial-bonuses__note', 'Каждую выбранную прибавку назначьте разной характеристике.'));
    }
  } else if (profile.plans && !getSelectedAbilityBonusPlan(profile)) {
    panel.appendChild(createElement('p', 'racial-bonuses__note', 'Выберите схему, затем назначьте каждую прибавку.'));
  } else if (!fixedEntries.length) {
    panel.appendChild(createElement('p', 'racial-bonuses__note', 'У этой расы нет повышения характеристик.'));
  }

  container.appendChild(panel);
}

function formatModifier(value) {
  if (value === undefined || value === null || value === '') return '—';
  const modifier = Math.floor((Number(value) - 10) / 2);
  return modifier >= 0 ? `+${modifier}` : String(modifier);
}

function validateCurrentPage() {
  const page = config.pages[currentPageIndex];
  if (!page) return [];
  const errors = [];
  if (page.type === 'mechanics') return CreationOptions.validate(character, getCreationContext()).map(error => ({ ...error, id: error.id || error.field }));
  if (page.type === 'proficiencies') return getResolvedProficiencies().errors;
  const elements = page.elements || [page];

  elements.forEach(element => {
    if (element.type === 'abilities') {
      const message = getAbilitiesValidationMessage(element);
      if (message) errors.push({ id: 'abilities', message });
      return;
    }
    const value = character[element.id];
    if (element.options && !isEmptyValue(value)) {
      const values = Array.isArray(value) ? value : [value];
      if (values.some(item => !element.options.some(option => option.value === item))) errors.push({ id: element.id, message: `Выберите допустимый вариант: ${element.title}.` });
    }
    if (typeof value === 'string' && element.maxlength && value.length > element.maxlength) errors.push({ id: element.id, message: `Поле «${element.title}» слишком длинное (не более ${element.maxlength}).` });
    if (element.required === false) return;
    if (isEmptyValue(character[element.id])) {
      errors.push({ id: element.id, message: `Заполните поле «${element.title || FIELD_LABELS[element.id] || element.id}».` });
    }
  });

  if (page.id === 'race' && character.race) {
    const race = getSelectedRace();
    if (race && race.suboptions && race.suboptions.length) {
      const valid = race.suboptions.some(option => option.value === character.race_sub);
      if (!valid) errors.push({ id: 'race_sub', message: 'Выберите подрасу.' });
    }

    getActiveAdditionalFields().forEach(field => {
      if (field.required !== false && isEmptyValue(character[field.id])) {
        errors.push({ id: field.id, message: `Сделайте дополнительный выбор: ${cleanTitle(field.title || field.id)}.` });
      }
      if (field.options && !isEmptyValue(character[field.id]) && !field.options.some(option => option.value === character[field.id])) errors.push({ id: field.id, message: `Выберите допустимый вариант: ${cleanTitle(field.title || field.id)}.` });
    });
    getActivePopupGroups().forEach(group => {
      const message = getPopupValidationMessage(group);
      if (message) {
        const first = (group.additionalFields || [])[0];
        errors.push({ id: first ? first.id : group.id, message });
      }
    });
  }
  return deduplicateErrors(errors);
}

function findFirstInvalidPage() {
  const previousIndex = currentPageIndex;
  try {
    for (let index = 0; index < config.pages.length; index++) {
      currentPageIndex = index;
      const errors = validateCurrentPage();
      if (errors.length) return { index, errors };
    }
    return null;
  } finally { currentPageIndex = previousIndex; }
}

function getAbilitiesValidationMessage() { return CharacterRules.validateAbilities(character, getCreationExtras())[0]?.message || ""; }

function getPopupValidationMessage(field) {
  const fields = (field.additionalFields || []).filter(inner => inner.required !== false);
  const empty = fields.find(inner => isEmptyValue(character[inner.id]));
  if (empty) return `Заполните все пункты: ${cleanTitle(field.title || field.label || 'дополнительный выбор')}.`;
  if (fields.length > 1) {
    const labels = fields.map(inner => getFieldValueLabel(inner, character[inner.id])).filter(Boolean);
    if (new Set(labels.map(label => label.toLocaleLowerCase('ru'))).size !== labels.length) {
      return 'Выберите разные варианты в каждом пункте.';
    }
  }
  return '';
}

function showValidationErrors(errors) {
  if (validationSummaryNode) {
    validationSummaryNode.innerHTML = '';
    validationSummaryNode.hidden = false;
    validationSummaryNode.appendChild(createElement('strong', '', 'Нужно ещё немного заполнить'));
    validationSummaryNode.appendChild(createElement('p', '', errors[0].message));
    if (errors.length > 1) validationSummaryNode.appendChild(createElement('small', '', `Ещё незаполненных пунктов: ${errors.length - 1}`));
  }

  errors.forEach(error => {
    const nodes = renderedFieldNodes.get(error.id) || [];
    nodes.forEach(node => {
      node.classList.add('field-error');
      node.setAttribute('aria-invalid', 'true');
    });
  });

  const firstNodes = renderedFieldNodes.get(errors[0].id) || [];
  const firstNode = firstNodes[0];
  if (firstNode) {
    const focusTarget = firstNode.querySelector('input') || firstNode.querySelector('select') || firstNode.querySelector('button') || firstNode.querySelector('textarea');
    if (focusTarget && typeof focusTarget.focus === 'function') focusTarget.focus();
  }
}

function clearValidationFor(id) {
  const nodes = renderedFieldNodes.get(id) || [];
  nodes.forEach(node => {
    node.classList.remove('field-error');
    node.removeAttribute('aria-invalid');
  });
  if (validationSummaryNode) validationSummaryNode.hidden = true;
}

function registerFieldNode(id, node) {
  if (!id || !node) return;
  const nodes = renderedFieldNodes.get(id) || [];
  if (!nodes.includes(node)) nodes.push(node);
  renderedFieldNodes.set(id, nodes);
}

function deduplicateErrors(errors) {
  const seen = new Set();
  return errors.filter(error => {
    const key = `${error.id}:${error.message}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function isEmptyValue(value) {
  if (value === undefined || value === null) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  return false;
}

function cleanTitle(value) {
  return String(value).replace(/:\s*$/, '').trim();
}

function getRaceElement() {
  const page = (config.allPages || config.pages).find(item => item.id === 'race');
  return page && page.elements ? page.elements.find(item => item.id === 'race') : page;
}

function getSelectedRace() {
  const element = getRaceElement();
  return element && element.options ? element.options.find(option => option.value === character.race) : null;
}

function flattenAdditionalFields(fields) {
  const result = [];
  (fields || []).forEach(field => {
    if (field.type === 'popup') result.push(...flattenAdditionalFields(field.additionalFields));
    else result.push(field);
  });
  return result;
}

function getActiveAdditionalFields() {
  const race = getSelectedRace();
  if (!race) return [];
  const fields = [...flattenAdditionalFields(race.additionalFields)];
  const subrace = race.suboptions && race.suboptions.find(option => option.value === character.race_sub);
  if (subrace) fields.push(...flattenAdditionalFields(subrace.additionalFields));
  return fields.filter(field => !isDeferredRaceField(field));
}

function isDeferredRaceField(field) {
  const deferred = typeof CharacterRules !== 'undefined' ? CharacterRules.DEFERRED_FIELD_IDS || [] : [];
  if (deferred.includes(field.id)) return true;
  return field.type === 'popup' && (field.additionalFields || []).every(isDeferredRaceField);
}

function getActivePopupGroups() {
  const race = getSelectedRace();
  if (!race) return [];
  const groups = (race.additionalFields || []).filter(field => field.type === 'popup');
  const subrace = race.suboptions && race.suboptions.find(option => option.value === character.race_sub);
  if (subrace) groups.push(...(subrace.additionalFields || []).filter(field => field.type === 'popup'));
  return groups.filter(group => !isDeferredRaceField(group));
}

function syncActiveAdditionalFieldIds() {
  activeAdditionalFieldIds = getActiveAdditionalFields().map(field => field.id);
  return activeAdditionalFieldIds;
}

function getAllRaceSpecificFieldIds() {
  const element = getRaceElement();
  const ids = new Set();
  if (!element || !element.options) return ids;
  element.options.forEach(race => {
    flattenAdditionalFields(race.additionalFields).forEach(field => ids.add(field.id));
    (race.suboptions || []).forEach(subrace => {
      flattenAdditionalFields(subrace.additionalFields).forEach(field => ids.add(field.id));
    });
  });
  return ids;
}

function clearAllRaceSpecificData() {
  getAllRaceSpecificFieldIds().forEach(id => delete character[id]);
  delete character.race_sub;
  resetAbilityBonusChoices();
  activeAdditionalFieldIds = [];
}

function clearSubraceAdditionalFields(race) {
  (race && race.suboptions ? race.suboptions : []).forEach(subrace => {
    flattenAdditionalFields(subrace.additionalFields).forEach(field => delete character[field.id]);
  });
  resetAbilityBonusChoices();
  syncActiveAdditionalFieldIds();
}

// Сохранены как публичные функции для совместимости с существующей конфигурацией и тестами.
function clearRaceAdditionalFields() {
  clearAllRaceSpecificData();
}

function clearAdditionalFields() {
  clearAllRaceSpecificData();
}

function getFieldValueLabel(field, value) {
  if (isEmptyValue(value)) return '';
  if (Array.isArray(value)) {
    return value.map(item => getFieldValueLabel(field, item)).filter(Boolean).join(', ');
  }
  const option = field && field.options ? field.options.find(item => item.value === value) : null;
  return option ? option.label : String(value);
}

function getPageElementById(id) {
  for (const page of config.allPages || config.pages) {
    const elements = page.elements || [page];
    for (const element of elements) {
      const found = findElementRecursive(element, id);
      if (found) return found;
    }
  }
  return null;
}

function findElementRecursive(element, id) {
  if (element.id === id) return element;
  for (const field of element.additionalFields || []) {
    const found = findElementRecursive(field, id);
    if (found) return found;
  }
  for (const option of element.options || []) {
    const found = findElementRecursive(option, id);
    if (found) return found;
  }
  for (const option of element.suboptions || []) {
    const found = findElementRecursive(option, id);
    if (found) return found;
  }
  return null;
}

function getSelectedOption(elementId, value) {
  const element = getPageElementById(elementId);
  return element && element.options ? element.options.find(option => option.value === value) : null;
}

function showResult(container) {
  cancelLiveRefresh();
  liveRefs = null;
  trackActionBarHeight(null);
  renderedFieldNodes = new Map();
  container.innerHTML = '';
  container.setAttribute('aria-busy', 'false');
  syncLssBaseline();
  const shell = createElement('div', 'app-shell');
  renderHeader(shell);
  const main = createElement('main', 'wizard-main result-main');
  renderProgress(main, true);
  renderLssImportNote(main, false);

  const race = getSelectedRace();
  const subrace = race && race.suboptions ? race.suboptions.find(option => option.value === character.race_sub) : null;
  const classOption = getSelectedOption('class', character.class);
  const background = getSelectedOption('background', character.background);

  const result = createElement('article', 'result-card');
  const hero = createElement('header', 'result-hero');
  const portrait = createElement('div', 'result-portrait');
  if (race && race.image) {
    const image = createElement('img');
    image.src = race.image;
    image.alt = '';
    image.width = 128;
    image.height = 128;
    portrait.appendChild(image);
  } else {
    portrait.appendChild(createElement('span', '', '20'));
  }
  hero.appendChild(portrait);
  const heroCopy = createElement('div', 'result-hero__copy');
  heroCopy.appendChild(createElement('p', 'result-kicker', `${config.meta.edition} · уровень ${getDerivedCharacter().level || 1}`));
  heroCopy.appendChild(createElement('h2', '', character.name && character.name.trim() ? softHyphenate(character.name.trim()) : 'Безымянный герой'));
  const subtitleParts = [classOption && characterClassLabel(character, getCreationExtras()), race && race.label, subrace && subrace.label].filter(Boolean);
  heroCopy.appendChild(createElement('p', 'result-subtitle', subtitleParts.join(' · ')));
  if (background) heroCopy.appendChild(createElement('span', 'result-tag', background.label));
  hero.appendChild(heroCopy);
  result.appendChild(hero);

  const summary = createElement('section', 'result-section');
  summary.appendChild(createElement('h3', '', 'Персонаж'));
  const summaryGrid = createElement('dl', 'summary-grid');
  appendDefinition(summaryGrid, 'Классы', classOption && characterClassLabel(character, getCreationExtras()));
  appendDefinition(summaryGrid, 'Раса', race && race.label);
  appendDefinition(summaryGrid, 'Подраса', subrace && subrace.label);
  appendDefinition(summaryGrid, 'Предыстория', background && background.label);
  appendDefinition(summaryGrid, 'Пол', getSelectedOption('gender', character.gender)?.label);
  appendDefinition(summaryGrid, 'Возраст', character.age);
  appendDefinition(summaryGrid, 'Рост', character.height);
  appendDefinition(summaryGrid, 'Вес', character.weight);
  appendDefinition(summaryGrid, 'Мировоззрение', getSelectedOption('alignment', character.alignment)?.label);
  summary.appendChild(summaryGrid);
  result.appendChild(summary);

  const abilities = createElement('section', 'result-section');
  abilities.appendChild(createElement('h3', '', 'Характеристики'));
  const abilityGrid = createElement('div', 'result-abilities');
  const racialBonuses = getRacialAbilityBonuses();
  ABILITY_LABELS.forEach(ability => {
    const card = createElement('div', 'result-ability');
    card.appendChild(createElement('span', '', ability.short));
    const baseValue = character.abilities && character.abilities[ability.id];
    const bonus = (racialBonuses[ability.id] || 0) + (getCreationExtras().abilityBonuses?.[ability.id] || 0);
    const finalValue = getFinalAbilityValue(ability.id);
    card.appendChild(createElement('strong', '', finalValue === undefined ? '—' : String(finalValue)));
    const details = baseValue === undefined
      ? '—'
      : `${baseValue}${bonus ? ` ${formatAbilityBonus(bonus)}` : ''} · мод. ${formatModifier(finalValue)}`;
    card.appendChild(createElement('small', '', details));
    abilityGrid.appendChild(card);
  });
  abilities.appendChild(abilityGrid);
  result.appendChild(abilities);
  renderMechanicalSummary(result);

  const extras = getActiveAdditionalFields().filter(field => !isEmptyValue(character[field.id]));
  if (extras.length) {
    const extraSection = createElement('section', 'result-section');
    extraSection.appendChild(createElement('h3', '', 'Выборы расы'));
    const list = createElement('ul', 'extra-list');
    extras.forEach(field => {
      const item = createElement('li');
      item.appendChild(createElement('span', '', cleanTitle(field.title || field.id)));
      item.appendChild(createElement('strong', '', getFieldValueLabel(field, character[field.id])));
      list.appendChild(item);
    });
    extraSection.appendChild(list);
    result.appendChild(extraSection);
  }

  if (character.concept && character.concept.trim()) {
    const concept = createElement('section', 'result-section result-concept');
    concept.appendChild(createElement('h3', '', 'Заметка о герое'));
    concept.appendChild(createElement('p', '', character.concept.trim()));
    result.appendChild(concept);
  }
  const personality = createElement('section', 'result-section');
  const personalityList = createElement('dl', 'summary-grid');
  for (const [id, label] of [['personality','Черты характера'],['ideals','Идеалы'],['bonds','Привязанности'],['flaws','Слабости']]) appendDefinition(personalityList, label, character[id]);
  if (personalityList.children.length) {
    personality.appendChild(createElement('h3', '', 'Образ'));
    personality.appendChild(personalityList);
    result.appendChild(personality);
  }

  const source = createElement('aside', 'result-source');
  source.appendChild(createElement('strong', '', 'Импорт в Long Story Short'));
  const sourceText = createElement('p');
  sourceText.appendChild(document.createTextNode('Скачайте JSON и загрузите его через «.json → Загрузить .json» в списке персонажей '));
  const sheetLink = createElement('a', 'reference-link', 'longstoryshort.app');
  sheetLink.href = 'https://longstoryshort.app/characters/list/';
  sheetLink.target = '_blank';
  sheetLink.rel = 'noopener noreferrer';
  sourceText.appendChild(sheetLink);
  sourceText.appendChild(document.createTextNode('. Перед игрой проверьте выбранные варианты с Мастером.'));
  source.appendChild(sourceText);
  if (character.lssImport) {
    if (lssOriginalMatches()) source.appendChild(createElement('p', '', 'Файл объединяется с загруженным листом: заметки, снаряжение, монеты, текущие хиты и ваши атаки сохранятся. LSS добавит его как нового персонажа — сверьте с прежним листом и удалите старый вручную.'));
    const storageNote = lssStorageNote();
    if (storageNote) source.appendChild(createElement('p', '', storageNote));
    if (storageNote === LSS_NOTE_RELOAD || storageNote === LSS_NOTE_RELOAD_QUOTA) {
      const reload = createElement('button', 'secondary-button', 'Загрузить лист снова');
      reload.type = 'button';
      reload.addEventListener('click', openLssPicker);
      source.appendChild(reload);
    }
  }
  const missingCards = [...new Set(getCreationExtras().spells.filter(spell => !LssExport.SPELL_IDS[spell.id]).map(spell => spell.label))];
  if (missingCards.length) source.appendChild(createElement('p', '', `В каталоге карточек LSS нет: ${missingCards.join(', ')}. Они сохранятся текстом в разделе «Атаки и заклинания»; карточки нужно добавить на сайте вручную.`));
  result.appendChild(source);

  // While a level-2 sheet is not restored yet, the export is not shown at all: it would be below the imported level.
  const ledgerNow=typeof LevelUpRules!=='undefined'?LevelUpRules.inspect(character,getAdvancementContext()):null;
  const restoring=!!ledgerNow&&!ledgerNow.errors.length&&lssRestoreNeeded(ledgerNow);
  if(!restoring){
  const exportDetails = createElement('details', 'export-details');
  exportDetails.appendChild(createElement('summary', '', 'Данные для экспорта'));
  try { exportDetails.appendChild(createElement('pre', '', JSON.stringify(getExportData(), null, 2))); }
  catch(error) { exportDetails.appendChild(createElement('p', '', 'Экспорт недоступен: '+error.message)); }
  result.appendChild(exportDetails);
  }

  const status = createElement('p', 'result-status');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  const actions = createElement('div', 'result-actions');
  const edit = createElement('button', 'secondary-button', '← Вернуться к редактированию');
  edit.type = 'button';
  edit.addEventListener('click', () => {
    if(typeof LevelUpRules!=='undefined'&&!confirmProgressionResetForEdit(()=>{currentPageIndex=config.pages.length-1;renderPage();}))return;
    currentPageIndex = config.pages.length - 1;
    renderPage();
  });
  const copy = createElement('button', 'secondary-button', 'Копировать JSON');
  copy.type = 'button';
  copy.addEventListener('click', () => copyCharacterData(status));
  const download = createElement('button', 'primary-button', 'Скачать JSON для Long Story Short');
  download.type = 'button';
  download.addEventListener('click', () => { downloadCharacterData(); if (lastExportNotice) status.textContent = lastExportNotice; });
  const restart = createElement('button', 'text-button', 'Создать нового героя');
  restart.type = 'button';
  restart.addEventListener('click', restartWizard);
  actions.appendChild(edit);
  let notes=[];
  if(typeof LevelUpRules!=='undefined') {
    const ledger=ledgerNow;
    // Warnings are already worded with human-readable group and option names (LevelUpRules.label). Only a saved key the rules no longer know at all (a vanished group) falls back to the key itself, so such a note may contain the raw key.
    notes=ledger.errors.length?[]:(ledger.warnings||[]).map(w=>w.message);
    if(ledger.errors.length) {
      status.textContent='Журнал повышения требует исправления: '+ledger.errors[0].message;
      copy.disabled=true;download.disabled=true;
      const reset=createElement('button','secondary-button','Сбросить повреждённую прокачку до уровня 1');reset.type='button';reset.addEventListener('click',()=>{if(confirmProgressionResetForEdit())renderPage();});actions.appendChild(reset);
    } else if(restoring){const planned=lssRestorePlanAvailable();if(planned){const restore=createElement('button','primary-button',`Восстановить ${ledger.state.level+1}-й уровень из листа`);restore.type='button';restore.addEventListener('click',()=>restoreLssLevel(status));actions.appendChild(restore);}const advance=createElement('button',planned?'secondary-button':'primary-button',`Повысить до ${ledger.state.level+1}-го уровня`);advance.type='button';advance.addEventListener('click',startAdvancement);actions.appendChild(advance);copy.disabled=true;download.disabled=true;status.textContent=planned?`Сначала восстановите ${character.lssImport.sourceLevel}-й уровень из листа — иначе в LSS попадёт персонаж ниже исходного уровня.`:`Сначала повысьте до ${character.lssImport.sourceLevel}-го уровня — иначе в LSS попадёт персонаж ниже исходного уровня.`;}
    else if(ledger.state.level<3){const advance=createElement('button','primary-button',`Повысить до ${ledger.state.level+1}-го уровня`);advance.type='button';advance.addEventListener('click',startAdvancement);actions.appendChild(advance);}
    else status.textContent='Поддерживается прокачка до 3-го уровня включительно.';
  }
  actions.appendChild(copy);
  actions.appendChild(download);
  actions.appendChild(restart);
  if(lastExportNotice&&!restoring)status.textContent=lastExportNotice;
  result.appendChild(status);
  // Non-blocking: older saved choices that current rules no longer offer are kept as they were.
  if(notes.length){const warnings=createElement('p','result-status result-warnings','Часть сохранённой прокачки расходится с текущими правилами (герой сохранён без изменений): '+notes.join(' '));warnings.setAttribute('role','note');result.appendChild(warnings);}
  result.appendChild(actions);

  main.appendChild(result);
  renderScopeNote(main);
  shell.appendChild(main);
  container.appendChild(shell);
  saveDraft('result');
}

function appendDefinition(list, term, value) {
  if (isEmptyValue(value)) return;
  const item = createElement('div', 'summary-item');
  item.appendChild(createElement('dt', '', term));
  item.appendChild(createElement('dd', '', String(value)));
  list.appendChild(item);
}

function getExportData() {
  lastExportNotice = '';
  if (typeof LevelUpRules !== 'undefined' && character.lssImport) { const ledger = LevelUpRules.inspect(character, getAdvancementContext()); if (!ledger.errors.length && lssRestoreNeeded(ledger)) throw new Error(`Сначала восстановите ${character.lssImport.sourceLevel}-й уровень из листа — иначе в LSS попадёт персонаж ниже исходного уровня.`); }
  if(typeof LevelUpRules!=='undefined'){const errors=LevelUpRules.inspect(character,getAdvancementContext()).errors;if(errors.length)throw new Error(errors[0].message);if(character.pendingAdvancement?.foundation!==undefined&&character.pendingAdvancement.foundation!==LevelUpRules.foundation(character))throw new Error('Основные выборы изменились. Сначала явно сбросьте зависимую прокачку.');}
  const invalid = findFirstInvalidPage();
  if (invalid) throw new Error(`Персонаж не завершён: ${invalid.errors[0].message}`);
  const race = getSelectedRace();
  const labels = {
    class: getCreationExtras().classes?.length > 1 ? characterClassLabel(character, getCreationExtras()) : getSelectedOption('class', character.class)?.label,
    race: race?.label,
    subrace: race?.suboptions?.find(option => option.value === character.race_sub)?.label,
    background: getSelectedOption('background', character.background)?.label,
    gender: getSelectedOption('gender', character.gender)?.label,
    alignment: getSelectedOption('alignment', character.alignment)?.label
  };
  const subclassField = CreationOptions.getChoices(character, getCreationContext()).find(choice => ['creation_domain', 'creation_origin', 'creation_patron'].includes(choice.id));
  labels.subclass = subclassField?.options.find(option => option.value === character[subclassField.id])?.label;
  if(typeof LevelUpRules!=='undefined') labels.subclass=getCreationExtras().subclass?.label||labels.subclass;
  const generated = LssExport.buildLssExport(character, labels, getDerivedCharacter(), getCreationExtras());
  const imported = character.lssImport;
  if (!lssOriginalMatches()) return generated;
  try { return LssExport.mergeLssExport(generated, lssOriginal.original, { baseline: imported.baseline }); }
  catch (error) { lastExportNotice = 'Не удалось объединить с исходным листом — выгружен лист без пользовательских данных LSS.'; return generated; }
}

async function copyCharacterData(status) {
  const text = JSON.stringify(getExportData(), null, 2);
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      throw new Error('clipboard unavailable');
    }
    status.textContent = (lastExportNotice ? lastExportNotice + ' ' : '') + 'JSON скопирован в буфер обмена.';
  } catch (error) {
    status.textContent = 'Не удалось скопировать автоматически. Откройте блок «Данные для экспорта».';
  }
}

function downloadCharacterData() {
  if (typeof Blob === 'undefined' || typeof URL === 'undefined') return;
  const blob = new Blob([JSON.stringify(getExportData(), null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = createElement('a');
  const safeName = (character.name || 'character').trim().replace(/[^\p{L}\p{N}_-]+/gu, '-').replace(/^-+|-+$/g, '') || 'character';
  anchor.href = url;
  anchor.download = `${safeName}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

/* ---------- Long Story Short import ----------
   The sheet is read into memory and shown on its own screen; the draft changes only after «Начать проверку».
   The sheet copy (up to about 1 MB) is kept out of the draft: lssOriginal in memory, persisted once under LSS_ORIGINAL_KEY. */
const LSS_CHIPS = {recognized: ['is-recognized', 'распознано'], check: ['is-check', 'проверьте'], missing: ['is-missing', 'выберите']};
const LSS_ORIGINAL_KEY = `${STORAGE_KEY}:lss-original`;
const LSS_TOO_LARGE = 'Файл слишком большой для листа персонажа. Скачайте лист из LSS заново.';
const LSS_NOTE_QUOTA = 'Исходный лист слишком большой для сохранения в браузере: после перезагрузки страницы заметки и снаряжение из него не перенесутся.';
const LSS_NOTE_OVERSIZED = 'Лист слишком большой — JSON выгрузится без заметок, снаряжения и монет из LSS; не удаляйте старый лист.';
const LSS_NOTE_RELOAD_QUOTA = 'Загрузите лист снова прямо перед выгрузкой — браузеру не хватает места, чтобы хранить его копию.';
const LSS_NOTE_UNAVAILABLE = 'Браузер не сохраняет черновик: объединение с исходным листом работает до перезагрузки страницы.';
const LSS_NOTE_RELOAD = 'Исходный лист из LSS не найден в браузере: JSON выгрузится без заметок и снаряжения из LSS. Загрузите лист снова.';

function lssDeps() {
  return {config, rules: CharacterRules, creation: CreationOptions, levelup: LevelUpRules, spellIds: LssExport.SPELL_IDS, spellData: LevelUpData.spells};
}

function lssRestoreNeeded(ledger) {
  const lss = character.lssImport;
  return !!lss && Number.isInteger(lss.sourceLevel) && lss.sourceLevel > ledger.state.level;
}

// The level-2 plan is built only for the class the sheet started with. Another class, or a sheet class that was not recognised, gets the manual advance.
function lssRestorePlanAvailable() {
  const lss = character.lssImport;
  return !!lss && !!lss.restore && !!lss.restore.classId && !!lss.startClass && character.class === lss.startClass;
}

function lssOriginalMatches() {
  const lss = character && character.lssImport;
  return !!(lss && lssOriginal && lssOriginal.importedAt === lss.importedAt && lssOriginal.original);
}

// What the user should know about the sheet copy. Empty when the merge with the sheet is complete.
function lssStorageNote() {
  const lss = character && character.lssImport;
  if (!lss) return '';
  if (lssOriginalMatches()) return lssStorage === 'quota' ? LSS_NOTE_QUOTA : lssStorage === 'unavailable' ? LSS_NOTE_UNAVAILABLE : '';
  // Over MAX_STORED_CHARS the copy never existed: reloading cannot bring it back.
  if (lss.originalTooLarge) return LSS_NOTE_OVERSIZED;
  if (lss.originalStoreFailed === 'quota') return LSS_NOTE_RELOAD_QUOTA;
  return LSS_NOTE_RELOAD;
}

function isLssQuotaError(error) {
  return !!error && (error.name === 'QuotaExceededError' || error.code === 22 || error.code === 1014);
}

// Written once per import. A refused write keeps the copy in memory for this page session only.
function persistLssOriginal() {
  let storage = null;
  try { storage = window.localStorage; } catch (error) { storage = null; }
  if (!lssOriginal) {
    lssStorage = 'none';
    try { if (storage) storage.removeItem(LSS_ORIGINAL_KEY); } catch (error) { /* nothing stored */ }
    return;
  }
  try {
    storage.setItem(LSS_ORIGINAL_KEY, JSON.stringify(lssOriginal));
    lssStorage = 'stored';
  } catch (error) {
    lssStorage = isLssQuotaError(error) ? 'quota' : 'unavailable';
    try { if (storage) storage.removeItem(LSS_ORIGINAL_KEY); } catch (ignored) { /* nothing stored */ }
  }
}

function clearLssOriginal() {
  lssOriginal = null;
  lssStorage = 'none';
  try { if (window.localStorage) window.localStorage.removeItem(LSS_ORIGINAL_KEY); } catch (error) { /* nothing stored */ }
}

// A copy is kept only while the main draft refers to it: an unreadable draft, another edition or a draft without lssImport leaves it orphaned.
function pruneLssOriginal() {
  lssOriginal = null;
  lssStorage = 'none';
  let keep = false;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const draft = raw ? JSON.parse(raw) : null;
    keep = !!(draft && draft.character && typeof draft.character === 'object' && draft.character.lssImport && config && draft.edition === config.meta.edition);
  } catch (error) {
    keep = false;
  }
  if (keep) return;
  try { window.localStorage.removeItem(LSS_ORIGINAL_KEY); } catch (error) { /* nothing stored */ }
}

// Loads the copy saved for this exact import. A draft from the earlier format that still holds the copy inside lssImport is moved out of the draft.
function restoreLssOriginal() {
  lssOriginal = null;
  lssStorage = 'none';
  const lss = character && character.lssImport;
  if (!lss) return;
  if (lss.original) {
    const {original, ...meta} = lss;
    lssOriginal = {importedAt: meta.importedAt, original};
    character = {...character, lssImport: {...meta, originalStored: false}};
    persistLssOriginal();
    character.lssImport = {...character.lssImport, originalStored: lssStorage === 'stored'};
    return;
  }
  let stored = null, raw = null;
  try {
    raw = window.localStorage.getItem(LSS_ORIGINAL_KEY);
    stored = raw ? JSON.parse(raw) : null;
  } catch (error) {
    stored = null;
  }
  if (stored && stored.importedAt === lss.importedAt && stored.original && typeof stored.original === 'object') {
    lssOriginal = {importedAt: stored.importedAt, original: stored.original};
    lssStorage = 'stored';
  } else if (raw !== null) {
    // Stored for another import (or unreadable): it can never be merged with this draft.
    try { window.localStorage.removeItem(LSS_ORIGINAL_KEY); } catch (error) { /* nothing stored */ }
  }
}

function syncLssBaseline() {
  const lss = character.lssImport;
  if (!lss || typeof LevelUpRules === 'undefined') return;
  const ledger = LevelUpRules.inspect(character, getAdvancementContext());
  if (ledger.errors.length || ledger.state.level !== lss.sourceLevel) return;
  const derived = getDerivedCharacter();
  const baseline = {ac: derived.ac ?? derived.armorClass, speed: derived.speed};
  if (lss.baseline && lss.baseline.ac === baseline.ac && lss.baseline.speed === baseline.speed) return;
  character = {...character, lssImport: {...lss, baseline}};
  saveDraft('result');
}

function openLssPicker() {
  const input = document.getElementById('lss-file-input');
  if (!input) return;
  input.value = '';
  input.click();
}

async function openLssFile(file) {
  if (!file) return;
  const token = ++lssLoadSequence;
  let result;
  try {
    result = file.size > LssImport.MAX_FILE_CHARS * 2
      ? {entries: [], errors: [{code: 'too_large', message: LSS_TOO_LARGE}]}
      : LssImport.readLssFile(await file.text());
  } catch (error) {
    result = {entries: [], errors: [{code: 'read', message: 'Не удалось прочитать файл. Скачайте лист из LSS заново.'}]};
  }
  if (token !== lssLoadSequence) return;
  lssImportSession = {fileName: typeof file.name === 'string' ? file.name : '', result, selectedIndex: null, entry: null, recognized: null, error: ''};
  const only = result.entries.length === 1 && result.entries[0].support.ok ? result.entries[0] : null;
  if (only) selectLssEntry(only.index);
  else renderPage();
}

function selectLssEntry(index) {
  const session = lssImportSession;
  if (!session) return;
  const entry = session.result.entries.find(item => item.index === index);
  session.selectedIndex = null; session.entry = null; session.recognized = null; session.error = '';
  try {
    session.recognized = LssImport.recognize(entry, lssDeps());
    session.selectedIndex = index;
    session.entry = entry;
  } catch (error) {
    session.error = error.message || 'Не удалось распознать лист.';
  }
  renderPage();
}

function backToLssList() {
  const session = lssImportSession;
  if (!session) return;
  session.selectedIndex = null; session.entry = null; session.recognized = null; session.error = '';
  renderPage();
}

function startLssImport() {
  const session = lssImportSession;
  if (!session || !session.recognized) return;
  const drafted = session.recognized.character;
  const {original, ...meta} = drafted.lssImport || {};
  const importedAt = meta.importedAt || new Date().toISOString();
  lssOriginal = original ? {importedAt, original} : null;
  character = {
    ...drafted,
    level: config.meta && config.meta.level ? config.meta.level : 1,
    lssImport: {...meta, importedAt, startClass: meta.startClass || drafted.class || null, originalTooLarge: !original, originalStored: false}
  };
  delete character.pendingAdvancement;
  lssImportSession = null;
  lssLoadSequence++;
  persistLssOriginal();
  character.lssImport.originalStored = lssStorage === 'stored';
  if (lssStorage === 'quota') character.lssImport.originalStoreFailed = 'quota';
  const invalid = findFirstInvalidPage();
  currentPageIndex = invalid ? invalid.index : config.pages.length;
  saveDraft(currentPageIndex < config.pages.length ? config.pages[currentPageIndex].id : 'result');
  renderPage();
  scrollToPageTop();
}

function restoreLssLevel(status) {
  try {
    if (!lssRestorePlanAvailable()) throw new Error('План восстановления недоступен.');
    character.pendingAdvancement = LssImport.buildRestorePlan(character, getAdvancementContext(), lssDeps());
    saveDraft('result');
    renderPage();
    scrollToPageTop();
  } catch (error) {
    // The normal advancement starts with the same level-up rules; the user chooses the picks by hand.
    lssAdvancementNotice = 'Не удалось подобрать выборы из листа — выберите их вручную.';
    startAdvancement();
  }
}

function lssStatus(text, alert) {
  const node = createElement('p', `result-status lss-import-status${alert ? ' is-error' : ''}`, text);
  node.setAttribute('role', alert ? 'alert' : 'status');
  return node;
}

function lssChip(status) {
  const [cls, text] = LSS_CHIPS[status] || LSS_CHIPS.check;
  return createElement('span', `lss-import-chip ${cls}`, text);
}

function renderLssImportNote(container, compact) {
  const lss = character && character.lssImport;
  if (!lss) return;
  const note = createElement('aside', 'lss-import-note');
  note.setAttribute('aria-label', 'Лист из Long Story Short');
  const icon = createElement('span', 'lss-import-note__icon', 'LSS');
  icon.setAttribute('aria-hidden', 'true');
  note.appendChild(icon);
  const copy = createElement('div', 'lss-import-note__copy');
  if (compact) {
    copy.appendChild(createElement('p', '', `Загружен лист „${lss.sourceName || 'Безымянный герой'}“ (${lss.sourceLevel}-й уровень) из Long Story Short. Проверьте отмеченные шаги — затем можно повысить уровень и выгрузить JSON обратно.`));
    const open = (lss.report || []).filter(item => item.status !== 'recognized').slice(0, 6);
    if (open.length) {
      copy.appendChild(createElement('p', 'lss-import-note__title', 'При загрузке не распознано:'));
      const list = createElement('ul', 'lss-import-report lss-import-report--compact');
      open.forEach(item => {
        const li = createElement('li', 'lss-import-report__item');
        li.appendChild(createElement('span', 'lss-import-report__label', item.label));
        li.appendChild(lssChip(item.status));
        list.appendChild(li);
      });
      copy.appendChild(list);
    }
  } else {
    copy.appendChild(createElement('p', '', `Лист из LSS: ${lss.sourceLevel}-й уровень. Повысьте уровень и скачайте JSON обратно.`));
  }
  note.appendChild(copy);
  container.appendChild(note);
}

function lssDraftHasData() {
  const draft = character || {};
  return !!(draft.class || draft.race || (typeof draft.name === 'string' && draft.name.trim()) || draft.abilities || draft.advancement || draft.pendingAdvancement);
}

function renderLssImport(app) {
  const session = lssImportSession;
  cancelLiveRefresh();
  liveRefs = null;
  trackActionBarHeight(null);
  renderedFieldNodes = new Map();
  activeAdditionalFieldIds = [];
  validationSummaryNode = null;
  app.innerHTML = '';
  app.setAttribute('aria-busy', 'false');
  const shell = createElement('div', 'app-shell');
  renderHeader(shell);
  const main = createElement('main', 'wizard-main result-main');
  const card = createElement('article', 'result-card lss-import-card');
  const head = createElement('header', 'page-heading');
  head.appendChild(createElement('p', 'result-kicker', 'Long Story Short'));
  const title = createElement('h2', '', 'Загрузка листа персонажа');
  title.id = 'lss-import-title';
  title.tabIndex = -1;
  head.appendChild(title);
  head.appendChild(createElement('p', 'page-description', 'Мастер распознает лист, а недостающие решения вы подтвердите по шагам. Поддерживаются персонажи 1-го и 2-го уровня.'));
  if (session.fileName) head.appendChild(createElement('p', 'lss-import-file', `Файл: ${session.fileName}`));
  card.appendChild(head);

  const actions = createElement('div', 'result-actions');
  const button = (text, cls, handler) => {
    const node = createElement('button', cls, text);
    node.type = 'button';
    node.addEventListener('click', handler);
    actions.appendChild(node);
    return node;
  };
  const dismiss = () => { lssLoadSequence++; lssImportSession = null; renderPage(); scrollToPageTop(); };
  if (!session.result.entries.length) {
    card.appendChild(lssStatus(session.result.errors[0]?.message || 'Файл не удалось прочитать.', true));
    button('Выбрать другой файл', 'primary-button', openLssPicker);
    button('Вернуться', 'secondary-button', dismiss);
  } else if (session.recognized) {
    renderLssReview(card, session);
    button('Начать проверку', 'primary-button', startLssImport);
    button('Другой файл', 'secondary-button', openLssPicker);
    if (session.result.entries.length > 1) button('← К списку персонажей', 'text-button', backToLssList);
    button('Отмена', 'text-button', dismiss);
  } else {
    renderLssList(card, session);
    button('Выбрать другой файл', 'secondary-button', openLssPicker);
    button('Вернуться', 'text-button', dismiss);
  }
  card.appendChild(actions);
  main.appendChild(card);
  shell.appendChild(main);
  app.appendChild(shell);
  focusPageTitle(title);
}

function renderLssList(card, session) {
  const entries = session.result.entries;
  if (session.error) card.appendChild(lssStatus(session.error, true));
  if (!entries.some(entry => entry.support.ok)) {
    const onlyLevel = entries.every(entry => entry.support.code === 'level_unsupported');
    card.appendChild(lssStatus(onlyLevel ? 'В файле нет персонажей 1-го или 2-го уровня — пока поддерживаются только они.' : 'Лист пока не удаётся загрузить — причина указана ниже.', false));
  } else if (entries.length > 1) {
    card.appendChild(createElement('p', 'lss-import-hint', 'В файле несколько персонажей. Выберите одного.'));
  }
  const list = createElement('ul', 'lss-import-list');
  entries.forEach(entry => {
    const item = createElement('li');
    const option = createElement('button', 'lss-import-option');
    option.type = 'button';
    option.id = `lss-import-option-${entry.index}`;
    const copy = createElement('span', 'lss-import-option__copy');
    copy.appendChild(createElement('strong', '', entry.name));
    const meta = createElement('span', 'lss-import-option__meta', `${entry.classText || 'класс не указан'} · ${entry.raceText || 'раса не указана'} · ${entry.level ? `${entry.level}-й уровень` : 'уровень не определён'}`);
    meta.id = `lss-import-meta-${entry.index}`;
    copy.appendChild(meta);
    option.appendChild(copy);
    const describedBy = [meta.id];
    // Unsupported cards stay focusable and announce the reason; the click does nothing.
    if (entry.support.ok) {
      option.addEventListener('click', () => selectLssEntry(entry.index));
    } else {
      option.setAttribute('aria-disabled', 'true');
      option.classList.add('is-disabled');
      const reason = createElement('span', 'lss-import-badge', entry.support.message);
      reason.id = `lss-import-reason-${entry.index}`;
      option.appendChild(reason);
      describedBy.push(reason.id);
    }
    option.setAttribute('aria-describedby', describedBy.join(' '));
    item.appendChild(option);
    list.appendChild(item);
  });
  card.appendChild(list);
}

function renderLssReview(card, session) {
  const entry = session.entry;
  const report = session.recognized.report;
  const body = createElement('section', 'result-section lss-import-review');
  body.appendChild(createElement('h3', '', entry.name || 'Безымянный герой'));
  body.appendChild(createElement('p', 'result-subtitle', `${entry.classText || 'класс не указан'} · ${entry.raceText || 'раса не указана'} · ${entry.level ? `${entry.level}-й уровень` : 'уровень не определён'}`));
  (entry.warnings || []).forEach(warning => body.appendChild(createElement('p', 'result-status result-warnings', warning.message)));
  if (lssDraftHasData()) body.appendChild(createElement('p', 'result-status result-warnings', 'Текущий черновик будет заменён загруженным персонажем.'));
  if (entry.level === 2) body.appendChild(createElement('p', 'lss-import-hint', 'После проверки 1-го уровня мастер предложит восстановить 2-й уровень из листа.'));

  const recognizedBlock = createElement('section', 'lss-import-block');
  recognizedBlock.appendChild(createElement('h3', '', 'Распознано'));
  const grid = createElement('dl', 'summary-grid');
  report.filter(item => item.status === 'recognized').forEach(item => appendDefinition(grid, item.label, item.value));
  if (grid.children.length) recognizedBlock.appendChild(grid);
  else recognizedBlock.appendChild(createElement('p', 'lss-import-hint', 'Автоматически ничего не распознано.'));
  body.appendChild(recognizedBlock);

  const openBlock = createElement('section', 'lss-import-block');
  openBlock.appendChild(createElement('h3', '', 'Проверьте и выберите'));
  const open = report.filter(item => item.status !== 'recognized');
  if (open.length) {
    const list = createElement('ul', 'lss-import-report');
    open.forEach(item => {
      const li = createElement('li', 'lss-import-report__item');
      const copy = createElement('span', 'lss-import-report__copy');
      copy.appendChild(createElement('strong', '', item.label));
      copy.appendChild(createElement('span', 'lss-import-report__value', item.value || item.source || '—'));
      li.appendChild(copy);
      li.appendChild(lssChip(item.status));
      list.appendChild(li);
    });
    openBlock.appendChild(list);
  } else {
    openBlock.appendChild(createElement('p', 'lss-import-hint', 'Все пункты распознаны.'));
  }
  body.appendChild(openBlock);
  card.appendChild(body);
}

function restartWizard() {
  clearDraft();
  lssImportSession = null;
  lssLoadSequence++;
  character = { level: config.meta && config.meta.level ? config.meta.level : 1 };
  currentPageIndex = 0;
  activeAdditionalFieldIds = [];
  renderPage();
  scrollToPageTop();
}

function getSafeDndUrl(value) {
  if (typeof value !== 'string') return '';
  return /^https:\/\/(?:[a-z0-9-]+\.)?dnd\.su\//i.test(value) ? value : '';
}

function createDndLink(url, label) {
  const safeUrl = getSafeDndUrl(url);
  if (!safeUrl) return null;
  const link = createElement('a', 'reference-link', label);
  link.href = safeUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function cloneValue(value) {
  if (Array.isArray(value)) return [...value];
  if (value && typeof value === 'object') return { ...value };
  return value;
}

function focusPageTitle(title) {
  if (!title || typeof title.focus !== 'function') return;
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    title.focus();
    return;
  }
  title.focus({ preventScroll: true });
}

function scrollToPageTop() {
  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadConfig);
} else {
  loadConfig();
}
