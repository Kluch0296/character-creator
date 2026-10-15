const test=require('node:test');
const assert=require('node:assert/strict');
const R=require('../rules'),O=require('../creation-options'),L=require('../levelup-rules'),D=require('../levelup-data'),E=require('../lss-export'),S=require('../spell-info');
const {copy,context,create,fill,advance,enter,extras,stats}=require('./fixtures/characters');
test('catalogue admits every published legacy branch and all 26 transitions preserve creation',()=>{
 assert.equal(D.subclasses.length,118);let transitions=0;
 for(const branch of D.subclasses){let c=create(branch.class,branch.id);const initial=copy(c);c=advance(c,branch.id);c=advance(c,branch.id);const e=extras(c);assert.equal(c.level,3,branch.id);assert.equal(e.subclass.id,branch.id);assert.deepEqual(L.inspect(copy(c),context(c)).errors,[],branch.id);assert.ok(stats(c).hp>stats(initial).hp);for(const key of Object.keys(initial))if(key!=='level')assert.deepEqual(c[key],initial[key],branch.id+':'+key);const native=JSON.parse(E.buildLssExport(c,{},stats(c),e)[0].data);assert.equal(native.info.level.value,3);assert.equal(native.vitality['hp-max'].value,stats(c).hp);assert.equal(native.vitality['hp-dice-current'].value,3);transitions+=2;}
 assert.equal(transitions,236);
});
test('ordinary official spell lists and metadata are complete; restricted spells stay restricted',()=>{
 for(const s of Object.values(D.spells)){assert.ok(s.level<=2);assert.ok(D.sources.includes(s.source));assert.ok(S.get(s.id),s.id);if(!s.restrictions&&s.id!=='encode-thoughts')assert.ok(s.classes.length,s.id);}
 for(const id of ['absorb-elements','catapult','tashas-mind-whip','rimes-binding-ice'])assert.ok(L.spellList('wizard',2,{},undefined,false).includes(id),id);assert.ok(L.spellList('wizard',0,{},undefined,true).includes('mind-sliver'));
 assert.ok(!L.spellList('wizard',2).includes('gift-of-alacrity'));
});
test('pending cancellation, resume, duplicate commit and forged ledgers are transactional',()=>{
 const c=create('fighter');const snapshot=copy(c),p=fill(c,L.begin(c,context(c)));c.pendingAdvancement=copy(p);assert.equal(stats(c).hp,stats(snapshot).hp);delete c.pendingAdvancement;assert.deepEqual(c,snapshot);const next=L.commit(c,copy(p),context(c));assert.equal(next.level,2);assert.throws(()=>L.commit(next,p,context(next)));for(const mutation of [x=>x.to=4,x=>x.from=2,x=>x.hp.value=99,x=>x.hp.value=1.2,x=>x.choices.forged='bonus']){const bad=copy(p);mutation(bad);assert.ok(L.transition(c,bad,context(c)).errors.length);}
 const bad=copy(next);bad.advancement.entries.push(copy(p));bad.level=3;assert.ok(L.inspect(bad,context(bad)).errors.length);assert.equal(stats(bad).hp,stats(c).hp);assert.throws(()=>E.buildLssExport(bad,{},stats(bad),extras(bad)));
 const changed=copy(next);changed.class='barbarian';assert.ok(L.inspect(changed,context(changed)).errors.length);const reset=L.reset(changed);assert.equal(reset.level,1);assert.equal(reset.name,c.name);
});
test('HP handles actual die result, CON, dwarf toughness and draconic bonuses per level',()=>{
 let c=create('fighter');c.race='dwarf';c.race_sub='hill-dwarf';c=advance(c,'champion');c=advance(c,'champion');assert.equal(stats(c).hp,(10+4+1)+2*(6+4+1));
 let sorc=create('sorcerer','draconic');sorc=advance(sorc);sorc=advance(sorc);assert.equal(stats(sorc).hp,(6+3+1)+2*(4+3+1));
 let fighter=create('fighter');const p=fill(fighter,L.begin(fighter,context(fighter)));p.hp={mode:'roll',value:1};const two=L.commit(fighter,p,context(fighter));assert.equal(stats(two).hp,stats(fighter).hp+1+3);
});
test('spell tiers, known/book quotas and automatic spells match native export',()=>{
 for(const cls of ['wizard','cleric','druid','sorcerer','bard','warlock','paladin','ranger','artificer']){let c=create(cls);c=advance(c);c=advance(c);const e=extras(c),native=JSON.parse(E.buildLssExport(c,{},stats(c),e)[0].data);if(cls==='warlock'){assert.deepEqual(e.spellcasting.pactSlots,{level:2,count:2});assert.equal(native.spellsPact['slots-2'].value,2);assert.equal(native.spells['slots-1'],undefined);}else if(['paladin','ranger','artificer'].includes(cls)){assert.deepEqual(e.spellcasting.slotTiers,{1:3});assert.equal(native.spells['slots-1'].value,3);}else {assert.deepEqual(e.spellcasting.slotTiers,{1:4,2:2});assert.equal(native.spells['slots-2'].value,2);}if(cls==='wizard')assert.equal(e.spellcasting.spellbook.length,10);}
 let c=create('cleric','life');c=advance(c);c=advance(c);assert.ok(extras(c).spells.some(s=>s.id==='spiritual-weapon'&&s.limitExempt));
 let shadow=create('sorcerer','shadow');shadow=advance(shadow);shadow=advance(shadow);assert.ok(extras(shadow).spells.some(s=>s.id==='darkness'&&s.limitExempt));
 let stars=create('druid');stars=advance(stars,'stars');assert.ok(extras(stars).spells.some(s=>s.id==='guidance'&&s.limitExempt));assert.ok(extras(stars).spells.some(s=>s.id==='guiding-bolt'&&s.limitExempt));
});
test('nested prerequisites, optional feature selection and current resources are enforced',()=>{
 let monk=create('monk');const p=fill(monk,L.begin(monk,context(monk)),{'variant_dedicated-weapon':'yes'});monk=L.commit(monk,p,context(monk));assert.ok(extras(monk).features.some(f=>f.name==='Специальное оружие'));monk=advance(monk,'four-elements');const disciplines=L.optionList('ED',monk,{level:3,choices:{},known:[],cantrips:[],invocations:[],infusions:[]});assert.ok(!disciplines.some(o=>o.value==='gong-of-the-summit'));
 let dreams=create('druid');dreams=advance(dreams,'dreams');dreams=advance(dreams,'dreams');assert.equal(extras(dreams).resources.find(x=>x.id==='balm-of-summer-court').max,3);
 let ranger=create('ranger');ranger=advance(ranger,'hunter');ranger=advance(ranger,'hunter',{'variant_primal-awareness':'yes'});assert.ok(extras(ranger).spells.some(s=>s.id==='speak-with-animals'&&s.usage.includes('1 раз')));
 let wizard=create('wizard');wizard=advance(wizard,'abjuration');assert.equal(extras(wizard).resources.find(x=>x.id==='arcane-ward').max,7);
 let bard=create('bard');bard=advance(bard,'lore');const bp=L.begin(bard,context(bard)),newSkills=Object.keys(R.SKILLS).filter(id=>!context(bard).proficiencies.skills.includes(id)).slice(0,3);fill(bard,bp,{subclass:'lore',subclass_skills:newSkills,expertise:newSkills.slice(0,2)});assert.deepEqual(L.transition(bard,bp,context(bard)).errors,[]);bard=L.commit(bard,bp,context(bard));assert.ok(stats(bard).proficiencies.expertise.includes(newSkills[0]));
});
test('all 13 × 13 entries preserve the foundation and advance only the selected class',()=>{
 for(const starting of Object.keys(R.CLASSES))for(const target of Object.keys(R.CLASSES)){
  const c=create(starting),initial=copy(c),p=fill(c,L.selectClass(c,L.begin(c,context(c)),target,context(c)));
  assert.deepEqual(L.transition(c,p,context(c)).errors,[],starting+' → '+target);
  const next=L.commit(c,p,context(c)),e=extras(next),state=L.inspect(next,context(next)).state;
  assert.equal(next.level,2);assert.equal(state.classStates[target].state.level,starting===target?2:1);
  assert.equal(e.classes.reduce((sum,x)=>sum+x.level,0),2);assert.equal(e.hitDicePools.reduce((sum,x)=>sum+x.count,0),2);
  assert.equal(stats(next).hp-stats(c).hp,L.hpGain(c,p,context(c)).gain);
  assert.deepEqual(stats(next).proficiencies.savingThrows,stats(c).proficiencies.savingThrows);
  assert.deepEqual(e.equipment,extras(c).equipment);assert.deepEqual(e.money,extras(c).money);
  for(const key of Object.keys(initial))if(key!=='level')assert.deepEqual(next[key],initial[key]);
  const p3=fill(next,L.selectClass(next,L.begin(next,context(next)),target,context(next))),third=L.commit(next,p3,context(next));
  assert.equal(L.inspect(third,context(third)).state.classStates[target].state.level,starting===target?3:2);
  assert.equal(extras(third).classes.reduce((sum,x)=>sum+x.level,0),3);assert.throws(()=>L.begin(third,context(third)));
 }
});
test('multiclass ability thresholds use permanent bonuses and recheck all existing classes',()=>{
 for(const target of Object.keys(R.CLASSES)){
  const c=create('fighter');c.race='human';c.human_feature='human_stats';for(const ab of R.ABILITIES)c.abilities[ab]=11;
  if(target==='fighter')continue;
  const p=L.begin(c,context(c));p.classId=target;p.hp.value=R.CLASSES[target].hitDie/2+1;
  assert.ok(L.transition(c,p,context(c)).errors.some(x=>x.field==='classId'));
  assert.equal(L.classOptions(c,context(c)).find(x=>x.value===target).eligible,false);
 }
 const c=create('fighter');for(const ab of R.ABILITIES)c.abilities[ab]=12;
 assert.equal(L.classOptions(c,context(c)).find(x=>x.value==='monk').eligible,true);
 c.abilities.wisdom=11;assert.equal(L.classOptions(c,context(c)).find(x=>x.value==='monk').eligible,false);
 c.abilities.strength=1;c.abilities.dexterity=12;c.abilities.wisdom=12;assert.equal(L.classOptions(c,context(c)).find(x=>x.value==='monk').eligible,true);
 c.abilities.dexterity=11;assert.equal(L.classOptions(c,context(c)).find(x=>x.value==='wizard').eligible,false);
 assert.equal(L.classOptions(c,context(c)).find(x=>x.value==='fighter').eligible,true);
});
test('multiclass full slots, separate pact, class-bounded spell circles and legacy migration agree',()=>{
 const enter=(c,id)=>L.commit(c,fill(c,L.selectClass(c,L.begin(c,context(c)),id,context(c))),context(c));
 let c=enter(create('wizard'),'cleric');assert.deepEqual(extras(c).spellcasting.slotTiers,{1:3});
 c=enter(c,'bard');const e=extras(c);assert.deepEqual(e.spellcasting.slotTiers,{1:4,2:2});assert.equal(e.spellcastingByClass.length,3);
 assert.ok(e.spells.filter(x=>!x.limitExempt).every(x=>x.level<=1));
 const pact=enter(enter(create('wizard'),'warlock'),'wizard');assert.deepEqual(extras(pact).spellcasting.slotTiers,{1:3});assert.deepEqual(extras(pact).spellcasting.pactSlots,{count:1,level:1});
 const artificer=enter(create('artificer'),'wizard');assert.deepEqual(extras(artificer).spellcasting.slotTiers,{1:3});
 const paladin=enter(create('paladin'),'wizard');assert.deepEqual(extras(paladin).spellcasting.slotTiers,{1:2});
 const original=create('fighter'),legacy=fill(original,L.begin(original,context(original)));legacy.version=1;delete legacy.classId;
 const saved=L.commit(original,legacy,context(original));saved.advancement.version=1;assert.deepEqual(L.inspect(saved,context(saved)).errors,[]);
 const migrated=enter(saved,'wizard');assert.equal(migrated.advancement.version,2);assert.deepEqual(extras(migrated).classes.map(x=>x.level),[2,1]);
 const snapshot=copy(migrated);snapshot.advancement.entries[1].classId='sorcerer';assert.ok(L.inspect(snapshot,context(snapshot)).errors.length);assert.equal(stats(snapshot).hp,stats(original).hp);
});
test('catalogue aliases, book restrictions, Russian primary labels and companion filters are factual',()=>{
 assert.ok(D.features.some(f=>f.id==='rallying-cry'&&f.subclass==='banneret'));assert.ok(!D.features.some(f=>f.subclass==='purple-dragon-knight-banneret'));
 for(const id of ['death','oathbreaker'])assert.match(D.subclasses.find(x=>x.id===id).restrictions,/Мастера/);
 assert.equal(D.subclasses.find(x=>x.id==='bladesinging').source,'TCE');assert.equal(D.subclasses.find(x=>x.id==='bladesinging').restrictions,'');
 assert.ok(!D.companions.some(x=>/^swarm/i.test(x.name)));assert.ok(D.companions.some(x=>x.id==='fox'&&x.label==='Лиса'));assert.equal(L.label('deep-roth'),'Глубинный роф');
 assert.equal(L.label('bag-of-holding'),'Сумка хранения');assert.equal(O.SPELL_NAMES['mind-sliver'],D.spells['mind-sliver'].label);
});
test('missing monk, ranger, Psi Warrior and Kensei effects and permanent selections have exact summaries',()=>{
 const monk=advance(create('monk'));for(const name of ['Шквал ударов','Терпеливая оборона','Поступь ветра'])assert.ok(extras(monk).features.some(f=>f.name===name&&f.description.includes('1 ци')));
 const kensei=advance(monk,'kensei');assert.ok(extras(kensei).features.some(f=>f.name==='Ловкое парирование'&&f.description.includes('+2 КД')));assert.ok(extras(kensei).features.some(f=>f.name==='Выстрел кэнсэя'&&f.description.includes('1к4')));
 const psi=advance(advance(create('fighter')),'psi-warrior');for(const name of ['Защитное поле','Псионический удар','Телекинетическое перемещение'])assert.ok(extras(psi).features.some(f=>f.name===name&&f.description.includes('30 фут')));
 const ranger=advance(advance(create('ranger')),'hunter',{hunter_prey:'colossus-slayer'});assert.ok(extras(ranger).features.some(f=>f.name==='Первозданная осведомлённость'&&f.description.includes('ячейк')));assert.ok(extras(ranger).features.some(f=>f.name==='Добыча охотника'&&f.description.includes('1к8')));
 const bear=advance(advance(create('barbarian')),'totem-warrior',{totem:'bear'});assert.ok(extras(bear).features.some(f=>f.name==='Дух тотема'&&f.description.includes('кроме психического')));
});
test('automatic Shadow and Lunar spells cannot occupy ordinary quotas or replacement pools',()=>{
 let lunar=create('sorcerer','lunar');let e=extras(lunar);assert.equal(e.spells.filter(x=>x.status==='known'&&!x.limitExempt).length,2);assert.equal(e.spells.filter(x=>x.status==='known'&&x.limitExempt).length,3);
 const group=O.getChoices(lunar,context(lunar)).find(x=>x.id==='creation_known_spells');for(const id of ['shield','ray-of-sickness','color-spray'])assert.ok(!group.options.some(x=>x.value===id));
 lunar=advance(advance(lunar));e=extras(lunar);assert.equal(e.spells.filter(x=>x.status==='known'&&!x.limitExempt).length,4);assert.equal(e.spells.filter(x=>x.status==='known'&&x.limitExempt).length,6);
 const shadow=advance(create('sorcerer','shadow')),p=fill(shadow,L.begin(shadow,context(shadow)));assert.ok(!L.getChoices(shadow,p,context(shadow)).find(g=>g.id==='learn').options.some(x=>x.value==='darkness'));
 const forged=copy(p);forged.choices.learn='darkness';assert.ok(L.transition(shadow,forged,context(shadow)).errors.some(x=>x.field==='learn'));
 const s3=L.commit(shadow,p,context(shadow));assert.equal(extras(s3).spells.filter(x=>x.status==='known'&&!x.limitExempt).length,4);assert.equal(extras(s3).spells.filter(x=>x.id==='darkness').length,1);
});
test('Aberrant Mind may replace Mind Sliver once with a legal same-degree bonus cantrip',()=>{
 const c=create('sorcerer','aberrant-mind'),p=fill(c,L.begin(c,context(c)),{bonus_remove:'mind-sliver',bonus_add:'true-strike'});assert.ok(!O.getChoices(c,context(c)).find(g=>g.id==='creation_cantrips').options.some(x=>x.value==='mind-sliver'));assert.deepEqual(L.transition(c,p,context(c)).errors,[]);
 const next=L.commit(c,p,context(c));assert.ok(extras(next).spells.some(x=>x.id==='true-strike'&&x.limitExempt));assert.ok(!extras(next).spells.some(x=>x.id==='mind-sliver'));
 const bad=copy(p);bad.choices.bonus_add='charm-person';assert.ok(L.transition(c,bad,context(c)).errors.some(x=>x.field==='bonus_add'));
 const n3=fill(next,L.begin(next,context(next)));const remove=L.getChoices(next,n3,context(next)).find(x=>x.id==='bonus_remove');assert.ok(remove.options.some(x=>x.value==='true-strike'));const swap=fill(next,L.begin(next,context(next)),{spell_remove:L.inspect(next,context(next)).state.known[0]});assert.ok(!L.getChoices(next,swap,context(next)).find(x=>x.id==='spell_add').options.some(x=>x.value==='true-strike'));
});
test('fighter eleven styles retain old IDs, nest Superior Technique and apply effects once',()=>{
 const base=create('fighter'),g=O.getChoices(base,context(base)).find(x=>x.id==='creation_style');assert.equal(g.options.length,11);for(const id of ['great_weapon','two_weapon','blind-fighting','interception','superior-technique','thrown-weapon-fighting','unarmed-fighting'])assert.ok(g.options.some(x=>x.value===id));
 let superior={...copy(base),creation_style:'superior-technique',creation_superior_maneuver:'precision-attack'};assert.deepEqual(O.validate(superior,context(superior)),[]);assert.equal(O.getChoices(superior,context(superior)).find(x=>x.id==='creation_superior_maneuver').count,1);
 superior=advance(advance(superior),'champion');assert.equal(extras(superior).resources.filter(x=>x.id==='superior-technique').length,1);assert.equal(extras(superior).resources.find(x=>x.id==='superior-technique').max,1);assert.equal(extras(superior).features.filter(x=>x.name==='Превосходная техника').length,1);
 const invalid={...superior,creation_superior_maneuver:['precision-attack','trip-attack']};assert.ok(O.validate(invalid,context(invalid)).length);
 let thrown={...copy(base),creation_style:'thrown-weapon-fighting',creation_secondary:'two-handaxes'};const weapon=extras(thrown).attacks.find(x=>x.properties.includes('thrown')&&!x.thrownVariant);assert.ok(weapon);assert.equal(weapon.damageBonus,stats(thrown).modifiers[weapon.ability]);assert.ok(!weapon.notes.some(x=>x.includes('+2 к урону')));
 const hurled=extras(thrown).attacks.filter(x=>x.id===weapon.id+'-thrown');assert.equal(hurled.length,1);assert.equal(hurled[0].damageBonus,weapon.damageBonus+2);assert.equal(hurled[0].attackBonus,weapon.attackBonus);
 thrown=advance(advance(thrown),'champion');assert.equal(extras(thrown).attacks.find(x=>x.id===weapon.id).damageBonus,weapon.damageBonus);assert.equal(extras(thrown).attacks.filter(x=>x.id===weapon.id+'-thrown').length,1);
 const unarmed={...copy(base),creation_style:'unarmed-fighting'};assert.match(extras(unarmed).attacks.find(x=>x.id==='unarmed').damage,/^1d6\+/);
});
test('Harengon initiative, racial unlocks, resources and slotless grants retain exact export distinctions',()=>{
 const harengon={...create('bard'),race:'harengon',human_feature:null};const initiative=stats(harengon).initiative;const h2=advance(harengon);assert.equal(stats(h2).initiative,initiative);assert.equal(extras(h2).resources.find(x=>x.id==='bardic-inspiration').max,3);
 let warlock=advance(create('warlock'),null,{invocations:['armor-of-shadows','thief-of-five-fates']});warlock=advance(warlock,null,{pact:'chain'});const e=extras(warlock),out=E.buildLssExport(warlock,{},stats(warlock),e)[0];
 for(const id of ['mage-armor','find-familiar'])assert.ok(out.spells.slotless.includes(E.SPELL_IDS[id]));assert.ok(!out.spells.slotless.includes(E.SPELL_IDS.bane));assert.ok(e.spells.some(x=>x.id==='bane'&&x.usage.includes('расходует ячейку')));assert.ok(e.spells.some(x=>x.id==='find-familiar'&&x.ability==='charisma'&&x.limitExempt));assert.equal(L.inspect(warlock,context(warlock)).state.known.length,4);
 const raw=JSON.parse(E.buildLssExport(h2,{},stats(h2),extras(h2))[0].data);assert.ok(JSON.stringify(raw.text.traits).includes('Бардовское вдохновение (к6): 3; восстановление после долгого отдыха'));
 const tiefling=advance(advance({...create('fighter'),race:'tiefling',human_feature:null}),'champion');assert.ok(extras(tiefling).spells.some(x=>x.id==='hellish-rebuke'&&x.usage.includes('2-го круга')));
 for(const [sub,word] of [['aasimar-guardian','полёта 30'],['aasimar-punisher','в конце каждого хода'],['fallen-aasimar','испуганы']]){const c=advance(advance({...create('fighter'),race:'aasimar',race_sub:sub,human_feature:null}),'champion'),f=extras(c).features.find(x=>x.name==='Преображение аасимара');assert.ok(f.description.includes(word));assert.ok(f.url.includes('/race/'));assert.equal(stats(c).fly,0);}
 const fighter=advance(advance(create('fighter')),'champion');assert.ok(!extras(fighter).notes.some(x=>x.includes('1к10 + 1')));
});
test('every permanent nested branch is selectable and revalidated, including all lands and companions',()=>{
 const cases=[['barbarian','totem-warrior','totem'],['barbarian','storm-herald','storm_environment'],['barbarian','zealot','divine_damage'],['ranger','hunter','hunter_prey'],['warlock',null,'pact'],['druid','land','land'],['monk','four-elements','discipline'],['fighter','rune-knight','runes'],['fighter','arcane-archer','arcane_shots'],['fighter','battle-master','maneuvers'],['sorcerer',null,'metamagic']];
 for(const [cls,branch,key]of cases){let c=create(cls);c=advance(c,branch);const p=fill(c,L.begin(c,context(c)),branch?{subclass:branch}:{}),g=L.getChoices(c,p,context(c)).find(g=>g.id===key);assert.ok(g,cls+':'+key);for(const o of g.options){const selected=[o.value,...g.options.filter(x=>x.value!==o.value).slice(0,g.count-1).map(x=>x.value)];const draft=fill(c,L.begin(c,context(c)),{...(branch?{subclass:branch}:{}),[key]:g.count===1?selected[0]:selected});assert.deepEqual(L.transition(c,draft,context(c)).errors,[],cls+':'+key+':'+o.value);assert.equal(L.commit(c,draft,context(c)).level,3);}}
 let ranger=advance(create('ranger'));
 for(const beast of D.companions){const p=fill(ranger,L.begin(ranger,context(ranger)),{subclass:'beast-master',companion_rules:'phb-beast',companion:beast.id});assert.deepEqual(L.transition(ranger,p,context(ranger)).errors,[],beast.id);}
 for(const beast of ['beast-of-land','beast-of-sea','beast-of-sky']){const p=fill(ranger,L.begin(ranger,context(ranger)),{subclass:'beast-master',companion_rules:'primal-companion',companion:beast});assert.deepEqual(L.transition(ranger,p,context(ranger)).errors,[],beast);}
});
test('known spells, invocations, infusions and artificer cantrips allow exactly one legal replacement',()=>{
 let warlock=create('warlock');warlock=advance(warlock,null,{invocations:['armor-of-shadows','fiendish-vigor']});
 const p=fill(warlock,L.begin(warlock,context(warlock)),{pact:'tome',invocation_remove:'armor-of-shadows',invocation_add:'book-of-ancient-secrets'});assert.equal(p.choices.tome_cantrips.length,3);assert.equal(p.choices.book_rituals.length,2);const w3=L.commit(warlock,p,context(warlock));assert.ok(extras(w3).spells.filter(s=>s.status==='ritual').length>=2);assert.deepEqual(L.inspect(w3,context(w3)).state.invocations,['fiendish-vigor','book-of-ancient-secrets']);
 const wrong=copy(p);wrong.choices.pact='blade';assert.ok(L.transition(warlock,wrong,context(warlock)).errors.length);
 const levelLocked=copy(p);levelLocked.choices.invocation_add='thirsting-blade';assert.ok(L.transition(warlock,levelLocked,context(warlock)).errors.some(e=>e.field==='invocation_add'));
 let artificer=create('artificer');const old=copy(artificer.creation_cantrips),ap=L.begin(artificer,context(artificer));fill(artificer,ap,{cantrip_remove:old[0]});const replacement=ap.choices.cantrip_add;artificer=L.commit(artificer,ap,context(artificer));assert.deepEqual(artificer.creation_cantrips,old);assert.ok(L.inspect(artificer,context(artificer)).state.cantrips.includes(replacement));
 const a3=fill(artificer,L.begin(artificer,context(artificer)),{subclass:'alchemist',infusion_remove:L.inspect(artificer,context(artificer)).state.infusions[0]});assert.ok(a3.choices.infusion_add);assert.equal(L.inspect(L.commit(artificer,a3,context(artificer)),context(artificer)).state.infusions.length,4);
 const forged=copy(a3);forged.choices.cantrip_remove=L.inspect(artificer,context(artificer)).state.cantrips[0];forged.choices.cantrip_add='eldritch-blast';assert.ok(L.transition(artificer,forged,context(artificer)).errors.length);
});
test('third casters enforce restricted schools and quotas; bonus-origin replacements enforce degree and class',()=>{
 for(const [cls,branch]of [['fighter','eldritch-knight'],['rogue','arcane-trickster']]){const c=advance(create(cls));const p=fill(c,L.begin(c,context(c)),{subclass:branch});assert.equal(p.choices.third_restricted.length,2);const bad=copy(p);bad.choices.third_restricted=['find-familiar','detect-magic'];assert.ok(L.transition(c,bad,context(c)).errors.some(e=>e.field==='third_restricted'));const dup=copy(p);dup.choices.third_free=dup.choices.third_restricted[0];assert.ok(L.transition(c,dup,context(c)).errors.length);if(cls==='rogue')assert.ok(extras(L.commit(c,p,context(c))).spells.some(s=>s.id==='mage-hand'));}
 for(const origin of ['aberrant-mind','clockwork-soul']){const c=advance(create('sorcerer',origin));const p=L.begin(c,context(c));fill(c,p);const allowed=L.getChoices(c,p,context(c)).find(g=>g.id==='bonus_remove').options.filter(x=>x.value!=='none');p.choices.bonus_remove=allowed[0].value;fill(c,p,{bonus_remove:p.choices.bonus_remove});assert.deepEqual(L.transition(c,p,context(c)).errors,[]);const bad=copy(p);bad.choices.bonus_add='cure-wounds';assert.ok(L.transition(c,bad,context(c)).errors.some(e=>e.field==='bonus_add'));}
});


test('styles, initiative and social check bonuses apply once and spell/style replacements stay bounded',()=>{
 let pal=create('paladin');pal.creation_worn_armor='chain-mail';const ac=stats(pal).ac;pal=advance(pal,null,{style:'defense'});assert.equal(stats(pal).ac,ac+1);pal=advance(pal,'devotion');assert.equal(stats(pal).ac,ac+1);
 let ranger=create('ranger');const bow=extras(ranger).attacks.find(a=>a.properties.includes('ranged'));assert.ok(bow);ranger=advance(ranger,null,{style:'archery'});assert.equal(extras(ranger).attacks.find(a=>a.id===bow.id).attackBonus,bow.attackBonus+2);
 ranger=advance(ranger,'gloom-stalker');assert.equal(stats(ranger).initiative,stats(create('ranger')).initiative+3);assert.equal(stats(ranger).darkvision,60);
 let fey=advance(advance(create('ranger')),'fey-wanderer');const before=stats(create('ranger'));assert.equal(stats(fey).skills.deception,8);assert.equal(stats(fey).skills.performance,before.skills.performance+3);
 let warrior=advance(create('paladin'),null,{style:'blessed-warrior'});const old=L.inspect(warrior,context(warrior)).state.choices.style_cantrips;let p=fill(warrior,L.begin(warrior,context(warrior)),{subclass:'devotion',style_cantrip_remove:old[0]});assert.ok(p.choices.style_cantrip_add);warrior=L.commit(warrior,p,context(warrior));assert.equal(extras(warrior).spells.filter(s=>s.level===0).length,2);
 let divine=advance(create('sorcerer','divine-soul'));let dp=fill(divine,L.begin(divine,context(divine)),{spell_remove:'cure-wounds'});assert.deepEqual(L.transition(divine,dp,context(divine)).errors,[]);let bad=copy(dp);bad.choices.spell_add='magic-missile';assert.ok(L.transition(divine,bad,context(divine)).errors.length);
 assert.equal(D.audit.unmatchedOfficialLowSpells.length,0);assert.equal(Object.keys(D.spells).length,213);for(const spell of Object.values(D.spells)){assert.match(spell.label,/[А-Яа-яЁё]/);assert.ok(spell.url.startsWith('https://5e14.dnd.su/spells/'));}
});

test('selected metamagic, runes, infusions and disciplines retain usable summaries on sheet and export',()=>{
 const fixtures=[
  [advance(advance(create('sorcerer')),'draconic',{metamagic:['quickened-spell','subtle-spell']}),'Метамагия',['2 единицы','материальные сохраняются']],
  [advance(advance(create('fighter')),'rune-knight',{runes:['fire-rune','frost-rune']}),'Руны',['2к6 огня','10 минут']],
  [advance(create('artificer'),undefined,{infusions:['enhanced-defense','enhanced-weapon','mind-sharpener','armor-of-magical-strength']}),'Инфузии',['+1 КД','1к4 зарядов']],
  [advance(advance(create('monk')),'four-elements',{discipline:'water-whip'}),'Стихийная дисциплина',['3к10','25 футов']]
 ];
 for(const [c,name,phrases] of fixtures){const e=extras(c),text=e.features.filter(f=>f.name===name).map(f=>f.description).join(' '),native=E.buildLssExport(c,{},stats(c),e)[0].data;for(const phrase of phrases){assert.ok(text.includes(phrase),name+': '+phrase);assert.ok(native.includes(phrase),name+': export '+phrase);}}
});

test('multiclass HP bonuses follow total levels or their own class, and first defense stays exclusive',()=>{
 const enter=(c,id)=>L.commit(c,fill(c,L.selectClass(c,L.begin(c,context(c)),id,context(c))),context(c));
 let sorc=create('sorcerer','draconic'),p=fill(sorc,L.selectClass(sorc,L.begin(sorc,context(sorc)),'fighter',context(sorc)));assert.equal(L.hpGain(sorc,p,context(sorc)).gain,9);let multi=L.commit(sorc,p,context(sorc));assert.equal(stats(multi).hp,stats(sorc).hp+9);
 multi=enter(multi,'sorcerer');assert.equal(stats(multi).hp,stats(sorc).hp+9+8);
 const tough={...create('fighter'),human_feature:'human_alt',abilityBonusChoices:{slot_0:'strength',slot_1:'wisdom'},creation_feat:'tough'};assert.equal(stats(enter(tough,'wizard')).hp-stats(tough).hp,4+3+2);let dwarf={...create('fighter'),race:'dwarf',race_sub:'hill-dwarf'};assert.equal(stats(enter(dwarf,'wizard')).hp-stats(dwarf).hp,4+4+1);
 const bar={...create('barbarian'),creation_worn_armor:'none',creation_shield:'off'};bar.abilities.wisdom=20;bar.abilities.constitution=14;const bm=enter(bar,'monk');assert.equal(extras(bm).unarmoredDefense,'barbarian');assert.equal(stats(bm).ac,10+stats(bm).modifiers.dexterity+stats(bm).modifiers.constitution);
 const monk={...create('monk'),creation_worn_armor:'none'};monk.abilities.constitution=20;monk.abilities.wisdom=14;const mb=enter(monk,'barbarian');assert.equal(extras(mb).unarmoredDefense,'monk');assert.equal(stats(mb).ac,10+stats(mb).modifiers.dexterity+stats(mb).modifiers.wisdom);
});
test('secondary monk improves eligible attacks without armor and multiple subclasses retain their labels',()=>{
 const c={...create('wizard'),creation_worn_armor:'none'};c.abilities.strength=12;c.abilities.dexterity=16;
 const p=fill(c,L.selectClass(c,L.begin(c,context(c)),'monk',context(c))),next=L.commit(c,p,context(c)),unarmed=extras(next).attacks.find(x=>x.id==='unarmed');assert.equal(unarmed.ability,'dexterity');assert.match(unarmed.damage,/^1d4\+3$/);assert.equal(unarmed.attackBonus,5);
 const cleric=create('cleric','life'),spells=extras(cleric).spells;assert.equal(spells.filter(x=>x.id==='bless').length,1);assert.equal(spells.filter(x=>x.id==='cure-wounds').length,1);
 const cp=fill(cleric,L.selectClass(cleric,L.begin(cleric,context(cleric)),'sorcerer',context(cleric)),{'sorcerer:creation_origin':'draconic'}),cm=L.commit(cleric,cp,context(cleric));assert.deepEqual(extras(cm).subclasses.map(x=>x.classId),['cleric','sorcerer']);
 for(const option of L.classOptions(cleric,context(cleric)))assert.ok(!/strength|dexterity|intelligence|charisma|wisdom/.test(option.requirements));
});

test('minimum HP gain and class-specific proficiency grants reject illegal extra choices',()=>{
 const enter=(c,id,pinned={})=>L.commit(c,fill(c,L.selectClass(c,L.begin(c,context(c)),id,context(c)),pinned),context(c));
 const frail=create('wizard');frail.abilities.constitution=1;const p=fill(frail,L.selectClass(frail,L.begin(frail,context(frail)),'fighter',context(frail)));p.hp={mode:'roll',value:1};assert.equal(L.hpGain(frail,p,context(frail)).gain,1);assert.equal(stats(L.commit(frail,p,context(frail))).hp-stats(frail).hp,1);
 const wizard=create('wizard'),before=stats(wizard).proficiencies,rogue=enter(wizard,'rogue'),after=stats(rogue).proficiencies;assert.equal(after.skills.length,before.skills.length+1);assert.equal(after.expertise.length,2);assert.ok(after.tools.includes('thieves_tools'));assert.deepEqual(after.savingThrows,before.savingThrows);
 const forged=fill(wizard,L.selectClass(wizard,L.begin(wizard,context(wizard)),'rogue',context(wizard)));forged.choices['rogue:entry_skill']='arcana';assert.ok(L.transition(wizard,forged,context(wizard)).errors.length);
 const fighter=create('fighter');fighter.creation_style='defense';const paladin=enter(fighter,'paladin'),p3=fill(paladin,L.selectClass(paladin,L.begin(paladin,context(paladin)),'paladin',context(paladin)));assert.ok(!L.getChoices(paladin,p3,context(paladin)).find(x=>x.id==='style').options.some(x=>x.value==='defense'));
});


test('forged multiclass prototype IDs are rejected without deriving benefits or crashing',()=>{
 const c=create('wizard'),baseline=stats(c).hp;
 for(const id of ['constructor','__proto__','toString']){const p=L.begin(c,context(c));p.classId=id;p.hp={mode:'roll',value:1};assert.deepEqual(L.getChoices(c,p,context(c)),[]);assert.ok(L.transition(c,p,context(c)).errors.some(x=>x.field==='classId'));const forged={...c,level:2,advancement:{version:2,entries:[p]}};assert.ok(L.inspect(forged,context(forged)).errors.length);assert.equal(stats(forged).hp,baseline);}
});

test('secondary bard Jack of All Trades does not stack with Harengon initiative proficiency',()=>{
 const enter=(c,id)=>L.commit(c,fill(c,L.selectClass(c,L.begin(c,context(c)),id,context(c))),context(c));
 const c={...create('wizard'),race:'harengon',human_feature:null},second=enter(c,'bard'),third=enter(second,'bard');
 assert.equal(stats(third).initiative,stats(second).initiative);assert.equal(extras(third).jackOfAllTrades,true);
});
test('secondary monk applies Martial Arts dexterity to Tabaxi natural unarmed attacks',()=>{
 const c={...create('wizard'),race:'tabaxi',human_feature:null,creation_worn_armor:'none',creation_shield:'off'};c.abilities.strength=12;c.abilities.dexterity=18;
 const p=fill(c,L.selectClass(c,L.begin(c,context(c)),'monk',context(c))),next=L.commit(c,p,context(c)),attack=extras(next).attacks.find(x=>x.group==='natural'),dex=stats(next).modifiers.dexterity;
 assert.ok(attack);assert.equal(attack.ability,'dexterity');assert.equal(attack.attackBonus,2+dex);assert.equal(attack.damageBonus,dex);assert.equal(attack.damage,'1d4+'+dex);
});
test('new ranger Canny can choose the skill gained in the same advancement',()=>{
 const c=create('wizard'),p=fill(c,L.selectClass(c,L.begin(c,context(c)),'ranger',context(c)),{'ranger:entry_skill':'survival','ranger:creation_explorer_feature':'deft-explorer','ranger:creation_canny_skill':'survival'});
 const g=L.getChoices(c,p,context(c)).find(x=>x.id==='ranger:creation_canny_skill');assert.ok(g.options.some(x=>x.value==='survival'));
 assert.deepEqual(L.transition(c,p,context(c)).errors,[]);const next=L.commit(c,p,context(c));assert.ok(stats(next).proficiencies.skills.includes('survival'));assert.ok(stats(next).proficiencies.expertise.includes('survival'));
});

test('first-level class resources exist before level 2, including a newly entered class',()=>{
 const expected={barbarian:[['rage',2,'long-rest']],bard:[['bardic-inspiration',3,'long-rest']],fighter:[['second-wind',1,'short-rest']],paladin:[['divine-sense',4,'long-rest'],['lay-on-hands',5,'long-rest']]};
 for(const [cls,resources] of Object.entries(expected)){
  const c=create(cls),e=extras(c);
  for(const [id,max,rest] of resources){const r=e.resources.find(x=>x.id===id);assert.ok(r,cls+':'+id);assert.equal(r.max,max,cls+':'+id);assert.equal(r.rest,rest,cls+':'+id);}
  assert.ok(JSON.parse(E.buildLssExport(c,{},stats(c),e)[0].data).text.traits.value.data.content.some(p=>p.content?.[0]?.text.startsWith(e.resources[0].name+': '+e.resources[0].max)),cls);
 }
 const paladin=create('paladin');paladin.abilities.charisma=6;assert.equal(extras(paladin).resources.find(x=>x.id==='divine-sense')?.max,0);
 const multi=enter(create('wizard'),'barbarian'),rage=extras(multi).resources.find(x=>x.id==='barbarian:rage');assert.ok(rage);assert.equal(rage.max,2);
 const three=advance(advance(create('barbarian')),'berserker');assert.equal(extras(three).resources.filter(x=>x.id==='rage').length,1);assert.equal(extras(three).resources.find(x=>x.id==='rage').max,3);
});

test('automatic subclass proficiencies already owned do not open a free replacement',()=>{
 const c=advance(create('rogue',undefined,{background:'outlander'})),before=stats(c).proficiencies.skills;assert.ok(before.includes('survival'));
 const p=fill(c,L.begin(c,context(c)),{subclass:'scout'});
 assert.ok(!L.getChoices(c,p,context(c)).some(g=>g.id.startsWith('proficiency:')),'no replacement slot');
 assert.deepEqual(L.transition(c,p,context(c)).errors,[]);
 const scout=L.commit(c,p,context(c)),after=stats(scout).proficiencies;
 assert.deepEqual(after.skills.slice().sort(),[...new Set([...before,'nature','survival'])].sort());
 assert.ok(after.expertise.includes('nature')&&after.expertise.includes('survival'));
 assert.deepEqual(R.resolveProficiencies(scout,extras(scout)).errors,[]);
});

test('Improved Minor Illusion offers another wizard cantrip when Minor Illusion is known from any source',()=>{
 const gnome={race:'gnome',race_sub:'forest-gnome',human_feature:undefined};
 const wizard=create('wizard',undefined,gnome);assert.ok(extras(wizard).spells.some(x=>x.id==='minor-illusion'));
 const p=fill(wizard,L.begin(wizard,context(wizard)),{subclass:'illusion'}),g=L.getChoices(wizard,p,context(wizard)).find(x=>x.id==='illusion_cantrip');
 assert.ok(g.options.length>1);assert.ok(!g.options.some(x=>x.value==='minor-illusion'));
 assert.deepEqual(L.transition(wizard,p,context(wizard)).errors,[]);assert.notEqual(L.commit(wizard,p,context(wizard)).level,1);
 const multi=enter(create('fighter',undefined,gnome),'wizard'),mp=fill(multi,L.selectClass(multi,L.begin(multi,context(multi)),'wizard',context(multi)),{'subclass':'illusion'});
 const mg=L.getChoices(multi,mp,context(multi)).find(x=>x.id==='illusion_cantrip');assert.ok(mg);assert.ok(!mg.options.some(x=>x.value==='minor-illusion'));
 assert.deepEqual(L.transition(multi,mp,context(multi)).errors,[]);const done=L.commit(multi,mp,context(multi));assert.deepEqual(L.inspect(done,context(done)).errors,[]);
 const human=create('wizard'),hp=fill(human,L.begin(human,context(human)),{subclass:'illusion'});assert.deepEqual(L.getChoices(human,hp,context(human)).find(x=>x.id==='illusion_cantrip').options.map(x=>x.value),['minor-illusion']);
});

test('a ranger opts into TCE expanded spells when spellcasting starts and keeps the choice later',()=>{
 const ranger=create('ranger'),probe=fill(ranger,L.begin(ranger,context(ranger)));
 const optIn=L.getChoices(ranger,probe,context(ranger)).find(g=>g.id==='expanded_spells');assert.ok(optIn);assert.deepEqual(optIn.options.map(x=>x.value),['no','yes']);
 const learn=choice=>L.getChoices(ranger,fill(ranger,L.begin(ranger,context(ranger)),{expanded_spells:choice}),context(ranger)).find(g=>g.id==='learn').options.map(x=>x.value);
 for(const id of ['entangle','searing-smite']){assert.ok(learn('yes').includes(id),id);assert.ok(!learn('no').includes(id),id);}
 const two=L.commit(ranger,fill(ranger,L.begin(ranger,context(ranger)),{expanded_spells:'yes',learn:['entangle','searing-smite']}),context(ranger));
 assert.ok(extras(two).spells.some(x=>x.id==='entangle'));
 const p3=fill(two,L.begin(two,context(two)),{subclass:'hunter'});assert.ok(!L.getChoices(two,p3,context(two)).some(g=>g.id==='expanded_spells'));
 assert.ok(L.getChoices(two,p3,context(two)).find(g=>g.id==='learn').options.length>0);
 assert.deepEqual(L.inspect(L.commit(two,p3,context(two)),context(two)).errors,[]);
 const paladin=create('paladin'),pp=fill(paladin,L.begin(paladin,context(paladin)));assert.ok(!L.getChoices(paladin,pp,context(paladin)).some(g=>g.id==='expanded_spells'));
 const fromWizard=enter(create('wizard'),'ranger'),rp=fill(fromWizard,L.selectClass(fromWizard,L.begin(fromWizard,context(fromWizard)),'ranger',context(fromWizard)),{expanded_spells:'yes'});
 assert.ok(L.getChoices(fromWizard,rp,context(fromWizard)).find(g=>g.id==='learn').options.some(x=>x.value==='entangle'));
});

test('LSS subclass field lists every acquired subclass with its class',()=>{
 const cleric=create('cleric','life'),cs=enter(cleric,'sorcerer',{'sorcerer:creation_origin':'draconic'}),e=extras(cs);
 const native=JSON.parse(E.buildLssExport(cs,{subclass:e.subclass.label},stats(cs),e)[0].data);
 assert.equal(native.info.charSubclass.value,'Жрец: Жизнь / Чародей: Драконья кровь');
 const fighter=enter(create('fighter'),'warlock',{'warlock:creation_patron':'fiend'}),fe=extras(fighter);
 assert.equal(JSON.parse(E.buildLssExport(fighter,{},stats(fighter),fe)[0].data).info.charSubclass.value,'Колдун: Исчадие');
 const single=advance(advance(create('fighter')),'champion'),se=extras(single);
 assert.equal(JSON.parse(E.buildLssExport(single,{subclass:se.subclass.label},stats(single),se)[0].data).info.charSubclass.value,'Чемпион');
});

test('warlock invocations accept prerequisite cantrips known from any source',()=>{
 const feat={human_feature:'human_alt',creation_feat:'magic-initiate',creation_feat_class:'warlock',creation_feat_cantrips:['eldritch-blast','minor-illusion'],creation_cantrips:['chill-touch','mage-hand']};
 const offered=c=>L.getChoices(c,fill(c,L.begin(c,context(c))),context(c)).find(g=>g.id==='invocations').options.map(o=>o.value);
 const initiate=create('warlock','fiend',feat);assert.ok(!initiate.creation_cantrips.includes('eldritch-blast'));
 assert.ok(offered(initiate).includes('agonizing-blast'));
 assert.ok(!offered(create('warlock','fiend',{creation_cantrips:['chill-touch','mage-hand']})).includes('agonizing-blast'));
 const p=fill(initiate,L.begin(initiate,context(initiate)),{invocations:['agonizing-blast','armor-of-shadows']});
 assert.deepEqual(L.transition(initiate,p,context(initiate)).errors,[]);
 const done=L.commit(initiate,p,context(initiate));assert.deepEqual(L.inspect(done,context(done)).errors,[]);
});

test('subclass skill features use their lists and replace Arcane Archer Lore when both skills are known',()=>{
 const monk=advance(advance(create('monk')),'ascendant-dragon'),before=stats(advance(create('monk'))).proficiencies.skills;
 assert.ok(!Object.hasOwn(monk.advancement.entries[1].choices,'dragon_proficiency'));
 assert.deepEqual(stats(monk).proficiencies.skills.slice().sort(),before.slice().sort());
 const me=extras(monk);assert.ok(me.features.some(f=>f.name==='Драконий ученик'));assert.ok(me.resources.some(r=>r.id==='draconic-presence'));
 const fighter=create('fighter',undefined,{human_feature:'human_alt',proficiencyChoices:{'human-alt:0:0':'nature'}});
 assert.ok(['arcana','nature'].every(id=>stats(fighter).proficiencies.skills.includes(id)));
 const two=advance(fighter),p=fill(two,L.begin(two,context(two)),{subclass:'arcane-archer'});
 const options=L.getChoices(two,p,context(two)).find(g=>g.id==='archer_skill').options.map(o=>o.value);
 assert.ok(options.includes('athletics'));assert.ok(!options.includes('arcana'));assert.ok(!options.includes('nature'));
 p.choices.archer_skill='athletics';assert.deepEqual(L.transition(two,p,context(two)).errors,[]);
 const archer=L.commit(two,p,context(two));assert.ok(stats(archer).proficiencies.skills.includes('athletics'));
 assert.equal(stats(archer).proficiencies.skills.length,stats(two).proficiencies.skills.length+1);
 assert.deepEqual(R.resolveProficiencies(archer,extras(archer)).errors,[]);
});

test('Kensei, Four Elements and Primal Companion follow their published features',()=>{
 const monk=advance(create('monk'));
 const kensei=L.getChoices(monk,fill(monk,L.begin(monk,context(monk)),{subclass:'kensei'}),context(monk)).find(g=>g.id==='kensei_melee').options.map(o=>o.value);
 assert.ok(!kensei.includes('lance'));assert.ok(kensei.includes('longsword'));
 const elements=extras(advance(monk,'four-elements'));
 assert.ok(elements.features.some(f=>f.name===L.label('elemental-attunement')));
 const ranger=advance(create('ranger'));
 const primal=extras(advance(ranger,'beast-master',{companion_rules:'primal-companion',companion:'beast-of-land'}));
 assert.ok(!primal.features.some(f=>f.name==='Спутник следопыта'));
 const companion=primal.features.find(f=>f.name==='Первобытный спутник');assert.ok(companion);assert.match(companion.description,/КД 15, хиты 20 \(3к8\)/);
 const phb=extras(advance(ranger,'beast-master',{companion_rules:'phb-beast'}));
 assert.ok(phb.features.some(f=>f.name==='Спутник следопыта'));assert.ok(!phb.features.some(f=>f.name==='Первобытный спутник'));
});

test('Deft Explorer keeps its own Canny languages selectable after derivation',()=>{
 const ranger=create('ranger',undefined,{creation_explorer_feature:'deft-explorer',creation_canny_languages:['celestial','infernal']});
 assert.deepEqual(ranger.creation_canny_languages,['celestial','infernal']);assert.deepEqual(O.validate(ranger,context(ranger)),[]);
 const g=O.getChoices(ranger,context(ranger)).find(x=>x.id==='creation_canny_languages');
 assert.ok(['celestial','infernal'].every(id=>g.options.some(o=>o.value===id)));
 assert.ok(!g.options.some(o=>o.value==='common'));
});

test('class resources follow published counts and pools',()=>{
 const paladin=create('paladin',undefined,{abilities:{strength:16,dexterity:10,constitution:14,intelligence:10,wisdom:12,charisma:8}});
 assert.equal(stats(paladin).modifiers.charisma,-1);assert.equal(extras(paladin).resources.find(r=>r.id==='divine-sense')?.max,0);
 const soulknife=extras(advance(advance(create('rogue')),'soulknife'));assert.equal(soulknife.resources.find(r=>r.id==='psionic-dice')?.max,4);
 const wildfire=extras(advance(create('druid'),'wildfire'));assert.ok(wildfire.resources.some(r=>r.id==='wild-shape'));assert.ok(!wildfire.resources.some(r=>r.id==='wildfire-spirit'));
});

test('Whispers of the Dead stays a rest-time choice outside the ledger',()=>{
 const two=advance(create('rogue')),p=fill(two,L.begin(two,context(two)),{subclass:'phantom'});
 assert.ok(!L.getChoices(two,p,context(two)).some(g=>g.id==='phantom_proficiency'));
 const phantom=L.commit(two,p,context(two));assert.deepEqual(L.inspect(phantom,context(phantom)).errors,[]);
 assert.deepEqual(stats(phantom).proficiencies.skills.slice().sort(),stats(two).proficiencies.skills.slice().sort());
 assert.ok(extras(phantom).features.some(f=>f.name==='Шёпот мёртвых'));
});

test('Hex Warrior adds a Charisma line for eligible weapons',()=>{
 const hexblade=create('warlock','hexblade',{abilities:{strength:10,dexterity:14,constitution:14,intelligence:10,wisdom:12,charisma:16}}),e=extras(hexblade),m=stats(hexblade).modifiers;
 const dagger=e.attacks.find(x=>x.id==='dagger'),hex=e.attacks.find(x=>x.id==='dagger-hex');
 assert.ok(dagger&&hex);assert.equal(hex.ability,'charisma');assert.equal(hex.attackBonus,2+m.charisma);assert.equal(hex.damageBonus,m.charisma);
 assert.ok(!e.attacks.some(x=>x.hexWarrior&&x.properties.includes('two-handed')));
 const native=JSON.parse(E.buildLssExport(hexblade,{},stats(hexblade),e)[0].data);assert.ok(native.weaponsList.some(w=>w.ability==='cha'));
 const strong=create('warlock','hexblade',{abilities:{strength:16,dexterity:14,constitution:14,intelligence:10,wisdom:12,charisma:10}}),strongExtras=extras(strong);
 const weakHex=strongExtras.attacks.find(x=>x.id==='dagger-hex');assert.ok(weakHex);assert.equal(weakHex.attackBonus,2);assert.equal(weakHex.damageBonus,0);
 assert.ok(strongExtras.attacks.some(x=>x.id==='dagger'&&!x.hexWarrior));
});

test('manual feature summaries replace catalogue duplicates',()=>{
 for(const c of [advance(create('bard')),advance(create('paladin')),advance(create('artificer'))]){
  const names=extras(c).features.map(f=>f.name);assert.equal(names.length,new Set(names).size,c.class+': '+names.filter((n,i)=>names.indexOf(n)!==i).join(', '));
 }
 assert.match(extras(advance(create('artificer'))).features.find(f=>f.name==='Инфузии').description,/до 2 предметов/);
});

test('level-three racial spells use stored gith and yuan-ti IDs',()=>{
 const level3=race=>advance(advance(create('fighter',undefined,{human_feature:undefined,...race})),'champion');
 const spells=c=>extras(c).spells.filter(x=>x.status==='racial'&&x.source==='Раса');
 const zerai=spells(level3({race:'gith',race_sub:'gitzerai'}));assert.ok(zerai.some(x=>x.id==='shield'&&x.ability==='wisdom'));assert.ok(!zerai.some(x=>x.id==='jump'));
 assert.ok(spells(level3({race:'gith',race_sub:'githyanki'})).some(x=>x.id==='jump'&&x.ability==='intelligence'));
 assert.ok(spells(level3({race:'yuan-ti-pureblood'})).some(x=>x.id==='suggestion'&&x.ability==='charisma'));
});
test('cleric creation preparation excludes automatic domain spells of every domain',()=>{
 for(const domain of ['grave','arcana','order','peace','forge','twilight','life']){
  const cleric=create('cleric',domain),auto=L.automaticSpells(cleric).filter(id=>id!=='spare-the-dying');
  const options=O.getChoices(cleric,context(cleric)).find(g=>g.id==='creation_prepared').options.map(o=>o.value);
  for(const id of auto)assert.ok(!options.includes(id),domain+': '+id);
  const prepared=extras(cleric).spells.filter(x=>x.status==='prepared'&&!x.limitExempt);assert.equal(prepared.length,[].concat(cleric.creation_prepared).length,domain);
 }
});
test('wizard feature labels resolve in a fresh process before any derive',()=>{
 const root=require('node:path').join(__dirname,'..');
 const script="const assert=require('node:assert/strict');const L=require('./levelup-rules');assert.equal(L.label('portent'),'Предзнаменование');assert.equal(L.label('bladesong'),'Песнь клинка');";
 require('node:child_process').execFileSync(process.execPath,['-e',script],{cwd:root,stdio:'pipe'});
});
test('multiclass prerequisites use final scores; non-numeric stored ability blocks multiclass in options, selectClass and transition',()=>{
 const c=create('wizard');
 // human_stats adds +1 to every ability: base 11 is final 12, so only the base 12 intelligence reaches the 13 threshold.
 for(const ab of R.ABILITIES)c.abilities[ab]=11;c.abilities.intelligence=12;
 const ctx=context(c),byId=Object.fromEntries(L.classOptions(c,ctx).map(x=>[x.value,x]));
 assert.equal(byId.artificer.eligible,true);
 assert.equal(byId.fighter.eligible,false);assert.deepEqual(byId.fighter.unmet,['Воин: Сила или Ловкость ≥ 13']);
 assert.equal(byId.monk.eligible,false);assert.deepEqual(byId.monk.unmet,['Монах: Ловкость ≥ 13','Монах: Мудрость ≥ 13']);
 for(const target of Object.keys(R.CLASSES)){
  if(target==='wizard')continue;
  const eligible=byId[target].eligible,p=L.begin(c,ctx);p.classId=target;p.hp.value=R.CLASSES[target].hitDie/2+1;
  assert.equal(L.transition(c,p,ctx).errors.some(x=>x.field==='classId'),!eligible,target);
  if(eligible)assert.deepEqual(L.transition(c,fill(c,L.selectClass(c,L.begin(c,ctx),target,ctx)),ctx).errors,[],target);
  else assert.throws(()=>L.selectClass(c,L.begin(c,ctx),target,ctx),/требования/,target);
 }
 // A non-numeric stored score makes finalAbilities return null, so every new class also lists the wizard's own prerequisite.
 c.abilities.intelligence='13';
 const stringCtx=context(c),stringOptions=L.classOptions(c,stringCtx);
 for(const target of Object.keys(R.CLASSES)){
  if(target==='wizard')continue;
  const option=stringOptions.find(x=>x.value===target),p=L.begin(c,stringCtx);p.classId=target;p.hp.value=R.CLASSES[target].hitDie/2+1;
  assert.equal(option.eligible,false,target);assert.ok(option.unmet.includes('Волшебник: Интеллект ≥ 13'),target);
  assert.ok(L.transition(c,p,stringCtx).errors.some(x=>x.field==='classId'),target);
  assert.throws(()=>L.selectClass(c,L.begin(c,stringCtx),target,stringCtx),/требования/,target);
 }
});
test('Arcane Trickster knows Mage Hand once plus two chosen cantrips, also with a racial Mage Hand',()=>{
 for(const overrides of [undefined,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'mage-hand'}]){
  let c=advance(create('rogue',null,overrides));const ctx=context(c),p=fill(c,L.begin(c,ctx),{subclass:'arcane-trickster'});
  assert.equal(p.choices.third_cantrips.length,2);assert.ok(!p.choices.third_cantrips.includes('mage-hand'));
  c=L.commit(c,p,ctx);const spells=extras(c).spells.filter(x=>x.level===0&&x.status==='cantrip');
  const trickster=spells.filter(x=>x.source==='Плут'||x.source==='Мистический ловкач');
  assert.equal(trickster.filter(x=>x.id==='mage-hand').length,1);assert.equal(trickster.length,3);
  assert.equal(extras(c).spells.filter(x=>x.id==='mage-hand'&&x.status==='racial').length,overrides?1:0);
  assert.equal(new Set(extras(c).spellcasting.cantrips).size,extras(c).spellcasting.cantrips.length);
  assert.ok(extras(c).spellcasting.cantrips.includes('mage-hand'));
  assert.deepEqual(L.inspect(c,context(c)).errors,[]);
 }
});
test('Eldritch Knight and Arcane Trickster cantrip options exclude cantrips known from other sources',()=>{
 let f=advance(create('fighter',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'}));
 let ctx=context(f),p=L.begin(f,ctx);p.choices.subclass='eldritch-knight';
 const options=L.getChoices(f,p,ctx).find(g=>g.id==='third_cantrips').options.map(o=>o.value);
 assert.ok(options.length>2);assert.ok(!options.includes('fire-bolt'));assert.ok(options.includes('acid-splash'));
 fill(f,p,{subclass:'eldritch-knight'});f=L.commit(f,p,ctx);
 assert.deepEqual(L.inspect(f,context(f)).errors,[]);assert.ok(extras(f).spells.some(x=>x.id==='fire-bolt'&&x.source==='Раса'));
 let r=advance(create('rogue',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'}));
 ctx=context(r);p=L.begin(r,ctx);p.choices.subclass='arcane-trickster';
 const rogue=L.getChoices(r,p,ctx).find(g=>g.id==='third_cantrips').options.map(o=>o.value);
 assert.ok(!rogue.includes('fire-bolt')&&!rogue.includes('mage-hand'));
});
test('DM-permission confirmation is asked once, at the step that selects a restricted subclass',()=>{
 const ids=(c,p)=>L.getChoices(c,p,context(c)).map(g=>g.id);
 // Level-1 subclass: the question belongs to creation and is not repeated on levels 2 and 3.
 let death=create('cleric','death');
 assert.equal(death.creation_campaign_permission,'yes');
 const permission=O.getChoices(death,context(death)).find(g=>g.id==='creation_campaign_permission');assert.ok(permission&&permission.description&&permission.description===L.subclass(death).restrictions);
 assert.ok(permission&&!permission.optional&&permission.count===1);assert.deepEqual(permission.options.map(o=>o.value),['yes']);
 assert.ok(!O.getChoices(create('cleric','life'),context(create('cleric','life'))).some(g=>g.id==='creation_campaign_permission'));
 for(const level of [2,3]){const p=L.begin(death,context(death));assert.equal(p.to,level);assert.ok(!ids(death,p).includes('campaign_permission'),'death L'+level);death=advance(death);}
 // Required at creation, but the tick is not a foundation field, so ticking it never resets advancement.
 const missing=copy(death);delete missing.creation_campaign_permission;
 assert.ok(O.validate(missing,context(missing)).some(e=>e.field==='creation_campaign_permission'));
 assert.equal(L.foundation(missing),L.foundation(death));assert.deepEqual(L.inspect(missing,context(missing)).errors,[]);
 // Level-3 subclass: the question appears at that level only, and the transition needs it.
 let paladin=advance(create('paladin'));
 let p=L.begin(paladin,context(paladin));assert.equal(p.to,3);assert.ok(!ids(paladin,p).includes('campaign_permission'));
 p.choices.subclass='oathbreaker';assert.ok(ids(paladin,p).includes('campaign_permission'));assert.equal(L.getChoices(paladin,p,context(paladin)).find(g=>g.id==='campaign_permission').description,L.subclasses('paladin').find(x=>x.id==='oathbreaker').restrictions);
 const withoutIt=fill(paladin,L.begin(paladin,context(paladin)),{subclass:'oathbreaker'});delete withoutIt.choices.campaign_permission;
 assert.ok(L.transition(paladin,withoutIt,context(paladin)).errors.some(e=>e.field==='campaign_permission'));
 paladin=advance(paladin,'oathbreaker');assert.equal(paladin.advancement.entries[1].choices.campaign_permission,'yes');
 for(const [cls,sub] of [['barbarian','battlerager'],['fighter','echo-knight'],['wizard','chronurgy']]){
  let c=create(cls);const first=L.subclasses(cls)[0].level;while(L.begin(c,context(c)).to<first)c=advance(c);
  const q=L.begin(c,context(c));q.choices.subclass=sub;assert.ok(ids(c,q).includes('campaign_permission'),sub);
 }
});
test('legacy ledgers that repeated campaign_permission on every level still replay',()=>{
 let death=advance(advance(create('cleric','death')));
 const legacy=copy(death);delete legacy.creation_campaign_permission;
 for(const entry of legacy.advancement.entries)entry.choices.campaign_permission='yes';
 const result=L.inspect(legacy,context(legacy));assert.deepEqual(result.errors,[]);assert.equal(result.state.level,3);
 assert.equal(L.upgradeLegacyFoundation(legacy,context(legacy)),legacy);
 // For an unrestricted subclass the stale answer is no longer a group: replay ignores it (warning, nothing applied) but a new entry is still rejected.
 const plain=advance(advance(create('cleric','life')));plain.advancement.entries[0].choices.campaign_permission='yes';
 const plainResult=L.inspect(plain,context(plain));assert.deepEqual(plainResult.errors,[]);assert.equal(plainResult.state.level,3);assert.ok(plainResult.warnings.some(w=>w.field==='campaign_permission'));assert.equal(plainResult.state.choices.campaign_permission,undefined);
 const plainFresh=advance(create('cleric','life')),plainDraft=fill(plainFresh,L.begin(plainFresh,context(plainFresh)));plainDraft.choices.campaign_permission='yes';
 assert.ok(L.transition(plainFresh,plainDraft,context(plainFresh)).errors.some(x=>x.field==='campaign_permission'));assert.throws(()=>L.commit(plainFresh,plainDraft,context(plainFresh)));
 // Same for multiclass: Death-domain entries saved before the creation group existed.
 let wizard=create('wizard');
 const entryGroups=L.getChoices(wizard,L.selectClass(wizard,L.begin(wizard,context(wizard)),'cleric',context(wizard)),context(wizard));
 const domain=entryGroups.find(g=>g.id==='cleric:creation_domain');assert.ok(domain.options.some(o=>o.value==='death'));
 assert.ok(!entryGroups.some(g=>g.id==='cleric:creation_campaign_permission'));
 let probe=L.selectClass(wizard,L.begin(wizard,context(wizard)),'cleric',context(wizard));probe.choices['cleric:creation_domain']='death';
 const prefixed=L.getChoices(wizard,probe,context(wizard)).find(g=>g.id==='cleric:creation_campaign_permission');
 assert.ok(prefixed&&prefixed.count===1&&prefixed.section==='class');
 wizard=enter(wizard,'cleric',{'cleric:creation_domain':'death'});
 const entry=wizard.advancement.entries[0];assert.equal(entry.choices['cleric:creation_campaign_permission'],'yes');
 assert.deepEqual(L.inspect(wizard,context(wizard)).errors,[]);
 const old=copy(wizard);delete old.advancement.entries[0].choices['cleric:creation_campaign_permission'];assert.deepEqual(L.inspect(old,context(old)).errors,[]);
});
test('historical permission tolerance is replay-only: new and pending entries stay strict',()=>{
 // Multiclass: entering cleric/Death without the creation permission is rejected by transition and commit, while a saved ledger still replays.
 const wizard=create('wizard'),p=fill(wizard,L.selectClass(wizard,L.begin(wizard,context(wizard)),'cleric',context(wizard)),{'cleric:creation_domain':'death'});
 assert.equal(p.choices['cleric:creation_campaign_permission'],'yes');
 delete p.choices['cleric:creation_campaign_permission'];
 assert.ok(L.transition(wizard,p,context(wizard)).errors.some(e=>e.field==='cleric:creation_campaign_permission'));
 assert.throws(()=>L.commit(wizard,p,context(wizard)),/cleric:creation_campaign_permission|выберите/);
 assert.deepEqual(L.transition(wizard,p,context(wizard),undefined,true).errors,[]);
 // Single class: a stale campaign_permission on a level where the group is inactive.
 const death=create('cleric','death'),sp=fill(death,L.begin(death,context(death)));
 assert.ok(!L.getChoices(death,sp,context(death)).some(g=>g.id==='campaign_permission'));
 sp.choices.campaign_permission='yes';
 assert.ok(L.transition(death,sp,context(death)).errors.some(e=>e.field==='campaign_permission'));
 assert.throws(()=>L.commit(death,sp,context(death)),/Неизвестный/);
 const stale=copy(death);stale.advancement={version:1,entries:[copy(sp)]};stale.level=2;
 assert.deepEqual(L.inspect(stale,context(stale)).errors,[]);
});

test('hpGain preview equals the real HP difference and matches hand-calculated HP per level',()=>{
 // human_stats adds +1 to every ability and Hill Dwarf adds +2 CON; variant human (human_alt) adds no CON. withCon sets the base and checks the final CON.
 const withCon=(c,base,final)=>{c.abilities.constitution=base;assert.equal(R.finalAbilities(c,context(c).baseExtras).constitution,final,'CON setup');return c;};
 // Level c up to target with the given HP and asserts that the preview equals the committed HP difference.
 const level=(c,target,hp,pinned={})=>{const p=fill(c,{...L.selectClass(c,L.begin(c,context(c)),target,context(c)),hp},pinned);assert.deepEqual(L.transition(c,p,context(c)).errors,[],`${target} ${hp.mode}:${hp.value}`);const gain=L.hpGain(c,p,context(c)),next=L.commit(c,p,context(c));assert.equal(gain.gain,stats(next).hp-stats(c).hp,`${target} ${JSON.stringify(pinned)} ${hp.mode}:${hp.value}`);return {next,gain:gain.gain};};
 // (a) Hill Dwarf fighter, CON 14: L1 10+2+1 = 13; L2 fighter average 6+2+1 = +9.
 const a=withCon(create('fighter',undefined,{race:'dwarf',race_sub:'hill-dwarf'}),12,14);
 assert.equal(stats(a).hp,13);
 const aL2=level(a,'fighter',{mode:'average',value:6});
 assert.equal(aL2.gain,9);assert.equal(stats(aL2.next).hp,22);
 // (b) variant human Tough draconic sorcerer, CON 14: L1 6+2+2+1 = 11; L2 fighter average 6+2+2 = +10; L3 sorcerer average 4+2+2+1 = +9.
 const b=withCon(create('sorcerer','draconic',{race:'human',human_feature:'human_alt',creation_feat:'tough'}),14,14);
 assert.equal(stats(b).hp,11);
 const bL2=level(b,'fighter',{mode:'average',value:6});
 assert.equal(bL2.gain,10);assert.equal(stats(bL2.next).hp,21);
 const bL3=level(bL2.next,'sorcerer',{mode:'average',value:4});
 assert.equal(bL3.gain,9);assert.equal(stats(bL3.next).hp,30);
 // (c) fighter (CON 14) entering draconic sorcerer at average: 4+2+1 = +7.
 assert.equal(level(withCon(create('fighter'),13,14),'sorcerer',{mode:'average',value:4},{'sorcerer:creation_origin':'draconic'}).gain,7);
 // (d) CON 1 (mod -5) wizard, roll 1: max(1, 1-5) + 0 = +1.
 assert.equal(level(withCon(create('wizard',undefined,{race:'human',human_feature:'human_alt'}),1,1),'wizard',{mode:'roll',value:1}).gain,1);
 // (e1) variant human Tough, CON 8 (-1) wizard, roll 1: max(1, 1-1) + 2 = +3.
 assert.equal(level(withCon(create('wizard',undefined,{race:'human',human_feature:'human_alt',creation_feat:'tough'}),8,8),'wizard',{mode:'roll',value:1}).gain,3);
 // (e2) Hill Dwarf wizard, base CON 1 -> final CON 3 (Hill Dwarf +2, mod -4): max(1, 1-4) + 1 = +2.
 assert.equal(level(withCon(create('wizard',undefined,{race:'dwarf',race_sub:'hill-dwarf'}),1,3),'wizard',{mode:'roll',value:1}).gain,2);
 // Every listed start -> target pair, at average, minimum roll and maximum roll; average also gets a second level in the same class.
 const starts={
  plain:()=>create('fighter'),
  hillDwarf:()=>create('fighter',undefined,{race:'dwarf',race_sub:'hill-dwarf'}),
  tough:()=>create('fighter',undefined,{race:'human',human_feature:'human_alt',creation_feat:'tough'}),
  draconic:()=>create('sorcerer','draconic'),
  draconicTough:()=>create('sorcerer','draconic',{race:'human',human_feature:'human_alt',creation_feat:'tough'}),
  hillDwarfDraconic:()=>create('sorcerer','draconic',{race:'dwarf',race_sub:'hill-dwarf'}),
  lowCon:()=>withCon(create('wizard',undefined,{race:'human',human_feature:'human_alt'}),1,1),
  lowConTough:()=>withCon(create('wizard',undefined,{race:'human',human_feature:'human_alt',creation_feat:'tough'}),8,8)
 };
 const DRACONIC={'sorcerer:creation_origin':'draconic'},SHADOW={'sorcerer:creation_origin':'shadow'};
 const pairs=[
  ['plain','fighter',{}],['plain','sorcerer',DRACONIC],['plain','sorcerer',SHADOW],['plain','wizard',{}],
  ['hillDwarf','fighter',{}],['hillDwarf','sorcerer',DRACONIC],
  ['tough','fighter',{}],['tough','sorcerer',SHADOW],
  ['draconic','fighter',{}],['draconic','sorcerer',{}],['draconic','wizard',{}],
  ['draconicTough','fighter',{}],['draconicTough','sorcerer',{}],
  ['hillDwarfDraconic','fighter',{}],
  ['lowCon','fighter',{}],['lowConTough','wizard',{}]
 ];
 for(const [start,target,pinned] of pairs){
  const die=R.CLASSES[target].hitDie;
  for(const hp of [{mode:'average',value:die/2+1},{mode:'roll',value:1},{mode:'roll',value:die}]){
   const {next}=level(starts[start](),target,hp,pinned);
   if(hp.mode==='average')level(next,target,hp);
  }
 }
 // hpGain without a baseExtras computes the same numbers as the UI path, including the draconic starting class (no negative shared bonus).
 const dt=starts.draconicTough(),dtp=fill(dt,L.selectClass(dt,L.begin(dt,context(dt)),'fighter',context(dt)));
 assert.deepEqual(L.hpGain(dt,dtp,{}),L.hpGain(dt,dtp,context(dt)));
 const dr=starts.draconic(),drp=fill(dr,L.begin(dr,context(dr)));
 assert.equal(L.hpGain(dr,drp,{}).bonus,1);
});
test('replay tolerates catalogue narrowing for recognised legacy choices but new entries stay strict',()=>{
 // Legacy Eldritch Knight / Arcane Trickster ledgers picked a cantrip that a later fix removed from the offered list (known from race).
 for(const [cls,sub] of [['fighter','eldritch-knight'],['rogue','arcane-trickster']]){
  const f=advance(create(cls,null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'})),ctx=context(f);
  const p=fill(f,L.begin(f,ctx),{subclass:sub}),offered=L.getChoices(f,p,ctx).find(g=>g.id==='third_cantrips').options.map(o=>o.value);
  assert.ok(!offered.includes('fire-bolt'));
  const legacyEntry=copy(p);legacyEntry.choices.third_cantrips=['fire-bolt',offered.find(id=>id!=='fire-bolt')];
  const legacy=copy(f);legacy.advancement.entries.push(legacyEntry);legacy.level=3;
  const res=L.inspect(legacy,context(legacy));
  assert.deepEqual(res.errors,[],sub);assert.equal(res.state.level,3);assert.ok(res.warnings.some(w=>w.field==='third_cantrips'&&/больше не предлагается/.test(w.message)),sub);
  assert.ok(res.state.cantrips.includes('fire-bolt'));assert.deepEqual(legacy.advancement.entries[1],legacyEntry);// the ledger itself is never rewritten
  assert.doesNotThrow(()=>extras(legacy));assert.doesNotThrow(()=>stats(legacy));
  // A NEW pending entry with the same non-offered cantrip is still refused by commit and transition.
  const fresh=copy(p);fresh.choices.third_cantrips=legacyEntry.choices.third_cantrips;
  assert.ok(L.transition(f,fresh,ctx).errors.some(x=>x.field==='third_cantrips'),sub);assert.throws(()=>L.commit(f,fresh,ctx));
  // Replay of a legacy hero keeps working for further inspection, and a clean hero produces no warnings.
  assert.deepEqual(L.inspect(f,context(f)).warnings,[]);
 }
});
test('replay still rejects unrecognised ids, empty answers and duplicates',()=>{
 const f=advance(create('fighter',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'})),ctx=context(f),p=fill(f,L.begin(f,ctx),{subclass:'eldritch-knight'});
 const withCantrips=value=>{const e=copy(p);e.choices.third_cantrips=value;const h=copy(f);h.advancement.entries.push(e);h.level=3;return L.inspect(h,context(h));};
 assert.ok(withCantrips([p.choices.third_cantrips[0],'totally-fake-spell']).errors.some(x=>x.field==='third_cantrips'));
 assert.equal(withCantrips([p.choices.third_cantrips[0],'totally-fake-spell']).state.level,1);
 for(const bad of [[],'',[p.choices.third_cantrips[0],p.choices.third_cantrips[0]],[{id:'fire-bolt'}],['__proto__'],['constructor']])assert.ok(withCantrips(bad).errors.length,JSON.stringify(bad));
 // Count differences between rule versions are tolerated when every id is recognised, unique and non-empty.
 const fewer=withCantrips([p.choices.third_cantrips[0]]);assert.deepEqual(fewer.errors,[]);assert.ok(fewer.warnings.some(w=>/выбрано вариантов: 1/.test(w.message)));
 // Structure checks are untouched: bad hit points, level gaps and foundation still corrupt the ledger.
 const hp=copy(f),e=copy(p);e.hp={mode:'roll',value:99};hp.advancement.entries.push(e);hp.level=3;assert.ok(L.inspect(hp,context(hp)).errors.some(x=>x.field==='hp'));
 const gap=copy(f),g=copy(p);g.from=2;g.to=4;gap.advancement.entries.push(g);assert.ok(L.inspect(gap,context(gap)).errors.some(x=>x.field==='level'));
 const foreign=copy(f),o=copy(p);o.foundation='foundation:v2:other';foreign.advancement.entries.push(o);foreign.level=3;assert.ok(L.inspect(foreign,context(foreign)).errors.some(x=>x.field==='foundation'));
 // A subclass is never tolerated outside its offered list.
 const sub=copy(f),s=copy(p);s.choices.subclass='champion-of-nothing';sub.advancement.entries.push(s);sub.level=3;assert.ok(L.inspect(sub,context(sub)).errors.some(x=>x.field==='subclass'));
});
test('replay ignores answers of groups that no longer exist and tolerates groups added later',()=>{
 const f=advance(create('fighter')),ctx=context(f),p=fill(f,L.begin(f,ctx),{subclass:'eldritch-knight'});
 // Extra key for a group that does not exist (here a recognised spell id under a spellbook key): ignored, never applied.
 const extra=copy(p);extra.choices.learn='darkness';extra.choices.vanished_group='yes';
 const h=copy(f);h.advancement.entries.push(extra);h.level=3;
 const res=L.inspect(h,context(h));assert.deepEqual(res.errors,[]);assert.equal(res.state.level,3);
 assert.ok(res.warnings.some(w=>w.field==='learn'&&/игнорируется/.test(w.message)));assert.ok(res.warnings.some(w=>w.field==='vanished_group'));
 assert.ok(!res.state.known.includes('darkness'));assert.equal(res.state.choices.vanished_group,undefined);assert.ok(Object.hasOwn(h.advancement.entries[1].choices,'vanished_group'));
 assert.ok(L.transition(f,extra,ctx).errors.some(x=>x.field==='vanished_group'));assert.throws(()=>L.commit(f,extra,ctx));
 // The subclass key is state-bearing, so it stays an error when its group is not active (fighter level 2).
 const f1=create('fighter'),c1=context(f1),q=fill(f1,L.begin(f1,c1));q.choices.subclass='champion';const early=copy(f1);early.advancement={version:2,entries:[q]};early.level=2;
 assert.ok(L.inspect(early,context(early)).errors.some(x=>x.field==='subclass'));
 // A missing answer is only tolerated for the explicit allowlist of groups added after earlier saves; any other missing group is an error.
 const old=copy(p);delete old.choices.third_free;const m=copy(f);m.advancement.entries.push(old);m.level=3;
 const missing=L.inspect(m,context(m));assert.ok(missing.errors.some(x=>x.field==='third_free'));assert.equal(missing.state.level,1);
 assert.ok(L.transition(f,old,ctx).errors.some(x=>x.field==='third_free'));assert.throws(()=>L.commit(f,old,ctx));
 // A dependent replacement answer (spell_add after a spell_remove) cannot be dropped either, and spell_remove itself is never tolerated off-list.
 const sorc=advance(create('sorcerer','draconic')),sp=fill(sorc,L.begin(sorc,context(sorc))),withReplacement=copy(sp);
 withReplacement.choices.spell_remove=L.getChoices(sorc,sp,context(sorc)).find(g=>g.id==='spell_remove').options.find(o=>o.value!=='none').value;
 const addGroup=()=>L.getChoices(sorc,withReplacement,context(sorc)).find(g=>g.id==='spell_add');
 withReplacement.choices.spell_add=addGroup().options[0].value;
 const okSorc=copy(sorc);okSorc.advancement.entries.push(copy(withReplacement));okSorc.level=3;assert.deepEqual(L.inspect(okSorc,context(okSorc)).errors,[]);
 const noAdd=copy(withReplacement);delete noAdd.choices.spell_add;const sh=copy(sorc);sh.advancement.entries.push(noAdd);sh.level=3;assert.ok(L.inspect(sh,context(sh)).errors.some(x=>x.field==='spell_add'));
 // A spell_remove naming a spell the hero does not know is refused in replay (and in new entries) instead of yielding an extra spell.
 for(const forged of ['fireball','not-a-spell']){const bad=copy(withReplacement);bad.choices.spell_remove=forged;const fh=copy(sorc);fh.advancement.entries.push(bad);fh.level=3;assert.ok(L.inspect(fh,context(fh)).errors.some(x=>x.field==='spell_remove'),forged);assert.ok(L.transition(sorc,bad,context(sorc)).errors.length,forged);}
 // The allowlisted late groups may be missing: variant opt-ins (barbarian/rogue level 3), the TCE list question of a delayed caster, the rune knight language.
 const lateCases=[[advance(create('barbarian')),'berserker','variant_primal-knowledge'],[advance(create('rogue')),'thief','variant_steady-aim'],[create('ranger'),null,'expanded_spells'],[advance(create('fighter',null,{race:'goliath'})),'rune-knight','rune_knight_language']];
 for(const [hero,branch,group] of lateCases){
  const lp=fill(hero,L.begin(hero,context(hero)),branch?{subclass:branch}:{});assert.ok(Object.hasOwn(lp.choices,group),group);
  const legacy=copy(lp);delete legacy.choices[group];const lh=copy(hero);(lh.advancement=lh.advancement||{version:2,entries:[]}).entries.push(legacy);lh.level=hero.level+1;
  const lr=L.inspect(lh,context(lh));assert.deepEqual(lr.errors,[],group);assert.equal(lr.state.level,hero.level+1,group);assert.doesNotThrow(()=>extras(lh),group);
 }
});
test('multiclass replay tolerates narrowed entry choices; new multiclass entries stay strict',()=>{
 const wizard=create('wizard'),ctx=context(wizard),p=fill(wizard,L.selectClass(wizard,L.begin(wizard,ctx),'rogue',ctx));
 const skills=L.getChoices(wizard,p,ctx).find(g=>g.id==='rogue:entry_skill').options.map(o=>o.value),known=context(wizard).proficiencies.skills;
 assert.ok(known.length&&skills.every(id=>!known.includes(id)));
 const legacyEntry=copy(p);legacyEntry.choices['rogue:entry_skill']=known[0];
 const legacy=copy(wizard);legacy.advancement={version:2,entries:[legacyEntry]};legacy.level=2;
 const res=L.inspect(legacy,context(legacy));assert.deepEqual(res.errors,[]);assert.equal(res.state.level,2);assert.ok(res.warnings.some(w=>w.field==='rogue:entry_skill'));
 assert.doesNotThrow(()=>extras(legacy));
 assert.ok(L.transition(wizard,legacyEntry,ctx).errors.some(x=>x.field==='rogue:entry_skill'));assert.throws(()=>L.commit(wizard,legacyEntry,ctx));
 const fake=copy(legacy);fake.advancement.entries[0].choices['rogue:entry_skill']='totally-fake-skill';assert.ok(L.inspect(fake,context(fake)).errors.length);
 // Keys of another class prefix, or unprefixed keys, still mark a forged entry; a stale key of the entered class is only warned about.
 const stale=copy(legacy);stale.advancement.entries[0].choices['rogue:vanished']='yes';const staleResult=L.inspect(stale,context(stale));assert.deepEqual(staleResult.errors,[]);assert.ok(staleResult.warnings.some(w=>w.field==='rogue:vanished'));
 assert.ok(L.transition(wizard,{...copy(p),choices:{...copy(p).choices,'rogue:vanished':'yes'}},ctx).errors.some(x=>x.field==='rogue:vanished'));
 const foreign=copy(legacy);foreign.advancement.entries[0].choices['sorcerer:entry_skill']='arcana';assert.ok(L.inspect(foreign,context(foreign)).errors.length);
 // A clean multiclass hero reports no warnings and no errors.
 const clean=enter(create('wizard'),'rogue');assert.deepEqual(L.inspect(clean,context(clean)),{...L.inspect(clean,context(clean)),errors:[],warnings:[]});
});
test('stale entry answers of a multiclass entry are warned about but never applied (ledger kept, onboarding filtered)',()=>{
 const wizard=create('wizard'),ctx=context(wizard),p=fill(wizard,L.selectClass(wizard,L.begin(wizard,ctx),'fighter',ctx));
 const stale=copy(p);stale.choices['fighter:entry_skill']='stealth';stale.choices['fighter:entry_instrument']='lute';stale.choices['fighter:creation_vanished']='yes';
 const base=R.resolveProficiencies(wizard,extras(wizard));assert.ok(!base.skills.includes('stealth')&&!base.tools.includes('lute'));
 const h=copy(wizard);h.advancement={version:2,entries:[stale]};h.level=2;
 const res=L.inspect(h,context(h));assert.deepEqual(res.errors,[]);assert.equal(res.state.level,2);
 for(const key of ['fighter:entry_skill','fighter:entry_instrument','fighter:creation_vanished'])assert.ok(res.warnings.some(w=>w.field===key&&/игнорируется/.test(w.message)&&/^Уровень 2 \(Воин\)/.test(w.message)),key);
 const prof=R.resolveProficiencies(h,extras(h));assert.ok(!prof.skills.includes('stealth'),'Stealth not granted');assert.ok(!prof.tools.includes('lute'),'lute not granted');
 const owned=res.state.classStates.fighter;assert.equal(owned.character.vanished,undefined);assert.ok(!Object.keys(owned.onboarding).some(k=>/entry_|vanished/.test(k)));
 assert.ok(Object.hasOwn(h.advancement.entries[0].choices,'fighter:entry_skill'));// the ledger itself is never rewritten
 const lss=JSON.stringify(E.buildLssExport(h,{},stats(h),extras(h)));assert.ok(!/lute/i.test(lss));
 // Later replays (a further fighter level read through owned.onboarding) see the same filtered record.
 const next=advance(h,'champion'),again=L.inspect(next,context(next));assert.deepEqual(again.errors,[]);
 assert.deepEqual(again.state.classStates.fighter.onboarding,owned.onboarding);const prof3=R.resolveProficiencies(next,extras(next));assert.ok(!prof3.skills.includes('stealth')&&!prof3.tools.includes('lute'));
 // A NEW entry still refuses every such key.
 assert.ok(L.transition(wizard,stale,ctx).errors.some(x=>x.field==='fighter:entry_skill'));assert.throws(()=>L.commit(wizard,stale,ctx));
 // Legitimate entry picks of a class that asks the question are still applied (Bard instrument).
 const bard=enter(create('wizard'),'bard'),bp=R.resolveProficiencies(bard,extras(bard));assert.ok(bard.advancement.entries[0].choices['bard:entry_instrument']);assert.ok(bp.tools.includes(bard.advancement.entries[0].choices['bard:entry_instrument']));
});
test('subclass-bearing multiclass entry groups are strict even in replay',()=>{
 for(const [cls,field,bad] of [['cleric','creation_domain','champion'],['sorcerer','creation_origin','champion'],['warlock','creation_patron','champion']]){
  const wizard=create('wizard'),ctx=context(wizard),p=fill(wizard,L.selectClass(wizard,L.begin(wizard,ctx),cls,ctx));
  const key=cls+':'+field,offered=L.getChoices(wizard,p,ctx).find(g=>g.id===key).options.map(o=>o.value);assert.ok(offered.length>1&&!offered.includes(bad));
  const replayOf=entry=>{const h=copy(wizard);h.advancement={version:2,entries:[entry]};h.level=2;return L.inspect(h,context(h));};
  assert.deepEqual(replayOf(p).errors,[],cls);
  const wrong=copy(p);wrong.choices[key]=bad;assert.ok(replayOf(wrong).errors.some(x=>x.field===key),cls+' non-offered');
  const unknown=copy(p);unknown.choices[key]='not-a-subclass';assert.ok(replayOf(unknown).errors.some(x=>x.field===key),cls+' unknown');
  const missing=copy(p);delete missing.choices[key];assert.ok(replayOf(missing).errors.length,cls+' missing');
 }
});
test('replay tolerance is limited to the same catalogue kind, never a larger count, and never *_remove groups',()=>{
 const run=(hero,mutate,subclass,pinned={})=>{const p=fill(hero,L.begin(hero,context(hero)),{...(subclass?{subclass}:{}),...pinned}),e=copy(p);mutate(e.choices,p.choices);const h=copy(hero);(h.advancement=h.advancement||{version:2,entries:[]}).entries.push(e);h.level=hero.level+1;return L.inspect(h,context(h));};
 const fails=(r,field,label)=>assert.ok(r.errors.some(x=>x.field===field),label);
 const tolerated=(r,field,label)=>{assert.deepEqual(r.errors,[],label);assert.ok(r.warnings.some(w=>w.field===field),label);};
 const ek=advance(create('fighter',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'})),wizardCantrips=Object.values(D.spells).filter(s=>s.level===0&&s.classes.includes('wizard')).map(s=>s.id);
 // Eldritch Knight: a cantrip pick must stay a cantrip, a spell pick a spell of the same level and class list.
 tolerated(run(ek,(c,o)=>{c.third_cantrips=['fire-bolt',o.third_cantrips[0]];},'eldritch-knight'),'third_cantrips','race-known cantrip');
 fails(run(ek,c=>{c.third_cantrips=['misty-step','cure-wounds'];},'eldritch-knight'),'third_cantrips','spells in place of cantrips');
 fails(run(ek,c=>{c.third_cantrips=wizardCantrips.slice(0,6);},'eldritch-knight'),'third_cantrips','six cantrips (more than required)');
 fails(run(ek,(c,o)=>{c.third_cantrips=[...o.third_cantrips,'fire-bolt'];},'eldritch-knight'),'third_cantrips','three cantrips');
 fails(run(ek,c=>{c.third_free='stealth';},'eldritch-knight'),'third_free','skill in a spell group');
 fails(run(ek,c=>{c.third_free='none';},'eldritch-knight'),'third_free','sentinel in a spell group');
 fails(run(ek,c=>{c.third_free='cure-wounds';},'eldritch-knight'),'third_free','spell of a foreign class list');
 tolerated(run(ek,(c,o)=>{c.third_cantrips=[o.third_cantrips[0]];},'eldritch-knight'),'third_cantrips','fewer cantrips are tolerated');
 const arcane=advance(create('rogue',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'}));
 tolerated(run(arcane,(c,o)=>{c.third_cantrips=['fire-bolt',o.third_cantrips[0]];},'arcane-trickster'),'third_cantrips','Arcane Trickster race-known cantrip');
 // Sorcerer: too many spells, a sentinel instead of spells, and a forged replacement.
 const sorc=advance(create('sorcerer','draconic'));
 fails(run(sorc,c=>{c.learn=Object.values(D.spells).filter(s=>s.level===1&&s.classes.includes('sorcerer')).slice(0,12).map(s=>s.id);}),'learn','twelve spells');
 fails(run(sorc,c=>{c.learn='none';}),'learn','none for learn');
 fails(run(sorc,c=>{c.spell_remove='fireball';}),'spell_remove','forged spell_remove');
 // Wizard spellbook: the right kind and level but another class list is refused.
 const wiz=advance(create('wizard'));
 fails(run(wiz,c=>{c.book_add=['cure-wounds','magic-missile'];}),'book_add','cure-wounds is not a wizard spell');
 // Battle Master maneuvers, Kensei weapons.
 const fighter=advance(create('fighter'));
 fails(run(fighter,c=>{c.maneuvers=['stealth','riposte','parry'];},'battle-master'),'maneuvers','skill among maneuvers');
 const monk=advance(create('monk'));
 tolerated(run(monk,c=>{c.kensei_melee='lance';},'kensei'),'kensei_melee','lance offered by earlier builds (replay)');
 fails(run(monk,c=>{c.kensei_melee='stealth';},'kensei'),'kensei_melee','skill as weapon');
 // Every *_remove group is strict: an id that is not in the replayed state can only be forged.
 const lock=advance(create('warlock','fiend'));
 fails(run(lock,c=>{c.invocation_remove='devils-sight';c.invocation_add='fiendish-vigor';}),'invocation_remove','invocation_remove not owned');
 const arti=advance(create('artificer'));
 fails(run(arti,c=>{c.infusion_remove='replicate:alchemy-jug';c.infusion_add='enhanced-defense';}),'infusion_remove','infusion_remove not owned');
});
test('multiclass replay warnings report the character level and the class',()=>{
 const wizard=create('wizard'),entered=enter(wizard,'rogue'),third=fill(entered,L.selectClass(entered,L.begin(entered,context(entered)),'rogue',context(entered)));
 third.choices.vanished_group='yes';const h=copy(entered);h.advancement.entries.push(third);h.level=3;
 const res=L.inspect(h,context(h));assert.deepEqual(res.errors,[]);assert.equal(res.state.classStates.rogue.state.level,2);
 const w=res.warnings.find(x=>x.field==='vanished_group');assert.ok(w);assert.match(w.message,/^Уровень 3 \(Плут\): /);assert.doesNotMatch(w.message,/Уровень 2/);
 // Group names, not raw keys, appear in the text.
 const named=copy(h);named.advancement.entries[0].choices['rogue:entry_skill']=context(named).proficiencies.skills[0];
 const nw=L.inspect(named,context(named)).warnings.find(x=>x.field==='rogue:entry_skill');assert.ok(nw&&!/rogue:entry_skill/.test(nw.message));
});
// Replay-tolerance loopholes: a forged ledger must never gain what a new entry could not take (spells of another class, options below
// their prerequisites, fixed-list answers, answers that must come from the replayed state).
const forgedReplay=(hero,mutate,pinned={})=>{const p=fill(hero,L.begin(hero,context(hero)),pinned),e=copy(p);mutate(e.choices,p.choices);const h=copy(hero);(h.advancement=h.advancement||{version:2,entries:[]}).entries.push(e);h.level=hero.level+1;return {result:L.inspect(h,context(h)),entry:e,hero:h,draft:p};};
const forgedEntry=(hero,classId,mutate)=>{const p=fill(hero,L.selectClass(hero,L.begin(hero,context(hero)),classId,context(hero))),e=copy(p);mutate(e.choices);const h=copy(hero);(h.advancement=h.advancement||{version:2,entries:[]}).entries.push(e);h.level=hero.level+1;return {result:L.inspect(h,context(h)),entry:e,hero:h};};
const rejected=(r,field,label)=>{assert.ok(r.result.errors.some(x=>x.field===field),label+': '+JSON.stringify(r.result.errors));assert.equal(r.result.state.level,1,label);};
const accepted=(r,field,label)=>{assert.deepEqual(r.result.errors,[],label);assert.ok(r.result.warnings.some(w=>w.field===field),label);};
test('replay refuses spells of another class even when the offered spells share no class (warlock, divine soul, fixed cantrips)',()=>{
 for(const sub of D.subclasses.filter(s=>s.class==='warlock')){
  const w=create('warlock',sub.id),offered=L.getChoices(w,fill(w,L.begin(w,context(w))),context(w)).find(g=>g.id==='learn').options.map(o=>o.value);
  if(!offered.includes('cure-wounds'))rejected(forgedReplay(w,c=>{c.learn='cure-wounds';}),'learn','warlock '+sub.id+' cure-wounds');
 }
 // Multiclass warlock entry: creation_known_spells must be on the warlock list.
 const wiz=create('wizard');
 for(const id of ['cure-wounds','healing-word'])rejected(forgedEntry(wiz,'warlock',c=>{c['warlock:creation_known_spells']=[c['warlock:creation_known_spells'][0],id];}),'warlock:creation_known_spells','warlock entry '+id);
 // Divine Soul sorcerer: warlock and wizard spells are not on the sorcerer (or cleric) list.
 const divine=create('sorcerer','divine-soul');
 for(const id of ['hex','jims-magic-missile'])assert.ok(D.spells[id]);
 for(const id of ['hex','jims-magic-missile'])rejected(forgedReplay(divine,c=>{c.learn=id;}),'learn','divine soul '+id);
 // Fixed one- or two-spell lists are strict.
 rejected(forgedReplay(advance(create('barbarian')),c=>{c.giant_cantrip='eldritch-blast';},{subclass:'giant'}),'giant_cantrip','giant');
 rejected(forgedReplay(advance(create('barbarian')),c=>{c.giant_cantrip='fire-bolt';},{subclass:'giant'}),'giant_cantrip','giant fire-bolt');
 rejected(forgedReplay(advance(create('fighter')),c=>{c.archer_cantrip='eldritch-blast';},{subclass:'arcane-archer'}),'archer_cantrip','archer');
 rejected(forgedReplay(advance(create('bard')),c=>{c.guidance_bonus='eldritch-blast';},{subclass:'spirits'}),'guidance_bonus','spirits');
 // Improved Minor Illusion offers any wizard cantrip only when Minor Illusion is already known; otherwise only Minor Illusion.
 rejected(forgedReplay(create('wizard'),c=>{c.illusion_cantrip='eldritch-blast';},{subclass:'illusion'}),'illusion_cantrip','illusion eldritch-blast');
 rejected(forgedReplay(create('wizard'),c=>{c.illusion_cantrip='fire-bolt';},{subclass:'illusion'}),'illusion_cantrip','illusion fire-bolt without Minor Illusion');
 // Every class-bound spell group of a new entry and of a replay uses the class list: Cleric Death domain cantrips are necromancy only.
 rejected(forgedEntry(create('wizard'),'cleric',c=>{c['cleric:creation_domain']='death';c['cleric:creation_domain_cantrips']='eldritch-blast';}),'cleric:creation_domain_cantrips','death domain cantrip');
 // Control: a spell of the right class and level that is merely no longer offered stays tolerated (previous behaviour).
 const ek=advance(create('fighter',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'}));
 accepted(forgedReplay(ek,(c,o)=>{c.third_cantrips=['fire-bolt',o.third_cantrips[0]];},{subclass:'eldritch-knight'}),'third_cantrips','high elf fire-bolt');
});
test('replay checks option prerequisites: no invocation, discipline or infusion below its level or pact',()=>{
 const lock=create('warlock','fiend');
 for(const id of ['lifedrinker','thirsting-blade'])rejected(forgedReplay(lock,c=>{c.invocations=[c.invocations[0],id];}),'invocations','warlock level 2 '+id);
 rejected(forgedReplay(advance(create('monk')),c=>{c.discipline='breath-of-winter';},{subclass:'four-elements'}),'discipline','breath-of-winter at level 3');
 rejected(forgedReplay(create('artificer'),c=>{c.infusions=[...c.infusions.slice(0,3),'arcane-propulsion-armor'];}),'infusions','arcane-propulsion-armor at level 2');
 // Level 3: a replacement invocation must also meet its prerequisites (pact weapon needs the Blade pact).
 const lock2=advance(create('warlock','fiend')),wrongPact=forgedReplay(lock2,c=>{c.pact='chain';c.invocation_remove=lock2.advancement.entries[0].choices.invocations[0];c.invocation_add='thirsting-blade';});
 assert.ok(wrongPact.result.errors.length,'thirsting-blade needs level 5 and the Blade pact');
 // Control: a legal option that is merely no longer offered (a Martial Adept maneuver) is still tolerated.
 const ma=create('fighter',null,{human_feature:'human_alt',creation_feat:'martial-adept',creation_maneuvers:['rally','parry']});
 const bm=forgedReplay(advance(ma),c=>{c.maneuvers=['rally',c.maneuvers[0],c.maneuvers[1]];},{subclass:'battle-master'});
 accepted(bm,'maneuvers','Martial Adept maneuver');
});
test('replay does not tolerate uncatalogued ids or any fixed answer list (totem, land)',()=>{
 rejected(forgedReplay(advance(create('barbarian')),c=>{c.totem='arctic';},{subclass:'totem-warrior'}),'totem','arctic totem');
 rejected(forgedReplay(advance(create('druid'),'land'),c=>{c.land='bear';}),'land','bear land');
 rejected(forgedReplay(advance(create('ranger')),c=>{c.hunter_prey='bear';},{subclass:'hunter'}),'hunter_prey','hunter prey');
});
test('replay requires the state-derived groups to match the replayed state (wizard prepared, bard and rogue expertise)',()=>{
 const wiz=advance(create('wizard')),state=L.inspect(wiz,context(wiz)).state;
 rejected(forgedReplay(wiz,c=>{const book=[...state.book,...c.book_add],other=Object.values(D.spells).find(s=>s.level===1&&s.classes.includes('wizard')&&!book.includes(s.id)).id;c.prepared=[other,...c.prepared.slice(1)];}),'prepared','wizard prepared outside the book');
 const fighter=create('fighter');
 rejected(forgedEntry(fighter,'wizard',c=>{const book=c['wizard:creation_spellbook'],other=Object.values(D.spells).find(s=>s.level===1&&s.classes.includes('wizard')&&!book.includes(s.id)).id;c['wizard:creation_prepared']=[other,...c['wizard:creation_prepared'].slice(1)];}),'wizard:creation_prepared','wizard entry prepared outside the book');
 const bard=advance(create('bard')),skills=context(bard).proficiencies.skills;
 const picked=fill(bard,L.begin(bard,context(bard)),{subclass:'lore'}).choices.subclass_skills,outside=Object.keys(R.SKILLS).find(id=>!skills.includes(id)&&!picked.includes(id));
 rejected(forgedReplay(bard,c=>{c.expertise=[outside,c.expertise[1]];},{subclass:'lore'}),'expertise','bard expertise in a skill the bard lacks');
 const wizard=create('wizard'),known=context(wizard).proficiencies.skills,lacking=Object.keys(R.SKILLS).filter(id=>!known.includes(id));
 rejected(forgedEntry(wizard,'rogue',c=>{c['rogue:entry_expertise']=[lacking[0],lacking[1]];}),'rogue:entry_expertise','rogue entry expertise without proficiency');
 // The legitimate shapes still replay clean.
 for(const hero of [wiz,bard,enter(create('fighter'),'wizard'),enter(create('wizard'),'rogue')])assert.deepEqual(L.inspect(hero,context(hero)).errors,[]);
});
test('replay tolerates a fixed skill list only for a skill the hero already has; Knowledge expertise slots stay strict',()=>{
 const fighter=advance(create('fighter')),known=context(fighter).proficiencies.skills,unknown=Object.keys(R.SKILLS).find(id=>!known.includes(id)&&!['arcana','nature','history','insight','performance','persuasion','animal_handling'].includes(id));
 const owned=known.find(id=>!['arcana','nature'].includes(id));
 rejected(forgedReplay(fighter,c=>{c.archer_skill=unknown;},{subclass:'arcane-archer'}),'archer_skill','archer unknown skill');
 accepted(forgedReplay(fighter,c=>{c.archer_skill=owned;},{subclass:'arcane-archer'}),'archer_skill','archer skill already known');
 rejected(forgedReplay(fighter,c=>{c.samurai_proficiency=unknown;},{subclass:'samurai'}),'samurai_proficiency','samurai unknown skill');
 accepted(forgedReplay(fighter,c=>{c.samurai_proficiency=owned;},{subclass:'samurai'}),'samurai_proficiency','samurai skill already known');
 rejected(forgedReplay(fighter,c=>{c.cavalier_proficiency=unknown;},{subclass:'cavalier'}),'cavalier_proficiency','cavalier unknown skill');
 const ranger=advance(create('ranger')),rk=context(ranger).proficiencies.skills,ru=Object.keys(R.SKILLS).find(id=>!rk.includes(id)&&!['deception','performance','persuasion'].includes(id));
 rejected(forgedReplay(ranger,c=>{c.fey_skill=ru;},{subclass:'fey-wanderer'}),'fey_skill','fey unknown skill');
 // Order domain at multiclass entry: a fixed two-skill list, narrowed only by known skills.
 const wizard=create('wizard'),wk=context(wizard).proficiencies.skills,wu=Object.keys(R.SKILLS).find(id=>!wk.includes(id)&&!['intimidation','persuasion'].includes(id));
 rejected(forgedEntry(wizard,'cleric',c=>{c['cleric:creation_domain']='order';c['cleric:creation_domain_skill']=wu;}),'cleric:creation_domain_skill','order domain unknown skill');
 // The entry's own skill answer never counts as "already known" for itself.
 const rogueSkills=L.getChoices(wizard,fill(wizard,L.selectClass(wizard,L.begin(wizard,context(wizard)),'rogue',context(wizard))),context(wizard)).find(g=>g.id==='rogue:entry_skill').options.map(o=>o.value),notOffered=Object.keys(R.SKILLS).find(id=>!wk.includes(id)&&!rogueSkills.includes(id));
 rejected(forgedEntry(wizard,'rogue',c=>{c['rogue:entry_skill']=notOffered;}),'rogue:entry_skill','rogue entry skill');
 // Expertise slots (Knowledge domain) list proficiencies and are not narrowed by "already known": a stray is refused outright.
 const kp=fill(wizard,L.selectClass(wizard,L.begin(wizard,context(wizard)),'cleric',context(wizard)),{'cleric:creation_domain':'knowledge'}),slot='cleric:proficiency:creation:knowledge-skill:0',outside=wk.find(id=>!['arcana','history','nature','religion'].includes(id));
 assert.ok(Object.hasOwn(kp.choices,slot)&&outside);
 const ke=copy(kp);ke.choices[slot]=outside;const kh=copy(wizard);kh.advancement={version:2,entries:[ke]};kh.level=2;
 assert.ok(L.inspect(kh,context(kh)).errors.some(x=>x.field===slot),'knowledge expertise outside its list');
 assert.deepEqual(L.inspect((()=>{const ok=copy(wizard);ok.advancement={version:2,entries:[copy(kp)]};ok.level=2;return ok;})(),context(wizard)).errors,[]);
 // Weapons: proficiency-granting groups tolerate only the extras an earlier version offered (see the weapon test below), and the
 // generic proficiency groups never are.
 accepted(forgedReplay(advance(create('monk')),c=>{c.kensei_melee='lance';},{subclass:'kensei'}),'kensei_melee','kensei lance (historical)');
 for(const id of ['simple','martial'])rejected(forgedReplay(advance(create('monk')),c=>{c.kensei_melee=id;},{subclass:'kensei'}),'kensei_melee','kensei '+id);
});
test('replay runs the proficiency-conflict check and reports new conflicts as warnings; new entries are still refused',()=>{
 const wizard=create('wizard',null,{background:'entertainer'}),instrument=context(wizard).proficiencies.tools.find(id=>R.INSTRUMENTS.includes(id));assert.ok(instrument);
 const forged=forgedEntry(wizard,'bard',c=>{c['bard:entry_instrument']=instrument;});
 assert.deepEqual(forged.result.errors,[]);assert.equal(forged.result.state.level,2);
 assert.ok(forged.result.warnings.some(w=>/уже получено из другого источника/.test(w.message)&&/^Уровень 2 \(Бард\)/.test(w.message)),JSON.stringify(forged.result.warnings));
 assert.ok(forged.result.warnings.some(w=>w.field==='bard:entry_instrument'));
 assert.doesNotThrow(()=>extras(forged.hero));
 // A new entry with the same duplicate is refused.
 assert.ok(L.transition(wizard,forged.entry,context(wizard)).errors.length);assert.throws(()=>L.commit(wizard,forged.entry,context(wizard)));
 // A clean multiclass hero has no warnings from the check.
 const clean=enter(create('wizard'),'bard');assert.deepEqual(L.inspect(clean,context(clean)).warnings,[]);
});
const attacksOf=hero=>extras(hero).attacks.map(a=>a.damage);
test('a fighting style held by another class is refused in replay too (owned class and multiclass entry); damage is never doubled',()=>{
 const reject=(hero,entry,field,label)=>{const h=copy(hero);h.advancement.entries.push(copy(entry));h.level=hero.level+1;const r=L.inspect(h,context(h));assert.ok(r.errors.some(x=>x.field===field&&/уже получен/.test(x.message)),label+': '+JSON.stringify(r.errors));assert.equal(r.state.level,1,label);return h;};
 // Owned-class path: Fighter holds Dueling, then Paladin (level 1) takes its Fighting Style at level 2.
 const fighter=create('fighter',null,{creation_style:'dueling'}),single=attacksOf(fighter);
 const hero=enter(fighter,'paladin'),draft=fill(hero,L.selectClass(hero,L.begin(hero,context(hero)),'paladin',context(hero)));
 assert.ok(!L.getChoices(hero,draft,context(hero)).find(g=>g.id==='style').options.some(o=>o.value==='dueling'));
 const good=copy(hero);good.advancement.entries.push(copy(draft));good.level=3;assert.deepEqual(L.inspect(good,context(good)).errors,[]);
 const doubled=copy(draft);doubled.choices.style='dueling';delete doubled.choices.style_cantrips;
 const bad=reject(hero,doubled,'style','fighter Dueling + paladin Dueling');
 assert.throws(()=>L.commit(hero,doubled,context(hero)));
 // The doubled ledger is not applied: damage is that of the one Dueling the fighter already has (+2, never +4).
 assert.ok(extras(bad).progressionErrors.length);assert.deepEqual(attacksOf(bad),attacksOf(hero));assert.deepEqual(attacksOf(hero),single);
 // Same style through its alias ids (great_weapon / great-weapon-fighting).
 const gwf=enter(create('fighter',null,{creation_style:'great_weapon'}),'paladin'),gd=fill(gwf,L.selectClass(gwf,L.begin(gwf,context(gwf)),'paladin',context(gwf))),gdup=copy(gd);gdup.choices.style='great-weapon-fighting';delete gdup.choices.style_cantrips;
 reject(gwf,gdup,'style','alias great_weapon');
 // Entry path: Paladin (Dueling at level 2) then Fighter entry with creation_style Dueling.
 const paladin=advance(create('paladin'),null,{style:'dueling'}),entryDraft=fill(paladin,L.selectClass(paladin,L.begin(paladin,context(paladin)),'fighter',context(paladin)));
 assert.equal(L.inspect(paladin,context(paladin)).state.choices.style,'dueling');
 assert.ok(!L.getChoices(paladin,entryDraft,context(paladin)).find(g=>g.id==='fighter:creation_style').options.some(o=>o.value==='dueling'));
 const dupEntry=copy(entryDraft);dupEntry.choices['fighter:creation_style']='dueling';
 const bad2=reject(paladin,dupEntry,'fighter:creation_style','paladin Dueling + fighter entry Dueling');
 assert.throws(()=>L.commit(paladin,dupEntry,context(paladin)));
 assert.deepEqual(attacksOf(bad2),attacksOf(create('paladin')));
 // A different style is fine.
 const other=copy(entryDraft);other.choices['fighter:creation_style']='archery';
 const ok=copy(paladin);ok.advancement.entries.push(other);ok.level=3;assert.deepEqual(L.inspect(ok,context(ok)).errors,[]);
 // A style that is merely no longer offered and held by nobody is still tolerated.
 const lone=forgedReplay(create('paladin'),c=>{c.style='dueling';delete c.style_cantrips;});
 assert.deepEqual(lone.result.errors,[]);
});
test('replay tolerates only the weapons an earlier version of a proficiency group offered; every other weapon is refused',()=>{
 const monk=advance(create('monk')),wizard=create('wizard');
 // Kensei weapons (XGE) may not be heavy or special (the longbow is allowed explicitly): one melee and one ranged pick.
 for(const id of ['longbow','greataxe','greatsword','heavy_crossbow','glaive','halberd','net'])rejected(forgedReplay(monk,c=>{c.kensei_melee=id;},{subclass:'kensei'}),'kensei_melee','kensei melee '+id);
 // The lance was offered by the three earliest checkouts: a saved ledger keeps it with a warning, a new pick is still refused.
 const lance=forgedReplay(monk,c=>{c.kensei_melee='lance';},{subclass:'kensei'});accepted(lance,'kensei_melee','kensei lance (historical)');
 assert.match(lance.result.warnings.find(w=>w.field==='kensei_melee').message,/больше не предлагается/);
 const freshLance=fill(monk,L.begin(monk,context(monk)),{subclass:'kensei'});freshLance.choices.kensei_melee='lance';
 assert.ok(L.transition(monk,freshLance,context(monk)).errors.some(x=>x.field==='kensei_melee'),'new kensei lance');
 assert.throws(()=>L.commit(monk,freshLance,context(monk)),'new kensei lance commit');
 for(const id of ['greatsword','lance','longsword','greataxe','heavy_crossbow','net'])rejected(forgedReplay(monk,c=>{c.kensei_ranged=id;},{subclass:'kensei'}),'kensei_ranged','kensei ranged '+id);
 // Bladesinging (TCE): one type of one-handed melee weapon.
 for(const id of ['greatsword','heavy_crossbow','longbow','greataxe','maul'])rejected(forgedReplay(wizard,c=>{c.bladesinger_weapon=id;},{subclass:'bladesinging'}),'bladesinger_weapon','bladesinger '+id);
 // The refused ledger grants nothing: the hero keeps exactly the proficiencies of its creation.
 const refused=forgedReplay(wizard,c=>{c.bladesinger_weapon='greatsword';},{subclass:'bladesinging'});
 assert.ok(!R.resolveProficiencies(refused.hero,extras(refused.hero)).weapons.includes('greatsword'));
 // Historically offered extras: the Bladesinger's greatclub (offered up to 4793928) is kept with a warning, and only that one.
 const club=forgedReplay(wizard,c=>{c.bladesinger_weapon='greatclub';},{subclass:'bladesinging'});
 accepted(club,'bladesinger_weapon','bladesinger greatclub');
 assert.match(club.result.warnings.find(w=>w.field==='bladesinger_weapon').message,/больше не предлагается/);
 assert.ok(R.resolveProficiencies(club.hero,extras(club.hero)).weapons.includes('greatclub'));
 // Offered picks stay clean (no warning), non-weapons stay errors.
 const clean=forgedReplay(wizard,c=>{c.bladesinger_weapon='rapier';},{subclass:'bladesinging'});assert.deepEqual(clean.result.errors,[]);assert.deepEqual(clean.result.warnings,[]);
 rejected(forgedReplay(wizard,c=>{c.bladesinger_weapon='stealth';},{subclass:'bladesinging'}),'bladesinger_weapon','skill as weapon');
});
test('replay refuses strays that the hero already has (invocations, spellbook, known spells, free third-level spell)',()=>{
 const lock=advance(create('warlock','fiend')),held=L.inspect(lock,context(lock)).state.invocations;assert.ok(held.length>=2);
 rejected(forgedReplay(lock,c=>{c.invocation_remove=held[0];c.invocation_add=held[1];}),'invocation_add','invocation_add already known');
 const wiz=advance(create('wizard')),book=L.inspect(wiz,context(wiz)).state.book;
 rejected(forgedReplay(wiz,c=>{c.book_add=[book[0],c.book_add[1]];}),'book_add','book_add already in the spellbook');
 const sorc=advance(create('sorcerer','draconic')),known=L.inspect(sorc,context(sorc)).state.known;
 rejected(forgedReplay(sorc,c=>{c.learn=[known[0]];}),'learn','learn already known');
 const ek=advance(create('fighter'));
 rejected(forgedReplay(ek,c=>{c.third_free=c.third_restricted[0];},{subclass:'eldritch-knight'}),'third_free','third_free repeats a restricted spell');
});
test('artificer infusions name replicated items once and class feature text is spelled in Russian',()=>{
 const c=advance(create('artificer'),undefined,{infusions:['enhanced-defense','mind-sharpener','replicate:bag-of-holding','replicate:strixhaven-pennant']});
 const infusions=extras(c).features.filter(f=>f.name==='Инфузии');
 assert.equal(infusions.length,1);
 assert.match(infusions[0].description,/Копия магического предмета: Сумка хранения/);
 assert.equal(infusions[0].description.split('Копия магического предмета: ').length-1,2);
 assert.doesNotMatch(infusions[0].description,/replicate:/);
 const tinkering=extras(create('artificer')).features.find(f=>f.name==='Умение 1-го уровня').description;
 assert.match(tinkering,/^Магическое мастерство: до /);assert.doesNotMatch(tinkering,/tinkering/);
 assert.match(extras(create('warlock')).features.map(f=>f.description).join(' '),/Воззвания появятся на 2-м уровне/);
});
test('Dark One blessing and other variable temporary hit counts use Russian plural forms',()=>{
 for(const [charisma,phrase] of [[6,'получаете 1 временный хит.'],[8,'получаете 2 временных хита.'],[16,'получаете 6 временных хитов.']]){
  const abilities={strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma};
  const c=advance(advance(create('warlock','fiend',{abilityMethod:'manual',abilities})),null,{pact:'blade'});
  assert.equal(c.level,3);
  const text=extras(c).features.find(f=>f.name==='Благословение тёмного').description;assert.ok(text.includes(phrase),text);
 }
 for(const [charisma,phrase] of [[8,'получаете 1 временный хит.'],[16,'получаете 4 временных хита.']]){const abilities={strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma};assert.ok(extras(create('warlock','fiend',{abilityMethod:'manual',abilities})).features.find(f=>f.name.startsWith('Покровитель')).description.includes(phrase),phrase);}
 assert.deepEqual([0,1,2,4,5,11,12,14,21,22,25,101,111].map(n=>R.ruPlural(n,['хит','хита','хитов'])),['хитов','хит','хита','хита','хитов','хитов','хитов','хитов','хит','хита','хитов','хит','хитов']);
});
test('selection errors use singular and plural Russian forms for option counts',()=>{
 const c=create('artificer'),ctx=context(c),p=L.begin(c,ctx);
 p.choices.infusions=['enhanced-defense','enhanced-defense','mind-sharpener','replicate:bag-of-holding'];
 const messages=L.transition(c,p,ctx).errors.map(e=>e.message);
 assert.ok(messages.some(m=>m.endsWith('Четыре изученные инфузии (активны до двух предметов): выберите 4 различных варианта.')),messages.join(' | '));
 const f=create('fighter',null,{abilityMethod:'manual'});delete f.creation_pack;
 assert.ok(O.validate(f,context(f)).some(e=>e.message==='Набор: выберите 1 вариант.'),JSON.stringify(O.validate(f,context(f))));
});
test('artificer level three infusion swap labels name replicated items, never raw ids',()=>{
 const c=advance(create('artificer'),undefined,{infusions:['enhanced-defense','mind-sharpener','replicate:bag-of-holding','replicate:strixhaven-pennant']});
 const swap=L.getChoices(c,L.begin(c,context(c)),context(c)).find(g=>g.id==='infusion_remove');
 assert.ok(swap);
 const labels=swap.options.map(o=>o.label);
 assert.ok(labels.includes('Копия магического предмета: Сумка хранения'),labels.join(' | '));
 assert.ok(labels.every(l=>!l.includes('replicate:')),labels.join(' | '));
});
test('damaging cantrips become spell attack rows: attack rolls with to-hit, saving throws with a DC, per casting ability',()=>{
 const abilities={strength:10,dexterity:12,constitution:14,intelligence:10,wisdom:16,charisma:14};
 const cleric=create('cleric','life',{abilityMethod:'manual',abilities,creation_cantrips:['sacred-flame','guidance','light']});
 const warlock={'warlock:creation_patron':'fiend','warlock:creation_cantrips':['eldritch-blast','chill-touch']};
 const c=enter(enter(cleric,'warlock',warlock),'warlock',{invocations:['agonizing-blast','repelling-blast']});
 const e=extras(c),by=id=>e.attacks.find(a=>a.id===id),blast=by('cantrip-eldritch-blast'),flame=by('cantrip-sacred-flame'),touch=by('cantrip-chill-touch');
 assert.equal(c.level,3);
 assert.equal(blast.attackBonus,4);assert.equal(blast.damage,'1d10+2');assert.equal(blast.type,'force');assert.equal(blast.ability,'charisma');assert.equal(blast.group,'spell');assert.equal(blast.proficient,true);
 assert.match(blast.notes.join(' '),/Мучительный взрыв/);assert.match(blast.notes.join(' '),/Отталкивающий взрыв/);assert.doesNotMatch(blast.notes.join(' '),/300 футов/);
 assert.equal(touch.attackBonus,4);assert.equal(touch.damage,'1d8');assert.equal(touch.type,'necrotic');
 assert.deepEqual(flame.save,{ability:'dexterity',short:'ЛОВ',dc:13});assert.equal(flame.attackBonus,undefined);assert.equal(flame.damage,'1d8');assert.equal(flame.type,'radiant');assert.equal(flame.ability,'wisdom');
 assert.ok(!e.attacks.some(a=>['cantrip-guidance','cantrip-light'].includes(a.id)));
 const last=e.attacks.findLastIndex(a=>!a.cantrip),first=e.attacks.findIndex(a=>a.cantrip);assert.ok(last>=0&&last<first,'weapon rows come before spell rows');
 assert.equal(new Set(e.attacks.map(a=>a.id)).size,e.attacks.length);
 // Without Agonizing Blast the beam carries no flat bonus; Eldritch Spear only changes the noted range.
 const plain=enter(enter(cleric,'warlock',warlock),'warlock',{invocations:['eldritch-spear','repelling-blast']}),plainBlast=extras(plain).attacks.find(a=>a.id==='cantrip-eldritch-blast');
 assert.equal(plainBlast.damage,'1d10');assert.match(plainBlast.notes.join(' '),/300 футов/);
 // No damaging cantrips -> no rows.
 assert.ok(!extras(create('cleric','life',{creation_cantrips:['guidance','light','mending']})).attacks.some(a=>a.cantrip));
 assert.ok(!extras(create('fighter')).attacks.some(a=>a.cantrip));
});
test('racial and feat cantrips use their own ability; one row per cantrip and ability',()=>{
 const elf=create('wizard',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt',creation_cantrips:['fire-bolt','mage-hand','light']});
 const bolts=extras(elf).attacks.filter(a=>a.cantripId==='fire-bolt');assert.equal(bolts.length,1);assert.equal(bolts[0].ability,'intelligence');assert.equal(bolts[0].attackBonus,5);assert.equal(bolts[0].id,'cantrip-fire-bolt');
 const racial=extras(create('fighter',null,{race:'elf',race_sub:'high_elf',high_elf_cantrip:'fire-bolt'})).attacks.find(a=>a.cantripId==='fire-bolt');assert.equal(racial.ability,'intelligence');
 const initiate=create('wizard',null,{human_feature:'human_alt',creation_feat:'magic-initiate',creation_feat_class:'warlock',creation_feat_cantrips:['eldritch-blast','chill-touch'],creation_feat_spells:['hex'],creation_cantrips:['chill-touch','mage-hand','light']});
 const touches=extras(initiate).attacks.filter(a=>a.cantripId==='chill-touch');assert.deepEqual(touches.map(a=>a.ability).sort(),['charisma','intelligence']);assert.equal(new Set(touches.map(a=>a.id)).size,2);assert.ok(touches.every(a=>/\((Харизма|Интеллект)\)$/.test(a.label)));
 assert.equal(extras(initiate).attacks.filter(a=>a.cantripId==='eldritch-blast').length,1);
});
test('every damaging cantrip of the catalogue has the rules-correct row at levels 1-3',()=>{
 // [id, kind, damage, type, save ability]; a = spell attack, s = saving throw, r = weapon attack with a rider. PHB/XGE/TCE 2014 base dice (no scaling before level 5).
 const table=[['eldritch-blast','a','1d10','force'],['fire-bolt','a','1d10','fire'],['ray-of-frost','a','1d8','cold'],['chill-touch','a','1d8','necrotic'],['produce-flame','a','1d8','fire'],['shocking-grasp','a','1d8','lightning'],['thorn-whip','a','1d6','piercing'],['primal-savagery','a','1d10','acid'],['magic-stone','a','1d6+3','bludgeoning'],
  ['sacred-flame','s','1d8','radiant','dexterity'],['acid-splash','s','1d6','acid','dexterity'],['poison-spray','s','1d12','poison','constitution'],['vicious-mockery','s','1d4','psychic','wisdom'],['toll-the-dead','s','1d8','necrotic','wisdom'],['word-of-radiance','s','1d6','radiant','constitution'],['mind-sliver','s','1d6','psychic','intelligence'],['frostbite','s','1d6','cold','constitution'],['infestation','s','1d6','poison','constitution'],['thunderclap','s','1d6','thunder','constitution'],['create-bonfire','s','1d8','fire','dexterity'],['sword-burst','s','1d6','force','dexterity'],['lightning-lure','s','1d8','lightning','strength'],
  ['booming-blade','r','1d8','thunder'],['green-flame-blade','r','3','fire']];
 const branch={cleric:'life',sorcerer:'draconic',warlock:'fiend'};
 for(const [id,kind,damage,type,save] of table){
  const cls=['wizard','druid','cleric','sorcerer','warlock','bard'].find(x=>D.spells[id].classes.includes(x));assert.ok(cls,id);
  const base=create(cls,branch[cls]),c={...base,creation_cantrips:[id,...base.creation_cantrips.filter(x=>x!==id)].slice(0,base.creation_cantrips.length)};
  assert.deepEqual(O.validate(c,context(c)),[],id);
  const row=extras(c).attacks.find(a=>a.cantripId===id);assert.ok(row,id);assert.equal(row.damage,damage,id);assert.equal(row.type,type,id);assert.equal(row.group,'spell',id);assert.equal(row.proficient,true,id);assert.ok(row.damageTypeText,id);
  if(kind==='a')assert.equal(row.attackBonus,5,id);else assert.equal(row.attackBonus,undefined,id);
  if(kind==='s'){assert.equal(row.save.ability,save,id);assert.equal(row.save.dc,13,id);}else assert.equal(row.save,undefined,id);
  assert.equal(!!row.weaponRider,kind==='r',id);assert.ok(row.notes.length,id);
 }
});
test('Shillelagh adds a spellcasting-ability d8 variant of a held club or quarterstaff',()=>{
 const druid=create('druid','land',{abilityMethod:'manual',abilities:{strength:10,dexterity:12,constitution:14,intelligence:10,wisdom:16,charisma:10},creation_cantrips:['shillelagh','produce-flame'],creation_weapon:'club'}),e=extras(druid);
 const plain=e.attacks.find(a=>a.id==='club'),magic=e.attacks.find(a=>a.id==='club-shillelagh');
 assert.equal(plain.ability,'strength');assert.equal(magic.ability,'wisdom');assert.equal(magic.attackBonus,5);assert.equal(magic.damage,'1d8+3');assert.equal(magic.type,'bludgeoning');assert.ok(!magic.cantrip);
 assert.ok(e.attacks.indexOf(magic)<e.attacks.findIndex(a=>a.cantrip));
 const staffless=create('druid','land',{creation_cantrips:['shillelagh','produce-flame'],creation_weapon:'scimitar',creation_shield_weapon:'dagger'});assert.ok(!extras(staffless).attacks.some(a=>a.shillelagh));
});
test('cantrip rows: Create Bonfire note lists the real triggers; Spell Sniper doubles range and ignores cover; Eldritch Spear replaces the range',()=>{
 const warlock=(feat,invocations)=>{let c=create('warlock',null,{human_feature:'human_alt',creation_feat:'spell-sniper',creation_feat_class:feat,creation_feat_cantrips:[feat==='druid'?'produce-flame':feat==='sorcerer'?'fire-bolt':'chill-touch'],creation_cantrips:['eldritch-blast','chill-touch']});return invocations?advance(c,null,{invocations}):c;};
 const row=(c,id)=>extras(c).attacks.find(a=>a.id===id),notes=a=>a.notes.join(' ');
 // Create Bonfire: the cast-time save hits creatures in the cube, and so does a creature that first enters it or ENDS its turn there (not at the start); concentration, unattended flammable objects.
 const wizard=create('wizard',null,{creation_cantrips:['create-bonfire','mage-hand','light']}),bonfire=row(wizard,'cantrip-create-bonfire');
 assert.match(notes(bonfire),/спасбросок при сотворении — существам в кубе, а также существу, которое впервые за ход входит в куб или заканчивает в нём ход/);assert.match(notes(bonfire),/концентрация/);assert.match(notes(bonfire),/горючие предметы/);assert.doesNotMatch(notes(bonfire),/в начале/);
 // Without the feat: ordinary ranges and no feat note anywhere.
 const human=create('warlock',null,{creation_cantrips:['eldritch-blast','chill-touch']});
 assert.ok(!extras(human).attacks.some(a=>/Меткие заклинания|240 футов/.test(a.notes.join(' '))),'no feat, no feat notes');
 assert.match(notes(row(human,'cantrip-eldritch-blast')),/на 120 футов/);
 // Spell Sniper: every ranged attack-roll row doubles a numeric range and ignores half/three-quarters cover.
 const sniper=warlock('sorcerer'),blast=row(sniper,'cantrip-eldritch-blast'),bolt=row(sniper,'cantrip-fire-bolt'),touch=row(sniper,'cantrip-chill-touch');
 for(const a of [blast,bolt,touch]){assert.match(notes(a),/на 240 футов/,a.id);assert.match(notes(a),/Меткие заклинания: дальность удвоена — 240 футов; игнорирует укрытие наполовину и на три четверти/,a.id);assert.doesNotMatch(notes(a),/120 футов/,a.id);}
 // Self/touch-range spells keep their range but still ignore cover when the attack is ranged; melee-touch rows get no feat note.
 const druid=create('warlock',null,{human_feature:'human_alt',creation_feat:'spell-sniper',creation_feat_class:'druid',creation_feat_cantrips:['produce-flame'],creation_cantrips:['eldritch-blast','chill-touch']}),flame=row(druid,'cantrip-produce-flame');
 assert.match(notes(flame),/на 30 футов/);assert.match(notes(flame),/игнорирует укрытие наполовину и на три четверти \(дальность заклинания «на себя» не удваивается\)/);
 // Magic Stone is a Touch-range spell: the sniper note names «касание», not «на себя».
 const stone=create('warlock',null,{human_feature:'human_alt',creation_feat:'spell-sniper',creation_feat_class:'druid',creation_feat_cantrips:['magic-stone'],creation_cantrips:['eldritch-blast','chill-touch']}),rock=row(stone,'cantrip-magic-stone');
 assert.match(notes(rock),/дальность заклинания «касание» не удваивается/);assert.doesNotMatch(notes(rock),/«на себя»/);assert.match(notes(rock),/камешек бросают или выпускают из пращи/);assert.doesNotMatch(notes(rock),/брошенным камнем|на три камня/);
 const whip=create('warlock',null,{human_feature:'human_alt',creation_feat:'spell-sniper',creation_feat_class:'druid',creation_feat_cantrips:['thorn-whip'],creation_cantrips:['eldritch-blast','chill-touch']}),thorn=row(whip,'cantrip-thorn-whip');
 assert.match(notes(thorn),/досягаемость 60 футов/);assert.match(notes(thorn),/подтягивается до 10 футов к вам/);assert.doesNotMatch(notes(thorn),/укрытие/);
 const grasp=create('warlock',null,{human_feature:'human_alt',creation_feat:'spell-sniper',creation_feat_class:'sorcerer',creation_feat_cantrips:['shocking-grasp'],creation_cantrips:['eldritch-blast','chill-touch']});
 assert.doesNotMatch(notes(row(grasp,'cantrip-shocking-grasp')),/Меткие заклинания/);
 // Saving-throw rows are not attack-roll spells: the feat does not touch them.
 const sorc=create('sorcerer','draconic',{human_feature:'human_alt',creation_feat:'spell-sniper',creation_feat_class:'sorcerer',creation_feat_cantrips:['fire-bolt'],creation_cantrips:['acid-splash','poison-spray','light','mage-hand']});
 assert.doesNotMatch(notes(row(sorc,'cantrip-acid-splash')),/Меткие заклинания/);
 // Eldritch Spear replaces the 120-foot range with 300 (600 with Spell Sniper); there is never a second, contradictory range.
 const spear=row(advance(create('warlock',null,{creation_cantrips:['eldritch-blast','chill-touch']}),null,{invocations:['eldritch-spear','agonizing-blast']}),'cantrip-eldritch-blast');
 assert.match(notes(spear),/на 300 футов \(Мистическое копьё\)/);assert.doesNotMatch(notes(spear),/120 футов|Мистическое копьё: дальность/);assert.equal((notes(spear).match(/\d+ футов/g)||[]).length,1);
 const both=row(warlock('sorcerer',['eldritch-spear','agonizing-blast']),'cantrip-eldritch-blast');
 assert.match(notes(both),/на 600 футов \(Мистическое копьё\)/);assert.match(notes(both),/дальность удвоена — 600 футов/);assert.doesNotMatch(notes(both),/\b(120|240|300) футов/);
});
test('cantrip riders: Death Domain Reaper on necromancy cantrips, Lunar Sorcery Moon Fire on Sacred Flame, Green-Flame Blade wording',()=>{
 const notes=a=>a.notes.join(' '),by=(c,id)=>extras(c).attacks.find(a=>a.id===id);
 const death=create('cleric','death',{creation_cantrips:['toll-the-dead','sacred-flame','guidance']});
 // Chill Touch is the Reaper's free necromancy cantrip; both necromancy rows carry the two-target rider, the evocation row does not.
 for(const id of ['cantrip-chill-touch','cantrip-toll-the-dead'])assert.match(notes(by(death,id)),/Жнец \(домен Смерти\): заговор некромантии с одной целью можно применить к двум существам в пределах дистанции и в 5 футах друг от друга/,id);
 assert.doesNotMatch(notes(by(death,'cantrip-sacred-flame')),/Жнец/);
 for(const id of ['chill-touch','toll-the-dead','sapping-sting'])assert.equal(D.spells[id].school,'N',id);
 for(const id of ['infestation','sacred-flame','mind-sliver','poison-spray'])assert.notEqual(D.spells[id].school,'N',id);
 const life=create('cleric','life',{creation_cantrips:['toll-the-dead','sacred-flame','guidance']});assert.doesNotMatch(notes(by(life,'cantrip-toll-the-dead')),/Жнец/);
 const lunar=create('sorcerer','lunar'),flame=by(lunar,'cantrip-sacred-flame');
 assert.match(notes(flame),/Лунный огонь: одна цель или два существа в пределах дистанции и в 5 футах друг от друга/);
 assert.doesNotMatch(notes(by(create('cleric','life',{creation_cantrips:['sacred-flame','guidance','light']}),'cantrip-sacred-flame')),/Лунный огонь/);
 // Green-Flame Blade: the cantrip itself is a weapon attack, the modifier damage goes to the second creature.
 const gfb=by(create('wizard',null,{creation_cantrips:['green-flame-blade','mage-hand','light']}),'cantrip-green-flame-blade');
 assert.equal(gfb.damage,'3');assert.equal(gfb.riderText,'второй цели');assert.equal(gfb.weaponRider,true);assert.match(notes(gfb),/основной цели дополнительного урона нет, а другое существо в пределах 5 футов от неё получает урон огнём, равный модификатору/);
});
test('Shillelagh on a monk quarterstaff names the Dexterity it keeps; equal modifiers say не хуже and drop the inherited two-handed note',()=>{
 const monk=(dexterity,wisdom)=>create('monk',null,{abilityMethod:'manual',abilities:{strength:10,dexterity,constitution:14,intelligence:10,wisdom,charisma:10},human_feature:'human_alt',creation_feat:'magic-initiate',creation_feat_class:'druid',creation_feat_cantrips:['shillelagh','produce-flame'],creation_cantrips:[],creation_weapon:'quarterstaff'});
 // DEX 16 (+3) beats WIS 14 (+2): Martial Arts puts the quarterstaff on Dexterity, so the magic row keeps it and the note names Ловкость, never Сила.
 const c=extras(monk(16,14)),plain=c.attacks.find(a=>a.id==='quarterstaff'),magic=c.attacks.find(a=>a.id==='quarterstaff-shillelagh'),note=magic.notes.join(' ');
 assert.equal(magic.ability,'dexterity');assert.equal(magic.attackBonus,plain.attackBonus);assert.equal(magic.damage,'1d8+3');
 assert.match(note,/^Заговор «Дубинка»: /);assert.match(note,/вместо Ловкости/);assert.match(note,/здесь Ловкость не хуже, поэтому она сохранена/);assert.doesNotMatch(note,/Сила/);
 assert.doesNotMatch(note,/Двумя руками/);assert.match(plain.notes.join(' '),/Двумя руками: 1d8\./);
 // Equal modifiers (DEX 14 = WIS 14 = +2): the spellcasting ability is taken and the note says не хуже, not так выгоднее.
 const tie=extras(monk(14,14)).attacks.find(a=>a.id==='quarterstaff-shillelagh');
 assert.equal(tie.ability,'wisdom');assert.equal(tie.damage,'1d8+2');assert.match(tie.notes.join(' '),/ — не хуже \(Мудрость\)/);assert.doesNotMatch(tie.notes.join(' '),/так выгоднее/);
});
test('Shillelagh takes the better of Strength and the spellcasting ability and keeps the weapon bonuses',()=>{
 const druid=(strength,wisdom,weapon='club')=>create('druid','land',{abilityMethod:'manual',abilities:{strength,dexterity:12,constitution:14,intelligence:10,wisdom,charisma:10},creation_cantrips:['shillelagh','produce-flame'],creation_weapon:weapon});
 // Strength 16 vs Wisdom 13: Strength is better, so the magic club stays on Strength (+1 better-than-wisdom is irrelevant); only the die becomes d8.
 const strong=extras(druid(16,13)),plainStrong=strong.attacks.find(a=>a.id==='club'),magicStrong=strong.attacks.find(a=>a.id==='club-shillelagh');
 assert.equal(magicStrong.ability,'strength');assert.equal(magicStrong.attackBonus,plainStrong.attackBonus);assert.equal(magicStrong.damage,'1d8+3');assert.equal(magicStrong.damageBonus,plainStrong.damageBonus);assert.match(magicStrong.notes.join(' '),/можно использовать базовую характеристику заклинаний вместо Силы/);assert.match(magicStrong.notes.join(' '),/Сила не хуже/);
 // Strength 10 vs Wisdom 16: Wisdom.
 const weak=extras(druid(10,16)),magicWeak=weak.attacks.find(a=>a.id==='club-shillelagh');
 assert.equal(magicWeak.ability,'wisdom');assert.equal(magicWeak.attackBonus,weak.attacks.find(a=>a.id==='club').attackBonus+3);assert.equal(magicWeak.damage,'1d8+3');assert.match(magicWeak.notes.join(' '),/так выгоднее \(Мудрость\)/);
 // Equal modifiers: no shift either way; a Wisdom penalty never lowers the magic weapon below the plain one.
 const low=extras(druid(14,8)),magicLow=low.attacks.find(a=>a.id==='club-shillelagh');assert.equal(magicLow.ability,'strength');assert.equal(magicLow.damage,'1d8+2');
 const equal=extras(druid(14,14)).attacks.find(a=>a.id==='club-shillelagh');assert.equal(equal.damage,'1d8+2');assert.match(equal.notes.join(' '),/ — не хуже \(Мудрость\)/);assert.doesNotMatch(equal.notes.join(' '),/так выгоднее/);
 // Dueling carry-over: a paladin with Dueling who multiclasses into druid keeps the +2 on both the plain and the magic club.
 for(const [strength,wisdom,ability] of [[13,16,"wisdom"],[16,13,"strength"]]){
  const base=create("paladin",null,{abilityMethod:"manual",abilities:{strength,dexterity:12,constitution:14,intelligence:10,wisdom,charisma:14},creation_secondary:"club"}),c=enter(advance(base,null,{style:"dueling"}),"druid",{"druid:creation_cantrips":["shillelagh","produce-flame"]}),rows=extras(c).attacks,plain=rows.find(a=>a.id==="club"),magic=rows.find(a=>a.id==="club-shillelagh");
  assert.equal(magic.ability,ability);assert.ok(plain.notes.some(n=>/Дуэлянт/.test(n))&&magic.notes.some(n=>/Дуэлянт/.test(n)));
  assert.equal(magic.damageBonus,plain.damageBonus+(ability==="wisdom"?stats(c).modifiers.wisdom-stats(c).modifiers.strength:0));assert.match(magic.damage,/^1d8+/);
 }
});
