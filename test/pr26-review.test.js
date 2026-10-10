const test=require('node:test'),assert=require('node:assert/strict');
const R=require('../rules'),O=require('../creation-options'),L=require('../levelup-rules'),E=require('../lss-export');
const {create,advance,fill,context,extras,stats,copy,enter}=require('./fixtures/characters');
const exported=c=>JSON.parse(E.buildLssExport(c,{},stats(c),extras(c))[0].data);

test('PR26 Cavalier retaliation has a STR-based long-rest pool and explicit summary',()=>{
 for(const strength of [6,10,16]){
  const first=create('fighter',null,{abilities:{strength,dexterity:16,constitution:16,intelligence:16,wisdom:16,charisma:16}}),second=advance(first);
  assert.ok(!extras(second).resources.some(r=>r.id==='unwavering-mark'));
  const c=advance(second,'cavalier'),e=extras(c),pool=e.resources.find(r=>r.id==='unwavering-mark');assert.ok(pool);
  assert.equal(pool.max,Math.max(1,stats(c).modifiers.strength));assert.equal(pool.rest,'long-rest');
  const summary=e.features.find(f=>f.name==='Непоколебимая метка').description;assert.match(summary,/СИЛ/);assert.match(summary,/минимум 1/);assert.match(summary,/долгий отдых/);assert.match(summary,/меток не ограничено/);
  const text=JSON.stringify(exported(c).text.traits);assert.ok(text.includes(pool.name+': '+pool.max+'; восстановление после долгого отдыха.'));
 }
 assert.ok(!extras(advance(advance(create('fighter')),'champion')).resources.some(r=>r.id==='unwavering-mark'));
});
test('PR26 Wild Magic Barbarian tracks Magic Awareness independently of Rage',()=>{
 const second=advance(create('barbarian'));assert.ok(!extras(second).resources.some(r=>r.id==='magic-awareness'));
 const c=advance(second,'wild-magic'),e=extras(c),pool=e.resources.find(r=>r.id==='magic-awareness');assert.ok(pool);
 assert.equal(pool.max,stats(c).proficiencyBonus);assert.equal(pool.rest,'long-rest');assert.equal(e.resources.find(r=>r.id==='rage').max,3);
 assert.ok(JSON.stringify(exported(c).text.traits).includes(pool.name+': 2; восстановление после долгого отдыха.'));
 assert.ok(!extras(advance(second,'berserker')).resources.some(r=>r.id==='magic-awareness'));
});
test('PR26 Battle Master learns three fresh maneuvers beyond Martial Adept and Superior Technique',()=>{
 const c=advance(create('fighter',null,{human_feature:'human_alt',creation_feat:'martial-adept',creation_style:'superior-technique',creation_superior_maneuver:'precision-attack',creation_maneuvers:['commanders-strike','disarming']})),p=fill(c,L.begin(c,context(c)),{subclass:'battle-master'});
 const known=['commanders-strike','disarming-attack','precision-attack'],g=L.getChoices(c,p,context(c)).find(g=>g.id==='maneuvers');
 for(const id of known)assert.ok(!g.options.some(o=>o.value===id),id);
 assert.equal(p.choices.maneuvers.length,3);assert.equal(new Set(p.choices.maneuvers).size,3);assert.deepEqual(L.transition(c,p,context(c)).errors,[]);
 for(const id of known){const bad=copy(p);bad.choices.maneuvers[0]=id;assert.ok(L.transition(c,bad,context(c)).errors.some(e=>e.field==='maneuvers'),id);}
 assert.equal(L.commit(c,p,context(c)).level,3);
 const rally=advance(create('fighter',null,{human_feature:'human_alt',creation_feat:'martial-adept',creation_maneuvers:['rally','parry']})),rp=fill(rally,L.begin(rally,context(rally)),{subclass:'battle-master'}),rg=L.getChoices(rally,rp,context(rally)).find(g=>g.id==='maneuvers');
 assert.ok(!rg.options.some(o=>['rally','parry'].includes(o.value)));assert.deepEqual(L.transition(rally,rp,context(rally)).errors,[]);
});
test('PR26 Fathomless swim survives Giff and Simic racial assignments on stats and export',()=>{
 for(const race of ['giff','simic-hybrid']){
  const first=create('warlock','fathomless',{race,human_feature:null,creation_simic_adaptation:'swim'});
  for(const c of [first,advance(first),advance(advance(first),null,{pact:'blade'})]){assert.equal(stats(c).swim,40,race+':'+c.level);assert.ok(JSON.stringify(exported(c).text.traits).includes('Плавание: 40 футов.'));}
  const ordinary=create('warlock','fiend',{race,human_feature:null,creation_simic_adaptation:'swim'});assert.equal(stats(ordinary).swim,stats(ordinary).speed);
  assert.equal(R.derivedStats(first,{...extras(first),speedBonus:20}).swim,50);
 }
 assert.equal(stats(create('wizard')).swim,0);
});

test('PR26 Battle Smith preserves ordinary weapons and exports conditional INT magic attacks',()=>{
 const c=advance(create('artificer',null,{abilities:{strength:12,dexterity:12,constitution:16,intelligence:20,wisdom:16,charisma:16}}),null,{infusions:['enhanced-weapon','repeating-shot','returning-weapon','enhanced-defense']}),next=advance(c,'battle-smith'),e=extras(next),ordinary=e.attacks.find(a=>a.id==='light-crossbow'),magic=e.attacks.find(a=>a.id==='light-crossbow-battle-ready');
 assert.ok(magic);assert.equal(ordinary.ability,'dexterity');assert.equal(magic.ability,'intelligence');assert.equal(magic.attackBonus,stats(next).modifiers.intelligence+2);assert.equal(magic.damageBonus,stats(next).modifiers.intelligence);assert.match(magic.notes.join(' '),/только.*магическ/i);
 const enhanced=e.attacks.find(a=>a.id==='light-crossbow-battle-ready-enhanced-weapon');assert.ok(enhanced);assert.equal(enhanced.attackBonus,magic.attackBonus+1);assert.equal(enhanced.damageBonus,magic.damageBonus+1);assert.match(enhanced.notes.join(' '),/активн.*инфуз/i);
 assert.ok(e.attacks.some(a=>a.id==='light-crossbow-battle-ready-repeating-shot'));assert.ok(!e.attacks.some(a=>a.id==='light-crossbow-battle-ready-returning-weapon'));assert.ok(!e.attacks.some(a=>a.group==='unarmed'&&a.battleReady));assert.equal(e.attacks.length,new Set(e.attacks.map(a=>a.id)).size);
 assert.ok(!extras(c).attacks.some(a=>a.battleReady));assert.ok(!extras(advance(c,'artillerist')).attacks.some(a=>a.battleReady));
 const data=exported(next);assert.ok(data.weaponsList.some(w=>w.name.value===enhanced.label&&w.ability==='int'));assert.ok(JSON.stringify(data.text.attacks).includes(enhanced.notes[0]));
});
test('PR26 limited Light, Tempest and Grave resources follow WIS from class level one',()=>{
 for(const [domain,id] of [['light','warding-flare'],['tempest','wrath-of-the-storm'],['grave','eyes-of-the-grave']]){
  for(const wisdom of [6,10,16]){
   const first=create('cleric',domain,{abilities:{strength:16,dexterity:16,constitution:16,intelligence:16,wisdom,charisma:16}});
   for(const c of [first,advance(first),advance(advance(first))]){const pools=extras(c).resources.filter(r=>r.id===id);assert.equal(pools.length,1);assert.equal(pools[0].max,Math.max(1,stats(c).modifiers.wisdom));assert.equal(pools[0].rest,'long-rest');assert.ok(JSON.stringify(exported(c).text.traits).includes(pools[0].name+': '+pools[0].max+'; восстановление после долгого отдыха.'));}
  }
  const multi=enter(create('fighter'),'cleric',{'cleric:creation_domain':domain});assert.ok(extras(multi).resources.some(r=>r.id==='cleric:'+id&&r.max===stats(multi).modifiers.wisdom));
 }
 assert.ok(!extras(create('cleric','life')).resources.some(r=>['warding-flare','wrath-of-the-storm','eyes-of-the-grave'].includes(r.id)));
});
test('PR26 Archfey Fey Presence has one short-or-long-rest use at every supported level',()=>{
 const first=create('warlock','archfey');
 for(const c of [first,advance(first),advance(advance(first),null,{pact:'blade'})]){const pools=extras(c).resources.filter(r=>r.id==='fey-presence');assert.equal(pools.length,1);assert.equal(pools[0].max,1);assert.equal(pools[0].rest,'short-rest');assert.ok(JSON.stringify(exported(c).text.traits).includes('Фейское присутствие: 1; восстановление после короткого или долгого отдыха.'));}
 const multi=enter(create('fighter'),'warlock',{'warlock:creation_patron':'archfey'});assert.ok(extras(multi).resources.some(r=>r.id==='warlock:fey-presence'&&r.max===1));assert.ok(!extras(create('warlock','fiend')).resources.some(r=>r.id==='fey-presence'));
});
test('PR26 Arcane Recovery summary scales by wizard class level and keeps ritual casting',()=>{
 const first=create('wizard'),second=advance(first),third=advance(second);
 for(const [c,budget] of [[first,1],[second,1],[third,2],[enter(enter(first,'fighter'),'fighter'),1],[enter(enter(create('fighter'),'wizard'),'fighter'),1]]){
  const features=extras(c).features.filter(f=>f.name==='Магическое восстановление');assert.equal(features.length,1);const text=features[0].description;assert.ok(text.includes('суммарного круга до '+budget));assert.match(text,/раз в день/);assert.match(text,/короткого отдыха/);assert.match(text,/Ритуалы из книги/);assert.ok(JSON.stringify(exported(c).text.traits).includes(text));
 }
 assert.ok(!extras(third).features.some(f=>f.description.includes('вернуть одну ячейку 1-го уровня')));
});

test('PR26 Battle Ready permits INT choices when its modifier ties or trails DEX',()=>{
 for(const dexterity of [14,16]){
  const first=create('artificer',null,{abilities:{strength:14,dexterity,constitution:13,intelligence:14,wisdom:9,charisma:8}}),second=advance(first,null,{infusions:['enhanced-weapon','repeating-shot','returning-weapon','enhanced-defense']}),c=advance(second,'battle-smith'),e=extras(c),ordinary=e.attacks.find(a=>a.id==='light-crossbow'),magic=e.attacks.find(a=>a.id==='light-crossbow-battle-ready'),enhanced=e.attacks.find(a=>a.id==='light-crossbow-battle-ready-enhanced-weapon');
  assert.ok(magic);assert.ok(enhanced);assert.equal(ordinary.ability,'dexterity');assert.equal(ordinary.attackBonus,stats(c).modifiers.dexterity+2);assert.equal(magic.attackBonus,stats(c).modifiers.intelligence+2);assert.equal(enhanced.attackBonus,stats(c).modifiers.intelligence+3);assert.equal(enhanced.damageBonus,stats(c).modifiers.intelligence+1);assert.match(enhanced.notes.join(' '),/активн.*инфуз/i);
  assert.ok(exported(c).weaponsList.some(w=>w.name.value===enhanced.label&&w.ability==='int'));
 }
});

test('PR26 Dueling applies to thrown melee variants',()=>{
 const ranger=create('ranger',null,{abilities:{strength:10,dexterity:18,constitution:16,intelligence:10,wisdom:16,charisma:10},creation_weapon:'handaxe',creation_second_weapon:'handaxe'});
 let entry=L.selectClass(ranger,L.begin(ranger,context(ranger)),'fighter',context(ranger));entry.choices['fighter:creation_style']='thrown-weapon-fighting';let c=L.commit(ranger,entry,context(ranger));
 let third=L.selectClass(c,L.begin(c,context(c)),'ranger',context(c));c=L.commit(c,fill(c,third,{style:'dueling'}),context(c));
 for(const c2 of [c]){const e=extras(c2),thrown=e.attacks.find(a=>a.id==='handaxe-thrown');assert.ok(thrown);assert.equal(thrown.thrownVariant,true);assert.equal(thrown.damageBonus,4);assert.match(thrown.notes.join(' '),/Бой метательным оружием/);}
 const held=extras(c).attacks.find(a=>a.id==='handaxe');assert.equal(held.damageBonus,2);assert.match(held.notes.join(' '),/Дуэлянт/);
});

test('PR26 Chronurgy exposes two long-rest Chronal Shift uses',()=>{
 const c=advance(create('wizard'),'chronurgy'),e=extras(c),pool=e.resources.find(r=>r.id==='chronal-shift');
 assert.ok(pool);assert.equal(pool.max,2);assert.equal(pool.rest,'long-rest');
 assert.ok(!extras(advance(create('wizard'),'graviturgy')).resources.some(r=>r.id==='chronal-shift'));
});

test('PR26 Dedicated Weapon retains ordinary attacks and marks each Dexterity option as conditional',()=>{
 const fighter=create('fighter',null,{race:'dwarf',race_sub:'hill-dwarf',abilities:{strength:16,dexterity:18,constitution:16,intelligence:10,wisdom:16,charisma:10},creation_style:'defense',creation_weapon:'battleaxe',creation_shield_weapon:'longsword'});
 let entry=L.selectClass(fighter,L.begin(fighter,context(fighter)),'monk',context(fighter));let c=L.commit(fighter,entry,context(fighter));entry=L.selectClass(c,L.begin(c,context(c)),'monk',context(c));c=L.commit(c,fill(c,entry,{'variant_dedicated-weapon':'yes'}),context(c));const e=extras(c);
 for(const id of ['battleaxe','longsword']){
  const ordinary=e.attacks.find(a=>a.id===id),dedicated=e.attacks.find(a=>a.id===id+'-dedicated');
  assert.ok(ordinary);assert.ok(dedicated);assert.equal(ordinary.ability,'strength');assert.equal(dedicated.ability,'dexterity');
  assert.equal(dedicated.attackBonus,6);assert.equal(dedicated.damageBonus,4);assert.match(dedicated.notes.join(' '),/единственное оружие/);
  assert.ok(exported(c).weaponsList.some(w=>w.name.value===ordinary.label));
  assert.ok(exported(c).weaponsList.some(w=>w.name.value===dedicated.label));
 }
 assert.match(e.features.find(f=>f.name==='Специальное оружие')?.description,/Только одно оружие/);
 assert.equal(e.attacks.length,new Set(e.attacks.map(a=>a.id)).size);
});

test('PR26 PHB wizard traditions include Savant summaries and Portent',()=>{
 const expected={abjuration:'Ограждение: знаток',conjuration:'Вызов: знаток',divination:'Прорицание: знаток',enchantment:'Очарование: знаток',evocation:'Воплощение: знаток',illusion:'Иллюзия: знаток',necromancy:'Некромантия: знаток',transmutation:'Преобразование: знаток'};
 for(const [id,name] of Object.entries(expected)){const e=extras(advance(create('wizard'),id));assert.ok(e.features.some(f=>f.name===name),id);assert.match(e.features.find(f=>f.name===name).description,/заклинания/i);}
 const e=extras(advance(create('wizard'),'divination')),portent=e.features.find(f=>f.name==='Предзнаменование');
 assert.ok(portent);assert.match(portent.description,/два к20/);assert.ok(e.resources.some(r=>r.id==='portent'&&r.max===2&&r.rest==='long-rest'));
});

test('PR26 Pact of the Tome offers class-list cantrips only',()=>{
 const warlock=advance(create('warlock')),p=fill(warlock,L.begin(warlock,context(warlock)),{pact:'tome'}),group=L.getChoices(warlock,p,context(warlock)).find(g=>g.id==='tome_cantrips');
 assert.ok(group);assert.match(group.label,/из списков классов/);
 for(const id of ['sapping-sting','encode-thoughts'])assert.ok(!group.options.some(o=>o.value===id),id);
 for(const id of ['minor-illusion','fire-bolt'])assert.ok(group.options.some(o=>o.value===id),id);
 assert.equal(group.options.length,44-new Set(extras(warlock).spells.filter(x=>x.level===0).map(x=>x.id)).size);assert.deepEqual(L.transition(warlock,p,context(warlock)).errors,[]);
});

test('PR26 wizard school and Portent summaries match PHB rules',()=>{
 for(const school of ['abjuration','conjuration','divination','enchantment','evocation','illusion','necromancy','transmutation']){
  const feature=extras(advance(create('wizard'),school)).features.find(f=>f.name.endsWith(': знаток'));
  assert.ok(feature,school);assert.match(feature.description,/вдвое быстрее и дешевле/);assert.doesNotMatch(feature.description,/мастерство/);
 }
 const portent=extras(advance(create('wizard'),'divination')).features.find(f=>f.name==='Предзнаменование');
 assert.ok(portent);assert.match(portent.description,/вы или существо/);assert.match(portent.description,/нельзя перебросить/);assert.match(portent.description,/исчезают после следующего долгого отдыха/);
});

test('PR26 Genie and Bladesinging expose complete rest-bound resources',()=>{
 const genie=extras(create('warlock','genie')),bottled=genie.resources.find(r=>r.id==='bottled-respite');
 assert.ok(bottled);assert.equal(bottled.max,1);assert.equal(bottled.rest,'long-rest');
 const bladesinger=extras(advance(create('wizard'),'bladesinging')),song=bladesinger.resources.find(r=>r.id==='bladesong'),text=bladesinger.features.find(f=>f.name==='Песнь клинка')?.description;
 assert.ok(song);assert.equal(song.max,2);assert.equal(song.rest,'long-rest');assert.ok(text);
 for(const part of ['Бонусным действием','1 минут','лёгком доспехе','отсутствие щита','+Интеллект','минимум +1','+10 футов','Акробатику','концентрации','недееспособности','доспеха/щита'])assert.ok(text.includes(part),part);
});

test('PR26 latest Codex review findings are covered',()=>{
 const armorer=advance(advance(create('artificer')),'armorer'),armorerExtras=extras(armorer),field=armorerExtras.resources.find(r=>r.id==='defensive-field'),model=armorerExtras.features.find(f=>f.name==='Модель доспеха')?.description;
 assert.ok(field);assert.equal(field.max,2);assert.equal(field.rest,'long-rest');assert.match(model,/временные хиты, равные уровню изобретателя/);assert.match(model,/бонус мастерства за долгий отдых/);
 const creation=extras(advance(advance(create('bard')),'creation')),creationText=creation.features.find(f=>f.name==='Представление созидания')?.description;
 assert.ok(creationText);assert.match(creationText,/Одно бесплатное применение за долгий отдых/);assert.match(creationText,/ячейку 2-го круга или выше/);assert.match(creationText,/только один созданный .*предмет/);
 const phantom=extras(advance(advance(create('rogue')),'phantom')),wails=phantom.resources.find(r=>r.id==='wails-from-the-grave');
 assert.ok(wails);assert.equal(wails.max,2);assert.equal(wails.rest,'long-rest');
 const normalSelected=c=>Array.isArray(c.creation_cantrips)?c.creation_cantrips:[c.creation_cantrips].filter(Boolean);
 for(const domain of ['arcana','death']){
  const c=create('cleric',domain),groups=O.getChoices(c,context(c)),normal=groups.find(g=>g.id==='creation_cantrips'),bonus=groups.find(g=>g.id==='creation_domain_cantrips');
  assert.ok(normal&&bonus,domain);assert.ok(!bonus.options.some(o=>normalSelected(c).includes(o.value)),domain);
  const fresh=bonus.options.find(o=>!normalSelected(c).includes(o.value))?.value;assert.ok(fresh,domain);const second=bonus.options.find(o=>![...normalSelected(c),fresh].includes(o.value))?.value;c.creation_domain_cantrips=domain==='arcana'?[fresh,second]:[fresh];
  assert.deepEqual(O.validate(c,context(c)),[],domain);
  assert.ok(!O.getChoices(c,context(c)).find(g=>g.id==='creation_cantrips').options.some(o=>o.value===fresh),domain);
 }
});
test('PR26 Armorer exports both armor model mechanics',()=>{
 const armorer=advance(advance(create('artificer')),'armorer');
 const model=extras(armorer).features.find(f=>f.name==='Модель доспеха')?.description,arcane=extras(armorer).features.find(f=>f.name==='Магический доспех')?.description;
 assert.ok(model);for(const part of ['Страж','громовые рукавицы','Защитное поле','Лазутчик','метатель молний','Усиленные шаги','Подавляющее поле'])assert.ok(model.includes(part),part);
 assert.ok(arcane?.includes('Модель доспеха можно сменить после короткого или долгого отдыха'));
});

test('PR26 Rune Knight grants a replacement language when Giant is known',()=>{
 const base=create('fighter',null,{proficiencyChoices:{'race:human:0:0':'giant'}}),seed=advance(base);
 const p=L.begin(seed,context(seed));p.choices={subclass:'rune-knight'};const group=L.getChoices(seed,p,context(seed)).find(g=>g.id==='rune_knight_language');
 assert.ok(group);assert.ok(!group.options.some(o=>o.value==='giant'));const chosen=group.options[0].value;p.choices.rune_knight_language=chosen;
 const runes=L.getChoices(seed,p,context(seed)).find(g=>g.id==='runes');p.choices.runes=runes.options.slice(0,2).map(o=>o.value);
 const c=L.commit(seed,p,context(seed)),languages=R.resolveProficiencies(c,extras(c)).languages;
 assert.ok(languages.includes('giant'));assert.ok(languages.includes(chosen));
 const ordinary=advance(create('fighter'),'rune-knight');assert.ok(R.resolveProficiencies(ordinary,extras(ordinary)).languages.includes('giant'));
 assert.ok(!L.getChoices(create('fighter','life'),L.begin(create('fighter','life'),context(create('fighter','life'))),context(create('fighter','life'))).some(g=>g.id==='rune_knight_language'));
});

test('PR26 expanded cleric domains can select their legal starting equipment',()=>{
 for(const domain of ['forge','order','twilight']){
  const seed=create('cleric',domain),c={...seed,creation_weapon:'mace',creation_armor:'chain-mail',creation_worn_armor:'chain-mail'};
  assert.deepEqual(O.validate(c,context(c)),[],domain);
  assert.ok(O.getChoices(c,context(c)).find(g=>g.id==='creation_armor')?.options.some(o=>o.value==='chain-mail'),domain);
  assert.ok(O.getChoices(c,context(c)).find(g=>g.id==='creation_worn_armor')?.options.some(o=>o.value==='chain-mail'),domain);
 }
 for(const domain of ['death','twilight']){
  const c=create('cleric',domain,{creation_weapon:'warhammer'});
  assert.deepEqual(O.validate(c,context(c)),[],domain);
  assert.ok(O.getChoices(c,context(c)).find(g=>g.id==='creation_weapon')?.options.some(o=>o.value==='warhammer'),domain);
 }
 assert.ok(!O.getChoices(create('cleric','life'),context(create('cleric','life'))).find(g=>g.id==='creation_weapon')?.options.some(o=>o.value==='warhammer'));
});

test('PR26 Shadow sorcerers track Strength of the Grave from level one',()=>{
 const first=create('sorcerer','shadow');
 for(const c of [first,advance(first),advance(advance(first))]){
  const pool=extras(c).resources.find(r=>r.id==='strength-of-the-grave');assert.ok(pool);
  assert.equal(pool.max,1);assert.equal(pool.rest,'long-rest');
  assert.match(pool.recovery,/только при успешном спасброске/);assert.ok(JSON.stringify(exported(c).text.traits).includes('Сила могилы: 1; '+pool.recovery+'.'));
 }
 const multi=enter(create('fighter'),'sorcerer',{'sorcerer:creation_origin':'shadow'});
 assert.ok(extras(multi).resources.some(r=>r.id==='sorcerer:strength-of-the-grave'&&r.max===1));
 assert.ok(!extras(create('sorcerer','draconic')).resources.some(r=>r.id==='strength-of-the-grave'));
});

test('PR26 Divine Sense allows zero uses without displaying a negative count',()=>{
 for(const charisma of [6,8,10,16]){
  const c=create('paladin',null,{abilities:{strength:16,dexterity:16,constitution:16,intelligence:16,wisdom:16,charisma}});
  const uses=Math.max(0,1+stats(c).modifiers.charisma),pool=extras(c).resources.find(r=>r.id==='divine-sense');
  assert.ok(pool);assert.equal(pool.max,uses);assert.ok(extras(c).features.some(f=>f.description.includes(`Божественное чувство: ${uses} / долгий отдых`)));
  assert.ok(JSON.stringify(exported(c).text.traits).includes(`Божественное чувство: ${uses}; восстановление после долгого отдыха.`));
 }
});

test('PR26 Astral Self exposes the Wisdom unarmed strike only with active arms',()=>{
 const first=create('monk',null,{abilities:{strength:10,dexterity:14,constitution:16,intelligence:10,wisdom:18,charisma:10}}),second=advance(first),c=advance(second,'astral-self'),e=extras(c);
 const ordinary=e.attacks.find(a=>a.id==='unarmed'),astral=e.attacks.find(a=>a.id==='unarmed-astral-arms');
 assert.ok(ordinary&&astral);assert.equal(ordinary.ability,'dexterity');assert.equal(astral.ability,'wisdom');
 assert.equal(astral.attackBonus,6);assert.equal(astral.damage,'1d4+4');assert.match(astral.notes.join(' '),/активных руках.*досягаемость \+5/);
 assert.ok(exported(c).weaponsList.some(w=>w.name.value===astral.label&&w.ability==='wis'));
 assert.ok(!extras(advance(second,'open-hand')).attacks.some(a=>a.id==='unarmed-astral-arms'));
});

test('PR26 Soulknife exports both conditional psychic blade attacks',()=>{
 const c=advance(advance(create('rogue',null,{abilities:{strength:10,dexterity:18,constitution:14,intelligence:12,wisdom:14,charisma:12}})),'soulknife'),e=extras(c),out=exported(c);
 const primary=e.attacks.find(a=>a.id==='psychic-blade'),bonus=e.attacks.find(a=>a.id==='psychic-blade-bonus');
 assert.ok(primary&&bonus);assert.equal(primary.type,'psychic');assert.equal(primary.ability,'dexterity');
 assert.equal(primary.attackBonus,6);assert.equal(primary.damage,'1d6+4');assert.equal(bonus.attackBonus,6);assert.equal(bonus.damage,'1d4+4');
 assert.match(primary.notes.join(' '),/при действии Атака/);assert.match(bonus.notes.join(' '),/после атаки первым.*свободной второй руке/);
 assert.ok(out.weaponsList.some(w=>w.name.value===primary.label&&w.ability==='dex'));
 assert.ok(out.weaponsList.some(w=>w.name.value===bonus.label&&w.dmg.value==='1d4+4'));
 assert.ok(!extras(advance(advance(create('rogue')),'phantom')).attacks.some(a=>a.psychicBlade));
});

test('PR26 Death domain Reaper excludes restricted or classless cantrips',()=>{
 const c=create('cleric','death'),group=O.getChoices(c,context(c)).find(g=>g.id==='creation_domain_cantrips');
 assert.ok(group);assert.ok(!group.options.some(o=>o.value==='sapping-sting'));
 assert.ok(group.options.some(o=>o.value==='chill-touch'));
 c.creation_domain_cantrips='sapping-sting';assert.ok(O.validate(c,context(c)).some(e=>e.field==='creation_domain_cantrips'));
});

test('PR26 round nineteen: barbarian dip grants shields and weapons, preserving existing armor and saves',()=>{
 for(const cls of ['wizard','sorcerer']){
  const first=create(cls,null,{abilityMethod:'manual'}),second=enter(first,'barbarian');
  for(const c of [second,enter(second,'barbarian')]){
   assert.deepEqual(L.inspect(c,context(c)).errors,[]);assert.deepEqual(stats(c).proficiencies.armor,['shield']);
   for(const id of ['simple','martial'])assert.ok(stats(c).proficiencies.weapons.includes(id));
   assert.deepEqual(stats(c).proficiencies.savingThrows,stats(first).proficiencies.savingThrows);
   const prof=JSON.stringify(exported(c).text.prof);assert.match(prof,/Щиты/);assert.doesNotMatch(prof,/Лёгкие доспехи|Средние доспехи/);
  }
 }
 for(const first of [create('barbarian',null,{abilityMethod:'manual'}),create('fighter',null,{abilityMethod:'manual'}),create('wizard',null,{abilityMethod:'manual',race:'dwarf',race_sub:'mountain-dwarf'})]){
  const c=enter(first,first.class==='barbarian'?'wizard':'barbarian');
  assert.deepEqual(L.inspect(c,context(c)).errors,[]);
  for(const id of stats(first).proficiencies.armor)assert.ok(stats(c).proficiencies.armor.includes(id),first.class+': '+id);
  for(const name of ['Лёгкие доспехи','Средние доспехи'])assert.ok(JSON.stringify(exported(c).text.prof).includes(name));
 }
});

test('PR26 Glamour and Whispers bards track their short-rest abilities',()=>{
 const second=advance(create('bard'));
 for(const [subclass,id,name] of [['glamour','enthralling-performance','Завораживающее представление'],['whispers','words-of-terror','Слова ужаса']]){
  const c=advance(second,subclass),pool=extras(c).resources.find(r=>r.id===id);
  assert.ok(pool,subclass);assert.equal(pool.max,1);assert.equal(pool.rest,'short-rest');
  assert.ok(JSON.stringify(exported(c).text.traits).includes(`${name}: 1; восстановление после короткого или долгого отдыха.`));
 }
 assert.ok(!extras(second).resources.some(r=>['enthralling-performance','words-of-terror'].includes(r.id)));
});

test('PR26 Land druids track Natural Recovery at levels two and three',()=>{
 const first=create('druid'),second=advance(first,'land'),third=advance(second);
 for(const c of [second,third]){
  const pool=extras(c).resources.find(r=>r.id==='natural-recovery');
  assert.ok(pool);assert.equal(pool.max,1);assert.equal(pool.rest,'long-rest');
  assert.ok(JSON.stringify(exported(c).text.traits).includes('Естественное восстановление: 1; восстановление после долгого отдыха.'));
 }
 assert.ok(!extras(first).resources.some(r=>r.id==='natural-recovery'));
 assert.ok(!extras(advance(first,'moon')).resources.some(r=>r.id==='natural-recovery'));
});

test('PR26 ranger portal and hunter-sense uses match their subclasses',()=>{
 const second=advance(create('ranger')),portal=advance(second,'horizon-walker'),portalPool=extras(portal).resources.find(r=>r.id==='detect-portal');
 assert.ok(portalPool);assert.equal(portalPool.max,1);assert.equal(portalPool.rest,'short-rest');
 assert.ok(JSON.stringify(exported(portal).text.traits).includes('Обнаружение портала: 1; восстановление после короткого или долгого отдыха.'));
 for(const wisdom of [6,10,18]){
  const ranger=create('ranger',null,{abilities:{strength:16,dexterity:16,constitution:16,intelligence:16,wisdom,charisma:16}}),c=advance(advance(ranger),'monster-slayer'),pool=extras(c).resources.find(r=>r.id==='hunters-sense');
  assert.ok(pool);assert.equal(pool.max,Math.max(1,stats(c).modifiers.wisdom));assert.equal(pool.rest,'long-rest');
  assert.ok(JSON.stringify(exported(c).text.traits).includes(`Чутьё охотника: ${pool.max}; восстановление после долгого отдыха.`));
 }
 assert.ok(!extras(advance(second,'hunter')).resources.some(r=>['detect-portal','hunters-sense'].includes(r.id)));
});

test('PR26 Stone Rune grants passive 120-foot darkvision',()=>{
 const second=advance(create('fighter')),stone=advance(second,'rune-knight',{runes:['stone-rune','cloud-rune']}),ordinary=advance(second,'rune-knight',{runes:['cloud-rune','fire-rune']});
 assert.equal(stats(stone).darkvision,120);assert.equal(exported(stone).vitality.darkvision.value,120);
 assert.equal(stats(ordinary).darkvision,0);
});

test('PR26 Sun Soul exports its Dexterity-based Radiant Sun Bolt',()=>{
 const second=advance(create('monk')),c=advance(second,'sun-soul'),attack=extras(c).attacks.find(a=>a.id==='radiant-sun-bolt');
 assert.ok(attack);assert.equal(attack.type,'radiant');assert.equal(attack.ability,'dexterity');
 assert.equal(attack.attackBonus,2+stats(c).modifiers.dexterity);assert.equal(attack.damage,`1d4+${stats(c).modifiers.dexterity}`);
 assert.match(attack.notes.join(' '),/30 футов/);
 const weapon=exported(c).weaponsList.find(w=>w.name.value===attack.label);
 assert.ok(weapon);assert.equal(weapon.ability,'dex');assert.equal(weapon.dmg.value,attack.damage);
 assert.ok(!extras(advance(second,'open-hand')).attacks.some(a=>a.id==='radiant-sun-bolt'));
});

test('PR26 Beast rage exports all three conditional natural weapons and their rules',()=>{
 const second=advance(create('barbarian')),c=advance(second,'beast'),e=extras(c);
 const summary=e.features.find(f=>f.name==='Звериный облик')?.description;
 for(const rule of [/укус/i,/когти/i,/хвост/i,/половины/i,/ещё одну атаку/i,/реакцией/i])assert.match(summary,rule);
 for(const [id,die,type] of [['bite','1d8','piercing'],['claws','1d6','slashing'],['tail','1d8','piercing']]){
  const attack=e.attacks.find(a=>a.id==='beast-'+id);assert.ok(attack,id);assert.equal(attack.type,type);
  assert.equal(attack.ability,'strength');assert.equal(attack.damage,`${die}+${stats(c).modifiers.strength+2}`);
  assert.match(attack.notes.join(' '),/только во время ярости/i);
  assert.ok(exported(c).weaponsList.some(w=>w.name.value===attack.label&&w.dmg.value===attack.damage));
 }
 assert.ok(JSON.stringify(exported(c).text.traits).includes(summary));
 assert.ok(!extras(advance(second,'berserker')).attacks.some(a=>a.id.startsWith('beast-')));
});

test('PR26 Starry Form exports every constellation and the conditional Archer attack',()=>{
 const first=create('druid'),c=advance(first,'stars'),e=extras(c),summary=e.features.find(f=>f.name==='Звёздный облик')?.description;
 for(const rule of [/Лучник/i,/Чаша/i,/Дракон/i,/60 футов/i,/1к8 \+ МДР/i,/концентрации/i])assert.match(summary,rule);
 const attack=e.attacks.find(a=>a.id==='starry-archer');assert.ok(attack);
 assert.equal(attack.attackBonus,2+stats(c).modifiers.wisdom);assert.equal(attack.damage,`1d8+${stats(c).modifiers.wisdom}`);
 assert.ok(exported(c).weaponsList.some(w=>w.name.value===attack.label&&w.dmg.value===attack.damage));
 assert.ok(JSON.stringify(exported(c).text.traits).includes(summary));
 assert.ok(!extras(advance(first,'land')).attacks.some(a=>a.id==='starry-archer'));
});

test('PR26 Twilight Eyes of Night tracks its free sharing separately from slot uses',()=>{
 const first=create('cleric','twilight');
 for(const c of [first,advance(first),advance(advance(first))]){
  const e=extras(c),pool=e.resources.find(r=>r.id==='eyes-of-night');assert.ok(pool);
  assert.equal(pool.max,1);assert.equal(pool.rest,'long-rest');
  assert.match(e.features.find(f=>f.name==='Глаза ночи')?.description,/повторное применение требует ячейку/);
  assert.ok(JSON.stringify(exported(c).text.traits).includes(pool.name+': 1; восстановление после долгого отдыха.'));
 }
 assert.ok(!extras(create('cleric','life')).resources.some(r=>r.id==='eyes-of-night'));
});

test('PR26 Breath and Drake summon track free long-rest uses',()=>{
 for(const [cls,subclass,id,max] of [['monk','ascendant-dragon','breath-of-the-dragon',2],['ranger','drakewarden','drake-companion',1]]){
  const second=advance(create(cls)),c=advance(second,subclass),e=extras(c),pool=e.resources.find(r=>r.id===id);
  assert.ok(pool);assert.equal(pool.max,max);assert.equal(pool.rest,'long-rest');
  assert.ok(JSON.stringify(exported(c).text.traits).includes(`${pool.name}: ${max}; восстановление после долгого отдыха.`));
  assert.ok(!extras(second).resources.some(r=>r.id===id));
 }
});

test('PR26 psionic dice retain long-rest recovery with one short-rest replenishment',()=>{
 for(const [cls,subclass] of [['fighter','psi-warrior'],['rogue','soulknife']]){
  const c=advance(advance(create(cls)),subclass),e=extras(c),dice=e.resources.find(r=>r.id==='psionic-dice'),replenishment=e.resources.find(r=>r.id==='psi-replenishment');
  assert.ok(dice);assert.equal(dice.max,4);assert.equal(dice.rest,'long-rest');
  assert.ok(replenishment);assert.equal(replenishment.max,1);assert.equal(replenishment.rest,'short-rest');
  assert.match(e.features.find(f=>f.name==='Восполнение псионической энергии')?.description,/одну израсходованную псионическую кость/);
  const text=JSON.stringify(exported(c).text.traits);assert.ok(text.includes(replenishment.name+': 1; восстановление после короткого или долгого отдыха.'));
 }
});

test('PR26 net remains zero damage with Thrown Weapon Fighting at creation and advancement',()=>{
 const first=create('fighter',null,{creation_weapon:'net',creation_style:'thrown-weapon-fighting'}),net=extras(first).attacks.find(a=>a.id==='net');
 assert.ok(net);assert.equal(net.damage,'0');assert.equal(net.damageBonus,0);assert.match(net.notes.join(' '),/извлечь оружие частью атаки/);
 assert.equal(exported(first).weaponsList.find(w=>w.name.value===net.label)?.dmg.value,'0');
 const fighter=create('fighter',null,{creation_weapon:'net',creation_style:'archery'});
 let c=enter(fighter,'ranger');c=enter(c,'ranger',{style:'thrown-weapon-fighting'});
 const advancedNet=extras(c).attacks.find(a=>a.id==='net');assert.ok(advancedNet);assert.equal(advancedNet.damage,'0');assert.equal(advancedNet.damageBonus,0);
 assert.match(advancedNet.notes.join(' '),/извлечь оружие частью атаки/);
 assert.equal(exported(c).weaponsList.find(w=>w.name.value===advancedNet.label)?.dmg.value,'0');
});

test('PR26 multiclass weapon training removes obsolete nonproficiency notes from sheet and LSS',()=>{
 const first=create('sorcerer',null,{creation_weapon:'handaxe'}),before=extras(first).attacks.find(a=>a.id==='handaxe');
 assert.ok(before);assert.equal(before.proficient,false);assert.match(before.notes.join(' '),/Нет владения/);
 const c=enter(first,'fighter'),attack=extras(c).attacks.find(a=>a.id==='handaxe');
 assert.ok(attack);assert.equal(attack.proficient,true);assert.equal(attack.attackBonus,before.attackBonus+2);
 assert.ok(!attack.notes.some(note=>note.startsWith('Нет владения')));
 assert.ok(!JSON.stringify(exported(c).text.attacks).includes('Нет владения'));
});

test('PR26 Way of the Brush keeps the Xanathar choice of calligrapher or painter',()=>{
 const monk=advance(create('monk')),p=fill(monk,L.begin(monk,context(monk)),{subclass:'kensei'});
 assert.deepEqual(L.getChoices(monk,p,context(monk)).find(g=>g.id==='kensei_tool').options.map(o=>o.value),['calligrapher','painter']);
});

test('PR26 newest feedback: Astral Arms always export force attacks with a permitted ability',()=>{
 for(const wisdom of [10,14,18]){
  const first=create('monk',null,{abilities:{strength:10,dexterity:14,constitution:14,intelligence:10,wisdom,charisma:10}}),second=advance(first),c=advance(second,'astral-self'),e=extras(c),ordinary=e.attacks.find(a=>a.id==='unarmed'),arms=e.attacks.find(a=>a.id==='unarmed-astral-arms');
  assert.ok(arms);assert.equal(ordinary.type,'bludgeoning');assert.equal(arms.type,'force');const ability=stats(c).modifiers.wisdom>stats(c).modifiers.dexterity?'wisdom':'dexterity';assert.equal(arms.ability,ability);assert.equal(arms.attackBonus,2+stats(c).modifiers[ability]);assert.equal(arms.damage,`1d4+${stats(c).modifiers[ability]}`);assert.match(arms.notes.join(' '),/активных руках.*досягаемость \+5/);
  const data=exported(c),weapon=data.weaponsList.find(w=>w.name.value===arms.label);assert.ok(weapon);assert.equal(weapon.dmgType.value,'force');assert.equal(weapon.ability,ability==='wisdom'?'wis':'dex');assert.ok(JSON.stringify(data.text.attacks).includes(arms.notes.at(-1)));
  assert.ok(!extras(second).attacks.some(a=>a.astralArms));assert.ok(!extras(advance(second,'open-hand')).attacks.some(a=>a.astralArms));
 }
});
test('PR26 newest feedback: Tome excludes every existing cantrip but keeps pending choices',()=>{
 for(const overrides of [{},{race:'tiefling'},{human_feature:'human_alt',creation_feat:'magic-initiate',creation_feat_class:'wizard',creation_feat_cantrips:['fire-bolt','mage-hand'],creation_feat_spells:['shield']}]){
  const second=advance(create('warlock','celestial',overrides)),known=new Set(extras(second).spells.filter(x=>x.level===0).map(x=>x.id)),p=fill(second,L.begin(second,context(second)),{pact:'tome'}),group=L.getChoices(second,p,context(second)).find(g=>g.id==='tome_cantrips');
  for(const id of known)assert.ok(!group.options.some(o=>o.value===id),id);assert.equal(p.choices.tome_cantrips.length,3);assert.deepEqual(L.transition(second,p,context(second)).errors,[]);assert.deepEqual(L.getChoices(second,p,context(second)).find(g=>g.id==='tome_cantrips').options,group.options);
  const c=L.commit(second,p,context(second)),all=new Set(extras(c).spells.filter(x=>x.level===0).map(x=>x.id));assert.equal(all.size,known.size+3);
  const bad=copy(p);bad.choices.tome_cantrips[0]=second.creation_cantrips[0];assert.ok(L.transition(second,bad,context(second)).errors.some(x=>x.field==='tome_cantrips'));
 }
});
test('PR26 newest feedback: Arcane Shot exports its actual Intelligence save DC',()=>{
 for(const intelligence of [6,10,18]){
  const c=advance(advance(create('fighter',null,{abilities:{strength:14,dexterity:14,constitution:14,intelligence,wisdom:10,charisma:10}})),'arcane-archer'),e=extras(c),feature=e.features.find(f=>f.name==='Мистический выстрел'),dc=10+stats(c).modifiers.intelligence;
  assert.ok(feature);assert.ok(feature.description.includes('Сл спасброска '+dc));assert.match(feature.description,/8 \+ бонус мастерства \+ модификатор Интеллекта/);assert.match(feature.description,/два применения/i);assert.ok(JSON.stringify(exported(c).text.traits).includes(feature.description));assert.ok(e.resources.some(r=>r.id==='arcane-shot'&&r.max===2&&r.rest==='short-rest'));
 }
 assert.ok(!extras(advance(advance(create('fighter')),'champion')).features.some(f=>f.name==='Мистический выстрел'));
});
test('PR26 newest feedback: Ritual Caster cleric can choose and export Ceremony',()=>{
 const c=create('fighter',null,{human_feature:'human_alt',creation_feat:'ritual-caster',creation_feat_class:'cleric',creation_feat_spells:['ceremony','detect-magic']}),e=extras(c),spell=e.spells.find(x=>x.id==='ceremony');assert.ok(spell);assert.equal(spell.status,'ritual');assert.equal(e.spellcasting,null);
 assert.ok(O.getChoices(c,context(c)).find(g=>g.id==='creation_feat_spells').options.some(x=>x.value==='ceremony'));assert.deepEqual(O.validate(c,context(c)),[]);const exportData=E.buildLssExport(c,{},stats(c),e)[0];assert.ok(exportData.spells.slotless.includes(E.SPELL_IDS['detect-magic']));assert.match(JSON.stringify(exported(c).text.attacks),/Церемония.*ритуал.*Только ритуал/);assert.deepEqual(exported(c).spells,{});
 for(const invalid of ['cure-wounds','alarm']){const bad={...c,creation_feat_spells:[invalid,'detect-magic']};assert.ok(O.validate(bad,context(bad)).some(x=>x.field==='creation_feat_spells'));}
});
test('PR26 newest feedback: Bladesong and Armor Model summaries retain exact TCE benefits',()=>{
 const c=advance(create('wizard'),'bladesinging'),song=extras(c).features.find(f=>f.name==='Песнь клинка').description;assert.match(song,/без доспеха или в лёгком/);assert.match(song,/к спасброскам Телосложения.*концентрации/);assert.match(song,/атаки оружием двумя руками/);assert.ok(!song.includes('преимущество на Акробатику и спасброски'));assert.ok(JSON.stringify(exported(c).text.traits).includes(song));
 const armorer=advance(advance(create('artificer')),'armorer'),model=extras(armorer).features.find(f=>f.name==='Модель доспеха').description;for(const rule of [/1к8.*звуком/,/помехой.*до начала вашего следующего хода/,/1к6.*молнией/,/90\/300/,/дополнительн.*1к6.*раз в.*ход/,/\+5 футов.*ходьбы/,/Интеллект.*атаки и урона/,/отменяет помеху от доспеха/]){assert.match(model,rule);}assert.ok(!model.includes('прыжок'));assert.ok(JSON.stringify(exported(armorer).text.traits).includes(model));
});

test('PR26 round eight: Astral activation and Sea Aura export the actual saving throws',()=>{
 for(const value of [10,18]){
  const monk=advance(advance(create('monk',null,{abilities:{strength:10,dexterity:14,constitution:14,intelligence:10,wisdom:value,charisma:10}})),'astral-self'),arms=extras(monk).features.find(f=>f.name==='Руки астрального Я').description;for(const text of ['10 футов','Ловкости','Сл '+(10+stats(monk).modifiers.wisdom),'2к4','силовым','при успехе урона нет'])assert.ok(arms.includes(text),text);assert.ok(JSON.stringify(exported(monk).text.traits).includes(arms));
  const barbarian=advance(advance(create('barbarian',null,{abilities:{strength:14,dexterity:14,constitution:value,intelligence:10,wisdom:10,charisma:10}})),'storm-herald',{storm_environment:'sea'}),aura=extras(barbarian).features.find(f=>f.name==='Аура бури').description;for(const text of ['Ловкости','Сл '+(10+stats(barbarian).modifiers.constitution),'1к6','половину','видимое','10 футов'])assert.ok(aura.includes(text),text);assert.ok(JSON.stringify(exported(barbarian).text.traits).includes(aura));
 }
});
test('PR26 round eight: Unarmed Fighting retains d6 and exports a conditional d8',()=>{
 const first=create('fighter',null,{creation_style:'unarmed-fighting'}),multi=enter(create('sorcerer'),'fighter',{'fighter:creation_style':'unarmed-fighting'});
 for(const c of [first,advance(first),advance(advance(first)),multi]){const e=extras(c),ordinary=e.attacks.find(a=>a.id==='unarmed'),variant=e.attacks.find(a=>a.id==='unarmed-d8');assert.ok(variant);assert.match(ordinary.damage,/^1d6/);assert.equal(variant.damage,ordinary.damage.replace('1d6','1d8'));assert.equal(variant.attackBonus,ordinary.attackBonus);assert.match(variant.notes.join(' '),/ни оружия, ни щита/);assert.ok(e.attacks.some(a=>a.group==='martial'||a.group==='simple'));assert.equal(e.attacks.length,new Set(e.attacks.map(a=>a.id)).size);assert.ok(exported(c).weaponsList.some(w=>w.name.value===variant.label&&w.dmg.value===variant.damage));}
 assert.ok(!extras(create('fighter')).attacks.some(a=>a.id==='unarmed-d8'));
});
test('PR26 round eight: daily Arcane Recovery and DM-restorable Tides have precise counters',()=>{
 const wizard=create('wizard'),wild=create('sorcerer','wild');
 for(const c of [wizard,advance(wizard),advance(advance(wizard)),enter(create('fighter'),'wizard')]){const pools=extras(c).resources.filter(r=>r.id.endsWith('arcane-recovery'));assert.equal(pools.length,1);assert.equal(pools[0].max,1);assert.equal(pools[0].rest,'daily');assert.match(pools[0].recovery,/раз в день/);assert.ok(JSON.stringify(exported(c).text.traits).includes(pools[0].recovery));}
 for(const c of [wild,advance(wild),advance(advance(wild)),enter(create('fighter'),'sorcerer',{'sorcerer:creation_origin':'wild'})]){const pools=extras(c).resources.filter(r=>r.id.endsWith('tides-of-chaos'));assert.equal(pools.length,1);assert.equal(pools[0].max,1);assert.equal(pools[0].rest,'long-rest');assert.match(pools[0].recovery,/долгого отдыха/);assert.match(pools[0].recovery,/решению Мастера/);assert.ok(JSON.stringify(exported(c).text.traits).includes(pools[0].recovery));}
 assert.ok(!extras(create('sorcerer','draconic')).resources.some(r=>r.id==='tides-of-chaos'));
});
test('PR26 round eight: Superior Technique gives both Strength and Dexterity save DCs',()=>{
 const first=create('fighter',null,{creation_style:'superior-technique',creation_superior_maneuver:'trip-attack',abilities:{strength:16,dexterity:12,constitution:14,intelligence:10,wisdom:10,charisma:10}});
 for(const c of [first,advance(first),enter(create('sorcerer'),'fighter',{'fighter:creation_style':'superior-technique','fighter:creation_superior_maneuver':'trip-attack'})]){const e=extras(c),text=e.features.find(f=>f.name==='Превосходная техника').description;assert.ok(text.includes((10+stats(c).modifiers.strength)+' от Силы'));assert.ok(text.includes((10+stats(c).modifiers.dexterity)+' от Ловкости'));assert.match(text,/8 \+ бонус мастерства/);assert.ok(JSON.stringify(exported(c).text.traits).includes(text));}
});
test('PR26 round eight: Hex Warrior preserves lower, tied and higher Charisma choices',()=>{
 for(const charisma of [10,14,18]){const c=create('warlock','hexblade',{creation_weapon:'handaxe',abilities:{strength:14,dexterity:14,constitution:14,intelligence:10,wisdom:10,charisma}}),e=extras(c),base=e.attacks.find(a=>a.id==='handaxe'),hex=e.attacks.find(a=>a.id==='handaxe-hex');assert.ok(hex);assert.equal(base.ability,'strength');assert.equal(hex.ability,'charisma');assert.equal(hex.attackBonus,2+stats(c).modifiers.charisma);assert.equal(hex.damageBonus,stats(c).modifiers.charisma);assert.match(hex.notes.join(' '),/выбрано после долгого отдыха/);assert.ok(!e.attacks.some(a=>a.hexWarrior&&(a.group==='unarmed'||a.properties.includes('two-handed'))));assert.ok(exported(c).weaponsList.some(w=>w.name.value===hex.label&&w.ability==='cha'));}
});

test('PR26 round eight: Martial Arts preserves explicit Hex Warrior ability in multiclass',()=>{
 for(const charisma of [13,16,18]){
  const monk=create('monk',null,{creation_weapon:'handaxe',abilities:{strength:13,dexterity:16,constitution:14,intelligence:10,wisdom:13,charisma}}),multi=enter(monk,'warlock',{'warlock:creation_patron':'hexblade'});
  for(const c of [multi,advance(multi)]){const e=extras(c),m=stats(c).modifiers,base=e.attacks.find(a=>a.id==='handaxe'),hex=e.attacks.find(a=>a.id==='handaxe-hex');assert.equal(base.ability,'dexterity');assert.equal(base.attackBonus,2+m.dexterity);assert.equal(hex.ability,'charisma');assert.equal(hex.attackBonus,2+m.charisma);assert.equal(hex.damageBonus,m.charisma);assert.equal(hex.damage,'1d6+'+m.charisma);assert.ok(exported(c).weaponsList.some(w=>w.name.value===hex.label&&w.ability==='cha'&&w.dmg.value===hex.damage));}
 }
});

test('PR26 round nine: Knowledge multiclass retains trained skills and distinct expertise',()=>{
 const bard=create('bard',null,{proficiencyChoices:{'class:bard:0:0':'nature','class:bard:0:1':'religion','class:bard:0:2':'perception'}}),before=stats(bard).proficiencies;
 for(const pair of [['arcana','history'],['nature','religion']]){
  const p=L.selectClass(bard,L.begin(bard,context(bard)),'cleric',context(bard)),ids=pair.map((_,i)=>'cleric:proficiency:creation:knowledge-skill:'+i);p.choices['cleric:creation_domain']='knowledge';
  assert.deepEqual(L.getChoices(bard,p,context(bard)).find(g=>g.id===ids[0]).options.map(o=>o.value),['arcana','history','nature','religion']);
  fill(bard,p,{...p.choices,[ids[0]]:pair[0],[ids[1]]:pair[1]});assert.ok(!L.getChoices(bard,p,context(bard)).find(g=>g.id===ids[1]).options.some(o=>o.value===pair[0]));assert.deepEqual(L.transition(bard,p,context(bard)).errors,[]);
  const c=L.commit(bard,p,context(bard)),profs=stats(c).proficiencies;assert.deepEqual(profs.skills.slice().sort(),before.skills.slice().sort());for(const id of pair)assert.ok(profs.expertise.includes(id));assert.ok(!profs.slots.some(s=>s.id.startsWith('replacement:')));assert.equal(profs.expertise.length,new Set(profs.expertise).size);assert.match(JSON.stringify(exported(c).text.prof),/Компетентность/);
  const bad=copy(p);bad.choices[ids[1]]=pair[0];assert.ok(L.transition(bard,bad,context(bard)).errors.length);
 }
 const cleric=create('cleric','knowledge');cleric.proficiencyChoices['creation:knowledge-skill:0']='arcana';cleric.proficiencyChoices['creation:knowledge-skill:1']='history';assert.deepEqual(stats(cleric).proficiencies.errors,[]);const bad=copy(cleric);bad.proficiencyChoices['creation:knowledge-skill:1']='arcana';assert.ok(stats(bad).proficiencies.errors.length);
});
test('PR26 round nine: Spell Sniper grants supplemental attack cantrips by feat class',()=>{
 for(const cls of ['wizard','sorcerer','warlock'])for(const id of ['booming-blade','green-flame-blade']){
  const c=create(cls,null,{human_feature:'human_alt',creation_feat:'spell-sniper',creation_feat_class:cls,creation_feat_cantrips:[id]}),e=extras(c),spell=e.spells.find(s=>s.id===id&&s.limitExempt);assert.ok(O.getChoices(c,context(c)).find(g=>g.id==='creation_feat_cantrips').options.some(o=>o.value===id));assert.deepEqual(O.validate(c,context(c)),[]);assert.equal(spell.ability,cls==='wizard'?'intelligence':'charisma');const native=exported(c),text=JSON.stringify(native.text.attacks);assert.ok(text.includes(spell.label));assert.ok(text.includes(cls==='wizard'?'Интеллект':'Харизма'));if(E.SPELL_IDS[id])assert.equal(native.spellsInfo.abilities[E.SPELL_IDS[id]],cls==='wizard'?'int':'cha');else assert.match(text,/карточки нет в каталоге LSS/);
  const bad=copy(c);bad.creation_feat_cantrips=['acid-splash'];assert.ok(O.validate(bad,context(bad)).some(err=>err.field==='creation_feat_cantrips'));
 }
 const druid=create('druid',null,{human_feature:'human_alt',creation_feat:'spell-sniper',creation_feat_class:'druid'});assert.ok(!O.getChoices(druid,context(druid)).find(g=>g.id==='creation_feat_cantrips').options.some(o=>['booming-blade','green-flame-blade'].includes(o.value)));
});
test('PR26 round nine: subclass free uses keep independent pools and paid fallbacks',()=>{
 for(const [cls,branch,id,max,rest,feature] of [['bard','creation','performance-of-creation',1,'long-rest','Представление созидания'],['fighter','psi-warrior','telekinetic-movement',1,'short-rest','Телекинетическое перемещение'],['rogue','soulknife','psychic-whispers',1,'long-rest','Психический шёпот'],['warlock',null,'pact-talisman',2,'long-rest','Предмет договора']]){
  const second=advance(create(cls));assert.ok(!extras(second).resources.some(r=>r.id===id));const c=advance(second,branch,cls==='warlock'?{pact:'talisman'}:{}),e=extras(c),pools=e.resources.filter(r=>r.id===id);assert.equal(pools.length,1);assert.equal(pools[0].max,max);assert.equal(pools[0].rest,rest);const text=e.features.find(f=>f.name===feature).description;assert.match(text,cls==='bard'?/ячейку 2-го круга/:cls==='warlock'?/бонусу мастерства/:/кости|кость/);assert.ok(JSON.stringify(exported(c).text.traits).includes(pools[0].name+': '+max+'; восстановление после '+(rest==='short-rest'?'короткого или долгого':'долгого')+' отдыха.'));
  if(['fighter','rogue'].includes(cls)){assert.equal(e.resources.find(r=>r.id==='psionic-dice').max,4);assert.equal(e.resources.find(r=>r.id==='psi-replenishment').max,1);}
 }
 for(const [cls,branch] of [['bard','lore'],['fighter','champion'],['rogue','thief']])assert.ok(!extras(advance(advance(create(cls)),branch)).resources.some(r=>['performance-of-creation','telekinetic-movement','psychic-whispers'].includes(r.id)));
 assert.ok(!extras(advance(advance(create('warlock')),null,{pact:'blade'})).resources.some(r=>r.id==='pact-talisman'));
});
test('PR26 round nine: Armorer models export ordinary and Intelligence weapon profiles',()=>{
 for(const intelligence of [8,13,18]){
  const first=create('artificer',null,{abilities:{strength:16,dexterity:12,constitution:14,intelligence,wisdom:10,charisma:10}}),second=advance(first);assert.ok(!extras(second).attacks.some(a=>a.armorerWeapon));const c=advance(second,'armorer'),e=extras(c),m=stats(c).modifiers;assert.equal(e.attacks.filter(a=>a.armorerWeapon).length,4);assert.equal(e.attacks.length,new Set(e.attacks.map(a=>a.id)).size);assert.ok(!Object.hasOwn(c.advancement.entries.at(-1).choices,'armor_model'));
  for(const [id,ability,die,type] of [['armorer-thunder-gauntlets','strength','1d8','thunder'],['armorer-lightning-launcher','dexterity','1d6','lightning']])for(const variant of [false,true]){const attack=e.attacks.find(a=>a.id===id+(variant?'-int':'')),ab=variant?'intelligence':ability;assert.equal(attack.ability,ab);assert.equal(attack.attackBonus,2+m[ab]);assert.equal(attack.damageBonus,m[ab]);assert.equal(attack.damage,die+(m[ab]>=0?'+':'')+m[ab]);assert.equal(attack.type,type);assert.equal(attack.proficient,true);assert.match(attack.notes.join(' '),/модель|модели/);assert.match(attack.notes.join(' '),/доспех/);if(type==='lightning'){assert.match(attack.notes.join(' '),/90.*300/);assert.match(attack.notes.join(' '),/раз.*свой ход.*1к6/);}else{assert.match(attack.notes.join(' '),/свободн/);assert.match(attack.notes.join(' '),/помех/);}assert.ok(exported(c).weaponsList.some(w=>w.name.value===attack.label&&w.ability===({strength:'str',dexterity:'dex',intelligence:'int'})[ab]&&w.dmg.value===attack.damage));}
 }
 assert.ok(!extras(advance(advance(create('artificer')),'alchemist')).attacks.some(a=>a.armorerWeapon));
});


test('PR26 round nine: Knowledge expertise preserves the rogue existing expertise without stacking',()=>{
 const rogue=create('rogue'),before=stats(rogue);assert.ok(before.proficiencies.expertise.includes('arcana'));assert.ok(before.proficiencies.expertise.includes('history'));const c=enter(rogue,'cleric',{'cleric:creation_domain':'knowledge','cleric:proficiency:creation:knowledge-skill:0':'arcana','cleric:proficiency:creation:knowledge-skill:1':'history'}),after=stats(c);assert.deepEqual(after.proficiencies.errors,[]);assert.deepEqual(after.proficiencies.expertise.slice().sort(),before.proficiencies.expertise.slice().sort());for(const id of ['arcana','history'])assert.equal(after.skills[id],after.modifiers.intelligence+2*after.proficiencyBonus);const bad=copy(c);bad.proficiencyChoices['class:rogue:expertise:1']=bad.proficiencyChoices['class:rogue:expertise:0'];assert.ok(stats(bad).proficiencies.errors.length);
});
test('PR26 round nine: Spell Sniper also permits Primal Savagery from Xanathar',()=>{
 const c=create('druid',null,{human_feature:'human_alt',creation_feat:'spell-sniper',creation_feat_class:'druid',creation_feat_cantrips:['primal-savagery']}),spell=extras(c).spells.find(s=>s.id==='primal-savagery'&&s.limitExempt);assert.ok(spell);assert.equal(spell.ability,'wisdom');assert.deepEqual(O.validate(c,context(c)),[]);const text=JSON.stringify(exported(c).text.attacks);assert.ok(text.includes(spell.label));assert.ok(text.includes('Мудрость'));for(const id of ['acid-splash','toll-the-dead','booming-blade']){const bad=copy(c);bad.creation_feat_cantrips=[id];assert.ok(O.validate(bad,context(bad)).some(e=>e.field==='creation_feat_cantrips'));}
});


test('PR26 round nine: Knowledge expertise can reuse a replacement proficiency',()=>{
 const c=create('cleric','knowledge',{race:'half-orc',background:'soldier'});c.proficiencyChoices['replacement:skill:intimidation:1']='nature';c.proficiencyChoices['creation:knowledge-skill:0']='nature';c.proficiencyChoices['creation:knowledge-skill:1']='arcana';const derived=stats(c);assert.deepEqual(derived.proficiencies.errors,[]);assert.equal(derived.proficiencies.skills.filter(id=>id==='nature').length,1);assert.ok(derived.proficiencies.expertise.includes('nature'));assert.equal(derived.skills.nature,derived.modifiers.intelligence+2*derived.proficiencyBonus);const bad=copy(c);bad.proficiencyChoices['replacement:skill:intimidation:1']=c.proficiencyChoices['class:cleric:0:0'];assert.ok(stats(bad).proficiencies.errors.some(e=>e.id==='replacement:skill:intimidation:1'));
});

test('PR26 round ten: Shepherd totem exports all mutable spirits with class-level healing',()=>{
 const second=advance(create('druid'),'shepherd');
 for(const c of [second,advance(second),enter(second,'fighter')]){const e=extras(c),level=e.classes.find(x=>x.id==='druid').level,text=e.features.find(f=>f.name==='Тотемный дух').description;
  for(const pattern of [/Медведь/,/Ястреб/,/Единорог/,/30 футов/,/60 футов/,/реакци.*преимущество/,/Восприятие/,/проверки Силы и спасброски Силы/,/внутри или вне ауры/,/ячейк/])assert.match(text,pattern);
  assert.ok(text.includes((5+level)+' временных хитов'));assert.ok(text.includes('восстанавливают '+level+' хитов'));assert.ok(JSON.stringify(exported(c).text.traits).includes(text));assert.equal(e.resources.find(r=>r.id.endsWith('spirit-totem')).max,1);assert.ok(!Object.hasOwn(c.advancement.entries.at(-1).choices,'spirit'));
 }
});
test('PR26 round ten: Rune Knight gives CON save DC alongside selected rune effects',()=>{
 for(const constitution of [8,14,18]){const c=advance(advance(create('fighter',null,{abilities:{strength:16,dexterity:16,constitution,intelligence:16,wisdom:16,charisma:16}})),'rune-knight',{runes:['fire-rune','stone-rune']}),e=extras(c),text=e.features.find(f=>f.name==='Резчик рун').description;
  assert.ok(text.includes('Сл спасброска '+(10+stats(c).modifiers.constitution)));assert.match(text,/8 \+ бонус мастерства \+ модификатор Телосложения/);assert.match(e.features.find(f=>f.name==='Руны').description,/СИЛ.*МДР|МДР.*СИЛ/);for(const id of ['fire-rune','stone-rune'])assert.equal(e.resources.find(r=>r.id===id).rest,'short-rest');assert.ok(JSON.stringify(exported(c).text.traits).includes(text));
 }
});
test('PR26 round ten: Cavalier retaliation keeps advantage, extra damage and mark conditions',()=>{
 const c=advance(advance(create('fighter')),'cavalier'),text=extras(c).features.find(f=>f.name==='Непоколебимая метка').description;
 for(const pattern of [/5 футов/,/следующий ход/,/с преимуществом/,/\+1.*урон/,/половин.*уровня воина/,/минимум 1/,/меток не ограничено/])assert.match(text,pattern);assert.ok(JSON.stringify(exported(c).text.traits).includes(text));
});
test('PR26 round ten: Artillerist cannon describes activation and all three modes',()=>{
 for(const intelligence of [8,18]){const c=advance(advance(create('artificer',null,{abilities:{strength:16,dexterity:16,constitution:16,intelligence,wisdom:16,charisma:16}})),'artillerist'),text=extras(c).features.find(f=>f.name==='Мистическая пушка').description,m=stats(c).modifiers.intelligence;
  for(const pattern of [/бонусным действием/,/60 футов/,/Огнемёт.*конус 15/,/2к8.*огн/,/половин/,/Силовая баллиста.*120/,/2к8.*силовым полем/,/отталкивает.*5 футов/,/Защитник.*10 футов/,/самой пушке/,/минимум 1 временный хит/])assert.match(text,pattern);
  assert.ok(text.includes('Сл '+(10+m)));assert.ok(text.includes('бонус атаки '+(m+2>=0?'+':'')+(m+2)));assert.ok(text.includes('1к8'+(m>=0?'+':'')+m));assert.ok(JSON.stringify(exported(c).text.traits).includes(text));assert.equal(extras(c).resources.find(r=>r.id==='eldritch-cannon').max,1);
 }
});
test('PR26 round ten: Swords flourishes retain conditional damage, AC and movement',()=>{
 const c=advance(advance(create('bard')),'swords'),e=extras(c),text=e.features.find(f=>f.name==='Росчерк клинка').description;
 for(const pattern of [/действи.*Атака/,/один росчерк за ход/,/вдохновени.*к6/,/Оборонительный.*КД.*следующего хода/,/Режущий.*другому.*5 футов от вас/,/Мобильный.*5.*результат/,/реакци.*скорости.*незанят.*5 футов от цели/])assert.match(text,pattern);assert.ok(JSON.stringify(exported(c).text.traits).includes(text));assert.equal(e.speedBonus||0,0);
});
test('PR26 round ten: Dreams Balm rounds class-level dice limit down',()=>{
 const second=advance(create('druid'),'dreams');for(const c of [second,advance(second),enter(second,'fighter')]){const e=extras(c),level=e.classes.find(x=>x.id==='druid').level,text=e.features.find(f=>f.name==='Бальзам Летнего двора').description;assert.ok(text.includes('Запас '+level+'к6'));assert.ok(text.includes('до '+Math.floor(level/2)+' костей'));assert.match(text,/округлением вниз/);assert.match(text,/120 футов/);assert.ok(JSON.stringify(exported(c).text.traits).includes(text));assert.equal(e.resources.find(r=>r.id.endsWith('balm-of-summer-court')).max,level);}
});
test('PR26 round ten: origin spell replacement allows relearning the removed bonus during the same level',()=>{
 for(const [branch,original,replacement,remove,add] of [['aberrant-mind','detect-thoughts','suggestion','bonus_remove','bonus_add'],['divine-soul','cure-wounds','bless','spell_remove','spell_add']]){
  const c=branch==='aberrant-mind'?advance(create('sorcerer',branch)):create('sorcerer',branch,{creation_affinity:'good'}),p=fill(c,L.begin(c,context(c)),{[remove]:original,[add]:replacement});
  const learn=L.getChoices(c,p,context(c)).find(g=>g.id==='learn');assert.ok(learn.options.some(o=>o.value===original),branch+': former bonus is learnable');assert.ok(!learn.options.some(o=>o.value===replacement),branch+': active replacement is automatic');p.choices.learn=[original];assert.deepEqual(L.transition(c,p,context(c)).errors,[]);const next=L.commit(c,p,context(c)),state=L.inspect(next,context(next)).state;assert.ok(state.known.includes(original));assert.ok(!L.automaticSpells(next,state).includes(original));assert.ok(L.automaticSpells(next,state).includes(replacement));const spells=extras(next).spells;assert.ok(spells.some(s=>s.id===original&&!s.limitExempt));assert.ok(spells.some(s=>s.id===replacement&&s.limitExempt));const data=E.buildLssExport(next,{},stats(next),extras(next))[0],spellId=E.SPELL_IDS[original];if(spellId)assert.ok(data.spells.prepared.includes(spellId));else assert.ok(JSON.stringify(JSON.parse(data.data).text.attacks).includes(L.label(original)));const bad=copy(p);bad.choices[add]='fireball';assert.ok(L.transition(c,bad,context(c)).errors.length);
  if(branch==='divine-soul'){const replaced=advance(c,null,{spell_remove:original,spell_add:replacement}),relearned=advance(replaced,null,{learn:[original]});assert.ok(extras(relearned).spells.some(s=>s.id===original&&!s.limitExempt));const third=advance(next);assert.deepEqual(L.inspect(third,context(third)).errors,[]);assert.ok(extras(third).spells.some(s=>s.id===original&&!s.limitExempt));}
 }
});

test('PR26 round eleven: Divine Soul cleric access stays within sorcerer lists',()=>{
 const c=create('sorcerer','divine-soul',{human_feature:'human_alt',creation_feat:'magic-initiate',creation_feat_class:'wizard'});
 for(const [cls,id,level] of [['wizard','guidance',0],['wizard','cure-wounds',1],['warlock','guidance',0]])assert.ok(!L.spellList(cls,level,c,undefined,level===0).includes(id));
 for(const [id,level] of [['guidance',0],['cure-wounds',1]])assert.ok(L.spellList('sorcerer',level,c,undefined,level===0).includes(id));
 const groups=O.getChoices(c,context(c));assert.ok(!groups.find(g=>g.id==='creation_feat_cantrips').options.some(o=>o.value==='guidance'));assert.ok(!groups.find(g=>g.id==='creation_feat_spells').options.some(o=>o.value==='cure-wounds'));
 for(const [field,value] of [['creation_feat_cantrips',['guidance','mage-hand']],['creation_feat_spells',['cure-wounds']]]){const bad=copy(c);bad[field]=value;assert.ok(O.validate(bad,context(bad)).some(e=>e.field===field));}
 const clericFeat=create('sorcerer','divine-soul',{human_feature:'human_alt',creation_feat:'magic-initiate',creation_feat_class:'cleric',creation_feat_cantrips:['guidance','sacred-flame'],creation_feat_spells:['cure-wounds']});assert.deepEqual(O.validate(clericFeat,context(clericFeat)),[]);
});
test('PR26 round eleven: Fey Wanderer never grants unrelated skill when all three are trained',()=>{
 const c=create('ranger',null,{human_feature:'human_alt',creation_feat:'skilled'}),slots=stats(c).proficiencies.slots.filter(s=>s.id.includes('skilled'));
 for(const [i,id] of ['deception','performance','persuasion'].entries())c.proficiencyChoices[slots[i].id]=id;
 assert.deepEqual(stats(c).proficiencies.errors,[]);const second=advance(c),p=fill(second,L.begin(second,context(second)),{subclass:'fey-wanderer'}),group=L.getChoices(second,p,context(second)).find(g=>g.id==='fey_skill');assert.deepEqual(group.options.map(o=>o.value).sort(),['deception','performance','persuasion']);
 const next=L.commit(second,p,context(second));assert.deepEqual(stats(next).proficiencies.skills.slice().sort(),stats(second).proficiencies.skills.slice().sort());assert.ok(!stats(next).proficiencies.slots.some(s=>s.id.startsWith('replacement:')));const bad=copy(p);bad.choices.fey_skill='athletics';assert.ok(L.transition(second,bad,context(second)).errors.some(e=>e.field==='fey_skill'));
 const archer=advance(create('fighter',null,{background:'sage',human_feature:'human_alt',creation_feat:'alert',proficiencyChoices:{'human-alt:0:0':'nature'}})),archerPlan=fill(archer,L.begin(archer,context(archer)),{subclass:'arcane-archer'});const fallback=L.getChoices(archer,archerPlan,context(archer)).find(g=>g.id==='archer_skill');assert.ok(fallback.options.length);assert.ok(fallback.options.every(o=>!['arcana','nature'].includes(o.value)));
});
test('PR26 round eleven: Bladesinger training accepts only one-handed melee weapons',()=>{
 const c=create('wizard'),p=fill(c,L.begin(c,context(c)),{subclass:'bladesinging'}),g=L.getChoices(c,p,context(c)).find(g=>g.id==='bladesinger_weapon');assert.ok(!g.options.some(o=>o.value==='greatclub'));for(const o of g.options){const weapon=O.WEAPONS[o.value.replace(/_/g,'-')];assert.ok(weapon,o.value);assert.ok(!weapon.properties.some(p=>['two-handed','ranged'].includes(p)),o.value);}
 for(const id of ['longsword','quarterstaff','spear'])assert.ok(g.options.some(o=>o.value===id));const bad=copy(p);bad.choices.bladesinger_weapon='greatclub';assert.ok(L.transition(c,bad,context(c)).errors.some(e=>e.field==='bladesinger_weapon'));p.choices.bladesinger_weapon='longsword';assert.ok(stats(L.commit(c,p,context(c))).proficiencies.weapons.includes('longsword'));
});
test('PR26 round eleven: Improved Minor Illusion survives either bonus cantrip selection',()=>{
 for(const known of [false,true]){const first=create('wizard',null,known?{creation_cantrips:['minor-illusion','fire-bolt','mage-hand']}:{}),second=advance(first,'illusion',known?{illusion_cantrip:'ray-of-frost'}:{});
  for(const c of [second,advance(second)]){const e=extras(c),features=e.features.filter(f=>f.name==='Улучшенная малая иллюзия');assert.equal(features.length,1);assert.match(features[0].description,/звук.*изображени.*одн|одн.*звук.*изображени/);assert.ok(JSON.stringify(exported(c).text.traits).includes(features[0].description));assert.ok(e.spells.some(s=>s.id==='minor-illusion'));assert.ok(e.spells.some(s=>s.id===(known?'ray-of-frost':'minor-illusion')&&s.limitExempt));}
 }
});
test('PR26 round eleven: catalogue effects are classified only when verified',()=>{
 const info=require('../spell-info');for(const id of ['scorching-ray','shatter','moonbeam']){assert.equal(info.get(id).kind,'damage');assert.equal(info.get(id).kindLabel,'Урон');}
 for(const id of ['aid','web','mirror-image']){assert.equal(info.get(id).kind,'unknown');assert.equal(info.get(id).kindLabel,'Без категории');}
 assert.equal(info.get('fire-bolt').kind,'damage');assert.equal(info.get('minor-illusion').kind,'utility');assert.equal(info.get('not-a-spell'),null);
});

test('PR26 round twelve: Sneak Attack retains legal triggers and rogue-level dice in sheet export',()=>{
 const second=advance(create('rogue')),third=advance(second,'thief'),mixed=enter(second,'fighter');
 for(const [c,dice] of [[second,'1к6'],[third,'2к6'],[mixed,'1к6']]){
  const e=extras(c),f=e.features.find(f=>f.name==='Скрытая атака');assert.ok(f);assert.ok(f.description.includes(dice));
  for(const pattern of [/один раз за ход/,/фехтовальн/,/дальнобойн/,/преимуществ/,/другой враг цели/,/5 фут/,/не недееспособ/,/без помехи/])assert.match(f.description,pattern);
  assert.ok(JSON.stringify(exported(c).text.traits).includes(f.description));assert.equal(e.features.filter(f=>f.name==='Скрытая атака').length,1);
 }
});

test('PR26 round twelve: Wild Surge exports all eight conditional outcomes with Constitution DC',()=>{
 for(const constitution of [6,16]){
  const second=advance(create('barbarian',null,{abilities:{strength:16,dexterity:14,constitution,intelligence:12,wisdom:10,charisma:8}})),c=advance(second,'wild-magic'),e=extras(c),text=e.features.find(f=>f.name==='Дикий всплеск').description;
  assert.ok(text.includes('Сл '+(10+stats(c).modifiers.constitution)));assert.match(text,/модификатор Телосложения/);assert.match(text,/к8/);
  const outcomes=text.split(/(?:^|\n)[1-8]\. /).slice(1);assert.equal(outcomes.length,8);
  assert.match(outcomes[0],/Вам — 1к12 временных хитов\./);assert.doesNotMatch(outcomes[0],/1к12\s*\+|уровень|уровня/);
  const checks=[[/30 фут/,/Телосложения/,/1к12.*некротическ/,/1к12 временных/],[/30 фут/,/свободн/,/видим/,/бонусным действием/],[/фламф/,/пикси/,/5 фут/,/30 фут/,/конце.*хода/,/Ловкости/,/1к6.*силов/,/бонусным действием/],[/силов/,/лёгкое/,/метательное/,/20\/60/,/конце.*хода/],[/попадан/,/1к6.*силов/],[/союзник/,/10 фут/,/\+1.*КД/],[/15 фут/,/труднопроходим/,/врагов/],[/30 фут/,/Телосложения/,/1к6.*излучен/,/ослеп/,/начала.*следующего хода/,/бонусным действием/]];
  checks.forEach((patterns,i)=>patterns.forEach(p=>assert.match(outcomes[i],p)));text.split("\n").forEach(line=>assert.ok(JSON.stringify(exported(c).text.traits).includes(line)));assert.equal(stats(c).ac,stats(second).ac);assert.equal(stats(c).speed,stats(second).speed);
 }
});

test('PR26 round twelve: Steel Defender exports a separate usable profile scaled by Intelligence',()=>{
 for(const intelligence of [6,16]){
  const second=advance(create('artificer',null,{abilities:{strength:8,dexterity:14,constitution:14,intelligence,wisdom:12,charisma:10}})),c=advance(second,'battle-smith'),e=extras(c),f=e.features.find(f=>f.name==='Стальной защитник'),hp=17+stats(c).modifiers.intelligence,attack=2+stats(c).modifiers.intelligence;
  assert.ok(f.description.includes('Хиты '+hp));assert.ok(f.description.includes('бонус атаки '+(attack>=0?'+':'')+attack));assert.equal(e.resources.find(r=>r.id==='steel-defender').max,hp);
  for(const p of [/Средний конструкт/,/КД 15/,/40 фут/,/СИЛ 14, ЛОВ 12, ТЕЛ 14, ИНТ 4, МДР 10, ХАР 6/,/ЛОВ \+3, ТЕЛ \+4/,/Атлетика \+4, Восприятие \+4/,/яд/,/отравлен/,/очарован/,/истощен/,/60 фут/,/пассивное Восприятие 14/,/врасплох/,/1к8\+2.*силов/,/Ремонт.*3\/день/,/2к8\+2/,/конструкт.*предмет.*5 фут/,/Отражение атаки.*реакция/,/помех/,/кроме защитника/,/сразу после вас/,/Уклонение/,/бонусным действием/,/недееспособны/,/Заговор «Починка».*отдельно от действия «Ремонт».*2к6/,/часа после смерти/,/1 минуту/])assert.match(f.description,p);
  assert.ok(JSON.stringify(exported(c).text.traits).includes(f.description));assert.equal(stats(c).ac,stats(second).ac);assert.equal(stats(c).speed,stats(second).speed);assert.deepEqual(stats(c).saves,stats(second).saves);
 }
});

test('PR26 round twelve: both Arcane Archer Lore cantrips use Intelligence in native LSS metadata',()=>{
 for(const id of ['prestidigitation','druidcraft']){
  const c=advance(advance(create('fighter',null,{abilities:{strength:16,dexterity:14,constitution:12,intelligence:16,wisdom:8,charisma:10}})),'arcane-archer',{archer_cantrip:id}),e=extras(c),spell=e.spells.find(s=>s.id===id);assert.equal(spell.ability,'intelligence');assert.equal(exported(c).spellsInfo.abilities[E.SPELL_IDS[id]],'int');assert.match(JSON.stringify(exported(c).text.attacks),/Интеллект/);assert.ok(!e.spellcasting);
 }
 const c=advance(create('cleric','nature',{creation_nature_cantrip:'druidcraft'}));assert.equal(extras(c).spells.find(s=>s.id==='druidcraft').ability,'wisdom');
});

test('PR26 round twelve: TCE Circle of Spores keeps necrotic Symbiotic Entity damage at levels two and three',()=>{
 const second=advance(create('druid'),'spores');for(const c of [second,advance(second)]){
  const e=extras(c),f=e.features.find(f=>f.name==='Симбиотическая сущность');assert.equal(e.subclass.source,'TCE');assert.match(f.description,/1к6 некротического урона/);assert.doesNotMatch(f.description,/яд/);assert.ok(JSON.stringify(exported(c).text.traits).includes(f.description));
 }
});

test('PR26 round thirteen: Drakewarden exports a runnable level-three drake without changing hero stats',()=>{
 const second=advance(create('ranger')),c=advance(second,'drakewarden'),e=extras(c),f=e.features.find(f=>f.name==='Драконий спутник');
 for(const p of [/Маленький дракон/,/КД 16/,/Хиты 20/,/3к10/,/40 фут/,/СИЛ 16, ЛОВ 12, ТЕЛ 15, ИНТ 8, МДР 14, ХАР 8/,/ЛОВ \+3, МДР \+4/,/60 фут/,/Восприятие 12/,/Драконий/,/кислота.*огонь.*холод.*молния.*яд/,/иммунитет/,/Укус.*\+5.*5 фут.*1к6\+2.*колющ/,/Усиленные удары.*реакция/,/другое видимое существо.*30 фут/,/попада.*атакой оружием/,/1к6.*выбранного типа/,/сразу после вас/,/Уклонение/,/бонусным действием/,/недееспособны/,/0 хитов/,/повторном призыве/,/вашей смерти/])assert.match(f.description,p);
 assert.ok(JSON.stringify(exported(c).text.traits).includes(f.description));assert.equal(e.resources.find(r=>r.id==='drake-companion').max,1);assert.equal(stats(c).ac,stats(second).ac);assert.equal(stats(c).speed,stats(second).speed);assert.deepEqual(stats(c).saves,stats(second).saves);assert.ok(!L.getChoices(second,fill(second,L.begin(second,context(second)),{subclass:'drakewarden'}),context(second)).some(g=>/essence/.test(g.id)));
});

test('PR26 round thirteen: Martial Adept retains one d6 alongside class/style pools and multiclass resources',()=>{
 const first=create('fighter',null,{human_feature:'human_alt',creation_feat:'martial-adept',creation_style:'superior-technique'}),second=advance(first),third=advance(second,'battle-master');
 for(const c of [first,second,third,enter(second,'rogue'),enter(create('wizard',null,{human_feature:'human_alt',creation_feat:'martial-adept'}),'fighter')]){
  const e=extras(c),pools=e.resources.filter(r=>r.id==='martial-adept');assert.equal(pools.length,1);assert.equal(pools[0].max,1);assert.equal(pools[0].rest,'short-rest');assert.match(pools[0].name,/к6/);assert.ok(JSON.stringify(exported(c).text.traits).includes(pools[0].name+': 1; восстановление после короткого или долгого отдыха.'));
 }
 const pools=extras(third).resources;assert.equal(pools.find(r=>r.id==='superiority-dice').max,4);assert.match(pools.find(r=>r.id==='superiority-dice').name,/к8/);assert.equal(pools.find(r=>r.id==='superior-technique').max,1);assert.equal(extras(create('fighter',null,{creation_feat:'martial-adept'})).resources.filter(r=>r.id==='martial-adept').length,0);
});

test('PR26 round thirteen: Primal Knowledge offers one unowned barbarian skill only when opted in',()=>{
 const second=advance(create('barbarian')),p=fill(second,L.begin(second,context(second)),{subclass:'berserker','variant_primal-knowledge':'yes'}),groups=L.getChoices(second,p,context(second)),g=groups.find(g=>g.id==='primal_skill');assert.ok(g);assert.equal(g.source,'TCE');const owned=context(second).proficiencies.skills;assert.deepEqual(g.options.map(o=>o.value),R.CLASSES.barbarian.choices[0].options.filter(id=>!owned.includes(id)));
 const good=g.options[0].value;p.choices.primal_skill=good;assert.deepEqual(L.transition(second,p,context(second)).errors,[]);const c=L.commit(second,p,context(second)),e=extras(c);assert.ok(R.resolveProficiencies(c,e).skills.includes(good));assert.ok(JSON.stringify(exported(c).text.traits).includes('Первобытное знание'));
 for(const value of [undefined,owned.find(id=>R.CLASSES.barbarian.choices[0].options.includes(id)),'arcana']){const bad=copy(p);if(value===undefined)delete bad.choices.primal_skill;else bad.choices.primal_skill=value;assert.ok(L.transition(second,bad,context(second)).errors.length);}
 const no=copy(p);no.choices['variant_primal-knowledge']='no';assert.ok(L.transition(second,no,context(second)).errors.some(e=>e.field==='primal_skill'));delete no.choices.primal_skill;assert.deepEqual(L.transition(second,no,context(second)).errors,[]);assert.ok(!extras(L.commit(second,no,context(second))).features.some(f=>f.name==='Первобытное знание'));
 const full=create('barbarian',null,{background:'outlander',human_feature:'human_alt',creation_feat:'skilled'});Object.assign(full.proficiencyChoices,{'creation:skilled:0':'nature','creation:skilled:1':'perception','creation:skilled:2':'stealth'});assert.deepEqual(context(full).proficiencies.errors,[]);const full2=advance(full),fp=fill(full2,L.begin(full2,context(full2)),{subclass:'berserker','variant_primal-knowledge':'yes'});assert.ok(!L.getChoices(full2,fp,context(full2)).some(g=>g.id==='primal_skill'));assert.deepEqual(L.transition(full2,fp,context(full2)).errors,[]);const full3=L.commit(full2,fp,context(full2));assert.deepEqual(R.resolveProficiencies(full3,extras(full3)).skills.sort(),context(full2).proficiencies.skills.sort());
});

test('PR26 round thirteen: Steady Aim is an explicit class-three option with complete action conditions',()=>{
 const second=advance(create('rogue')),p=fill(second,L.begin(second,context(second)),{subclass:'thief','variant_steady-aim':'yes'});assert.ok(L.getChoices(second,p,context(second)).some(g=>g.id==='variant_steady-aim'));const c=L.commit(second,p,context(second)),f=extras(c).features.find(f=>f.name==='Точное прицеливание');assert.equal(f.source,'TCE');for(const pattern of [/Бонусное действие/,/преимущество/,/следующ.*атак/,/текущем ходу/,/не перемещались/,/скорость.*0.*конца хода/])assert.match(f.description,pattern);assert.ok(JSON.stringify(exported(c).text.traits).includes(f.description));
});

test('PR26 round thirteen: missing new opt-ins preserve both ledger formats and cannot grant class-three benefits early',()=>{
 for(const [cls,key,name,branch] of [['barbarian','variant_primal-knowledge','Первобытное знание','berserker'],['rogue','variant_steady-aim','Точное прицеливание','thief']]){
  const second=advance(create(cls)),third=advance(second,branch);for(const version of [1,2]){const c=copy(third);c.advancement.version=version;for(const entry of c.advancement.entries){entry.version=version;delete entry.choices[key];}assert.deepEqual(L.inspect(c,context(c)).errors,[]);assert.equal(extras(c).effectiveLevel,3);assert.ok(!extras(c).features.some(f=>f.name===name));assert.equal(stats(c).hp,stats(third).hp);}
  const bad=copy(third);bad.advancement.entries.at(-1).choices[key]='invalid';assert.ok(L.inspect(bad,context(bad)).errors.length);
  const mixed=enter(second,'fighter');assert.ok(!extras(mixed).features.some(f=>f.name===name));const p=fill(create(cls),L.begin(create(cls),context(create(cls))));assert.ok(!L.getChoices(create(cls),p,context(create(cls))).some(g=>g.id===key));p.choices[key]='yes';assert.ok(L.transition(create(cls),p,context(create(cls))).errors.length);
 }
});


test('PR26 round fourteen: all 62 PHB beasts have exact profiles and export once without changing the hero',()=>{
 const D=require('../levelup-data'),second=advance(create('ranger')),snapshot=JSON.stringify(second);
 assert.equal(D.companions.length,62);assert.equal(new Set(D.companions.map(x=>x.id)).size,62);
 const pending=fill(second,L.begin(second,context(second)),{subclass:'beast-master',companion_rules:'phb-beast'});
 assert.deepEqual(L.getChoices(second,pending,context(second)).find(g=>g.id==='companion').options.map(o=>o.value),D.companions.map(x=>x.id));
 let hero;
 for(const beast of D.companions){
  const p=beast.profile;assert.ok(p,beast.id);assert.equal(p.source,beast.source);assert.ok(p.page>0);assert.match(p.dataUrl,/bestiary-/);assert.equal(Object.keys(p.abilities).length,6);assert.ok(p.ac>0&&p.hp>0);assert.ok(p.hitDice);assert.ok(Object.keys(p.speed).length>0);assert.ok(Array.isArray(p.actions)&&Array.isArray(p.traits));
  const c=advance(second,'beast-master',{companion_rules:'phb-beast',companion:beast.id}),e=extras(c),features=e.features.filter(f=>f.name==='Спутник следопыта');assert.equal(features.length,1,beast.id);
  const text=features[0].description;assert.ok(text.includes(beast.label));assert.ok(text.includes('КД '+(p.ac+2)));assert.ok(text.includes('хиты '+Math.max(p.hp,12)));assert.ok(text.includes(beast.url));assert.match(text,/устная команда перемещения/);assert.match(text,/Ваше действие — команда Атака, Отход, Помощь или Рывок/);assert.match(text,/без команды — Уклонение/);assert.match(text,/8 часов/);
  const paragraphs=exported(c).text.traits.value.data.content,texts=paragraphs.flatMap(p=>p.content||[]).map(x=>x.text||'');for(const line of text.split('\n'))assert.equal(texts.filter(x=>x.includes(line)).length,1,beast.id+': exported line '+line);
  const st=stats(c),current={hp:st.hp,ac:st.ac,speed:st.speed,initiative:st.initiative,abilities:st.abilities,attacks:e.attacks,resources:e.resources};if(hero)assert.deepEqual(current,hero,beast.id+': hero');else hero=current;
  assert.deepEqual(L.inspect(c,context(c)).errors,[]);assert.equal(JSON.stringify(second),snapshot);
 }
});

test('PR26 round fourteen: golden PHB animals preserve printed bonuses, fixed damage, saves and named variants',()=>{
 const second=advance(create('ranger')),summary=id=>extras(advance(second,'beast-master',{companion_rules:'phb-beast',companion:id})).features.find(f=>f.name==='Спутник следопыта').description;
 for(const [id,patterns] of [
  ['wolf',[/КД 15/,/хиты 12/,/Восприятие \+5|Внимательность \+5/,/Скрытность \+6/,/пассивная Внимательность 15/,/оружием \+6/,/2к4 \+ 4/,/СИЛ Сл 11/,/Тактика стаи/]],
  ['cat',[/оружием \+2/,/3 \(рубящий\)/,/Скрытность \+6/]],
  ['flying-snake',[/оружием \+8/,/3 \(колющий\)/,/3к4 \+ 2 \(яд\)/,/Облёт/]],
  ['giant-poisonous-snake',[/досягаемость 10 футов/,/1к4 \+ 6/,/ТЕЛ Сл 11/,/3к6 \+ 2/,/половина при успехе/]],
  ['giant-centipede',[/3к6 \+ 2/,/при успехе урона нет/,/стабильна, отравлена на 1 час/,/парализована/]],
  ['spider',[/3 \(колющий\)/,/ТЕЛ Сл 9/,/1к4 \+ 2/,/Паучье лазание/,/Чувство паутины/]],
  ['stirge',[/1к4 \+ 5 \(колющий\)/,/теряет 1к4 \+ 3 хита/,/БМ не добавляется/,/5 футов перемещения/,/10 хитов крови/]],
  ['giant-frog',[/Проглатывание/,/2к4 \+ 2 \(кислота\)/,/Маленькой или меньшей/,/полное укрытие/]],
  ['goat',[/дополнительно 1к4 дробящего/,/СИЛ Сл 10/]],
  ['mountain-goat',[/дополнительно 1к6 дробящего/,/СИЛ Сл 12/,/лазание 30 футов/]],
  ['kingsport',[/ИНТ 10/,/Общий/,/20 минут/,/слеп за пределами радиуса/]],
  ['awakened-rat',[/ИНТ 10/,/Общий/]],
  ['sylgar',[/плавание 40 футов/,/оружием \+7/,/3 \(колющий\)/]],
  ['guthash',[/хиты 16/,/оружием \+7/,/болезнь до излечения/,/1к6 каждые 24 часа/,/максимум 0 — смерть/]],
  ['male-steeder',[/OotA, стр. 231/,/прыжок до 60 футов/,/1к8 \+ 4 \(колющий\)/,/1к8 \+ 2 \(кислота\)/,/ТЕЛ Сл 12/,/Липкая лапа/,/Маленькое или Крошечное/,/Сл 12/]],
  ['giant-badger',[/хиты 13/,/Мультиатака/,/не разрешает Мультиатаку/]],
  ['dimetrodon',[/хиты 19/]],
  ['hare',[/Бегство/,/Засада бонусным действием/]],
  ['pollenella-the-honeybee',[/Жало/,/5 \(колющий\)/]],
  ['deep-roth',[/Пляшущие огоньки/,/2к6 колющего/,/Большим/]]
 ])for(const re of patterns)assert.match(summary(id),re,id);
 const primal=extras(advance(second,'beast-master',{companion_rules:'primal-companion',companion:'beast-of-land'}));assert.equal(primal.features.filter(f=>f.name==='Первобытный спутник').length,1);assert.ok(!primal.features.some(f=>f.name==='Спутник следопыта'));
});

test('PR26 round fourteen: legacy parser resolves named copies and rejects missing or unknown mechanics',()=>{
 const {profile,resolveMonster,actionProfile}=require('../docs/enrich-companions.cjs'),D=require('../levelup-data'),wolf=D.companions.find(x=>x.id==='wolf');
 const raw={name:'Wolf',source:'MM',size:['M'],ac:[13],hp:{average:11,formula:'2d8 + 2'},str:12,dex:15,con:12,int:3,wis:12,cha:6,speed:{walk:40},passive:13,trait:[],action:[]},copy={name:'Named Wolf',source:'TftYP',page:21,hp:{average:16,formula:'2d8 + 2'},int:10,_copy:{name:'Wolf',source:'MM',_mod:{trait:{mode:'appendArr',items:{name:'Pack Tactics',entries:[]}}}}};
 const resolved=resolveMonster(copy,[raw,copy]);assert.equal(resolved.hp.average,16);assert.equal(resolved.int,10);assert.equal(resolved.ac[0],13);assert.equal(resolved.trait[0].name,'Pack Tactics');assert.equal(profile({...wolf,name:'Named Wolf',source:'TftYP'},[raw,copy]).hp,16);
 assert.throws(()=>profile({id:'missing',name:'Missing',source:'MM'},[raw]),/Missing exact/);assert.throws(()=>actionProfile({name:'Unsupported',entries:['Unknown mechanics']},'test'),/Unparsed/);
});

test('PR26 round fourteen: Wildfire has its own class-scaled profile, WIS attacks and teleport save',()=>{
 for(const wisdom of [8,18]){
  const first=create('druid',null,{abilities:{strength:16,dexterity:16,constitution:16,intelligence:16,wisdom,charisma:16}}),second=advance(first,'wildfire');
  for(const c of [second,advance(second),...(wisdom>=13?[enter(second,'fighter')]:[])]){
   const e=extras(c),n=L.inspect(c,context(c)).state.classStates.druid.state.level,text=e.features.find(f=>f.name==='Призыв духа дикого огня').description,pb=stats(c).proficiencyBonus,w=stats(c).modifiers.wisdom;
   for(const term of ['КД 13','хиты '+(5+5*n),'5 × уровень друида','Огненное семя','оружием '+(pb+w>=0?'+':'')+(pb+w),'ЛОВ Сл '+(8+pb+w),'1к6 + '+pb+' огня','2к6 огня','через 1 час','0 хитов','сразу после вас','бонусным действием','согласные существа в 5 футах','до 15 футов','парит','Иммунитет к огню'])assert.ok(text.includes(term),term);
   for(const line of text.split('\n'))assert.ok(JSON.stringify(exported(c).text.traits).includes(line));assert.ok(!e.attacks.some(a=>/дух|семя/i.test(a.label)));assert.equal(stats(c).ac,stats(first).ac);assert.deepEqual(e.resources.filter(r=>r.id==='wild-shape').map(r=>r.max),[2]);
  }
 }
 assert.ok(!extras(advance(create('druid'),'land')).features.some(f=>f.name==='Призыв духа дикого огня'));
});

test('PR26 round fourteen: eight feature summaries are playable in LSS and preserve temporary effects',()=>{
 const feature=(c,name)=>{const f=extras(c).features.filter(f=>f.name===name);assert.equal(f.length,1,name);for(const line of f[0].description.split('\n'))assert.ok(JSON.stringify(exported(c).text.traits).includes(line),name);return f[0].description;};
 const third=(cls,branch,overrides)=>advance(advance(create(cls,undefined,overrides)),branch);
 const monk=third('monk','open-hand');assert.match(feature(monk,'Техника открытой ладони'),/ЛОВ.*СИЛ.*15 футов.*без спасброска.*до конца вашего следующего хода/);assert.match(feature(monk,'Техника открытой ладони'),/Сл обоих спасбросков 13/);
 for(const n of [2,3]){let c=advance(create('paladin'));if(n===3)c=advance(c,'devotion');const t=feature(c,'Наложение рук');for(const re of [new RegExp('Запас '+5*n),/Действием коснитесь/,/1 хит/,/5 пунктов/,/несколько болезней\/ядов/,/нежить и конструктов/,/долгого отдыха/])assert.match(t,re);assert.equal(extras(c).resources.find(r=>r.id==='lay-on-hands').max,5*n);}
 const echo=feature(third('fighter','echo-knight'),'Проявление эха');for(const re of [/КД эха 16/,/1 хит/,/иммунитет ко всем состояниям/,/15 футах/,/вашего размера/,/30 футов/,/в конце вашего хода/,/за 15 футов своего перемещения/,/Для каждой атаки действием Атака/,/вашей реакцией/,/минимум на 5 футов/])assert.match(echo,re);
 for(const n of [2,3]){let c=advance(create('sorcerer','wild'));if(n===3)c=advance(c);const t=feature(c,'Гибкое колдовство');for(const re of [new RegExp('Максимум '+n),/Бонусным действием/,/равном кругу ячейки/,/1-й круг стоит 2, 2-й — 3/,/исчезают в конце долгого отдыха/])assert.match(t,re);assert.equal(extras(c).resources.find(r=>r.id==='sorcery-points').max,n);}
 const spirits=feature(third('bard','spirits'),'Истории из-за пределов');for(const re of [/духовную фокусировку/,/история случайна/,/короткого\/долгого отдыха/,/Действием.*30 футах/,/Новый бросок немедленно прекращает/,/1\. Умный зверь.*10 минут/,/2\. Прославленный дуэлянт.*2к6 \+ ХАР/,/3\. Любимые друзья.*5 футах/,/4\. Беглец.*реакцией.*30 футов/,/5\. Мститель.*1 минуту/,/6\. Путешественник.*временных хитов/,/ХАР \+3/,/уровень барда 3/])assert.match(spirits,re);assert.doesNotMatch(spirits,/7\./);
 const mote=feature(third('bard','creation'),'Частица потенциала');for(const re of [/Проверка характеристики.*ещё раз/,/Бросок атаки.*5 футах.*ТЕЛ/,/Спасбросок.*временные хиты/,/минимум 1/,/Сл ТЕЛ 13/,/ХАР \+3/])assert.match(mote,re);
 const alchemist=third('artificer','alchemist'),elixir=feature(alchemist,'Экспериментальный эликсир');for(const re of [/один эликсир/,/инструменты алхимика/,/Бросьте к6/,/Дополнительный эликсир: действие, ячейка 1-го круга/,/недееспособное существо/,/2к4/,/2\. Быстрота.*1 час/,/3\. Стойкость.*10 минут/,/4\. Смелость.*один раз бросьте 1к4/,/4\. Смелость.*один и тот же результат.*каждому броску атаки и спасброску.*1 минуты/,/5\. Полёт.*10 футов.*10 минут/,/6\. Превращение.*10 минут/,/ИНТ \+3/])assert.match(elixir,re);assert.equal(extras(alchemist).resources.find(r=>r.id==='experimental-elixir').max,1);
 const rogue=third('rogue','swashbuckler'),rakish=feature(rogue,'Удалой нахал');for(const re of [/вы в 5 футах от цели/,/никакие другие существа/,/без помехи/,/фехтовальное или дальнобойное/,/один раз за ход/,/Обычные способы/])assert.match(rakish,re);assert.match(feature(rogue,'Скрытая атака'),/2к6/);
 for(const [cls,branch,forbidden] of [['bard','lore','Истории из-за пределов'],['bard','lore','Частица потенциала'],['artificer','battle-smith','Экспериментальный эликсир'],['monk','shadow','Техника открытой ладони'],['rogue','thief','Удалой нахал']])assert.ok(!extras(third(cls,branch)).features.some(f=>f.name===forbidden));
 const mixed=enter(advance(create('sorcerer','wild')),'paladin');assert.match(feature(mixed,'Гибкое колдовство'),/Максимум 2/);assert.equal(extras(mixed).resources.find(r=>r.id.endsWith('lay-on-hands')).max,5);assert.ok(!extras(mixed).features.some(f=>f.name==='Метамагия'));
});


test('PR26 round fourteen: ability-based summaries follow low and high modifiers without permanent table buffs',()=>{
 for(const score of [6,18])for(const [cls,branch,ability,name] of [['monk','open-hand','wisdom','Техника открытой ладони'],['bard','creation','charisma','Частица потенциала'],['bard','spirits','charisma','Истории из-за пределов'],['artificer','alchemist','intelligence','Экспериментальный эликсир']]){
  const first=create(cls,null,{abilities:{strength:16,dexterity:16,constitution:16,intelligence:16,wisdom:16,charisma:16,[ability]:score}}),c=advance(advance(first),branch),e=extras(c),t=e.features.find(f=>f.name===name).description,m=stats(c).modifiers[ability],sign=(m>=0?'+':'')+m;
  if(branch==='open-hand')assert.ok(t.includes('Сл обоих спасбросков '+(10+m)));if(branch==='creation'){assert.ok(t.includes('Сл ТЕЛ '+(10+m)));assert.ok(t.includes('модификатор ХАР '+sign));}if(branch==='spirits'){assert.ok(t.includes('ХАР '+sign));assert.ok(t.includes('атаки заклинанием '+(2+m>=0?'+':'')+(2+m)));}if(branch==='alchemist')assert.ok(t.includes('модификатор ИНТ '+sign));
  for(const line of t.split('\n'))assert.ok(JSON.stringify(exported(c).text.traits).includes(line));
  if(cls==='bard'){assert.equal(stats(c).ac,stats(first).ac);assert.equal(stats(c).speed,stats(first).speed);assert.equal(e.resources.find(r=>r.id==='bardic-inspiration').max,Math.max(1,m));}
 }
});

test('PR26 round fifteen: Wild Shape exports complete transformation rules at druid levels two and three',()=>{
 for(const subclass of ['land','moon']){
  const first=create('druid'),second=advance(first,subclass);
  assert.ok(!extras(first).features.some(f=>f.name==='Дикий облик'));
  for(const c of [second,advance(second),enter(second,'fighter')]){
   const e=extras(c),f=e.features.find(f=>f.name==='Дикий облик'),text=f.description;
   for(const pattern of [/которого вы видели/,/1 час.*половина уровня друида.*вниз/,/ещё одно использование/,/бонусным действием.*вернуться/,/бессознательн.*0 хитов.*смерт/,/характеристики зверя/,/мировоззрени.*личност.*Интеллект.*Мудрост.*Харизм/,/владения навыками и спасбросками/,/больший бонус/,/легендарные.*логов/,/хиты и кости хитов зверя/,/до превращения/,/избыточный урон.*обычный облик/,/не падаете без сознания/,/нельзя накладывать заклинания/,/речь.*рук.*анатом/,/концентрация.*не прерывается/i,/действия.*уже действующих заклинаний/,/умения класса.*расы.*физически/i,/особые чувства.*звер/,/снаряжением.*земл.*слива.*надева/,/Мастер.*размер/,/размер.*не меняются/,/слившееся.*не работает/i])assert.match(text,pattern);
   assert.match(text,subclass==='moon'?/ПО 1.*без плавания и полёта.*бонусное действие/:/ПО 1\/4.*без плавания и полёта.*действие/);
   for(const line of text.split('\n'))assert.ok(JSON.stringify(exported(c).text.traits).includes(line));
   assert.deepEqual(e.resources.filter(r=>r.id==='wild-shape').map(r=>[r.max,r.rest]),[[2,'short-rest']]);
   assert.equal(stats(c).ac,stats(first).ac);assert.equal(stats(c).speed,stats(first).speed);
  }
 }
});

test('PR26 round fifteen: Drakewarden Bite ignores ranger Wisdom and essence grants no level-three resistance',()=>{
 for(const wisdom of [8,18]){
  const c=advance(advance(create('ranger',null,{abilities:{strength:16,dexterity:16,constitution:16,intelligence:16,wisdom,charisma:16}})),'drakewarden'),e=extras(c),f=e.features.find(f=>f.name==='Драконий спутник');
  assert.match(f.description,/Укус.*\+5.*1к6\+2/);assert.match(f.description,/Дрейк получает иммунитет/);
  assert.doesNotMatch(f.description,/вы получаете сопротивление|следопыт.*сопротивление/i);
  assert.ok(!e.features.some(f=>/сопротивление/i.test(f.name+' '+f.description)));assert.ok(JSON.stringify(exported(c).text.traits).includes(f.description));
 }
});


test('PR26 round sixteen: Blade Pact exposes conditional two-handed CHA attacks',()=>{
 for(const charisma of [10,14,18])for(const weapon of ['greatclub','light-crossbow','shortbow']){
  const first=create('warlock','hexblade',{creation_weapon:weapon,abilities:{strength:14,dexterity:14,constitution:14,intelligence:10,wisdom:10,charisma}}),second=advance(first),blade=advance(second,null,{pact:'blade'});
  for(const c of [first,second,advance(second,null,{pact:'tome'})])assert.ok(!extras(c).attacks.some(a=>a.id===weapon+'-pact-hex'));
  const e=extras(blade),ordinary=e.attacks.find(a=>a.id===weapon),pact=e.attacks.find(a=>a.id===weapon+'-pact-hex');
  if(weapon!=='greatclub'){assert.equal(pact,undefined);const improved=advance(second,null,{pact:'blade',invocation_remove:'armor-of-shadows',invocation_add:'improved-pact-weapon'});assert.ok(extras(improved).attacks.some(a=>a.id===weapon+'-pact-hex'));continue;}
  assert.ok(pact);assert.equal(ordinary.ability,'strength');assert.equal(ordinary.attackBonus,2+stats(blade).modifiers.strength);assert.equal(pact.ability,'charisma');assert.equal(pact.attackBonus,2+stats(blade).modifiers.charisma);assert.equal(pact.damageBonus,stats(blade).modifiers.charisma);assert.match(pact.notes[0],/создан.*Договор.*клинка/i);assert.ok(!e.attacks.some(a=>a.group==='unarmed'&&a.hexWarrior));
  const data=exported(blade);assert.ok(data.weaponsList.some(w=>w.name.value===pact.label&&w.ability==='cha'));assert.ok(JSON.stringify(data.text.attacks).includes(pact.notes[0]));
 }
 const other=advance(advance(create('warlock','fiend',{creation_weapon:'greatclub'})),null,{pact:'blade'});assert.ok(!extras(other).attacks.some(a=>a.hexWarrior));
});

function exhaustedRanger(){return create('rogue',null,{human_feature:'human_alt',creation_feat:'skilled',background:'folk-hero',proficiencyChoices:{'class:rogue:0:0':'athletics','class:rogue:0:1':'insight','class:rogue:0:2':'investigation','class:rogue:0:3':'perception','human-alt:0:0':'stealth','creation:skilled:0':'nature'}});}
function exhaustedGaming(){return create('rogue',null,{human_feature:'human_alt',creation_feat:'skilled',background:'soldier',proficiencyChoices:{'background:soldier:0:0':'dice','creation:skilled:0':'dragonchess','creation:skilled:1':'playing_cards','creation:skilled:2':'three_dragon_ante'}});}

test('PR26 round sixteen: exhausted Ranger and Mastermind published lists permit harmless repeats',()=>{
 const ranger=exhaustedRanger(),rp=fill(ranger,L.selectClass(ranger,L.begin(ranger,context(ranger)),'ranger',context(ranger))),rg=L.getChoices(ranger,rp,context(ranger)).find(g=>g.id==='ranger:entry_skill');
 assert.deepEqual(rg.options.map(o=>o.value),R.CLASSES.ranger.choices[0].options);assert.deepEqual(L.transition(ranger,rp,context(ranger)).errors,[]);const next=L.commit(ranger,rp,context(ranger));assert.deepEqual(stats(next).proficiencies.skills.sort(),stats(ranger).proficiencies.skills.sort());assert.deepEqual(stats(next).proficiencies.errors,[]);assert.equal(exported(next).info.level.value,2);
 const bad=copy(rp);bad.choices['ranger:entry_skill']='arcana';assert.ok(L.transition(ranger,bad,context(ranger)).errors.some(e=>e.field==='ranger:entry_skill'));
 const rogue=advance(exhaustedGaming()),mp=fill(rogue,L.begin(rogue,context(rogue)),{subclass:'mastermind'}),mg=L.getChoices(rogue,mp,context(rogue)).find(g=>g.id==='gaming_set');assert.deepEqual(mg.options.map(o=>o.value),R.GAMING_SETS);assert.deepEqual(L.transition(rogue,mp,context(rogue)).errors,[]);const mastermind=L.commit(rogue,mp,context(rogue));assert.deepEqual(stats(mastermind).proficiencies.errors,[]);assert.equal(stats(mastermind).proficiencies.tools.filter(id=>R.GAMING_SETS.includes(id)).length,4);assert.ok(!extras(mastermind).fixedProficiencies.some(g=>g.id===mp.choices.gaming_set));assert.equal(exported(mastermind).info.level.value,3);const invalid=copy(mp);invalid.choices.gaming_set='alchemist';assert.ok(L.transition(rogue,invalid,context(rogue)).errors.some(e=>e.field==='gaming_set'));
 for(const [c,cls] of [[create('rogue'),'ranger'],[advance(create('rogue')),'mastermind']]){const p=cls==='ranger'?fill(c,L.selectClass(c,L.begin(c,context(c)),'ranger',context(c))):fill(c,L.begin(c,context(c)),{subclass:cls}),g=L.getChoices(c,p,context(c)).find(g=>g.id===(cls==='ranger'?'ranger:entry_skill':'gaming_set'));assert.ok(g.options.length>0);assert.ok(g.options.every(o=>!(cls==='ranger'?stats(c).proficiencies.skills:stats(c).proficiencies.tools).includes(o.value)));}
});

test('PR26 round sixteen: racial spells and ability bonus plans protect committed and pending foundations',()=>{
 for(const [field,overrides,value] of [['high_elf_cantrip',{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'},'light'],['astral_elf_astral_fire',{race:'astral-elf',astral_elf_astral_fire:'light',abilityBonusPlan:'two_one',abilityBonusChoices:{slot_0:'strength',slot_1:'dexterity'}},'sacred-flame'],['abilityBonusPlan',{race:'astral-elf',abilityBonusPlan:'two_one',abilityBonusChoices:{slot_0:'strength',slot_1:'dexterity'}},'three_ones']]){
  const c=advance(create('fighter',null,overrides)),p=fill(c,L.begin(c,context(c)),{subclass:'champion'});
  for(const change of [x=>x[field]=value,x=>delete x[field]]){const altered=copy(c);change(altered);assert.notEqual(L.foundation(altered),L.foundation(c),field);assert.ok(L.inspect(altered,context(altered)).errors.some(e=>e.field==='foundation'));assert.ok(L.transition(altered,p,context(altered),L.inspect(c,context(c)).state).errors.some(e=>e.field==='foundation'));assert.equal(extras(altered).effectiveLevel,1);assert.throws(()=>exported(altered),/выборы изменились/);}
  const narrative={...c,name:'Новое имя',concept:'История'};assert.equal(L.foundation(narrative),L.foundation(c));assert.deepEqual(L.inspect(narrative,context(narrative)).errors,[]);
 }
 const first=create('fighter'),p=L.begin(first,context(first)),added={...first,high_elf_cantrip:'light'};assert.ok(L.transition(added,p,context(added)).errors.some(e=>e.field==='foundation'));
});


function historicalFoundation(c){return JSON.stringify(Object.fromEntries(Object.keys(c).filter(k=>['class','race','race_sub','background','abilities','abilityBonusChoices','proficiencyChoices','human_feature'].includes(k)||k.startsWith('creation_')||k.startsWith('race_')).sort().map(k=>[k,c[k]])));}
function historicalHero(c,version){const old=copy(c),signature=historicalFoundation(c);if(old.advancement){old.advancement.version=version;for(const p of old.advancement.entries){p.version=version;p.foundation=signature;if(version===1)delete p.classId;}}if(old.pendingAdvancement){old.pendingAdvancement.version=version;old.pendingAdvancement.foundation=signature;if(version===1)delete old.pendingAdvancement.classId;}return old;}

test('PR26 round sixteen: one-time legacy v1/v2 migration preserves decisions, HP, pending step and strict inspectors',()=>{
 const second=advance(create('fighter',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'})),third=advance(second,'champion');
 for(const version of [1,2])for(const committed of [second,third]){
  const c=copy(committed);if(c.level===2)c.pendingAdvancement={...fill(c,L.begin(c,context(c)),{subclass:'champion'}),step:3};
  const old=historicalHero(c,version);assert.ok(L.inspect(old,context(old)).errors.some(e=>e.field==='foundation'));const upgraded=L.upgradeLegacyFoundation(old,context(old));assert.notEqual(upgraded,old);assert.deepEqual(L.inspect(upgraded,context(upgraded)).errors,[]);assert.deepEqual(stats(upgraded),stats(c));assert.deepEqual(exported(upgraded),exported(c));
  for(let i=0;i<old.advancement.entries.length;i++){const before=old.advancement.entries[i],after=upgraded.advancement.entries[i];assert.deepEqual({...after,foundation:before.foundation},before);}
  if(c.pendingAdvancement){assert.deepEqual({...upgraded.pendingAdvancement,foundation:old.pendingAdvancement.foundation},old.pendingAdvancement);assert.deepEqual(L.transition(upgraded,upgraded.pendingAdvancement,context(upgraded)).errors,[]);assert.equal(L.commit(upgraded,upgraded.pendingAdvancement,context(upgraded)).level,3);}
  assert.equal(L.upgradeLegacyFoundation(upgraded,context(upgraded)),upgraded);const edited=copy(upgraded);edited.high_elf_cantrip='light';assert.equal(L.upgradeLegacyFoundation(edited,context(edited)),edited);assert.ok(L.inspect(edited,context(edited)).errors.some(e=>e.field==='foundation'));assert.throws(()=>exported(edited),/выборы изменились/);
  const mismatch=copy(old);mismatch.creation_weapon='greatsword';assert.equal(L.upgradeLegacyFoundation(mismatch,context(mismatch)),mismatch);assert.ok(L.inspect(mismatch,context(mismatch)).errors.some(e=>e.field==='foundation'));
 }
 const multi=enter(create('fighter'),'ranger');const old=historicalHero(multi,2),upgraded=L.upgradeLegacyFoundation(old,context(old));assert.deepEqual(stats(upgraded),stats(multi));assert.deepEqual(upgraded.advancement.entries.map(p=>p.classId),['ranger']);
 for(const advancement of [null,{version:2,entries:null},{version:7,entries:[]}]){const bad={...second,advancement};assert.equal(L.upgradeLegacyFoundation(bad,context(bad)),bad);assert.ok(L.inspect(bad,context(bad)).errors.length);}
 for(const change of [p=>p.hp.value=null,p=>p.choices=null,p=>p.foundation='corrupt']){const old=historicalHero({...second,pendingAdvancement:{...fill(second,L.begin(second,context(second)),{subclass:'champion'}),step:2}},2);change(old.pendingAdvancement);const next=L.upgradeLegacyFoundation(old,context(old));assert.deepEqual(L.inspect(next,context(next)).errors,[]);assert.equal(stats(next).hp,stats(second).hp);assert.ok(L.transition(next,next.pendingAdvancement,context(next)).errors.length);delete next.pendingAdvancement;assert.deepEqual(L.inspect(next,context(next)).errors,[]);assert.equal(exported(next).info.level.value,2);}
});


test('PR26 round sixteen review fixes: Improved Pact Weapon adds one only to explicit summoned variants',()=>{
 for(const weapon of ['greatclub','shortbow']){
  const second=advance(create('warlock','hexblade',{creation_weapon:weapon,abilityMethod:'manual',abilities:{strength:14,dexterity:14,constitution:14,intelligence:10,wisdom:10,charisma:16}})),plain=advance(second,null,{pact:'blade'}),improved=advance(second,null,{pact:'blade',invocation_remove:'armor-of-shadows',invocation_add:'improved-pact-weapon'}),e=extras(improved),ordinary=e.attacks.find(a=>a.id===weapon),pact=e.attacks.find(a=>a.id===weapon+'-pact-hex');
  assert.deepEqual(ordinary,extras(plain).attacks.find(a=>a.id===weapon));assert.equal(ordinary.attackBonus,4);assert.equal(ordinary.damageBonus,2);assert.equal(pact.attackBonus,6);assert.equal(pact.damageBonus,4);assert.equal(pact.damage,(weapon==='greatclub'?'1d8':'1d6')+'+4');assert.match(pact.notes.join(' '),/Улучшенное оружие договора.*\+1/);
  if(weapon==='greatclub'){const base=extras(plain).attacks.find(a=>a.id===weapon+'-pact-hex');assert.equal(base.attackBonus,5);assert.equal(base.damageBonus,3);}else assert.ok(!extras(plain).attacks.some(a=>a.pactWeapon&&(a.properties||[]).includes('ranged')));
  const data=exported(improved),native=data.weaponsList.find(w=>w.name.value===pact.label);assert.equal(native.ability,'cha');assert.equal(native.dmg.value,pact.damage);assert.ok(data.bonuses.some(b=>b.target==='weapon.'+native.id+'.attack'&&b.expr==='1'));assert.ok(JSON.stringify(data.text.attacks).includes(pact.label+': атака +6, урон '+pact.damage));
 }
});

const ROUND17_CASES=[
 ['wizard','graviturgy','Изменение плотности',[/Действие.*видим.*30 футов/,/Большой или меньше/,/вдвое.*1 минут.*концентрац/,/скорость \+10 футов.*прыжк.*вдвое.*помех.*провер.*спасброс.*Силы/,/скорость −10 футов.*преимуществ.*провер.*спасброс.*Силы/]],
 ['wizard','enchantment','Гипнотический взгляд',[/Действие.*видим.*5 футов/,/видеть или слышать вас/,/Мудрости.*Сл.*волшебника/,/очарован.*недееспособ.*скорость 0.*конца.*следующего хода/,/действием.*продл/,/более.*5 фут/,/ни видеть, ни слышать/,/урон/,/не поддерживаете/,/успешного спасброска.*окончания эффекта.*этой цели.*долгого отдыха/]],
 ['wizard','transmutation','Малая алхимия',[/один немагический предмет.*целиком/,/дерев.*камн.*кроме драгоценн.*желез.*мед.*серебр/,/10 минут.*1 кубическ.*фут/,/1 час.*потер.*концентрац.*заклинани/]],
 ['paladin','vengeance','Изгнание врага',[/Божественный канал.*действие.*священный символ/,/видим.*60 футов/,/Мудрости.*иммунитет.*испугу/,/исчадия и нежить.*помех/,/провал.*испуган.*скорость 0.*бонус.*скорости/i,/успех.*скорость.*вдвое/i,/оба.*1 минут.*урон/i]],
 ['barbarian','storm-herald','Аура бури',[/ярост.*10 футов.*входе.*бонусным действием/,/Пустыня.*все остальные существа.*союзник.*2 урона огнём/,/Тундра.*каждое выбранное существо.*вас.*2 временных хита/,/Море.*другое видимое.*10 футов.*Ловкости Сл.*1к6.*половину/,/Полное укрытие/]],
 ['barbarian','berserker','Чувство опасности',[/спасброск.*Ловкости.*видим/,/ослеплены.*оглохли.*недееспособны/]],
 ['bard','lore','Песнь отдыха (к6)',[/Вы и каждое дружественное существо.*слыш.*исполнение/,/короткого отдыха.*хотя бы одну кость хитов/,/1к6.*один раз.*существо.*не за каждую кость/]]
];
for(const [cls,subclass,name,patterns] of ROUND17_CASES)test('PR26 round seventeen: complete '+name+' conditions survive native export',()=>{
 const first=create(cls,null,{abilityMethod:'manual'}),second=advance(first,cls==='wizard'?subclass:null),third=advance(second,cls==='wizard'?null:subclass),available=cls==='paladin'||name==='Аура бури'?[third]:[second,third];
 for(const c of available){const before=copy(c),e=extras(c),features=e.features.filter(f=>f.name===name);assert.equal(features.length,1,name);for(const pattern of patterns)assert.match(features[0].description,pattern,name);assert.ok(JSON.stringify(exported(c).text.traits).includes(features[0].description));assert.deepEqual(c,before);assert.equal(stats(c).speed,stats(first).speed);assert.equal(stats(c).ac,stats(first).ac);assert.ok(!e.resources.some(r=>/hypnotic-gaze|adjust-density|song-of-rest/.test(r.id)));}
 assert.ok(!extras(first).features.some(f=>f.name===name));
 const wrong=advance(advance(create(cls,null,{abilityMethod:'manual'})),cls==='wizard'?'evocation':cls==='paladin'?'devotion':cls==='barbarian'?'zealot':'valor');
 if(!['Чувство опасности','Песнь отдыха (к6)'].includes(name))assert.ok(!extras(wrong).features.some(f=>f.name===name));
 if(cls==='wizard'||cls==='bard'){const multi=enter(second,'fighter'),f=extras(multi).features.find(f=>f.name===name);assert.ok(f);for(const pattern of patterns)assert.match(f.description,pattern);assert.ok(JSON.stringify(exported(multi).text.traits).includes(f.description));}
});

const ROUND17_INFUSIONS=['homunculus-servant','enhanced-weapon','repeating-shot','returning-weapon'];
function round17Artificer(score=16){return create('artificer',null,{abilityMethod:'manual',race:'gnome',race_sub:'rock-gnome',abilities:{strength:16,dexterity:16,constitution:16,intelligence:score-2,wisdom:16,charisma:16}});}
function round17Homunculus(c){return extras(c).features.filter(f=>f.name==='Слуга-гомункул');}
test('PR26 round seventeen: learned Homunculus has class-scaled TCE profile without changing hero statistics',()=>{
 for(const score of [10,16,20]){
  const first=round17Artificer(score),second=advance(first,null,{infusions:ROUND17_INFUSIONS}),plainSecond=advance(first,null,{infusions:['enhanced-defense',...ROUND17_INFUSIONS.slice(1)]});assert.equal(stats(second).abilities.intelligence,score);assert.deepEqual(round17Homunculus(first),[]);assert.deepEqual(round17Homunculus(plainSecond),[]);
  for(const [c,plain,classLevel] of [[second,plainSecond,2],...['alchemist','armorer','artillerist','battle-smith'].map(branch=>[advance(second,branch),advance(plainSecond,branch),3])]){
   const before=copy(c),[profile,...duplicates]=round17Homunculus(c);assert.ok(profile);assert.deepEqual(duplicates,[]);assert.equal(profile.source,'TCE');assert.equal(profile.level,2);const text=profile.description;
   for(const pattern of [/Инфузия изучена.*применении/,/камень или кристалл.*100 зм.*сердц/,/дружелюбен.*спутник/,/Крошечный конструкт.*КД 13/,/ходьба 20 футов.*полёт 30 футов/,/СИЛ 4, ЛОВ 15, ТЕЛ 12, ИНТ 10, МДР 10, ХАР 7/,/ЛОВ \+4.*Скрытность \+4.*Восприятие \+4/,/пассивное Восприятие 14/,/яд.*отравлени.*истощени/,/Тёмное зрение 60 футов.*понимает ваши языки/,/Увёртливость.*Ловкости.*половин.*успех.*0.*провал.*половин.*недееспособ/,/Силовой удар.*дальнобойная атака оружием.*30 футов.*видим.*1к4\+2.*силов/,/Канал магии.*реакция.*касани.*120 футов/,/инициатив.*сразу после вас.*самостоятельно.*реакци/,/Уклонение.*бонусным действием.*другое действие/,/вашей недееспособности.*сам/,/Починка.*2к6/,/смерти.*исчезает.*сердц/])assert.match(text,pattern);
   assert.ok(text.includes('Хиты '+(1+Math.floor((score-10)/2)+classLevel)+' (1 + модификатор Интеллекта + уровень изобретателя)'));assert.ok(text.includes('кости хитов '+classLevel+'к4'));assert.ok(text.includes('бонус атаки +'+(2+Math.floor((score-10)/2))));assert.doesNotMatch(text,/требован.*6.*уров/i);
   assert.deepEqual(stats(c),stats(plain));assert.deepEqual(extras(c).attacks,extras(plain).attacks);assert.deepEqual(extras(c).resources,extras(plain).resources);assert.deepEqual(c,before);assert.deepEqual(L.inspect(c,context(c)).errors,[]);for(const line of text.split('\n'))assert.ok(JSON.stringify(exported(c).text.traits).includes(line));assert.deepEqual(exported(c).weaponsList,exported(plain).weaponsList);assert.ok(!JSON.stringify(exported(c).text.attacks).includes('Силовой удар'));
  }
 }
});
test('PR26 round seventeen: infusion replacement adds and removes conditional profile with immutable replay',()=>{
 const first=round17Artificer(),known=advance(first,null,{infusions:ROUND17_INFUSIONS}),unknown=advance(first,null,{infusions:['enhanced-defense',...ROUND17_INFUSIONS.slice(1)]});
 for(const [old,choices,count] of [[known,{infusion_remove:'homunculus-servant',infusion_add:'enhanced-defense'},0],[unknown,{infusion_remove:'enhanced-defense',infusion_add:'homunculus-servant'},1]]){
  const snapshot=copy(old),pending=fill(old,L.begin(old,context(old)),{subclass:'alchemist',...choices}),pendingBefore=copy(pending);assert.deepEqual(L.transition(old,pending,context(old)).errors,[]);const next=L.commit(old,pending,context(old));assert.deepEqual(old,snapshot);assert.deepEqual(pending,pendingBefore);assert.deepEqual(next.advancement.entries[0],old.advancement.entries[0]);assert.equal(round17Homunculus(next).length,count);assert.deepEqual(L.inspect(next,context(next)).errors,[]);assert.equal(JSON.stringify(exported(next).text.traits).includes('Слуга-гомункул'),Boolean(count));
 }
});
test('PR26 round seventeen: both artificer multiclass orders use class level two and level one has no profile',()=>{
 const first=round17Artificer(),artificerFirst=enter(advance(first,null,{infusions:ROUND17_INFUSIONS}),'fighter'),fighterFirst=enter(enter(create('fighter',null,{abilityMethod:'manual'}),'artificer'),'artificer',{infusions:ROUND17_INFUSIONS});
 for(const c of [artificerFirst,fighterFirst]){const before=copy(c),profiles=round17Homunculus(c);assert.equal(profiles.length,1);assert.match(profiles[0].description,/Хиты 6 .*кости хитов 2к4/);assert.deepEqual(L.inspect(c,context(c)).errors,[]);assert.ok(JSON.stringify(exported(c).text.traits).includes('Хиты 6'));assert.deepEqual(c,before);}
 for(const c of [enter(first,'fighter'),enter(create('fighter',null,{abilityMethod:'manual'}),'artificer')])assert.deepEqual(round17Homunculus(c),[]);
});
test('PR26 round seventeen: every Storm environment retains its targets, Sea save and conditional benefits',()=>{
 const first=create('barbarian',null,{abilityMethod:'manual'}),second=advance(first);
 for(const storm_environment of ['desert','sea','tundra']){
  const c=advance(second,'storm-herald',{storm_environment}),before=copy(c),e=extras(c),f=e.features.find(f=>f.name==='Аура бури');assert.equal(e.features.filter(f=>f.name==='Аура бури').length,1);
  assert.match(f.description,/все остальные существа.*союзников.*2 урона огнём/);assert.match(f.description,/каждое выбранное существо.*включая вас.*2 временных хита/);assert.match(f.description,new RegExp('Море: одно другое видимое существо в пределах 10 футов проходит спасбросок Ловкости Сл '+(10+stats(c).modifiers.constitution)));assert.match(f.description,/1к6 урона молнией при провале или половину при успехе.*Полное укрытие/);
  assert.ok(JSON.stringify(exported(c).text.traits).includes(f.description));assert.equal(stats(c).hp,stats(advance(second,'zealot')).hp);assert.equal(stats(c).speed,stats(first).speed);assert.equal(stats(c).ac,stats(first).ac);assert.deepEqual(c,before);
 }
 const density=extras(advance(create('wizard'),'graviturgy')).features.find(f=>f.name==='Изменение плотности').description;assert.doesNotMatch(density,/согласн|цель.*делает спасбросок/i);
 const danger=extras(second).features.find(f=>f.name==='Чувство опасности').description;assert.doesNotMatch(danger,/оглушены/);
});

function round18Warlock(patron,overrides={}){return create('warlock',patron,{abilityMethod:'manual',abilities:{strength:14,dexterity:14,constitution:14,intelligence:14,wisdom:14,charisma:16},...overrides});}
function round18Blade(second,improved=true){return advance(second,null,{pact:'blade',...(improved?{invocation_remove:'armor-of-shadows',invocation_add:'improved-pact-weapon'}:{})});}

test('PR26 round eighteen: one-handed summoned Hexblade attacks receive Improved Pact Weapon separately',()=>{
 for(const creation_weapon of ['dagger','handaxe','quarterstaff','greatclub'])for(const charisma of [10,16,18]){
  const first=round18Warlock('hexblade',{creation_weapon,abilities:{strength:14,dexterity:14,constitution:14,intelligence:14,wisdom:14,charisma}}),second=advance(first),plain=round18Blade(second,false),improved=round18Blade(second),before=copy(improved);
  const base=extras(plain),e=extras(improved),ordinary=e.attacks.find(a=>a.id===creation_weapon),pact=e.attacks.find(a=>a.id===creation_weapon+'-pact-hex');
  assert.ok(pact,creation_weapon);assert.equal(pact.ability,'charisma');assert.equal(pact.proficient,true);assert.equal(pact.attackBonus,3+stats(improved).modifiers.charisma);assert.equal(pact.damageBonus,1+stats(improved).modifiers.charisma);
  assert.equal(base.attacks.find(a=>a.id===pact.id).attackBonus,pact.attackBonus-1);assert.deepEqual(ordinary,base.attacks.find(a=>a.id===ordinary.id));
  assert.deepEqual(e.attacks.filter(a=>a.id.endsWith('-hex')&&!a.pactWeapon),base.attacks.filter(a=>a.id.endsWith('-hex')&&!a.pactWeapon));assert.equal(new Set(e.attacks.map(a=>a.id)).size,e.attacks.length);
  assert.match(pact.notes[0],/только если.*создана.*Договор клинка/);assert.match(pact.notes.join(' '),/Улучшенное оружие договора.*\+1/);assert.ok(!e.attacks.some(a=>a.pactWeapon&&a.group==='unarmed'));
  for(const c of [first,second,advance(second,null,{pact:'tome'}),advance(second,null,{pact:'chain'}),advance(second,null,{pact:'talisman'})])assert.ok(!extras(c).attacks.some(a=>a.pactWeapon));
  const native=exported(improved).weaponsList.find(w=>w.name.value===pact.label);assert.equal(native.ability,'cha');assert.equal(native.dmg.value,pact.damage);assert.deepEqual(L.inspect(improved,context(improved)).errors,[]);assert.deepEqual(improved,before);
 }
});

test('PR26 round nineteen: default Blade heroes can summon every legal catalogue form without owning it',()=>{
 for(const patron of L.subclasses('warlock').map(s=>s.id)){
  const second=advance(round18Warlock(patron,{abilities:{strength:14,dexterity:18,constitution:14,intelligence:14,wisdom:14,charisma:16}})),plain=round18Blade(second,false),c=round18Blade(second),before=copy(c);
  const e=extras(c),without=extras(plain),nativeData=exported(c),allowedRanged=['shortbow','longbow','light-crossbow','heavy-crossbow'];
  assert.equal(without.attacks.filter(a=>a.pactWeapon).length,28);assert.equal(e.attacks.filter(a=>a.pactWeapon).length,32);
  assert.ok(!context(c).baseExtras.attacks.some(a=>a.id==='greatsword'||a.id==='longbow'));
  for(const weapon of Object.values(O.WEAPONS)){
   const eligible=['simple','martial'].includes(weapon.group)&&(!weapon.properties.includes('ranged')||allowedRanged.includes(weapon.id)),suffix=patron==='hexblade'?'-pact-hex':'-pact',pact=e.attacks.find(a=>a.id===weapon.id+suffix);
   assert.equal(!!pact,eligible,patron+': '+weapon.id);if(!eligible)continue;
   const ability=patron==='hexblade'?'charisma':weapon.properties.includes('ranged')||weapon.properties.includes('finesse')?'dexterity':'strength';
   assert.equal(pact.proficient,true);assert.equal(pact.ability,ability);assert.equal(pact.attackBonus,3+stats(c).modifiers[ability]);assert.equal(pact.damageBonus,1+stats(c).modifiers[ability]);assert.equal(pact.damage,weapon.damage+'+'+pact.damageBonus);
   assert.ok(!pact.notes.some(n=>n.startsWith('Нет владения')));assert.match(pact.notes[0],/только если.*создана.*Договор клинка/);
   assert.equal(!!without.attacks.find(a=>a.id===pact.id),!weapon.properties.includes('ranged'));
   const native=nativeData.weaponsList.find(w=>w.name.value===pact.label);assert.equal(native.isProf,true);assert.equal(native.ability,{strength:'str',dexterity:'dex',charisma:'cha'}[ability]);assert.equal(native.dmg.value,pact.damage);assert.ok(nativeData.bonuses.some(b=>b.target==='weapon.'+native.id+'.attack'&&b.expr==='1'));
   if(weapon.properties.includes('versatile')){const note='Двумя руками: '+(weapon.damage==='1d6'?'1d8':'1d10')+'.';assert.ok(pact.notes.includes(note));assert.ok(native.notes.value.includes(note));}
  }
  assert.deepEqual(e.attacks.filter(a=>!a.pactWeapon),without.attacks.filter(a=>!a.pactWeapon));assert.equal(new Set(e.attacks.map(a=>a.id)).size,e.attacks.length);assert.deepEqual(L.inspect(c,context(c)).errors,[]);assert.deepEqual(c,before);
 }
});

test('PR26 round eighteen: curse healing uses warlock class level with a minimum of one',()=>{
 for(const charisma of [6,16,18]){
  const first=round18Warlock('hexblade',{...(charisma===18?{race:'half-elf',abilityBonusChoices:{slot_0:'strength',slot_1:'dexterity'}}:{}),abilities:{strength:14,dexterity:14,constitution:14,intelligence:14,wisdom:14,charisma}}),second=advance(first),cases=[[first,1],[second,2],[advance(second,null,{pact:'blade'}),3]];
  if(charisma>=13){const entry=enter(create('fighter',null,{abilityMethod:'manual',abilities:first.abilities}),'warlock',{'warlock:creation_patron':'hexblade'});cases.push([enter(first,'fighter'),1],[enter(second,'fighter'),2],[entry,1],[enter(entry,'warlock'),2]);}
  for(const [c,level] of cases){const before=copy(c),e=extras(c),features=e.features.filter(f=>f.name==='Проклятие ведьмовского клинка');assert.deepEqual(R.validateAbilities(c,context(c).baseExtras),[]);assert.equal(features.length,1);const text=features[0].description;assert.match(text,new RegExp('восстановите '+Math.max(1,level+stats(c).modifiers.charisma)+' хит'));assert.match(text,/уровень колдуна \+ модификатор Харизмы.*минимум 1/);assert.match(text,/Бонусное действие.*видим.*30 фут.*1 минут/);assert.match(text,/умирает.*умираете.*недееспособны/);assert.match(text,/броскам урона.*проклятой цели/);assert.match(text,/19–20/);assert.ok(JSON.stringify(exported(c).text.traits).includes(text));const resources=e.resources.filter(r=>r.name==='Проклятие ведьмовского клинка');assert.equal(resources.length,1);assert.equal(resources[0].max,1);assert.equal(resources[0].rest,'short-rest');assert.deepEqual(c,before);assert.deepEqual(L.inspect(c,context(c)).errors,[]);}
 }
});

test('PR26 round eighteen: Genie Wrath and Form of Dread keep complete conditional class rules',()=>{
 for(const [patron,name] of [['genie','Гнев гения'],['undead','Облик ужаса']])for(const genie of patron==='genie'?['dao','djinni','efreeti','marid']:['dao']){
  const first=round18Warlock(patron,patron==='genie'?{creation_genie:genie}:{}),second=advance(first),entry=enter(create('fighter',null,{abilityMethod:'manual'}),'warlock',{'warlock:creation_patron':patron,...(patron==='genie'?{'warlock:creation_genie':genie}:{})}),cases=[[first,1],[second,2],[advance(second,null,{pact:'blade'}),3],[enter(first,'fighter'),1],[enter(second,'fighter'),2],[entry,1],[enter(entry,'warlock'),2]];
  for(const [c,level] of cases){const before=copy(c),e=extras(c),features=e.features.filter(f=>f.name===name);assert.equal(features.length,1);const text=features[0].description;assert.match(text,/Один раз в каждый свой ход.*попадания атакой.*можете/);
   if(patron==='genie'){const expected={dao:['Дао','дробящий'],djinni:['Джинн','звуком'],efreeti:['Ифрит','огнём'],marid:['Марид','холодом']}[genie];for(const part of expected)assert.ok(text.includes(part),text);assert.match(text,/2.*бонус мастерства/);assert.ok(!e.resources.some(r=>/wrath/.test(r.id)));}
   else{assert.match(text,/Бонусное действие.*1 минут/);assert.match(text,new RegExp('1к10 \\+ '+level+' временных хитов'));assert.match(text,/уровень колдуна/);assert.match(text,/иммунитет к испугу.*пока.*облик/);assert.match(text,new RegExp('Мудрости Сл '+(10+stats(c).modifiers.charisma)));assert.match(text,/Сл заклинаний колдуна/);assert.match(text,/при провале.*испугано.*конца вашего следующего хода/);const resources=e.resources.filter(r=>r.name==='Облик ужаса');assert.equal(resources.length,1);assert.equal(resources[0].max,stats(c).proficiencyBonus);assert.equal(resources[0].rest,'long-rest');}
   assert.ok(JSON.stringify(exported(c).text.traits).includes(text));const damageProfiles=attacks=>attacks.filter(a=>!a.pactWeapon).map(({id,damage,damageBonus,type})=>({id,damage,damageBonus,type}));assert.deepEqual(damageProfiles(e.attacks),damageProfiles(context(c).baseExtras.attacks));assert.equal(e.tempHp,undefined);assert.equal(e.resistances,context(c).baseExtras.resistances);const baseline=R.derivedStats(c,{...e,features:[],resources:[]});assert.equal(stats(c).hp,baseline.hp);assert.equal(stats(c).ac,baseline.ac);assert.equal(stats(c).speed,baseline.speed);assert.deepEqual(c,before);assert.deepEqual(L.inspect(c,context(c)).errors,[]);
  }
 }
 for(const patron of ['fiend','hexblade','genie','undead']){const e=extras(round18Warlock(patron));for(const [owner,name] of [['hexblade','Проклятие ведьмовского клинка'],['genie','Гнев гения'],['undead','Облик ужаса']])if(patron!==owner)assert.ok(!e.features.some(f=>f.name===name));}
});


test('PR26 round eighteen: ordinary Hex Warrior preserves legal multiclass thrown-style variants',()=>{
 const first=create('fighter',null,{creation_style:'thrown-weapon-fighting',creation_secondary:'two-handaxes',abilityMethod:'manual'}),c=enter(first,'warlock',{'warlock:creation_patron':'hexblade'}),before=copy(c),e=extras(c),thrown=e.attacks.find(a=>a.id==='handaxe-thrown'),hex=e.attacks.find(a=>a.id==='handaxe-thrown-hex');
 assert.ok(hex);assert.equal(hex.ability,'charisma');assert.equal(hex.damage,'1d6+5');assert.equal(hex.attackBonus,5);assert.equal(thrown.damage,'1d6+5');assert.ok(!e.attacks.some(a=>a.pactWeapon));const native=exported(c).weaponsList.find(w=>w.name.value===hex.label);assert.equal(native.ability,'cha');assert.equal(native.dmg.value,hex.damage);assert.deepEqual(c,before);assert.deepEqual(L.inspect(c,context(c)).errors,[]);
});


const round20Cases=[
 ['Ярость',()=>{const first=create('barbarian',null,{abilityMethod:'manual'}),second=advance(first),entry=enter(create('wizard',null,{abilityMethod:'manual'}),'barbarian');return [first,second,advance(second,'berserker'),enter(second,'wizard'),entry,enter(entry,'barbarian')];},[/бонусным действием.*свой ход/i,/1 минут/,/без тяжёлого доспеха/,/преимущество.*проверки.*спасброски Силы/,/\+2.*рукопашных атак оружием.*Силы/,/дробящему, колющему и рубящему/,/нельзя накладывать заклинания.*концентраци/,/потере сознания/,/конце вашего хода.*не атаковали враждебное существо и не получали урон/,/закончить.*бонусным действием/]],
 ['Среди мёртвых',()=>{const first=create('warlock','undying',{abilityMethod:'manual'}),second=advance(first);return [first,second,advance(second,null,{pact:'blade'}),enter(first,'fighter'),enter(second,'fighter'),enter(create('fighter',null,{abilityMethod:'manual'}),'warlock',{'warlock:creation_patron':'undying'})];},[/Уход за умирающим/,/преимущество.*спасброски против болезней/,/нежить непосредственно выбирает вас целью/,/Мудрости.*Сл.*колдуна/,/област.*не требует/,/другую цель.*атака или заклинание тратится впустую/,/успехе.*24 часа/,/вы выбираете.*целью.*атаки или вредоносного заклинания/]],
 ['Симбиотическая сущность',()=>{const second=advance(create('druid',null,{abilityMethod:'manual'}),'spores'),entry=enter(create('fighter',null,{abilityMethod:'manual'}),'druid');return [second,advance(second),enter(second,'fighter'),enter(entry,'druid',{subclass:'spores'})];},[/Действие.*Дикого облика/,/4 × уровень друида временных хитов/,/удвоенные кости Ореола/,/\+1к6 некротического.*рукопашн/,/Преимущества действуют 10 минут/,/потере всех этих временных хитов/,/повторном использовании Дикого облика/]],
 ['Предзнаменование',()=>{const second=advance(create('wizard',null,{abilityMethod:'manual'}),'divination'),entry=enter(create('fighter',null,{abilityMethod:'manual'}),'wizard');return [second,advance(second),enter(second,'fighter'),enter(entry,'wizard',{subclass:'divination'})];},[/два к20/,/вы или существо/,/видимости/,/атаку, проверку или спасбросок/,/до броска/,/(?:один раз|одного раза) за ход/,/одной неиспользованной костью/,/исчезают после следующего долгого отдыха/]],
 ['Психический шёпот',()=>[advance(advance(create('rogue',null,{abilityMethod:'manual'})),'soulknife')],[/Действием.*видимых существ/,/бонуса мастерства/,/бросьте.*к6.*число часов/,/Каждое.*с вами, а вы с ним/,/1 мили/,/Сообщения.*не требуют действия/,/хотя бы на одном языке/,/общий язык не нужен/,/оборвать связь.*без действия/,/Первое применение.*долгого отдыха.*не расходует кость/,/Повторные применения расходуют одну псионическую кость/,/костей не осталось/]]
];
for(const [name,build,patterns] of round20Cases)test('PR26 round twenty: complete '+name+' conditions survive legal class levels and native LSS',()=>{
 for(const c of build()){
  const before=copy(c),e=extras(c),features=e.features.filter(f=>f.name===name||(name==='Ярость'&&f.description.startsWith('Ярость:')));assert.equal(features.length,1,name);
  const text=features[0].description;for(const p of patterns)assert.match(text,p,name);assert.ok(JSON.stringify(exported(c).text.traits).includes(text));
  if(name==='Психический шёпот')assert.doesNotMatch(text,/одном плане|друг с другом|между собой/);
  if(name==='Симбиотическая сущность')assert.doesNotMatch(text,/временные хиты исчезают|теряете.*хиты.*10 минут/);
  assert.deepEqual(L.inspect(c,context(c)).errors,[]);assert.deepEqual(R.validateAbilities(c,context(c).baseExtras),[]);assert.deepEqual(c,before);
 }
});

test('PR26 round twenty: Great Weapon Fighting rejects ranged weapons in creation, advancement and multiclass',()=>{
 const fighter=create('fighter',null,{abilityMethod:'manual',creation_style:'great_weapon',creation_weapon:'greatsword'}),paladin=create('paladin',null,{abilityMethod:'manual',creation_weapon:'longbow',creation_shield_weapon:'greatsword'}),p2=advance(paladin,null,{style:'great-weapon-fighting'}),ranger=create('ranger',null,{abilityMethod:'manual',creation_weapon:'spear',creation_second_weapon:'spear'});
 const cases=[fighter,advance(fighter),p2,advance(p2,'devotion'),enter(p2,'fighter',{'fighter:creation_style':'defense'}),enter(ranger,'fighter',{'fighter:creation_style':'great_weapon'}),enter(enter(ranger,'paladin'),'paladin',{style:'great-weapon-fighting'})];
 for(const c of cases){const before=copy(c),e=extras(c),data=exported(c),reroll=/переброс|перебрасыва/;assert.deepEqual(L.inspect(c,context(c)).errors,[]);
  const ranged=e.attacks.filter(a=>a.properties.includes('ranged')),melee=e.attacks.filter(a=>!a.properties.includes('ranged')&&(a.properties.includes('two-handed')||a.properties.includes('versatile')));assert.ok(ranged.length);assert.ok(melee.length);
  for(const attack of ranged){assert.doesNotMatch(attack.notes.join(' '),reroll);assert.doesNotMatch(data.weaponsList.find(w=>w.name.value===attack.label).notes.value,reroll);}
  for(const attack of melee){assert.match(attack.notes.join(' '),reroll);assert.match(attack.notes.join(' '),/новый результат/);assert.match(data.weaponsList.find(w=>w.name.value===attack.label).notes.value,reroll);}
  assert.deepEqual(c,before);
 }
 for(const attack of O.derive(fighter,context(fighter)).attacks.filter(a=>a.properties.includes('ranged')))assert.doesNotMatch(attack.notes.join(' '),/переброс/);
});


test('PR26 round twenty: completed summaries remain restricted to their class and unlock level',()=>{
 for(const [cls,branch,name] of [['warlock','fiend','Среди мёртвых'],['druid','land','Симбиотическая сущность'],['wizard','evocation','Предзнаменование'],['rogue','thief','Психический шёпот']]){
  const first=create(cls,cls==='warlock'?branch:null,{abilityMethod:'manual'}),second=advance(first,['druid','wizard'].includes(cls)?branch:null),third=advance(second,cls==='rogue'?branch:null);
  for(const c of [first,second,third])assert.ok(!extras(c).features.some(f=>f.name===name));
 }
 for(const cls of ['fighter','wizard','warlock'])assert.ok(!extras(create(cls,null,{abilityMethod:'manual'})).features.some(f=>f.name==='Ярость'||f.description.startsWith('Ярость:')));
});


const round21Cases=[
 ['Защитники предков',()=>[advance(advance(create('barbarian',null,{abilityMethod:'manual'})),'ancestral-guardian')],[/В ярости.*в каждый свой ход.*первое существо.*попали атакой/,/До начала вашего следующего хода/,/помехой.*по существам, кроме вас; если такая атака попадает.*сопротивление урону этой атаки/,/раньше.*ярость заканчивается/]],
 ['Мантия вдохновения',()=>[6,16,18].map(charisma=>advance(advance(create('bard',null,{abilityMethod:'manual',abilities:{strength:16,dexterity:16,constitution:16,intelligence:16,wisdom:16,charisma}})),'glamour')),[/Бонусным действием.*одно.*Вдохновения барда/,/существ.*модификатора Харизмы.*минимум 1/,/60 футов/,/вы видите.*видят вас/,/5 временных хитов/,/немедленно.*реакцией.*своей скорости.*без провоцированных атак/]],
 ['Психические клинки',()=>[advance(advance(create('bard',null,{abilityMethod:'manual'})),'whispers')],[/попадании.*существу атакой оружием/,/можете потратить одно.*Вдохновения барда/,/2к6.*психическ/,/один раз за раунд.*свой ход/]],
 ['Щупальце глубин',()=>{const first=create('warlock','fathomless',{abilityMethod:'manual'}),second=advance(first),entry=enter(create('fighter',null,{abilityMethod:'manual'}),'warlock',{'warlock:creation_patron':'fathomless'});return [first,second,advance(second,null,{pact:'blade'}),enter(first,'fighter'),enter(second,'fighter'),entry,enter(entry,'warlock')];},[/Бонусным действием.*10-футовое щупальце.*видимом.*60 футов/,/1 минуту.*нового/,/При создании.*можете.*рукопашную атаку заклинанием.*10 футах от щупальца/,/1к8 урона холодом/,/скорость.*10 футов до начала вашего следующего хода/,/Бонусным действием в свой ход.*до 30 футов.*повторить атаку/,/Число призывов.*бонусу мастерства/,/долгого отдыха/]],
 ['Голос власти',()=>{const first=create('cleric','order',{abilityMethod:'manual'}),second=advance(first),entry=enter(create('fighter',null,{abilityMethod:'manual'}),'cleric',{'cleric:creation_domain':'order'});return [first,second,advance(second),enter(first,'fighter'),enter(second,'fighter'),entry,enter(entry,'cleric')];},[/заклинание на союзника.*расходуя ячейку.*1-го уровня или выше/,/сразу после заклинания.*реакцией.*одну атаку оружием/,/выбранному вами существу, которое вы видите/,/несколько союзников.*только одного/,/без расхода ячейки.*не запускает/]],
 ['Обличение жестокости',()=>[advance(advance(create('paladin',null,{abilityMethod:'manual'})),'redemption')],[/Сразу после.*атакующий в пределах 30 футов.*урон атакой.*кроме вас/,/реакцией.*Божественного канала/,/Мудрости.*Сл заклинаний паладина/,/провале.*урона излучением.*нанёс/,/успехе.*половину/,/атака заклинанием/]]
];
for(const [name,build,patterns] of round21Cases)test('PR26 round twenty-one: '+name+' targeting and timing reach legal characters and native LSS',()=>{
 for(const c of build()){
  const before=copy(c),e=extras(c),features=e.features.filter(f=>f.name===name);assert.equal(features.length,1,name);const text=features[0].description;
  for(const p of patterns)assert.match(text,p,name);assert.equal(JSON.stringify(exported(c).text.traits).split(text).length-1,1);
  if(name==='Щупальце глубин'){const pool=e.resources.filter(r=>r.name===name);assert.equal(pool.length,1);assert.equal(pool[0].max,stats(c).proficiencyBonus);assert.equal(pool[0].rest,'long-rest');}
  if(name==='Обличение жестокости'){assert.doesNotMatch(text,/врага оружием|видимого атакующего/);const channel=e.resources.filter(r=>r.name==='Божественный канал');assert.equal(channel.length,1);assert.equal(channel[0].max,1);assert.equal(channel[0].rest,'short-rest');assert.ok(!e.resources.some(r=>r.name===name));}
  if(name==='Мантия вдохновения'||name==='Психические клинки')assert.ok(!e.resources.some(r=>r.name===name));
  assert.equal(e.tempHp,undefined);assert.equal(e.resistances,context(c).baseExtras.resistances);assert.deepEqual(L.inspect(c,context(c)).errors,[]);assert.deepEqual(R.validateAbilities(c,context(c).baseExtras),[]);assert.deepEqual(c,before);
 }
});
test('PR26 round twenty-one: revised rules keep unlocks and Soulknife separate',()=>{
 for(const [cls,branch,name] of [['barbarian','berserker','Защитники предков'],['bard','lore','Мантия вдохновения'],['bard','valor','Психические клинки'],['paladin','devotion','Обличение жестокости'],['warlock','fiend','Щупальце глубин'],['cleric','life','Голос власти']]){
  const first=create(cls,['warlock','cleric'].includes(cls)?branch:null,{abilityMethod:'manual'}),second=advance(first),third=advance(second,branch);for(const c of [first,second,third])assert.ok(!extras(c).features.some(f=>f.name===name));
 }
 for(const cls of ['barbarian','bard','paladin'])for(const c of [create(cls,null,{abilityMethod:'manual'}),advance(create(cls,null,{abilityMethod:'manual'}))])for(const name of ['Защитники предков','Мантия вдохновения','Психические клинки','Обличение жестокости'])assert.ok(!extras(c).features.some(f=>f.name===name));
 const rogue=advance(advance(create('rogue',null,{abilityMethod:'manual'})),'soulknife'),text=extras(rogue).features.find(f=>f.name==='Психические клинки').description;assert.match(text,/Пси-клинки/);assert.doesNotMatch(text,/Вдохновения барда|один раз за раунд/);
});


const round22Build=(cls,branch)=>{
 const first=create(cls,['cleric','sorcerer'].includes(cls)?branch:null,{abilityMethod:'manual'}),second=advance(first),third=advance(second,['bard','paladin'].includes(cls)?branch:null);
 if(['bard','paladin'].includes(cls))return [third];
 const entry=enter(create('fighter',null,{abilityMethod:'manual'}),cls,{[cls+':'+(cls==='cleric'?'creation_domain':'creation_origin')]:branch});
 return cls==='cleric'?[second,third,enter(second,'fighter'),enter(entry,cls)]:[first,second,third,enter(first,'fighter'),enter(second,'fighter'),entry,enter(entry,cls)];
};
const round22Cases=[
 ['bard','glamour','Завораживающее представление',[/не менее 1 минуты/,/модификатора Харизмы.*минимум 1/,/гуманоидов.*60 футов/,/смотревших и слушавших всё выступление/,/Мудрости.*Сл заклинаний барда/,/очаровывает.*1 час/,/без насилия/,/цель получает любой урон/,/вы атакуете.*замечает.*союзнику/,/Успешный спасбросок не выдаёт/,/короткий или долгий отдых/]],
 ['bard','whispers','Слова ужаса',[/наедине с гуманоидом.*1 минуты/,/Мудрости.*Сл заклинаний барда/,/вами или другим.*существом.*1 час/,/цель атакована или получает урон/,/замечает.*союзники атакованы или получили урон/,/Успешный спасбросок не выдаёт/,/короткий или долгий отдых/]],
 ['cleric','life','Божественный канал: Сохранение жизни',[/Действием.*священный символ/,/5 × уровень жреца/,/30 футов/,/половины.*максимума/,/Нежить и конструкты не могут/,/одно применение Божественного канала/]],
 ['cleric','trickery','Божественный канал: Двуличие',[/свободном видимом.*30 футов/,/1 минуты с концентрацией/,/Бонусным действием.*до 30 футов.*120 футов/,/собственные чувства/,/вы и двойник оба.*5 футов.*оно видит двойника/,/атаки.*преимуществом/,/одно применение Божественного канала/]],
 ['sorcerer','shadow','Сила могилы',[/урон снижает хиты до 0/,/Харизмы Сл 5 \+ полученный урон/,/успех оставляет 1 хит/,/излучением или критическом/,/Только успешный спасбросок расходует ресурс/,/до долгого отдыха/,/неудачные попытки не расходуют ресурс/]],
 ['sorcerer','aberrant-mind','Телепатическая речь',[/Бонусным действием.*видимое.*30 футов/,/двустороннюю/,/Каждый участник.*языке.*знает другой/,/минут.*уровню чародея/,/модификатора Харизмы миль.*минимум 1 миля/,/если вы становитесь недееспособны, умираете или создаёте связь с другим/]],
 ['paladin','watchers','Изгнание экстрапланарных',[/Действием.*священный символ/,/аберрации, небожители, элементали, феи и исчадия/,/30 футов.*слышат вас/,/Мудрости.*Сл заклинаний паладина/,/1 минуту или до получения урона/,/не приближается добровольно.*30 футов/,/Рывок.*препятствия движению/,/бежать некуда.*Уклонение/,/одно применение Божественного канала/]]
];
for(const [cls,branch,name,patterns] of round22Cases)test('PR26 round twenty-two: '+name+' limits survive class levels and LSS',()=>{
 for(const c of round22Build(cls,branch)){
  const before=copy(c),e=extras(c),features=e.features.filter(f=>f.name===name);assert.equal(features.length,1);const text=features[0].description;for(const pattern of patterns)assert.match(text,pattern);assert.equal(JSON.stringify(exported(c).text.traits).split(text).length-1,1);assert.deepEqual(c,before);assert.deepEqual(L.inspect(c,context(c)).errors,[]);
  if(cls==='cleric'||cls==='paladin'){const pools=e.resources.filter(r=>r.id.endsWith('channel-divinity'));assert.equal(pools.length,1);assert.equal(pools[0].max,1);assert.ok(!e.resources.some(r=>/preserve-life|invoke-duplicity|extraplanar/.test(r.id)));}
  if(branch==='shadow'){const pools=e.resources.filter(r=>r.id.endsWith('strength-of-the-grave'));assert.equal(pools.length,1);assert.equal(pools[0].max,1);assert.equal(pools[0].rest,'long-rest');assert.match(pools[0].recovery,/только при успешном спасброске/);assert.match(pools[0].recovery,/неудачные попытки не расходуют ресурс/);assert.ok(JSON.stringify(exported(c).text.traits).includes(pools[0].recovery));assert.ok(!text.includes('1 / долгий отдых'));}
  assert.deepEqual(R.derivedStats(c,e),R.derivedStats(c,{...e,features:[],resources:[]}));
 }
});
test('PR26 round twenty-two: changed features retain unlock and subclass boundaries',()=>{
 for(const [cls,branch,name] of round22Cases){
  if(cls!=='sorcerer')assert.ok(!extras(create(cls,cls==='cleric'?branch:null,{abilityMethod:'manual'})).features.some(f=>f.name===name));
  const wrong=cls==='sorcerer'?create(cls,'draconic',{abilityMethod:'manual'}):cls==='cleric'?advance(create(cls,'light',{abilityMethod:'manual'})):advance(advance(create(cls,null,{abilityMethod:'manual'})),cls==='bard'?'lore':'devotion');assert.ok(!extras(wrong).features.some(f=>f.name===name));
  if(cls==='bard'||cls==='paladin')assert.ok(!extras(advance(create(cls,null,{abilityMethod:'manual'}))).features.some(f=>f.name===name));
 }
 assert.ok(!extras(create('sorcerer','draconic')).resources.some(r=>r.id.endsWith('strength-of-the-grave')));
});


const round23Adept={human_feature:'human_alt',creation_feat:'martial-adept',creation_maneuvers:['precision','rally']};
test('PR26 round twenty-three: creation rejects aliases and shared maneuver repeats in both picking orders',()=>{
 for(const [legacy,shared] of Object.entries({disarming:'disarming-attack',distracting:'distracting-strike',evasive:'evasive-footwork',feinting:'feinting-attack',goading:'goading-attack',lunging:'lunging-attack',maneuvering:'maneuvering-attack',menacing:'menacing-attack',precision:'precision-attack',pushing:'pushing-attack',sweeping:'sweeping-attack',trip:'trip-attack',rally:'rally',parry:'parry','commanders-strike':'commanders-strike',riposte:'riposte'})){
  const other=legacy==='rally'?'parry':'rally',c=create('fighter',null,{...round23Adept,creation_maneuvers:[legacy,other],creation_style:'superior-technique',creation_superior_maneuver:'ambush'}),before=copy(c);
  const group=(hero,id)=>O.getChoices(hero,context(hero)).find(g=>g.id===id);
  assert.ok(!group(c,'creation_superior_maneuver').options.some(o=>o.value===shared));
  const bad={...c,creation_superior_maneuver:shared};assert.ok(!group(bad,'creation_maneuvers').options.some(o=>o.value===legacy));
  for(const field of ['creation_maneuvers','creation_superior_maneuver'])assert.ok(O.validate(bad,context(bad)).some(e=>e.field===field));
  // Start with the style, then select a feat; either sequence recomputes the same exclusions.
  const styleFirst={...c,creation_maneuvers:[] ,creation_superior_maneuver:shared};assert.ok(!group(styleFirst,'creation_maneuvers').options.some(o=>o.value===legacy));
  const repaired={...bad,creation_superior_maneuver:'ambush'};assert.deepEqual(O.validate(repaired,context(repaired)),[]);assert.deepEqual(c,before);
 }
 const c=create('fighter',null,{...round23Adept,creation_style:'superior-technique',creation_superior_maneuver:'parry'});
 for(const patch of [{creation_feat:'alert'},{human_feature:'human_stats'},{race:'elf'}])assert.ok(O.getChoices({...c,...patch},context(c)).find(g=>g.id==='creation_superior_maneuver').options.some(o=>o.value==='precision-attack'));
 for(const patch of [{creation_style:'defense'},{class:'wizard'}])assert.ok(O.getChoices({...c,...patch},context(c)).find(g=>g.id==='creation_maneuvers').options.some(o=>o.value==='parry'));
 const next=advance(advance(c),'battle-master'),snapshot=copy(next);assert.deepEqual(L.inspect(next,context(next)).errors,[]);assert.deepEqual(next,snapshot);assert.deepEqual(next.creation_maneuvers,['precision','rally']);
 const pools=extras(next).resources.filter(r=>['martial-adept','superior-technique','superiority-dice'].includes(r.id));assert.deepEqual(pools.map(r=>r.max),[1,1,4]);
});

test('PR26 round twenty-three: secondary fighter excludes original Martial Adept and rejects forged entry/replay',()=>{
 for(const cls of ['wizard','cleric']){
  const c=create(cls,cls==='cleric'?'arcana':null,round23Adept),before=copy(c);
  const draft=L.selectClass(c,L.begin(c,context(c)),'fighter',context(c));draft.choices['fighter:creation_style']='superior-technique';
  const g=L.getChoices(c,draft,context(c)).find(g=>g.id==='fighter:creation_superior_maneuver');assert.ok(!g.options.some(o=>['precision-attack','rally'].includes(o.value)));
  const valid=fill(c,draft,{'fighter:creation_style':'superior-technique','fighter:creation_superior_maneuver':'parry'});assert.deepEqual(L.transition(c,valid,context(c)).errors,[]);
  for(const id of ['precision-attack','rally']){const bad=copy(valid);bad.choices['fighter:creation_superior_maneuver']=id;assert.ok(L.transition(c,bad,context(c)).errors.some(e=>e.field==='fighter:creation_superior_maneuver'));assert.throws(()=>L.commit(c,bad,context(c)));const forged={...c,level:2,advancement:{version:2,entries:[bad]}};assert.ok(L.inspect(forged,context(forged)).errors.length);}
  const next=L.commit(c,valid,context(c)),snapshot=copy(next);assert.deepEqual(L.inspect(next,context(next)).errors,[]);assert.deepEqual(next,snapshot);assert.deepEqual(c,before);assert.deepEqual(next.creation_maneuvers,['precision','rally']);
  const pools=extras(next).resources.filter(r=>r.id.endsWith('martial-adept')||r.id.endsWith('superior-technique'));assert.equal(pools.length,2);assert.ok(pools.every(r=>r.max===1));
  for(const patch of [{human_feature:'human_stats'},{creation_feat:'alert'}]){const inactive={...c,...patch},p=L.selectClass(inactive,L.begin(inactive,context(inactive)),'fighter',context(inactive));p.choices['fighter:creation_style']='superior-technique';assert.ok(L.getChoices(inactive,p,context(inactive)).find(g=>g.id==='fighter:creation_superior_maneuver').options.some(o=>o.value==='precision-attack'));}
 }
});

const round23Features=[
 ['cleric','arcana','Божественный канал: Магическое ограждение',[/Действием.*священный символ/,/небожитель, элементаль, фея или исчадие.*30 футов/,/видит и слышит вас/,/Мудрости против Сл заклинаний жреца/,/1 минуту или до получения любого урона/,/удалиться.*не приближается добровольно.*30 футов.*не совершает реакции/,/Рывок.*препятствия движению.*бежать некуда.*Уклонение/,/одно применение Божественного канала/]],
 ['wizard','scribes','Пробуждённая книга заклинаний',[/Пока держите книгу в руках/,/фокусировкой для заклинаний волшебника/,/заклинание волшебника с использованием ячейки/,/другого заклинания в книге/,/кругу потраченной ячейки.*при повышении круга.*не исходному кругу/,/Заговоры и применение без ячейки не подходят/,/ритуал волшебника.*обычное время.*10 минут.*долгого отдыха/,/короткого отдыха.*пустой книге.*настроены.*все заклинания.*исчезая/]],
];
for(const [cls,branch,name,patterns] of round23Features)test('PR26 round twenty-three: '+name+' retains complete casting/turning conditions',()=>{
 const first=create(cls,cls==='cleric'?branch:null),second=advance(first,cls==='wizard'?branch:null),third=advance(second),secondary=enter(enter(create('fighter',null,{background:'soldier'}),cls,cls==='cleric'?{'cleric:creation_domain':branch}:{}),cls,cls==='wizard'?{subclass:branch}:{});
 for(const c of [second,third,enter(second,'fighter'),secondary]){const before=copy(c),e=extras(c),fs=e.features.filter(f=>f.name===name);assert.equal(fs.length,1);for(const pattern of patterns)assert.match(fs[0].description,pattern);assert.equal(JSON.stringify(exported(c).text.traits).split(fs[0].description).length-1,1);assert.deepEqual(c,before);assert.deepEqual(L.inspect(c,context(c)).errors,[]);assert.deepEqual(R.derivedStats(c,e),R.derivedStats(c,{...e,features:[],resources:[]}));if(cls==='cleric'){assert.equal(e.resources.filter(r=>r.id.endsWith('channel-divinity')).length,1);assert.ok(!e.resources.some(r=>r.id.includes('arcane-abjuration')));assert.doesNotMatch(fs[0].description,/план|5-й/);}}
 assert.ok(!extras(first).features.some(f=>f.name===name));assert.ok(!extras(advance(create(cls,cls==='cleric'?'light':null),cls==='wizard'?'evocation':null)).features.some(f=>f.name===name));
});

test('PR26 round twenty-three: all primal companion profiles explain both command options and exact revival',()=>{
 const second=advance(create('ranger'));assert.ok(!extras(second).features.some(f=>f.name==='Первобытный спутник'));
 for(const companion of ['beast-of-land','beast-of-sea','beast-of-sky']){
  const c=advance(second,'beast-master',{companion_rules:'primal-companion',companion}),before=copy(c),e=extras(c),fs=e.features.filter(f=>f.name==='Первобытный спутник');assert.equal(fs.length,1);const text=fs[0].description;
  for(const pattern of [/самостоятельно перемещается и использует реакции/,/По умолчанию.*Уклонение/,/бонусным действием.*любое другое действие/,/пожертвовать одной своей атакой действия Атака.*без траты бонусного действия/,/3-м уровне.*единственная атака/,/недееспособны.*любое действие самостоятельно/,/1 часа.*действием коснитесь.*1-го круга или выше.*через 1 минуту с полными хитами/,/долгого отдыха.*5 футах.*прежний зверь исчезает/])assert.match(text,pattern);
  assert.match(text,companion==='beast-of-sky'?/хиты 16 \(3к6\)/:/хиты 20 \(3к8\)/);assert.ok(!e.features.some(f=>f.name==='Спутник следопыта'));assert.equal(JSON.stringify(exported(c).text.traits).split(text).length-1,1);assert.deepEqual(c,before);assert.deepEqual(R.derivedStats(c,e),R.derivedStats(c,{...e,features:[],resources:[]}));
 }
 assert.ok(!extras(advance(second,'hunter')).features.some(f=>f.name==='Первобытный спутник'));
 const phb=advance(second,'beast-master',{companion_rules:'phb-beast'});assert.ok(!extras(phb).features.some(f=>f.name==='Первобытный спутник'));
});

const round24Cases=[
 ['cleric','life','Изгнание нежити',[/священный символ.*молитву/,/видящая или слышащая/,/Мудрости против Сл заклинаний жреца/,/минуту либо до любого урона/,/как можно дальше.*30 футов.*не совершает реакции/,/Рывок.*препятствий движению.*бежать некуда.*Уклонение/]],
 ['cleric','light','Божественный канал: Сияние рассвета',[/магическая тьма в 30 футах/,/Враждебные существа.*Телосложения против Сл заклинаний жреца/,/2к10 \+ уровень жреца.*излучением.*половину/,/полным укрытием от вас не затронуты/]],
 ['cleric','order','Божественный канал: Требование порядка',[/слышащие или видящие/,/Мудрости против Сл заклинаний жреца/,/очарованы вами до конца вашего следующего хода либо до любого полученного урона/,/Провалившую спасбросок очарованную цель.*выронить предметы из рук/]],
 ['wizard','chronurgy','Хрональный сдвиг',[/вы или видимое вам существо в 30 футах/,/атаки, проверку характеристики или спасбросок.*реакцией/,/уже после того, как известен успех или провал/,/обязана использовать второй результат/,/Два применения.*долгого отдыха/]],
 ['wizard','conjuration','Малый вызов',[/неодушевлённый предмет в руке.*на земле в 10 футах/,/ранее виденный немагический предмет/,/не более 3 футов.*не более 10 фунтов/,/явно магический.*тусклый свет на 5 футов/,/через 1 час.*новом использовании.*получает или наносит любой урон/]],
 ['bard','valor','Боевое вдохновение',[/кости?.*броску урона оружием/,/реакцией.*КД против этой атаки/,/после броска атаки, но до того, как узнает.*попала.*промахнулась/,/Расходуется полученная кость/]],
 ['paladin','vengeance','Обет вражды',[/Бонусным действием.*Божественный канал/,/одно видимое существо в 10 футах/,/Ваши броски атаки.*преимуществом на 1 минуту/,/до 0 или она теряет сознание/]],
 ['paladin','crown','Вызов чемпиона',[/выбранные видимые существа в 30 футах/,/Мудрости против Сл заклинаний паладина/,/не может добровольно отойти.*дальше 30 футов/,/Для цели.*расстояние до вас превышает 30 футов/,/для всех целей.*недееспособности или смерти/]],
 ['paladin','crown','Переломить ход битвы',[/Бонусным действием.*Божественный канал/,/30 футах, которые слышат вас/,/не более половины максимальных хитов/,/1к6 \+ модификатор Харизмы хитов \(минимум 1\)/]],
];
function round24Heroes(cls,branch){const first=create(cls,cls==='cleric'?branch:null),second=advance(first,cls==='wizard'?branch:null),third=advance(second,['bard','paladin'].includes(cls)?branch:null);return {first,second,third};}
for(const [cls,branch,name,patterns] of round24Cases)test('PR26 round twenty-four: '+name+' preserves verified targets, timing and ending',()=>{
 const {first,second,third}=round24Heroes(cls,branch),early=['bard','paladin'].includes(cls),heroes=[third];if(!early)heroes.push(second,enter(second,'fighter'));
 for(const c of heroes){const before=copy(c),e=extras(c),fs=e.features.filter(f=>f.name===name);assert.equal(fs.length,1);for(const pattern of patterns)assert.match(fs[0].description,pattern);assert.equal(JSON.stringify(exported(c).text.traits).split(fs[0].description).length-1,1);assert.deepEqual(L.inspect(c,context(c)).errors,[]);assert.deepEqual(c,before);assert.deepEqual(R.derivedStats(c,e),R.derivedStats(c,{...e,features:[],resources:[]}));
  if(['cleric','paladin'].includes(cls)){const pools=e.resources.filter(r=>r.id.endsWith('channel-divinity'));assert.equal(pools.length,1);assert.equal(pools[0].max,1);assert.equal(pools[0].rest,'short-rest');}
  if(branch==='chronurgy'){const pools=e.resources.filter(r=>r.id.endsWith('chronal-shift'));assert.equal(pools.length,1);assert.equal(pools[0].max,2);assert.equal(pools[0].rest,'long-rest');assert.doesNotMatch(fs[0].description,/до.*успех|до.*провал/);}
  if(branch==='valor')assert.ok(!e.resources.some(r=>r.id.includes('combat-inspiration')));
 }
 assert.ok(!extras(first).features.some(f=>f.name===name));if(early)assert.ok(!extras(second).features.some(f=>f.name===name));
 const other=round24Heroes(cls,{cleric:branch==='life'?'light':'life',wizard:'evocation',bard:'lore',paladin:'devotion'}[cls]).third;if(name!=='Изгнание нежити')assert.ok(!extras(other).features.some(f=>f.name===name));
});
test('PR26 round twenty-four: secondary cleric text and shared channel depend on cleric class level',()=>{
 for(const branch of ['light','order']){const first=create('fighter',null,{background:'soldier'}),entry=enter(first,'cleric',{'cleric:creation_domain':branch,...(branch==='order'?{'cleric:creation_domain_skill':'persuasion'}:{})}),next=enter(entry,'cleric'),e=extras(next),snapshot=copy(next);assert.ok(!extras(entry).features.some(f=>f.name==='Изгнание нежити'));assert.equal(L.inspect(next,context(next)).state.classStates.cleric.state.level,2);assert.equal(e.features.filter(f=>f.name==='Изгнание нежити').length,1);assert.equal(e.resources.filter(r=>r.id.endsWith('channel-divinity')).length,1);if(branch==='light'){const text=e.features.find(f=>f.name==='Божественный канал: Сияние рассвета').description;assert.match(text,/2к10 \+ уровень жреца/);assert.doesNotMatch(text,/уровень персонажа/);}assert.deepEqual(next,snapshot);}
});


const round25Cases=[
 ['monk','sun-soul','Луч солнечного света',{},[/Дальнобойная атака заклинанием/,/Ловкость/,/30 футов/,/кость Боевых искусств \+ ЛОВ.*излучением/,/действия Атака в свой ход/,/1 ци/,/две.*атаки.*бонусным действием/]],
 ['monk','ascendant-dragon','Дыхание дракона',{},[/замените одну атаку/,/20-футовый конус.*30 × 5/,/Каждое применение.*кислота, холод, огонь, молния или яд/,/2 кости Боевых искусств/,/Ловкости.*половин/,/бонусу мастерства.*долгого отдыха/,/2 ци/]],
 ['ranger','swarmkeeper','Собранный рой',{},[/Раз в каждый свой ход после попадания/,/1к6 колющего/,/Силы.*Сл заклинаний следопыта/,/горизонтально.*до 15 футов/,/ваше.*горизонтально.*до 5 футов/]],
 ['fighter','battle-master','Боевые приёмы',{maneuvers:['sweeping-attack','rally','parry']},[/попадания рукопашной атакой оружием/,/потратьте одну кость превосходства/,/5 футах от первой.*вашей досягаемости/,/исходный бросок атаки.*КД второго/,/результату кости.*того же типа/]],
 ['fighter','arcane-archer','Мистические выстрелы',{arcane_shots:['bursting-arrow','banishing-arrow']},[/цель и все остальные существа.*10 футах/,/2к6 силового/]]
];
for(const [cls,branch,name,choices,patterns] of round25Cases)test('PR26 round twenty-five: '+branch+' carries complete combat conditions into LSS',()=>{
 const second=advance(create(cls,null,{abilityMethod:'manual'})),c=advance(second,branch,choices),before=copy(c),e=extras(c),f=e.features.filter(f=>f.name===name);assert.equal(f.length,1);for(const pattern of patterns)assert.match(f[0].description,pattern);
 const data=exported(c);assert.equal(JSON.stringify(data.text.traits).split(f[0].description).length-1,1);assert.deepEqual(c,before);assert.deepEqual(L.inspect(c,context(c)).errors,[]);assert.deepEqual(R.derivedStats(c,e),R.derivedStats(c,{...e,features:[],resources:[]}));
 if(branch==='sun-soul'){const bolt=e.attacks.filter(a=>a.id==='radiant-sun-bolt');assert.equal(bolt.length,1);assert.equal(bolt[0].ability,'dexterity');assert.equal(bolt[0].type,'radiant');assert.equal(bolt[0].attackBonus,stats(c).modifiers.dexterity+2);assert.equal(bolt[0].damage,'1d4+'+stats(c).modifiers.dexterity);for(const pattern of [/действия Атака в свой ход/,/1 ци/,/две.*атаки.*бонусным действием/])assert.match(bolt[0].notes.join(' '),pattern);assert.equal(data.weaponsList.filter(w=>w.name.value===bolt[0].label).length,1);assert.equal(data.weaponsList.find(w=>w.name.value===bolt[0].label).notes.value,bolt[0].notes.join('; '));assert.equal(e.resources.find(r=>r.id==='ki').max,3);}
 if(branch==='ascendant-dragon'){assert.equal(e.resources.find(r=>r.id==='breath-of-the-dragon').max,2);assert.equal(e.resources.find(r=>r.id==='ki').max,3);}
 if(branch==='swarmkeeper'){assert.equal(stats(c).fly,0);assert.equal(stats(c).speed,stats(second).speed);assert.deepEqual(e.attacks,extras(advance(second,'hunter')).attacks);}
 if(branch==='battle-master'){const pool=e.resources.find(r=>r.id==='superiority-dice');assert.ok(pool);assert.equal(pool.max,4);assert.equal(pool.rest,'short-rest');}
});

test('PR26 round twenty-five: combat features retain class-level and subclass gates',()=>{
 for(const [cls,branch,name] of round25Cases){const second=advance(create(cls,null,{abilityMethod:'manual'}));assert.ok(!extras(second).features.some(f=>f.name===name));const other=advance(second,cls==='monk'?'open-hand':cls==='ranger'?'hunter':'champion');assert.ok(!extras(other).features.some(f=>f.name===name));if(branch==='sun-soul')for(const c of [second,other])assert.ok(!extras(c).attacks.some(a=>a.id==='radiant-sun-bolt'));}
});


test('PR26 round twenty-five: Sweeping keeps legacy feat and style ownership and independent die pools',()=>{
 const legacy=create('wizard',null,{abilityMethod:'manual',human_feature:'human_alt',creation_feat:'martial-adept',creation_maneuvers:['sweeping','rally']}),style=create('fighter',null,{abilityMethod:'manual',creation_style:'superior-technique',creation_superior_maneuver:'sweeping-attack'});
 const combined=advance(advance(create('fighter',null,{abilityMethod:'manual',human_feature:'human_alt',creation_feat:'martial-adept',creation_maneuvers:['sweeping','rally'],creation_style:'superior-technique',creation_superior_maneuver:'precision-attack'})),'battle-master',{maneuvers:['parry','trip-attack','disarming-attack']});
 for(const [c,name] of [[legacy,'Черта: Воинский адепт'],[style,'Превосходная техника'],[combined,'Черта: Воинский адепт']]){const before=copy(c),e=extras(c),f=e.features.find(f=>f.name===name);for(const pattern of round25Cases[3][4])assert.match(f.description,pattern);const native=JSON.stringify(exported(c).text.traits);assert.equal(native.split('исходный бросок атаки').length-1,1);assert.deepEqual(c,before);if(c===legacy||c===combined)assert.deepEqual(c.creation_maneuvers,['sweeping','rally']);}
 assert.deepEqual(extras(combined).resources.filter(r=>['martial-adept','superior-technique','superiority-dice'].includes(r.id)).map(r=>[r.id,r.max,r.rest]),[['martial-adept',1,'short-rest'],['superior-technique',1,'short-rest'],['superiority-dice',4,'short-rest']]);
 const inactive=create('fighter',null,{abilityMethod:'manual',creation_maneuvers:['sweeping','rally'],creation_superior_maneuver:'sweeping-attack'});assert.ok(!JSON.stringify(extras(inactive).features).includes('исходный бросок атаки'));
});

const round26Cases=[
 ['cleric','nature','Божественный канал: Очарование животных и растений',[/Действием.*священный символ.*имя божества/,/все звери и растения.*30 футах.*видят вас/,/Мудрости против Сл заклинаний жреца/,/очарованы вами на 1 минуту.*любого полученного урона/,/дружелюбны.*указанным.*существам/]],
 ['cleric','twilight','Божественный канал: Сумеречное святилище',[/священный символ/,/радиусом 30 футов с центром на вас.*перемещается вместе с вами/,/1 минуту.*недееспособности или смерти/,/включая вас.*заканчивает свой ход внутри сферы/,/1к6 \+ уровень жреца временных хитов.*один эффект/]],
 ['druid','stars','Звёздный облик',[/Сохраняете свои игровые характеристики/,/яркий свет в 10 футах.*тусклый ещё на 10 футов/,/добровольном прекращении \(без действия\).*недееспособности, смерти или повторном применении/,/Лучник:.*60 футов.*Чаша:.*Дракон:/]],
 ['warlock','genie','Уединение в сосуде',[/Действием, касаясь сосуда/,/удвоенного бонуса мастерства часов/,/сосуд остаётся на месте/,/бонусным действием.*смерти или уничтожении сосуда/,/ближайшем свободном пространстве/,/повторно.*после долгого отдыха/]],
 ['rogue','inquisitive','Проницательный бой',[/Бонусным действием.*видимое.*не недееспособно/,/Мудрости \(Проницательность\).*Харизмы \(Обман\)/,/Скрытую атаку.*без преимущества.*нет помехи/,/1 минуту.*успешного применения.*другой цели/]],
 ['ranger',null,'Избранный противник',[/броском атаки/,/концентрация до 1 минуты, как на заклинании/,/первом попадании.*с нанесением урона в каждый ваш ход/,/включая помечающее попадание/,/увеличить урон на 1к4/,/урон без попадания не подходит/]],
 ['wizard','abjuration','Магическая защита',[/до конца долгого отдыха/,/2 × уровень волшебника \+ модификатор Интеллекта/,/отдельные хиты защиты, не временные хиты/,/защита принимает его первой.*избыток получает персонаж/,/При 0 хитов защита остаётся, но не поглощает/,/от 1-го круга.*2 × круг.*не выше максимума/]],
];
for(const [cls,branch,name,patterns] of round26Cases)test('PR26 round twenty-six: '+name+' has source-verified conditions across legal levels and multiclass orders',()=>{
 const atCreation=['cleric','warlock'].includes(cls),optional=cls==='ranger'?{creation_favored_feature:'favored-foe'}:{},first=create(cls,atCreation?branch:null,optional),second=advance(first,['druid','wizard'].includes(cls)?branch:null),third=advance(second,cls==='rogue'?branch:null),heroes=[third];
 if(cls!=='rogue')heroes.push(second,enter(second,'fighter'));
 if(cls==='warlock'||cls==='ranger')heroes.push(first,enter(first,'fighter'));
 if(cls!=='rogue'){const pinned=cls==='cleric'?{'cleric:creation_domain':branch}:cls==='warlock'?{'warlock:creation_patron':branch}:cls==='ranger'?{'ranger:creation_favored_feature':'favored-foe'}:{};const entry=enter(create('fighter',null,{background:'soldier'}),cls,pinned);heroes.push(enter(entry,cls,['druid','wizard'].includes(cls)?{subclass:branch}:{}));}
 for(const c of heroes){const before=copy(c),e=extras(c),fs=e.features.filter(f=>f.name===name);assert.equal(fs.length,1);for(const pattern of patterns)assert.match(fs[0].description,pattern);const text=fs[0].description;assert.equal(JSON.stringify(exported(c).text.traits).split(text).length-1,1);assert.deepEqual(L.inspect(c,context(c)).errors,[]);assert.deepEqual(c,before);assert.deepEqual(R.derivedStats(c,e),R.derivedStats(c,{...e,features:[],resources:[]}));
  if(cls==='cleric'){const pools=e.resources.filter(r=>r.id.endsWith('channel-divinity'));assert.equal(pools.length,1);assert.equal(pools[0].max,1);assert.equal(pools[0].rest,'short-rest');}
  if(cls==='druid'){const pools=e.resources.filter(r=>r.id.endsWith('wild-shape'));assert.equal(pools.length,1);assert.equal(pools[0].max,2);assert.ok(!e.resources.some(r=>/starry/.test(r.id)));}
  if(cls==='warlock'){assert.doesNotMatch(text,/ничком|сбит.*ног|prone/);const pool=e.resources.find(r=>r.id.endsWith('bottled-respite'));assert.equal(pool.max,1);assert.equal(pool.rest,'long-rest');}
  if(cls==='rogue')assert.doesNotMatch(text,/30 футов/);
  if(cls==='ranger'){const pool=e.resources.find(r=>r.id.endsWith('favored-foe'));assert.equal(pool.max,2);assert.equal(pool.rest,'long-rest');assert.ok(!e.features.some(f=>f.name==='Избранный враг'));}
  if(cls==='wizard'){const pool=e.resources.find(r=>r.id.endsWith('arcane-ward')),level=L.inspect(c,context(c)).state.classStates.wizard.state.level;assert.equal(pool.max,2*level+stats(c).modifiers.intelligence);}
 }
 if(!['warlock','ranger'].includes(cls))assert.ok(!extras(first).features.some(f=>f.name===name));
 const other=cls==='ranger'?create(cls):create(cls,cls==='cleric'?'life':cls==='warlock'?'fiend':null),other2=advance(other,cls==='druid'?'land':cls==='wizard'?'evocation':null),other3=advance(other2,cls==='rogue'?'thief':null);assert.ok(!extras(other3).features.some(f=>f.name===name));
});
