const test = require('node:test');
const assert = require('node:assert/strict');
const rules = require('../rules');
const config = require('../config.json');

const abilities = {strength:15,dexterity:14,constitution:13,intelligence:12,wisdom:10,charisma:8};
function character(overrides={}) {return {race:'human',human_feature:'human_stats',class:'fighter',background:'sage',abilities:{...abilities},proficiencyChoices:{},...overrides};}
// Assign the most restricted slots first, modelling a valid final allocation rather than
// assuming that arbitrary greedy choices cannot temporarily exhaust a narrower pool.
function completeChoices(c, extra={}) {
  let plan=rules.getProficiencyPlan(c,extra);
  const used=new Set(plan.fixed.map(g=>g.type+':'+g.id));
  for(const slot of plan.slots.filter(s=>!s.expertise).sort((a,b)=>a.options.length-b.options.length)) {
    const id=slot.options.find(id=>!used.has(rules.optionType(slot.type,id)+':'+id));
    assert.ok(id,`No available option for ${slot.id} in ${c.race}/${c.race_sub}/${c.class}/${c.background}`);
    c.proficiencyChoices[slot.id]=id;used.add(rules.optionType(slot.type,id)+':'+id);
  }
  plan=rules.getProficiencyPlan(c,extra);
  const experts=new Set();
  for(const slot of plan.slots.filter(s=>s.expertise)) {
    const id=slot.options.find(id=>!experts.has(id));
    assert.ok(id,`No expertise option for ${slot.id}`);c.proficiencyChoices[slot.id]=id;experts.add(id);
  }
  return c;
}

test('every configured race, subrace, class and background has mechanics',()=>{
  const races=config.pages.find(p=>p.id==='race').options;
  assert.equal(races.length,50);
  for(const race of races) {
    assert.ok(rules.RACES[race.value],race.value);
    for(const sub of race.suboptions||[]) assert.ok(rules.RACES[race.value].subraces[sub.value],sub.value);
  }
  const classes=config.pages.find(p=>p.id==='class').elements.find(p=>p.id==='class').options;
  for(const c of classes)assert.ok(rules.CLASSES[c.value],c.value);
  for(const b of config.pages.find(p=>p.id==='background').options)assert.ok(rules.BACKGROUNDS[b.value],b.value);
  assert.equal(Object.keys(rules.CLASSES).length,13);
  assert.equal(Object.keys(rules.BACKGROUNDS).length,14);
});

test('all racial branches, classes, and backgrounds admit unique complete proficiency selections',()=>{
  for(const [race,r] of Object.entries(rules.RACES)) for(const sub of Object.keys(r.subraces||{none:{}})) {
    for(const klass of Object.keys(rules.CLASSES)) for(const background of Object.keys(rules.BACKGROUNDS)) {
      const c=completeChoices(character({race,race_sub:sub,class:klass,background}));
      const result=rules.resolveProficiencies(c);
      assert.deepEqual(result.errors,[],`${race}/${sub}/${klass}/${background}`);
      for(const type of ['skills','tools','languages','armor','weapons'])assert.equal(new Set(result[type]).size,result[type].length);
    }
  }
});

test('fixed duplicate skill grants create one unrestricted replacement, preserving total',()=>{
  const c=character({race:'tabaxi',background:'urchin',class:'fighter'});
  const plan=rules.getProficiencyPlan(c), replacement=plan.slots.find(s=>s.id.startsWith('replacement:skill:stealth:'));
  assert.ok(replacement);assert.deepEqual(replacement.options,Object.keys(rules.SKILLS));
  assert.equal(plan.conflicts.length,1);
  assert.equal(plan.fixed.filter(g=>g.type==='skill'&&g.id==='stealth').length,1);
  completeChoices(c);
  assert.equal(rules.resolveProficiencies(c).skills.length,6);
});

test('rogue criminal duplicate thieves tools gives tool replacement, not skill or expertise',()=>{
  const c=character({class:'rogue',background:'criminal'});
  const plan=rules.getProficiencyPlan(c),replacement=plan.slots.find(s=>s.id.startsWith('replacement:tool:thieves_tools:'));
  assert.ok(replacement);assert.equal(replacement.type,'tool');
  assert.ok(!replacement.options.includes('athletics'));
  completeChoices(c);
  const p=rules.resolveProficiencies(c);
  assert.equal(p.tools.length,3);assert.equal(p.skills.length,6);assert.equal(p.expertise.length,2);
});

test('backtracking to background flags previously selected class skill and never counts it twice',()=>{
  const c=completeChoices(character({background:'sage'}));
  const slot=rules.getProficiencyPlan(c).slots.find(s=>s.type==='skill');
  c.proficiencyChoices[slot.id]='athletics';c.background='soldier';
  const result=rules.resolveProficiencies(c);
  assert.ok(result.errors.some(e=>e.id===slot.id&&e.message.includes('уже получено')));
  assert.equal(result.skills.filter(s=>s==='athletics').length,1);
});

test('forged out-of-pool and stale choices do not grant proficiencies',()=>{
  const c=character({class:'wizard'}), slot=rules.getProficiencyPlan(c).slots.find(s=>s.type==='skill');
  c.proficiencyChoices[slot.id]='athletics';c.proficiencyChoices['class:rogue:0:0']='stealth';
  const p=rules.resolveProficiencies(c);
  assert.ok(p.errors.some(e=>e.id===slot.id));assert.ok(p.errors.some(e=>e.id==='class:rogue:0:0'));
  assert.ok(!p.skills.includes('athletics'));assert.ok(!p.skills.includes('stealth'));
});

test('replacement IDs are stable when unrelated racial choices change',()=>{
  const a=rules.getProficiencyPlan(character({race:'elf',race_sub:'high_elf',background:'sailor'}));
  const b=rules.getProficiencyPlan(character({race:'elf',race_sub:'wood_elf',background:'sailor'}));
  assert.equal(a.slots.find(s=>s.id.startsWith('replacement')).id,b.slots.find(s=>s.id.startsWith('replacement')).id);
});

test('rogue expertise requires existing proficiency and cannot duplicate',()=>{
  const c=completeChoices(character({class:'rogue'}));
  c.proficiencyChoices['class:rogue:expertise:0']='animal_handling';
  assert.ok(rules.resolveProficiencies(c).errors.some(e=>e.id==='class:rogue:expertise:0'));
  c.proficiencyChoices['class:rogue:expertise:0']='thieves_tools';
  c.proficiencyChoices['class:rogue:expertise:1']='thieves_tools';
  const p=rules.resolveProficiencies(c);
  assert.equal(p.expertise.filter(id=>id==='thieves_tools').length,1);
  assert.ok(p.errors.some(e=>e.id==='class:rogue:expertise:1'));
});

test('Knowledge domain grants proficiency and expertise together; Resilient grants save',()=>{
  const c=character({class:'cleric'}),extra={proficiencySlots:[{id:'knowledge',type:'skill',options:['nature','religion'],label:'Знания',grantExpertise:true}],savingThrowProficiencies:['constitution']};
  completeChoices(c,extra);
  const p=rules.resolveProficiencies(c,extra);
  assert.ok(p.skills.includes(c.proficiencyChoices.knowledge));assert.ok(p.expertise.includes(c.proficiencyChoices.knowledge));assert.ok(p.savingThrows.includes('constitution'));
});

test('shifter final Eberron ability scores and subtype skill grants are correct',()=>{
  const expected={
    'beasthide-shifter':[{strength:1,constitution:2},'athletics'],
    'longtooth-shifter':[{strength:2,dexterity:1},'intimidation'],
    'swiftstride-shifter':[{dexterity:2,charisma:1},'acrobatics'],
    'wildhunt-shifter':[{dexterity:1,wisdom:2},'survival']
  };
  for(const [race_sub,[bonuses,skill]] of Object.entries(expected)) {
    const c=character({race:'shifter',race_sub});assert.deepEqual(rules.abilityBonuses(c),bonuses);assert.ok(rules.resolveProficiencies(c).skills.includes(skill));
  }
});

test('flexible ASI choices respect distinct/excluded abilities and ignore tampered excess slots',()=>{
  const c=character({race:'half-elf',abilityBonusChoices:{slot_0:'charisma',slot_1:'strength',slot_2:'constitution'}});
  assert.deepEqual(rules.abilityBonuses(c),{charisma:2,strength:1});assert.ok(rules.validateAbilities(c).length);
  c.race='fairy';c.abilityBonusPlan='two_one';c.abilityBonusChoices={slot_0:'wisdom',slot_1:'wisdom'};
  assert.deepEqual(rules.abilityBonuses(c),{wisdom:2});assert.ok(rules.validateAbilities(c).length);
  c.abilityBonusChoices={slot_0:'wisdom',slot_1:'charisma'};assert.deepEqual(rules.validateAbilities(c),[]);
  assert.equal(rules.finalAbilities(c,{abilityBonuses:{wisdom:1}}).wisdom,13);
});

test('legacy kobold has no strength penalty; errata orc has two restricted skills',()=>{
  assert.deepEqual(rules.abilityBonuses(character({race:'kobold'})),{dexterity:2});
  const slots=rules.getProficiencyPlan(character({race:'orc'})).slots.filter(s=>s.id.startsWith('race:orc')&&s.type==='skill');
  assert.equal(slots.length,2);assert.equal(slots[0].options.length,7);assert.ok(slots[0].options.includes('nature'));
});

test('genasi darkvision is restricted to legacy fire genasi; grung does not gain Common',()=>{
  assert.equal(rules.derivedStats(character({race:'genasi',race_sub:'air-genasi'})).darkvision,0);
  assert.equal(rules.derivedStats(character({race:'genasi',race_sub:'fire-genasi'})).darkvision,60);
  assert.deepEqual(rules.resolveProficiencies(character({race:'grung'})).languages,['grung']);
});

test('first level HP, racial toughness, natural AC, unarmored defenses and speed',()=>{
  assert.equal(rules.derivedStats(character({race:'dwarf',race_sub:'hill-dwarf'})).hp,13);
  assert.equal(rules.derivedStats(character({race:'tortle'})).ac,17);
  assert.equal(rules.derivedStats(character({race:'tortle'}),{shield:true}).ac,19);
  assert.equal(rules.derivedStats(character({race:'warforged',abilityBonusChoices:{slot_0:'strength'}})).ac,13);
  const monk=character({race:'human',class:'monk'});
  assert.equal(rules.derivedStats(monk).ac,12);
  assert.equal(rules.derivedStats(monk,{shield:true}).ac,14);
  assert.equal(rules.derivedStats(character({race:'satyr'})).speed,35);
  assert.equal(rules.derivedStats(character({race:'harengon'})).initiative,4);
  assert.equal(rules.derivedStats(character({race:'centaur'})).carryingCapacity,510);
});

test('heavy armor Strength penalty excludes dwarves; medium armor prevents winged flight',()=>{
  const armor={type:'heavy',base:16,dexterity:false,strength:13};
  const c=character({abilities:{...abilities,strength:8}});
  assert.equal(rules.derivedStats(c,{armor}).speed,20);
  assert.equal(rules.derivedStats({...c,race:'dwarf',race_sub:'hill-dwarf'},{armor}).speed,25);
  assert.equal(rules.derivedStats(character({race:'aarakocra'}),{armor:{type:'medium',base:14,dexterityCap:2}}).fly,0);
  assert.equal(rules.derivedStats(character({race:'aarakocra'})).fly,50);
});

test('saving throws and skill expertise apply proficiency once or twice, never stack',()=>{
  const c=completeChoices(character({class:'rogue'}));
  c.proficiencyChoices['class:rogue:expertise:0']=rules.resolveProficiencies(c).skills[0];
  const d=rules.derivedStats(c),skill=c.proficiencyChoices['class:rogue:expertise:0'];
  assert.equal(d.skills[skill],d.modifiers[rules.SKILL_ABILITIES[skill]]+4);
  assert.equal(d.savingThrows.dexterity,d.modifiers.dexterity+2);
  assert.equal(d.savingThrows.wisdom,d.modifiers.wisdom);
});

test('ability generation validates standard, point-buy and manual methods',()=>{
  assert.deepEqual(rules.validateAbilities(character()),[]);
  assert.deepEqual(rules.validateAbilities(character({abilityMethod:'point_buy'})),[]);
  const excessive=Object.fromEntries(rules.ABILITIES.map(id=>[id,15]));
  assert.ok(rules.validateAbilities(character({abilityMethod:'point_buy',abilities:excessive})).length);
  assert.deepEqual(rules.validateAbilities(character({abilityMethod:'manual',abilities:excessive})),[]);
  assert.ok(rules.validateAbilities(character({abilityMethod:'manual',abilities:{...abilities,strength:19}})).length);
});

test('tampered prototype property IDs are rejected without crashing',()=>{
  for(const value of ['__proto__','constructor','toString']) {
    assert.equal(rules.abilityProfile(character({race:value})),null);
    assert.ok(rules.resolveProficiencies(character({race:value,class:value,background:value})).errors.length>=3);
    assert.ok(rules.resolveProficiencies(character({race:'elf',race_sub:value})).errors.some(e=>e.id==='race_sub'));
    assert.equal(rules.abilityProfile(character({human_feature:value})).missingVariant,true);
  }
});

test('all branches have explicit notes, valid labelled choices and complete racial ability profiles',()=>{
  for(const [race,r] of Object.entries(rules.RACES)) {
    assert.ok(r.notes.length,race);
    for(const [sub,data] of Object.entries(r.subraces||{none:{}})) {
      if(sub!=='none')assert.ok(data.notes.length,sub);
      const c=character({race,race_sub:sub});
      const profile=rules.abilityProfile(c);
      for(const [id,n] of Object.entries(profile.fixed)) {assert.ok(rules.ABILITIES.includes(id));assert.ok(Number.isInteger(n)&&n>0);}
      const total=Object.values(profile.fixed).reduce((sum,n)=>sum+n,0)+(profile.choiceSlots||[]).reduce((sum,n)=>sum+n,0);
      if(profile.plans) assert.equal(total,0);
      else assert.equal(total,race==='human'?6:race==='half-elf'||sub==='mountain-dwarf'?4:race==='kobold'?2:3,`${race}/${sub}`);
      for(const slot of rules.getProficiencyPlan(c).slots)for(const id of slot.options)assert.notEqual(rules.labelFor(slot.type,id),id,`${slot.id}: ${id}`);
    }
  }
});

test('variable size and Simic first-level adaptations affect derived outputs only for matching races',()=>{
  const c=character({race:'simic-hybrid',creation_simic_adaptation:'swim'});
  assert.equal(rules.derivedStats(c).swim,30);assert.equal(rules.derivedStats(c).climb,0);
  c.creation_simic_adaptation='climb';assert.equal(rules.derivedStats(c).climb,30);assert.equal(rules.derivedStats(c).swim,0);
  c.race='human';assert.equal(rules.derivedStats(c).climb,0);
  assert.equal(rules.derivedStats(character({race:'plasmoid',creation_size:'small'})).size,'small');
  assert.equal(rules.derivedStats(character({race:'giff',creation_size:'small'})).size,'medium');
});
