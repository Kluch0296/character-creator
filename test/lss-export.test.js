const test = require('node:test');
const assert = require('node:assert/strict');
const Rules = require('../rules.js');
const Options = require('../creation-options.js');
const {buildLssExport,SPELL_IDS} = require('../lss-export.js');

function fighter() {
  return {name:'CODEX QA Import',level:1,class:'fighter',race:'half-elf',background:'soldier',
    abilities:{strength:15,dexterity:12,constitution:14,intelligence:8,wisdom:13,charisma:10},
    abilityBonusChoices:{slot_0:'strength',slot_1:'constitution'},creation_style:'defense',
    creation_armor:'chain-mail',creation_weapon:'longsword',creation_shield_weapon:'shield',creation_secondary:'crossbow-bolts',
    creation_pack:'explorer-pack',creation_worn_armor:'chain-mail',creation_shield_equipped:'yes',creation_background_item:'dice',
    concept:'Проверка импорта: характеристики, владения, снаряжение.'};
}
function complete(c) {
  let extras = Options.derive(c,{abilities:Rules.finalAbilities(c)});
  c.proficiencyChoices={};
  const plan=Rules.getProficiencyPlan(c,extras), seen=new Set(plan.fixed.map(g=>g.id));
  for(const slot of plan.slots) {
    const id=slot.options.find(id=>!seen.has(id));
    c.proficiencyChoices[slot.id]=id; seen.add(id);
  }
  extras=Options.derive(c,{abilities:Rules.finalAbilities(c),proficiencies:Rules.resolveProficiencies(c,extras)});
  const stats=Rules.derivedStats(c,extras);
  return {extras,stats,exported:buildLssExport(c,{class:'Воин',race:'Полуэльф',background:'Солдат'},stats,extras)};
}
test('LSS v2 envelope has JSON-string data, edition and no server identity',()=>{
  const {exported}=complete(fighter());
  assert.equal(exported.length,1);
  const wrapper=JSON.parse(JSON.stringify(exported))[0];
  assert.equal(wrapper.jsonType,'character');assert.equal(wrapper.version,'2');
  assert.equal(wrapper.edition,'2014');assert.equal(wrapper.sheetEdition,'2014');
  assert.equal(typeof wrapper.data,'string');assert.equal(wrapper._id,undefined);
  assert.equal(wrapper.linkAccess,'none');
  assert.equal(JSON.parse(wrapper.data).info.charClass.value,'Воин');
});
test('LSS maps final racial scores, saving throws and differently named skill keys',()=>{
  const c=fighter(),{stats,extras}=complete(c);
  stats.proficiencies.expertise=['sleight_of_hand'];
  const data=JSON.parse(buildLssExport(c,{},stats,extras)[0].data);
  assert.equal(data.stats.str.score,16);assert.equal(data.stats.con.score,15);assert.equal(data.stats.cha.score,12);
  assert.equal(c.abilities.strength,15);
  assert.equal(data.skills['sleight of hand'].isProf,2);
  assert.equal(data.skills['animal handling'].isProf,1);
  assert.equal(data.saves.str.isProf,true);assert.equal(data.saves.dex.isProf,false);
  assert.equal(data.vitality['hp-max'].value,12);assert.equal(data.vitality['hit-die'].value,'d10');
  assert.equal(data.vitality.ac.value,19);
});
test('LSS equipment, features, prose and attacks retain native rich text and Unicode',()=>{
  const c=fighter(),{exported}=complete(c),data=JSON.parse(exported[0].data);
  assert.equal(data.text.equipment.value.data.type,'doc');
  assert.match(JSON.stringify(data.text.equipment),/Длинный меч/);
  assert.match(JSON.stringify(data.text.background),/Проверка импорта/);
  assert.match(JSON.stringify(data.text.prof),/Общий/);
  assert.equal(data.weaponsList[0].name.value,'Длинный меч');
  assert.equal(data.weaponsList[0].isProf,true);
  assert.equal(data.weaponsList[0].ability,'str');
  assert.equal(data.weaponsList[0].dmg.value,'1d8+3');
  assert.equal(JSON.stringify(data).includes('[object Object]'),false);
});
test('LSS separates pact slots and preserves racial and class spell descriptions',()=>{
  const c={...fighter(),class:'warlock'}, stats={abilities:c.abilities,proficiencies:{},hitDie:8,hp:10,ac:11};
  const extras={spellcasting:{ability:'charisma',slots:1,slotLevel:1,slotRecovery:'short-rest'},spells:[
    {id:'eldritch-blast',label:'Мистический заряд',level:0,source:'Колдун',status:'cantrip'},
    {id:'levitate',label:'Левитация',level:2,source:'Генази воздуха',status:'racial',usage:'1 раз / долгий отдых'}]};
  const data=JSON.parse(buildLssExport(c,{},stats,extras)[0].data);
  assert.equal(data.spellsInfo.base.code,'cha');
  assert.equal(data.spellsPact['slots-1'].value,1);assert.deepEqual(data.spells,{});
  assert.match(JSON.stringify(data.text.attacks),/Левитация/);assert.match(JSON.stringify(data.text.attacks),/долгий отдых/);
});
test('native weapon bonus targets preserve style bonuses and note deduplication',()=>{
  const c=fighter(),{stats,extras}=complete(c);
  const attack=extras.attacks.find(a=>a.id==='light-crossbow');
  attack.attackBonus+=2;
  const data=JSON.parse(buildLssExport(c,{},stats,extras)[0].data);
  const weapon=data.weaponsList.find(w=>w.name.value==='Лёгкий арбалет');
  assert.equal(weapon.ability,'dex');assert.equal(weapon.isProf,true);
  assert.equal(data.bonuses.find(b=>b.target===`weapon.${weapon.id}.attack`).expr,'2');
  assert.equal(data.coins.gp.value,10);
  const paragraphs=data.text.traits.value.data.content.map(p=>p.content?.[0]?.text);
  assert.equal(paragraphs.length,new Set(paragraphs).size);
});
test('native spell cards use verified 2014 IDs, retain spellbook and mark catalog gaps',()=>{
  const c={...fighter(),class:'wizard'};
  const spells=[{id:'fire-bolt',label:'Огненный снаряд',level:0,status:'cantrip'},
    {id:'shield',label:'Щит',level:1,status:'prepared'},
    {id:'find-familiar',label:'Поиск фамильяра',level:1,status:'spellbook'},
    {id:'hex',label:'Сглаз',level:1,status:'feat',usage:'1 / долгий отдых'}];
  const wrapper=buildLssExport(c,{}, {abilities:c.abilities}, {spells})[0];
  assert.deepEqual(wrapper.spells.prepared,[SPELL_IDS['fire-bolt'],SPELL_IDS.shield]);
  assert.deepEqual(wrapper.spells.book,[SPELL_IDS.shield,SPELL_IDS['find-familiar']]);
  assert.equal(wrapper.spells.prepared.includes(SPELL_IDS['find-familiar']),false);
  assert.match(JSON.parse(wrapper.data).text.attacks.value.data.content.at(-1).content[0].text,/карточки нет в каталоге LSS/);
  assert.equal(SPELL_IDS['mage-hand'],'65d3c16af3d820fa1add43a8');
});
test('passive bonuses retain their native customPassive field',()=>{
  const c=fighter(),{stats,extras}=complete(c);
  stats.passivePerception+=5;stats.passiveInvestigation+=5;
  const data=JSON.parse(buildLssExport(c,{},stats,extras)[0].data);
  assert.equal(data.skills.perception.customPassive,stats.passivePerception);
  assert.equal(data.skills.investigation.customPassive,stats.passiveInvestigation);
});

test('bonus cantrips and domain spells do not consume LSS class limits and retain casting abilities',()=>{
  const c={...fighter(),class:'cleric',creation_domain:'light',creation_cantrips:['guidance','mending','resistance'],creation_prepared:['cure-wounds']};
  const options=Options.derive(c,{abilities:c.abilities});
  options.spells.push({id:'prestidigitation',level:0,status:'racial',ability:'charisma'});
  const wrapper=buildLssExport(c,{}, {abilities:c.abilities}, options)[0];
  const grants=wrapper.spells.granted.map(s=>s.id);
  for(const id of ['light','burning-hands','faerie-fire','prestidigitation']) assert.ok(grants.includes(SPELL_IDS[id]),id);
  for(const id of ['guidance','cure-wounds']) assert.equal(grants.includes(SPELL_IDS[id]),false,id);
  assert.ok(wrapper.spells.granted.every(s=>s.source==='manual'));
  const data=JSON.parse(wrapper.data);
  assert.equal(data.spellsInfo.abilities[SPELL_IDS.prestidigitation],'cha');
  assert.equal(data.spellsInfo.abilities[SPELL_IDS['cure-wounds']],'wis');
});


// Mirrors published LSS module 72872: ability + native proficiency + target bonuses.
function round25NativeSkill(data,name){const skill=data.skills[name];const bonuses=data.bonuses.filter(b=>b.target==='skill.'+name);for(const b of bonuses)assert.equal(Number(b.expr),Math.floor(data.proficiency/2));return Math.floor((data.stats[skill.baseStat].score-10)/2)+skill.isProf*data.proficiency+bonuses.reduce((sum,b)=>sum+Number(b.expr),0);}

test('PR26 round twenty-five: Jack native totals agree for bard levels and both multiclass orders',()=>{
 const H=require('./fixtures/characters'),first=H.create('bard',null,{abilityMethod:'manual',proficiencyChoices:{'class:bard:0:0':'stealth','class:bard:0:1':'perception','class:bard:0:2':'deception'}}),second=H.advance(first),third=H.advance(second,'valor'),fighterFirst=H.enter(H.enter(H.create('fighter',null,{abilityMethod:'manual',proficiencyChoices:{'class:fighter:0:0':'athletics','class:fighter:0:1':'perception'}}),'bard'),'bard');
 for(const c of [second,third,H.enter(second,'fighter'),fighterFirst]){const e=H.extras(c),stats=H.stats(c),before=structuredClone({c,e,stats}),data=JSON.parse(buildLssExport(c,{},stats,e)[0].data);assert.equal(e.jackOfAllTrades,true);const bonuses=data.bonuses.filter(b=>b.target.startsWith('skill.'));assert.equal(bonuses.length,Object.values(data.skills).filter(s=>s.isProf===0).length);assert.equal(new Set(data.bonuses.map(b=>b.id)).size,data.bonuses.length);
  for(const [name,skill] of Object.entries(data.skills)){const id=name.replaceAll(' ','_'),flag=stats.proficiencies.expertise.includes(id)?2:stats.proficiencies.skills.includes(id)?1:0;assert.equal(skill.isProf,flag);const targeted=bonuses.filter(b=>b.target==='skill.'+name);assert.equal(targeted.length,flag===0?1:0,name);if(targeted.length)assert.deepEqual(targeted[0].source,{kind:'user'});assert.equal(round25NativeSkill(data,name),stats.skills[id],name);}
  for(const name of ['sleight of hand','animal handling']){assert.equal(data.skills[name].isProf,0);assert.ok(bonuses.some(b=>b.target==='skill.'+name));}
  for(const [name,total] of [['perception',stats.passivePerception],['investigation',stats.passiveInvestigation]]){const native=10+round25NativeSkill(data,name);assert.equal(data.skills[name].customPassive??native,total);if(data.skills[name].customPassive!==undefined)assert.equal(data.skills[name].customPassive,total);}
  assert.equal(data.vitality.initiative?.value??stats.modifiers.dexterity,stats.initiative);assert.deepEqual({c,e,stats},before);
 }
 const data=JSON.parse(buildLssExport(third,{},H.stats(third),H.extras(third))[0].data);assert.ok(Object.values(data.skills).some(s=>s.isProf===2));assert.ok(Object.values(data.skills).some(s=>s.isProf===1));
});


test('PR26 round twenty-five: no Jack inferred from class, stale derived skill totals or missing extras',()=>{
 const H=require('./fixtures/characters'),bard=H.create('bard',null,{abilityMethod:'manual'}),fighter=H.create('fighter',null,{abilityMethod:'manual',creation_style:'archery'}),fighter2bard1=H.enter(H.advance(fighter),'bard');
 for(const c of [bard,fighter,fighter2bard1,H.create('wizard',null,{abilityMethod:'manual'})]){const e=H.extras(c),stats=H.stats(c),before=H.copy(c),data=JSON.parse(buildLssExport(c,{},stats,e)[0].data);assert.ok(!data.bonuses.some(b=>b.target.startsWith('skill.')));assert.deepEqual(c,before);if(c===fighter)assert.ok(data.bonuses.some(b=>b.target.startsWith('weapon.')&&b.expr==='2'));}
 const bard2=H.advance(bard),stats=H.stats(bard2),e=H.extras(bard2);delete e.jackOfAllTrades;stats.skills['animal_handling']+=9;const data=JSON.parse(buildLssExport(bard2,{},stats,e)[0].data);assert.ok(!data.bonuses.some(b=>b.target.startsWith('skill.')));assert.ok(!JSON.parse(buildLssExport(bard2,{},stats)[0].data).bonuses.some(b=>b.target.startsWith('skill.')));
});
