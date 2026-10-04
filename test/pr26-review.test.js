const test=require('node:test'),assert=require('node:assert/strict');
const R=require('../rules'),L=require('../levelup-rules'),E=require('../lss-export');
const {create,advance,fill,context,extras,stats,copy}=require('./fixtures/characters');
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
