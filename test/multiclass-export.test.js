const test=require('node:test');
const assert=require('node:assert/strict');
const {buildLssExport,SPELL_IDS}=require('../lss-export');
const abilities={strength:14,dexterity:14,constitution:14,intelligence:16,wisdom:14,charisma:14};
function fixture(pools,classes){return {character:{name:'Мультикласс QA',class:classes[0].id,level:3,abilities},stats:{level:3,abilities,hitDicePools:pools,hitDie:pools[0].die,hp:24,ac:12,proficiencies:{}},extras:{classes,hitDicePools:pools,features:[],spells:[]}};}
test('LSS mixed hit dice use published multiclass fields and retain all class levels',()=>{
 const {character,stats,extras}=fixture([{die:10,count:1},{die:6,count:1},{die:8,count:1}],[{id:'fighter',label:'Воин',level:1},{id:'wizard',label:'Волшебник',level:1},{id:'cleric',label:'Жрец',level:1}]);
 const out=buildLssExport(character,{class:'Воин'},stats,extras)[0],data=JSON.parse(out.data);
 assert.equal(data.info.level.value,3);assert.equal(data.info.charClass.value,'Воин 1 / Волшебник 1 / Жрец 1');assert.equal(data.vitality['hit-die'].value,'multiclass');assert.deepEqual(data.vitality['hp-dice-multi'],{d10:{max:1,current:1},d6:{max:1,current:1},d8:{max:1,current:1}});assert.ok(JSON.stringify(data.text.traits).includes('1к10 + 1к6 + 1к8'));assert.equal(out.linkAccess,'none');
});
test('same-die multiclass retains ordinary native pool instead of an empty mixed die',()=>{
 const {character,stats,extras}=fixture([{die:10,count:3}],[{id:'fighter',label:'Воин',level:2},{id:'paladin',label:'Паладин',level:1}]);const data=JSON.parse(buildLssExport(character,{},stats,extras)[0].data);assert.equal(data.vitality['hit-die'].value,'d10');assert.deepEqual(data.vitality['hp-dice-multi'],{});assert.equal(data.vitality['hp-dice-current'].value,3);
});
test('secondary wizard, separate pact slots and duplicate casting abilities survive native export',()=>{
 const {character,stats,extras}=fixture([{die:8,count:1},{die:6,count:2}],[{id:'warlock',label:'Колдун',level:1},{id:'wizard',label:'Волшебник',level:1},{id:'sorcerer',label:'Чародей',level:1}]);
 extras.spellcasting={ability:'intelligence',slotTiers:{1:3},pactSlots:{level:1,count:1}};
 extras.spellcastingByClass=[{classId:'warlock',label:'Колдун',level:1,ability:'charisma',attackBonus:4,saveDC:12,knownCount:2},{classId:'wizard',label:'Волшебник',level:1,ability:'intelligence',attackBonus:5,saveDC:13,preparedCount:4,spellbook:['magic-missile']},{classId:'sorcerer',label:'Чародей',level:1,ability:'charisma',attackBonus:4,saveDC:12,knownCount:2}];
 extras.spells=[{id:'magic-missile',label:'Волшебная стрела',level:1,source:'Волшебник',status:'prepared',ability:'intelligence'},{id:'magic-missile',label:'Волшебная стрела',level:1,source:'Чародей',status:'known',ability:'charisma'}];
 const out=buildLssExport(character,{},stats,extras)[0],data=JSON.parse(out.data),text=JSON.stringify(data.text.attacks);
 assert.equal(data.spells['slots-1'].value,3);assert.equal(data.spellsPact['slots-1'].value,1);assert.deepEqual(data.spellsInfo.available.classes,['warlock','wizard','sorcerer']);assert.ok(out.spells.book.includes(SPELL_IDS['magic-missile']));assert.equal(data.spellsInfo.abilities[SPELL_IDS['magic-missile']],'int');assert.ok(text.includes('Волшебник 1'));assert.ok(text.includes('Чародей 1'));assert.ok(text.includes('Сл 13'));assert.ok(text.includes('Сл 12'));assert.ok(text.includes('нативная карточка LSS хранит одну характеристику'));assert.equal(out.spells.granted.filter(s=>s.id===SPELL_IDS['magic-missile']).length,1);
});

test('starting wizard book excludes spells known only from a secondary class',()=>{
 const {character,stats,extras}=fixture([{die:6,count:2}],[{id:'wizard',label:'Волшебник',level:1},{id:'sorcerer',label:'Чародей',level:1}]);
 character.level=2;stats.level=2;extras.spellcastingByClass=[{classId:'wizard',spellbook:['alarm']},{classId:'sorcerer'}];
 extras.spells=[{id:'alarm',level:1,status:'spellbook',ability:'intelligence'},{id:'magic-missile',level:1,status:'known',ability:'charisma'},{id:'shield',level:1,status:'known',ability:'charisma'}];
 const out=buildLssExport(character,{},stats,extras)[0];assert.deepEqual(out.spells.book,[SPELL_IDS.alarm]);assert.ok(out.spells.prepared.includes(SPELL_IDS.shield));
});
