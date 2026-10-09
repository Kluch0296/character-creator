/* Deliberate network source update. Ordinary build/check never imports fetch here. */
const fs=require('node:fs'),path=require('node:path');
const {sources,classes,itemSources,isCompanion,slug}=require('./catalogue-policy.cjs');
const {directory,repository,hash,json,readSources,validateRevision}=require('./catalogue-sources.cjs');
const pick=(x,keys)=>Object.fromEntries(keys.filter(k=>Object.hasOwn(x,k)).map(k=>[k,x[k]]));
function validateDate(date){if(!/^\d{4}-\d{2}-\d{2}$/.test(date||'')||new Date(date+'T00:00:00Z').toISOString().slice(0,10)!==date)throw new Error('Source update requires a valid YYYY-MM-DD audit date');}
function parseTranslations(indices,date){
 const labels={},referenceLinks={};let spellCards;
 for(const category of ['spells','bestiary','items']){
  const html=indices[category];
  if(category==='spells'){
   const match=html.match(/window\.LIST\s*=\s*(\{[\s\S]*\})\s*;?\s*<\/script>/);if(!match)throw new Error('Unsupported spell index');
   spellCards=JSON.parse(match[1]).cards;if(!Array.isArray(spellCards)||!spellCards.length)throw new Error('Empty spell index');
   for(const [i,card] of spellCards.entries()){
    if(!card||typeof card.title_en!=='string'||!slug(card.title_en)||typeof card.title!=='string'||!card.title.trim()||typeof card.link!=='string'||!/^\/spells\/[^\s]+$/.test(card.link)||!['number','string'].includes(typeof card.level)||String(card.level).trim()===''||!Number.isInteger(Number(card.level))||Number(card.level)<0||Number(card.level)>9)throw new Error('Invalid spell card metadata: '+(card?.title_en||i));
   }
   // Spell labels are applied by the generator only to eligible catalogue spells.
  }else{
   let count=0;for(const match of html.matchAll(/data-search=['"]([^'"<>]+)['"][\s\S]*?<a[^>]+href=['"]([^'"]+)['"]/g)){
    const [ru,en]=match[1].split(','),id=slug(en||'');if(id){labels[id]=ru.trim();referenceLinks[id]='https://5e14.dnd.su'+match[2];count++;}
   }if(!count)throw new Error('Unsupported or empty '+category+' index');
  }
 }
 // Historical generation added only catalogue spells to the general label map.
 // Build adds labels for the selected spells before overlaying beasts/items.
 return {labels,referenceLinks,spellCards:spellCards.map(c=>pick(c,['title_en','title','link','level'])),auditDate:date};
}
function projectSubclass(x){
 const out=pick(x,['name','shortName','source','edition','subclassFeatures','additionalSpells','skillProficiencies']);
 if(x._copy)out._copy=pick(x._copy,['name','source']);return out;
}
function projectSpell(x){
 const out=pick(x,['name','source','level','school','components']);
 if(x.meta)out.meta=pick(x.meta,['ritual']);
 if(x.duration)out.duration=x.duration.filter(d=>d.concentration).map(d=>pick(d,['concentration']));
 if(x.time)out.time=x.time.slice(0,1);
 if(x.range)out.range=pick(x.range,['distance']);return out;
}
function projectLookup(x){
 const out={};
 if(x.class)out.class=Object.fromEntries(Object.entries(x.class).filter(([s])=>['PHB','TCE'].includes(s)).map(([s,entries])=>[s,Object.fromEntries(Object.keys(entries).map(name=>[name,{}]))]));
 if(x.classVariant)out.classVariant=Object.fromEntries(Object.entries(x.classVariant).filter(([s])=>['PHB','TCE'].includes(s)).map(([s,entries])=>[s,Object.fromEntries(Object.entries(entries).map(([name,meta])=>[name,pick(meta,['definedInSources'])]))]));
 return out;
}
function parserMonster(x){
 const out=pick(x,['name','source','page','type','cr','size','ac','hp','str','dex','con','int','wis','cha','speed','skill','save','senses','passive','languages']);
 if(x.trait)out.trait=x.trait.map(t=>{
  const text=(t.entries||[]).join(' ');let fragment;
  if(t.name==='Hold Breath')fragment=text.match(/for \d+ \w+/)?.[0];
  else if(t.name.startsWith('Keen ')){const match=text.match(/rely on [^.]+/);if(match)fragment=match[0]+'.';}
  else if(t.name==='Standing Leap')fragment=(text.match(/\d+/g)||[]).slice(0,2).join(' ');
  else if(t.name==='Charge')fragment=[text.match(/\{@dc \d+}/)?.[0],text.match(/\{@damage [^}]+}/)?.[0]].join(' ');
  return {name:t.name,...(fragment?{entries:[fragment]}:{})};
 });
 if(x.action)out.action=x.action.map(a=>{
  if(a.name==='Multiattack'||a.name==='Swallow'||a.name.startsWith('Ink Cloud'))return {name:a.name};
  const text=a.entries.join(' '),fragments=[];
  for(const re of [/\{@hit -?\d+}/g,/reach \d+ ft/g,/one creature/g,/\{@h}\d+(?: \(\{@damage [^}]+}\))? (?:piercing|slashing|bludgeoning) damage/g,/\{@damage [^}]+}\) (?:poison|acid) damage/g,/\{@dc \d+}/g,/half as much/g])fragments.push(...[...text.matchAll(re)].map(m=>m[0]));
  return {name:a.name,entries:[fragments.join('; ')]};
 });
 if(x.spellcasting)out.spellcasting=true;
 return out;
}
async function collect(revision,fetcher){
 const upstream={},responses=[],raw=new Map(),base=repository+revision+'/data/';
 async function request(url){const response=await fetcher(url);if(!response.ok)throw new Error(url+': '+response.status);const bytes=Buffer.from(await response.arrayBuffer());responses.push({url,sha256:hash(bytes)});return bytes.toString('utf8');}
 async function get(name){if(!raw.has(name))raw.set(name,JSON.parse(await request(base+name)));return raw.get(name);}
 for(const cls of classes){
  const name='class/class-'+cls+'.json',data=await get(name),subclasses=data.subclass||[],selected=new Set();
  function include(x){if(!x||selected.has(x))return;selected.add(x);if(x._copy)include(subclasses.find(y=>y.name===x._copy.name&&y.source===x._copy.source));}
  for(const x of subclasses)if(sources.includes(x.source)&&x.edition!=='one')include(x);
  upstream[name]={subclass:subclasses.filter(x=>selected.has(x)).map(projectSubclass),
   classFeature:(data.classFeature||[]).filter(x=>x.level<=3&&sources.includes(x.source)&&x.classSource===(cls==='artificer'?'TCE':'PHB')&&!x.isClassFeatureVariant).map(x=>pick(x,['name','source','level','classSource','subclassShortName'])),
   subclassFeature:(data.subclassFeature||[]).filter(x=>x.level<=3&&sources.includes(x.source)&&x.classSource===(cls==='artificer'?'TCE':'PHB')&&!x.isClassFeatureVariant).map(x=>pick(x,['name','source','level','classSource','subclassShortName']))};
 }
 const lookup=await get('generated/gendata-spell-source-lookup.json'),spellIndex=await get('spells/index.json'),projectedLookup={};
 upstream['spells/index.json']=Object.fromEntries(Object.entries(spellIndex).filter(([source])=>sources.includes(source)));
 for(const file of Object.values(upstream['spells/index.json'])){
  const name='spells/'+file,data=await get(name),spells=(data.spell||[]).filter(x=>x.level<=2);
  upstream[name]={spell:spells.map(projectSpell)};
  for(const spell of spells){const source=spell.source.toLowerCase(),name=spell.name.toLowerCase();projectedLookup[source]??={};projectedLookup[source][name]=projectLookup(lookup[source]?.[name]||{});}
 }
 upstream['generated/gendata-spell-source-lookup.json']=projectedLookup;
 upstream['optionalfeatures.json']={optionalfeature:((await get('optionalfeatures.json')).optionalfeature||[]).filter(x=>sources.includes(x.source)).map(x=>pick(x,['name','source','featureType','prerequisite','additionalSpells']))};
 upstream['items.json']={item:((await get('items.json')).item||[]).filter(x=>x.rarity==='common'&&itemSources.includes(x.source)&&!['P','SC'].includes((x.type||'').split('|')[0])).map(x=>pick(x,['name','source','rarity','type']))};
 const beastIndex=await get('bestiary/index.json');
 upstream['bestiary/index.json']=Object.fromEntries(Object.entries(beastIndex).filter(([source])=>itemSources.includes(source)));
 const all=[];for(const file of Object.values(upstream['bestiary/index.json']))all.push(...((await get('bestiary/'+file)).monster||[]));
 const {resolveMonster}=require('./enrich-companions.cjs');
 for(const file of Object.values(upstream['bestiary/index.json'])){
  // Select from original entries before resolving copies; inherited eligibility must not add choices.
  const selected=((await get('bestiary/'+file)).monster||[]).filter(isCompanion);
  upstream['bestiary/'+file]={monster:selected.map(x=>parserMonster(resolveMonster(x,all)))};
 }
 return {upstream,responses,request};
}
async function refresh({revision,date,dir=directory,fetcher=globalThis.fetch,legacy}){
 validateRevision(revision);validateDate(date);if(typeof fetcher!=='function')throw new Error('Network fetch is unavailable for explicit update');
 const {upstream,responses,request}=await collect(revision,fetcher);
 let translations,translationOrigin;
 if(legacy){translations={...legacy.metadata,auditDate:legacy.metadata.auditDate};translationOrigin={kind:'legacy-catalogue-metadata',repositoryCommit:legacy.commit,path:'levelup-data.js',note:'Committed labels, links and audit metadata only; historical dnd.su HTML was not recovered.'};}
 else{
  const indices={};for(const category of ['spells','bestiary','items'])indices[category]=await request('https://5e14.dnd.su/piece/'+category+'/index-list/');
  translations=parseTranslations(indices,date);translationOrigin={kind:'live-index-metadata',retrievedAt:new Date().toISOString(),categories:['spells','bestiary','items']};
 }
 const payloads={'upstream.json':json(upstream),'translations.json':json(translations)};
 const manifest={version:1,upstreamRevision:revision,auditDate:translations.auditDate,upstreamOrigin:{repository:'https://github.com/5etools-mirror-3/5etools-src',retrievedAt:new Date().toISOString()},translationOrigin,rawResponses:responses,requiredInputs:Object.keys(upstream),payloads:Object.fromEntries(Object.entries(payloads).map(([name,text])=>[name,{sha256:hash(Buffer.from(text))}]))};
 const parent=path.dirname(dir);fs.mkdirSync(parent,{recursive:true});const stage=fs.mkdtempSync(path.join(parent,'.catalogue-stage-')),backup=stage+'-previous';let moved=false;
 try{
  for(const [name,text] of Object.entries(payloads))fs.writeFileSync(path.join(stage,name),text);
  fs.writeFileSync(path.join(stage,'manifest.json'),json(manifest));
  await require('./build-levelup-catalogue.cjs').generate({sourceSet:readSources(stage)});
  if(fs.existsSync(dir)){fs.renameSync(dir,backup);moved=true;}
  try{fs.renameSync(stage,dir);}catch(e){if(moved)fs.renameSync(backup,dir);throw e;}
  if(moved)fs.rmSync(backup,{recursive:true,force:true});
 }finally{fs.rmSync(stage,{recursive:true,force:true});}
 return manifest;
}
module.exports={refresh,collect,parseTranslations,parserMonster,projectSubclass,projectSpell,projectLookup,validateDate};
if(require.main===module){
 const args=process.argv.slice(2);
 if(args.length!==4||args[0]!=='--revision'||args[2]!=='--date'){console.error('Usage: node docs/update-catalogue-sources.cjs --revision FULL_SHA --date YYYY-MM-DD');process.exitCode=1;}
 else refresh({revision:args[1],date:args[3]}).then(m=>console.log('Updated catalogue snapshots at '+m.upstreamRevision+'; regenerate and review with npm run catalogue:build.')).catch(e=>{console.error(e.message);process.exitCode=1;});
}