const test=require('node:test');
const assert=require('node:assert/strict');
const R=require('../rules'),O=require('../creation-options'),L=require('../levelup-rules'),D=require('../levelup-data'),E=require('../lss-export');
const {create,advance,enter}=require('./fixtures/characters');
const {MERGE_MARKER:MARKER,mergeLssExport:merge,SPELL_IDS}=E;

const CUSTOM='aaaaaaaaaaaaaaaaaaaaaaaa';
const CODES=['str','dex','con','int','wis','cha'];
const CATALOG=new Set(Object.values(SPELL_IDS));
const SKILLS={athletics:'str',acrobatics:'dex','sleight of hand':'dex',stealth:'dex',arcana:'int',history:'int',investigation:'int',nature:'int',religion:'int','animal handling':'wis',insight:'wis',medicine:'wis',perception:'wis',survival:'wis',deception:'cha',intimidation:'cha',performance:'cha',persuasion:'cha'};
const NATIVE={barbarian:require('./fixtures/lss-native-barbarian-1.json'),druid:require('./fixtures/lss-native-druid-1.json')};
const CLASSES=Object.keys(R.CLASSES);
const clone=x=>JSON.parse(JSON.stringify(x));
const tip=text=>({type:'paragraph',content:[{type:'text',text}]});
const texts=block=>block.value.data.content.map(p=>(p.content??[]).map(t=>t.text).join(''));
const normTest=s=>String(s).toLowerCase().replace(/ё/g,'е').replace(/[^\p{L}\p{N}\s]+/gu,' ').replace(/\s+/g,' ').trim();
const parsed=out=>JSON.parse(out[0].data);
/* Native sheets and our exports can be checked for pure cycles only when we know the full export; FULL=1 runs every multiclass pair. */
const FULL_PAIRS=process.env.LSS_MERGE_ALL_PAIRS==='1';

/* Mirrors exportCharacter() in test/lss-schema.test.js; returns the character as well. */
function exportCharacter(c){
 const base=R.finalAbilities(c),abilities=R.finalAbilities(c,O.derive(c,{abilities:base})),ctx={abilities};
 const proficiencies=R.resolveProficiencies(c,O.derive(c,ctx)),creation=O.derive(c,{...ctx,proficiencies});
 const progression=L.derive(c,{...ctx,baseExtras:creation,proficiencies},creation);
 const recalculated=O.derive(c,{...ctx,proficiencies:R.resolveProficiencies(c,progression)});
 const extras=L.derive(c,{...ctx,baseExtras:creation,proficiencies},recalculated);
 const labels={class:L.label(c.class),subclass:extras.subclass?.label},stats=R.derivedStats(c,extras);
 return {c,extras,stats,out:E.buildLssExport(c,labels,stats,extras)};
}
function exportAt(level){
 let c=create('cleric','life');
 for(let l=2;l<=level;l++)c=advance(c,L.subclasses('cleric')[0].id);
 return exportCharacter(c);
}
/* What lss-import's sanitizeWrapper produces from a generated export: data as an object. */
function sanitized(out){
 const w=clone(out[0]);
 return {jsonType:w.jsonType,version:w.version,edition:w.edition,sheetEdition:w.sheetEdition,tags:w.tags,disabledBlocks:w.disabledBlocks,spells:w.spells,data:JSON.parse(w.data)};
}
/* A native LSS sheet as the user downloaded it. Extra wrapper keys are kept on purpose: merge must ignore them. */
function nativeOriginal(name){const raw=clone(NATIVE[name]);return {...raw,data:JSON.parse(raw.data)};}

/* An edited sheet built from a level-1 export: every kind of user data the merge must keep. */
function userSheet(out){
 const sheet=sanitized(out),d=sheet.data;
 d.name={value:'Иван Изменённый'};
 d.info.race={name:'race',label:'раса',value:'Человек (особый)'};
 d.info.playerName={name:'playerName',label:'имя игрока',value:'Вася'};
 d.info.experience={name:'experience',label:'опыт',value:'1200'};
 d.subInfo.height={name:'height',label:'рост',value:'1,8 м'};
 d.subInfo.hobby={name:'hobby',label:'хобби',value:'Резьба по дереву'};
 d.coins={gp:{value:15},sp:{value:3}};
 d.resources={'user-resource-1':{id:'user-resource-1',name:'Вдохновение',value:2,max:3}};
 d.conditions=[{id:'poisoned',label:'Отравлен'}];
 d.attunementsList=[{id:'attunement-1',checked:true,value:'Амулет'}];
 d.vitality['hp-current']={value:d.vitality['hp-max'].value-4};
 d.vitality['hp-temp']={value:5};
 d.vitality.deathFails=1;
 d.vitality.deathSuccesses=2;
 d.weaponsList=[...d.weaponsList,
  {id:'weapon-user-1',name:{value:'Меч +1 (магический)'},mod:{value:'+5'},dmg:{value:'1к8 + 3 рубящий'},isProf:true,ability:'str'},
  {id:'weapon-null',name:{value:'Праща'},ability:null,dmg:{value:'1к4'},isProf:true},
  {id:'weapon-empty',name:{value:''},mod:{value:'+0'},dmg:{value:''}}];
 d.bonuses=[...d.bonuses,{id:'user-bonus-1',label:'Моё',target:'skill.athletics',expr:'1',source:{kind:'user'}}];
 sheet.spells.prepared=[...sheet.spells.prepared,CUSTOM];
 d.text.traits.value.id='hover-toolbar-traits-1';
 d.text.traits.value.data.content.push(tip('Моя личная черта: любит кошек.'));
 d.text.attacks.value.data.content.push(tip('Моё примечание к атаке.'));
 d.text.notes={value:{id:'hover-toolbar-notes-1',data:{type:'doc',content:[tip('Заметка игрока: сундук в таверне.')]}}};
 sheet.disabledBlocks={...sheet.disabledBlocks,'info-left':['race'],_id:'507f1f77bcf86cd799439011'};
 sheet.tags=['Друзья'];
 d.hiddenName='Мой лист';
 d.casterClass={value:'Жрец'};
 d.createdAt='2026-10-15T00:00:00.000Z';
 d.abilities={athletics:{baseStat:'str',name:'athletics',label:'Атлетика',isProf:1}};
 return sheet;
}

function numbersFinite(value){
 if(typeof value==='number')assert.ok(Number.isFinite(value),'non-finite number');
 else if(value&&typeof value==='object')Object.values(value).forEach(numbersFinite);
}
/* Structural check in the spirit of test/lss-schema.test.js. Generated parts are strict; user-owned parts only get type checks
   (names, HTML text of native sheets, homebrew cards, user bonuses and weapon rows). */
function assertMergedSchema(exported,level,{custom=[]}={}){
 assert.equal(exported.length,1);
 const wrapper=clone(exported[0]);
 assert.deepEqual(Object.keys(wrapper).sort(),['data','disabledBlocks','edition','jsonType','linkAccess','rooms','sheetEdition','spells','tags','version']);
 assert.equal(wrapper.jsonType,'character');assert.equal(wrapper.version,'2');assert.equal(wrapper.edition,'2014');assert.equal(wrapper.sheetEdition,'2014');assert.equal(wrapper.linkAccess,'none');
 assert.ok(Array.isArray(wrapper.tags));assert.deepEqual(wrapper.rooms,[]);
 for(const blocks of Object.values(wrapper.disabledBlocks))assert.ok(Array.isArray(blocks));
 assert.equal(wrapper.spells.mode,'cards');assert.equal(wrapper.spells.edition,'2014');
 assert.ok(!/undefined|NaN|\[object Object\]|Infinity/.test(wrapper.data),'leaked JS value');
 const data=JSON.parse(wrapper.data);
 numbersFinite(data);
 const customIds=new Set(custom), known=id=>CATALOG.has(id)||customIds.has(id);
 const available=new Set(data.spellsInfo.available?.spells??[]);
 for(const key of ['prepared','book','slotless']){
  assert.equal(new Set(wrapper.spells[key]).size,wrapper.spells[key].length,'duplicate '+key);
  for(const id of wrapper.spells[key]){assert.ok(known(id),key+' '+id);if(CATALOG.has(id))assert.ok(available.has(id),'catalogue card outside available '+id);}
 }
 const granted=new Set();
 for(const grant of wrapper.spells.granted){assert.deepEqual(Object.keys(grant).sort(),['id','source']);assert.ok(!granted.has(grant.id));granted.add(grant.id);assert.ok(known(grant.id));if(CATALOG.has(grant.id))assert.ok(available.has(grant.id));}

 // Strict: generated mechanics.
 assert.equal(data.jsonType,'character');assert.equal(data.template,'default');
 assert.deepEqual(Object.keys(data.info).sort(),['alignment','background','charClass','charSubclass','experience','level','playerName','race']);
 assert.equal(data.info.level.value,level);
 for(const key of ['charClass','charSubclass']){assert.equal(data.info[key].name,key);assert.equal(typeof data.info[key].value,'string');}
 assert.ok(data.info.charClass.value.length);
 // Loose: user-owned fields.
 for(const key of ['race','background','alignment','playerName','experience'])assert.ok(['string','number'].includes(typeof data.info[key].value),'info.'+key);
 assert.equal(typeof data.name.value,'string');assert.ok(data.name.value.length);
 for(const [key,entry] of Object.entries(data.subInfo)){assert.equal(entry.name,key);assert.ok(Object.hasOwn(entry,'value'));}
 assert.deepEqual(Object.keys(data.stats),CODES);assert.deepEqual(Object.keys(data.saves),CODES);
 for(const code of CODES){assert.ok(Number.isInteger(data.stats[code].score)&&data.stats[code].score>=1&&data.stats[code].score<=30);assert.equal(data.saves[code].name,code);assert.equal(typeof data.saves[code].isProf,'boolean');}
 assert.deepEqual(Object.keys(data.skills).sort(),Object.keys(SKILLS).sort());
 for(const [key,skill] of Object.entries(data.skills)){assert.equal(skill.name,key);assert.equal(skill.baseStat,SKILLS[key]);assert.ok([0,1,2].includes(skill.isProf));}
 const v=data.vitality,hpMax=v['hp-max'].value;
 assert.ok(Number.isInteger(hpMax)&&hpMax>=1);
 assert.ok(Number.isInteger(v['hp-current'].value)&&v['hp-current'].value>=0&&v['hp-current'].value<=hpMax);
 assert.ok(Number.isFinite(v.ac.value)&&Number.isFinite(v.speed.value));
 assert.equal(v['hp-dice-current'].value,level);
 assert.ok(['d6','d8','d10','d12','multiclass'].includes(v['hit-die'].value));
 assert.equal(typeof v['hp-temp'].value,'number');
 for(const map of [data.spells,data.spellsPact])for(const [key,value] of Object.entries(map)){assert.match(key,/^slots-[1-9]$/);assert.ok(Number.isInteger(value.value));}
 for(const field of ['base','save','mod'])assert.equal(data.spellsInfo[field].name,field);
 for(const [id,code] of Object.entries(data.spellsInfo.abilities)){assert.ok(available.has(id)||customIds.has(id),'ability for '+id);assert.ok(CODES.includes(code));}
 // Weapons: our rows strict, user rows typed; ids unique for all rows.
 const weaponIds=new Set();
 for(const row of data.weaponsList){
  assert.ok(!weaponIds.has(row.id),'duplicate weapon id '+row.id);weaponIds.add(row.id);
  if(/^weapon-creator-/.test(row.id)){assert.ok(row.name.value.length,row.id);assert.equal(typeof row.isProf,'boolean');assert.ok(CODES.includes(row.ability));for(const key of ['dmg','dmgType','notes'])assert.equal(typeof row[key].value,'string');}
 }
 const ownBonusIds=new Set();
 for(const bonus of data.bonuses){
  assert.ok(!ownBonusIds.has(bonus.id),'duplicate bonus '+bonus.id);ownBonusIds.add(bonus.id);
  assert.match(String(bonus.expr),/^-?\d+$/);
  const weapon=/^weapon\.(.+)\.attack$/.exec(bonus.target),skill=/^skill\.(.+)$/.exec(bonus.target);
  if(bonus.id.startsWith('bonus-creator-')){
   if(skill){assert.ok(Object.hasOwn(SKILLS,skill[1]));
    if(bonus.id.startsWith('bonus-creator-jack-')){assert.equal(data.skills[skill[1]].isProf,0);assert.equal(Number(bonus.expr),Math.floor(data.proficiency/2));}
    else {assert.equal(bonus.id,'bonus-creator-fey-'+skill[1]);assert.equal(data.skills[skill[1]].baseStat,'cha');assert.equal(Number(bonus.expr),Math.max(1,Math.floor((data.stats.wis.score-10)/2)));}
   } else assert.ok(weapon&&weaponIds.has(weapon[1]),'creator bonus without a weapon row: '+bonus.target);
  } else assert.equal(typeof bonus.target,'string');
  assert.deepEqual(bonus.source,{kind:'user'});
 }
 // Text: generated blocks and TipTap blocks are documents; native HTML strings are kept as LSS wrote them.
 for(const [key,block] of Object.entries(data.text)){
  if(typeof block.value==='string'||typeof block.value?.data==='string')continue;
  assert.equal(block.value.data.type,'doc',key);
  for(const node of block.value.data.content){assert.equal(typeof node.type,'string',key);for(const text of node.content??[])assert.equal(typeof text.text,'string',key);}
 }
 for(const [coin,value] of Object.entries(data.coins))assert.ok(['cp','sp','gp','ep','pp'].includes(coin)&&Number.isFinite(value.value)&&value.value>=0);
 assert.equal(typeof data.resources,'object');assert.ok(Array.isArray(data.conditions));assert.ok(Array.isArray(data.attunementsList));
 return data;
}

/* Invariants of a merged export whose original is the previous export (no user edits): no marker, weapon ids are unique,
   every weapon bonus points at a row with the name of the generated weapon it was made for. */
function assertPureStep(merged,generated,label){
 const out=parsed(merged),gen=parsed(generated);
 for(const key of ['prof','traits','attacks']){
  assert.ok(!texts(out.text[key]).includes(MARKER),label+': marker in '+key+': '+JSON.stringify(texts(out.text[key]).slice(texts(out.text[key]).indexOf(MARKER)+1)));
 }
 const genNames=new Map(gen.weaponsList.map(row=>[row.id,normTest(row.name.value)]));
 for(const row of gen.weaponsList)assert.ok(out.weaponsList.some(r=>normTest(r.name.value)===normTest(row.name.value)),label+': weapon '+row.name.value+' missing');
 const rowsById=new Map(out.weaponsList.map(row=>[row.id,row]));
 const genBonus=new Map(gen.bonuses.map(b=>[b.id,b]));
 for(const bonus of out.bonuses){
  const target=/^weapon\.(.+)\.attack$/.exec(bonus.target);
  if(!target)continue;
  const row=rowsById.get(target[1]);
  assert.ok(row,label+': dangling bonus '+bonus.target);
  const made=genBonus.get(bonus.id);
  assert.ok(made,label+': bonus '+bonus.id+' not in the generated export');
  assert.equal(normTest(row.name.value),genNames.get(/^weapon\.(.+)\.attack$/.exec(made.target)[1]),label+': bonus '+bonus.id+' points at another weapon');
 }
}
/* A pure chain: export of each level merged with the merged previous level (as the user would do on every level-up). */
function pureChain(exports,label){
 let previous=exports[0];
 for(let k=1;k<exports.length;k++){
  const merged=merge(exports[k],sanitized(previous));
  assertPureStep(merged,exports[k],label+' L'+(k+1));
  assertMergedSchema(merged,k+1);
  previous=merged;
 }
 return previous;
}

test('null or undefined original returns the generated wrapper unchanged', () => {
 const gen=exportAt(1).out;
 for(const original of [null,undefined]){const out=merge(gen,original);assert.deepEqual(out,gen);assert.notEqual(out,gen);assert.notEqual(out[0],gen[0]);}
});

test('a missing generated export gives back the generated copy, not a crash', () => {
 assert.deepEqual(merge([],sanitized(exportAt(1).out)),[]);
 assert.deepEqual(merge(undefined,sanitized(exportAt(1).out)),[]);
});

test('inputs are not mutated and data given as a JSON string gives the same result', () => {
 const gen=exportAt(1).out, sheet=userSheet(gen.map(clone)), genBefore=JSON.stringify(gen), sheetBefore=JSON.stringify(sheet);
 const fromObject=merge(gen,sheet), fromString=merge(gen,{...sheet,data:JSON.stringify(sheet.data)});
 assert.equal(JSON.stringify(gen),genBefore);assert.equal(JSON.stringify(sheet),sheetBefore);
 assert.deepEqual(fromString,fromObject);
});

test('a level-up keeps the user data (incl. resources, conditions, death saves, union of subInfo) and takes mechanics from the new export', () => {
 const first=exportAt(1), second=exportAt(2), sheet=userSheet(first.out);
 const out=merge(second.out,sheet), w=out[0], d=parsed(out), gd=parsed(second.out);
 assert.equal(out.length,1);
 for(const key of ['proficiency','stats','saves','skills','spellsInfo','spells','spellsPact'])assert.deepEqual(d[key],gd[key],key);
 assert.equal(d.info.level.value,2);
 assert.deepEqual(d.info.charClass,gd.info.charClass);
 assert.deepEqual(d.info.charSubclass,gd.info.charSubclass);
 assert.equal(d.vitality['hp-max'].value,gd.vitality['hp-max'].value);
 assert.equal(d.vitality['hit-die'].value,gd.vitality['hit-die'].value);
 assert.equal(d.vitality['hp-dice-current'].value,2);
 // User data.
 assert.deepEqual(d.name,{value:'Иван Изменённый'});
 assert.equal(d.info.race.value,'Человек (особый)');
 assert.equal(d.info.playerName.value,'Вася');
 assert.equal(d.info.experience.value,'1200');
 assert.equal(d.subInfo.height.value,'1,8 м');
 assert.equal(d.subInfo.hobby.value,'Резьба по дереву');
 assert.deepEqual(d.coins,sheet.data.coins);
 assert.deepEqual(d.resources,sheet.data.resources);
 assert.deepEqual(d.conditions,sheet.data.conditions);
 assert.deepEqual(d.attunementsList,sheet.data.attunementsList);
 assert.deepEqual(d.vitality['hp-temp'],{value:5});
 // The merged hero has HP above 0, so the death saves are reset (see the death-state test for the dying case).
assert.equal(d.vitality.isDying,false);assert.equal(d.vitality.deathFails,0);assert.equal(d.vitality.deathSuccesses,0);
 assert.deepEqual(d.text.notes,sheet.data.text.notes);
 assert.equal(d.hiddenName,'Мой лист');
 assert.deepEqual(d.casterClass,{value:'Жрец'});
 assert.deepEqual(w.disabledBlocks['info-left'],['race']);
 assert.deepEqual(w.tags,['Друзья']);
 assert.equal('createdAt' in d,false);
 assert.equal('abilities' in d,false);
 // Service keys are gone.
 const serialized=JSON.stringify(w);
 assert.equal(serialized.includes('"_id"'),false);
 assert.equal(serialized.includes('lastWriterSessionId'),false);
 assert.equal(serialized.includes('"wizard"'),false);
 assert.deepEqual(w.rooms,[]);assert.equal(w.linkAccess,'none');
 // Weapons: user rows verbatim first, generated rows whose names are new afterwards.
 const sheetNames=new Set(sheet.data.weaponsList.map(row=>normTest(row.name.value)));
 const added=d.weaponsList.slice(sheet.data.weaponsList.length);
 assert.deepEqual(d.weaponsList.slice(0,sheet.data.weaponsList.length),sheet.data.weaponsList);
 assert.deepEqual(added.map(row=>row.name.value),gd.weaponsList.filter(row=>!sheetNames.has(normTest(row.name.value))).map(row=>row.name.value));
 // Bonuses: the user's bonus stays; creator bonuses are the new export's.
 assert.deepEqual(d.bonuses.filter(b=>!b.id.startsWith('bonus-creator-')),[sheet.data.bonuses.find(b=>b.id==='user-bonus-1')]);
 assert.deepEqual(d.bonuses.filter(b=>b.id.startsWith('bonus-creator-')),gd.bonuses.filter(b=>b.id.startsWith('bonus-creator-')).map(b=>d.bonuses.find(x=>x.id===b.id)));
 // Custom homebrew card stays in the prepared list after the generated cards.
 assert.deepEqual(w.spells.prepared,[...second.out[0].spells.prepared,CUSTOM]);
 assert.deepEqual(w.spells.book,second.out[0].spells.book);
 // Hit points: generated maximum, current moved by the same delta.
 assert.equal(d.vitality['hp-current'].value,gd.vitality['hp-max'].value-4);
 // Own paragraphs follow the marker; generated paragraphs are not repeated.
 const traits=texts(d.text.traits),mark=traits.indexOf(MARKER);
 assert.ok(mark>0);
 assert.deepEqual(traits.slice(0,mark),texts(gd.text.traits));
 assert.ok(traits.includes('Моя личная черта: любит кошек.'));
 assert.equal(traits.filter(t=>t.startsWith('Пассивное Восприятие')).length,1);
 assert.equal(texts(d.text.traits).filter(t=>t===MARKER).length,1);
 assert.ok(texts(d.text.attacks).includes('Моё примечание к атаке.'));
 assertMergedSchema(out,2,{custom:[CUSTOM]});
 assertPureStep(merge(second.out,sanitized(second.out)),second.out,'pure level 2');
 assertMergedSchema(merge(second.out,sanitized(second.out)),2);
});

test('hp-current moves by the change of hp-max, is clamped to 0..max, reads numeric strings and is an integer', () => {
 const first=exportAt(1).out, second=exportAt(2).out, m1=parsed(first).vitality['hp-max'].value, m2=parsed(second).vitality['hp-max'].value;
 assert.ok(m2>m1);
 const currentOf=(value,max=m1)=>{const sheet=sanitized(first);sheet.data.vitality['hp-current']={value};sheet.data.vitality['hp-max']={value:max};return parsed(merge(second,sheet)).vitality['hp-current'].value;};
 assert.equal(currentOf(m1-4),m2-4);
 assert.equal(currentOf(String(m1-4),String(m1)),m2-4);
 assert.equal(currentOf(m1),m2);
 assert.equal(currentOf(m1+1000),m2);
 assert.equal(currentOf(-100),0);
 assert.equal(currentOf('3.5',String(m1)),Math.floor(3.5+m2-m1));
});

test('missing or unparseable hp-current falls back to the generated value', () => {
 const first=exportAt(1).out, second=exportAt(2).out, generatedCurrent=parsed(second).vitality['hp-current'].value;
 const noCurrent=sanitized(first);delete noCurrent.data.vitality['hp-current'];
 assert.equal(parsed(merge(second,noCurrent)).vitality['hp-current'].value,generatedCurrent);
 const junk=sanitized(first);junk.data.vitality['hp-current']={value:'много'};
 assert.equal(parsed(merge(second,junk)).vitality['hp-current'].value,generatedCurrent);
 assert.equal(parsed(merge(second,nativeOriginal('barbarian'))).vitality['hp-current'].value,generatedCurrent);
});

test('weapons: original rows stay verbatim and generated rows are added only for new names', () => {
 const base=exportAt(1);
 const attacks=[
  {id:'longsword',label:'Длинный меч',damage:'1d8+3',type:'slashing',ability:'str',proficient:true,attackBonus:5},
  {id:'light-crossbow',label:'Лёгкий арбалет',damage:'1d8+1',type:'piercing',ability:'dex',proficient:true,attackBonus:4},
  {id:'shield-bash',label:'Щитовой удар',damage:'1d4',type:'bludgeoning',ability:'str',proficient:false,attackBonus:2}];
 const gen=E.buildLssExport(base.c,{class:'Жрец'},base.stats,{...base.extras,attacks});
 const sheet=sanitized(gen);
 sheet.data.weaponsList=[
  {id:'weapon-creator-0',name:{value:'Длинный меч*'},mod:{value:'+4'},dmg:{value:'1к10 + 2 рубящ.'},dmgType:{value:'рубящий'},notes:{value:''},ability:'str',isProf:true},
  {id:'weapon-1',name:{value:'легкий арбалет**'},mod:{value:'+3'},dmg:{value:'1к8 колющий'},ability:'dex',isProf:true},
  {id:'weapon-null',name:{value:'Праща'},ability:null,dmg:{value:'1к4'},isProf:true},
  {id:'weapon-empty',name:{value:''},mod:{value:'+0'},dmg:{value:''}}];
 const d=parsed(merge(gen,sheet));
 assert.deepEqual(d.weaponsList.slice(0,4),sheet.data.weaponsList);
 assert.deepEqual(d.weaponsList.slice(4).map(row=>row.name.value),['Щитовой удар']);
 assert.equal(d.weaponsList.length,5);
 assertMergedSchema(merge(gen,sheet),1);
});

test('weapon ids: a generated row whose id a user row holds gets a fresh id and its bonus follows it', () => {
 const base=exportAt(1);
 const weapon=(id,label,attackBonus)=>({id,label,damage:'1d8+3',type:'slashing',ability:'str',proficient:true,attackBonus});
 const A=weapon('longsword','Длинный меч',6), B=weapon('light-crossbow','Лёгкий арбалет',8), C=weapon('dagger','Кинжал',9);
 const make=attacks=>E.buildLssExport(base.c,{class:'Воин'},base.stats,{...base.extras,attacks});
 const gen=make([A,B]);
 // Rename: the user renamed our second row on the site; the generated 'Лёгкий арбалет' must not reuse its id.
 const renamed=sanitized(gen);renamed.data.weaponsList[1].name.value='Мой арбалет';
 const renamedOut=parsed(merge(gen,renamed));
 const crossbow=renamedOut.weaponsList.find(r=>r.name.value==='Лёгкий арбалет');
 assert.ok(crossbow&&crossbow.id!=='weapon-creator-1');
 assert.equal(renamedOut.weaponsList.find(r=>r.name.value==='Мой арбалет').id,'weapon-creator-1');
 assert.ok(renamedOut.bonuses.some(b=>b.target===`weapon.${crossbow.id}.attack`));
 // Shift: a new row inserted in front of ours renumbers the generated rows; bonuses still reach the right names.
 const shifted=parsed(merge(make([C,A,B]),sanitized(make([A,B]))));
 const names=new Map(shifted.weaponsList.map(r=>[r.id,r.name.value]));
 assert.equal(shifted.weaponsList.length,3);
 assert.deepEqual(shifted.bonuses.filter(b=>b.id.startsWith('bonus-creator-')).map(b=>[b.id,names.get(b.target.split('.')[1])]),[
  ['bonus-creator-attack-0','Кинжал'],['bonus-creator-attack-1','Длинный меч'],['bonus-creator-attack-2','Лёгкий арбалет']]);
 assertPureStep(merge(make([C,A,B]),sanitized(make([A,B]))),make([C,A,B]),'shift');
 // A native LSS row with the same name keeps its own modifier: the generated row and its bonus are dropped.
 const native=sanitized(gen);native.data.weaponsList=[{id:'weapon-0',name:{value:'Лёгкий арбалет*'},mod:{value:'+4'},dmg:{value:'1к8'},isProf:true}];
 const nativeOut=parsed(merge(make([B]),native));
 assert.deepEqual(nativeOut.weaponsList.map(r=>r.id),['weapon-0']);
 assert.equal(nativeOut.bonuses.filter(b=>b.target.startsWith('weapon.')).length,0);
 // Deleted on the site: re-added with its generated id.
 const deleted=sanitized(gen);deleted.data.weaponsList=deleted.data.weaponsList.slice(0,1);
 assert.deepEqual(parsed(merge(gen,deleted)).weaponsList.map(r=>r.name.value),['Длинный меч','Лёгкий арбалет']);
});

test('bonuses: user bonuses are kept and creator bonuses are replaced by the new export', () => {
 const old=exportAt(1), base=old.c;
 const attacksWith=bonus=>[{id:'longsword',label:'Длинный меч',damage:'1d8+3',type:'slashing',ability:'str',proficient:true,attackBonus:bonus}];
 const oldGen=E.buildLssExport(base,{class:'Жрец'},old.stats,{...old.extras,attacks:attacksWith(2)});
 const newGen=E.buildLssExport(base,{class:'Жрец'},old.stats,{...old.extras,attacks:attacksWith(9)});
 const sheet=sanitized(oldGen);
 sheet.data.bonuses=[...sheet.data.bonuses,{id:'user-bonus-1',label:'Моё',target:'skill.athletics',expr:'1',source:{kind:'user'}}];
 const d=parsed(merge(newGen,sheet)), creator=b=>b.id.startsWith('bonus-creator-');
 assert.deepEqual(d.bonuses.filter(creator),parsed(newGen).bonuses.filter(creator));
 assert.equal(d.bonuses.filter(b=>b.id==='user-bonus-1').length,1);
 assert.equal(new Set(d.bonuses.map(b=>b.id)).size,d.bonuses.length);
});

test('traits: user paragraphs follow a marker, generated paragraphs are not repeated', () => {
 const gen=exportAt(1).out, sheet=userSheet(gen);
 const d=parsed(merge(gen,sheet)), generated=texts(parsed(gen).text.traits), generatedAttacks=texts(parsed(gen).text.attacks);
 assert.deepEqual(texts(d.text.traits),[...generated,MARKER,'Моя личная черта: любит кошек.']);
 assert.deepEqual(texts(d.text.attacks),[...generatedAttacks,MARKER,'Моё примечание к атаке.']);
 assert.equal(texts(d.text.traits).filter(t=>t.startsWith('Пассивное Восприятие')).length,1);
});

test('stale generated lines from the previous level (Умение, spell, resource, Классы) do not come back as the user text', () => {
 const gen=exportAt(1).out, genData=parsed(gen);
 const stale=[
  'Умение 1-го уровня: Второе дыхание. Бонусным действием восстановите хиты.',
  'Сотворение пламени (заговор; Жрец; заговор; спасбросок ЛОВ, Сл 13, 1к8 излучением)',
  'Божественный канал: 1; восстановление после короткого или долгого отдыха.',
  'Классы: Жрец 1.',
  'Ячейки: 2 × 1-й круг (долгий отдых).',
  'Мистический заряд: атака +4, урон 1к10+2 силовым полем.',
  'Проверьте КД: в листе LSS 99, по расчёту мастера 15.'
 ];
 const sheet=sanitized(gen);
 sheet.data.text.traits={value:{data:{type:'doc',content:stale.map(tip)}}};
 sheet.data.text.attacks={value:{data:{type:'doc',content:stale.map(tip)}}};
 sheet.data.text.prof={value:{data:{type:'doc',content:stale.map(tip)}}};
 const merged=merge(gen,sheet);
 for(const key of ['prof','traits','attacks'])assert.equal(texts(parsed(merged).text[key]).includes(MARKER),false,key);
 assert.deepEqual(texts(parsed(merged).text.traits),texts(genData.text.traits));
 // A user line that looks like none of these shapes is still kept.
 sheet.data.text.traits.value.data.content.push(tip('Мой кодекс: не лгать.'));
 assert.ok(texts(parsed(merge(gen,sheet)).text.traits).slice(-2).join('|')===[MARKER,'Мой кодекс: не лгать.'].join('|'));
});

test('native HTML prof: a line such as «Доспехи: …» is generated text, the feature line after it is kept', () => {
 const gen=exportAt(1).out;
 const barbarianProf=texts(parsed(merge(gen,nativeOriginal('barbarian'))).text.prof);
 const own=barbarianProf.slice(barbarianProf.indexOf(MARKER)+1);
 assert.equal(own.some(t=>t.startsWith('Доспехи:')),false);
 assert.ok(own.some(t=>t.startsWith('Проворство полуросликов. Вы можете проходить')));
});

test('native HTML text blocks become plain TipTap paragraphs without markup', () => {
 const gen=exportAt(1).out, genData=parsed(gen);
 const barbarian=parsed(merge(gen,nativeOriginal('barbarian')));
 const traitsJson=JSON.stringify(barbarian.text.traits);
 assert.equal(/[<>]|&amp;|&nbsp;|&lt;/.test(traitsJson),false,traitsJson);
 // The native sheet's speed (25 ft) differs from ours, so the speed check line sits before the marker.
 const barbarianTraits=texts(barbarian.text.traits);
 assert.ok(barbarianTraits.at(-4).startsWith('Проверьте скорость: в листе LSS 25 футов'),barbarianTraits.at(-4));
 assert.deepEqual(barbarianTraits.slice(-3),[MARKER,'Тестовый блок traits. Первая строка barbarian.','Вторая строка & 1к6 + 2.']);
 assert.equal(barbarianTraits.length,texts(genData.text.traits).length+4);
 const druid=parsed(merge(gen,nativeOriginal('druid')));
 const profTexts=texts(druid.text.prof),mark=profTexts.indexOf(MARKER),own=profTexts.slice(mark+1);
 assert.ok(mark>=0);
 assert.ok(own.includes('Сопротивление урону. Благодаря вашему'));
 assert.ok(own.includes('наследию драконов вы получаете сопротивление к урону кислотой.'));
 const generatedLabels=texts(genData.text.prof).filter(t=>t.includes(':')).map(t=>t.split(':')[0]);
 assert.equal(own.filter(t=>t.includes(':')&&generatedLabels.includes(t.split(':')[0])).length,0);
});

test('TipTap extraction: inline nodes join into one paragraph, headings and lists produce lines', () => {
 const gen=exportAt(1).out, genCount=texts(parsed(gen).text.traits).length;
 const withTraits=content=>{const s=sanitized(gen);s.data.text.traits={value:{data:{type:'doc',content}}};return texts(parsed(merge(gen,s)).text.traits).slice(genCount);};
 assert.deepEqual(withTraits([{type:'paragraph',content:[{type:'text',text:'Урон '},{type:'roller',attrs:{v:'1к6'},content:[{type:'text',text:'1к6'}]},{type:'text',text:' колющий'}]}]),[MARKER,'Урон 1к6 колющий']);
 assert.deepEqual(withTraits([{type:'paragraph',content:[{type:'text',text:'Друг '},{type:'mention',attrs:{label:'Боб'}},{type:'text',text:' рядом'}]}]),[MARKER,'Друг Боб рядом']);
 assert.deepEqual(withTraits([{type:'heading',attrs:{level:2},content:[{type:'text',text:'Заголовок'}]},{type:'bulletList',content:[{type:'listItem',content:[{type:'paragraph',content:[{type:'text',text:'первый'}]}]},{type:'listItem',content:[{type:'paragraph',content:[{type:'text',text:'второй'}]}]}]}]),[MARKER,'Заголовок','первый','второй']);
});

test('HTML: block-level closers split lines, entities are decoded once, no tags or raw entities remain', () => {
 const gen=exportAt(1).out, genCount=texts(parsed(gen).text.traits).length;
 const withTraits=html=>{const s=sanitized(gen);s.data.text.traits={value:{data:html}};return texts(parsed(merge(gen,s)).text.traits).slice(genCount+1);};
 assert.deepEqual(withTraits('<h2>Заголовок</h2><ul><li>один</li><li>два</li></ul><p>Цитата &laquo;да&raquo; &#8212; &mdash; &#x41;&amp;lt; &hellip;</p>'),
  ['Заголовок','один','два','Цитата «да» — — A&lt; …']);
 assert.deepEqual(withTraits('<blockquote>цит</blockquote><pre>код &#0; &#xD800; &bogus;</pre>'),['цит','код &#0; &#xD800; &bogus;']);
 const big='<p>'+'<b>x</b> '.repeat(60000)+'</p>';
 const started=Date.now();withTraits(big);assert.ok(Date.now()-started<1500,'HTML parse too slow');
});

test('idempotence: merging again with the merged sheet gives the same export, with one marker and the same paragraphs', () => {
 const first=exportAt(1).out, second=exportAt(2).out;
 for(const sheet of [userSheet(first),nativeOriginal('barbarian'),nativeOriginal('druid')]){
  const once=merge(second,sheet);
  const again={...clone(once[0]),data:JSON.parse(once[0].data)};
  const twice=merge(second,again);
  assert.equal(JSON.stringify(twice),JSON.stringify(once));
  const d=parsed(twice);
  for(const key of ['prof','traits','attacks'])assert.ok(texts(d.text[key]).filter(t=>t===MARKER).length<=1,key);
 }
 const once=merge(second,userSheet(first)), again=merge(second,{...clone(once[0]),data:JSON.parse(once[0].data)}), third=merge(second,{...clone(again[0]),data:JSON.parse(again[0].data)});
 assert.equal(JSON.stringify(third),JSON.stringify(again));
 assert.equal(texts(parsed(third).text.traits).filter(t=>t===MARKER).length,1);
 assert.equal(texts(parsed(third).text.traits).filter(t=>t==='Моя личная черта: любит кошек.').length,1);
});

test('custom card ids: kept for 2014 sheets with their casting ability, dropped for any non-2014 edition', () => {
 const gen=exportAt(1).out;
 const sheet=sanitized(gen);
 sheet.data.spellsInfo.abilities={...sheet.data.spellsInfo.abilities,[CUSTOM]:'wis'};
 sheet.spells={...sheet.spells,prepared:[...sheet.spells.prepared,CUSTOM],granted:[...sheet.spells.granted,{id:CUSTOM,source:'manual'}]};
 const kept=merge(gen,sheet);
 assert.ok(kept[0].spells.prepared.includes(CUSTOM));
 assert.deepEqual(kept[0].spells.granted.at(-1),{id:CUSTOM,source:'manual'});
 assert.equal(parsed(kept).spellsInfo.abilities[CUSTOM],'wis');
 assertMergedSchema(kept,1,{custom:[CUSTOM]});
 const native=nativeOriginal('druid');
 native.spells={...native.spells,prepared:[CUSTOM],granted:[{id:CUSTOM,source:'manual'}]};
 assert.equal(JSON.stringify(merge(gen,native)[0].spells).includes(CUSTOM),false);
 assert.ok(merge(gen,{...native,edition:'2014',sheetEdition:'2014',spells:{...native.spells,edition:'2014'}})[0].spells.prepared.includes(CUSTOM));
 // Any edition marker that is not 2014 blocks the cards, even when the sheetEdition says 2014.
 assert.equal(JSON.stringify(merge(gen,{...sanitized(gen),sheetEdition:'2014',edition:'2014',spells:{...sanitized(gen).spells,edition:'2024',prepared:[CUSTOM]}})[0].spells).includes(CUSTOM),false);
 assert.equal(JSON.stringify(merge(gen,{...sanitized(gen),sheetEdition:'2024',spells:{...sanitized(gen).spells,prepared:[CUSTOM]}})[0].spells).includes(CUSTOM),false);
});

test('native LSS sheets: legacy abilities, timestamps and service keys are removed, user text is kept, the output is a valid sheet', () => {
 const gen=exportAt(1).out, genData=parsed(gen);
 const rawBarbarian=JSON.parse(NATIVE.barbarian.data), rawDruid=JSON.parse(NATIVE.druid.data);
 const b=merge(gen,nativeOriginal('barbarian')), bd=parsed(b);
 assert.equal(bd.name.value,genData.name.value);
 assert.equal(bd.info.race.value,'Полурослик (к)');
 assert.equal(bd.info.background.value,'Чужеземец');
 assert.equal(bd.info.alignment.value,'ХД');
 assert.equal(bd.info.charClass.value,genData.info.charClass.value);
 assert.equal(bd.hiddenName,'Тестовый Лист_000000000');
 assert.equal('createdAt' in bd,false);
 assert.equal('abilities' in bd,false);
 assert.deepEqual(bd.weaponsList.slice(0,2),rawBarbarian.weaponsList);
 assert.deepEqual(bd.text.personality,rawBarbarian.text.personality);
 assert.deepEqual(bd.text.quests,rawBarbarian.text.quests);
 // The native sheet is dying, but the merged hero has HP above 0: death state is reset.
assert.equal(bd.vitality.isDying,false);assert.ok(bd.vitality['hp-current'].value>0);
 assert.deepEqual(b[0].disabledBlocks,gen[0].disabledBlocks);
 assert.equal(JSON.stringify(b).includes('"_id"'),false);
 assert.equal(JSON.stringify(b).includes('lastWriterSessionId'),false);
 assert.equal(JSON.stringify(b).includes('"wizard"'),false);
 assertMergedSchema(b,1);
 const dr=merge(gen,nativeOriginal('druid')), dd=parsed(dr);
 assert.deepEqual(dd.casterClass,{value:'Друид'});
 assert.deepEqual(dd.text['spells-level-0'],rawDruid.text['spells-level-0']);
 assert.deepEqual(dd.text.background,rawDruid.text.background);
 assert.deepEqual(dd.weaponsList.slice(0,3),rawDruid.weaponsList);
 assert.equal('abilities' in dd,false);
 assert.equal(JSON.stringify(dr).includes('"_id"'),false);
 assert.equal(dr[0].edition,'2014');assert.equal(dr[0].sheetEdition,'2014');
 assertMergedSchema(dr,1);
});

test('type checks: wrong-typed user fields fall back to generated values or are dropped', () => {
 const gen=exportAt(1).out, genData=parsed(gen);
 const s=sanitized(gen);
 s.data.coins='abc';
 s.data.resources=[1];
 s.data.conditions={};
 s.data.attunementsList='x';
 s.data.weaponsList=[null,7,{id:'weapon-user-odd',name:'Строка'}];
 s.data.bonuses=[null,'bonus-creator-zz',{id:'user-bonus-2',target:'skill.stealth',expr:'2',source:{kind:'user'}}];
 s.data.subInfo.height='строка';
 s.data.text.notes=null;
 s.data.info=null;
 s.data.vitality=null;
 const d=parsed(merge(gen,s));
 assert.deepEqual(d.coins,genData.coins);
 assert.deepEqual(d.resources,genData.resources);
 assert.deepEqual(d.conditions,[]);
 assert.deepEqual(d.attunementsList,[]);
 assert.deepEqual(d.weaponsList.filter(row=>row.id==='weapon-user-odd').length,1);
 assert.equal(d.weaponsList.some(row=>row===null||typeof row!=='object'),false);
 assert.deepEqual(d.bonuses.filter(b=>!b.id.startsWith('bonus-creator-')),[{id:'user-bonus-2',target:'skill.stealth',expr:'2',source:{kind:'user'}}]);
 assert.deepEqual(d.subInfo.height,genData.subInfo.height);
 assert.equal('notes' in d.text,false);
 assert.deepEqual(d.info,genData.info);
 assert.deepEqual(d.vitality['hp-max'],genData.vitality['hp-max']);
 assertMergedSchema(merge(gen,s),1);
});

test('armour class and speed: the sheet value is kept as a number; a difference from our calculation is reported before the marker', () => {
 const gen=exportAt(1).out, genData=parsed(gen), genAc=genData.vitality.ac.value, genSpeed=genData.vitality.speed.value;
 const s=sanitized(gen);s.data.vitality.ac={value:String(genAc+2)};s.data.vitality.speed={value:'35 футов'};
 s.data.text.traits.value.data.content.push(tip('Мой трюк: что-то своё.'));
 const once=merge(gen,s), d=parsed(once), traits=texts(d.text.traits);
 assert.equal(d.vitality.ac.value,genAc+2);
 assert.equal(d.vitality.speed.value,35);
 assert.ok(traits.includes(`Проверьте КД: в листе LSS ${genAc+2}, по расчёту мастера ${genAc}.`));
 assert.ok(traits.includes(`Проверьте скорость: в листе LSS 35 футов, по расчёту мастера ${genSpeed} футов.`));
 const mark=traits.indexOf(MARKER);
 assert.ok(mark>traits.indexOf(`Проверьте КД: в листе LSS ${genAc+2}, по расчёту мастера ${genAc}.`));
 assert.equal(traits.at(-1),'Мой трюк: что-то своё.');
 // The next cycle regenerates the check line once; nothing piles up.
 const twice=parsed(merge(gen,{...clone(once[0]),data:JSON.parse(once[0].data)})), traits2=texts(twice.text.traits);
 assert.equal(traits2.filter(t=>t.startsWith('Проверьте КД')).length,1);
 assert.equal(traits2.filter(t=>t.startsWith('Проверьте скорость')).length,1);
 assert.equal(traits2.filter(t=>t===MARKER).length,1);
 assertMergedSchema(once,1);
 // Equal values give no report.
 const same=sanitized(gen);same.data.vitality.ac={value:String(genAc)};
 assert.equal(texts(parsed(merge(gen,same)).text.traits).some(t=>t.startsWith('Проверьте КД')),false);
});

test('prototype pollution keys in the original are ignored at every level', () => {
 const gen=exportAt(1).out;
 const evil=JSON.parse('{"__proto__":{"polluted":1},"constructor":{"prototype":{"p":1}},"text":{"__proto__":{"x":1}},"info":{"race":{"__proto__":{"y":1},"value":"Эльф"}},"subInfo":{"__proto__":{"value":"z"}}}');
 const s=sanitized(gen);
 const data={...s.data,...evil,text:{...s.data.text,...evil.text}};
 Object.defineProperty(data,'__proto__',{value:{polluted:1},enumerable:true});
 const out=merge(gen,{...s,data});
 assert.equal(({}).polluted,undefined);assert.equal(({}).y,undefined);assert.equal(({}).p,undefined);
 assert.equal(out[0].data.includes('__proto__'),false);assert.equal(out[0].data.includes('"polluted"'),false);
 assert.equal(parsed(out).info.race.value,'Эльф');
});

test('HTML and TipTap extraction keep working on a 2 MB original without slowing down', () => {
 const gen=exportAt(1).out;
 const paragraphs=Array.from({length:12000},(_,i)=>`<p>Абзац ${i}: текст &amp; <roller>1к6</roller></p>`).join('');
 const s=sanitized(gen);s.data.text.traits={value:{data:paragraphs}};s.spells.prepared=Array.from({length:4000},(_,i)=>i.toString(16).padStart(24,'0'));
 const started=Date.now(),out=merge(gen,s);
 assert.ok(Date.now()-started<2000,'merge too slow');
 assert.equal(texts(parsed(out).text.traits).filter(t=>t.startsWith('Абзац')).length,12000);
});

test('pure export cycles over every subclass (levels 1–3): no stale line, consistent weapon ids and bonuses', () => {
 let cycles=0;
 for(const cls of CLASSES){
  for(const branch of D.subclasses.filter(s=>s.class===cls).map(s=>s.id)){
   let c=create(cls,branch);const exports=[exportCharacter(c).out];
   c=advance(c,branch);exports.push(exportCharacter(c).out);
   c=advance(c,branch);exports.push(exportCharacter(c).out);
   pureChain(exports,cls+':'+branch);
   cycles++;
  }
 }
 assert.ok(cycles>=40,String(cycles));
});

test('pure export cycles over multiclass pairs: no stale line, consistent weapon ids and bonuses', () => {
 const pairs=[];
 if(FULL_PAIRS){for(const a of CLASSES)for(const b of CLASSES)pairs.push([a,b]);}
 else CLASSES.forEach((a,i)=>{pairs.push([a,CLASSES[(i+1)%CLASSES.length]]);pairs.push([a,CLASSES[(i+6)%CLASSES.length]]);});
 for(const [a,b] of pairs){
  const one=create(a),two=enter(one,b),three=enter(two,b);
  pureChain([exportCharacter(one).out,exportCharacter(two).out,exportCharacter(three).out],a+'->'+b);
 }
});

function classAt(cls,level){
 let c=create(cls);
 for(let l=2;l<=level;l++)c=advance(c,L.subclasses(cls)[0].id);
 return exportCharacter(c);
}
const stats=out=>{const d=parsed(out);return {ac:d.vitality.ac.value,speed:d.vitality.speed.value};};
const reports=out=>texts(parsed(out).text.traits).filter(t=>/^Проверьте (?:КД|скорость):/.test(t));

test('AC and speed baseline: monk level-up takes the generated speed when the sheet still holds our level-1 value', () => {
 const first=classAt('monk',1).out, second=classAt('monk',2).out, first1=stats(first);
 assert.equal(first1.speed,30);
 assert.equal(stats(second).speed,40);
 const sheet=sanitized(first);
 const withBaseline=merge(second,sheet,{baseline:{ac:first1.ac,speed:first1.speed}});
 assert.equal(stats(withBaseline).speed,40);
 assert.deepEqual(reports(withBaseline),[]);
 // Without a baseline the sheet value is kept and reported, as before.
 const withoutBaseline=merge(second,sheet);
 assert.equal(stats(withoutBaseline).speed,30);
 assert.deepEqual(reports(withoutBaseline),['Проверьте скорость: в листе LSS 30 футов, по расчёту мастера 40 футов.']);
 assertMergedSchema(withBaseline,2);
});

test('AC baseline: a user override (sheet differs from the baseline) wins and is reported; a sheet equal to the baseline is not an override', () => {
 const first=classAt('monk',1).out, genAc=stats(first).ac;
 const sheet=sanitized(first);sheet.data.vitality.ac={value:genAc+2};
 const overridden=merge(first,sheet,{baseline:{ac:genAc}});
 assert.equal(stats(overridden).ac,genAc+2);
 assert.deepEqual(reports(overridden),[`Проверьте КД: в листе LSS ${genAc+2}, по расчёту мастера ${genAc}.`]);
 assertMergedSchema(overridden,1);
 const sameAsBaseline=merge(first,sheet,{baseline:{ac:genAc+2}});
 assert.equal(stats(sameAsBaseline).ac,genAc);
 assert.deepEqual(reports(sameAsBaseline),[]);
});

test('AC and speed: implausible sheet values are ignored and the generated value stays, with or without a baseline', () => {
 const gen=exportAt(1).out, generated=stats(gen);
 for(const value of [0,-3,1e9,'1e9','500']){
  const s=sanitized(gen);s.data.vitality.ac={value};s.data.vitality.speed={value};
  const out=merge(gen,s,{baseline:{ac:generated.ac,speed:generated.speed}});
  assert.deepEqual(stats(out),generated,String(value));
  assert.deepEqual(reports(out),[],String(value));
  assert.deepEqual(stats(merge(gen,s)),generated,String(value));
 }
});

test('user lines written below the marker survive repeated cycles, also when their key is a generated one', () => {
 const first=exportAt(1).out, second=exportAt(2).out;
 const sheet=sanitized(first);
 const below=(block,lines)=>block.value.data.content.push(tip(MARKER),...lines.map(tip));
 const lines=[['prof','Оружие: меч +1 от короля'],['traits','Классы: ненавидит магов'],['attacks','Арбалет мой: атака +5, урон 1d8+3 колющий']];
 for(const [key,line] of lines)below(sheet.data.text[key],[line]);
 let current=merge(second,sheet);
 for(let cycle=1;cycle<=3;cycle++){
  for(const [key,line] of lines){
   const t=texts(parsed(current).text[key]);
   assert.equal(t.filter(x=>x===MARKER).length,1,key+' cycle '+cycle);
   assert.ok(t.indexOf(line)>t.indexOf(MARKER),key+' cycle '+cycle+': '+line);
  }
  current=merge(second,{...clone(current[0]),data:JSON.parse(current[0].data)});
 }
 assertMergedSchema(current,2);
});

test('very deep TipTap content is cut at a depth limit instead of overflowing the stack', () => {
 const gen=exportAt(1).out;
 let deep={type:'paragraph',content:[{type:'text',text:'глубоко'}]};
 for(let i=0;i<20000;i++)deep={type:'bulletList',content:[{type:'listItem',content:[deep]}]};
 const s=sanitized(gen);
 s.data.text.traits={value:{data:{type:'doc',content:[tip('Верхний уровень'),deep]}}};
 s.data.text.notes={value:{data:deep}};
 const out=merge(gen,s), d=parsed(out);
 assert.ok(texts(d.text.traits).includes('Верхний уровень'));
 assert.equal(texts(d.text.traits).includes('глубоко'),false);
 assert.equal(out[0].data.includes('глубоко'),false);
});

test('edition gate compares as text: a numeric 2014 sheet still carries its homebrew cards', () => {
 const gen=exportAt(1).out, s=sanitized(gen);
 s.sheetEdition=2014;s.edition=2014;s.spells={...s.spells,edition:2014,prepared:[CUSTOM]};
 assert.ok(merge(gen,s)[0].spells.prepared.includes(CUSTOM));
});

test('death state: above 0 HP a native dying sheet is reset; at 0 HP the original death state is kept', () => {
 const gen=exportAt(1).out;
 const barbarian=parsed(merge(gen,nativeOriginal('barbarian'))).vitality;
 assert.ok(barbarian['hp-current'].value>0);
 assert.deepEqual([barbarian.isDying,barbarian.deathFails,barbarian.deathSuccesses],[false,0,0]);
 const sheet=sanitized(gen);
 sheet.data.vitality={...sheet.data.vitality,'hp-current':{value:0},isDying:true,deathFails:2,deathSuccesses:1};
 const dying=parsed(merge(gen,sheet)).vitality;
 assert.equal(dying['hp-current'].value,0);
 assert.deepEqual([dying.isDying,dying.deathFails,dying.deathSuccesses],[true,2,1]);
 assertMergedSchema(merge(gen,sheet),1);
});

test('native barbarian sheet: the starting-kit physical weapons are not appended, the user inventory stays', () => {
 const gen=exportCharacter(create('barbarian')).out, genRows=parsed(gen).weaponsList;
 const physical=new Set(['колющий','рубящий','дробящий']);
 const physicalNames=genRows.filter(r=>physical.has(r.dmgType.value)).map(r=>r.name.value);
 assert.ok(physicalNames.length>0);
 const merged=merge(gen,nativeOriginal('barbarian')), rows=parsed(merged).weaponsList;
 const raw=JSON.parse(NATIVE.barbarian.data).weaponsList;
 assert.deepEqual(rows.slice(0,raw.length),raw);
 const appended=rows.slice(raw.length);
assert.ok(appended.every(r=>r.id.startsWith('weapon-creator-spell-')));
 assert.ok(appended.every(r=>!physical.has(r.dmgType.value)));
 assert.ok(!appended.some(r=>physicalNames.includes(r.name.value)));
 assertMergedSchema(merged,1);
});

test('native druid sheet: generated spell attacks (produce flame, thorn whip) are appended, physical starting weapons are not', () => {
 const gen=exportCharacter(create('druid',null,{creation_cantrips:['produce-flame','thorn-whip']})).out;
 const spellRows=parsed(gen).weaponsList.filter(r=>r.id.startsWith('weapon-creator-spell-'));
 assert.ok(spellRows.some(r=>r.name.value==='Сотворение пламени'&&r.dmgType.value==='огонь'));
 assert.ok(spellRows.some(r=>r.name.value==='Терновый кнут'&&r.dmgType.value==='колющий'));
 const merged=merge(gen,nativeOriginal('druid')), out=parsed(merged).weaponsList;
 const native=JSON.parse(NATIVE.druid.data).weaponsList;
 assert.deepEqual(out.slice(0,native.length),native);
 const appended=out.slice(native.length);
 assert.deepEqual(appended.map(r=>r.name.value).sort(),spellRows.map(r=>r.name.value).sort());
 assert.ok(appended.every(r=>r.id.startsWith('weapon-creator-spell-')));
 assert.equal(out.some(r=>r.name.value==='Скимитар'||r.name.value==='Безоружный удар'),false);
 assertMergedSchema(merged,1);
});

test('exports from before the spell id prefix still merge: spell rows match by name, every id stays unique', () => {
 const gen=exportCharacter(create('druid',null,{creation_cantrips:['produce-flame','thorn-whip']})).out;
 const old=sanitized(gen), plain=new Map();
 old.data.weaponsList=old.data.weaponsList.map(row=>{if(!row.id.startsWith('weapon-creator-spell-'))return row;const id='weapon-creator-'+row.id.slice('weapon-creator-spell-'.length);plain.set(row.id,id);return {...row,id};});
 old.data.bonuses=old.data.bonuses.map(b=>{const m=/^weapon\.(.+)\.attack$/.exec(b.target);return m&&plain.has(m[1])?{...b,target:'weapon.'+plain.get(m[1])+'.attack'}:b;});
 const merged=merge(gen,old), rows=parsed(merged).weaponsList;
 assert.equal(new Set(rows.map(r=>r.id)).size,rows.length);
 assert.equal(rows.filter(r=>r.name.value==='Терновый кнут').length,1);
 assert.equal(rows.find(r=>r.name.value==='Терновый кнут').id,plain.get([...plain.keys()].find(k=>parsed(gen).weaponsList.find(r=>r.id===k).name.value==='Терновый кнут')));
 assertPureStep(merged,gen,'old spell ids');
 assertMergedSchema(merged,1);
});

test('our own exports keep every generated weapon row, including the physical ones', () => {
 const first=exportCharacter(create('barbarian')).out, second=exportCharacter(advance(create('barbarian'),L.subclasses('barbarian')[0].id)).out;
 const names=s=>parsed(s).weaponsList.map(r=>r.name.value);
 const merged=merge(second,sanitized(first));
 for(const name of names(second))assert.ok(names(merged).includes(name),name);
 assertMergedSchema(merged,2);
});
