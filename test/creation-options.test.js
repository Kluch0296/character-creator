const test = require('node:test');
const assert = require('node:assert/strict');
const Options = require('../creation-options');
const Rules = require('../rules');

const abilities = {strength:15,dexterity:14,constitution:13,intelligence:12,wisdom:10,charisma:8};
function context(c) {
  const seed=Options.derive(c);
  return {abilities:Rules.finalAbilities(c,seed),proficiencies:Rules.resolveProficiencies(c,seed)};
}
function fill(c) {
  for(let pass=0;pass<8;pass++) {
    const ctx=context(c);
    for(const g of Options.getChoices(c,ctx)) {
      const current=Array.isArray(c[g.id])?c[g.id]:c[g.id]?[c[g.id]]:[];
      if(current.length!==g.count||current.some(id=>!g.options.some(o=>o.value===id))) {
        const selected=g.options.slice(0,g.count).map(o=>o.value);
        c[g.id]=g.count===1?selected[0]:selected;
      }
    }
  }
  return c;
}
test('all thirteen classes produce complete, valid level-one choices',()=>{
  for(const cls of Object.keys(Rules.CLASSES)) {
    const c=fill({class:cls,race:'human',human_feature:'human_stats',background:'sage',abilities:{...abilities}});
    assert.deepEqual(Options.validate(c,context(c)),[],cls);
    const d=Options.derive(c,context(c));
    assert.ok(d.equipment.length,cls);
    assert.ok(d.attacks.every(a=>Number.isFinite(a.attackBonus)),cls);
    assert.ok(d.features.length,cls);
    assert.equal(d.money.gp,10,cls);
  }
});
test('wizard book and preparation are separate and invalid book references fail',()=>{
  const c=fill({class:'wizard',race:'human',human_feature:'human_stats',background:'sage',abilities:{...abilities,intelligence:15}});
  assert.equal(c.creation_spellbook.length,6);
  assert.equal(c.creation_prepared.length,4);
  c.creation_prepared=['wish','fireball','shield','magic-missile'];
  assert.ok(Options.validate(c,context(c)).some(e=>e.field==='creation_prepared'));
  assert.ok(!Options.derive(c,context(c)).spells.some(s=>s.id==='wish'));
});
test('artificer level one prepares Int modifier, cleric prepares Wis modifier plus one',()=>{
  assert.equal(Options.getChoices({class:'artificer'},{abilities:{intelligence:16}}).find(g=>g.id==='creation_prepared').count,3);
  assert.equal(Options.getChoices({class:'cleric'},{abilities:{wisdom:16}}).find(g=>g.id==='creation_prepared').count,4);
  assert.equal(Options.getChoices({class:'wizard'},{abilities:{intelligence:24}}).find(g=>g.id==='creation_prepared').count,6);
});
test('cleric domain spells do not consume prepared capacity and bonus cantrip is separate',()=>{
  const c=fill({class:'cleric',race:'human',human_feature:'human_stats',background:'sage',abilities:{...abilities,wisdom:15},creation_domain:'light'});
  assert.equal(c.creation_cantrips.length,3);
  assert.ok(!c.creation_cantrips.includes('light'));
  const d=Options.derive(c,context(c));
  assert.equal(d.spellcasting.cantrips.length,4);
  assert.equal(d.spellcasting.prepared.length,6);
  assert.deepEqual(d.spellcasting.alwaysPrepared,['burning-hands','faerie-fire']);
});
test('warlock expanded patron list adds options, not free known spells',()=>{
  const c=fill({class:'warlock',race:'human',human_feature:'human_stats',background:'sage',abilities,creation_patron:'fiend'});
  const choices=Options.getChoices(c,context(c)).find(g=>g.id==='creation_known_spells');
  assert.ok(choices.options.some(o=>o.value==='burning-hands'));
  const d=Options.derive(c,context(c));
  assert.equal(d.spellcasting.known.length,2);
  assert.equal(d.spellcasting.slots,1);
  assert.equal(d.spellcasting.slotRecovery,'short-rest');
  assert.ok(!d.spellcasting.known.includes('burning-hands'));
});
test('variant human feat ASI participates once in final values and preparation',()=>{
  const c={class:'wizard',race:'human',human_feature:'human_alt',background:'sage',abilities:{...abilities,intelligence:15},abilityBonusChoices:{slot_0:'strength',slot_1:'constitution'},creation_feat:'keen-mind'};
  const ctx=context(c);
  assert.equal(ctx.abilities.intelligence,16);
  assert.equal(Options.getChoices(c,ctx).find(g=>g.id==='creation_prepared').count,4);
  assert.deepEqual(Options.derive(c,ctx).abilityBonuses,{intelligence:1});
});
test('all PHB feats expose only their active effects and enforce prerequisites',()=>{
  assert.equal(Object.keys(Options.FEATS).length,42);
  const base={class:'fighter',race:'human',human_feature:'human_alt',abilities:{...abilities,dexterity:10,intelligence:10,wisdom:10,charisma:10}};
  for(const id of ['defensive-duelist','inspiring-leader','ritual-caster','war-caster','elemental-adept','spell-sniper','skulker']) assert.ok(Options.validate({...base,creation_feat:id},{abilities:base.abilities}).some(e=>e.field==='creation_feat'),id);
  const stale=Options.derive({...base,race:'elf',race_sub:'wood_elf',creation_feat:'tough',creation_origin:'draconic',creation_domain:'war'});
  assert.equal(stale.hpBonus,0);
  assert.deepEqual(stale.abilityBonuses,{});
  assert.ok(!stale.fixedProficiencies.some(g=>g.id==='draconic'));
});
test('Skilled, Linguist, Weapon Master and Knowledge domain send restrictions to proficiency engine',()=>{
  const base={class:'fighter',race:'human',human_feature:'human_alt',abilities};
  assert.equal(Options.derive({...base,creation_feat:'skilled'}).proficiencySlots.length,3);
  assert.equal(Options.derive({...base,creation_feat:'linguist'}).proficiencySlots.length,3);
  assert.equal(Options.derive({...base,creation_feat:'weapon-master'}).proficiencySlots.length,4);
  const knowledge=Options.derive({class:'cleric',creation_domain:'knowledge',abilities});
  assert.equal(knowledge.proficiencySlots.filter(s=>s.grantExpertise).length,2);
  assert.deepEqual(knowledge.proficiencySlots[0].options,['arcana','history','nature','religion']);
});
test('Resilient grants saving proficiency and fighter feats alter HP, initiative, speed',()=>{
  const base={class:'fighter',race:'human',human_feature:'human_alt',abilities,abilityBonusChoices:{slot_0:'strength',slot_1:'constitution'}};
  const resilient={...base,creation_feat:'resilient',creation_feat_ability:'wisdom'};
  assert.ok(Rules.resolveProficiencies(resilient,Options.derive(resilient)).savingThrows.includes('wisdom'));
  assert.equal(Options.derive({...base,creation_feat:'tough'}).hpBonus,2);
  assert.equal(Options.derive({...base,creation_feat:'alert'}).initiativeBonus,5);
  assert.equal(Options.derive({...base,creation_feat:'mobile'}).speedBonus,10);
});
test('Magic Initiate, Ritual Caster and Spell Sniper have distinct selections and no class slots',()=>{
  const base={class:'fighter',race:'human',human_feature:'human_alt',abilities:{...abilities,intelligence:14}};
  const initiate=fill({...base,creation_feat:'magic-initiate',creation_feat_class:'wizard'});
  assert.equal(Options.derive(initiate,context(initiate)).spells.length,3);
  assert.equal(Options.derive(initiate,context(initiate)).spellcasting,null);
  const ritual=fill({...base,creation_feat:'ritual-caster',creation_feat_class:'wizard'});
  assert.equal(Options.derive(ritual,context(ritual)).spells.length,2);
  assert.ok(Options.derive(ritual,context(ritual)).spells.every(s=>s.status==='ritual'));
  const sniper=Options.getChoices({...base,creation_feat:'spell-sniper',creation_feat_class:'wizard'}).find(g=>g.id==='creation_feat_cantrips');
  assert.ok(!sniper.options.some(o=>o.value==='acid-splash'));
  assert.ok(sniper.options.some(o=>o.value==='fire-bolt'));
});
test('draconic sorcerer HP, language and AC integrate without stacking monk or worn armor',()=>{
  const c=fill({class:'sorcerer',race:'human',human_feature:'human_stats',abilities,creation_origin:'draconic'});
  const d=Options.derive(c,context(c));
  assert.equal(d.hpBonus,1);
  assert.ok(d.fixedProficiencies.some(g=>g.type==='language'&&g.id==='draconic'));
  assert.equal(Rules.derivedStats(c,d).ac,15);
});
test('equipment packages preserve quantity and equipped armor/shield drive AC',()=>{
  const c=fill({class:'fighter',race:'human',human_feature:'human_stats',abilities,creation_weapon:'longsword',creation_shield_weapon:'shield',creation_armor:'chain-mail',creation_secondary:'two-handaxes',creation_worn_armor:'chain-mail',creation_shield_equipped:'yes',creation_style:'defense'});
  const d=Options.derive(c,context(c));
  assert.equal(d.equipment.find(i=>i.id==='handaxe').quantity,2);
  assert.equal(Rules.derivedStats(c,d).ac,19);
  c.creation_shield_equipped='no';
  assert.equal(Rules.derivedStats(c,Options.derive(c,context(c))).ac,17);
});
test('heavy armor encumbrance respects dwarf exception',()=>{
  const c={class:'fighter',race:'human',human_feature:'human_stats',abilities:{...abilities,strength:8},creation_armor:'chain-mail',creation_worn_armor:'chain-mail'};
  assert.equal(Rules.derivedStats(c,Options.derive(c,context(c))).speed,20);
  const dwarf={...c,race:'dwarf',race_sub:'hill-dwarf'};
  assert.equal(Rules.derivedStats(dwarf,Options.derive(dwarf,context(dwarf))).speed,25);
});
test('ranger equipment alternatives cannot be mixed',()=>{
  const c=fill({class:'ranger',race:'human',human_feature:'human_stats',abilities,creation_weapon:'shortsword',creation_second_weapon:'dagger'});
  assert.ok(Options.validate(c,context(c)).some(e=>e.field==='creation_second_weapon'));
});
test('racial casting source is separate and legacy genasi level-two spells exist at level one',()=>{
  assert.equal(Options.raceSpells({race:'genasi',race_sub:'air-genasi'})[0].level,2);
  assert.equal(Options.raceSpells({race:'genasi',race_sub:'earth-genasi'})[0].id,'pass-without-trace');
  assert.equal(Options.raceSpells({race:'gith',race_sub:'gitzerai'})[0].ability,'wisdom');
  assert.equal(Options.raceSpells({race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'})[0].ability,'intelligence');
  assert.equal(Options.raceSpells({race:'human',high_elf_cantrip:'fire-bolt'}).length,0);
  assert.equal(Options.raceSpells({race:'astral-elf',astral_elf_astral_fire:'sacred-flame',creation_racial_spell_ability:'wisdom'})[0].ability,'wisdom');
});
test('background inventory, money and feature survive class selection',()=>{
  const c={class:'wizard',background:'guild-artisan',proficiencyChoices:{'background:guild-artisan:0:0':'smith'}};
  const d=Options.derive(c);
  assert.equal(d.money.gp,15);
  assert.ok(d.equipment.some(i=>i.id==='smith'&&i.label==='Инструменты кузнеца'));
  assert.ok(d.equipment.some(i=>i.id==='spellbook'));
  assert.ok(d.features.some(f=>f.name==='Членство в гильдии'));
});
test('nonproficient simple weapon for sorcerer has no proficiency bonus; monk has unarmed dex attack',()=>{
  const sorcerer=Options.derive({class:'sorcerer',abilities,creation_weapon:'handaxe'});
  assert.equal(sorcerer.attacks.find(a=>a.id==='handaxe').attackBonus,2);
  const monk=Options.derive({class:'monk',abilities:{...abilities,strength:8},creation_weapon:'quarterstaff'});
  assert.equal(monk.attacks.find(a=>a.id==='unarmed').damage,'1d4+2');
  assert.equal(monk.attacks.find(a=>a.id==='quarterstaff').ability,'dexterity');
});
test('all spell choice IDs have labels and every group has enough distinct options',()=>{
  for(const cls of Object.keys(Rules.CLASSES)) {
    const c=fill({class:cls,race:'human',human_feature:'human_stats',abilities});
    for(const g of Options.getChoices(c,context(c))) {
      assert.ok(g.options.length>=g.count,`${cls}: ${g.id}`);
      assert.equal(new Set(g.options.map(o=>o.value)).size,g.options.length,`${cls}: ${g.id}`);
      assert.ok(g.options.every(o=>o.label!==o.value),`${cls}: ${g.id}`);
    }
  }
});
test('all 42 PHB feats can complete with suitable prerequisites; every PHB level-one subclass can complete',()=>{
  const highAbilities=Object.fromEntries(Object.keys(abilities).map(id=>[id,16]));
  for(const feat of Object.keys(Options.FEATS)) {
    const c=fill({class:'cleric',creation_domain:'life',race:'human',human_feature:'human_alt',creation_feat:feat,abilities:highAbilities,abilityBonusChoices:{slot_0:'strength',slot_1:'constitution'}});
    assert.deepEqual(Options.validate(c,context(c)),[],feat);
    assert.ok(Options.derive(c,context(c)).features.some(f=>f.name.includes(Options.FEATS[feat].label)),feat);
  }
  for(const [cls,field,ids] of [['cleric','creation_domain',Object.keys(Options.DOMAINS)],['warlock','creation_patron',Object.keys(Options.PATRONS)],['sorcerer','creation_origin',['draconic','wild']]]) {
    for(const id of ids) {
      const c=fill({class:cls,[field]:id,race:'human',human_feature:'human_stats',abilities:highAbilities});
      assert.deepEqual(Options.validate(c,context(c)),[],id);
    }
  }
  assert.equal(Object.keys(Options.DOMAINS).length,7);
  assert.equal(Object.keys(Options.PATRONS).length,3);
});
test('racial natural attacks and pending racial choices keep dependencies',()=>{
  const c={class:'monk',race:'tabaxi',abilities:{...abilities,strength:8,dexterity:16}};
  assert.equal(Options.derive(c).attacks.find(a=>a.id==='racial-natural-weapon').damage,'1d4+3');
  assert.ok(Options.getChoices({race:'dragonborn'}).some(g=>g.id==='creation_dragonborn_ancestry'&&g.options.length===10));
  assert.ok(Options.getChoices({race:'simic-hybrid'}).some(g=>g.id==='creation_simic_adaptation'));
  assert.ok(Options.getChoices({race:'harengon'}).some(g=>g.id==='creation_size'));
  assert.ok(!Options.getChoices({race:'autognome'}).some(g=>g.id==='creation_size'));
  const breath=Options.derive({race:'dragonborn',creation_dragonborn_ancestry:'green',abilities});
  assert.ok(breath.features.some(f=>f.name==='Оружие дыхания'&&f.description.includes('Телосложение')));
});
test('an already known favored enemy language does not create an impossible required choice',()=>{
  const c={class:'ranger',race:'gith',race_sub:'githyanki',creation_favored_enemy:'humanoids',creation_humanoids:['gith','humans'],abilities};
  assert.ok(!Options.derive(c).proficiencySlots.some(s=>s.id.includes('favored-enemy-language')));
});
