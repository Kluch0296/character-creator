const test=require('node:test');
const assert=require('node:assert/strict');
const R=require('../rules'),O=require('../creation-options'),L=require('../levelup-rules'),D=require('../levelup-data'),E=require('../lss-export');
const {create,advance,enter}=require('./fixtures/characters');

const CODES=['str','dex','con','int','wis','cha'];
const SKILLS={athletics:'str',acrobatics:'dex','sleight of hand':'dex',stealth:'dex',arcana:'int',history:'int',investigation:'int',nature:'int',religion:'int','animal handling':'wis',insight:'wis',medicine:'wis',perception:'wis',survival:'wis',deception:'cha',intimidation:'cha',performance:'cha',persuasion:'cha'};
const CATALOG=new Set(Object.values(E.SPELL_IDS));
const isInt=(x,min=-Infinity,max=Infinity)=>Number.isInteger(x)&&x>=min&&x<=max;

/* Mirrors getCreationExtras() and getExportData() in the browser. */
function exportCharacter(c){
 const base=R.finalAbilities(c),abilities=R.finalAbilities(c,O.derive(c,{abilities:base})),ctx={abilities};
 const proficiencies=R.resolveProficiencies(c,O.derive(c,ctx)),creation=O.derive(c,{...ctx,proficiencies});
 const progression=L.derive(c,{...ctx,baseExtras:creation,proficiencies},creation);
 const recalculated=O.derive(c,{...ctx,proficiencies:R.resolveProficiencies(c,progression)});
 const extras=L.derive(c,{...ctx,baseExtras:creation,proficiencies},recalculated);
 const labels={class:L.label(c.class),subclass:extras.subclass?.label};
 return {extras,stats:R.derivedStats(c,extras),out:E.buildLssExport(c,labels,R.derivedStats(c,extras),extras)};
}

function field(value,key,where){assert.equal(value?.name,key,where+': name');assert.ok(Object.hasOwn(value,'value'),where+': value');}
function richText(doc,where){
 assert.equal(doc?.value?.data?.type,'doc',where);assert.ok(Array.isArray(doc.value.data.content),where);
 for(const node of doc.value.data.content){
  assert.equal(node.type,'paragraph',where);
  if(node.content)for(const text of node.content){assert.equal(text.type,'text',where);assert.equal(typeof text.text,'string',where);assert.ok(text.text.length,where+': empty text node');}
 }
}
function slots(map,where){for(const [key,value] of Object.entries(map)){assert.match(key,/^slots-[1-9]$/,where);assert.ok(isInt(value?.value,1,9),where+': '+key);}}
function walk(value,path,visit){visit(value,path);if(value&&typeof value==='object')for(const [key,item] of Object.entries(value))walk(item,path+'.'+key,visit);}

function assertLssSchema(exported,{level,label}){
 assert.ok(Array.isArray(exported)&&exported.length===1,label);
 const wrapper=JSON.parse(JSON.stringify(exported[0]));
 assert.deepEqual(Object.keys(wrapper).sort(),['data','disabledBlocks','edition','jsonType','linkAccess','rooms','sheetEdition','spells','tags','version'],label);
 assert.equal(wrapper.jsonType,'character');assert.equal(wrapper.version,'2');assert.equal(wrapper.edition,'2014');assert.equal(wrapper.sheetEdition,'2014');assert.equal(wrapper.linkAccess,'none');
 assert.deepEqual(wrapper.tags,[]);assert.deepEqual(wrapper.rooms,[]);
 for(const blocks of Object.values(wrapper.disabledBlocks))assert.ok(Array.isArray(blocks),label);
 const cards=wrapper.spells;assert.equal(cards.mode,'cards',label);assert.equal(cards.edition,'2014',label);
 for(const key of ['prepared','book','slotless']){assert.ok(Array.isArray(cards[key]),label+': '+key);assert.equal(new Set(cards[key]).size,cards[key].length,label+': duplicate '+key);for(const id of cards[key])assert.ok(CATALOG.has(id),label+': '+key+' '+id);}
 assert.ok(Array.isArray(cards.granted),label);assert.equal(new Set(cards.granted.map(x=>x.id)).size,cards.granted.length,label+': duplicate grants');
 for(const grant of cards.granted){assert.deepEqual(Object.keys(grant).sort(),['id','source'],label);assert.equal(grant.source,'manual');assert.ok(CATALOG.has(grant.id),label);}

 assert.equal(typeof wrapper.data,'string',label);
 assert.ok(!/undefined|NaN|\[object Object\]|Infinity/.test(wrapper.data),label+': leaked JS value');
 const data=JSON.parse(wrapper.data);
 walk(data,'data',(value,path)=>{assert.notEqual(value,null,label+': null at '+path);if(typeof value==='number')assert.ok(Number.isFinite(value),label+': '+path);});
 assert.equal(data.jsonType,'character');assert.equal(data.template,'default');
 assert.equal(typeof data.name.value,'string');assert.ok(data.name.value.length,label+': name');

 assert.deepEqual(Object.keys(data.info).sort(),['alignment','background','charClass','charSubclass','experience','level','playerName','race'],label);
 for(const [key,value] of Object.entries(data.info))field(value,key,label+': info');
 assert.equal(data.info.level.value,level,label+': level');
 for(const key of ['charClass','charSubclass','background','playerName','race','alignment'])assert.equal(typeof data.info[key].value,'string',label+': '+key);
 assert.ok(data.info.charClass.value.length,label+': class');
 for(const [key,value] of Object.entries(data.subInfo))field(value,key,label+': subInfo');
 assert.ok(isInt(data.proficiency,2,6),label);

 assert.deepEqual(Object.keys(data.stats),CODES,label);assert.deepEqual(Object.keys(data.saves),CODES,label);
 for(const code of CODES){assert.equal(data.stats[code].name,code);assert.ok(isInt(data.stats[code].score,1,30),label+': '+code);assert.equal(data.saves[code].name,code);assert.equal(typeof data.saves[code].isProf,'boolean',label);}
 assert.deepEqual(Object.keys(data.skills).sort(),Object.keys(SKILLS).sort(),label);
 for(const [key,skill] of Object.entries(data.skills)){assert.equal(skill.name,key);assert.equal(skill.baseStat,SKILLS[key]);assert.ok([0,1,2].includes(skill.isProf),label+': '+key);if(Object.hasOwn(skill,'customPassive'))assert.ok(isInt(skill.customPassive),label);}

 const v=data.vitality;
 assert.ok(isInt(v['hp-max'].value,1),label+': hp');assert.equal(v['hp-current'].value,v['hp-max'].value);assert.equal(v['hp-temp'].value,0);
 assert.ok(isInt(v.ac.value,1,40),label+': ac');assert.ok(isInt(v.speed.value,0),label+': speed');assert.ok(isInt(v.darkvision.value,0),label);
 if(v.initiative)assert.ok(isInt(v.initiative.value),label);
 assert.equal(v['hp-dice-current'].value,level,label+': dice current');
 assert.ok(['d6','d8','d10','d12','multiclass'].includes(v['hit-die'].value),label+': hit die '+v['hit-die'].value);
 if(v['hit-die'].value==='multiclass'){
  const pools=Object.entries(v['hp-dice-multi']);assert.ok(pools.length>1,label);
  for(const [die,pool] of pools){assert.match(die,/^d(6|8|10|12)$/,label);assert.ok(isInt(pool.max,1)&&pool.current===pool.max,label);}
  assert.equal(pools.reduce((sum,[,pool])=>sum+pool.max,0),level,label+': dice pool total');
 } else assert.deepEqual(v['hp-dice-multi'],{},label);

 slots(data.spells,label+': slots');slots(data.spellsPact,label+': pact');
 field(data.spellsInfo.base,'base',label);field(data.spellsInfo.save,'save',label);field(data.spellsInfo.mod,'mod',label);
 if(data.spellsInfo.base.code)assert.ok(CODES.includes(data.spellsInfo.base.code),label);
 const available=new Set(data.spellsInfo.available?.spells||[]);
 if(data.spellsInfo.available){for(const cls of data.spellsInfo.available.classes||[])assert.ok(Object.hasOwn(R.CLASSES,cls),label+': class '+cls);for(const id of available)assert.ok(CATALOG.has(id),label);}
 for(const id of [...cards.prepared,...cards.book,...cards.slotless,...cards.granted.map(x=>x.id)])assert.ok(available.has(id),label+': card outside available '+id);
 for(const [id,code] of Object.entries(data.spellsInfo.abilities)){assert.ok(available.has(id),label);assert.ok(CODES.includes(code),label);}

 const weapons=new Set();
 for(const weapon of data.weaponsList){assert.ok(!weapons.has(weapon.id),label);weapons.add(weapon.id);assert.equal(typeof weapon.name.value,'string');assert.ok(weapon.name.value.length,label);assert.equal(typeof weapon.isProf,'boolean');assert.ok(CODES.includes(weapon.ability),label);for(const key of ['dmg','dmgType','notes'])assert.equal(typeof weapon[key].value,'string',label);}
 assert.equal(new Set(data.bonuses.map(b=>b.id)).size,data.bonuses.length,label+': duplicate bonus IDs');
 for(const bonus of data.bonuses){
  const weapon=/^weapon\.(.+)\.attack$/.exec(bonus.target),skill=/^skill\.(.+)$/.exec(bonus.target);
  if(skill){assert.ok(Object.hasOwn(SKILLS,skill[1]),label+': native skill target');assert.match(bonus.expr,/^-?\d+$/);
   if(bonus.id.startsWith('bonus-creator-jack-')){assert.equal(data.skills[skill[1]].isProf,0,label+': Jack on trained skill');assert.equal(Number(bonus.expr),Math.floor(data.proficiency/2));}
   else {assert.equal(bonus.id,'bonus-creator-fey-'+skill[1],label+': unknown skill bonus');assert.equal(data.skills[skill[1]].baseStat,'cha',label+': Fey on non-Charisma skill');assert.equal(Number(bonus.expr),Math.max(1,Math.floor((data.stats.wis.score-10)/2)));}
  }
  else {assert.ok(weapon&&weapons.has(weapon[1]),label+': bonus target');assert.match(bonus.expr,/^-?\d+$/);}
  assert.deepEqual(bonus.source,{kind:'user'});
 }
 for(const [key,doc] of Object.entries(data.text))richText(doc,label+': text.'+key);
 for(const [coin,value] of Object.entries(data.coins)){assert.ok(['cp','sp','gp','ep','pp'].includes(coin),label);assert.ok(isInt(value.value,0),label);}
 assert.deepEqual(data.resources,{});assert.deepEqual(data.conditions,[]);assert.deepEqual(data.attunementsList,[]);
 return {wrapper,data};
}

test('every subclass at levels 1–3 exports a structurally valid LSS v2 sheet',()=>{
 let checked=0;
 for(const cls of Object.keys(R.CLASSES)){
  const branches=D.subclasses.filter(s=>s.class===cls).map(s=>s.id);
  for(const branch of branches){
   let c=create(cls,branch);
   for(let level=1;level<=3;level++){
    if(level>1)c=advance(c,branch);
    if(level===1&&!['cleric','sorcerer','warlock'].includes(cls)&&branch!==branches[0])continue;
    const {extras,out}=exportCharacter(c),{data}=assertLssSchema(out,{level,label:cls+':'+branch+':'+level});
    if(extras.subclass)assert.equal(data.info.charSubclass.value,extras.subclass.label,cls+':'+branch);
    checked++;
   }
  }
 }
 assert.ok(checked>250,String(checked));
});

test('all 13 × 13 multiclass pairs export valid hit dice pools, slots and subclasses',()=>{
 const classes=Object.keys(R.CLASSES);
 for(const starting of classes)for(const target of classes){
  const label=starting+' → '+target,two=enter(create(starting),target),three=enter(two,target);
  for(const [c,level] of [[two,2],[three,3]]){
   const {extras,out}=exportCharacter(c),{data}=assertLssSchema(out,{level,label:label+':'+level});
   const multiclass=extras.classes.length>1;
   if(multiclass){
    assert.ok(extras.classes.every(x=>data.info.charClass.value.includes(x.label+' '+x.level)),label);
    for(const sub of extras.subclasses||[])assert.ok(data.info.charSubclass.value.includes(sub.label),label+': subclass '+sub.label);
   }
   const dice=new Set(extras.hitDicePools.map(x=>x.die));
   assert.equal(data.vitality['hit-die'].value,dice.size>1?'multiclass':'d'+[...dice][0],label);
  }
 }
});

test('racial magic, unusual text and empty optional fields keep the LSS schema valid',()=>{
 const variants=[
  ['wizard',{race:'elf',race_sub:'high_elf',human_feature:undefined}],
  ['fighter',{race:'tiefling',human_feature:undefined}],
  ['warlock',{race:'elf',race_sub:'drow',human_feature:undefined}],
  ['wizard',{race:'gnome',race_sub:'forest-gnome',human_feature:undefined}],
  ['cleric',{race:'aasimar',race_sub:'aasimar-guardian',human_feature:undefined}],
  ['rogue',{name:'',playerName:'',alignment:''}],
  ['bard',{name:'  «Кавычки» "и" \\ обратный слэш\nи перенос  ',backstory:'Строка 1\n\nСтрока 3',personality:'<b>не HTML</b>'}]
 ];
 for(const [cls,overrides] of variants){
  let c=create(cls,undefined,overrides);
  for(let level=1;level<=3;level++){
   if(level>1)c=advance(c,L.subclasses(cls)[0].id);
   const {wrapper,data}=assertLssSchema(exportCharacter(c).out,{level,label:cls+':'+JSON.stringify(overrides)+':'+level});
   if(overrides.name!==undefined)assert.equal(data.name.value,overrides.name.trim()||'Безымянный герой');
   if(overrides.personality)assert.ok(JSON.stringify(data.text.personality).includes('<b>не HTML</b>'));
   assert.doesNotThrow(()=>JSON.parse(JSON.stringify([wrapper])));
  }
 }
});

test('damaging cantrips: attack-roll cantrips are LSS weapon rows, saving-throw and rider cantrips stay in the attacks text',()=>{
 const abilities={strength:10,dexterity:12,constitution:14,intelligence:10,wisdom:16,charisma:14};
 const cleric=create('cleric','life',{abilityMethod:'manual',abilities,creation_cantrips:['sacred-flame','guidance','light']});
 const c=enter(enter(cleric,'warlock',{'warlock:creation_patron':'fiend','warlock:creation_cantrips':['eldritch-blast','chill-touch']}),'warlock',{invocations:['agonizing-blast','repelling-blast']});
 const {extras,out}=exportCharacter(c),{data}=assertLssSchema(out,{level:3,label:'cleric/warlock cantrips'}),rows=data.weaponsList;
 const blast=rows.find(w=>w.name.value==='Мистический заряд'),touch=rows.find(w=>w.name.value==='Леденящее прикосновение');
 assert.ok(blast);assert.equal(blast.ability,'cha');assert.equal(blast.isProf,true);assert.equal(blast.dmg.value,'1d10+2');assert.equal(blast.dmgType.value,'силовое поле');
 assert.match(blast.notes.value,/120 футов/);assert.match(blast.notes.value,/Мучительный взрыв/);
 assert.ok(touch);assert.equal(touch.dmg.value,'1d8');assert.equal(touch.dmgType.value,'некротическая энергия');
 assert.ok(!rows.some(w=>w.name.value==='Священное пламя'),'saving-throw cantrips must not become weapon rows');
 // LSS recomputes to-hit as ability modifier + proficiency, so no manual attack bonus is needed for the spell rows.
 assert.ok(!data.bonuses.some(b=>b.target===`weapon.${blast.id}.attack`||b.target===`weapon.${touch.id}.attack`));
 assert.deepEqual(rows.map(w=>w.id),rows.map((_,i)=>'weapon-creator-'+i));
 assert.ok(rows.findIndex(w=>w===blast)>rows.findLastIndex(w=>!/заряд|прикосновение/.test(w.name.value)),'weapon rows first');
 assert.equal(rows.length,extras.attacks.filter(a=>!a.save&&!a.weaponRider).length);
 const lines=data.text.attacks.value.data.content.map(p=>p.content?.[0]?.text||'');
 const flame=lines.find(l=>l.startsWith('Священное пламя ('));assert.ok(flame);assert.ok(flame.includes('спасбросок ЛОВ, Сл 13, 1к8 излучением'),flame);
 assert.ok(lines.some(l=>l.startsWith('Мистический заряд: атака +4, урон 1к10+2 силовым полем')));
 // Weapon-attack riders have no spell attack of their own either.
 const sniper=create('wizard',null,{creation_cantrips:['green-flame-blade','mage-hand','light']}),sniped=exportCharacter(sniper);
 assertLssSchema(sniped.out,{level:1,label:'green-flame-blade'});const sdata=JSON.parse(sniped.out[0].data);
 assert.ok(!sdata.weaponsList.some(w=>w.name.value===L.label('green-flame-blade')));
 assert.ok(JSON.stringify(sdata.text.attacks).includes('атака оружием, 3 огнём второй цели'));
 // One notation per text line: dice inside notes are written 1к8 like the damage, while the weapon row's dmg field keeps 1d10.
 const tolls=exportCharacter(create('wizard',null,{creation_cantrips:['toll-the-dead','mage-hand','light']})),tollLine=JSON.parse(tolls.out[0].data).text.attacks.value.data.content.map(p=>p.content?.[0]?.text||'').find(l=>l.startsWith(L.label('toll-the-dead')+' ('));
 assert.ok(tollLine&&tollLine.includes('1к8 некротической энергией')&&tollLine.includes('урон 1к12')&&!/ddd/.test(tollLine),tollLine);
 // A high elf wizard's racial Fire Bolt uses Intelligence; characters without damaging cantrips get no extra rows.
 const elf=exportCharacter(create('wizard',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt',creation_cantrips:['mage-hand','light','prestidigitation']}));
 const bolt=JSON.parse(elf.out[0].data).weaponsList.find(w=>w.name.value===L.label('fire-bolt'));assert.equal(bolt.ability,'int');assert.equal(bolt.dmg.value,'1d10');assert.equal(bolt.dmgType.value,'огонь');
 const quiet=exportCharacter(create('fighter'));assert.equal(JSON.parse(quiet.out[0].data).weaponsList.length,quiet.extras.attacks.length);assert.ok(!quiet.extras.attacks.some(a=>a.cantrip));
});
