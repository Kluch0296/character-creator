const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const R = require('../rules.js');
const O = require('../creation-options.js');
const L = require('../levelup-rules.js');
const X = require('../lss-export.js');
const I = require('../lss-import.js');
const F = require('./fixtures/characters.js');
const config = require('../config.json');

const deps = {config, rules: R, creation: O, levelup: L, spellIds: X.SPELL_IDS};
const clone = x => JSON.parse(JSON.stringify(x));
const standard = {strength: 15, dexterity: 14, constitution: 13, intelligence: 12, wisdom: 10, charisma: 8};
// Multiclass gates (bard, sorcerer, warlock: CHA 13; cleric: WIS 13; paladin: STR and CHA 13): final scores above 13.
const gated = {strength: 13, dexterity: 12, constitution: 14, intelligence: 10, wisdom: 13, charisma: 15};
const fixture = name => fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8');
const sets = list => [...new Set(list || [])].sort();
const values = v => Array.isArray(v) ? v : v === undefined || v === null ? [] : [v];

// The labels the UI passes to buildLssExport (script.js getExportData), for a character at level 1 or 2.
function exportOf(c) {
  const ctx = I.advancementContext(c, deps);
  const extras = L.derive(c, ctx, ctx.baseExtras);
  const stats = R.derivedStats(c, extras);
  const page = id => config.pages.find(p => p.id === id);
  const race = page('race').options.find(o => o.value === c.race);
  const sub = race?.suboptions?.find(o => o.value === c.race_sub);
  const subField = O.getChoices(c, ctx).find(g => ['creation_domain', 'creation_origin', 'creation_patron'].includes(g.id));
  const labels = {
    class: page('class').elements[0].options.find(o => o.value === c.class)?.label,
    race: race?.label, subrace: sub?.label,
    background: page('background').options.find(o => o.value === c.background)?.label,
    alignment: page('general').elements.find(e => e.id === 'alignment').options.find(o => o.value === c.alignment)?.label,
    subclass: extras.subclass?.label || subField?.options.find(o => o.value === c[subField.id])?.label
  };
  const wrapper = clone(X.buildLssExport(c, labels, stats, extras)[0]);
  wrapper.disabledBlocks._id = '6acff6dd4ee5a75e133287c9';
  return {hpMax: stats.hp, text: JSON.stringify([wrapper])};
}
const entryOf = text => {
  const r = I.readLssFile(text);
  assert.deepEqual(r.errors, []);
  return r.entries[0];
};
// Creation fill like the fixture create(): only missing or invalid groups and proficiency slots get a value.
function completeCreation(c) {
  for (let pass = 0; pass < 10; pass++) {
    for (const g of O.getChoices(c, F.context(c))) {
      const sel = values(c[g.id]);
      if (sel.length === g.count && sel.every(id => g.options.some(o => o.value === id))) continue;
      c[g.id] = g.count === 1 ? g.options[0]?.value : g.options.slice(0, g.count).map(o => o.value);
    }
    const prof = R.resolveProficiencies(c, O.derive(c, F.context(c)));
    for (const slot of prof.slots) {
      const chosen = c.proficiencyChoices[slot.id];
      if (chosen && slot.options.includes(chosen) && !prof.errors.some(e => e.id === slot.id)) continue;
      const used = [...prof.skills, ...prof.tools, ...prof.languages];
      c.proficiencyChoices[slot.id] = slot.options.find(id => slot.expertise ? !prof.expertise.includes(id) : !used.includes(id));
    }
  }
  return c;
}
// A level-1 character whose spell picks are the LAST options of their groups (not the fixture's first options).
function withLastPicks(cls, branch, extra = {}) {
  const base = F.create(cls, branch, {abilities: standard, abilityMethod: 'standard', ...extra});
  const picks = {};
  for (const g of O.getChoices(base, F.context(base))) {
    // Prepared lists follow the spellbook and the domain cantrips exclude class cantrips: both are left to the fixture's fill.
    if (g.section !== 'spells' || /prepared|domain_cantrips/.test(g.id)) continue;
    picks[g.id] = g.count === 1 ? g.options.at(-1).value : g.options.slice(-g.count).map(o => o.value);
  }
  return F.create(cls, branch, {abilities: standard, abilityMethod: 'standard', ...extra, ...picks});
}
// Level-up with an explicit hit-point result (average when omitted) and optional subclass.
function levelUp(c, {branch, hp, choices = {}} = {}) {
  const ctx = F.context(c);
  const p = L.begin(c, ctx);
  if (hp) p.hp = hp;
  const pinned = {...choices};
  if (branch && L.subclasses(c.class).find(x => x.level === p.to)) pinned.subclass = branch;
  F.fill(c, p, pinned);
  assert.deepEqual(L.transition(c, p, ctx).errors, []);
  return L.commit(c, p, ctx);
}
const stateOf = c => {
  const s = L.inspect(c, I.advancementContext(c, deps)).state;
  return {subclass: s.subclass || null, known: sets(s.known), book: sets(s.book), prepared: sets(s.prepared), cantrips: sets(s.cantrips), invocations: sets(s.invocations)};
};
const hpOf = c => R.derivedStats(c, L.derive(c, I.advancementContext(c, deps), I.advancementContext(c, deps).baseExtras)).hp;
// A bare sheet (no proficiencies, spells or equipment) built from fields, for the rules-only cases.
function bareEntry(fields, sheetExtra = {}) {
  const sheet = {
    name: {value: ''},
    info: Object.fromEntries(Object.entries({charClass: 'Воин', level: 1, race: 'Человек', background: 'Солдат', alignment: 'Нейтральное', ...fields})
      .map(([k, v]) => [k, {value: v}])),
    stats: {str: {score: 15}, dex: {score: 14}, con: {score: 13}, int: {score: 12}, wis: {score: 10}, cha: {score: 8}},
    saves: {str: {isProf: true}, con: {isProf: true}},
    ...sheetExtra
  };
  const wrapper = {jsonType: 'character', version: '2', edition: '2014', sheetEdition: '2014', spells: {}, data: JSON.stringify(sheet)};
  return entryOf(JSON.stringify(wrapper));
}
const reportOf = (out, field) => out.report.find(r => r.field === field);

test('barbarian sheet from LSS: race, subrace, background, alignment, standard array and skills', () => {
  const out = I.recognize(entryOf(fixture('lss-native-barbarian-1.json')), deps);
  const c = out.character;
  assert.equal(c.class, 'barbarian');
  assert.equal(c.race, 'halfling');
  assert.equal(c.race_sub, 'stocky');
  assert.equal(c.background, 'outlander');
  assert.equal(c.alignment, 'chaotic-good');
  assert.equal(c.abilityMethod, 'standard');
  assert.deepEqual(c.abilities, {strength: 14, dexterity: 12, constitution: 15, intelligence: 8, wisdom: 13, charisma: 10});
  assert.deepEqual(R.validateAbilities(c), []);
  assert.equal(reportOf(out, 'race').status, 'check');
  assert.match(reportOf(out, 'race').value, /Коренастый/);
  assert.equal(reportOf(out, 'class').status, 'recognized');
  assert.equal(reportOf(out, 'name').status, 'missing');
  assert.equal(c.name, undefined);
  const skillChoices = Object.entries(c.proficiencyChoices).filter(([id]) => id.startsWith('class:barbarian')).map(([, v]) => v).sort();
  assert.deepEqual(skillChoices, ['nature', 'perception']);
  assert.equal(out.report.some(r => r.field === 'equipment' && r.status === 'missing'), true);
  assert.equal(c.lssImport.version, 1);
  assert.equal(c.lssImport.sourceLevel, 1);
  assert.equal(c.lssImport.restore, null);
  assert.equal(c.lssImport.warnings[0].code, 'edition_mismatch');
  assert.match(c.lssImport.original.data.info.charClass.value, /Варвар/);
});

test('druid sheet from LSS: dragonborn with copper ancestry, point buy and prepared spells', () => {
  const out = I.recognize(entryOf(fixture('lss-native-druid-1.json')), deps);
  const c = out.character;
  // Recognized values before any completion: only the fields the sheet proves.
  assert.deepEqual({
    class: c.class, race: c.race, background: c.background, alignment: c.alignment, ancestry: c.creation_dragonborn_ancestry,
    method: c.abilityMethod, abilities: c.abilities, cantrips: sets(c.creation_cantrips),
    skills: sets(Object.entries(c.proficiencyChoices).filter(([id]) => id.startsWith('class:')).map(([, v]) => v)),
    language: c.proficiencyChoices['background:hermit:0:0']
  }, {
    class: 'druid', race: 'dragonborn', background: 'hermit', alignment: 'lawful-good', ancestry: 'copper', method: 'point_buy',
    abilities: {strength: 14, dexterity: 11, constitution: 14, intelligence: 8, wisdom: 15, charisma: 9},
    cantrips: ['guidance', 'produce-flame'],
    // Class skills in either slot order; the hermit's language choice is the only background choice.
    skills: ['nature', 'perception'],
    language: 'undercommon'
  });
  assert.deepEqual(R.validateAbilities(c), []);
  // Prepared: only valid druid options are taken, never more than the group count; healing-word is one of them.
  assert.ok(values(c.creation_prepared).includes('healing-word'));
  assert.ok(values(c.creation_prepared).length <= 3);
  assert.equal(reportOf(out, 'creation_dragonborn_ancestry').status, 'check');
  assert.equal(c.lssImport.restore, null);
  // Original sheet, untouched: the recognized draft refers to copies only.
  assert.equal(c.lssImport.original.data.info.race.value, 'Драконорожд. (Медн.)');
});

test('old-style sheet with string numbers, legacy abilities key, parenthetical background and bare subrace', () => {
  const sheet = {
    name: {value: 'Старый Лист'},
    info: {charClass: {value: 'Бард'}, charSubclass: {value: ''}, level: {value: '1'}, race: {value: 'Высший эльф'}, background: {value: 'Моряк (кок)'}, alignment: {value: 'НД'}},
    stats: {str: {score: '10'}, dex: {score: '16'}, con: {score: '14'}, int: {score: '12'}, wis: {score: '9'}, cha: {score: '13'}},
    saves: {dex: {isProf: true}, cha: {isProf: true}},
    abilities: {athletics: {isProf: false}, acrobatics: {isProf: true}},
    vitality: {'hp-max': {value: '9'}, ac: {value: '14'}},
    text: {prof: {value: {data: '<p><strong>Языки</strong>: общий, эльфийский</p>'}}, background: {value: 'Плохой текст'}},
    subInfo: {age: {value: '120'}}
  };
  const wrapper = {tags: [], disabledBlocks: {}, edition: '2014', sheetEdition: '2014', spells: {}, jsonType: 'character', version: '2', data: JSON.stringify(sheet)};
  const out = I.recognize(entryOf(JSON.stringify(wrapper)), deps);
  const c = out.character;
  assert.equal(c.class, 'bard');
  assert.equal(c.race, 'elf');
  assert.equal(c.race_sub, 'high_elf');
  assert.equal(c.background, 'sailor');
  assert.equal(c.alignment, 'neutral-good');
  assert.equal(c.age, '120');
  assert.equal(c.concept, 'Плохой текст');
  assert.equal(reportOf(out, 'background').status, 'check');
  assert.equal(reportOf(out, 'race').status, 'check');
  // High Elf: +2 DEX and +1 INT are fixed, so the base is 10/14/14/11/9/13, exactly a point-buy build (25 points).
  assert.equal(c.abilityMethod, 'point_buy');
  assert.equal(c.abilities.dexterity, 14);
  assert.equal(c.abilities.intelligence, 11);
  assert.equal(reportOf(out, 'abilities').status, 'recognized');
  assert.equal(reportOf(out, 'race').value, 'Эльф — Высший эльф');
  assert.equal(c.lssImport.warnings.length, 0);
});

test('half-elf: the two plus-one bonuses go to the highest scores that fit (CON and WIS, not the others)', () => {
  const finals = {strength: 8, dexterity: 13, constitution: 15, intelligence: 8, wisdom: 14, charisma: 17};
  const solved = I.solveAbilities({race: 'half-elf'}, finals, deps);
  assert.equal(solved.method, 'point_buy');
  assert.deepEqual(solved.abilities, {strength: 8, dexterity: 13, constitution: 14, intelligence: 8, wisdom: 13, charisma: 15});
  assert.deepEqual(solved.choices, {slot_0: 'constitution', slot_1: 'wisdom'});
});

test('abilities: impossible finals fall back to manual with check', () => {
  const finals = {strength: 3, dexterity: 3, constitution: 3, intelligence: 3, wisdom: 3, charisma: 3};
  const solved = I.solveAbilities({race: 'human', human_feature: 'human_stats'}, finals, deps);
  assert.equal(solved.unresolved, true);
  assert.equal(solved.method, 'manual');
  assert.equal(solved.check, true);
});

test('race: whole labels, subraces alone, leftovers and ambiguity', () => {
  const race = (text, extra) => bareEntry({race: text, charClass: 'Воин', ...extra});
  const astral = I.recognize(race('Эльф — астральный'), deps);
  assert.equal(astral.character.race, 'astral-elf');
  assert.equal(I.recognize(race('Эльф (астральный)'), deps).character.race, 'astral-elf');
  // «Лесной» is a subrace of the elf and of the gnome: nothing is picked.
  const lesnoy = I.recognize(race('Лесной'), deps);
  assert.equal(lesnoy.character.race, undefined);
  assert.equal(reportOf(lesnoy, 'race').status, 'check');
  // A subrace that exists in one race only is picked as a check.
  const hadow = I.recognize(race('Высший эльф'), deps);
  assert.equal(hadow.character.race, 'elf');
  assert.equal(hadow.character.race_sub, 'high_elf');
  assert.equal(reportOf(hadow, 'race').status, 'check');
  // A leftover text that no group explains keeps the race but flags it.
  const leftover = I.recognize(race('Человек (что-то непонятное)'), deps);
  assert.equal(leftover.character.race, 'human');
  assert.equal(reportOf(leftover, 'race_extra').status, 'check');
});

test('alignment: stems and words of the LSS wording', () => {
  const align = text => I.recognize(bareEntry({alignment: text}), deps).character.alignment;
  assert.equal(align('законно доброе'), 'lawful-good');
  assert.equal(align('Хаотично-злой'), 'chaotic-evil');
  assert.equal(align('Истинно нейтральное'), 'neutral');
  assert.equal(align('Нейтральный'), 'neutral');
  assert.equal(align('ХД'), 'chaotic-good');
});

test('subclass names: head words are dropped, cases agree, dragon remainder feeds the ancestry group', () => {
  const cleric = I.recognize(bareEntry({charClass: 'Жрец', charSubclass: 'Домен Жизни'}), deps);
  assert.equal(cleric.character.creation_domain, 'life');
  const sorc = I.recognize(bareEntry({charClass: 'Чародей', charSubclass: 'Драконья кровь (медный)'}), deps);
  assert.equal(sorc.character.creation_origin, 'draconic');
  assert.equal(sorc.character.creation_dragon, 'copper');
});

test('unknown multiclass part: class is a check and the restore never falls back to the starting class', () => {
  for (const charClass of ['Воин 1 / Кровавый охотник 1', 'Кровавый охотник 1 / Воин 1']) {
    const out = I.recognize(bareEntry({charClass, level: 2}), deps);
    assert.equal(out.character.class, 'fighter');
    assert.equal(reportOf(out, 'class').status, 'check');
    assert.equal(out.restore.classId, null);
    assert.equal(reportOf(out, 'restore').status, 'missing');
    assert.match(reportOf(out, 'restore').value, /Второй класс не распознан — выберите класс при повышении/);
    assert.throws(() => I.buildRestorePlan(out.character, I.advancementContext(out.character, deps), deps), /класс 2-го уровня/);
  }
});

test('weapon line is not a spell: Дубинка (1к4 …) does not become shillelagh', () => {
  const sheet = {
    info: {charClass: {value: 'Друид'}, level: {value: 1}, race: {value: 'Человек'}, background: {value: 'Солдат'}},
    stats: {str: {score: 10}, dex: {score: 10}, con: {score: 10}, int: {score: 10}, wis: {score: 15}, cha: {score: 8}},
    saves: {int: {isProf: true}, wis: {isProf: true}},
    text: {attacks: {value: {data: {type: 'doc', content: [{type: 'paragraph', content: [{type: 'text', text: 'Дубинка (1к4 дробящий)'}]}]}}}}
  };
  const out = I.recognize(entryOf(JSON.stringify({jsonType: 'character', version: '2', data: JSON.stringify(sheet)})), deps);
  assert.equal(out.character.class, 'druid');
  assert.ok(!values(out.character.creation_cantrips).includes('shillelagh'));
});

test('human variant is reported, and the human_feature row carries the solver result', () => {
  const out = I.recognize(entryOf(exportOf(F.create('fighter', null, {abilities: standard, abilityMethod: 'standard'})).text), deps);
  assert.equal(out.character.human_feature, 'human_stats');
  assert.ok(reportOf(out, 'human_feature'));
});

test('recognize refuses unsupported and corrupt entries with an error', () => {
  const c = F.create('fighter', null, {abilities: standard, abilityMethod: 'standard'});
  const level3 = JSON.parse(exportOf(c).text);
  const data = JSON.parse(level3[0].data);
  data.info.level.value = 3;
  level3[0].data = JSON.stringify(data);
  const entry3 = entryOf(JSON.stringify(level3));
  assert.equal(entry3.support.ok, false);
  assert.throws(() => I.recognize(entry3, deps), /3-го уровня/);
  const corrupt = entryOf(JSON.stringify([{jsonType: 'character', data: '{broken', info: {}}]));
  assert.equal(corrupt.support.ok, false);
  assert.throws(() => I.recognize(corrupt, deps), /./);
  assert.throws(() => I.recognize(entryOf(fixture('lss-native-druid-1.json')), {}), /зависимости|config/);
});

test('recognize never mutates the entry; __proto__ keys are not carried and do not pollute', () => {
  const entry = entryOf(fixture('lss-native-druid-1.json'));
  const before = JSON.stringify(entry);
  I.recognize(entry, deps);
  assert.equal(JSON.stringify(entry), before);
  const raw = '[{"jsonType":"character","version":"2","data":"{\\"info\\":{\\"charClass\\":{\\"value\\":\\"Воин\\"},\\"level\\":{\\"value\\":1},\\"race\\":{\\"value\\":\\"Человек\\"}},\\"__proto__\\":{\\"polluted\\":true},\\"stats\\":{\\"str\\":{\\"score\\":14}}}"}]';
  const hostile = entryOf(raw);
  const out = I.recognize(hostile, deps);
  assert.equal(Object.prototype.polluted, undefined);
  assert.equal(JSON.stringify(out.character.lssImport.original).includes('__proto__'), false);
  assert.equal(out.character.class, 'fighter');
});

test('an original sheet over MAX_STORED_CHARS is not stored, recognition still works', () => {
  const big = 'Строка. '.repeat(160000);
  const sheet = {info: {charClass: {value: 'Воин'}, race: {value: 'Человек'}, level: {value: 1}}, stats: {str: {score: 15}, dex: {score: 14}, con: {score: 13}, int: {score: 12}, wis: {score: 10}, cha: {score: 8}},
    text: {background: {value: {data: '<p>' + big + '</p>'}}}};
  const entry = entryOf(JSON.stringify([{jsonType: 'character', version: '2', data: JSON.stringify(sheet)}]));
  const out = I.recognize(entry, deps);
  assert.equal(out.character.lssImport.original, null);
  assert.equal(out.character.class, 'fighter');
  assert.ok(out.character.concept.length <= 1000);
});

test('druid draft matches the expected choices exactly', () => {
  const c = I.recognize(entryOf(fixture('lss-native-druid-1.json')), deps).character;
  assert.deepEqual({
    class: c.class, race: c.race, background: c.background, alignment: c.alignment, abilityMethod: c.abilityMethod,
    abilities: c.abilities, ancestry: c.creation_dragonborn_ancestry, personality: c.personality
  }, {
    class: 'druid', race: 'dragonborn', background: 'hermit', alignment: 'lawful-good', abilityMethod: 'point_buy',
    abilities: {strength: 14, dexterity: 11, constitution: 14, intelligence: 8, wisdom: 15, charisma: 9}, ancestry: 'copper',
    personality: 'Тестовый блок personality. Первая строка druid.\nВторая строка & 1к6 + 2.'
  });
});

test('inferHpRoll inverts levelHp and reports ambiguity, averages and range', () => {
  // d10, CON +2, no bonus: 8 gained means raw 6, the average.
  assert.deepEqual(I.inferHpRoll({hpMax: 20, hpBefore: 12, constitutionMod: 2, bonus: 0, die: 10}), {mode: 'average', value: 6});
  assert.deepEqual(I.inferHpRoll({hpMax: 19, hpBefore: 12, constitutionMod: 2, bonus: 0, die: 10}), {mode: 'roll', value: 5});
  // Hill dwarf style bonus: raw 4 + CON 1 = 5, plus bonus 2 = 7.
  assert.deepEqual(I.inferHpRoll({hpMax: 19, hpBefore: 12, constitutionMod: 1, bonus: 2, die: 8}), {mode: 'roll', value: 4});
  // Floor at 1 with CON 0: gain 1 can only be raw 1.
  assert.deepEqual(I.inferHpRoll({hpMax: 13, hpBefore: 12, constitutionMod: 0, bonus: 0, die: 6}), {mode: 'roll', value: 1});
  // Floor at 1 with CON -1: raw 1 and raw 2 both give 1, so the result is ambiguous.
  assert.equal(I.inferHpRoll({hpMax: 13, hpBefore: 12, constitutionMod: -1, bonus: 0, die: 10}), null);
  // Out of range: raw above the die, no gain, unusable inputs.
  assert.equal(I.inferHpRoll({hpMax: 21, hpBefore: 12, constitutionMod: 0, bonus: 0, die: 8}), null);
  assert.equal(I.inferHpRoll({hpMax: 12, hpBefore: 12, constitutionMod: 0, bonus: 0, die: 8}), null);
  assert.equal(I.inferHpRoll({hpMax: 20, hpBefore: 12, constitutionMod: null, bonus: 0, die: 8}), null);
  assert.equal(I.inferHpRoll({hpMax: 20, hpBefore: 12, constitutionMod: 0, bonus: 0, die: 1}), null);
});

// Level 1 round trip: our export -> file -> recognize (values checked BEFORE completion) -> completion -> same character.
function l1RoundTrip(original, label) {
  const entry = entryOf(exportOf(original).text);
  assert.equal(entry.level, 1, label);
  const c = I.recognize(entry, deps).character;
  assert.equal(c.class, original.class, label);
  assert.equal(c.race, original.race, label);
  assert.equal(c.race_sub, original.race_sub, label);
  assert.equal(c.background, original.background, label);
  assert.deepEqual(c.abilities, original.abilities, label);
  assert.equal(c.abilityMethod, 'standard', label);
  for (const key of ['creation_domain', 'creation_origin', 'creation_patron']) assert.equal(c[key], original[key], `${label}: ${key}`);
  // Before completion: the only validation errors left are groups the sheet does not answer; every recognized spell is one the original chose.
  for (const g of O.getChoices(c, F.context(c)).filter(g => g.section === 'spells')) {
    for (const id of values(c[g.id])) assert.ok(values(original[g.id]).includes(id), `${label}: ${g.id} ${id} is not an original choice`);
  }
  for (const err of O.validate(c, F.context(c))) {
    const value = values(c[err.id]);
    assert.equal(value.length, 0, `${label}: invalid recognized group ${err.id}`);
  }
  const restored = completeCreation(c);
  assert.deepEqual(O.validate(restored, F.context(restored)), [], `${label}: creation validation`);
  assert.deepEqual(R.resolveProficiencies(restored, O.derive(restored, F.context(restored))).errors, [], `${label}: proficiencies`);
  for (const key of ['creation_cantrips', 'creation_known_spells', 'creation_spellbook']) {
    if (original[key] !== undefined) assert.deepEqual(sets(restored[key]), sets(original[key]), `${label}: ${key}`);
  }
  const classSkills = o => Object.entries(o.proficiencyChoices).filter(([id]) => id.startsWith('class:')).map(([, v]) => v).sort();
  assert.deepEqual(classSkills(restored), classSkills(original), `${label}: class skills`);
}
const L1_CASES = [
  ['barbarian'], ['bard'], ['fighter'], ['wizard'], ['druid'], ['cleric', 'life'], ['artificer'], ['warlock', 'archfey'],
  ['monk'], ['paladin'], ['rogue'], ['ranger'], ['sorcerer', 'draconic']
];
for (const [cls, branch] of L1_CASES) {
  test(`level 1 round trip restores ${cls} from our own export`, () => {
    l1RoundTrip(F.create(cls, branch, {abilities: standard, abilityMethod: 'standard'}), cls);
  });
}
test('level 1 round trip with non-first spell picks (last options of each spell group)', () => {
  l1RoundTrip(withLastPicks('bard'), 'bard last picks');
  l1RoundTrip(withLastPicks('wizard'), 'wizard last picks');
  l1RoundTrip(withLastPicks('sorcerer', 'draconic'), 'sorcerer last picks');
  // Arcana: the domain cantrips are named on subclass lines; the class cantrips must still be the class's own picks.
  l1RoundTrip(withLastPicks('cleric', 'arcana'), 'cleric arcana last picks');
});
test('level 1 round trip across races: tiefling light cleric, drow bard, forest gnome wizard, half-elf fighter', () => {
  l1RoundTrip(withLastPicks('cleric', 'light', {race: 'tiefling'}), 'tiefling cleric light');
  l1RoundTrip(withLastPicks('bard', null, {race: 'elf', race_sub: 'drow'}), 'drow bard');
  l1RoundTrip(withLastPicks('wizard', null, {race: 'gnome', race_sub: 'forest-gnome'}), 'forest gnome wizard');
  const halfElf = F.create('fighter', null, {race: 'half-elf', background: 'soldier', abilities: {strength: 15, dexterity: 13, constitution: 14, intelligence: 8, wisdom: 12, charisma: 10},
    abilityBonusChoices: {slot_0: 'dexterity', slot_1: 'constitution'}, abilityMethod: 'manual'});
  const out = I.recognize(entryOf(exportOf(halfElf).text), deps);
  const c = out.character;
  // Final scores are what the sheet records. STR+1/DEX+1 and DEX+1/CON+1 give the same finals and both are standard arrays,
  // so the split is ambiguous: the draft is a standard array with a check, and the final scores are right.
  assert.deepEqual(R.validateAbilities(c), []);
  assert.equal(c.abilityMethod, 'standard');
  assert.equal(c.race, 'half-elf');
  assert.equal(reportOf(out, 'abilities').status, 'check');
  assert.deepEqual(R.finalAbilities(c), {strength: 15, dexterity: 14, constitution: 15, intelligence: 8, wisdom: 12, charisma: 12});
});

// Level 2: our export of a level-2 hero -> recognize -> complete level 1 -> restore plan -> commit. No level-1 pins:
// the restore must reproduce the whole sheet, spells included.
function restoreRoundTrip(original, label) {
  const exported = exportOf(original);
  const entry = entryOf(exported.text);
  assert.equal(entry.level, 2, label);
  const out = I.recognize(entry, deps);
  assert.ok(out.restore, label);
  const c = out.character;
  completeCreation(c);
  assert.deepEqual(O.validate(c, F.context(c)), [], `${label}: level 1 validation`);
  const ctx = I.advancementContext(c, deps);
  const plan = I.buildRestorePlan(c, ctx, deps);
  assert.equal(plan.step, 0);
  F.fill(c, plan);
  assert.deepEqual(L.transition(c, plan, ctx).errors, [], `${label}: transition`);
  const restored = L.commit(c, plan, ctx);
  assert.equal(hpOf(restored), exported.hpMax, `${label}: hp max`);
  assert.deepEqual(stateOf(restored), stateOf(original), `${label}: restored choices equal the sheet`);
  return {out, plan, restored};
}
test('level 2 restore: wizard keeps subclass and the full book and prepared list', () => {
  restoreRoundTrip(F.advance(F.create('wizard', null, {abilities: standard, abilityMethod: 'standard'}), 'evocation'), 'wizard');
});
test('level 2 restore: warlock learns the new spell and keeps invocations', () => {
  const original = F.advance(F.create('warlock', 'archfey', {abilities: standard, abilityMethod: 'standard'}));
  restoreRoundTrip(original, 'warlock');
});
test('level 2 restore: bard and sorcerer known spells', () => {
  restoreRoundTrip(F.advance(F.create('bard', null, {abilities: standard, abilityMethod: 'standard'})), 'bard');
  restoreRoundTrip(F.advance(F.create('sorcerer', 'draconic', {abilities: standard, abilityMethod: 'standard'})), 'sorcerer');
});
test('level 2 restore: cleric and druid prepared lists', () => {
  restoreRoundTrip(F.advance(F.create('cleric', 'life', {abilities: standard, abilityMethod: 'standard'})), 'cleric');
  restoreRoundTrip(F.advance(F.create('druid', null, {abilities: standard, abilityMethod: 'standard'})), 'druid');
});
test('level 2 restore: fighter has no level-2 choices', () => {
  restoreRoundTrip(F.advance(F.create('fighter', null, {abilities: standard, abilityMethod: 'standard'})), 'fighter');
});

// Hit points at level 2: non-average results and every per-level bonus source.
function hpCase(c1, label, roll, userPicks = {}) {
  const original = levelUp(c1, {hp: roll});
  const exported = exportOf(original);
  const out = I.recognize(entryOf(exported.text), deps);
  const c = out.character;
  // A feat is the user's level-1 choice: the sheet does not name it, so the test supplies it as the user would.
  Object.assign(c, userPicks);
  completeCreation(c);
  const ctx = I.advancementContext(c, deps);
  const plan = I.buildRestorePlan(c, ctx, deps);
  assert.deepEqual(plan.hp, roll.mode === 'average' ? {mode: 'average', value: roll.value} : roll, `${label}: inferred roll`);
  F.fill(c, plan);
  const restored = L.commit(c, plan, ctx);
  assert.equal(hpOf(restored), exported.hpMax, `${label}: hp max`);
}
test('level 2 hit points: non-average roll, hill dwarf bonus, variant human Tough, draconic sorcerer', () => {
  hpCase(F.create('fighter', null, {abilities: standard, abilityMethod: 'standard'}), 'fighter roll 2', {mode: 'roll', value: 2});
  hpCase(F.create('fighter', null, {abilities: standard, abilityMethod: 'standard', race: 'dwarf', race_sub: 'hill-dwarf'}), 'hill dwarf', {mode: 'roll', value: 4});
  hpCase(F.create('fighter', null, {abilities: standard, abilityMethod: 'standard', race: 'human', human_feature: 'human_alt', creation_feat: 'tough',
    abilityBonusChoices: {slot_0: 'strength', slot_1: 'constitution'}}), 'variant human tough', {mode: 'roll', value: 7}, {creation_feat: 'tough'});
  hpCase(F.create('sorcerer', 'draconic', {abilities: standard, abilityMethod: 'standard'}), 'draconic sorcerer', {mode: 'roll', value: 3});
});

// Multiclass level 2: the second class is restored; the start class is pinned from the original (the user's level-1 picks).
function multiRoundTrip(startCls, startBranch, secondCls, secondBranch) {
  const first = F.create(startCls, startBranch, {abilities: gated, abilityMethod: 'manual'});
  const pin = {};
  if (secondCls === 'cleric') pin['cleric:creation_domain'] = secondBranch;
  if (secondCls === 'sorcerer') pin['sorcerer:creation_origin'] = secondBranch;
  if (secondCls === 'warlock') pin['warlock:creation_patron'] = secondBranch;
  const original = F.enter(first, secondCls, pin);
  const exported = exportOf(original);
  const out = I.recognize(entryOf(exported.text), deps);
  assert.equal(out.restore.classId, secondCls, `${startCls}->${secondCls}`);
  const c = out.character;
  for (const key of ['creation_cantrips', 'creation_known_spells', 'creation_spellbook', 'creation_prepared', 'creation_domain', 'creation_origin', 'creation_patron']) {
    if (first[key] !== undefined) c[key] = first[key];
  }
  completeCreation(c);
  const ctx = I.advancementContext(c, deps);
  const plan = I.buildRestorePlan(c, ctx, deps);
  F.fill(c, plan);
  assert.deepEqual(L.transition(c, plan, ctx).errors, [], `${startCls}->${secondCls}: transition`);
  const restored = L.commit(c, plan, ctx);
  assert.equal(hpOf(restored), exported.hpMax, `${startCls}->${secondCls}: hp max`);
  const want = L.inspect(original, I.advancementContext(original, deps)).state.classStates[secondCls].state;
  const got = L.inspect(restored, I.advancementContext(restored, deps)).state.classStates[secondCls].state;
  assert.equal(got.subclass, want.subclass, `${startCls}->${secondCls}: subclass`);
  assert.deepEqual(sets(got.known), sets(want.known), `${startCls}->${secondCls}: known`);
  assert.deepEqual(sets(got.cantrips), sets(want.cantrips), `${startCls}->${secondCls}: cantrips`);
}
test('multiclass level 2 restores: bard to sorcerer, fighter to cleric, paladin to warlock', () => {
  multiRoundTrip('bard', null, 'sorcerer', 'draconic');
  multiRoundTrip('fighter', null, 'cleric', 'war');
  multiRoundTrip('paladin', null, 'warlock', 'fiend');
});
// Level-up where each group gets a chosen value (pick(group) -> value or undefined); the rest is filled as the fixtures do.
function levelUpWith(c, pick) {
  const ctx = F.context(c);
  const p = L.begin(c, ctx);
  for (let pass = 0; pass < 4; pass++) {
    for (const g of L.getChoices(c, p, ctx)) {
      const want = pick(g);
      if (want !== undefined) p.choices[g.id] = want;
    }
    F.fill(c, p, {});
  }
  assert.deepEqual(L.transition(c, p, ctx).errors, []);
  return L.commit(c, p, ctx);
}
// Last option of a spell group (not the first), with an optional subclass choice.
const lastSpellPick = (subclass, extra = {}) => g => {
  if (g.id === 'subclass' && subclass) return subclass;
  if (extra[g.id] !== undefined) return extra[g.id];
  if (g.section !== 'spells') return undefined;
  return g.count === 1 ? g.options.at(-1).value : g.options.slice(-g.count).map(o => o.value);
};

test('prepared spells without an LSS card survive the level-2 restore (cleric ceremony, wizard chromatic-orb)', () => {
  // Cleric: ceremony is a ritual with no card in the LSS catalogue; it is named only in the spell text, with «подготовлено».
  const cleric = F.create('cleric', 'life', {abilities: standard, abilityMethod: 'standard'});
  const clericL2 = levelUpWith(cleric, g => g.id === 'prepared' ? ['ceremony', ...g.options.filter(o => o.value !== 'ceremony').map(o => o.value)].slice(0, g.count) : lastSpellPick()(g));
  assert.ok(clericL2.advancement.entries.at(-1).choices.prepared.includes('ceremony'));
  restoreRoundTrip(clericL2, 'cleric ceremony');
  // Wizard: chromatic-orb is learned into the book and prepared at level 2, and it has no card either.
  const wizard = F.create('wizard', null, {abilities: standard, abilityMethod: 'standard'});
  const wizardL2 = levelUpWith(wizard, g => {
    if (g.id === 'book_add') return ['chromatic-orb', g.options.find(o => o.value !== 'chromatic-orb').value];
    if (g.id === 'prepared') return ['chromatic-orb', ...g.options.filter(o => o.value !== 'chromatic-orb').map(o => o.value)].slice(0, g.count);
    return lastSpellPick()(g);
  });
  assert.ok(wizardL2.advancement.entries.at(-1).choices.prepared.includes('chromatic-orb'));
  const { restored } = restoreRoundTrip(wizardL2, 'wizard chromatic-orb');
  assert.ok(stateOf(restored).prepared.includes('chromatic-orb'));
});

test('subclass bonus cantrips (Land druid, Illusion wizard) are restored from the granted cards, not left empty', () => {
  const land = levelUpWith(F.create('druid', null, {abilities: standard, abilityMethod: 'standard'}), lastSpellPick('land'));
  const landState = stateOf(land);
  assert.equal(landState.subclass, 'land');
  restoreRoundTrip(land, 'land druid last picks');
  const illusion = levelUpWith(F.create('wizard', null, {abilities: standard, abilityMethod: 'standard'}), lastSpellPick('illusion'));
  assert.equal(stateOf(illusion).subclass, 'illusion');
  restoreRoundTrip(illusion, 'illusion wizard last picks');
});

test('a 1.3 MB sheet with a dragonborn ancestry and long trait text is recognized in under 500 ms', () => {
  const base = F.create('fighter', null, {abilities: standard, abilityMethod: 'standard', race: 'dragonborn', creation_dragonborn_ancestry: 'red'});
  const exported = JSON.parse(exportOf(base).text);
  const data = JSON.parse(exported[0].data);
  const para = lines => ({value: {data: {type: 'doc', content: lines.map(t => ({type: 'paragraph', content: [{type: 'text', text: t}]}))}}});
  data.text.traits = para(Array.from({length: 12000}, (_, i) => `Черта ${i}: ${'текст '.repeat(4)}`).concat(['Драконье наследие: Красный — огонь; сопротивление огню.']));
  data.text.features = para(['Текст '.repeat(90000)]);
  exported[0].data = JSON.stringify(data);
  const text = JSON.stringify(exported);
  assert.ok(text.length > 1200000 && text.length < 2000000, `size ${text.length}`);
  const entry = entryOf(text);
  const started = performance.now();
  const out = I.recognize(entry, deps);
  const elapsed = performance.now() - started;
  assert.equal(out.character.creation_dragonborn_ancestry, 'red');
  assert.ok(elapsed < 500, `recognize took ${elapsed.toFixed(0)} ms`);
});

test('race and subclass forms: «Эльф — Тёмный — лишнее», «Дварф горный», colon head words, the duplicate class', () => {
  const race = text => I.recognize(bareEntry({race: text, charClass: 'Воин'}), deps);
  const drow = race('Эльф — Тёмный — лишнее');
  assert.equal(drow.character.race_sub, 'drow');
  assert.equal(drow.character.race, 'elf');
  assert.equal(reportOf(drow, 'race').status, 'check');
  assert.ok(reportOf(drow, 'race_extra'));
  const spaced = race('Дварф горный');
  assert.equal(spaced.character.race, 'dwarf');
  assert.equal(spaced.character.race_sub, 'mountain-dwarf');
  assert.equal(reportOf(spaced, 'race').status, 'check');
  const sub = (cls, text, extra) => I.recognize(bareEntry({charClass: cls, charSubclass: text, ...extra}), deps).character;
  assert.equal(sub('Жрец', 'Домен: Света').creation_domain, 'light');
  assert.equal(sub('Колдун', 'Покровитель: Архифея').creation_patron, 'archfey');
  assert.equal(sub('Чародей', 'Происхождение: Дикая магия').creation_origin, 'wild');
  assert.equal(sub('Жрец', 'Жизнь').creation_domain, 'life');
  // Level-2 wizard school written as «Школа: Войны» is the War school.
  const school = I.recognize(bareEntry({charClass: 'Волшебник 2', level: 2, charSubclass: 'Школа: Войны'}), deps);
  assert.equal(school.restore.classId, 'wizard');
  assert.equal(school.restore.subclassText, 'Школа: Войны');
  const duplicate = I.recognize(bareEntry({charClass: 'Воин 1 / Воин 1', level: 2}), deps);
  assert.equal(duplicate.character.class, 'fighter');
  assert.equal(reportOf(duplicate, 'class').status, 'check');
  assert.equal(duplicate.restore.classId, null);
  assert.equal(reportOf(duplicate, 'restore').status, 'missing');
});

test('multiclass fighter 1 / rogue 1: the level-2 class is the rogue', () => {
  const original = F.enter(F.create('fighter', null, {abilities: standard, abilityMethod: 'standard'}), 'rogue');
  const out = I.recognize(entryOf(exportOf(original).text), deps);
  assert.equal(out.restore.classId, 'rogue');
  assert.equal(out.character.class, 'fighter');
});
