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
 const strong=create('warlock','hexblade');assert.ok(!extras(strong).attacks.some(x=>x.hexWarrior));
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
