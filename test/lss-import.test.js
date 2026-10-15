const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const Rules=require('../rules.js');
const Options=require('../creation-options.js');
const X=require('../lss-export.js');
const L=require('../lss-import.js');

const clone=x=>JSON.parse(JSON.stringify(x));
function fighter(){
  return {name:'CODEX QA Import',level:1,class:'fighter',race:'half-elf',background:'soldier',
    abilities:{strength:15,dexterity:12,constitution:14,intelligence:8,wisdom:13,charisma:10},
    abilityBonusChoices:{slot_0:'strength',slot_1:'constitution'},creation_style:'defense',
    creation_armor:'chain-mail',creation_weapon:'longsword',creation_shield_weapon:'shield',creation_secondary:'crossbow-bolts',
    creation_pack:'explorer-pack',creation_worn_armor:'chain-mail',creation_shield_equipped:'yes',creation_background_item:'dice',
    concept:'Проверка импорта: характеристики, владения, снаряжение.'};
}
/* Our own exporter output for a fighter (same flow as test/lss-export.test.js). */
function exportWrapper(c=fighter()){
  let extras=Options.derive(c,{abilities:Rules.finalAbilities(c)});
  c.proficiencyChoices={};
  const plan=Rules.getProficiencyPlan(c,extras),seen=new Set(plan.fixed.map(g=>g.id));
  for(const slot of plan.slots){const id=slot.options.find(id=>!seen.has(id));c.proficiencyChoices[slot.id]=id;seen.add(id);}
  extras=Options.derive(c,{abilities:Rules.finalAbilities(c),proficiencies:Rules.resolveProficiencies(c,extras)});
  const stats=Rules.derivedStats(c,extras);
  return clone(X.buildLssExport(c,{class:'Воин',race:'Полуэльф',background:'Солдат'},stats,extras)[0]);
}
const sheetOf=w=>JSON.parse(w.data);
function wrap(sheet,extra={}){
  return {tags:[],rooms:[],disabledBlocks:{'info-left':[],_id:'6acff6dd4ee5a75e133287c9'},edition:'2014',sheetEdition:'2014',
    spells:{mode:'cards',prepared:[],book:[],granted:[],slotless:[],edition:'2014'},linkAccess:'none',
    data:JSON.stringify(sheet),jsonType:'character',version:'2',...extra};
}
/* Hand-built sheet shaped like a native LSS download (strings for numbers, Russian free text). */
function baseSheet(level=1,charClass='Колдун'){
  return {jsonType:'character',name:{value:'Тестовый герой'},
    info:{charClass:{name:'charClass',value:charClass},charSubclass:{name:'charSubclass',value:''},level:{name:'level',value:level},
      race:{name:'race',value:'Человек'},background:{name:'background',value:'Мудрец'}}};
}
const readOne=w=>{const r=L.readLssFile(JSON.stringify([w]));assert.deepEqual(r.errors,[]);return r.entries[0];};
const fixture=name=>fs.readFileSync(path.join(__dirname,'fixtures',name),'utf8');

test('single wrapper object is read as one supported level 1 entry',()=>{
  const w=exportWrapper();
  const r=L.readLssFile(JSON.stringify(w));
  assert.deepEqual(r.errors,[]);
  assert.equal(r.entries.length,1);
  const e=r.entries[0];
  assert.equal(e.index,0);assert.equal(e.name,'CODEX QA Import');assert.equal(e.level,1);
  assert.equal(e.classText,'Воин');assert.equal(e.raceText,'Полуэльф');assert.equal(e.backgroundText,'Солдат');
  assert.equal(e.subclassText,'');assert.equal(e.sourceEdition,'2014');
  assert.deepEqual(e.support,{ok:true,code:'ok',message:''});
  assert.deepEqual(e.warnings,[]);
  assert.equal(e.sheet.info.charClass.value,'Воин');
});

test('array of one wrapper gives the same entry as the single object',()=>{
  const w=exportWrapper();
  const a=L.readLssFile(JSON.stringify([w])).entries[0],b=L.readLssFile(JSON.stringify(w)).entries[0];
  assert.deepEqual(a.support,b.support);assert.equal(a.name,b.name);assert.equal(a.level,b.level);
});

test('array of several wrappers: level 3 is unsupported and disabled, others stay ok',()=>{
  const one=exportWrapper(),two=exportWrapper(),three=exportWrapper();
  const d2=sheetOf(two);d2.info.level.value=2;two.data=JSON.stringify(d2);
  const d3=sheetOf(three);d3.info.level.value=3;d3.name.value='Третий';three.data=JSON.stringify(d3);
  const r=L.readLssFile(JSON.stringify([one,two,three]));
  assert.deepEqual(r.errors,[]);
  assert.deepEqual(r.entries.map(e=>e.index),[0,1,2]);
  assert.deepEqual(r.entries.map(e=>e.level),[1,2,3]);
  assert.deepEqual(r.entries.map(e=>e.support.code),['ok','ok','level_unsupported']);
  assert.equal(r.entries[2].support.ok,false);
  assert.equal(r.entries[2].support.message,'Лист 3-го уровня: пока поддерживаются только персонажи 1-го и 2-го уровня.');
  assert.equal(r.entries[2].name,'Третий');
});

test('bare sheet gets a synthetic wrapper, so sheet spells never become the wrapper card list',()=>{
  const sheet={...baseSheet(1,'Воин'),spells:{'slots-1':{value:'2'}}};
  const r=L.readLssFile(JSON.stringify(sheet));
  assert.deepEqual(r.errors,[]);
  const e=r.entries[0];
  assert.equal(e.support.code,'ok');assert.equal(e.level,1);assert.equal(e.name,'Тестовый герой');
  assert.equal(e.wrapper.jsonType,'character');assert.equal(e.wrapper.version,'2');
  assert.equal(Object.hasOwn(e.wrapper,'spells'),false);
  assert.deepEqual(e.wrapper.data.spells,{'slots-1':{value:'2'}});
  const clean=L.sanitizeWrapper(e.wrapper,e.sheet);
  assert.deepEqual(clean.spells,{});assert.deepEqual(clean.tags,[]);assert.deepEqual(clean.disabledBlocks,{});
  assert.equal(clean.edition,'2014');assert.equal(clean.sheetEdition,'2014');
  assert.deepEqual(clean.data.spells,{'slots-1':{value:'2'}});
  assert.equal(clean.data.info.charClass.value,'Воин');
});

test('legacy native sheet: string numbers, 1к10 hit die, feet, abilities key and text spells',()=>{
  const sheet={jsonType:'character',name:{value:'  Старый Гном  '},
    info:{charClass:{value:'Волшебник'},level:{value:'1'},race:{value:'Гном (лесной)'},background:{value:'Моряк (кок)'}},
    vitality:{'hp-max':{value:'7'},'hp-current':{value:'7'},ac:{value:'14'},speed:{value:'25 футов'},'hit-die':{value:'1к10'}},
    abilities:{athletics:{value:'0'},acrobatics:{value:'1'},stealth:{value:'2'},insight:{isProf:false},perception:{isProf:true},arcana:{isProf:0},history:{isProf:1}},
    text:{'spells-level-1':{value:{data:{type:'doc',content:[{type:'paragraph',content:[{type:'text',text:'Магическая стрела'}]}]}}}}};
  const e=readOne(wrap(sheet));
  assert.equal(e.support.code,'ok');assert.equal(e.level,1);assert.equal(e.name,'Старый Гном');
  assert.equal(e.raceText,'Гном (лесной)');assert.equal(e.backgroundText,'Моряк (кок)');assert.equal(e.subclassText,'');
  assert.equal(L.num(e.sheet.vitality['hp-max'].value),7);
  assert.equal(L.num(e.sheet.vitality.speed.value),25);
  assert.equal(L.num(e.sheet.vitality['hit-die'].value),1);
  assert.ok(e.sheet.abilities);
  assert.equal(L.plainText(e.sheet.text['spells-level-1']),'Магическая стрела');
  assert.equal(e.sheet.stats,undefined);
});

test('level_conflict only when every class part has a number; partial class strings trust info.level',()=>{
  const e=readOne(wrap({...baseSheet(1,'Плут 1 / Воин 1')}));
  assert.equal(e.support.code,'level_conflict');assert.equal(e.support.ok,false);
  assert.match(e.support.message,/LSS/);assert.match(e.support.message,/заново/);
  assert.equal(readOne(wrap({...baseSheet(2,'Плут 1 / Воин 1')})).support.code,'ok');
  assert.equal(readOne(wrap({...baseSheet(1,'Воин 2')})).support.code,'level_conflict');
  const partial=readOne(wrap({...baseSheet(1,'Плут 1 / Воин')}));
  assert.equal(partial.support.code,'ok');assert.equal(partial.level,1);
  assert.equal(readOne(wrap({...baseSheet(2,'Плут 1 / Воин')})).support.code,'ok');
});

test('level_unknown when no usable level exists',()=>{
  const noLevel={jsonType:'character',name:{value:'Без уровня'},info:{charClass:{value:'Воин'}}};
  const e1=readOne(wrap(noLevel));
  assert.equal(e1.support.code,'level_unknown');assert.equal(e1.level,null);
  assert.equal(readOne(wrap(baseSheet(0,'Воин'))).support.code,'level_unknown');
  assert.equal(readOne(wrap(baseSheet('1.5','Воин'))).support.code,'level_unknown');
  assert.equal(readOne(wrap({jsonType:'character',name:{value:'Пусто'}})).support.code,'level_unknown');
});

test('level is summed from class levels when info.level is absent or not a whole integer',()=>{
  const sheet={jsonType:'character',info:{charClass:{value:'Плут 1 / Воин 1'}}};
  const e=readOne(wrap(sheet));
  assert.equal(e.level,2);assert.equal(e.support.code,'ok');
  const e2=readOne(wrap({jsonType:'character',info:{charClass:{value:'Воин 2'},level:{value:'2'}}}));
  assert.equal(e2.level,2);assert.equal(e2.support.code,'ok');
  for(const bad of ['1e3','2abc','1,5']) {
    const r=readOne(wrap({jsonType:'character',info:{charClass:{value:'Плут 1 / Воин 1'},level:{value:bad}}}));
    assert.equal(r.level,2,bad);assert.equal(r.support.code,'ok',bad);
  }
  assert.equal(readOne(wrap({jsonType:'character',info:{charClass:{value:'Воин 1'},level:{value:'1.0'}}})).level,1);
});

test('edition 2024 is not blocking: entry is ok with an edition_mismatch warning',()=>{
  const w=exportWrapper();
  w.edition='2024';w.sheetEdition='2024';
  const e=L.readLssFile(JSON.stringify([w])).entries[0];
  assert.equal(e.support.ok,true);assert.equal(e.support.code,'ok');
  assert.equal(e.sourceEdition,'2024');assert.equal(e.edition,'2024');
  assert.equal(e.warnings.length,1);
  assert.equal(e.warnings[0].code,'edition_mismatch');
  assert.match(e.warnings[0].message,/2024/);
  assert.match(e.warnings[0].message,/2014/);
});

test('edition 2014 has no warnings; only sheetEdition 2024 sets the source edition',()=>{
  const w=exportWrapper();
  assert.deepEqual(L.readLssFile(JSON.stringify([w])).entries[0].warnings,[]);
  const w2=exportWrapper();w2.sheetEdition='2024';
  const e=L.readLssFile(JSON.stringify([w2])).entries[0];
  assert.equal(e.sourceEdition,'2024');assert.equal(e.warnings[0].code,'edition_mismatch');assert.equal(e.support.ok,true);
});

test('corrupt sheet data is reported per entry without throwing',()=>{
  for(const data of ['not json{','[1,2]','5','null']){
    const e=readOne({...wrap(baseSheet()),data});
    assert.equal(e.support.code,'corrupt',data);assert.equal(e.support.ok,false);assert.equal(e.sheet,null);assert.equal(e.level,null);
    assert.equal(e.name,'Безымянный герой');
  }
  const missing=readOne({jsonType:'character',version:'2'});
  assert.equal(missing.support.code,'corrupt');
});

test('file-level errors: not_json, empty, too_large, not_character',()=>{
  for(const text of ['not json','{"a":',' {']) assert.equal(L.readLssFile(text).errors[0].code,'not_json',text);
  for(const text of ['[]','   ','[ ]']) assert.equal(L.readLssFile(text).errors[0].code,'empty',text);
  // A non-empty array without any character is not_character, not empty.
  assert.equal(L.readLssFile('[1,"x"]').errors[0].code,'not_character');
  const big=' '.repeat(L.MAX_FILE_CHARS+1);
  const r=L.readLssFile(big);
  assert.equal(r.errors[0].code,'too_large');assert.deepEqual(r.entries,[]);
  for(const text of ['{"foo":1}','[{"jsonType":"npc","data":"{}"}]','5','null'])
    assert.equal(L.readLssFile(text).errors[0].code,'not_character',text);
  assert.equal(L.MAX_FILE_CHARS,2000000);assert.equal(L.MAX_STORED_CHARS,1000000);
});

test('a leading BOM is ignored; a BOM with blank content is empty',()=>{
  const r=L.readLssFile('﻿'+JSON.stringify([exportWrapper()]));
  assert.deepEqual(r.errors,[]);assert.equal(r.entries[0].support.code,'ok');
  assert.equal(L.readLssFile('﻿   ').errors[0].code,'empty');
});

test('data given as an object instead of a JSON string is accepted',()=>{
  const w=exportWrapper();
  w.data=sheetOf(w);
  const e=L.readLssFile(JSON.stringify([w])).entries[0];
  assert.equal(e.support.code,'ok');assert.equal(e.name,'CODEX QA Import');
});

test('sanitizeWrapper keeps only the allowlist and strips service keys',()=>{
  const sheet={jsonType:'character',name:{value:'Чистка'},_id:'top',__v:0,createdAt:'x',updatedAt:'y',lastWriterSessionId:'s1',
    wizard:{step:1},rooms:[],linkAccess:'none',ownership:'keep-me',ownerName:'drop-me',
    hiddenName:{value:'Тайна'},casterClass:{value:'Волшебник'},weapons:{value:'x'},bonusesSkills:{athletics:{value:'1'}},
    bonusesStats:{str:{value:'2'}},abilities:{athletics:{isProf:true}},
    weaponsList:[{id:'weapon-creator-0',name:{value:'Меч'},ability:'str'}],bonuses:[{id:'bonus-creator-attack-0',expr:'1'}]};
  const w={...wrap(sheet),lastWriterSessionId:'s1',wizard:{step:3},rooms:[{id:'r'}],linkAccess:'public',_id:'wrapper-id',owner:'user-1',
    disabledBlocks:{'info-left':[],_id:'6acff6dd4ee5a75e133287c9',__v:0,createdAt:'a',updatedAt:'b',ownerId:'u','notes-left':['x']}};
  const e=readOne(w);
  const out=L.sanitizeWrapper(e.wrapper,e.sheet);
  assert.deepEqual(Object.keys(out).sort(),['data','disabledBlocks','edition','jsonType','sheetEdition','spells','tags','version']);
  assert.deepEqual(out.disabledBlocks,{'info-left':[],'notes-left':['x']});
  for(const key of ['_id','__v','createdAt','updatedAt','lastWriterSessionId','wizard','rooms','linkAccess','ownerName'])
    assert.equal(Object.hasOwn(out.data,key),false,key);
  assert.equal(out.data.ownership,'keep-me');
  assert.equal(out.data.hiddenName.value,'Тайна');assert.equal(out.data.casterClass.value,'Волшебник');
  assert.deepEqual(out.data.weapons,{value:'x'});assert.deepEqual(out.data.bonusesSkills,{athletics:{value:'1'}});
  assert.deepEqual(out.data.bonusesStats,{str:{value:'2'}});assert.deepEqual(out.data.abilities,{athletics:{isProf:true}});
  assert.equal(out.data.weaponsList[0].id,'weapon-creator-0');assert.equal(out.data.bonuses[0].id,'bonus-creator-attack-0');
  assert.equal(out.edition,'2014');assert.equal(out.sheetEdition,'2014');
  assert.equal(Object.hasOwn(out,'rooms'),false);assert.equal(Object.hasOwn(out,'wizard'),false);
  assert.equal(Object.hasOwn(out,'linkAccess'),false);assert.equal(Object.hasOwn(out,'owner'),false);
});

test('sanitizeWrapper strips _id and __v inside tags and spells at any depth, keeping other keys',()=>{
  const w={...wrap(baseSheet()),tags:[{_id:'t1',__v:0,name:'Тег'}],
    spells:{mode:'cards',prepared:[{_id:'p1',id:'68ce8ef6'}],granted:[{id:'g1',source:'manual',__v:1}]}};
  const e=readOne(w);
  const out=L.sanitizeWrapper(e.wrapper,e.sheet);
  assert.deepEqual(out.tags,[{name:'Тег'}]);
  assert.deepEqual(out.spells,{mode:'cards',prepared:[{id:'68ce8ef6'}],granted:[{id:'g1',source:'manual'}]});
});

test('sanitizeWrapper drops __proto__, constructor and prototype keys at any depth',()=>{
  const sheet=JSON.parse('{"jsonType":"character","info":{"charClass":{"value":"Воин"},"level":{"value":"1"}},"constructor":{"prototype":{"polluted":true}},"weaponsList":[{"id":"weapon-creator-0","name":{"value":"Меч"}}]}');
  sheet.nested=JSON.parse('{"__proto__":{"polluted":true},"ok":1,"deep":{"__proto__":{"polluted":"deep"},"keep":[{"prototype":1,"value":2}]}}');
  const w=wrap(sheet);
  w.disabledBlocks=JSON.parse('{"__proto__":{"x":1},"info-left":[],"_id":"abc","owner":"u"}');
  const e=readOne(w);
  const out=L.sanitizeWrapper(e.wrapper,e.sheet);
  assert.equal(Object.prototype.polluted,undefined);assert.equal({}.polluted,undefined);
  assert.equal(Object.hasOwn(out.data,'__proto__'),false);assert.equal(Object.hasOwn(out.data,'constructor'),false);
  assert.equal(Object.hasOwn(out.data.nested,'__proto__'),false);assert.deepEqual(Object.keys(out.data.nested),['ok','deep']);
  assert.equal(Object.hasOwn(out.data.nested.deep,'__proto__'),false);
  assert.deepEqual(out.data.nested.deep.keep,[{value:2}]);
  assert.deepEqual(Object.keys(out.disabledBlocks),['info-left']);
  assert.equal(out.data.weaponsList[0].id,'weapon-creator-0');
});

test('entry.sheet and entry.wrapper are copies: no raw own __proto__ keys reach the caller',()=>{
  const sheet=JSON.parse('{"jsonType":"character","info":{"charClass":{"value":"Воин"},"level":{"value":"1"}},"__proto__":{"x":1}}');
  const e=readOne(wrap(sheet));
  assert.equal(Object.hasOwn(e.sheet,'__proto__'),false);
  assert.equal(Object.hasOwn(e.wrapper.data,'__proto__'),false);
  const bare=L.readLssFile(JSON.stringify(JSON.parse('{"jsonType":"character","info":{"charClass":{"value":"Воин"}},"__proto__":{"x":1}}'))).entries[0];
  assert.equal(Object.hasOwn(bare.sheet,'__proto__'),false);
  assert.equal(Object.hasOwn(bare.wrapper.data,'__proto__'),false);
});

test('sanitizeWrapper defaults missing fields and never throws on odd input',()=>{
  const out=L.sanitizeWrapper({}, undefined);
  assert.deepEqual(out.tags,[]);assert.deepEqual(out.disabledBlocks,{});assert.deepEqual(out.spells,{});
  assert.deepEqual(out.data,{});assert.equal(out.version,'2');assert.equal(out.jsonType,'character');
  assert.deepEqual(L.sanitizeWrapper(null,null).data,{});
  assert.deepEqual(L.sanitizeWrapper({data:'{bad'}).data,{});
});

test('realistic messy sheet: empty name, empty experience, no subclass, string vitality, odd weapons rows',()=>{
  const sheet={jsonType:'character',name:{value:''},
    info:{charClass:{name:'charClass',value:'Жрец'},level:{name:'level',value:'2'},race:{value:'Дварф (горный)'},
      background:{value:'Отшельник'},experience:{value:''}},
    vitality:{'hp-max':{value:'15'},'hp-current':{value:'12'},'hp-temp':{value:''},speed:{value:'25 футов'},'hit-die':{value:'1к12'},ac:{value:'16'}},
    weaponsList:[{id:'w-1',name:{value:'Топор'},ability:null,isProf:null,dmg:{value:'1к12'}},
      {id:'w-2',name:{value:''},ability:'str',isProf:true},{id:'w-3',ability:null}],
    text:{background:{value:{id:'hover-toolbar-1',data:{type:'doc',content:['Строка без абзаца',{type:'paragraph',content:['Текст ',{type:'text',text:'строкой'}]}]}}}}};
  const w=wrap(sheet,{rooms:[],linkAccess:'none'});
  const e=readOne(w);
  assert.equal(e.name,'Безымянный герой');assert.equal(e.level,2);assert.equal(e.support.code,'ok');
  assert.equal(e.subclassText,'');assert.equal(e.raceText,'Дварф (горный)');
  assert.equal(L.plainText(e.sheet.text.background),'Строка без абзаца\nТекст строкой');
  const out=L.sanitizeWrapper(e.wrapper,e.sheet);
  assert.deepEqual(out.data.weaponsList,sheet.weaponsList);
  assert.equal(out.data.vitality['hit-die'].value,'1к12');
  assert.equal(L.num(out.data.vitality['hp-max'].value),15);
  assert.equal(Number.isNaN(L.num(out.data.vitality['hp-temp'].value)),true);
});

test('plainText: TipTap doc, extra id key, bare string content, nested lists',()=>{
  const doc={type:'doc',content:[
    {type:'paragraph',content:[{type:'text',text:'Первый'}]},
    {type:'paragraph'},
    {type:'bulletList',content:[{type:'listItem',content:[{type:'paragraph',content:[{type:'text',text:'Пункт'}]}]}]},
    {type:'paragraph',content:[{type:'text',text:'Вторая '},{type:'text',text:'строка'}]}]};
  assert.equal(L.plainText({value:{data:doc}}),'Первый\n\nПункт\nВторая строка');
  assert.equal(L.plainText({value:{id:'hover-toolbar-42',data:doc}}),'Первый\n\nПункт\nВторая строка');
  assert.equal(L.plainText({value:{data:{type:'doc',content:['a','b']}}}),'ab');
  assert.equal(L.plainText({value:{data:{type:'doc',content:[{type:'paragraph',content:['x',{type:'hardBreak'},'y']}]}}}),'x\ny');
});

test('plainText: inline nodes such as roller stay on the same line',()=>{
  const block={value:{data:{type:'doc',content:[{type:'paragraph',content:[
    {type:'text',text:'Урон '},{type:'roller',content:[{type:'text',text:'1к8'}]},{type:'text',text:' рубящий'}]}]}}};
  assert.equal(L.plainText(block),'Урон 1к8 рубящий');
});

test('plainText: plain strings, HTML strings, tags, line breaks, entities and scripts',()=>{
  assert.equal(L.plainText({value:'Просто текст'}),'Просто текст');
  assert.equal(L.plainText('строка'),'строка');
  assert.equal(L.plainText({value:{data:'<p>Из-за моего роста</p><p><strong>Доспехи</strong>: лёгкие</p><p></p>'}}),'Из-за моего роста\nДоспехи: лёгкие');
  assert.equal(L.plainText({value:{data:'<p>Урон <roller>1к8 + 3</roller></p>'}}),'Урон 1к8 + 3');
  assert.equal(L.plainText({value:'a<br>b<br/>c'}),'a\nb\nc');
  assert.equal(L.plainText({value:'x&nbsp;y&amp;&lt;b&gt;&quot;&#39;&#1055;&#x41;'}),'x y&<b>"\'ПA');
  assert.equal(L.plainText({value:'<p>A  </p><p></p><p></p><p></p><p>B</p>'}),'A\n\nB');
  assert.equal(L.plainText({value:'<p>Текст</p><script>alert(1)</script>'}),'Текст');
  assert.equal(L.plainText({value:{data:'{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"JSON-строка"}]}]}'}}),'JSON-строка');
});

test('plainText: a JSON-looking string that is not a TipTap doc falls back to the original text',()=>{
  assert.equal(L.plainText({value:{data:'{"note":"x"}'}}),'{"note":"x"}');
});

test('plainText: named entities, dropped NUL/surrogate/out-of-range code points, collapsed whitespace',()=>{
  assert.equal(L.plainText({value:'Гном&mdash;лесной &laquo;Тест&raquo; &hellip;'}),'Гном—лесной «Тест» …');
  assert.equal(L.plainText({value:'a&#0;b&#xD800;c&#x110000;d'}),'abcd');
  assert.equal(L.plainText({value:'<p>Строка\n   с   пробелами</p>'}),'Строка с пробелами');
  assert.equal(L.plainText({value:'ab&constructor;cd'}),'ab&constructor;cd');
});

test('plainText: missing or odd blocks give an empty string, never undefined',()=>{
  for(const block of [undefined,null,{},{value:null},{value:{}},{value:42},[],'']) {
    const t=L.plainText(block);
    assert.equal(typeof t,'string');assert.equal(t,'');
  }
});

test('num parses tolerant values and returns NaN for the rest',()=>{
  assert.equal(L.num(12),12);assert.equal(L.num('12'),12);assert.equal(L.num('30 футов'),30);
  assert.equal(L.num('+5'),5);assert.equal(L.num('-1'),-1);assert.equal(L.num(' 7 '),7);
  assert.equal(L.num('1к10'),1);assert.equal(L.num('2.5'),2.5);
  for(const v of ['abc','',undefined,null,{},NaN,Infinity]) assert.ok(Number.isNaN(L.num(v)),String(v));
});

test('normalizeLabel lowercases, removes emoji and punctuation, folds ё',()=>{
  assert.equal(L.normalizeLabel('✨ Высший эльф'),'высший эльф');
  assert.equal(L.normalizeLabel('Ёж'),'еж');
  assert.equal(L.normalizeLabel('Гном (лесной)'),'гном лесной');
  assert.equal(L.normalizeLabel('  Моряк   (кок) '),'моряк кок');
  assert.equal(L.normalizeLabel('Полу-эльф'),'полуэльф');
  assert.equal(L.normalizeLabel(undefined),'');
});

test('classLevels parses multiclass strings, separators and level words',()=>{
  assert.deepEqual(L.classLevels('Плут 2 / Воин 1'),[{label:'Плут',level:2},{label:'Воин',level:1}]);
  assert.deepEqual(L.classLevels('Воин'),[{label:'Воин',level:null}]);
  assert.deepEqual(L.classLevels('Жрец 1 / Колдун 2'),[{label:'Жрец',level:1},{label:'Колдун',level:2}]);
  assert.deepEqual(L.classLevels('Воин 2 (Чемпион)'),[{label:'Воин',level:2}]);
  assert.deepEqual(L.classLevels('Воин 2 уровень'),[{label:'Воин',level:2}]);
  assert.deepEqual(L.classLevels('Воин 12'),[{label:'Воин',level:12}]);
  assert.deepEqual(L.classLevels('Плут 1, Воин 1;Жрец 1+Бард 1'),[{label:'Плут',level:1},{label:'Воин',level:1},{label:'Жрец',level:1},{label:'Бард',level:1}]);
  assert.deepEqual(L.classLevels(''),[]);assert.deepEqual(L.classLevels(undefined),[]);
});

test('our own L1 export round-trips through readLssFile and sanitizeWrapper',()=>{
  const w=exportWrapper();
  const e=readOne(w);
  const out=L.sanitizeWrapper(e.wrapper,e.sheet);
  assert.equal(out.data.info.charClass.value,'Воин');
  assert.equal(out.data.weaponsList[0].id,'weapon-creator-0');
  assert.equal(JSON.stringify(out).includes('undefined'),false);
  assert.equal(JSON.stringify(out).includes('NaN'),false);
});

test('real LSS download (barbarian, level 1): recognized fields, edition warning, service keys removed',()=>{
  const r=L.readLssFile(fixture('lss-native-barbarian-1.json'));
  assert.deepEqual(r.errors,[]);
  assert.equal(r.entries.length,1);
  const e=r.entries[0];
  assert.equal(e.support.code,'ok');assert.equal(e.level,1);
  assert.equal(e.classText,'Варвар');assert.equal(e.raceText,'Полурослик (к)');assert.equal(e.backgroundText,'Чужеземец');
  assert.equal(e.name,'Безымянный герой');
  assert.equal(e.warnings[0].code,'edition_mismatch');
  const out=L.sanitizeWrapper(e.wrapper,e.sheet);
  const json=JSON.stringify(out);
  for(const key of ['"_id"','"lastWriterSessionId"','"wizard"','"createdAt"']) assert.equal(json.includes(key),false,key);
  assert.ok(out.data.hiddenName,'hiddenName is user data and must survive');
  assert.ok(out.data.weapons,'legacy weapons survive');
});

test('real LSS download (druid, level 1): cantrip HTML text is readable, keys removed',()=>{
  const r=L.readLssFile(fixture('lss-native-druid-1.json'));
  assert.deepEqual(r.errors,[]);
  assert.equal(r.entries.length,1);
  const e=r.entries[0];
  assert.equal(e.support.code,'ok');assert.equal(e.level,1);
  assert.equal(e.classText,'Друид');assert.equal(e.raceText,'Драконорожд. (Медн.)');
  assert.equal(e.warnings[0].code,'edition_mismatch');
  assert.match(L.plainText(e.sheet.text['spells-level-0']),/Сотворение пламени \[Produce flame\]/);
  const out=L.sanitizeWrapper(e.wrapper,e.sheet);
  const json=JSON.stringify(out);
  for(const key of ['"_id"','"lastWriterSessionId"','"wizard"','"createdAt"']) assert.equal(json.includes(key),false,key);
});

function timed(fn,arg){const t=performance.now();fn(arg);return performance.now()-t;}
test('adversarial 1 MB strings: every parser stays under 500 ms',()=>{
  const N=1000000;
  const cases={
    spaces:'a'+' '.repeat(N)+'x',
    digits:'1'.repeat(N)+'x',
    openTags:'<a'.repeat(N/2),
    openComments:'<!--'.repeat(N/4),
    openScripts:'<script'.repeat(N/7),
    numericEntities:'&#x'.repeat(N/3),
    namedEntities:'&amp;'.repeat(N/5),
    parens:'('.repeat(N)+'1',
    classes:'1 / '.repeat(N/4)+'x',
    blankParagraphs:'<p></p>'.repeat(N/8),
    lineBreaks:'\n'.repeat(N)
  };
  const parsers={plainText:s=>L.plainText({value:s}),htmlToText:L.htmlToText,classLevels:L.classLevels,normalizeLabel:L.normalizeLabel,num:L.num};
  for(const [caseName,s] of Object.entries(cases)) for(const [fnName,fn] of Object.entries(parsers)) {
    const ms=timed(fn,s);
    assert.ok(ms<500,`${fnName} on ${caseName}: ${ms.toFixed(0)} ms`);
  }
});

test('readLssFile on an adversarial file of about 1.5 MB stays under 500 ms',()=>{
  const N=350000;
  const w=exportWrapper();
  const d=sheetOf(w);
  d.name={value:'a'+' '.repeat(N)+'x'};
  d.info.charClass={value:'1 / '.repeat(N/4)+'Воин'};
  d.info.race={value:'<a'.repeat(N/2)};
  d.info.background={value:{data:'<!--'.repeat(N/4)}};
  d.info.charSubclass={value:'<script'.repeat(N/7)};
  w.data=JSON.stringify(d);
  const text=JSON.stringify([w]);
  assert.ok(text.length<=L.MAX_FILE_CHARS);
  let result;
  const ms=timed(()=>{result=L.readLssFile(text);});
  assert.ok(ms<500,`readLssFile: ${ms.toFixed(0)} ms`);
  assert.equal(result.errors.length,0);
  assert.equal(result.entries[0].name.length<=200,true);
});
