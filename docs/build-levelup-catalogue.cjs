/* Rebuild factual legacy catalogue; excludes rule prose, UA, partner and 2024 data. */
const fs = require('node:fs');
const path = require('node:path');
const {sources,classes,itemSources,slug}=require('./catalogue-policy.cjs');
const {readSources,serialize}=require('./catalogue-sources.cjs');
const pages = {barbarian:'87-barbarian',bard:'88-bard',cleric:'89-cleric',druid:'90-druid',fighter:'91-fighter',monk:'93-monk',paladin:'94-paladin',ranger:'97-ranger',rogue:'99-rogue',sorcerer:'101-sorcerer',warlock:'104-warlock',wizard:'105-wizard',artificer:'137-artificer'};
const alias = s => slug(s).replace('purple-dragon-knight-banneret','banneret');
const resolveCopy=(x,all)=>x._copy?{...resolveCopy(all.find(y=>y.name===x._copy.name&&y.source===x._copy.source)||{},all),...x}:x;
async function generate({sourceSet=readSources()}={}){
 const {get,translations,base}=sourceSet;
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
 const items=await get('items.json');data.replicaItems=[...new Set(['alchemy-jug','bag-of-holding','cap-of-water-breathing','goggles-of-night','rope-of-climbing','sending-stones','wand-of-magic-detection','wand-of-secrets',...(items.item||[]).filter(x=>x.rarity==='common'&&itemSources.includes(x.source)&&!['P','SC'].includes((x.type||'').split('|')[0])).map(x=>slug(x.name))])];
 const beastIndex=await get('bestiary/index.json'),companions=[];
 for(const source of itemSources)if(beastIndex[source])for(const x of (await get('bestiary/'+beastIndex[source])).monster||[]){const type=typeof x.type==='string'?x.type:x.type?.type;const cr=typeof x.cr==='string'?x.cr:x.cr?.cr;const n=cr?.includes('/')?Number(cr.split('/')[0])/Number(cr.split('/')[1]):Number(cr);if(type==='beast'&&!x.type?.swarmSize&&!/^swarm of /i.test(x.name)&&n<=0.25&&x.size?.every(s=>['T','S','M'].includes(s)))companions.push({id:slug(x.name),name:x.name,source:x.source,cr});}
 data.companions=[...new Map(companions.map(x=>[x.id,x])).values()];
 // Translations are metadata snapshots, never live HTML in an ordinary build.
 data.labels=translations.spells?structuredClone(translations.labels):{};data.referenceLinks=translations.spells?structuredClone(translations.referenceLinks):{};
 for(const [id,spell] of Object.entries(data.spells)){
  const label=translations.spells?.[id]||translations.spellCards?.find(c=>slug(c.title_en||'')===id);
  if(label){spell.label=label.label??label.title;spell.url=label.url??'https://5e14.dnd.su'+label.link;if(!translations.spells){data.labels[id]=spell.label;data.referenceLinks[id]=spell.url;}}
 }
 if(!translations.spells){Object.assign(data.labels,translations.labels);Object.assign(data.referenceLinks,translations.referenceLinks);}
 for(const x of data.companions){const lookup=slug(x.name.normalize('NFKD').replace(/[\u0300-\u036f]/g,''));x.label=data.labels[x.id]||data.labels[lookup]||x.name;x.url=data.referenceLinks[x.id]||data.referenceLinks[lookup]||'https://5e14.dnd.su/bestiary/';if(x.label!==x.name){data.labels[x.id]=x.label;data.referenceLinks[x.id]=x.url;}}
 await require('./enrich-companions.cjs').enrich(data.companions,get,base);
 data.audit=translations.audit?structuredClone(translations.audit):{date:translations.auditDate,primary:'https://5e14.dnd.su/spells/',unmatchedOfficialLowSpells:translations.spellCards.filter(c=>Number(c.level)<=2&&!data.spells[slug(c.title_en)]).map(c=>c.title_en)};
 return data;
}
async function build({dest=path.join(__dirname,'..','levelup-data.js'),sourceSet}={}){
 const data=await generate({sourceSet});fs.writeFileSync(dest,serialize(data));return data;
}
async function check({dest=path.join(__dirname,'..','levelup-data.js'),sourceSet}={}){
 const expected=Buffer.from(serialize(await generate({sourceSet}))),actual=fs.readFileSync(dest);
 if(!expected.equals(actual))throw new Error('Catalogue differs from verified sources. Run npm run catalogue:build and review levelup-data.js.');
 return true;
}
module.exports={generate,build,check};
if(require.main===module){
 const args=process.argv.slice(2);
 if(args.length>1||(args.length===1&&args[0]!=='--check')){console.error('Usage: node docs/build-levelup-catalogue.cjs [--check]');process.exitCode=1;}
 else (args[0]==='--check'?check():build()).then(()=>console.log(args[0]==='--check'?'Catalogue integrity and regeneration verified.':'Catalogue rebuilt from verified offline sources.')).catch(e=>{console.error(e.message);process.exitCode=1;});
}
