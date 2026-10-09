const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),cp=require('node:child_process');
const {directory,readSources,hash,json,serialize}=require('../docs/catalogue-sources.cjs');
const {generate,build,check}=require('../docs/build-levelup-catalogue.cjs');
const {refresh,parseTranslations}=require('../docs/update-catalogue-sources.cjs');
const repo=path.join(__dirname,'..'),revision='b9061583536101068b3a59d27e886d1fa664e366';
function temp(t){const dir=fs.mkdtempSync(path.join(os.tmpdir(),'catalogue-test-'));t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));return dir;}
function copySources(t){const dir=path.join(temp(t),'sources');fs.cpSync(directory,dir,{recursive:true});return dir;}
function fingerprint(dir){return Object.fromEntries(fs.readdirSync(dir).sort().map(name=>[name,hash(fs.readFileSync(path.join(dir,name)))]));}
function fixtureFetcher({failAt,brokenIndex=false,unknownTrait=false,malformedCard}={}){
 const responses=new Map(),requests=[];
 const fetcher=async url=>{
  requests.push(url);if(requests.length===failAt)return new Response('fixture failure',{status:503});
  let body;
  if(url.includes('5e14.dnd.su')){
   const category=url.split('/')[4];
   body=category==='spells'?(brokenIndex?'invalid HTML':'<script>window.LIST = '+JSON.stringify({cards:[{title_en:'Fixture Spell',title:'Тестовая магия',link:'/spells/1-fixture/',level:0,...malformedCard}]})+';</script>'):`<div data-search="Тест,Fixture ${category}"><a href="/${category}/1-fixture/">link</a></div>`;
  }else{
   const name=url.split('/data/')[1];let data;
   if(name.startsWith('class/'))data=name==='class/class-barbarian.json'?{subclass:[{name:'Fixture Path',shortName:'Fixture',source:'PHB',subclassFeatures:['feature|barbarian|PHB|Fixture|PHB|3']}],classFeature:[{name:'Fixture Feature',source:'PHB',classSource:'PHB',level:1}]}:{};
   else if(name==='spells/index.json')data={PHB:'spells-phb.json',UA:'must-not-fetch.json'};
   else if(name==='generated/gendata-spell-source-lookup.json')data={phb:{'fixture spell':{class:{PHB:{Wizard:true}}}}};
   else if(name==='spells/spells-phb.json')data={spell:[{name:'Fixture Spell',source:'PHB',level:0,school:'V',duration:[]}]};
   else if(name==='optionalfeatures.json')data={optionalfeature:[]};
   else if(name==='items.json')data={item:[]};
   else if(name==='bestiary/index.json')data={MM:'bestiary-mm.json'};
   else if(name==='bestiary/bestiary-mm.json')data={monster:[{name:'Fixture Beast',source:'MM',page:1,type:'beast',cr:'0',size:['T'],ac:[10],hp:{average:2,formula:'1d4'},str:1,dex:1,con:1,int:1,wis:1,cha:1,speed:{walk:20},passive:10,...(unknownTrait?{trait:[{name:'Unknown Fixture Trait'}]}:{})}]};
   else throw new Error('Unexpected request: '+url);
   body=JSON.stringify(data);
  }
  responses.set(url,hash(Buffer.from(body)));return new Response(body);
 };
 return {fetcher,requests,responses};
}
function assertActiveManifest(source,data){
 const {manifest}=source;assert.match(manifest.upstreamRevision,/^[0-9a-f]{40}$/);assert.equal(manifest.auditDate,data.audit.date);assert.equal(manifest.auditDate,source.translations.auditDate);
 assert.ok(['legacy-catalogue-metadata','live-index-metadata'].includes(manifest.translationOrigin.kind));
 if(manifest.translationOrigin.kind==='legacy-catalogue-metadata')assert.match(manifest.translationOrigin.repositoryCommit,/^[0-9a-f]{40}$/);
 const upstreamPrefix='https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/'+manifest.upstreamRevision+'/data/',rawInputs=[];
 for(const raw of manifest.rawResponses){
  assert.match(raw.sha256,/^[0-9a-f]{64}$/);
  if(raw.url.startsWith(upstreamPrefix))rawInputs.push(raw.url.slice(upstreamPrefix.length));
  else{assert.equal(manifest.translationOrigin.kind,'live-index-metadata');assert.match(raw.url,/^https:\/\/5e14\.dnd\.su\/piece\/(spells|bestiary|items)\/index-list\/$/);}
 }
 assert.deepEqual(rawInputs.sort(),[...manifest.requiredInputs].sort());
}
test('catalogue exactly regenerates offline across working directories against active sources',async t=>{
 const dir=temp(t),expected=fs.readFileSync(path.join(repo,'levelup-data.js')),source=readSources(),data=await generate();
 assertActiveManifest(source,data);assert.deepEqual(data,require('../levelup-data.js'));
 for(const [i,cwd] of [repo,dir].entries()){
  const dest=path.join(dir,'build-'+i+'.js');
  const script="globalThis.fetch=()=>{throw new Error('Network forbidden')};require("+JSON.stringify(path.join(repo,'docs/build-levelup-catalogue.cjs'))+").build({dest:"+JSON.stringify(dest)+"}).catch(e=>{console.error(e);process.exitCode=1})";
  const result=cp.spawnSync(process.execPath,['-e',script],{cwd,encoding:'utf8'});assert.equal(result.status,0,result.stderr);assert.deepEqual(fs.readFileSync(dest),expected);
 }
 assert.equal(expected.includes(13),false);

});
test('companion enrichment standalone uses verified sources offline',t=>{
 const dir=temp(t);fs.cpSync(path.join(repo,'docs'),path.join(dir,'docs'),{recursive:true});fs.copyFileSync(path.join(repo,'levelup-data.js'),path.join(dir,'levelup-data.js'));
 const expected=fs.readFileSync(path.join(dir,'levelup-data.js'));
 const script="globalThis.fetch=()=>{throw new Error('Network forbidden')};process.argv[1]="+JSON.stringify(path.join(dir,'docs/enrich-companions.cjs'))+";require('node:module').runMain();";
 const result=cp.spawnSync(process.execPath,['-e',script],{cwd:os.tmpdir(),encoding:'utf8'});assert.equal(result.status,0,result.stderr);assert.deepEqual(fs.readFileSync(path.join(dir,'levelup-data.js')),expected);
});
test('edited output check fails without repairing any artifacts',async t=>{
 const dir=temp(t),dest=path.join(dir,'catalogue.js'),before=fingerprint(directory);fs.writeFileSync(dest,'edited catalogue\n');
 await assert.rejects(check({dest}),/catalogue:build/);assert.equal(fs.readFileSync(dest,'utf8'),'edited catalogue\n');assert.deepEqual(fingerprint(directory),before);
});
test('missing or corrupt snapshots fail before build/check can mutate output',async t=>{
 for(const mode of ['missing','corrupt']){
  const dir=copySources(t),dest=path.join(temp(t),'catalogue.js');fs.writeFileSync(dest,'preserve me\n');
  const file=path.join(dir,'upstream.json');if(mode==='missing')fs.unlinkSync(file);else fs.appendFileSync(file,' ');
  const before=fingerprint(dir);
  await assert.rejects(async()=>build({dest,sourceSet:readSources(dir)}),/Missing catalogue source|integrity mismatch/);
  await assert.rejects(async()=>check({dest,sourceSet:readSources(dir)}),/Missing catalogue source|integrity mismatch/);
  assert.equal(fs.readFileSync(dest,'utf8'),'preserve me\n');assert.deepEqual(fingerprint(dir),before);
 }
});
test('changed projected source affects output and a reviewed lock exposes stale catalogue',async t=>{
 const dir=path.join(temp(t),'sources'),fixture=fixtureFetcher();await refresh({dir,revision,date:'2026-10-09',fetcher:fixture.fetcher});
 const dest=path.join(temp(t),'catalogue.js'),original=await build({dest,sourceSet:readSources(dir)}),name=path.join(dir,'upstream.json'),input=JSON.parse(fs.readFileSync(name));
 assert.equal(original.features[0].name,'Fixture Feature');
 input['class/class-barbarian.json'].classFeature[0].name='Changed Fixture Feature';fs.writeFileSync(name,json(input));
 assert.throws(()=>readSources(dir),/integrity mismatch/);
 const manifest=JSON.parse(fs.readFileSync(path.join(dir,'manifest.json')));manifest.payloads['upstream.json'].sha256=hash(fs.readFileSync(name));fs.writeFileSync(path.join(dir,'manifest.json'),json(manifest));
 const sourceSet=readSources(dir),generated=await generate({sourceSet});assert.equal(generated.features[0].name,'Changed Fixture Feature');
 assert.notDeepEqual(generated.features,original.features);assert.notEqual(serialize(generated),serialize(original));
 await assert.rejects(check({dest,sourceSet}),/catalogue:build/);
 await build({dest,sourceSet});assert.equal(fs.readFileSync(dest,'utf8'),serialize(generated));
});

test('explicit refresh locks actual responses, projected payloads, SHA and refreshed audit date',async t=>{
 const dir=path.join(temp(t),'sources'),fixture=fixtureFetcher(),manifest=await refresh({dir,revision,date:'2026-10-09',fetcher:fixture.fetcher});
 const source=readSources(dir),data=await generate({sourceSet:source});assert.equal(data.audit.date,'2026-10-09');assert.equal(data.features[0].name,'Fixture Feature');assert.equal(data.spells['fixture-spell'].label,'Тестовая магия');assert.equal(data.companions[0].profile.dataUrl,'https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/'+revision+'/data/bestiary/bestiary-mm.json');
 assert.equal(manifest.translationOrigin.kind,'live-index-metadata');
 for(const raw of manifest.rawResponses)assert.equal(raw.sha256,fixture.responses.get(raw.url));
 for(const [name,meta] of Object.entries(manifest.payloads))assert.equal(meta.sha256,hash(fs.readFileSync(path.join(dir,name))));
 assert.ok(fixture.requests.every(url=>url.includes('5e14.dnd.su')||url.includes('/'+revision+'/data/')));assert.ok(!fixture.requests.some(url=>url.includes('must-not-fetch')));
 assert.equal(fixture.requests.filter(url=>url.includes('/piece/spells/')).length,1);
});
test('mutable refs and invalid arguments reject before network; failed refresh preserves prior set',async t=>{
 const dir=copySources(t),before=fingerprint(dir);
 for(const candidate of ['main','b906158','refs/heads/main','B9061583536101068B3A59D27E886D1FA664E366']){
  const fixture=fixtureFetcher();await assert.rejects(refresh({dir,revision:candidate,date:'2026-10-09',fetcher:fixture.fetcher}),/immutable full/);assert.equal(fixture.requests.length,0);
 }
 for(const date of ['yesterday','2026-02-30']){const fixture=fixtureFetcher();await assert.rejects(refresh({dir,revision,date,fetcher:fixture.fetcher}),/valid YYYY/);assert.equal(fixture.requests.length,0);}
 for(const options of [{failAt:2},{brokenIndex:true},{unknownTrait:true}]){
  const fixture=fixtureFetcher(options);await assert.rejects(refresh({dir,revision,date:'2026-10-09',fetcher:fixture.fetcher}));assert.deepEqual(fingerprint(dir),before);assert.ok(readSources(dir));assert.deepEqual(fs.readdirSync(path.dirname(dir)),['sources']);
 }
});
test('unsupported translation indices reject rather than erase labels',()=>{
 assert.throws(()=>parseTranslations({spells:'<script>window.LIST = {"cards":[]};</script>'},'2026-10-09'),/Empty spell/);
});
test('standalone companion enrichment rejects missing/corrupt sources before changing catalogue',t=>{
 for(const mode of ['missing','corrupt']){
  const dir=temp(t);fs.cpSync(path.join(repo,'docs'),path.join(dir,'docs'),{recursive:true});fs.copyFileSync(path.join(repo,'levelup-data.js'),path.join(dir,'levelup-data.js'));
  const dest=path.join(dir,'levelup-data.js'),before=fs.readFileSync(dest),sourceDir=path.join(dir,'docs/catalogue-sources'),input=path.join(sourceDir,'translations.json');
  if(mode==='missing')fs.unlinkSync(input);else fs.appendFileSync(input,' ');
  const sourceBefore=fingerprint(sourceDir),script="globalThis.fetch=()=>{throw new Error('Network forbidden')};process.argv[1]="+JSON.stringify(path.join(dir,'docs/enrich-companions.cjs'))+";require('node:module').runMain();";
  const result=cp.spawnSync(process.execPath,['-e',script],{cwd:os.tmpdir(),encoding:'utf8'});assert.equal(result.status,1);assert.match(result.stderr,/Missing catalogue source|integrity mismatch/);assert.deepEqual(fs.readFileSync(dest),before);assert.deepEqual(fingerprint(sourceDir),sourceBefore);
 }
});
test('manifest required inputs detect missing projection even with reviewed payload checksum',t=>{
 const dir=copySources(t),file=path.join(dir,'upstream.json'),input=JSON.parse(fs.readFileSync(file));delete input['class/class-barbarian.json'];fs.writeFileSync(file,json(input));
 const manifest=JSON.parse(fs.readFileSync(path.join(dir,'manifest.json')));manifest.payloads['upstream.json'].sha256=hash(fs.readFileSync(file));fs.writeFileSync(path.join(dir,'manifest.json'),json(manifest));
 assert.throws(()=>readSources(dir),/Missing projected catalogue input: class\/class-barbarian.json/);
});
test('refreshed snapshots and artifact pass offline CLI check and active regeneration test',async t=>{
 const dir=temp(t),newRevision='1'.repeat(40),fixture=fixtureFetcher();fs.cpSync(path.join(repo,'docs'),path.join(dir,'docs'),{recursive:true});
 await refresh({dir:path.join(dir,'docs/catalogue-sources'),revision:newRevision,date:'2026-10-10',fetcher:fixture.fetcher});
 const sourceSet=readSources(path.join(dir,'docs/catalogue-sources')),data=await build({dest:path.join(dir,'levelup-data.js'),sourceSet});assertActiveManifest(sourceSet,data);
 fs.mkdirSync(path.join(dir,'test'));fs.copyFileSync(__filename,path.join(dir,'test/catalogue-reproducibility.test.js'));
 const script="globalThis.fetch=()=>{throw new Error('Network forbidden')};process.argv=["+JSON.stringify(process.execPath)+","+JSON.stringify(path.join(dir,'docs/build-levelup-catalogue.cjs'))+",'--check'];require('node:module').runMain();";
 const checked=cp.spawnSync(process.execPath,['-e',script],{cwd:os.tmpdir(),encoding:'utf8'});assert.equal(checked.status,0,checked.stderr);
 const tested=cp.spawnSync(process.execPath,['--test','--test-name-pattern=catalogue exactly regenerates offline',path.join(dir,'test/catalogue-reproducibility.test.js')],{cwd:os.tmpdir(),encoding:'utf8'});assert.equal(tested.status,0,tested.stdout+tested.stderr);
});
test('incomplete spell card refresh rejects before replacing the previous whole snapshot set',async t=>{
 const dir=copySources(t),before=fingerprint(dir);
 for(const malformedCard of [{title:undefined},{link:undefined},{title_en:undefined},{title:' '},{link:'https://example.com/spells/1'},{level:undefined}]){
  const fixture=fixtureFetcher({malformedCard});await assert.rejects(refresh({dir,revision,date:'2026-10-09',fetcher:fixture.fetcher}),/Invalid spell card metadata/);
  assert.deepEqual(fingerprint(dir),before);assert.ok(readSources(dir));assert.deepEqual(fs.readdirSync(path.dirname(dir)),['sources']);
 }
});
