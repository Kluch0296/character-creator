/* Exact legacy beast profiles with concise Russian mechanics; no 2024 sources.
 * Standalone: node docs/enrich-companions.cjs; also used by the catalogue rebuild. */
const fs=require('node:fs'),path=require('node:path');
const base='https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/';
const clone=x=>JSON.parse(JSON.stringify(x));
function resolveMonster(x,all,seen=new Set()){
 if(!x)throw new Error('Missing exact legacy monster');if(!x._copy)return clone(x);
 const key=x.name+'|'+x.source;if(seen.has(key))throw new Error('Cyclic copy: '+key);seen.add(key);
 const result={...resolveMonster(all.find(y=>y.name===x._copy.name&&y.source===x._copy.source),all,seen),...clone(x)};
 for(const [field,mods] of Object.entries(x._copy._mod||{}))for(const m of [].concat(mods)){
  if(m.mode==='replaceTxt')result[field]=JSON.parse(JSON.stringify(result[field]).replace(new RegExp(m.replace,m.flags||'g'),m.with));
  else if(m.mode==='appendArr')result[field]=[...(result[field]||[]),...[].concat(m.items)];
  else if(m.mode==='prependArr')result[field]=[...[].concat(m.items),...(result[field]||[])];
  else if(m.mode==='replaceArr'){const i=result[field].findIndex(v=>v.name===m.replace);if(i<0)throw new Error('Missing copy entry');result[field].splice(i,1,...[].concat(m.items));}
  else throw new Error('Unsupported copy modifier: '+key+' '+m.mode);
 }
 delete result._copy;return result;
}
const traits={
 'Quickness {@recharge 5}':'Проворство (перезарядка 5–6): Уклонение бонусным действием.',
 Escape:'Бегство: в свой ход Рывок, Отход или Засада бонусным действием.',
 'Water Breathing':'Дышит только под водой.',
 'Sure-Footed':'Устойчивость: преимущество спасбросков СИЛ и ЛОВ против сбивания с ног.',
 'Pack Tactics':'Тактика стаи: преимущество атаки по существу, если в 5 футах от него есть союзник зверя, который не недееспособен.',
 Echolocation:'Эхолокация: при глухоте слепое зрение не работает.',
 'Relentless (Recharges after a Short or Long Rest)':'Стойкость (короткий или долгий отдых): если урон не более 7 снизил бы хиты до 0, остаётся 1 хит.',
 Amphibious:'Дышит воздухом и водой.',
 Flyby:'Облёт: полёт из досягаемости врага не провоцирует его атак.',
 'Spider Climb':'Паучье лазание: сложные поверхности и потолок без проверки характеристики.',
 'Web Sense':'Чувство паутины: касаясь паутины, знает точное положение других касающихся её существ.',
 'Web Walker':'Хождение по паутине: паутина не ограничивает перемещение.',
 'Beast of Burden':'Вьючный зверь: при расчёте грузоподъёмности размер считается Большим.',
 'Underwater Camouflage':'Подводный камуфляж: преимущество Скрытности под водой.',
 Pounce:'Наскок: после 20 футов движения прямо к существу попадание когтем требует спасбросок СИЛ Сл 12; провал — цель ничком. По лежащей цели можно бонусным действием атаковать укусом.',
 'Blood Frenzy':'Кровавое безумие: преимущество рукопашных атак по существу с неполными хитами.',
 Mimicry:'Подражание услышанным простым звукам; проверка Проницательности Сл 10 распознаёт имитацию.',
 'Telepathic Shroud':'Телепатическая защита: иммунитет к чтению мыслей, определению эмоций и всем заклинаниям школы Прорицания.',
 Familiar:'С разрешения Мастера может быть призван Поиском фамильяра.',
 Leap:'Прыжок: потратьте всё перемещение на прыжок до 60 футов горизонтально или вертикально, если скорость не менее 30 футов.'
};
const names={Bite:'Укус',Beak:'Клюв',Ram:'Таран',Tusk:'Клык',Claws:'Когти',Claw:'Клешня',Talons:'Когти',Tail:'Хвост',Hooves:'Копыта',Tentacles:'Щупальца',Sting:'Жало',Gore:'Рога',Slam:'Удар',Horn:'Рог','Blood Drain':'Кровососание'};
const types={piercing:'колющий',slashing:'рубящий',bludgeoning:'дробящий',poison:'яд',acid:'кислота'};
const extras={
 'giant-crab':{Claw:'Цель захвачена (высвобождение Сл 11); две клешни, каждая удерживает одну цель.'},
 'giant-frog':{Bite:'Цель захвачена (высвобождение Сл 11) и опутана до конца захвата; новую цель кусать нельзя.'},
 mastiff:{Bite:'Существо: спасбросок СИЛ Сл 11; провал — ничком.'},
 wolf:{Bite:'Существо: спасбросок СИЛ Сл 11; провал — ничком.'},
 octopus:{Tentacles:'Цель захвачена (высвобождение Сл 10); новую цель щупальцами атаковать нельзя.'},
 stirge:{'Blood Drain':'Прикрепляется к цели и больше не атакует. В начале каждого своего хода цель теряет 1к4 + 3 хита от кровопотери (это не бросок урона, БМ не добавляется). Отцепление стоит 5 футов перемещения; отцепляется после потери целью 10 хитов крови или её смерти. Любое существо может действием снять кровопийцу.'},
 guthash:{Bite:'Существо: спасбросок ТЕЛ Сл 10; провал — болезнь до излечения. Хиты восстанавливаются только магией, максимум хитов уменьшается на 1к6 каждые 24 часа; максимум 0 — смерть.'},
 'deep-roth':{Gore:'После 20 футов движения прямо к цели непосредственно перед попаданием дополнительно 2к6 колющего урона.'},
 dolphin:{Slam:'После 30 футов движения прямо к цели непосредственно перед попаданием дополнительно 1к6 дробящего урона.'}
};
function traitSummary(t,id){
 if(t.name==='Hold Breath')return 'Задержка дыхания: '+t.entries.join(' ').match(/for (\d+ \w+)/)[1].replace('minutes','минут').replace('hour','час')+'.';
 if(t.name.startsWith('Keen ')){const senses=t.entries.join(' ').match(/rely on ([^.]+)/)[1];return 'Острые чувства: преимущество Внимательности ('+senses.replace('hearing','слух').replace('sight','зрение').replace('smell','обоняние').replace('or','или')+').';}
 if(t.name==='Standing Leap'){const n=t.entries.join(' ').match(/\d+/g);return `Прыжок с места: в длину ${n[0]} футов, в высоту ${n[1]} футов; разбег не требуется.`;}
 if(t.name==='Illumination')return id==='cranium-rat'?'Свечение: бонусным действием включить или погасить тусклый свет мозга в 5 футах.':'Свечение: яркий свет 10 футов и ещё 10 футов тусклого света.';
 if(t.name==='Charge'){const text=t.entries.join(' '),dc=text.match(/\{@dc (\d+)}/)[1],dice=text.match(/\{@damage ([^}]+)}/)[1].replace('d','к');return `Разбег: после 20 футов прямо к цели и попадания тараном/клыком в этот ход дополнительно ${dice} ${id==='boar'?'рубящего':'дробящего'} урона; существо при провале спасброска СИЛ Сл ${dc} падает ничком.`;}
 if(!traits[t.name])throw new Error('Untranslated trait '+id+': '+t.name);return traits[t.name];
}
function actionProfile(a,id){
 if(a.name==='Multiattack')return {name:'Мультиатака',text:'Один укус и одна атака когтями. В PHB команда Атака до 11-го уровня следопыта не разрешает Мультиатаку.'};
 if(a.name.startsWith('Ink Cloud'))return {name:'Чернильное облако',text:'Под водой: радиус 5 футов, сильно заслонённая область на 1 минуту; сильное течение рассеивает её. После выпуска — Рывок бонусным действием. Восстановление: короткий или долгий отдых.'};
 if(a.name==='Swallow')return {name:'Проглатывание',text:'Укус по захваченной Маленькой или меньшей цели; попадание — проглатывание вместо захвата (одна цель). Цель ослеплена, опутана и имеет полное укрытие от внешних эффектов.',ongoing:{dice:'2d4',type:'кислота'},after:'В начале каждого хода лягушки. После смерти лягушки цель больше не опутана и может за 5 футов перемещения выйти из трупа ничком.'};
 const text=a.entries.join(' '),hit=text.match(/\{@hit (-?\d+)}/),reach=text.match(/reach (\d+) ft/);
 if(!hit||!reach)throw new Error('Unparsed attack '+id+': '+a.name);
 if(!names[a.name]&&!a.name.startsWith('Sticky Leg'))throw new Error('Unknown attack name '+id+': '+a.name);
 const attack={name:a.name==='Claw'&&id!=='crab'&&id!=='giant-crab'?'Коготь':names[a.name]||'Липкая лапа',hit:Number(hit[1]),reach:Number(reach[1]),target:a.name.startsWith('Sticky Leg')?'одно Маленькое или Крошечное существо':/one creature/.test(text)?'одно существо':'одна цель'};
 const main=text.match(/\{@h}(\d+)(?: \(\{@damage ([^}]+)}\))? (piercing|slashing|bludgeoning) damage/);
 if(main)attack.damage={...(main[2]?{dice:main[2]}:{fixed:Number(main[1])}),type:types[main[3]]};
 else if(!a.name.startsWith('Sticky Leg'))throw new Error('Unparsed damage '+id);
 const dc=text.match(/\{@dc (\d+)}/),secondary=[...text.matchAll(/\{@damage ([^}]+)}\) (poison|acid) damage/g)];
 if(secondary.length)attack.secondary={dice:secondary[0][1],type:types[secondary[0][2]],...(dc?{dc:Number(dc[1]),save:'ТЕЛ',half:text.includes('half as much')}:{})};
 attack.text=a.name.startsWith('Sticky Leg')?'Цель захвачена и приклеена к лапе (высвобождение Сл 12). Перезарядка, когда стидер никого не держит.':extras[id]?.[a.name]||'';
 if(['giant-centipede','giant-wolf-spider'].includes(id))attack.text+=(attack.text?' ':'')+'Если яд снизил хиты цели до 0, она стабильна, отравлена на 1 час даже после лечения и парализована, пока действует это отравление.';
 return attack;
}
function profile(c,all){
 const x=resolveMonster(all.find(x=>x.name===c.name&&x.source===c.source),all);
 const p={source:x.source,page:x.page,dataUrl:base+'bestiary/bestiary-'+x.source.toLowerCase()+'.json',size:x.size[0],ac:typeof x.ac[0]==='number'?x.ac[0]:x.ac[0].ac,hp:x.hp.average,hitDice:x.hp.formula,abilities:Object.fromEntries(['str','dex','con','int','wis','cha'].map(k=>[k,x[k]])),speed:x.speed,skills:x.skill||{},saves:x.save||{},senses:x.senses||[],passive:x.passive,languages:x.languages||[],traits:(x.trait||[]).map(t=>traitSummary(t,c.id)),actions:(x.action||[]).map(a=>actionProfile(a,c.id))};
 if(x.spellcasting){if(c.id!=='deep-roth')throw new Error('Unknown companion spellcasting');p.traits.push('Пляшущие огоньки: неограниченно, без компонентов, заклинательная характеристика МУД.');}
 return p;
}
async function enrich(companions,get=async p=>{const r=await fetch(base+p);if(!r.ok)throw new Error(p+': '+r.status);return r.json();}){
 const index=await get('bestiary/index.json'),all=[];for(const s of new Set(['MM',...companions.map(c=>c.source)]))all.push(...(await get('bestiary/'+index[s])).monster);
 for(const c of companions)c.profile=profile(c,all);return companions;
}
module.exports={enrich,profile,resolveMonster,actionProfile};
if(require.main===module)(async()=>{const dest=path.join(__dirname,'..','levelup-data.js'),d=require(dest);await enrich(d.companions);fs.writeFileSync(dest,'/* Published-source allowlist: docs/levelup-audit.md. Factual metadata and paraphrased companion mechanics. */\n(function(root,factory){const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;else root.LevelUpData=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){return '+JSON.stringify(d,null,2)+';});\n');console.log('Enriched '+d.companions.length+' exact legacy companions.');})().catch(e=>{console.error(e);process.exitCode=1;});
