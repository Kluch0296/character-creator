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
  for (const [cls,branch,lastLevel] of [['fighter',null,2],['bard',null,2],['warlock',null,3],['fighter','cavalier',3],['barbarian','wild-magic',3],['cleric','light',1],['cleric','tempest',1],['cleric','grave',1],['warlock','archfey',1],['wizard',null,3],['sorcerer','wild',1],['artificer','battle-smith',3],['artificer','armorer',3],['bard','creation',3],['fighter','psi-warrior',3],['rogue','soulknife',3],['warlock','talisman',3],['druid','shepherd',2],['druid','shepherd',3],['druid','dreams',3],['fighter','rune-knight',3],['artificer','artillerist',3],['bard','swords',3],['wizard','illusion',2],['rogue','thief',2],['rogue','thief',3],['druid','spores',2],['druid','spores',3],['fighter','arcane-archer',3],['ranger','drakewarden',3],['ranger','beast-master',3],['druid','wildfire',2],['druid','wildfire',3],['druid','moon',2],['druid','moon',3],['monk','open-hand',3],['paladin',null,2],['paladin','devotion',3],['fighter','echo-knight',3],['sorcerer','wild',2],['sorcerer','wild',3],['bard','spirits',3],['artificer','alchemist',3],['rogue','swashbuckler',3]]) {
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
    if(cls==='wizard'){const recovery=result.extras.features.find(f=>f.name==='Магическое восстановление').description;assert.ok(recovery.includes('суммарного круга до '+Math.ceil(lastLevel/2)));assert.ok(result.left.includes(recovery));}
    if(cls==='artificer'&&branch==='battle-smith'){const magic=result.extras.attacks.find(a=>a.id==='light-crossbow-battle-ready');assert.ok(magic);assert.ok(result.left.includes(magic.label));assert.equal(result.extras.attacks.length,new Set(result.extras.attacks.map(a=>a.id)).size);}
    if(cls==='artificer'&&branch==='armorer'){for(const attack of result.extras.attacks.filter(a=>a.armorerWeapon)){assert.ok(result.left.includes(attack.label));assert.ok(JSON.parse(result.export[0].data).weaponsList.some(w=>w.name.value===attack.label&&w.dmg.value===attack.damage));}}
    for(const name of ['Тотемный дух','Бальзам Летнего двора','Резчик рун','Непоколебимая метка','Мистическая пушка','Росчерк клинка','Улучшенная малая иллюзия','Скрытая атака','Дикий всплеск','Стальной защитник','Симбиотическая сущность','Драконий спутник','Спутник следопыта','Призыв духа дикого огня','Техника открытой ладони','Наложение рук','Проявление эха','Гибкое колдовство','Истории из-за пределов','Экспериментальный эликсир','Частица потенциала','Удалой нахал','Дикий облик']){const f=result.extras.features.find(f=>f.name===name);if(f){assert.ok(result.left.includes(f.description),name+': sheet');f.description.split('\n').forEach(line=>assert.ok(JSON.stringify(JSON.parse(result.export[0].data).text.traits).includes(line),name+': export'));}}
    if(cls==='fighter'&&branch==='arcane-archer'){const spell=result.extras.spells.find(s=>s.limitExempt);assert.equal(spell.ability,'intelligence');const label=spell.label+' · Интеллект';assert.ok(result.left.slice(result.left.indexOf('Заклинания и заговоры')).includes(label));assert.ok(result.right.slice(result.right.indexOf('Заговоры')).includes(label));assert.equal(JSON.parse(result.export[0].data).spellsInfo.abilities[context.LssExport.SPELL_IDS[spell.id]],'int');}
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
 for(const overrides of [{class:'wizard'},{class:'sorcerer',creation_origin:'wild'},{class:'sorcerer',creation_origin:'shadow'}]){
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

test('PR26 round eleven: advancement effect filters show verified damage and honest unknown categories', async()=>{
 const H=require('./fixtures/characters');
 for(const [cls,groupId,damageIds,unknown] of [['wizard','book_add',['scorching-ray','shatter'],'mirror-image'],['druid','prepared',['moonbeam'],'barkskin']]){
  const c=H.advance(H.create(cls)),dom=createDOM(),context=loadScript(dom,readConfig());await flush();
  vm.runInContext(`character=${JSON.stringify(c)};character.pendingAdvancement=LevelUpRules.begin(character,getAdvancementContext());character.pendingAdvancement.step=3;currentPageIndex=config.pages.length;renderPage();`,context);
  const field=dom.document.getElementById('field-'+groupId);assert.ok(field);const chips=field.querySelectorAll('button').filter(b=>b.getAttribute('data-kind')),chip=id=>chips.find(b=>b.getAttribute('data-kind')===id),card=id=>field.querySelector(`[data-choice-option="${groupId}:${id}"]`).parentNode;
  assert.ok(chip('damage'));assert.ok(chip('unknown'));assert.ok(chip('unknown').textContent.includes('Без категории'));chip('damage').click();for(const id of damageIds)assert.equal(card(id).hidden,false,id);assert.equal(card(unknown).hidden,true);
  const visibleDamage=field.querySelectorAll('.spell-card').filter(c=>!c.hidden);assert.equal(Number(chip('damage').querySelector('em').textContent),visibleDamage.length);chip('unknown').click();assert.equal(card(unknown).hidden,false);for(const id of damageIds)assert.equal(card(id).hidden,true);
  chip('all').click();for(const id of [...damageIds,unknown])assert.equal(card(id).hidden,false);const search=field.querySelector('input');search.value=context.LevelUpRules.label(unknown);search.dispatchEvent({type:'input'});assert.equal(card(unknown).hidden,false);for(const id of damageIds)assert.equal(card(id).hidden,true);
 }
});

test('PR26 round thirteen: optional TCE cards reveal choices and commit their rules to sheet and export',async()=>{
 const H=require('./fixtures/characters');
 for(const [cls,id,name] of [['barbarian','variant_primal-knowledge','Первобытное знание'],['rogue','variant_steady-aim','Точное прицеливание']]){
  const c=H.advance(H.create(cls,null,{abilities:{strength:15,dexterity:14,constitution:13,intelligence:12,wisdom:10,charisma:8}})),dom=createDOM(),context=loadScript(dom,readConfig());await flush();
  vm.runInContext(`character=${JSON.stringify(c)};character.pendingAdvancement=LevelUpRules.begin(character,getAdvancementContext());const p=character.pendingAdvancement;p.choices.subclass='${cls==='rogue'?'thief':'berserker'}';for(let pass=0;pass<10;pass++)for(const g of LevelUpRules.getChoices(character,p,getAdvancementContext()))if(g.id!=='${id}'&&!p.choices[g.id])p.choices[g.id]=g.count===1?g.options[0].value:g.options.slice(0,g.count).map(x=>x.value);p.step=2;currentPageIndex=config.pages.length;renderPage();`,context);
  const choose=value=>{const button=dom.root.querySelector(`[data-focus-key="${id}:${value}"]`);assert.ok(button);button.click();};assert.equal(dom.document.getElementById('field-primal_skill'),null);choose('yes');
  if(cls==='barbarian'){assert.ok(dom.document.getElementById('field-primal_skill'));const group=JSON.parse(vm.runInContext("JSON.stringify(LevelUpRules.getChoices(character,character.pendingAdvancement,getAdvancementContext()).find(g=>g.id==='primal_skill'))",context));const select=()=>dom.root.querySelector(`[data-focus-key="primal_skill:${group.options[0].value}"]`).click();select();choose('no');assert.equal(dom.document.getElementById('field-primal_skill'),null);assert.equal(vm.runInContext('character.pendingAdvancement.choices.primal_skill',context),undefined);choose('yes');select();}
  assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(LevelUpRules.transition(character,character.pendingAdvancement,getAdvancementContext()).errors)',context)),[],cls+': pending errors');
  vm.runInContext('character.pendingAdvancement.step=4;renderPage();',context);assert.equal(vm.runInContext('character.level',context),2);assert.ok(dom.root.textContent.includes(name));const commit=dom.root.querySelectorAll('button').find(b=>b.textContent==='Применить повышение');assert.equal(commit.disabled,false);commit.click();assert.equal(vm.runInContext('character.level',context),3);assert.ok(dom.root.textContent.includes(name));assert.ok(vm.runInContext(`JSON.parse(getExportData()[0].data).text.traits.value.data.content.some(p=>p.content?.some(t=>t.text?.includes('${name}')))`,context));
 }
});

test('PR26 round fifteen: invalid restored creation blocks pending advancement until repaired', async()=>{
 for(const field of ['creation_weapon','background']){
  const dom=createDOM(),context=loadScript(dom,readConfig());await flush();fillWizard(context,{class:'fighter',abilityBonusChoices:{}});
  vm.runInContext("currentPageIndex=config.pages.length;renderPage();startAdvancement();character.pendingAdvancement.step=1;",context);
  const pending=vm.runInContext('JSON.stringify(character.pendingAdvancement)',context),saved=vm.runInContext(`JSON.stringify(character.${field})`,context);
  vm.runInContext(`delete character.${field};saveDraft('result');`,context);
  for(let reload=0;reload<2;reload++){
   vm.runInContext('restoreDraft();renderPage();',context);
   assert.ok(vm.runInContext('currentPageIndex<config.pages.length',context));assert.ok(dom.root.querySelector('.wizard-next'));
   assert.ok(!dom.root.textContent.includes('Применить повышение'));assert.equal(vm.runInContext('JSON.stringify(character.pendingAdvancement)',context),pending);
   assert.equal(vm.runInContext('character.level',context),1);assert.throws(()=>context.getExportData(),/не завершён|выборы изменились/);
   vm.runInContext('saveDraft();',context);
  }
  vm.runInContext(`character.${field}=${saved};renderPage();`,context);
  for(let step=0;step<10&&vm.runInContext('currentPageIndex<config.pages.length',context);step++)dom.root.querySelector('.wizard-next').click();
  assert.ok(dom.root.textContent.includes('шаг 2 из 5'));assert.equal(vm.runInContext('JSON.stringify(character.pendingAdvancement)',context),pending);
  vm.runInContext("character.pendingAdvancement.step=4;renderPage();",context);
  const commit=dom.root.querySelectorAll('button').find(b=>b.textContent==='Применить повышение');assert.ok(commit);assert.equal(commit.disabled,false);commit.click();
  assert.equal(vm.runInContext('character.level',context),2);assert.equal(vm.runInContext('character.advancement.entries.length',context),1);
  vm.runInContext('restoreDraft();renderPage();',context);assert.equal(vm.runInContext('character.level',context),2);assert.equal(vm.runInContext('character.pendingAdvancement',context),undefined);
  assert.equal(JSON.parse(context.getExportData()[0].data).info.level.value,2);
 }
});


function legacyRoundSixteen(c,version){
 const hero=JSON.parse(JSON.stringify(c)),foundation=JSON.stringify(Object.fromEntries(Object.keys(hero).filter(k=>['class','race','race_sub','background','abilities','abilityBonusChoices','proficiencyChoices','human_feature'].includes(k)||k.startsWith('creation_')||k.startsWith('race_')).sort().map(k=>[k,hero[k]])));
 if(hero.advancement){hero.advancement.version=version;for(const p of hero.advancement.entries){p.version=version;p.foundation=foundation;if(version===1)delete p.classId;}}
 if(hero.pendingAdvancement){hero.pendingAdvancement.version=version;hero.pendingAdvancement.foundation=foundation;if(version===1)delete hero.pendingAdvancement.classId;}
 return hero;
}
function storeRoundSixteen(dom,hero){dom.window.localStorage.setItem('dnd-character-draft-v2',JSON.stringify({version:3,edition:readConfig().meta.edition,pageId:'result',character:hero}));}

test('PR26 round sixteen: real final sheet retains ordinary and conditional pact attacks with native CHA export',async()=>{
 const H=require('./fixtures/characters'),c=H.advance(H.advance(H.create('warlock','hexblade',{creation_weapon:'greatclub',abilityMethod:'manual'})),null,{pact:'blade'}),dom=createDOM();storeRoundSixteen(dom,c);const context=loadScript(dom,readConfig());await flush();
 assert.equal(vm.runInContext('findFirstInvalidPage()',context),null);const e=H.extras(c),pact=e.attacks.find(a=>a.id==='greatclub-pact-hex'),ordinary=e.attacks.find(a=>a.id==='greatclub');assert.ok(dom.root.textContent.includes(pact.label));assert.ok(dom.root.textContent.includes(pact.notes[0]));assert.ok(dom.root.textContent.includes(ordinary.label));const data=JSON.parse(context.getExportData()[0].data);assert.ok(data.weaponsList.some(w=>w.name.value===pact.label&&w.ability==='cha'));assert.ok(data.weaponsList.some(w=>w.name.value===ordinary.label&&w.ability==='str'));
});

test('PR26 round sixteen: legacy v1/v2 drafts migrate once before editing and resume or export with original HP',async()=>{
 const H=require('./fixtures/characters'),second=H.advance(H.create('fighter',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt',abilityMethod:'manual'}));
 for(const version of [1,2])for(const pending of [true,false]){
  const c=pending?{...second,pendingAdvancement:{...H.fill(second,require('../levelup-rules').begin(second,H.context(second)),{subclass:'champion'}),step:3}}:H.advance(second,'champion'),old=legacyRoundSixteen(c,version),dom=createDOM();storeRoundSixteen(dom,old);let writes=0;const write=dom.window.localStorage.setItem;dom.window.localStorage.setItem=(...args)=>{writes++;return write(...args);};const context=loadScript(dom,readConfig());await flush();
  assert.equal(vm.runInContext('findFirstInvalidPage()',context),null);const stored=JSON.parse(dom.window.localStorage.getItem('dnd-character-draft-v2')).character;assert.ok(stored.advancement.entries.every(p=>p.foundation.startsWith('foundation:v2:')));assert.equal(writes,pending?1:2);assert.equal(vm.runInContext('getDerivedCharacter().hp',context),H.stats(c).hp);assert.equal(vm.runInContext('character.level',context),c.level);assert.equal(JSON.parse(context.getExportData()[0].data).info.level.value,c.level);
  if(pending){assert.deepEqual({...stored.pendingAdvancement,foundation:old.pendingAdvancement.foundation},old.pendingAdvancement);assert.ok(dom.root.textContent.includes('шаг '+(version===1?5:4)+' из 5'));vm.runInContext('character.pendingAdvancement.step=4;renderPage();',context);const commit=dom.root.querySelectorAll('button').find(b=>b.textContent==='Применить повышение');assert.ok(commit);assert.equal(commit.disabled,false);commit.click();assert.equal(vm.runInContext('character.level',context),3);}
  const committed=vm.runInContext('JSON.stringify(character.advancement)',context);vm.runInContext('restoreDraft();renderPage();',context);assert.equal(vm.runInContext('JSON.stringify(character.advancement)',context),committed);
  vm.runInContext("character.high_elf_cantrip='light';saveDraft('result');restoreDraft();renderPage();",context);assert.ok(vm.runInContext("LevelUpRules.inspect(character,getAdvancementContext()).errors.some(e=>e.field==='foundation')",context));assert.equal(vm.runInContext('getCreationExtras().effectiveLevel',context),1);assert.throws(()=>context.getExportData(),/выборы изменились/);
 }
});

test('PR26 round sixteen: migration persists before invalid creation routing and never blesses later edits',async()=>{
 const H=require('./fixtures/characters'),second=H.advance(H.create('fighter',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt',abilityMethod:'manual'})),c={...second,pendingAdvancement:{...H.fill(second,require('../levelup-rules').begin(second,H.context(second)),{subclass:'champion'}),step:2}};delete c.name;const old=legacyRoundSixteen(c,2),dom=createDOM();storeRoundSixteen(dom,old);const context=loadScript(dom,readConfig());await flush();
 assert.ok(vm.runInContext('currentPageIndex<config.pages.length',context));const saved=JSON.parse(dom.window.localStorage.getItem('dnd-character-draft-v2')).character;assert.ok(saved.advancement.entries[0].foundation.startsWith('foundation:v2:'));assert.equal(saved.pendingAdvancement.step,2);assert.equal(vm.runInContext('getDerivedCharacter().hp',context),H.stats(second).hp);
 vm.runInContext("character.high_elf_cantrip='light';saveDraft();restoreDraft();renderPage();",context);assert.equal(vm.runInContext('character.advancement.entries[0].foundation',context),saved.advancement.entries[0].foundation);assert.throws(()=>context.getExportData(),/выборы изменились/);
});

test('PR26 round sixteen: unavailable storage keeps migrated hero and partial or corrupt pending remains repairable',async()=>{
 const H=require('./fixtures/characters'),L=require('../levelup-rules'),second=H.advance(H.create('fighter',null,{abilityMethod:'manual'}));
 for(const mode of ['quota','roll','corrupt']){
  const c={...second,pendingAdvancement:{...H.fill(second,L.begin(second,H.context(second)),{subclass:'champion'}),step:1}},old=legacyRoundSixteen(c,2);if(mode==='roll')old.pendingAdvancement.hp={mode:'roll',value:null};if(mode==='corrupt')old.pendingAdvancement={version:2,foundation:'broken',choices:null};
  const dom=createDOM();storeRoundSixteen(dom,old);if(mode==='quota')dom.window.localStorage.setItem=()=>{throw new Error('QuotaExceededError');};const context=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('character.name',context),second.name);assert.equal(vm.runInContext('character.level',context),2);assert.equal(vm.runInContext('getDerivedCharacter().hp',context),H.stats(second).hp);assert.ok(vm.runInContext("character.advancement.entries[0].foundation.startsWith('foundation:v2:')",context));assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(LevelUpRules.inspect(character,getAdvancementContext()).errors)',context)),[]);
  if(mode==='roll'){assert.equal(vm.runInContext('character.pendingAdvancement.hp.value',context),null);vm.runInContext('character.pendingAdvancement.hp.value=5;character.pendingAdvancement.step=4;renderPage();',context);const commit=dom.root.querySelectorAll('button').find(b=>b.textContent==='Применить повышение');assert.equal(commit.disabled,false);commit.click();assert.equal(vm.runInContext('character.level',context),3);}
  else{vm.runInContext('cancelAdvancement();',context);assert.equal(vm.runInContext('character.pendingAdvancement',context),undefined);assert.equal(JSON.parse(context.getExportData()[0].data).info.level.value,2);}
 }
});

test('PR26 round sixteen: mismatching historical foundation and corrupt ledger stay blocked after reload',async()=>{
 const H=require('./fixtures/characters'),second=H.advance(H.create('fighter',null,{abilityMethod:'manual'}));
 for(const corrupt of [false,true]){const old=legacyRoundSixteen(second,2);if(corrupt)old.advancement={version:2,entries:null};else old.creation_style='defense';const dom=createDOM();storeRoundSixteen(dom,old);const context=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('character.level',context),2);assert.equal(vm.runInContext('getCreationExtras().effectiveLevel',context),1);assert.throws(()=>context.getExportData(),corrupt?/Повреждён/:/выборы изменились/);const before=vm.runInContext('JSON.stringify(character.advancement)',context);vm.runInContext("saveDraft('result');restoreDraft();renderPage();",context);assert.equal(vm.runInContext('JSON.stringify(character.advancement)',context),before);assert.throws(()=>context.getExportData(),corrupt?/Повреждён/:/выборы изменились/);}
});


test('PR26 round sixteen: first-level legacy pending signatures bind once and protect all new mechanical fields',async()=>{
 const H=require('./fixtures/characters'),L=require('../levelup-rules');
 for(const version of [1,2])for(const [field,overrides,value] of [['high_elf_cantrip',{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'},'light'],['astral_elf_astral_fire',{race:'astral-elf',astral_elf_astral_fire:'light',abilityBonusPlan:'two_one',abilityBonusChoices:{slot_0:'strength',slot_1:'dexterity'}},'sacred-flame'],['abilityBonusPlan',{race:'astral-elf',astral_elf_astral_fire:'light',abilityBonusPlan:'two_one',abilityBonusChoices:{slot_0:'strength',slot_1:'dexterity'}},'three_ones']]){
  const first=H.create('fighter',null,{abilityMethod:'manual',...overrides}),c={...first,pendingAdvancement:{...H.fill(first,L.begin(first,H.context(first))),step:1}},old=legacyRoundSixteen(c,version),dom=createDOM();storeRoundSixteen(dom,old);const context=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('character.level',context),1);assert.equal(vm.runInContext('character.advancement',context),undefined);const stored=JSON.parse(dom.window.localStorage.getItem('dnd-character-draft-v2')).character;assert.ok(stored.pendingAdvancement.foundation.startsWith('foundation:v2:'));assert.equal(stored.pendingAdvancement.step,1);assert.equal(JSON.parse(context.getExportData()[0].data).info.level.value,1);
  vm.runInContext(`character[${JSON.stringify(field)}]=${JSON.stringify(value)};saveDraft('result');restoreDraft();renderPage();`,context);assert.equal(vm.runInContext('character.pendingAdvancement.foundation',context),stored.pendingAdvancement.foundation);assert.ok(vm.runInContext("LevelUpRules.transition(character,character.pendingAdvancement,getAdvancementContext()).errors.some(e=>e.field==='foundation')",context));assert.throws(()=>context.getExportData(),/выборы изменились/);assert.equal(vm.runInContext('getCreationExtras().effectiveLevel',context),1);
  vm.runInContext(`character[${JSON.stringify(field)}]=${JSON.stringify(first[field])};cancelAdvancement();`,context);assert.equal(JSON.parse(context.getExportData()[0].data).info.level.value,1);
 }
});


test('PR26 round sixteen review fixes: improved summoned melee and ranged numbers reach the actual sheet and native export',async()=>{
 const H=require('./fixtures/characters');
 for(const weapon of ['greatclub','shortbow']){
  const second=H.advance(H.create('warlock','hexblade',{creation_weapon:weapon,abilityMethod:'manual',abilities:{strength:14,dexterity:14,constitution:14,intelligence:10,wisdom:10,charisma:16}})),c=H.advance(second,null,{pact:'blade',invocation_remove:'armor-of-shadows',invocation_add:'improved-pact-weapon'}),dom=createDOM();storeRoundSixteen(dom,c);const context=loadScript(dom,readConfig());await flush();
  const e=H.extras(c),pact=e.attacks.find(a=>a.id===weapon+'-pact-hex'),ordinary=e.attacks.find(a=>a.id===weapon);assert.ok(dom.root.textContent.includes(pact.label+': +6 к попаданию, '+pact.damage+' урона'));assert.ok(dom.root.textContent.includes(ordinary.label+': +4 к попаданию, '+ordinary.damage+' урона'));assert.equal(pact.damage,(weapon==='greatclub'?'1d8':'1d6')+'+4');const data=JSON.parse(context.getExportData()[0].data),native=data.weaponsList.find(w=>w.name.value===pact.label);assert.equal(native.dmg.value,pact.damage);assert.equal(native.ability,'cha');assert.ok(data.bonuses.some(b=>b.target==='weapon.'+native.id+'.attack'&&b.expr==='1'));
 }
});

test('PR26 round sixteen review fixes: failed initial migration shows unsaved across rerenders and recovers after save',async()=>{
 const H=require('./fixtures/characters'),L=require('../levelup-rules'),second=H.advance(H.create('fighter',null,{abilityMethod:'manual'})),c={...second,pendingAdvancement:{...H.fill(second,L.begin(second,H.context(second)),{subclass:'champion'}),step:1}},dom=createDOM();storeRoundSixteen(dom,legacyRoundSixteen(c,2));const write=dom.window.localStorage.setItem;dom.window.localStorage.setItem=()=>{throw new Error('QuotaExceededError');};const context=loadScript(dom,readConfig());await flush();
 const indicator=()=>dom.root.querySelector('.save-indicator');for(let render=0;render<3;render++){assert.ok(dom.root.querySelector('.advancement-sheet'));assert.equal(indicator().textContent,'Автосохранение недоступно');assert.equal(indicator().classList.contains('is-off'),true);assert.equal(vm.runInContext('character.level',context),2);assert.equal(vm.runInContext('getDerivedCharacter().hp',context),H.stats(second).hp);assert.equal(vm.runInContext('character.name',context),second.name);vm.runInContext('renderPage();',context);}
 dom.window.localStorage.setItem=write;vm.runInContext("saveDraft('result');",context);assert.equal(indicator().textContent,'Черновик сохранён');assert.equal(indicator().classList.contains('is-off'),false);vm.runInContext('renderPage();',context);assert.equal(indicator().textContent,'Черновик сохранён');assert.equal(indicator().classList.contains('is-off'),false);const saved=JSON.parse(dom.window.localStorage.getItem('dnd-character-draft-v2')).character;assert.equal(saved.level,2);assert.ok(saved.advancement.entries[0].foundation.startsWith('foundation:v2:'));assert.deepEqual(saved.pendingAdvancement.choices,c.pendingAdvancement.choices);
});

test('PR26 round seventeen: seven conditional descriptions reach the actual final sheet at legal levels',async()=>{
 const H=require('./fixtures/characters'),cases=[['wizard','graviturgy','Изменение плотности'],['wizard','enchantment','Гипнотический взгляд'],['wizard','transmutation','Малая алхимия'],['paladin','vengeance','Изгнание врага'],['barbarian','storm-herald','Аура бури'],['barbarian','berserker','Чувство опасности'],['bard','lore','Песнь отдыха (к6)']];
 for(const [cls,branch,name] of cases){
  const first=H.create(cls,null,{abilityMethod:'manual'}),second=H.advance(first,cls==='wizard'?branch:null),third=H.advance(second,cls==='wizard'?null:branch),positive=cls==='paladin'||name==='Аура бури'?[third]:[second,third];
  if(cls==='wizard'||cls==='bard')positive.push(H.enter(second,'fighter'));
  if(name==='Аура бури')for(const storm_environment of ['sea','tundra'])positive.push(H.advance(second,'storm-herald',{storm_environment}));
  const negative=[first];if(cls==='paladin'||name==='Аура бури')negative.push(second);
  if(!['Чувство опасности','Песнь отдыха (к6)'].includes(name))negative.push(H.advance(H.advance(H.create(cls,null,{abilityMethod:'manual'}),cls==='wizard'?'evocation':null),cls==='paladin'?'devotion':cls==='barbarian'?'zealot':null));
  for(const c of [...positive,...negative]){
   const before=JSON.stringify(c),dom=createDOM();storeRoundSixteen(dom,c);const context=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('findFirstInvalidPage()',context),null);
   const profiles=H.extras(c).features.filter(f=>f.name===name),data=JSON.parse(context.getExportData()[0].data);assert.equal(profiles.length,positive.includes(c)?1:0,name);
   if(profiles.length){assert.ok(dom.root.textContent.includes(profiles[0].description),name+': actual sheet');assert.ok(JSON.stringify(data.text.traits).includes(profiles[0].description),name+': native LSS');}
   else{assert.ok(!dom.root.textContent.includes(name));assert.ok(!JSON.stringify(data.text.traits).includes(name));}
   assert.equal(JSON.stringify(c),before);
  }
 }
});

test('PR26 round seventeen: Homunculus final sheet and native LSS preserve class scaling and hero ownership',async()=>{
 const H=require('./fixtures/characters'),infusions=['homunculus-servant','enhanced-weapon','repeating-shot','returning-weapon'],none=['enhanced-defense',...infusions.slice(1)],cases=[];
 for(const intelligence of [10,16,20]){
  const first=H.create('artificer',null,{abilityMethod:'manual',race:'gnome',race_sub:'rock-gnome',abilities:{strength:16,dexterity:16,constitution:16,intelligence:intelligence-2,wisdom:16,charisma:16}}),second=H.advance(first,null,{infusions}),plain=H.advance(first,null,{infusions:none});
  cases.push([second,plain,2,intelligence]);
  for(const subclass of ['alchemist','armorer','artillerist','battle-smith'])cases.push([H.advance(second,subclass),H.advance(plain,subclass),3,intelligence]);
  if(intelligence===16){
   cases.push([first,first,0,intelligence],[plain,plain,0,intelligence]);
   cases.push([H.advance(second,'alchemist',{infusion_remove:'homunculus-servant',infusion_add:'enhanced-defense'}),H.advance(plain,'alchemist'),0,intelligence]);
   cases.push([H.advance(plain,'alchemist',{infusion_remove:'enhanced-defense',infusion_add:'homunculus-servant'}),H.advance(plain,'alchemist'),3,intelligence]);
   cases.push([H.enter(second,'fighter'),H.enter(plain,'fighter'),2,intelligence],[H.enter(first,'fighter'),H.enter(first,'fighter'),0,intelligence]);
  }
 }
 const fighter=H.create('fighter',null,{abilityMethod:'manual'}),one=H.enter(fighter,'artificer');cases.push([one,one,0,16],[H.enter(one,'artificer',{infusions}),H.enter(one,'artificer',{infusions:none}),2,16]);
 for(const [c,plain,classLevel,intelligence] of cases){
  const before=JSON.stringify(c),dom=createDOM();storeRoundSixteen(dom,c);const context=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('findFirstInvalidPage()',context),null);
  const profile=H.extras(c).features.find(f=>f.name==='Слуга-гомункул'),data=JSON.parse(context.getExportData()[0].data),nativePlain=JSON.parse(require('../lss-export').buildLssExport(plain,{},H.stats(plain),H.extras(plain))[0].data);
  if(classLevel){
   assert.ok(profile);assert.equal(dom.root.textContent.split(profile.description).length-1,1);assert.ok(profile.description.includes('Хиты '+(1+Math.floor((intelligence-10)/2)+classLevel)+' ('));assert.ok(profile.description.includes('кости хитов '+classLevel+'к4'));assert.ok(profile.description.includes('бонус атаки +'+(2+Math.floor((intelligence-10)/2))));
   for(const line of profile.description.split('\n'))assert.ok(JSON.stringify(data.text.traits).includes(line));
  }else{assert.equal(profile,undefined);assert.ok(!dom.root.textContent.includes('Слуга-гомункул'));assert.ok(!JSON.stringify(data.text.traits).includes('Слуга-гомункул'));}
  assert.deepEqual(data.weaponsList,nativePlain.weaponsList);assert.deepEqual(data.saves,nativePlain.saves);assert.deepEqual(data.vitality,nativePlain.vitality);assert.ok(!JSON.stringify(data.text.attacks).includes('Силовой удар'));
  assert.equal(vm.runInContext('getDerivedCharacter().hp',context),H.stats(plain).hp);assert.equal(vm.runInContext('getDerivedCharacter().ac',context),H.stats(plain).ac);assert.equal(vm.runInContext('getDerivedCharacter().speed',context),H.stats(plain).speed);assert.equal(JSON.stringify(c),before);
 }
});

test('PR26 round eighteen: actual sheet and native LSS retain one-handed pact and ordinary attacks',async()=>{
 const H=require('./fixtures/characters');
 for(const patron of ['hexblade','fiend'])for(const creation_weapon of ['dagger','handaxe','quarterstaff','greatclub','shortbow','light-crossbow']){
  const second=H.advance(H.create('warlock',patron,{creation_weapon,abilityMethod:'manual',abilities:{strength:14,dexterity:14,constitution:14,intelligence:14,wisdom:14,charisma:16}})),plain=H.advance(second,null,{pact:'blade'}),c=H.advance(second,null,{pact:'blade',invocation_remove:'armor-of-shadows',invocation_add:'improved-pact-weapon'}),before=JSON.stringify(c),dom=createDOM();storeRoundSixteen(dom,c);const context=loadScript(dom,readConfig());await flush();
  assert.equal(vm.runInContext('findFirstInvalidPage()',context),null);const e=H.extras(c),data=JSON.parse(context.getExportData()[0].data),pact=e.attacks.find(a=>a.id===creation_weapon+(patron==='hexblade'?'-pact-hex':'-pact')),ordinary=e.attacks.find(a=>a.id===creation_weapon);assert.ok(pact,patron+': '+creation_weapon);
  assert.deepEqual(ordinary,H.extras(plain).attacks.find(a=>a.id===creation_weapon));assert.ok(dom.root.textContent.includes(pact.label+': +'+pact.attackBonus+' к попаданию, '+pact.damage+' урона'));assert.ok(dom.root.textContent.includes(pact.notes[0]));assert.ok(dom.root.textContent.includes(ordinary.label+': +'+ordinary.attackBonus+' к попаданию, '+ordinary.damage+' урона'));
  const native=data.weaponsList.filter(w=>w.name.value===pact.label);assert.equal(native.length,1);assert.equal(native[0].ability,patron==='hexblade'?'cha':pact.ability==='strength'?'str':'dex');assert.equal(native[0].dmg.value,pact.damage);assert.equal(native[0].isProf,true);assert.ok(data.bonuses.some(b=>b.target==='weapon.'+native[0].id+'.attack'&&b.expr==='1'));
  if(creation_weapon==='dagger'&&patron==='hexblade'){assert.equal(pact.attackBonus,6);assert.equal(pact.damage,'1d4+4');const hex=e.attacks.find(a=>a.id==='dagger-hex');assert.ok(dom.root.textContent.includes(hex.label));assert.deepEqual(hex,H.extras(plain).attacks.find(a=>a.id===hex.id));}
  assert.equal(JSON.stringify(c),before);assert.equal(vm.runInContext('JSON.stringify(character.advancement)',context),JSON.stringify(c.advancement));
 }
});

test('PR26 round eighteen: actual sheet and native LSS preserve class-sensitive warlock summaries once',async()=>{
 const H=require('./fixtures/characters');
 for(const [patron,name] of [['hexblade','Проклятие ведьмовского клинка'],['genie','Гнев гения'],['undead','Облик ужаса']])for(const genie of patron==='genie'?['dao','djinni','efreeti','marid']:['dao']){
  const first=H.create('warlock',patron,{abilityMethod:'manual',...(patron==='genie'?{creation_genie:genie}:{})}),second=H.advance(first),entry=H.enter(H.create('fighter',null,{abilityMethod:'manual'}),'warlock',{'warlock:creation_patron':patron,...(patron==='genie'?{'warlock:creation_genie':genie}:{})});
  for(const [c,level] of [[first,1],[second,2],[H.advance(second,null,{pact:'blade'}),3],[H.enter(first,'fighter'),1],[H.enter(second,'fighter'),2],[entry,1],[H.enter(entry,'warlock'),2]]){
   const before=JSON.stringify(c),dom=createDOM();storeRoundSixteen(dom,c);const context=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('findFirstInvalidPage()',context),null);
   const profiles=H.extras(c).features.filter(f=>f.name===name),data=JSON.parse(context.getExportData()[0].data);assert.equal(profiles.length,1);const text=profiles[0].description;assert.ok(dom.root.textContent.includes(text));assert.equal(JSON.stringify(data.text.traits).split(text).length-1,1);
   if(patron==='hexblade')assert.ok(text.includes('восстановите '+(level+H.stats(c).modifiers.charisma)+' хит'));
   if(patron==='genie')assert.ok(text.includes({dao:'дробящий',djinni:'звуком',efreeti:'огнём',marid:'холодом'}[genie]));
   if(patron==='undead'){assert.ok(text.includes('1к10 + '+level+' временных хитов'));assert.ok(text.includes('Мудрости Сл '+(10+H.stats(c).modifiers.charisma)));}
   assert.equal(JSON.stringify(c),before);assert.equal(vm.runInContext('JSON.stringify(character.advancement)',context),JSON.stringify(c.advancement));
  }
 }
 const c=H.create('warlock','fiend',{abilityMethod:'manual'}),dom=createDOM();storeRoundSixteen(dom,c);const context=loadScript(dom,readConfig());await flush();const text=dom.root.textContent+JSON.stringify(JSON.parse(context.getExportData()[0].data).text.traits);for(const name of ['Проклятие ведьмовского клинка','Гнев гения','Облик ужаса'])assert.ok(!text.includes(name));
});


test('PR26 round eighteen: legal thrown-style Hex Warrior remains on actual sheet and native LSS',async()=>{
 const H=require('./fixtures/characters'),first=H.create('fighter',null,{creation_style:'thrown-weapon-fighting',creation_secondary:'two-handaxes',abilityMethod:'manual'}),c=H.enter(first,'warlock',{'warlock:creation_patron':'hexblade'}),dom=createDOM();storeRoundSixteen(dom,c);const context=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('findFirstInvalidPage()',context),null);
 const hex=H.extras(c).attacks.find(a=>a.id==='handaxe-thrown-hex');assert.ok(hex);assert.equal(hex.damage,'1d6+5');assert.ok(dom.root.textContent.includes(hex.label+': +5 к попаданию, 1d6+5 урона'));const native=JSON.parse(context.getExportData()[0].data).weaponsList.find(w=>w.name.value===hex.label);assert.equal(native.ability,'cha');assert.equal(native.dmg.value,'1d6+5');
});


test('PR26 round nineteen: uncarried pact forms and barbarian proficiencies reach actual sheet and LSS',async()=>{
 const H=require('./fixtures/characters');
 for(const patron of ['fiend','hexblade'])for(const improved of [false,true]){
  const second=H.advance(H.create('warlock',patron,{abilityMethod:'manual'})),c=H.advance(second,null,{pact:'blade',...(improved?{invocation_remove:'armor-of-shadows',invocation_add:'improved-pact-weapon'}:{})}),before=JSON.stringify(c),dom=createDOM();storeRoundSixteen(dom,c);const ctx=loadScript(dom,readConfig());await flush();
  assert.equal(vm.runInContext('findFirstInvalidPage()',ctx),null);const e=H.extras(c),data=JSON.parse(ctx.getExportData()[0].data);assert.ok(!H.context(c).baseExtras.attacks.some(a=>a.id==='greatsword'||a.id==='longbow'));
  for(const id of ['greatsword','rapier','quarterstaff','longsword','shortbow','longbow','light-crossbow','heavy-crossbow']){
   const pact=e.attacks.find(a=>a.id===id+(patron==='hexblade'?'-pact-hex':'-pact')),present=['greatsword','rapier','quarterstaff','longsword'].includes(id)||improved;assert.equal(!!pact,present);
   if(present){assert.ok(dom.root.textContent.includes(pact.label+': +'+pact.attackBonus+' к попаданию, '+pact.damage+' урона'));assert.ok(dom.root.textContent.includes(pact.notes[0]));const native=data.weaponsList.find(w=>w.name.value===pact.label);assert.equal(native.dmg.value,pact.damage);assert.equal(native.isProf,true);if(['quarterstaff','longsword'].includes(id)){const note='Двумя руками: '+(id==='quarterstaff'?'1d8':'1d10')+'.';assert.ok(dom.root.textContent.includes(pact.label+': +'+pact.attackBonus+' к попаданию, '+pact.damage+' урона. '+pact.notes.join(' ')));assert.ok(native.notes.value.includes(note));}}
  }
  assert.equal(JSON.stringify(c),before);
 }
 for(const cls of ['wizard','barbarian']){
  const first=H.create(cls,null,{abilityMethod:'manual'}),c=H.enter(first,cls==='wizard'?'barbarian':'wizard'),dom=createDOM();storeRoundSixteen(dom,c);const ctx=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('findFirstInvalidPage()',ctx),null);
  const prof=JSON.stringify(JSON.parse(ctx.getExportData()[0].data).text.prof);assert.match(prof,/Щиты/);assert.ok(dom.root.textContent.includes('Щиты'));
  for(const name of ['Лёгкие доспехи','Средние доспехи']){assert.equal(prof.includes(name),cls==='barbarian');assert.equal(dom.root.textContent.includes(name),cls==='barbarian');}
 }
 const c=H.advance(H.advance(H.create('barbarian',null,{abilityMethod:'manual'})),'wild-magic'),dom=createDOM();storeRoundSixteen(dom,c);const ctx=loadScript(dom,readConfig());await flush();
 const rule='Вам — 1к12 временных хитов.';assert.ok(dom.root.textContent.includes(rule));assert.ok(JSON.stringify(JSON.parse(ctx.getExportData()[0].data).text.traits).includes(rule));
});


test('PR26 round twenty: source-verified feature conditions reach actual sheet and export',async()=>{
 const H=require('./fixtures/characters'),cases=[['barbarian','berserker','Ярость','не атаковали враждебное существо и не получали урон'],['warlock','undying','Среди мёртвых','24 часа'],['druid','spores','Симбиотическая сущность','Преимущества действуют 10 минут'],['wizard','divination','Предзнаменование','до броска'],['rogue','soulknife','Психический шёпот','1 мили']];
 for(const [cls,branch,name,condition] of cases){const first=H.create(cls,cls==='warlock'?branch:null,{abilityMethod:'manual'}),second=H.advance(first,['druid','wizard'].includes(cls)?branch:null),third=H.advance(second,['barbarian','rogue'].includes(cls)?branch:null),heroes=[third];if(cls!=='rogue')heroes.push(second,H.enter(second,'fighter'));
  for(const c of heroes){const before=JSON.stringify(c),dom=createDOM();storeRoundSixteen(dom,c);const ctx=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('findFirstInvalidPage()',ctx),null);const f=H.extras(c).features.find(f=>f.name===name);assert.ok(f);assert.ok(f.description.includes(condition));assert.ok(dom.root.textContent.includes(f.description));assert.equal(JSON.stringify(JSON.parse(ctx.getExportData()[0].data).text.traits).split(f.description).length-1,1);assert.equal(JSON.stringify(c),before);}
 }
 const c=H.advance(H.create('paladin',null,{abilityMethod:'manual',creation_weapon:'longbow',creation_shield_weapon:'greatsword'}),null,{style:'great-weapon-fighting'}),dom=createDOM();storeRoundSixteen(dom,c);const ctx=loadScript(dom,readConfig());await flush();const data=JSON.parse(ctx.getExportData()[0].data),attacks=H.extras(c).attacks;
 for(const id of ['longbow','greatsword']){const attack=attacks.find(a=>a.id===id),native=data.weaponsList.find(w=>w.name.value===attack.label);assert.ok(dom.root.textContent.includes(attack.label+': +'+attack.attackBonus+' к попаданию, '+attack.damage+' урона'+(attack.notes.length?'. '+attack.notes.join(' '):'')));assert.equal(/переброс/.test(native.notes.value),id==='greatsword');}
});


test('PR26 round twenty-one: complete subclass timing and targets appear on actual saved sheet',async()=>{
 const H=require('./fixtures/characters');
 for(const [cls,branch,name,condition] of [['barbarian','ancestral-guardian','Защитники предков','До начала вашего следующего хода'],['bard','glamour','Мантия вдохновения','модификатора Харизмы'],['bard','whispers','Психические клинки','один раз за раунд'],['warlock','fathomless','Щупальце глубин','до 30 футов'],['cleric','order','Голос власти','расходуя ячейку'],['paladin','redemption','Обличение жестокости','атака заклинанием']]){
  const first=H.create(cls,['warlock','cleric'].includes(cls)?branch:null,{abilityMethod:'manual'}),second=H.advance(first),third=H.advance(second,branch),heroes=[third];if(['warlock','cleric'].includes(cls))heroes.push(first,H.enter(second,'fighter'));
  for(const c of heroes){const before=JSON.stringify(c),dom=createDOM();storeRoundSixteen(dom,c);const ctx=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('findFirstInvalidPage()',ctx),null);const f=H.extras(c).features.find(f=>f.name===name);assert.ok(f.description.includes(condition));const section=dom.root.querySelectorAll('.result-section').find(node=>node.children[0]?.textContent==='Особенности и примечания');assert.ok(section);assert.equal(section.querySelectorAll('li').filter(node=>node.textContent===name+': '+f.description).length,1);assert.equal(JSON.stringify(JSON.parse(ctx.getExportData()[0].data).text.traits).split(f.description).length-1,1);assert.equal(JSON.stringify(c),before);}
 }
});


test('PR26 round twenty-two: corrected limits and conditional recovery reach actual sheet and export',async()=>{
 const H=require('./fixtures/characters');
 for(const [cls,branch,name,condition] of [['bard','glamour','Завораживающее представление','смотревших и слушавших всё выступление'],['bard','whispers','Слова ужаса','наедине с гуманоидом'],['cleric','life','Божественный канал: Сохранение жизни','Нежить и конструкты'],['cleric','trickery','Божественный канал: Двуличие','вы и двойник оба'],['sorcerer','shadow','Сила могилы','Только успешный спасбросок'],['sorcerer','aberrant-mind','Телепатическая речь','языке, который знает другой'],['paladin','watchers','Изгнание экстрапланарных','1 минуту или до получения урона']]){
  const first=H.create(cls,['cleric','sorcerer'].includes(cls)?branch:null,{abilityMethod:'manual'}),second=H.advance(first),third=H.advance(second,['bard','paladin'].includes(cls)?branch:null),heroes=[third];if(cls==='cleric')heroes.push(second,H.enter(second,'fighter'));if(cls==='sorcerer')heroes.push(first,H.enter(first,'fighter'));
  for(const c of heroes){const before=JSON.stringify(c),dom=createDOM();storeRoundSixteen(dom,c);const ctx=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('findFirstInvalidPage()',ctx),null);const e=H.extras(c),f=e.features.find(f=>f.name===name);assert.ok(f.description.includes(condition));const section=dom.root.querySelectorAll('.result-section').find(node=>node.children[0]?.textContent==='Особенности и примечания');assert.equal(section.querySelectorAll('li').filter(node=>node.textContent===name+': '+f.description).length,1);const native=JSON.stringify(JSON.parse(ctx.getExportData()[0].data).text.traits);assert.equal(native.split(f.description).length-1,1);
   if(branch==='shadow'){const pool=e.resources.find(r=>r.id.endsWith('strength-of-the-grave'));assert.ok(dom.root.textContent.includes(pool.recovery));assert.ok(native.includes(pool.recovery));
    vm.runInContext("const left=document.createElement('div'),right=document.createElement('aside');renderMechanicalSummary(left);renderCharacterSheet(right,getStepStates());round22Sheets={left:left.textContent,right:right.textContent};",ctx);const sheets=JSON.parse(vm.runInContext('JSON.stringify(round22Sheets)',ctx));for(const text of Object.values(sheets))assert.ok(text.includes(pool.recovery));
   }
   assert.equal(JSON.stringify(c),before);
  }
 }
});


test('PR26 round twenty-three: complete Arcana, Scribes and all primal profiles reach persisted sheet and LSS once',async()=>{
 const H=require('./fixtures/characters'),heroes=[];
 for(const [cls,branch,name] of [['cleric','arcana','Божественный канал: Магическое ограждение'],['wizard','scribes','Пробуждённая книга заклинаний']]){const second=H.advance(H.create(cls,cls==='cleric'?branch:null,{abilityMethod:'manual'}),cls==='wizard'?branch:null);for(const c of [second,H.advance(second),H.enter(second,'fighter')])heroes.push([c,name]);}
 for(const companion of ['beast-of-land','beast-of-sea','beast-of-sky'])heroes.push([H.advance(H.advance(H.create('ranger',null,{abilityMethod:'manual'})),'beast-master',{companion_rules:'primal-companion',companion}),'Первобытный спутник']);
 for(const [c,name] of heroes){const before=JSON.stringify(c),dom=createDOM();storeRoundSixteen(dom,c);const ctx=loadScript(dom,readConfig());await flush();assert.equal(vm.runInContext('findFirstInvalidPage()',ctx),null);const f=H.extras(c).features.find(f=>f.name===name),section=dom.root.querySelectorAll('.result-section').find(node=>node.children[0]?.textContent==='Особенности и примечания');assert.equal(section.querySelectorAll('li').filter(node=>node.textContent===name+': '+f.description).length,1);assert.equal(JSON.stringify(JSON.parse(ctx.getExportData()[0].data).text.traits).split(f.description).length-1,1);assert.equal(vm.runInContext('JSON.stringify(character)',ctx),before);}
});

test('PR26 round twenty-three: maneuver picker backtracking and secondary fighter cancellation preserve saved foundation',async()=>{
 const H=require('./fixtures/characters'),L=require('../levelup-rules'),c=H.create('wizard',null,{abilityMethod:'manual',abilityBonusChoices:{slot_0:'strength',slot_1:'constitution'},human_feature:'human_alt',creation_feat:'martial-adept',creation_maneuvers:['precision','rally']}),before=JSON.stringify(c),dom=createDOM();storeRoundSixteen(dom,c);const ctx=loadScript(dom,readConfig());await flush();
 vm.runInContext("currentPageIndex=config.pages.length;startAdvancement();character.pendingAdvancement=LevelUpRules.selectClass(character,character.pendingAdvancement,'fighter',getAdvancementContext());character.pendingAdvancement.choices['fighter:creation_style']='superior-technique';character.pendingAdvancement.step=2;renderPage();",ctx);
 const options=()=>JSON.parse(vm.runInContext("JSON.stringify(LevelUpRules.getChoices(character,character.pendingAdvancement,getAdvancementContext()).find(g=>g.id==='fighter:creation_superior_maneuver')?.options.map(o=>o.value)||null)",ctx));
 assert.ok(!options().some(id=>['precision-attack','rally'].includes(id)));const field=dom.document.getElementById('field-fighter:creation_superior_maneuver');assert.ok(field);assert.ok(!field.querySelectorAll('button').some(b=>b.getAttribute('data-focus-key')==='fighter:creation_superior_maneuver:precision-attack'));
 vm.runInContext("character.pendingAdvancement.choices['fighter:creation_style']='defense';renderPage();",ctx);assert.equal(options(),null);
 vm.runInContext("character.pendingAdvancement.choices['fighter:creation_style']='superior-technique';renderPage();",ctx);assert.ok(!options().includes('precision-attack'));
 vm.runInContext("character.pendingAdvancement.choices['fighter:creation_superior_maneuver']='precision-attack';renderPage();",ctx);
 const staleClear=dom.root.querySelectorAll('button').find(b=>b.getAttribute('data-focus-key')==='clear:fighter:creation_superior_maneuver:precision-attack');assert.ok(staleClear);staleClear.click();assert.equal(vm.runInContext("character.pendingAdvancement.choices['fighter:creation_superior_maneuver']",ctx),'');
 dom.root.querySelectorAll('button').find(b=>b.getAttribute('data-focus-key')==='fighter:creation_superior_maneuver:parry').click();assert.equal(vm.runInContext("character.pendingAdvancement.choices['fighter:creation_superior_maneuver']",ctx),'parry');
 dom.root.querySelectorAll('button').find(b=>b.textContent==='Отменить повышение').click();assert.equal(vm.runInContext('JSON.stringify(character)',ctx),before);
 const draft=H.fill(c,L.selectClass(c,L.begin(c,H.context(c)),'fighter',H.context(c)),{'fighter:creation_style':'superior-technique','fighter:creation_superior_maneuver':'parry'});
 vm.runInContext(`character.pendingAdvancement=${JSON.stringify({...draft,step:4})};renderPage();`,ctx);dom.root.querySelectorAll('button').find(b=>b.textContent==='Применить повышение').click();
 vm.runInContext("saveDraft('result');restoreDraft();renderPage();",ctx);assert.equal(vm.runInContext('character.level',ctx),2);assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(character.creation_maneuvers)',ctx)),['precision','rally']);assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(LevelUpRules.inspect(character,getAdvancementContext()).errors)',ctx)),[]);assert.equal(vm.runInContext('findFirstInvalidPage()',ctx),null);assert.doesNotThrow(()=>ctx.getExportData());
});


test('PR26 round twenty-three: combined creation picker recomputes distinct choices after style backtracking',async()=>{
 const H=require('./fixtures/characters'),c=H.create('fighter',null,{abilityMethod:'manual',abilityBonusChoices:{slot_0:'strength',slot_1:'constitution'},human_feature:'human_alt',creation_feat:'martial-adept',creation_maneuvers:['precision','rally'],creation_style:'superior-technique',creation_superior_maneuver:'parry'}),dom=createDOM();storeRoundSixteen(dom,c);const ctx=loadScript(dom,readConfig());await flush();
 assert.equal(vm.runInContext('findFirstInvalidPage()',ctx),null);
 vm.runInContext("currentPageIndex=config.pages.findIndex(p=>p.id==='mechanics');renderPage();",ctx);
 const card=(id,value)=>dom.root.querySelectorAll('button').find(b=>b.getAttribute('data-choice-option')===id+':'+value);
 assert.equal(card('creation_superior_maneuver','precision-attack'),undefined);assert.equal(card('creation_maneuvers','parry'),undefined);
 assert.ok(card('creation_superior_maneuver','ambush'));card('creation_superior_maneuver','ambush').click();assert.ok(card('creation_maneuvers','parry'));
 card('creation_style','defense').click();assert.equal(card('creation_superior_maneuver','ambush'),undefined);assert.ok(card('creation_maneuvers','parry'));
 card('creation_style','superior-technique').click();assert.equal(card('creation_superior_maneuver','precision-attack'),undefined);card('creation_superior_maneuver','parry').click();assert.equal(card('creation_maneuvers','parry'),undefined);
 vm.runInContext("currentPageIndex=config.pages.length;saveDraft('result');restoreDraft();renderPage();",ctx);assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(character.creation_maneuvers)',ctx)),['precision','rally']);assert.equal(vm.runInContext('findFirstInvalidPage()',ctx),null);assert.doesNotThrow(()=>ctx.getExportData());
});
