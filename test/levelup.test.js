const test=require('node:test');
const assert=require('node:assert/strict');
const R=require('../rules'),O=require('../creation-options'),L=require('../levelup-rules'),D=require('../levelup-data'),E=require('../lss-export'),S=require('../spell-info');
const copy=x=>JSON.parse(JSON.stringify(x));
function context(c){const seed=O.derive(c);const abilities=R.finalAbilities(c,seed);const baseExtras=O.derive(c,{abilities});return {abilities,baseExtras,proficiencies:R.resolveProficiencies(c,baseExtras)};}
function create(cls,branch){const c={level:1,class:cls,race:'human',human_feature:'human_stats',background:'sage',name:'Сохранённый герой',abilities:Object.fromEntries(R.ABILITIES.map(id=>[id,16])),proficiencyChoices:{}};if(branch&&['cleric','sorcerer','warlock'].includes(cls))c[{cleric:'creation_domain',sorcerer:'creation_origin',warlock:'creation_patron'}[cls]]=branch;
 for(let pass=0;pass<9;pass++){
  const ctx=context(c);for(const g of O.getChoices(c,ctx)){const selected=Array.isArray(c[g.id])?c[g.id]:c[g.id]?[c[g.id]]:[];if(selected.length!==g.count||selected.some(id=>!g.options.some(o=>o.value===id)))c[g.id]=g.count===1?g.options[0]?.value:g.options.slice(0,g.count).map(x=>x.value);}
  const prof=R.resolveProficiencies(c,O.derive(c,context(c)));for(const slot of prof.slots){const chosen=c.proficiencyChoices[slot.id];if(!slot.options.includes(chosen)||prof.errors.some(e=>e.id===slot.id)){const used=[...prof.skills,...prof.tools,...prof.languages];c.proficiencyChoices[slot.id]=slot.options.find(id=>slot.expertise?!prof.expertise.includes(id):!used.includes(id));}}
 }
 assert.deepEqual(O.validate(c,context(c)),[],cls+': creation');assert.deepEqual(R.resolveProficiencies(c,O.derive(c,context(c))).errors,[],cls+': proficiencies');return c;
}
function fill(c,p,pinned={}){
 Object.assign(p.choices,pinned);
 for(let pass=0;pass<10;pass++){
  const groups=L.getChoices(c,p,context(c));const active=new Set(groups.map(g=>g.id));for(const key of Object.keys(p.choices))if(!active.has(key))delete p.choices[key];
  for(const g of groups){if(Object.hasOwn(pinned,g.id))continue;const selected=Array.isArray(p.choices[g.id])?p.choices[g.id]:p.choices[g.id]?[p.choices[g.id]]:[];if(selected.length!==g.count||selected.some(id=>!g.options.some(o=>o.value===id)))p.choices[g.id]=g.count===1?g.options[0]?.value:g.options.slice(0,g.count).map(o=>o.value);}
 }
 return p;
}
function advance(c,branch,choices={}){let p=L.begin(c,context(c));if(L.subclasses(c.class)[0].level===p.to&&branch)choices={...choices,subclass:branch};fill(c,p,choices);assert.deepEqual(L.transition(c,p,context(c)).errors,[],c.class+':'+branch+':'+p.to);return L.commit(c,p,context(c));}
function extras(c){const ctx=context(c);return L.derive(c,ctx,ctx.baseExtras);}
function stats(c){return R.derivedStats(c,extras(c));}
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
module.exports={create,fill,advance,context,extras,stats};
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
 let thrown={...copy(base),creation_style:'thrown-weapon-fighting',creation_secondary:'two-handaxes'};const weapon=extras(thrown).attacks.find(x=>x.properties.includes('thrown'));assert.ok(weapon);assert.equal(weapon.damageBonus,stats(thrown).modifiers[weapon.ability]);assert.equal(weapon.notes.filter(x=>x.includes('+2 к урону')).length,1);thrown=advance(advance(thrown),'champion');assert.equal(extras(thrown).attacks.find(x=>x.id===weapon.id).damageBonus,weapon.damageBonus);
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
