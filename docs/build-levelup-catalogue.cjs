/* Rebuild factual legacy catalogue; excludes rule prose, UA, partner and 2024 data. */
const fs = require('node:fs');
const path = require('node:path');
const base = 'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/';
const sources = ['PHB','DMG','SCAG','XGE','TCE','EGW','GGR','ERLW','VRGR','FTD','SCC','DSotDQ','BGG','BMT','AAG','AI','LLK','IDRotF','AitFR-AVT','SatO'];
const classes = ['barbarian','bard','cleric','druid','fighter','monk','paladin','ranger','rogue','sorcerer','warlock','wizard','artificer'];
const pages = {barbarian:'87-barbarian',bard:'88-bard',cleric:'89-cleric',druid:'90-druid',fighter:'91-fighter',monk:'93-monk',paladin:'94-paladin',ranger:'97-ranger',rogue:'99-rogue',sorcerer:'101-sorcerer',warlock:'104-warlock',wizard:'105-wizard',artificer:'137-artificer'};
const slug = s => s.toLowerCase().replace(/['’]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const alias = s => slug(s).replace('purple-dragon-knight-banneret','banneret');
const get = async p => {const r=await fetch(base+p);if(!r.ok) throw new Error(p+': '+r.status);return r.json();};
const resolveCopy=(x,all)=>x._copy?{...resolveCopy(all.find(y=>y.name===x._copy.name&&y.source===x._copy.source)||{},all),...x}:x;
(async()=>{
 const data={edition:'2014',sources,subclasses:[],features:[],spells:{},options:[],references:pages};
 const rawClasses=await Promise.all(classes.map(c=>get('class/class-'+c+'.json')));
 for(let i=0;i<classes.length;i++) {
  const cls=classes[i],raw=rawClasses[i],seen=new Set();
  for(const unres of raw.subclass||[]) {
   const x=resolveCopy(unres,raw.subclass);if(!sources.includes(x.source)||x.edition==='one'||seen.has(x.name+'|'+x.source))continue;
   seen.add(x.name+'|'+x.source);
   const levels=(x.subclassFeatures||[]).map(v=>Number((typeof v==='string'?v:v.subclassFeature||'').split('|').at(-1))).filter(Number.isFinite);
   data.subclasses.push({id:alias(x.shortName||x.name),name:x.name,class:cls,source:x.source,level:Math.min(...levels.filter(n=>n>0)),url:'https://5e14.dnd.su/class/'+pages[cls]+'/',additionalSpells:x.additionalSpells||[],proficiencies:x.skillProficiencies||[],restrictions:x.source==='DMG'?'Опция для злодейских персонажей DMG: требуется разрешение Мастера.':x.name==='Bladesinging'&&x.source==='SCAG'?'SCAG: эльф/полуэльф; изменение ограничения решает Мастер.':x.name==='Path of the Battlerager'?'SCAG: дварф; изменение ограничения решает Мастер.':x.source==='EGW'?'Сеттинг Wildemount; магия дюнамантии требует разрешения Мастера.':['GGR','ERLW','DSotDQ'].includes(x.source)?'Сеттинговая опция: согласуйте с Мастером.':''});
  }
  for(const x of [...raw.classFeature||[],...raw.subclassFeature||[]]) if(x.level<=3&&sources.includes(x.source)&&x.classSource===(cls==='artificer'?'TCE':'PHB')&&!x.isClassFeatureVariant) data.features.push({id:alias(x.name),name:x.name,class:cls,source:x.source,level:x.level,subclass:x.subclassShortName?alias(x.subclassShortName):null,url:'https://5e14.dnd.su/class/'+pages[cls]+'/'});
 }
 const lookup=await get('generated/gendata-spell-source-lookup.json');
 const index=await get('spells/index.json');
 for(const [source,file] of Object.entries(index)) {
  if(!sources.includes(source))continue;
  for(const x of (await get('spells/'+file)).spell||[]) {
   if(x.level>2)continue;
   const id=slug(x.name),record=lookup[x.source.toLowerCase()]?.[x.name.toLowerCase()]||{},classMap=record.class||{},variants=record.classVariant||{};
   const eligible=[...new Set(Object.entries(classMap).filter(([s])=>['PHB','TCE'].includes(s)).flatMap(([,v])=>Object.keys(v).map(s=>s.toLowerCase())))];
   const optionalClasses=[];
   for(const [classSource,entries]of Object.entries(variants))if(['PHB','TCE'].includes(classSource))for(const [className,meta]of Object.entries(entries)) {
    if((meta.definedInSources||[]).includes(x.source))eligible.push(className.toLowerCase());
    else if((meta.definedInSources||[]).includes('TCE'))optionalClasses.push(className.toLowerCase());
   }
   if(data.spells[id]&&source!=='TCE')continue;
   data.spells[id]={id,name:x.name,source:x.source,level:x.level,school:x.school,classes:[...new Set(eligible)],optionalClasses,ritual:!!x.meta?.ritual,concentration:(x.duration||[]).some(d=>d.concentration),time:x.time?.[0],range:x.range?.distance,components:x.components,restrictions:x.source==='EGW'?'Дюнамантия: разрешение Мастера; вне традиции список не расширяется автоматически.':''};
  }
 }
 const optional=await get('optionalfeatures.json');
 for(const x of optional.optionalfeature||[]) if(sources.includes(x.source)) data.options.push({id:slug(x.name),name:x.name,source:x.source,types:x.featureType||[],prerequisite:x.prerequisite||[],additionalSpells:x.additionalSpells||[]});
 const itemSources=[...sources,'MM','VGM','MTF','MPMM','WBtW','CM','JttRC','DoSI','CoS','SKT','ToA','WDH','WDMM','BGDiA','GoS','OotA','HotDQ','RoT','LMoP','TftYP','PotA','MOT','RMR','DIP','SLW','SDW','DC'];
 const items=await get('items.json');data.replicaItems=[...new Set(['alchemy-jug','bag-of-holding','cap-of-water-breathing','goggles-of-night','rope-of-climbing','sending-stones','wand-of-magic-detection','wand-of-secrets',...(items.item||[]).filter(x=>x.rarity==='common'&&itemSources.includes(x.source)&&!['P','SC'].includes((x.type||'').split('|')[0])).map(x=>slug(x.name))])];
 const beastIndex=await get('bestiary/index.json'),companions=[];
 for(const source of itemSources)if(beastIndex[source])for(const x of (await get('bestiary/'+beastIndex[source])).monster||[]){const type=typeof x.type==='string'?x.type:x.type?.type;const cr=typeof x.cr==='string'?x.cr:x.cr?.cr;const n=cr?.includes('/')?Number(cr.split('/')[0])/Number(cr.split('/')[1]):Number(cr);if(type==='beast'&&!x.type?.swarmSize&&!/^swarm of /i.test(x.name)&&n<=0.25&&x.size?.every(s=>['T','S','M'].includes(s)))companions.push({id:slug(x.name),name:x.name,source:x.source,cr});}
 data.companions=[...new Map(companions.map(x=>[x.id,x])).values()];
 // Read only names/links from the primary Russian indices, never rule prose.
 data.labels={};data.referenceLinks={};
 for(const category of ['spells','bestiary','items']){
  const response=await fetch('https://5e14.dnd.su/piece/'+category+'/index-list/');if(!response.ok)throw new Error('dnd.su '+category+': '+response.status);const html=await response.text();
  if(category==='spells'){
   const matched=html.match(/window\.LIST\s*=\s*(\{[\s\S]*\})\s*;?\s*<\/script>/);if(!matched)throw new Error('Unsupported spell index');
   for(const x of JSON.parse(matched[1]).cards||[]){const id=slug(x.title_en||'');if(data.spells[id]){data.spells[id].label=x.title;data.spells[id].url='https://5e14.dnd.su'+x.link;data.labels[id]=x.title;data.referenceLinks[id]='https://5e14.dnd.su'+x.link;}}
  }else{
   for(const match of html.matchAll(/data-search=['"]([^'"<>]+)['"][\s\S]*?<a[^>]+href=['"]([^'"]+)['"]/g)){const [ru,en]=match[1].split(',');const id=slug(en||'');if(id){data.labels[id]=ru.trim();data.referenceLinks[id]='https://5e14.dnd.su'+match[2];}}
  }
 }
 for(const x of data.companions){const lookup=slug(x.name.normalize('NFKD').replace(/[\u0300-\u036f]/g,''));x.label=data.labels[x.id]||data.labels[lookup]||x.name;x.url=data.referenceLinks[x.id]||data.referenceLinks[lookup]||'https://5e14.dnd.su/bestiary/';if(x.label!==x.name){data.labels[x.id]=x.label;data.referenceLinks[x.id]=x.url;}}
 const html=await (await fetch('https://5e14.dnd.su/piece/spells/index-list/')).text();
 const indexData=JSON.parse(html.match(/window\.LIST = ([\s\S]*);<\/script>/)[1]);
 for(const card of indexData.cards){const s=data.spells[slug(card.title_en)];if(s){s.label=card.title;s.url='https://5e14.dnd.su'+card.link;}}
 data.audit={date:'2026-10-03',primary:'https://5e14.dnd.su/spells/',unmatchedOfficialLowSpells:indexData.cards.filter(c=>Number(c.level)<=2&&!data.spells[slug(c.title_en)]).map(c=>c.title_en)};
 const dest=path.join(__dirname,'..','levelup-data.js');
 fs.writeFileSync(dest,'/* Published-source allowlist: docs/levelup-audit.md. Factual metadata only. */\n(function(root,factory){const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;else root.LevelUpData=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){return '+JSON.stringify(data,null,2)+';});\n');
 console.log(JSON.stringify({subclasses:data.subclasses.length,spells:Object.keys(data.spells).length,options:data.options.length}));
})().catch(e=>{console.error(e);process.exitCode=1;});
