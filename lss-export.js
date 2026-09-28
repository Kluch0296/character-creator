(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./rules.js') : root.CharacterRules);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.LssExport = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (rules) {
  'use strict';
  const ABILITIES = {strength:'str',dexterity:'dex',constitution:'con',intelligence:'int',wisdom:'wis',charisma:'cha'};
  const ABILITY_NAMES = {strength:'Сила',dexterity:'Ловкость',constitution:'Телосложение',intelligence:'Интеллект',wisdom:'Мудрость',charisma:'Харизма'};
  const SKILLS = {athletics:'str',acrobatics:'dex','sleight of hand':'dex',stealth:'dex',arcana:'int',history:'int',investigation:'int',nature:'int',religion:'int','animal handling':'wis',insight:'wis',medicine:'wis',perception:'wis',survival:'wis',deception:'cha',intimidation:'cha',performance:'cha',persuasion:'cha'};
  const DAMAGE = {bludgeoning:'дробящий',piercing:'колющий',slashing:'рубящий'};
  // IDs read from the native 2014 SRD spell picker (2026-09-26). Non-SRD spells
  // absent from that catalog remain in the sheet text with their source and usage.
  const SPELL_IDS = {
    'acid-splash':'65d3c170f3d820fa1add476e','mage-hand':'65d3c16af3d820fa1add43a8',shillelagh:'65d3c16bf3d820fa1add4442',
    'vicious-mockery':'65d3c16ef3d820fa1add4695',druidcraft:'65d3c16ff3d820fa1add46fe','chill-touch':'65d3c170f3d820fa1add4759',
    'ray-of-frost':'65d3c168f3d820fa1add420b','minor-illusion':'65d3c169f3d820fa1add427b','true-strike':'65d3c174f3d820fa1add4951',
    'eldritch-blast':'65d3c175f3d820fa1add4997','fire-bolt':'65d3c169f3d820fa1add429e','dancing-lights':'65d3c175f3d820fa1add499e',
    mending:'65d3c168f3d820fa1add425f',light:'65d3c173f3d820fa1add4919','sacred-flame':'65d3c169f3d820fa1add42ac',
    message:'65d3c16ff3d820fa1add46f0',resistance:'65d3c172f3d820fa1add488d','produce-flame':'65d3c16bf3d820fa1add4457',
    guidance:'65d3c168f3d820fa1add41ef','spare-the-dying':'65d3c173f3d820fa1add4912',prestidigitation:'65d3c174f3d820fa1add4958',
    thaumaturgy:'65d3c171f3d820fa1add482b','shocking-grasp':'65d3c168f3d820fa1add41f6','poison-spray':'65d3c169f3d820fa1add42d6',
    'hellish-rebuke':'65d3c16cf3d820fa1add44c7','silent-image':'65d3c16af3d820fa1add438c',bless:'65d3c16df3d820fa1add45d1',
    'divine-favor':'65d3c174f3d820fa1add497b',thunderwave:'65d3c16ff3d820fa1add46e9','magic-missile':'65d3c16bf3d820fa1add446c',
    heroism:'65d3c175f3d820fa1add49cf','mage-armor':'65d3c16af3d820fa1add434d','animal-friendship':'65d3c16df3d820fa1add45b5',
    'protection-from-evil-and-good':'65d3c168f3d820fa1add422e','healing-word':'65d3c175f3d820fa1add49b3','cure-wounds':'65d3c172f3d820fa1add4871',
    'disguise-self':'65d3c16af3d820fa1add4377','inflict-wounds':'65d3c16af3d820fa1add42f9','guiding-bolt':'65d3c174f3d820fa1add495f',
    'illusory-script':'65d3c170f3d820fa1add4760','unseen-servant':'65d3c16ff3d820fa1add46aa','detect-poison-and-disease':'65d3c16cf3d820fa1add44ea',
    'detect-evil-and-good':'65d3c168f3d820fa1add4204','detect-magic':'65d3c16ff3d820fa1add4713','burning-hands':'65d3c173f3d820fa1add48cc',
    'faerie-fire':'65d3c16ef3d820fa1add4617',identify:'65d3c16cf3d820fa1add4545',entangle:'65d3c16bf3d820fa1add4426',
    'charm-person':'65d3c16df3d820fa1add45f4','purify-food-and-drink':'65d3c16cf3d820fa1add448f','feather-fall':'65d3c171f3d820fa1add4840',
    'find-familiar':'65d3c176f3d820fa1add49e4','comprehend-languages':'65d3c16cf3d820fa1add454c',bane:'65d3c16bf3d820fa1add441f',
    'expeditious-retreat':'65d3c176f3d820fa1add4a0e',command:'65d3c16af3d820fa1add439a',jump:'65d3c173f3d820fa1add490b',
    'false-life':'65d3c174f3d820fa1add4974','speak-with-animals':'65d3c16ff3d820fa1add4721','color-spray':'65d3c171f3d820fa1add480f',
    alarm:'65d3c172f3d820fa1add485c',grease:'65d3c16af3d820fa1add4393',longstrider:'65d3c16bf3d820fa1add4418',
    'create-or-destroy-water':'65d3c173f3d820fa1add48fd','fog-cloud':'65d3c168f3d820fa1add4212',sanctuary:'65d3c171f3d820fa1add47c9',
    sleep:'65d3c16af3d820fa1add437e',goodberry:'65d3c169f3d820fa1add42cf',shield:'65d3c172f3d820fa1add486a',
    'shield-of-faith':'65d3c172f3d820fa1add48be','pass-without-trace':'65d3c16ef3d820fa1add4672',levitate:'65d3c16ef3d820fa1add464f',
    'animal-messenger':'65d3c16af3d820fa1add43e0','tashas-hideous-laughter':'65d3c176f3d820fa1add49f2','tensers-floating-disk':'65d3c176f3d820fa1add4a31'
  };
  const field = (name, value = '') => ({name,value:value ?? ''});
  const list = value => Array.isArray(value) ? value : [];
  const valueLabel = value => typeof value === 'string' ? value : value?.label || value?.name || value?.id || '';
  const formatBonus = n => `${n >= 0 ? '+' : ''}${n}`;
  // Native LSS rich text is a TipTap document, not an HTML string or a plain textarea.
  function richText(lines) {
    return {value:{data:{type:'doc',content:[...new Set(lines.filter(Boolean).flatMap(line => String(line).split('\n')))].map(text => ({type:'paragraph',...(text ? {content:[{type:'text',text}]} : {})}))}}};
  }
  function proficiencyText(p) {
    return [['Языки','languages'],['Инструменты','tools'],['Оружие','weapons'],['Доспехи','armor'],['Компетентность','expertise']]
      .map(([title,key]) => list(p[key]).length ? `${title}: ${p[key].map(id => rules?.LABELS[id] || id).join(', ')}` : '');
  }
  /** Native LSS v2 export. Inputs are deliberately separate to prevent base scores replacing final scores. */
  function buildLssExport(character, labels = {}, derived = {}, options = {}) {
    const p = derived.proficiencies || {};
    const abilities = derived.abilities || character.abilities || {};
    const infoValues = {charClass:labels.class || character.class, charSubclass:labels.subclass || '', level:character.level || 1,
      background:labels.background || character.background,playerName:character.playerName || '',
      race:[labels.race || character.race, labels.subrace].filter(Boolean).join(' — '),alignment:labels.alignment || character.alignment || '',experience:0};
    const data = {
      jsonType:'character',template:'default',name:{value:(character.name || labels.name || 'Безымянный герой').trim()},
      info:Object.fromEntries(Object.entries(infoValues).map(([name,value]) => [name,field(name,value)])),
      subInfo:Object.fromEntries(['age','height','weight','eyes','skin','hair'].map(name => [name,field(name,character[name])])),
      proficiency:derived.proficiencyBonus || 2,
      stats:Object.fromEntries(Object.entries(ABILITIES).map(([name,short]) => [short,{name:short,score:Number.isFinite(abilities[name]) ? abilities[name] : 10}])),
      saves:Object.fromEntries(Object.entries(ABILITIES).map(([name,short]) => [short,{name:short,isProf:list(p.savingThrows).includes(name)}])),
      skills:Object.fromEntries(Object.entries(SKILLS).map(([name,baseStat]) => {
        const id=name.replaceAll(' ','_');
        return [name,{baseStat,name,isProf:list(p.expertise).includes(id) ? 2 : list(p.skills).includes(id) ? 1 : 0}];
      })),
      vitality:{'hp-dice-current':{value:character.level || 1},'hp-dice-multi':{},darkvision:{value:derived.darkvision || 0},
        'hp-max':{value:derived.hp ?? derived.maxHp ?? 0},'hp-current':{value:derived.hp ?? derived.maxHp ?? 0},'hp-temp':{value:0},
        'hit-die':{value:derived.hitDie ? `d${String(derived.hitDie).replace(/^d/,'')}` : ''},ac:{value:derived.ac ?? derived.armorClass ?? 10},
        speed:{value:derived.speed ?? 30},isDying:false,deathFails:0,deathSuccesses:0},
      spellsInfo:{base:field('base'),save:field('save'),mod:field('mod')},spells:{},spellsPact:{},bonuses:[],
      weaponsList:[],attunementsList:[],text:{},coins:{},resources:{},conditions:[]
    };
    const perception=10+Math.floor((data.stats.wis.score-10)/2)+data.skills.perception.isProf*data.proficiency;
    if(Number.isFinite(derived.passivePerception)&&derived.passivePerception!==perception) data.skills.perception.customPassive=derived.passivePerception;
    const investigation=10+Math.floor((data.stats.int.score-10)/2)+data.skills.investigation.isProf*data.proficiency;
    if(Number.isFinite(derived.passiveInvestigation)&&derived.passiveInvestigation!==investigation) data.skills.investigation.customPassive=derived.passiveInvestigation;
    // Only override initiative when a racial/feat bonus changes the normal DEX calculation.
    const dexMod=Math.floor((data.stats.dex.score-10)/2);
    if(Number.isFinite(derived.initiative) && derived.initiative!==dexMod) data.vitality.initiative={value:derived.initiative};
    data.text.prof=richText(proficiencyText(p));
    data.text.traits=richText([
      ...list(options.features).map(f=>typeof f==='string'?f:`${f.name || f.label}: ${f.description || ''}`),
      ...list(derived.notes),
      derived.darkvision ? `Тёмное зрение: ${derived.darkvision} футов.` : '',
      ...['swim','climb','fly'].filter(k=>derived[k]).map(k=>`${{swim:'Плавание',climb:'Лазание',fly:'Полёт'}[k]}: ${derived[k]} футов.`),
      `Пассивное Восприятие: ${derived.passivePerception ?? 10}.`
    ]);
    data.text.equipment=richText(list(options.equipment).map(item=>typeof item==='string'?item:`${valueLabel(item)}${item.quantity ? ` × ${item.quantity}` : ''}`));
    data.text.background=richText([character.concept,character.backstory,character.personality,character.ideals,character.bonds,character.flaws]);
    data.text.appearance=richText([labels.gender || character.gender,character.appearance]);
    for(const [key,source] of Object.entries({personality:'personality',ideals:'ideals',bonds:'bonds',flaws:'flaws'})) {
      if(character[source]) data.text[key]=richText([character[source]]);
    }
    const attacks=list(options.attacks);
    data.weaponsList=attacks.map((attack,index)=>{
      const id=`weapon-creator-${index}`, ability=ABILITIES[attack.ability] || 'str';
      const base=Math.floor((data.stats[ability].score-10)/2)+(attack.proficient?data.proficiency:0);
      const bonus=(attack.attackBonus ?? base)-base;
      if(bonus) data.bonuses.push({id:`bonus-creator-attack-${index}`,label:'Бонус атаки',target:`weapon.${id}.attack`,expr:String(bonus),source:{kind:'user'}});
      return {id,name:{value:attack.label || attack.name || attack.id},isProf:!!attack.proficient,ability,
        dmg:{value:attack.damage || ''},dmgType:{value:DAMAGE[attack.type] || attack.type || ''},notes:{value:list(attack.notes).join('; ')}};
    });
    const spellLines=list(options.spells).map(spell=>{
      const stat=ABILITIES[spell.ability],modifier=stat?Math.floor((data.stats[stat].score-10)/2):null;
      const castingText=stat?`; ${ABILITY_NAMES[spell.ability]}, Сл ${8+data.proficiency+modifier}, атака ${formatBonus(data.proficiency+modifier)}`:'';
      return `${spell.label || spell.name || spell.id} (${spell.level===0?'заговор':`${spell.level}-й уровень`}; ${spell.source || ''}; ${{cantrip:'заговор',known:'известно',prepared:'подготовлено',spellbook:'книга заклинаний',racial:'расовое',ritual:'ритуал',feat:'черта'}[spell.status] || spell.status || ''}${castingText})${spell.usage?` — ${spell.usage}`:''}${SPELL_IDS[spell.id]?'':' — карточки нет в каталоге LSS, добавьте вручную'}`;
    });
    data.text.attacks=richText([...attacks.map(a=>`${a.label || a.name}: атака ${formatBonus(a.attackBonus || 0)}, урон ${a.damage} ${DAMAGE[a.type] || a.type || ''}${a.notes?.length?`; ${a.notes.join('; ')}`:''}`),...spellLines]);
    const casting=options.spellcasting;
    if(casting && ABILITIES[casting.ability]) {
      data.spellsInfo.base={name:'base',code:ABILITIES[casting.ability],value:ABILITY_NAMES[casting.ability]};
      data.spellsInfo.available={classes:[character.class]};
      if(casting.slots) data[casting.slotRecovery==='short-rest'?'spellsPact':'spells'][`slots-${casting.slotLevel || 1}`]={value:casting.slots};
      if(casting.slots) data.text.attacks.value.data.content.push(...richText([`Ячейки: ${casting.slots} × ${casting.slotLevel || 1}-й уровень; восстановление: ${casting.slotRecovery==='short-rest'?'короткий отдых':'долгий отдых'}.`]).value.data.content);
    }
    for(const coin of ['cp','sp','gp','ep','pp']) {
      if(Number.isFinite(options.money?.[coin])) data.coins[coin]={value:options.money[coin]};
    }
    const nativeSpells=list(options.spells).filter(s=>SPELL_IDS[s.id]);
    const spellIds=items=>[...new Set(items.map(s=>SPELL_IDS[s.id]))];
    if(nativeSpells.length) data.spellsInfo.available={...(data.spellsInfo.available || {}),spells:spellIds(nativeSpells)};
    // Native manual grants survive LSS's automatic wizard recalculation and do not
    // consume class cantrip/preparation limits. Keep each spell's casting ability.
    const exempt=s=>s.limitExempt||['racial','ritual','feat'].includes(s.status);
    const granted=spellIds(nativeSpells.filter(exempt)).map(id=>({id,source:'manual'}));
    data.spellsInfo.abilities={};
    for(const spell of nativeSpells) {
      const id=SPELL_IDS[spell.id];
      if(ABILITIES[spell.ability]&&!data.spellsInfo.abilities[id]) data.spellsInfo.abilities[id]=ABILITIES[spell.ability];
    }
    return [{jsonType:'character',version:'2',edition:'2014',sheetEdition:'2014',tags:[],rooms:[],linkAccess:'none',
      disabledBlocks:{'info-left':[],'info-right':[],'subinfo-left':[],'subinfo-right':[],'notes-left':[],'notes-right':[]},
      spells:{mode:'cards',prepared:spellIds(nativeSpells.filter(s=>s.status!=='spellbook')),
        book:spellIds(nativeSpells.filter(s=>s.status==='spellbook'||(character.class==='wizard'&&s.level>0&&['prepared','known'].includes(s.status)))),
        slotless:spellIds(nativeSpells.filter(s=>['racial','ritual','feat'].includes(s.status))),edition:'2014',granted},data:JSON.stringify(data)}];
  }
  return {buildLssExport,richText,SPELL_IDS};
});
