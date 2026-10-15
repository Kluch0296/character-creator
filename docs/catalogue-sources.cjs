const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const directory=path.join(__dirname,'catalogue-sources');
const repository='https://raw.githubusercontent.com/5etools-mirror-3/5etools-src/';
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
const json=x=>JSON.stringify(x,null,2)+'\n';
function validateRevision(revision){if(!/^[0-9a-f]{40}$/.test(revision||''))throw new Error('Source update requires an immutable full 40-character lowercase commit SHA');}
function readSources(dir=directory){
 let manifest;try{manifest=JSON.parse(fs.readFileSync(path.join(dir,'manifest.json'),'utf8'));}catch(e){throw new Error('Missing or invalid catalogue source manifest: '+e.message);}
 if(manifest.version!==1)throw new Error('Unsupported catalogue snapshot version');validateRevision(manifest.upstreamRevision);
 const files={};for(const name of ['upstream.json','translations.json']){
  const entry=manifest.payloads?.[name];if(!entry||!/^([0-9a-f]{64})$/.test(entry.sha256||''))throw new Error('Missing catalogue source integrity: '+name);
  let bytes;try{bytes=fs.readFileSync(path.join(dir,name));}catch(e){throw new Error('Missing catalogue source '+name+': '+e.message);}
  if(hash(bytes)!==entry.sha256)throw new Error('Catalogue source integrity mismatch: '+name);
  if(bytes.includes(13))throw new Error('Catalogue sources must use LF: '+name);
  try{files[name]=JSON.parse(bytes.toString('utf8'));}catch(e){throw new Error('Invalid catalogue source '+name+': '+e.message);}
 }
 const upstream=files['upstream.json'];
 for(const name of manifest.requiredInputs||[]){if(!Object.hasOwn(upstream,name))throw new Error('Missing projected catalogue input: '+name);}
 if(!manifest.requiredInputs?.length)throw new Error('Missing required catalogue inputs');
 return {manifest,translations:files['translations.json'],get:async name=>{if(!Object.hasOwn(upstream,name))throw new Error('Missing projected catalogue input: '+name);return structuredClone(upstream[name]);},base:repository+manifest.upstreamRevision+'/data/'};
}
const serialize=data=>'/* Published-source allowlist: docs/levelup-audit.md. Factual metadata and paraphrased companion mechanics. */\n(function(root,factory){const api=factory();if(typeof module==="object"&&module.exports)module.exports=api;else root.LevelUpData=api;})(typeof globalThis!=="undefined"?globalThis:this,function(){return '+JSON.stringify(data,null,2)+';});\n';
module.exports={directory,repository,hash,json,readSources,serialize,validateRevision};