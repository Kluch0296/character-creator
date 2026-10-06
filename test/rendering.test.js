const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('node:assert/strict');
const test = require('node:test');

const projectRoot = path.join(__dirname, '..');

function createDOM() {
  class TextNode {
    constructor(value) {
      this.tagName = '#TEXT';
      this.parentNode = null;
      this._textContent = String(value);
      this.children = [];
    }
    get textContent() {
      return this._textContent;
    }
    set textContent(value) {
      this._textContent = String(value);
    }
  }

  class Element {
    constructor(tagName, ownerDocument) {
      this.tagName = String(tagName).toUpperCase();
      this.ownerDocument = ownerDocument;
      this.children = [];
      this.parentNode = null;
      this.className = '';
      this.style = {};
      this.attributes = new Map();
      this.listeners = new Map();
      this._textContent = '';
      this.id = '';
      this.type = '';
      this.name = '';
      this.value = '';
      this.placeholder = '';
      this.checked = false;
      this.hidden = false;
      this.disabled = false;
      this.tabIndex = 0;
    }
    appendChild(child) {
      if (child === null || child === undefined) return child;
      child.parentNode = this;
      this.children.push(child);
      return child;
    }
    remove() {
      if (!this.parentNode) return;
      this.parentNode.children = this.parentNode.children.filter(child => child !== this);
      this.parentNode = null;
    }
    setAttribute(name, value) {
      const stringValue = String(value);
      this.attributes.set(name, stringValue);
      if (name === 'id') this.id = stringValue;
      if (name === 'class') this.className = stringValue;
    }
    getAttribute(name) {
      if (name === 'id') return this.id || null;
      if (name === 'class') return this.className || null;
      return this.attributes.has(name) ? this.attributes.get(name) : null;
    }
    removeAttribute(name) {
      this.attributes.delete(name);
    }
    addEventListener(type, handler) {
      const handlers = this.listeners.get(type) || [];
      handlers.push(handler);
      this.listeners.set(type, handlers);
    }
    removeEventListener(type, handler) {
      const handlers = this.listeners.get(type) || [];
      this.listeners.set(type, handlers.filter(item => item !== handler));
    }
    dispatchEvent(event) {
      const payload = event || {};
      if (!payload.type) throw new Error('Event type is required');
      payload.target = payload.target || this;
      payload.currentTarget = this;
      (this.listeners.get(payload.type) || []).forEach(handler => handler(payload));
      return true;
    }
    click() {
      if (this.type === 'radio') this.checked = true;
      if (this.type === 'checkbox') this.checked = !this.checked;
      if (this.type === 'radio' || this.type === 'checkbox') this.dispatchEvent({ type: 'change' });
      this.dispatchEvent({ type: 'click' });
    }
    focus() {
      this.ownerDocument.activeElement = this;
    }
    get classList() {
      const self = this;
      return {
        add: (...names) => {
          const classes = new Set(self.className.split(/\s+/).filter(Boolean));
          names.forEach(name => classes.add(name));
          self.className = [...classes].join(' ');
        },
        remove: (...names) => {
          const classes = new Set(self.className.split(/\s+/).filter(Boolean));
          names.forEach(name => classes.delete(name));
          self.className = [...classes].join(' ');
        },
        contains: name => self.className.split(/\s+/).filter(Boolean).includes(name)
      };
    }
    matches(selector) {
      const simple = selector.trim();
      if (!simple) return false;
      if (simple.startsWith('#')) return this.id === simple.slice(1);
      if (simple.startsWith('.')) return this.classList.contains(simple.slice(1));

      const attributeMatch = simple.match(/^([a-z0-9-]+)?\[([^=\]]+)(?:="([^"]*)")?\]$/i);
      if (attributeMatch) {
        const [, tag, attribute, expected] = attributeMatch;
        if (tag && this.tagName !== tag.toUpperCase()) return false;
        const actual = this.getAttribute(attribute) ?? this[attribute];
        return expected === undefined ? actual !== undefined && actual !== null : String(actual) === expected;
      }

      const tagClassMatch = simple.match(/^([a-z0-9-]+)\.([a-z0-9_-]+)$/i);
      if (tagClassMatch) {
        return this.tagName === tagClassMatch[1].toUpperCase() && this.classList.contains(tagClassMatch[2]);
      }
      return this.tagName === simple.toUpperCase();
    }
    querySelectorAll(selector) {
      const selectors = selector.split(',').map(item => item.trim()).filter(Boolean);
      const results = [];
      const visit = node => {
        if (node !== this && selectors.some(item => node.matches && node.matches(item))) results.push(node);
        (node.children || []).forEach(visit);
      };
      this.children.forEach(visit);
      return results;
    }
    querySelector(selector) {
      return this.querySelectorAll(selector)[0] || null;
    }
    get textContent() {
      return this._textContent + this.children.map(child => child.textContent || '').join('');
    }
    set textContent(value) {
      this._textContent = value === null || value === undefined ? '' : String(value);
      this.children = [];
    }
    set innerHTML(value) {
      this._textContent = value ? String(value) : '';
      this.children = [];
    }
    get innerHTML() {
      return this.textContent;
    }
  }

  const documentListeners = new Map();
  const document = {
    readyState: 'loading',
    activeElement: null,
    createElement: tag => new Element(tag, document),
    createTextNode: value => new TextNode(value),
    addEventListener: (type, handler) => {
      const handlers = documentListeners.get(type) || [];
      handlers.push(handler);
      documentListeners.set(type, handlers);
      if (type === 'DOMContentLoaded') handler({ type });
    },
    removeEventListener: (type, handler) => {
      const handlers = documentListeners.get(type) || [];
      documentListeners.set(type, handlers.filter(item => item !== handler));
    }
  };
  document.body = new Element('body', document);
  const app = new Element('div', document);
  app.id = 'app';
  document.body.appendChild(app);
  document.getElementById = id => {
    if (id === 'app') return app;
    return document.body.querySelector(`#${id}`);
  };
  document.querySelector = selector => document.body.querySelector(selector);
  document.querySelectorAll = selector => document.body.querySelectorAll(selector);

  const storage = new Map();
  const window = {
    location: { href: 'http://localhost:4173/' },
    localStorage: {
      getItem: key => storage.has(key) ? storage.get(key) : null,
      setItem: (key, value) => storage.set(key, String(value)),
      removeItem: key => storage.delete(key)
    },
    matchMedia: () => ({ matches: false }),
    scrollTo() {}
  };
  return { document, window, root: app };
}

function loadScript(dom, configData) {
  const context = {
    console,
    document: dom.document,
    window: dom.window,
    navigator: {},
    fetch: async () => ({
      ok: true,
      status: 200,
      json: async () => configData
    }),
    URL,
    Blob,
    setTimeout,
    clearTimeout
  };
  vm.createContext(context);
  for (const name of ['rules.js', 'levelup-data.js', 'levelup-rules.js', 'creation-options.js', 'lss-export.js', 'spell-info.js', 'wizard-steps.js', 'wizard-ui.js', 'levelup-ui.js']) {
    vm.runInContext(fs.readFileSync(path.join(projectRoot, name), 'utf8'), context, { filename: name });
  }
  const script = fs.readFileSync(path.join(projectRoot, 'script.js'), 'utf8');
  vm.runInContext(script, context, { filename: 'script.js' });
  return context;
}

async function flush() {
  await new Promise(resolve => setImmediate(resolve));
  await new Promise(resolve => setImmediate(resolve));
}

function readConfig() {
  return JSON.parse(fs.readFileSync(path.join(projectRoot, 'config.json'), 'utf8'));
}

function fillWizard(context, overrides = {}) {
  context.fixture = overrides;
  return vm.runInContext(`
    character = { level: 1, class: 'rogue', race: 'tabaxi', background: 'criminal', name: 'Проверка',
      abilities: {strength:8,dexterity:15,constitution:14,intelligence:12,wisdom:13,charisma:10}, ...fixture };
    for (let pass = 0; pass < 6; pass++) {
      CreationOptions.getChoices(character, getCreationContext()).forEach(choice => {
        if (!character[choice.id]) character[choice.id] = choice.count > 1 ? choice.options.slice(0, choice.count).map(o => o.value) : choice.options[0]?.value;
      });
    }
    character.proficiencyChoices = {};
    for (let pass = 0; pass < 3; pass++) {
      const profs = getResolvedProficiencies();
      const seen = new Set(profs.fixed.map(g => g.type + ':' + g.id));
      profs.slots.forEach(slot => {
        const value = slot.options.find(id => !seen.has(CharacterRules.optionType(slot.type, id) + ':' + id));
        if (value) { character.proficiencyChoices[slot.id] = value; seen.add(CharacterRules.optionType(slot.type, value) + ':' + value); }
      });
    }
    JSON.stringify(character);
  `, context);
}

test('final UI and native export agree on stats, unique proficiencies and expertise', async () => {
  const dom = createDOM(), context = loadScript(dom, readConfig());
  await flush();
  fillWizard(context, {creation_worn_armor:'leather'});
  const result = JSON.parse(vm.runInContext(`JSON.stringify({invalid:findFirstInvalidPage(),native:getExportData()})`, context));
  assert.equal(result.invalid, null);
  const data = JSON.parse(result.native[0].data);
  assert.equal(data.stats.dex.score, 17);
  assert.equal(data.vitality['hp-max'].value, 10);
  assert.equal(data.vitality.ac.value, 14);
  assert.equal(Object.values(data.skills).filter(s => s.isProf).length, 8);
  vm.runInContext('currentPageIndex = config.pages.length; renderPage()', context);
  assert.ok(dom.root.textContent.includes('Снаряжение'));
  assert.ok(dom.root.textContent.includes('Спасбросок: Ловкость'));
  assert.ok(dom.root.textContent.includes('Скачать JSON для Long Story Short'));
});

test('backtracking flags a chosen skill newly granted by background and blocks export', async () => {
  const dom = createDOM(), context = loadScript(dom, readConfig());
  await flush();
  fillWizard(context, {class:'fighter',race:'dwarf',race_sub:'mountain-dwarf',background:'sage'});
  const result = JSON.parse(vm.runInContext(`
    character.proficiencyChoices['class:fighter:0:0'] = 'athletics';
    character.background = 'soldier';
    currentPageIndex = config.pages.findIndex(p => p.id === 'proficiencies');
    renderPage();
    JSON.stringify(getResolvedProficiencies());
  `, context));
  assert.ok(result.errors.some(e => e.id === 'class:fighter:0:0' && e.message.includes('уже получено')));
  assert.equal(result.skills.filter(id => id === 'athletics').length, 1);
  assert.ok(dom.root.querySelector('.field-error'));
  assert.throws(() => context.getExportData(), /не завершён/);
});

test('changing class removes obsolete slots visibly and preserves name and abilities', async () => {
  const dom = createDOM(), context = loadScript(dom, readConfig());
  await flush();
  fillWizard(context);
  const result = JSON.parse(vm.runInContext(`
    character.class = 'wizard';
    currentPageIndex = config.pages.findIndex(p => p.id === 'proficiencies'); renderPage();
    JSON.stringify(character);
  `, context));
  assert.equal(result.name, 'Проверка');
  assert.equal(result.abilities.dexterity, 15);
  assert.ok(Object.keys(result.proficiencyChoices).every(id => !id.startsWith('class:rogue')));
  assert.ok(dom.root.textContent.includes('удалены выборы от прежних источников'));
});

test('restoring completed draft with changed rules returns to first invalid step', async () => {
  const dom = createDOM(), context = loadScript(dom, readConfig());
  await flush();
  fillWizard(context);
  vm.runInContext(`delete character.creation_weapon; saveDraft('result'); restoreDraft(); renderPage();`, context);
  assert.equal(dom.root.querySelector('h2').textContent, 'Умения, снаряжение и магия');
  assert.throws(() => context.getExportData(), /не завершён/);
});

test('wizard spell preparation changes after final feat ASI and invalid stale preparation is rejected', async () => {
  const dom = createDOM(), context = loadScript(dom, readConfig());
  await flush();
  const result = JSON.parse(vm.runInContext(`
    character={class:'wizard',race:'human',human_feature:'human_alt',creation_feat:'keen-mind',
      abilityBonusChoices:{slot_0:'strength',slot_1:'constitution'},abilities:{strength:8,dexterity:14,constitution:13,intelligence:15,wisdom:12,charisma:10}};
    const before=CreationOptions.getChoices(character,getCreationContext()).find(c=>c.id==='creation_prepared').count;
    character.creation_feat='alert';
    const after=CreationOptions.getChoices(character,getCreationContext()).find(c=>c.id==='creation_prepared').count;
    JSON.stringify({before,after});
  `, context));
  assert.equal(result.before, 4);
  assert.equal(result.after, 3);
});

test('shrinking prepared spell count prunes hidden entries and permits all visible choices to be repaired', async () => {
  const dom = createDOM(), context = loadScript(dom, readConfig());
  await flush();
  const result = JSON.parse(vm.runInContext(`
    character={class:'cleric',race:'human',human_feature:'human_alt',creation_domain:'knowledge',
      abilityBonusChoices:{slot_0:'strength',slot_1:'charisma'},abilities:{strength:8,dexterity:14,constitution:13,intelligence:12,wisdom:15,charisma:10},
      creation_prepared:['bane','bless','create-or-destroy-water','cure-wounds']};
    currentPageIndex=config.pages.findIndex(p=>p.id==='mechanics'); renderPage();
    JSON.stringify({prepared:character.creation_prepared,errors:CreationOptions.validate(character,getCreationContext())});
  `,context));
  assert.equal(result.prepared.length,3);
  assert.ok(!result.errors.some(e=>e.id==='creation_prepared'));
  assert.ok(dom.root.textContent.includes('доступно 3 вместо 4'));
  const card=value=>dom.root.querySelector(`[data-choice-option="creation_prepared:${value}"]`);
  assert.equal(card('cure-wounds').disabled,true,'full selection locks unselected cards');
  card('create-or-destroy-water').click();
  assert.equal(vm.runInContext('character.creation_prepared.length',context),2);
  card('cure-wounds').click();
  assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(character.creation_prepared)',context)),['bane','bless','cure-wounds']);
  vm.runInContext(`character.abilities.wisdom=8; renderPage();`,context);
  assert.equal(vm.runInContext('typeof character.creation_prepared',context),'string');
  assert.ok(dom.document.getElementById('field-creation_prepared'));
});

test('sole wizard preparation can be removed and stale spell filters reset', async () => {
  const dom = createDOM(), context = loadScript(dom, readConfig());
  await flush();
  fillWizard(context, {class:'wizard',race:'dwarf',race_sub:'mountain-dwarf',background:'sage',
    abilities:{strength:10,dexterity:14,constitution:13,intelligence:8,wisdom:12,charisma:10}});
  const setup = JSON.parse(vm.runInContext(`
    pickerState.set('creation_spellbook', {kind:'missing-kind', query:''});
    currentPageIndex = config.pages.findIndex(p => p.id === 'mechanics'); renderPage();
    JSON.stringify({count: CreationOptions.getChoices(character, getCreationContext()).find(c => c.id === 'creation_prepared').count,
      prepared: character.creation_prepared, kind: pickerState.get('creation_spellbook').kind});
  `, context));
  assert.equal(setup.count, 1);
  assert.equal(setup.kind, 'all');
  dom.root.querySelector(`[data-focus-key="prep:${setup.prepared}"]`).click();
  assert.equal(vm.runInContext('character.creation_prepared', context), '');
  dom.root.querySelector(`[data-focus-key="prep:${setup.prepared}"]`).click();
  assert.equal(vm.runInContext('character.creation_prepared', context), setup.prepared);
});

test('option and race summaries describe armor, darkvision, size and bonus plans accurately', async () => {
  const dom = createDOM(), context = loadScript(dom, readConfig());
  await flush();
  const result = JSON.parse(vm.runInContext(`
    const R = CharacterRules.RACES;
    const parts = id => raceTraitParts(R[id], id).join(' · ');
    const before = parts('harengon');
    character = { level: 1, race: 'harengon', creation_size: 'small' };
    JSON.stringify({
      leather: describeOption({value:'leather'}), scale: describeOption({value:'scale-mail'}),
      genasi: parts('genasi'), elf: parts('elf'), before, after: parts('harengon'),
      size: raceTraitItems(R.harengon, null, 'harengon').find(item => item[0] === 'Размер')[1],
      plans: raceBonusChips(R.harengon).map(chip => chip.text).join(' | ')
    });
  `, context));
  assert.match(result.leather, /^КД 11 \+ ЛОВ/);
  assert.ok(!result.leather.includes('Infinity'));
  assert.ok(result.scale.includes('макс. 2'));
  assert.ok(!result.genasi.includes('тёмное зрение'));
  assert.ok(result.elf.includes('тёмное зрение 60'));
  assert.ok(result.before.includes('маленький или средний'));
  assert.ok(result.after.endsWith('маленький'));
  assert.equal(result.size, 'Маленький');
  assert.ok(result.plans.includes('+2/+1 или +1/+1/+1'));
});

test('live sheet shows ability-independent AC and keeps innate spells out of preparation', async () => {
  const dom = createDOM(), context = loadScript(dom, readConfig());
  await flush();
  const vital = label => dom.root.querySelectorAll('.sheet-vital').find(item => item.children[1].textContent === label).children[0].textContent;
  vm.runInContext(`character = { level: 1, class: 'fighter', race: 'tortle' }; currentPageIndex = 1; renderPage();`, context);
  assert.equal(vital('КД'), '17');
  vm.runInContext(`character = { level: 1, class: 'fighter', race: 'elf', race_sub: 'wood_elf' }; renderPage();`, context);
  assert.equal(vital('КД'), '—');

  fillWizard(context, {class:'fighter',race:'human',background:'soldier',creation_worn_armor:'chain-mail'});
  vm.runInContext(`character.abilities.strength = 8; renderPage();`, context);
  assert.equal(vital('Скорость'), '20', 'heavy armor penalty applies with low Strength');
  vm.runInContext(`delete character.abilities.strength; renderPage();`, context);
  assert.equal(vital('Скорость'), '—');
  vm.runInContext(`character.abilities.strength = 15; renderPage();`, context);
  assert.equal(vital('Скорость'), '30');

  fillWizard(context, {class:'wizard',race:'triton',background:'sage',
    abilities:{strength:8,dexterity:14,constitution:13,intelligence:15,wisdom:12,charisma:10}});
  const fog = vm.runInContext(`renderPage(); getCreationExtras().spells.find(spell => spell.id === 'fog-cloud').label`, context);
  const section = title => dom.root.querySelectorAll('.sheet-section').find(node => node.children[0].textContent === title);
  assert.ok(!section('Подготовлено').textContent.includes(fog));
  assert.ok(section('Особые заклинания').textContent.includes(fog));
});

test('alphabetical race order sorts by displayed name', async () => {
  const dom = createDOM(), context = loadScript(dom, readConfig());
  await flush();
  const names = JSON.parse(vm.runInContext(`
    raceViewState.sort = 'alpha'; character = { level: 1, class: 'wizard' }; currentPageIndex = 1; renderPage();
    JSON.stringify(Array.from(document.querySelectorAll('.race-card__name')).map(node => node.textContent.replace(/\\u00ad/g, '')));
  `, context));
  assert.ok(names.length > 10);
  assert.deepEqual(names, [...names].sort((a, b) => a.localeCompare(b, 'ru')));
});

test('sticky panels reserve the measured action bar height', async () => {
  const dom = createDOM(), context = loadScript(dom, readConfig());
  await flush();
  const props = {}, observers = [];
  dom.document.documentElement = { style: { setProperty: (name, value) => { props[name] = value; } } };
  context.ResizeObserver = class {
    constructor(callback) { this.callback = callback; this.targets = []; observers.push(this); }
    observe(target) { this.targets.push(target); }
    disconnect() { this.targets = []; }
  };
  vm.runInContext(`character = { level: 1, class: 'barbarian', race: 'gith', race_sub: 'githyanki' }; currentPageIndex = 1; renderPage();`, context);
  const bar = dom.root.querySelector('.wizard-actions');
  const observer = observers.at(-1);
  assert.deepEqual(observer.targets, [bar]);
  assert.equal(dom.root.querySelector('.wizard-next').getAttribute('aria-label'), 'Далее: Предыстория');
  bar.getBoundingClientRect = () => ({ height: 74.2 });
  observer.callback();
  assert.equal(props['--actions-height'], '75px');

  fillWizard(context);
  vm.runInContext(`currentPageIndex = config.pages.length; renderPage();`, context);
  assert.deepEqual(observer.targets, []);
  assert.equal(props['--actions-height'], '0px');
});

test('loads release flow and renders all 13 classes including fighter', async () => {
  const config = readConfig();
  const dom = createDOM();
  loadScript(dom, config);
  await flush();

  assert.equal(dom.root.querySelector('h1').textContent, 'Мастер персонажа');
  assert.equal(dom.root.querySelector('h2').textContent, 'Выберите класс');
  const grid = dom.root.querySelector('.choice-grid--class');
  assert.ok(grid, 'class grid exists');
  const labels = grid.querySelectorAll('.choice-card__label').map(node => node.textContent);
  assert.equal(labels.length, 13);
  assert.ok(labels.includes('Воин'));
  assert.equal(dom.root.querySelector('.progress-track').getAttribute('aria-valuenow'), '14');
});

test('race validation requires a subrace and all active extra fields', async () => {
  const config = readConfig();
  const dom = createDOM();
  const context = loadScript(dom, config);
  await flush();

  const missingSubrace = vm.runInContext(`
    character = { level: 1, race: 'elf' };
    currentPageIndex = config.pages.findIndex(page => page.id === 'race');
    validateCurrentPage();
  `, context);
  assert.ok(missingSubrace.some(error => error.id === 'race_sub'));

  const missingHighElfChoices = vm.runInContext(`
    character.race_sub = 'high_elf';
    validateCurrentPage();
  `, context);
  assert.ok(missingHighElfChoices.some(error => error.id === 'high_elf_cantrip'));
  assert.ok(!missingHighElfChoices.some(error => error.id === 'high_elf_language'), 'language choice is deferred to final step');
});

test('popup renders every nested field and rejects duplicate choices', async () => {
  const config = readConfig();
  const dom = createDOM();
  const context = loadScript(dom, config);
  await flush();

  const racePage = config.pages.find(page => page.id === 'race');
  const kenku = racePage.options.find(option => option.value === 'kenku');
  const field = kenku.additionalFields[0];
  const container = dom.document.createElement('div');
  const result = dom.document.createElement('p');
  const opener = dom.document.createElement('button');
  vm.runInContext(`character = { level: 1, race: 'kenku' };`, context);
  context.openPopup(field, result, opener);

  let dialog = dom.document.body.querySelector('.modal-dialog');
  assert.ok(dialog, 'dialog opens');
  const groups = dialog.querySelectorAll('.form-field--radio');
  assert.equal(groups.length, 2, 'both nested skill fields render');

  const firstSkills = groups[0].querySelectorAll('input');
  const secondSkills = groups[1].querySelectorAll('input');
  firstSkills[0].checked = true;
  firstSkills[0].dispatchEvent({ type: 'change' });
  secondSkills[0].checked = true;
  secondSkills[0].dispatchEvent({ type: 'change' });
  dialog.querySelector('.primary-button').click();
  assert.ok(dom.document.body.querySelector('.modal-dialog'), 'dialog stays open for duplicate skills');
  assert.equal(dialog.querySelector('.modal-error').hidden, false);

  secondSkills[1].checked = true;
  secondSkills[1].dispatchEvent({ type: 'change' });
  dialog.querySelector('.primary-button').click();
  assert.equal(dom.document.body.querySelector('.modal-dialog'), null, 'dialog closes after valid choices');
});

test('changing subrace and race clears stale conditional data', async () => {
  const config = readConfig();
  const dom = createDOM();
  const context = loadScript(dom, config);
  await flush();

  const afterSubraceClear = vm.runInContext(`
    character = {
      level: 1,
      race: 'elf',
      race_sub: 'high_elf',
      high_elf_cantrip: 'fire-bolt',
      high_elf_language: 'high_elf_lang_dwarf'
    };
    clearSubraceAdditionalFields(getSelectedRace());
    ({ ...character });
  `, context);
  assert.equal(afterSubraceClear.high_elf_cantrip, undefined);
  assert.equal(afterSubraceClear.high_elf_language, undefined);

  const afterRaceClear = vm.runInContext(`
    character.kenku_skill_1 = 'kenku_skill_1_acrobatics';
    character.kenku_skill_2 = 'kenku_skill_2_deception';
    character.abilityBonusPlan = 'two_one';
    character.abilityBonusChoices = { slot_0: 'strength' };
    clearAllRaceSpecificData();
    ({ ...character });
  `, context);
  assert.equal(afterRaceClear.kenku_skill_1, undefined);
  assert.equal(afterRaceClear.kenku_skill_2, undefined);
  assert.equal(afterRaceClear.race_sub, undefined);
  assert.equal(afterRaceClear.abilityBonusPlan, undefined);
  assert.equal(afterRaceClear.abilityBonusChoices, undefined);
});

test('fixed race and subrace bonuses are included in totals', async () => {
  const config = readConfig();
  const dom = createDOM();
  const context = loadScript(dom, config);
  await flush();

  const result = vm.runInContext(`
    character = {
      level: 1,
      race: 'dwarf',
      race_sub: 'mountain-dwarf',
      abilities: { strength: 15, constitution: 14 }
    };
    ({ bonuses: getRacialAbilityBonuses(), strength: getFinalAbilityValue('strength'), constitution: getFinalAbilityValue('constitution') });
  `, context);
  assert.equal(result.bonuses.strength, 2);
  assert.equal(result.bonuses.constitution, 2);
  assert.equal(result.strength, 17);
  assert.equal(result.constitution, 16);
});

test('chosen race bonuses are required, distinct and included in totals', async () => {
  const config = readConfig();
  const dom = createDOM();
  const context = loadScript(dom, config);
  await flush();

  const result = vm.runInContext(`
    character = {
      level: 1,
      race: 'half-elf',
      abilities: { strength: 15, dexterity: 14, constitution: 13, intelligence: 12, wisdom: 10, charisma: 8 }
    };
    const page = config.pages.find(item => item.id === 'abilities');
    const missing = getAbilitiesValidationMessage(page);
    character.abilityBonusChoices = { slot_0: 'strength', slot_1: 'strength' };
    const duplicate = getAbilitiesValidationMessage(page);
    character.abilityBonusChoices = { slot_0: 'charisma', slot_1: 'wisdom' };
    const fixedAgain = getAbilitiesValidationMessage(page);
    character.abilityBonusChoices = { slot_0: 'strength', slot_1: 'wisdom' };
    const valid = getAbilitiesValidationMessage(page);
    ({ missing, duplicate, fixedAgain, valid, bonuses: getRacialAbilityBonuses(), strength: getFinalAbilityValue('strength'), charisma: getFinalAbilityValue('charisma') });
  `, context);
  assert.match(result.missing, /расовых бонусов/);
  assert.match(result.duplicate, /разные допустимые/);
  assert.match(result.fixedAgain, /разные допустимые/);
  assert.equal(result.valid, '');
  assert.equal(result.bonuses.charisma, 2);
  assert.equal(result.bonuses.strength, 1);
  assert.equal(result.bonuses.wisdom, 1);
  assert.equal(result.strength, 16);
  assert.equal(result.charisma, 10);
});

test('flexible races require a bonus plan and render live totals', async () => {
  const config = readConfig();
  const dom = createDOM();
  const context = loadScript(dom, config);
  await flush();

  const messages = vm.runInContext(`
    character = {
      level: 1,
      race: 'autognome',
      abilities: { strength: 15, dexterity: 14, constitution: 13, intelligence: 12, wisdom: 10, charisma: 8 }
    };
    const page = config.pages.find(item => item.id === 'abilities');
    const withoutPlan = getAbilitiesValidationMessage(page);
    character.abilityBonusPlan = 'two_one';
    const withoutChoices = getAbilitiesValidationMessage(page);
    character.abilityBonusChoices = { slot_0: 'intelligence', slot_1: 'constitution' };
    const valid = getAbilitiesValidationMessage(page);
    currentPageIndex = config.pages.findIndex(item => item.id === 'abilities');
    renderPage();
    ({ withoutPlan, withoutChoices, valid });
  `, context);
  assert.match(messages.withoutPlan, /схему расовых бонусов/);
  assert.match(messages.withoutChoices, /расовых бонусов/);
  assert.equal(messages.valid, '');
  assert.ok(dom.root.querySelector('.racial-bonuses'));
  const totals = dom.root.querySelectorAll('.ability-total').map(node => node.textContent);
  assert.deepEqual(totals, ['15', '14', '14', '14', '10', '8']);
});

test('every configured race has an ability bonus rule', async () => {
  const config = readConfig();
  const dom = createDOM();
  const context = loadScript(dom, config);
  await flush();

  const configured = config.pages.find(page => page.id === 'race').options.map(option => option.value).sort();
  const supported = JSON.parse(vm.runInContext(`JSON.stringify(Object.keys(CharacterRules.RACES).sort())`, context));
  assert.deepEqual(supported, configured);
});

test('a complete basic character passes every release step', async () => {
  const config = readConfig();
  const dom = createDOM();
  const context = loadScript(dom, config);
  await flush();

  const errorsByPage = vm.runInContext(`
    character = {
      level: 1,
      class: 'fighter',
      race: 'dwarf',
      race_sub: 'mountain-dwarf',
      background: 'soldier',
      abilities: {
        strength: 15,
        dexterity: 13,
        constitution: 14,
        intelligence: 8,
        wisdom: 10,
        charisma: 12
      },
      name: 'Бринн'
    };
    for (let pass = 0; pass < 5; pass++) {
      CreationOptions.getChoices(character, getCreationContext()).forEach(choice => {
        if (!character[choice.id]) character[choice.id] = choice.count > 1 ? choice.options.slice(0, choice.count).map(o => o.value) : choice.options[0].value;
      });
    }
    character.proficiencyChoices = {};
    for (let pass = 0; pass < 3; pass++) {
      const profs = getResolvedProficiencies();
      const seen = new Set(profs.fixed.map(g => g.type + ':' + g.id));
      profs.slots.forEach(slot => {
        const value = slot.options.find(id => !seen.has(CharacterRules.optionType(slot.type, id) + ':' + id));
        if (value) { character.proficiencyChoices[slot.id] = value; seen.add(CharacterRules.optionType(slot.type, value) + ':' + value); }
      });
    }
    Object.fromEntries(config.pages.map((page, index) => {
      currentPageIndex = index;
      return [page.id, validateCurrentPage()];
    }));
  `, context);
  Object.entries(errorsByPage).forEach(([pageId, errors]) => {
    assert.equal(errors.length, 0, `${pageId} should be valid`);
  });
});

test('configuration links, assets and option values are release-safe', () => {
  const config = readConfig();
  assert.equal(config.meta.edition, 'D&D 5e 2014');
  assert.deepEqual(config.flow, ['class', 'race', 'background', 'abilities', 'mechanics', 'general', 'proficiencies']);

  const classPage = config.pages.find(page => page.id === 'class');
  const classes = classPage.elements.find(element => element.id === 'class').options;
  assert.equal(classes.length, 13);
  assert.ok(classes.some(option => option.value === 'fighter'));

  const backgroundPage = config.pages.find(page => page.id === 'background');
  assert.equal(backgroundPage.options.length, 14);

  const seenImages = new Set();
  const walk = node => {
    if (!node || typeof node !== 'object') return;
    if (node.image) {
      const imagePath = path.join(projectRoot, node.image);
      assert.ok(fs.existsSync(imagePath), `missing image ${node.image}`);
      seenImages.add(node.image);
    }
    if (node.link) assert.match(node.link, /^https:\/\/(?:[a-z0-9-]+\.)?dnd\.su\//i);
    for (const key of ['options', 'elements', 'additionalFields', 'suboptions']) {
      const children = node[key] || [];
      if (key === 'options') {
        const values = children.map(option => String(option.value));
        assert.equal(new Set(values).size, values.length, `duplicate option values near ${node.id || node.label}`);
      }
      children.forEach(walk);
    }
  };
  config.pages.forEach(walk);
  assert.ok(seenImages.size >= 63);

  const elf = config.pages.find(page => page.id === 'race').options.find(option => option.value === 'elf');
  const highElf = elf.suboptions.find(option => option.value === 'high_elf');
  const cantrips = highElf.additionalFields[0].additionalFields[0].options;
  assert.ok(cantrips.some(option => option.value === 'blade-ward'));
});


test('advancement UI restores a legacy draft, resumes/cancels and commits each level once with export agreement', async () => {
  const dom=createDOM(),context=loadScript(dom,readConfig());await flush();
  fillWizard(context,{class:'fighter',race:'dwarf',race_sub:'hill-dwarf',background:'soldier',name:'CODEX QA legacy',creation_style:'defense',creation_worn_armor:'chain-mail',creation_shield_equipped:'yes'});
  vm.runInContext("currentPageIndex=config.pages.length;saveDraft('result');restoreDraft();renderPage();",context);
  const original=JSON.parse(vm.runInContext('JSON.stringify(character)',context));
  const click=text=>{const button=dom.root.querySelectorAll('button').find(b=>b.textContent===text);assert.ok(button,text);assert.equal(button.disabled,false,text);button.click();};
  click('Повысить до 2-го уровня');click('Далее →');
  vm.runInContext('restoreDraft();renderPage();',context);
  assert.ok(dom.root.textContent.includes('шаг 2 из 5'));
  click('Отменить повышение');assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(character)',context)),original);
  click('Повысить до 2-го уровня');click('Далее →');click('Далее →');click('Далее →');click('Далее →');click('Применить повышение');
  vm.runInContext('restoreDraft();renderPage();',context);assert.equal(vm.runInContext('character.level',context),2);
  click('Повысить до 3-го уровня');click('Далее →');click('Далее →');
  const subclass=dom.root.querySelectorAll('button').find(button=>button.getAttribute('data-focus-key')==='subclass:champion');assert.ok(subclass);subclass.click();
  click('Далее →');click('Далее →');click('Применить повышение');
  const result=JSON.parse(vm.runInContext('JSON.stringify({character,stats:getDerivedCharacter(),native:getExportData()})',context));
  assert.equal(result.character.level,3);assert.equal(result.stats.hp,34);assert.equal(result.stats.ac,19);assert.equal(result.character.advancement.entries.length,2);
  for(const key of Object.keys(original))if(key!=='level')assert.deepEqual(result.character[key],original[key]);
  const native=JSON.parse(result.native[0].data);assert.equal(native.info.level.value,3);assert.equal(native.vitality['hp-max'].value,result.stats.hp);assert.equal(native.vitality['hp-dice-current'].value,3);
  assert.ok(!dom.root.textContent.includes('Повысить до 4-го уровня'));
  click('← Вернуться к редактированию');assert.ok(dom.document.getElementById('progression-reset-dialog'));click('Оставить героя');assert.equal(vm.runInContext('character.level',context),3);
  click('← Вернуться к редактированию');click('Сбросить прокачку и продолжить');assert.equal(vm.runInContext('character.level',context),1);assert.equal(vm.runInContext('character.name',context),original.name);
});

test('malformed pending drafts can be cancelled and corrupt ledgers block export with no added HP', async () => {
  const dom=createDOM(),context=loadScript(dom,readConfig());await flush();fillWizard(context,{class:'fighter'});
  const baseline=vm.runInContext('getDerivedCharacter().hp',context);
  vm.runInContext('currentPageIndex=config.pages.length;character.pendingAdvancement={version:1,choices:null};renderPage();',context);
  assert.ok(dom.root.textContent.includes('Повреждён черновик повышения'));
  dom.root.querySelectorAll('button').find(b=>b.textContent==='Отменить повышение').click();
  assert.equal(vm.runInContext('character.level',context),1);
  vm.runInContext("const p=LevelUpRules.begin(character,getAdvancementContext());character=LevelUpRules.commit(character,p,getAdvancementContext());character.advancement.entries.push(p);character.level=3;renderPage();",context);
  assert.equal(vm.runInContext('getDerivedCharacter().hp',context),baseline);assert.throws(()=>vm.runInContext('getExportData()',context));
  assert.ok(dom.root.querySelectorAll('button').find(b=>b.textContent==='Копировать JSON').disabled);
});
test('a falsey advancement ledger still asks to reset before editing and the reset unblocks export', async () => {
  const dom=createDOM(),context=loadScript(dom,readConfig());await flush();fillWizard(context,{class:'fighter'});
  vm.runInContext('currentPageIndex=config.pages.length;character.advancement=null;renderPage();',context);
  const click=text=>{const button=dom.root.querySelectorAll('button').find(b=>b.textContent===text);assert.ok(button,text);button.click();};
  click('← Вернуться к редактированию');
  assert.ok(dom.document.getElementById('progression-reset-dialog'));
  click('Сбросить прокачку и продолжить');
  assert.equal(vm.runInContext("Object.hasOwn(character,'advancement')",context),false);
  assert.equal(vm.runInContext('character.level',context),1);
  vm.runInContext('currentPageIndex=config.pages.length;renderPage();',context);
  assert.doesNotThrow(()=>vm.runInContext('getExportData()',context));
  assert.equal(dom.root.querySelectorAll('button').find(b=>b.textContent==='Копировать JSON').disabled,false);
});
test('both final sheets show exact resource maxima and recovery; Chain spell survives sheet and export', async () => {
  for (const [cls,branch,lastLevel] of [['fighter',null,2],['bard',null,2],['warlock',null,3],['fighter','cavalier',3],['barbarian','wild-magic',3],['cleric','light',1],['cleric','tempest',1],['cleric','grave',1],['warlock','archfey',1],['wizard',null,3],['sorcerer','wild',1],['artificer','battle-smith',3],['artificer','armorer',3],['bard','creation',3],['fighter','psi-warrior',3],['rogue','soulknife',3],['warlock','talisman',3],['druid','shepherd',2],['druid','shepherd',3],['druid','dreams',3],['fighter','rune-knight',3],['artificer','artillerist',3],['bard','swords',3]]) {
    const dom=createDOM(),context=loadScript(dom,readConfig());await flush();
    const overrides={class:cls};if(cls==='cleric')overrides.creation_domain=branch;if(cls==='warlock'&&branch)overrides.creation_patron=branch;if(cls==='sorcerer'&&branch)overrides.creation_origin=branch;
    if(cls==='artificer')overrides.abilities={strength:8,dexterity:10,constitution:14,intelligence:15,wisdom:13,charisma:12};fillWizard(context,overrides);
    vm.runInContext(`
      for(let pass=0;pass<5;pass++)for(const g of CreationOptions.getChoices(character,getCreationContext())){const chosen=[].concat(character[g.id]||[]);if(chosen.length!==g.count||chosen.some(id=>!g.options.some(o=>o.value===id)))character[g.id]=g.count===1?g.options[0].value:g.options.slice(0,g.count).map(x=>x.value);}
      for(let level=2;level<=${lastLevel};level++){
        const p=LevelUpRules.begin(character,getAdvancementContext());
        if(level===3&&'${cls}'==='warlock')p.choices.pact=${JSON.stringify(branch==='talisman'?'talisman':'chain')};
        if('${cls}'!=='warlock'&&LevelUpRules.subclasses(character.class).some(s=>s.id===${JSON.stringify(branch)}&&s.level===level))p.choices.subclass=${JSON.stringify(branch)};
        for(let pass=0;pass<10;pass++)for(const g of LevelUpRules.getChoices(character,p,getAdvancementContext()))if(!p.choices[g.id])p.choices[g.id]=g.count===1?g.options[0].value:g.options.slice(0,g.count).map(x=>x.value);
        character=LevelUpRules.commit(character,p,getAdvancementContext());
      }
      const left=document.createElement('div'),right=document.createElement('aside');
      renderMechanicalSummary(left);renderCharacterSheet(right,getStepStates());
      sheetProbe={left:left.textContent,right:right.textContent,extras:getCreationExtras(),export:getExportData()};
    `,context);
    const result=JSON.parse(vm.runInContext('JSON.stringify(sheetProbe)',context));
    if(cls==='wizard'){const recovery=result.extras.features.find(f=>f.name==='Магическое восстановление').description;assert.ok(recovery.includes('суммарного круга до 2'));assert.ok(result.left.includes(recovery));}
    if(cls==='artificer'&&branch==='battle-smith'){const magic=result.extras.attacks.find(a=>a.id==='light-crossbow-battle-ready');assert.ok(magic);assert.ok(result.left.includes(magic.label));assert.equal(result.extras.attacks.length,new Set(result.extras.attacks.map(a=>a.id)).size);}
    if(cls==='artificer'&&branch==='armorer'){for(const attack of result.extras.attacks.filter(a=>a.armorerWeapon)){assert.ok(result.left.includes(attack.label));assert.ok(JSON.parse(result.export[0].data).weaponsList.some(w=>w.name.value===attack.label&&w.dmg.value===attack.damage));}}
    for(const name of ['Тотемный дух','Бальзам Летнего двора','Резчик рун','Непоколебимая метка','Мистическая пушка','Росчерк клинка']){const f=result.extras.features.find(f=>f.name===name);if(f){assert.ok(result.left.includes(f.description),name+': sheet');assert.ok(JSON.stringify(JSON.parse(result.export[0].data).text.traits).includes(f.description),name+': export');}}
    if(cls==='warlock'&&!branch){
      const spell=result.extras.spells.find(x=>x.id==='find-familiar');assert.ok(spell&&spell.ability==='charisma');assert.ok(result.left.includes(spell.label));assert.ok(result.right.includes(spell.label));assert.ok(result.export[0].spells.slotless.includes(context.LssExport.SPELL_IDS['find-familiar']));
    } else {
      for(const r of result.extras.resources){const text=`${r.name}: максимум ${r.max}; ${r.recovery||`восстановление после ${r.rest==='short-rest'?'короткого или долгого':'долгого'} отдыха`}.`;assert.ok(result.left.includes(text),cls+':left:'+r.id);assert.ok(result.right.includes(text),cls+':right:'+r.id);}
    }
  }
});

test('advancement spell cards keep filtered selections removable and do not mutate the committed hero', async () => {
  const dom=createDOM(),context=loadScript(dom,readConfig());await flush();fillWizard(context,{class:'wizard'});
  vm.runInContext("currentPageIndex=config.pages.length;character.pendingAdvancement=LevelUpRules.begin(character,getAdvancementContext());character.pendingAdvancement.step=3;renderPage();",context);
  const snapshot=vm.runInContext('JSON.stringify({...character,pendingAdvancement:undefined})',context);
  const choice=dom.root.querySelectorAll('button').find(button=>button.getAttribute('data-focus-key')?.startsWith('book_add:'));
  assert.ok(choice);const focus=choice.getAttribute('data-focus-key'),value=focus.slice('book_add:'.length);choice.click();
  assert.equal(vm.runInContext('JSON.stringify({...character,pendingAdvancement:undefined})',context),snapshot);
  assert.equal(dom.document.activeElement.getAttribute('data-focus-key'),focus);
  const search=dom.document.getElementById('field-book_add').querySelector('input');assert.ok(search);search.value='нет такого заклинания';search.dispatchEvent({type:'input'});
  const clear=dom.root.querySelectorAll('button').find(button=>button.getAttribute('data-focus-key')===`clear:book_add:${value}`);assert.ok(clear);assert.equal(clear.hidden,false);clear.click();
  assert.equal(dom.document.activeElement.type,'search');
  assert.equal(vm.runInContext('character.pendingAdvancement.choices.book_add.length',context),0);
  assert.equal(vm.runInContext('JSON.stringify({...character,pendingAdvancement:undefined})',context),snapshot);
});

test('version-one pending advancement resumes on its original decision step and remains cancellable', async () => {
  const dom=createDOM(),context=loadScript(dom,readConfig());await flush();fillWizard(context,{class:'fighter'});
  vm.runInContext("currentPageIndex=config.pages.length;character.pendingAdvancement={...LevelUpRules.begin(character,getAdvancementContext()),version:1,step:1};delete character.pendingAdvancement.classId;renderPage();",context);
  assert.ok(dom.root.textContent.includes('шаг 3 из 5'));assert.ok(dom.root.textContent.includes('Умения и владения'));
  vm.runInContext("saveDraft('result');restoreDraft();renderPage();",context);assert.ok(dom.root.textContent.includes('шаг 3 из 5'));
  dom.root.querySelectorAll('button').find(button=>button.textContent==='Отменить повышение').click();assert.equal(vm.runInContext('character.level',context),1);assert.equal(vm.runInContext('character.pendingAdvancement',context),undefined);
});

test('multiclass advancement selects class, explains +7 HP and renders independent magic in preview and result', async () => {
  const dom=createDOM(),context=loadScript(dom,readConfig());await flush();fillWizard(context,{class:'wizard',abilities:{strength:13,dexterity:13,constitution:14,intelligence:14,wisdom:13,charisma:14}});
  vm.runInContext("currentPageIndex=config.pages.length;startAdvancement();",context);
  const classButton=dom.root.querySelectorAll('button').find(button=>button.getAttribute('data-focus-key')==='advancement-class:warlock');assert.ok(classButton);assert.equal(classButton.disabled,false);classButton.click();
  assert.equal(vm.runInContext('character.pendingAdvancement.classId',context),'warlock');
  dom.root.querySelectorAll('button').find(button=>button.textContent==='Далее →').click();
  assert.ok(dom.root.textContent.includes('Среднее: +7 хитов'));assert.ok(dom.root.textContent.includes('5 кость + (+2) ТЕЛ = +7 хитов'));
  const before=vm.runInContext('getDerivedCharacter().hp',context);
  vm.runInContext(`
    const p=character.pendingAdvancement;
    for(let pass=0;pass<10;pass++)for(const g of LevelUpRules.getChoices(character,p,getAdvancementContext()))if(!p.choices[g.id])p.choices[g.id]=g.count===1?g.options[0].value:g.options.slice(0,g.count).map(x=>x.value);
    p.step=4;renderPage();
  `,context);
  assert.ok(dom.root.textContent.includes('Волшебник 1 / Колдун 1'));
  const sheet=dom.root.querySelector('.advancement-sheet');assert.ok(sheet);assert.ok(sheet.textContent.includes('Предпросмотр повышения'));assert.ok(sheet.textContent.includes('Магия · Волшебник 1'));assert.ok(sheet.textContent.includes('Магия · Колдун 1'));assert.ok(sheet.textContent.includes('договор, короткий отдых'));assert.ok(sheet.textContent.includes('1к6 + 1к8'));
  assert.equal(vm.runInContext('character.level',context),1);assert.equal(vm.runInContext('getDerivedCharacter().hp',context),before);
  const commit=dom.root.querySelectorAll('button').find(button=>button.textContent==='Применить повышение');assert.equal(commit.disabled,false);commit.click();
  assert.equal(vm.runInContext('getDerivedCharacter().hp',context),before+7);assert.ok(dom.root.textContent.includes('Волшебник 1 / Колдун 1'));
});

test('advancement confirmation preserves daily and conditional resource recovery',async()=>{
 for(const overrides of [{class:'wizard'},{class:'sorcerer',creation_origin:'wild'}]){
  const dom=createDOM(),context=loadScript(dom,readConfig());await flush();fillWizard(context,overrides);
  vm.runInContext(`for(let pass=0;pass<5;pass++)for(const g of CreationOptions.getChoices(character,getCreationContext())){const chosen=[].concat(character[g.id]||[]);if(chosen.length!==g.count||chosen.some(id=>!g.options.some(o=>o.value===id)))character[g.id]=g.count===1?g.options[0].value:g.options.slice(0,g.count).map(x=>x.value);}currentPageIndex=config.pages.length;startAdvancement();const p=character.pendingAdvancement;for(let pass=0;pass<10;pass++)for(const g of LevelUpRules.getChoices(character,p,getAdvancementContext()))if(!p.choices[g.id])p.choices[g.id]=g.count===1?g.options[0].value:g.options.slice(0,g.count).map(x=>x.value);p.step=4;renderPage();resourceProbe=getCreationExtras().resources.filter(r=>r.recovery);`,context);
  const resources=JSON.parse(vm.runInContext('JSON.stringify(resourceProbe)',context));assert.equal(resources.length,1);for(const r of resources)assert.ok(dom.root.textContent.includes(`${r.name}: ${r.max}, ${r.recovery}`));assert.equal(vm.runInContext('character.level',context),1);
 }
});


test('Knowledge creation picker permits trained skills but blocks duplicate expertise choices', async()=>{
 const dom=createDOM(),context=loadScript(dom,readConfig());await flush();fillWizard(context,{class:'cleric',creation_domain:'knowledge',background:'sage'});
 vm.runInContext("delete character.proficiencyChoices['creation:knowledge-skill:0'];delete character.proficiencyChoices['creation:knowledge-skill:1'];currentPageIndex=config.pages.findIndex(p=>p.id==='proficiencies');renderPage();",context);
 const first=dom.document.getElementById('field-creation:knowledge-skill:0');assert.ok(first);for(const id of ['arcana','history'])assert.equal(first.querySelectorAll('option').find(o=>o.value===id).disabled,false);
 first.value='arcana';first.dispatchEvent({type:'change'});
 const second=dom.document.getElementById('field-creation:knowledge-skill:1');assert.equal(second.querySelectorAll('option').find(o=>o.value==='arcana').disabled,true);assert.equal(second.querySelectorAll('option').find(o=>o.value==='history').disabled,false);second.value='history';second.dispatchEvent({type:'change'});
 assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(getResolvedProficiencies().errors)',context)),[]);assert.ok(vm.runInContext("getResolvedProficiencies().expertise.includes('arcana')&&getResolvedProficiencies().expertise.includes('history')",context));
});
