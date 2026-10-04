const assert=require('node:assert/strict');
const R=require('../../rules'),O=require('../../creation-options'),L=require('../../levelup-rules');
const copy=x=>JSON.parse(JSON.stringify(x));
function context(c){const seed=O.derive(c);const abilities=R.finalAbilities(c,seed);const baseExtras=O.derive(c,{abilities});return {abilities,baseExtras,proficiencies:R.resolveProficiencies(c,baseExtras)};}
function create(cls,branch,overrides={},pinnedChoices=new Set(Object.keys(overrides))){const c={level:1,class:cls,race:'human',human_feature:'human_stats',background:'sage',name:'Сохранённый герой',abilities:Object.fromEntries(R.ABILITIES.map(id=>[id,16])),proficiencyChoices:{},...overrides};if(branch&&['cleric','sorcerer','warlock'].includes(cls))c[{cleric:'creation_domain',sorcerer:'creation_origin',warlock:'creation_patron'}[cls]]=branch;
 for(let pass=0;pass<9;pass++){
  const ctx=context(c);for(const g of O.getChoices(c,ctx)){if(pinnedChoices.has(g.id))continue;const selected=Array.isArray(c[g.id])?c[g.id]:c[g.id]?[c[g.id]]:[];if(selected.length!==g.count||selected.some(id=>!g.options.some(o=>o.value===id)))c[g.id]=g.count===1?g.options[0]?.value:g.options.slice(0,g.count).map(x=>x.value);}
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
function advance(c,branch,choices={}){let p=L.begin(c,context(c));if(L.subclasses(c.class).find(x=>x.level===p.to)&&branch)choices={...choices,subclass:branch};fill(c,p,choices);assert.deepEqual(L.transition(c,p,context(c)).errors,[],c.class+':'+branch+':'+p.to);return L.commit(c,p,context(c));}
function enter(c,id,pinned={}){return L.commit(c,fill(c,L.selectClass(c,L.begin(c,context(c)),id,context(c)),pinned),context(c));}
function extras(c){const ctx=context(c);return L.derive(c,ctx,ctx.baseExtras);}
function stats(c){return R.derivedStats(c,extras(c));}
module.exports={copy,context,create,fill,advance,enter,extras,stats};
