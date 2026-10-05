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
  assert.ok(JSON.stringify(exported(c).text.traits).includes('Сила могилы: 1; восстановление после долгого отдыха.'));
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

test('PR26 multiclass barbarian grants light and medium armor and shields',()=>{
 const wizard=create('wizard'),c=enter(wizard,'barbarian'),armor=stats(c).proficiencies.armor;
 assert.ok(!stats(wizard).proficiencies.armor.includes('light'));
 for(const id of ['light','medium','shield'])assert.ok(armor.includes(id),id);
 const prof=JSON.stringify(exported(c).text.prof);
 for(const label of ['Лёгкие доспехи','Средние доспехи','Щиты'])assert.ok(prof.includes(label),label);
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