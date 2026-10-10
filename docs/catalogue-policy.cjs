// Shared selection policy for source projection and catalogue generation.
const sources=['PHB','DMG','SCAG','XGE','TCE','EGW','GGR','ERLW','VRGR','FTD','SCC','DSotDQ','BGG','BMT','AAG','AI','LLK','IDRotF','AitFR-AVT','SatO'];
const classes=['barbarian','bard','cleric','druid','fighter','monk','paladin','ranger','rogue','sorcerer','warlock','wizard','artificer'];
const itemSources=[...sources,'MM','VGM','MTF','MPMM','WBtW','CM','JttRC','DoSI','CoS','SKT','ToA','WDH','WDMM','BGDiA','GoS','OotA','HotDQ','RoT','LMoP','TftYP','PotA','MOT','RMR','DIP','SLW','SDW','DC'];
const isCompanion=x=>{const type=typeof x.type==='string'?x.type:x.type?.type,cr=typeof x.cr==='string'?x.cr:x.cr?.cr;const n=cr?.includes('/')?Number(cr.split('/')[0])/Number(cr.split('/')[1]):Number(cr);return type==='beast'&&!x.type?.swarmSize&&!/^swarm of /i.test(x.name)&&n<=0.25&&x.size?.every(s=>['T','S','M'].includes(s));};
const slug=s=>s.toLowerCase().replace(/['’]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
module.exports={sources,classes,itemSources,isCompanion,slug};