const test=require('node:test'),assert=require('node:assert/strict');
const R=require('../rules'),L=require('../levelup-rules'),E=require('../lss-export');
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
