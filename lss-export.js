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
  const SPELL_DAMAGE = {force:'силовое поле',radiant:'излучение',fire:'огонь',cold:'холод',necrotic:'некротическая энергия',lightning:'электричество',thunder:'звук',acid:'кислота',poison:'яд',psychic:'психическая энергия'};
  // IDs of all 127 SRD 2014 spells of circles 0-2 from the official LSS catalogue
  // (verified 2026-10-15; cards with playerId, i.e. user homebrew, are never used).
  // Non-SRD spells absent from it remain in the sheet text with source and usage.
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
    'animal-messenger':'65d3c16af3d820fa1add43e0','tashas-hideous-laughter':'65d3c176f3d820fa1add49f2','tensers-floating-disk':'65d3c176f3d820fa1add4a31',
    'hunters-mark':'65d3c170f3d820fa1add474b','spiritual-weapon':'65d3c16bf3d820fa1add440a','continual-flame':'65d3c16ff3d820fa1add470c',
    'see-invisibility':'65d3c172f3d820fa1add4894',suggestion:'65d3c16af3d820fa1add43ee','magic-mouth':'65d3c169f3d820fa1add4266',
    'arcane-lock':'65d3c16bf3d820fa1add4411',augury:'65d3c173f3d820fa1add48c5','blindness-deafness':'65d3c168f3d820fa1add419b',
    'flame-blade':'65d3c16df3d820fa1add457d',shatter:'65d3c175f3d820fa1add49c8',barkskin:'65d3c16ff3d820fa1add46f7',
    'protection-from-poison':'65d3c173f3d820fa1add4927','melfs-acid-arrow':'65d3c16df3d820fa1add45e6','branding-smite':'65d3c16bf3d820fa1add442d',
    'nystuls-magic-aura':'65d3c171f3d820fa1add481d',moonbeam:'65d3c175f3d820fa1add49ac','ray-of-enfeeblement':'65d3c16cf3d820fa1add450d',
    'magic-weapon':'65d3c171f3d820fa1add47de','lesser-restoration':'65d3c171f3d820fa1add4824','prayer-of-healing':'65d3c171f3d820fa1add4839',
    invisibility:'65d3c172f3d820fa1add48b7','gentle-repose':'65d3c16df3d820fa1add45c3','zone-of-truth':'65d3c169f3d820fa1add4290',
    'detect-thoughts':'65d3c16ef3d820fa1add468e',knock:'65d3c170f3d820fa1add4767','mirror-image':'65d3c172f3d820fa1add487f',
    'warding-bond':'65d3c169f3d820fa1add42c8','scorching-ray':'65d3c176f3d820fa1add49dd','spider-climb':'65d3c174f3d820fa1add4989',
    web:'65d3c173f3d820fa1add48da',aid:'65d3c169f3d820fa1add42eb','locate-animals-or-plants':'65d3c16cf3d820fa1add44b2',
    'find-traps':'65d3c174f3d820fa1add496d','locate-object':'65d3c16ff3d820fa1add4705','find-steed':'65d3c16cf3d820fa1add44c0',
    'gust-of-wind':'65d3c169f3d820fa1add4282','flaming-sphere':'65d3c16cf3d820fa1add44ab',blur:'65d3c169f3d820fa1add42dd',
    'heat-metal':'65d3c168f3d820fa1add41e1',enthrall:'65d3c16bf3d820fa1add4403','alter-self':'65d3c16af3d820fa1add435b',
    silence:'65d3c16ff3d820fa1add46a3','rope-trick':'65d3c16df3d820fa1add4584','misty-step':'65d3c16bf3d820fa1add4434',
    darkness:'65d3c173f3d820fa1add4904',darkvision:'65d3c16af3d820fa1add430e','enlarge-reduce':'65d3c168f3d820fa1add41be',
    'hold-person':'65d3c16cf3d820fa1add44f1','enhance-ability':'65d3c16ef3d820fa1add465d','calm-emotions':'65d3c16cf3d820fa1add4537',
    'spike-growth':'65d3c16af3d820fa1add433f'
  };
  const field = (name, value = '') => ({name,value:value ?? ''});
  const list = value => Array.isArray(value) ? value : [];
  const valueLabel = value => typeof value === 'string' ? value : value?.label || value?.name || value?.id || '';
  const formatBonus = n => `${n >= 0 ? '+' : ''}${n}`;
  // Cantrips without their own spell attack roll (saving throw, weapon rider) are not LSS weapon rows: LSS would show a meaningless to-hit.
  const noRoll = a => !!(a.save || a.weaponRider);
  // Cantrip text lines (effectText/cantripLine) use the Russian «к» notation (1к8); weapon text lines keep their existing d-notation, and weaponsList.dmg keeps d because LSS parses it.
  const ruDice = text => String(text).replace(/(\d)d(\d)/g, '$1к$2');
  const effectText = a => a ? ruDice(`${a.save ? `спасбросок ${a.save.short}, Сл ${a.save.dc}` : 'атака оружием'}, ${a.damage} ${a.damageTypeText || a.type || ''}${a.riderText ? ` ${a.riderText}` : ''}${a.notes?.length ? `; ${a.notes.join('; ')}` : ''}`) : '';
  const cantripLine = a => noRoll(a) ? `${a.label}: ${effectText(a)}` : ruDice(`${a.label}: атака ${formatBonus(a.attackBonus || 0)}, урон ${a.damage} ${a.damageTypeText || a.type || ''}${a.notes?.length ? `; ${a.notes.join('; ')}` : ''}`);
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
    if(options.progressionErrors?.length)throw new Error(options.progressionErrors[0].message);
    const p = derived.proficiencies || {};
    const abilities = derived.abilities || character.abilities || {};
    const classes=list(options.classes);
    const multiclass=classes.length>1;
    const classText=multiclass?classes.map(c=>`${c.label || c.id} ${c.level}`).join(' / '):labels.class || character.class;
    const pools=list(derived.hitDicePools || options.hitDicePools);
    const diceText=pools.map(p=>`${p.count}к${p.die}`).join(' + ');
    const subclasses=list(options.subclasses).filter(s=>s?.label || s?.name);
    const subclassText=multiclass&&subclasses.length
      ? subclasses.map(s=>`${classes.find(c=>c.id===s.classId)?.label || s.classId}: ${s.label || s.name}`).join(' / ')
      : labels.subclass || options.subclass?.label || '';
    const infoValues = {charClass:classText, charSubclass:subclassText, level:derived.level || character.level || 1,
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
    // Published LSS skill totals consume user bonuses by the exact native key,
    // including spaces. Jack applies only when the proficiency multiplier is zero.
    if(options.jackOfAllTrades) for(const [name,skill] of Object.entries(data.skills)) {
      if(skill.isProf===0) data.bonuses.push({id:`bonus-creator-jack-${name.replaceAll(' ','-')}`,label:'Мастер на все руки',target:`skill.${name}`,expr:String(Math.floor(data.proficiency/2)),source:{kind:'user'}});
    }
    // Otherworldly Glamour adds to all Charisma checks, including proficient/expert skills.
    if(options.charismaCheckBonus) for(const [name,skill] of Object.entries(data.skills)) {
      if(skill.baseStat==='cha') data.bonuses.push({id:`bonus-creator-fey-${name}`,label:'Потустороннее очарование',target:`skill.${name}`,expr:String(options.charismaCheckBonus),source:{kind:'user'}});
    }
    if(pools.length>1) {
      data.vitality['hit-die'].value='multiclass';
      data.vitality['hp-dice-multi']=Object.fromEntries(pools.map(p=>[`d${p.die}`,{max:p.count,current:p.count}]));
    }
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
      ...list(options.resources).map(r=>`${r.name}: ${r.max}; ${r.recovery||`восстановление после ${r.rest==='short-rest'?'короткого или долгого':'долгого'} отдыха`}.`),
      ...list(derived.notes),
      multiclass?`Классы: ${classText}.`:null,
      pools.length>1?`Кости хитов: ${diceText}.`:null,
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
    data.weaponsList=attacks.filter(a=>!noRoll(a)).map((attack,index)=>{
      const id=`weapon-creator-${index}`, ability=ABILITIES[attack.ability] || 'str';
      const base=Math.floor((data.stats[ability].score-10)/2)+(attack.proficient?data.proficiency:0);
      const bonus=(attack.attackBonus ?? base)-base;
      if(bonus) data.bonuses.push({id:`bonus-creator-attack-${index}`,label:'Бонус атаки',target:`weapon.${id}.attack`,expr:String(bonus),source:{kind:'user'}});
      return {id,name:{value:attack.label || attack.name || attack.id},isProf:!!attack.proficient,ability,
        dmg:{value:attack.damage || ''},dmgType:{value:DAMAGE[attack.type] || (attack.group === 'spell' && SPELL_DAMAGE[attack.type]) || attack.type || ''},notes:{value:list(attack.notes).join('; ')}};
    });
    const cantripRows=new Map(attacks.filter(noRoll).map(a=>[a.cantripId+':'+a.ability,a]));
    const spellLines=list(options.spells).map(spell=>{
      const stat=ABILITIES[spell.ability],modifier=stat?Math.floor((data.stats[stat].score-10)/2):null;
      const castingText=stat?`; ${ABILITY_NAMES[spell.ability]}, Сл ${8+data.proficiency+modifier}, атака ${formatBonus(data.proficiency+modifier)}`:'';
      return `${spell.label || spell.name || spell.id} (${spell.level===0?'заговор':`${spell.level}-й уровень`}; ${spell.source || ''}; ${{cantrip:'заговор',known:'известно',prepared:'подготовлено',spellbook:'книга заклинаний',racial:'расовое',ritual:'ритуал',feat:'черта'}[spell.status] || spell.status || ''}${castingText}${spell.level===0&&cantripRows.has(spell.id+':'+spell.ability)?`; ${effectText(cantripRows.get(spell.id+':'+spell.ability))}`:''})${spell.usage?` — ${spell.usage}`:''}${SPELL_IDS[spell.id]?'':' — карточки нет в каталоге LSS, добавьте вручную'}`;
    });
    data.text.attacks=richText([...attacks.filter(a=>!noRoll(a)).map(a=>a.cantrip?cantripLine(a):`${a.label || a.name}: атака ${formatBonus(a.attackBonus || 0)}, урон ${a.damage} ${DAMAGE[a.type] || a.type || ''}${a.notes?.length?`; ${a.notes.join('; ')}`:''}`),...spellLines]);
    const casting=options.spellcasting;
    if(casting && ABILITIES[casting.ability]) {
      data.spellsInfo.base={name:'base',code:ABILITIES[casting.ability],value:ABILITY_NAMES[casting.ability]};
      data.spellsInfo.available={classes:multiclass?list(options.spellcastingByClass).map(c=>c.classId):[character.class]};
      const tiers=casting.slotTiers|| (casting.slotRecovery!=='short-rest'?{[casting.slotLevel||1]:casting.slots}:{});
      for(const [level,count]of Object.entries(tiers))if(count)data.spells[`slots-${level}`]={value:count};
      const pact=casting.pactSlots||(casting.slotRecovery==='short-rest'?{level:casting.slotLevel||1,count:casting.slots}:null);
      if(pact?.count)data.spellsPact[`slots-${pact.level}`]={value:pact.count};
      const text=[...Object.entries(tiers).filter(([,n])=>n).map(([level,count])=>`${count} × ${level}-й круг (долгий отдых)`),pact?.count?`${pact.count} × ${pact.level}-й круг (короткий отдых)`:null].filter(Boolean).join('; ');
      if(text)data.text.attacks.value.data.content.push(...richText(['Ячейки: '+text+'.']).value.data.content);
    }
    if(multiclass) {
      for(const c of list(options.spellcastingByClass)) {
        const text=`${c.label || c.classId} ${c.level}: ${ABILITY_NAMES[c.ability] || c.ability}; Сл ${c.saveDC}, атака ${formatBonus(c.attackBonus)}${c.preparedCount?`; подготовка ${c.preparedCount}`:''}${c.knownCount!==undefined?`; известно ${c.knownCount}`:''}${c.spellbook?.length?`; в книге ${c.spellbook.length}`:''}.`;
        data.text.attacks.value.data.content.push(...richText([text]).value.data.content);
      }
    }
    for(const coin of ['cp','sp','gp','ep','pp']) {
      if(Number.isFinite(options.money?.[coin])) data.coins[coin]={value:options.money[coin]};
    }
    const nativeSpells=list(options.spells).filter(s=>SPELL_IDS[s.id]);
    const spellIds=items=>[...new Set(items.map(s=>SPELL_IDS[s.id]))];
    if(nativeSpells.length) data.spellsInfo.available={...(data.spellsInfo.available || {}),spells:spellIds(nativeSpells)};
    // Native manual grants survive LSS's automatic wizard recalculation and do not
    // consume class cantrip/preparation limits. Keep each spell's casting ability.
    const exempt=s=>multiclass||s.limitExempt||['racial','ritual','feat'].includes(s.status);
    const granted=spellIds(nativeSpells.filter(exempt)).map(id=>({id,source:'manual'}));
    const duplicateAbilities=new Map();
    for(const s of nativeSpells) {const abilities=duplicateAbilities.get(s.id)||new Set();if(s.ability)abilities.add(s.ability);duplicateAbilities.set(s.id,abilities);}
    if([...duplicateAbilities.values()].some(a=>a.size>1))data.text.attacks.value.data.content.push(...richText(['Одно заклинание известно от нескольких классов: нативная карточка LSS хранит одну характеристику; все классовые варианты, Сл и атаки перечислены выше. Для другого варианта настройте отдельную карточку вручную.']).value.data.content);
    const wizardBook=multiclass?list(options.spellcastingByClass).filter(c=>c.classId==='wizard').flatMap(c=>list(c.spellbook)):[];
    data.spellsInfo.abilities={};
    for(const spell of nativeSpells) {
      const id=SPELL_IDS[spell.id];
      if(ABILITIES[spell.ability]&&!data.spellsInfo.abilities[id]) data.spellsInfo.abilities[id]=ABILITIES[spell.ability];
    }
    return [{jsonType:'character',version:'2',edition:'2014',sheetEdition:'2014',tags:[],rooms:[],linkAccess:'none',
      disabledBlocks:{'info-left':[],'info-right':[],'subinfo-left':[],'subinfo-right':[],'notes-left':[],'notes-right':[]},
      spells:{mode:'cards',prepared:spellIds(nativeSpells.filter(s=>s.status!=='spellbook')),
        book:spellIds(nativeSpells.filter(s=>s.status==='spellbook'||wizardBook.includes(s.id)||(!multiclass&&character.class==='wizard'&&s.level>0&&['prepared','known'].includes(s.status)))),
        slotless:spellIds(nativeSpells.filter(s=>s.slotless||['racial','ritual','feat'].includes(s.status))),edition:'2014',granted},data:JSON.stringify(data)}];
  }
  // Merge of the generated sheet with the user's original LSS sheet (sanitized wrapper; data as an object or a JSON string).
  // Mechanics come from the generated export; what the user edits on the LSS site comes from the original.
  // Known limits: a generated weapon row the user deleted on the site is re-added (generated rows are always regenerated);
  // lines written before the marker are regenerated, so only the text after the marker belongs to the user.
  const MERGE_MARKER = '— Из загруженного листа LSS —';
  const MERGE_UNSAFE_KEYS = new Set(['__proto__','constructor','prototype','_id']);
  const ABILITY_CODES = new Set(Object.values(ABILITIES));
  const isObject = value => !!value && typeof value === 'object' && !Array.isArray(value);
  const pick = (object, key) => isObject(object) && Object.hasOwn(object, key) ? object[key] : undefined;
  const filled = value => typeof value === 'string' ? value.trim() !== '' : Number.isFinite(value);
  // Depth limit: content nested deeper than MERGE_MAX_DEPTH is dropped instead of overflowing the stack.
  const MERGE_MAX_DEPTH = 200;
  const mergeClone = (value, depth = 0) => {
    if(depth > MERGE_MAX_DEPTH) return undefined;
    if(Array.isArray(value)) return value.map(item => mergeClone(item, depth + 1)).filter(item => item !== undefined);
    return isObject(value) ? Object.fromEntries(Object.keys(value).filter(key => !MERGE_UNSAFE_KEYS.has(key)).map(key => [key, mergeClone(value[key], depth + 1)])) : value;
  };
  // "12", "30 футов", "+5", "-1" -> number; dice notation ("1к12") and other text -> NaN.
  const looseNumber = value => {
    if(typeof value === 'number') return Number.isFinite(value) ? value : NaN;
    const text = typeof value === 'string' ? value.trim() : '';
    if(/^[+-]?\d+\s*[кkd]\s*\d/i.test(text) || /^[+-]?\d+(?:[.,]\d+)?[eE][+-]?\d/.test(text)) return NaN;
    const found = /^[+-]?\d+(?:[.,]\d+)?/.exec(text);
    return found ? Number(found[0].replace(',', '.')) : NaN;
  };
  const normText = value => String(value ?? '').toLowerCase().replace(/ё/g,'е').replace(/\s+/g,' ').trim();
  const normName = value => normText(value).replace(/[^\p{L}\p{N}\s]+/gu,' ').replace(/\s+/g,' ').trim();
  const paragraphKey = text => normText(text.split(/:| \(/)[0]).replace(/^[^\p{L}\p{N}]+/u,'').trim();
  // Lines the exporter writes itself (checked on every original paragraph, so a previous export is never read back as the user's text).
  const CREATOR_LINE = [
    /^Умение \d+-го уровня:/, /^Умение домена:/, /^Покровитель: /,
    /^(?:Языки|Инструменты|Оружие|Доспехи|Компетентность):/,
    /^(?:Ячейки|Пассивное Восприятие|Классы|Кости хитов|Тёмное зрение|Плавание|Лазание|Полёт):/,
    /^Проверьте (?:КД|скорость):/,
    /^Одно заклинание известно от нескольких классов/,
    /карточки нет в каталоге LSS/,
    /^.{1,200}? \((?:заговор|\d-й уровень); [^;]{0,300}; (?:заговор|известно|подготовлено|книга заклинаний|расовое|ритуал|черта)/,
    /^[^:]{1,200} \d+: [^;]{1,300}; Сл \d+, атака [+-]\d+/,
    /^[^:]{1,200}: атака [+-]\d+, урон /,
    /^[^:]{1,200}: [^;]{1,200}; (?:восстановление|восстанавливается)/
  ];
  const isCreatorLine = text => CREATOR_LINE.some(shape => shape.test(text));
  // Native LSS text may be an HTML string or a TipTap document with extra ids and marks.
  const HTML_NAMED = {nbsp:' ',amp:'&',lt:'<',gt:'>',quot:'"',laquo:'«',raquo:'»',mdash:'—',ndash:'–',hellip:'…'};
  const decodeEntities = text => text.replace(/&(#[xX][0-9a-fA-F]{1,6}|#\d{1,7}|[a-zA-Z]{2,8});/g, (whole, body) => {
    if(body[0] !== '#') return Object.hasOwn(HTML_NAMED, body.toLowerCase()) ? HTML_NAMED[body.toLowerCase()] : whole;
    const code = body[1] === 'x' || body[1] === 'X' ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10);
    return code === 0 || (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff ? whole : String.fromCodePoint(code);
  });
  const htmlParagraphs = html => decodeEntities(String(html).replace(/<\/?p(?:\s[^<>]*)?>|<br\s*\/?>|<\/(?:h[1-6]|li|div|blockquote|pre)\s*>/gi, '\n').replace(/<\/?[a-zA-Z][^<>]*>/g, '')).split('\n').map(line => line.replace(/\s+/g,' ').trim()).filter(Boolean);
  const inlineText = (node, depth = 0) => {
    if(depth > MERGE_MAX_DEPTH) return '';
    if(typeof node?.text === 'string') return node.text;
    if(node?.type === 'hardBreak') return '\n';
    const kids = list(node?.content);
    if(kids.length) return kids.map(kid => inlineText(kid, depth + 1)).join('');
    const attrs = isObject(node?.attrs) ? node.attrs : {};
    return typeof attrs.label === 'string' ? attrs.label : typeof attrs.text === 'string' ? attrs.text : '';
  };
  const TIP_LINE_NODES = new Set(['paragraph','heading','codeBlock']);
  const tipLines = (node, depth = 0) => {
    if(!isObject(node) || depth > MERGE_MAX_DEPTH) return [];
    if(TIP_LINE_NODES.has(node.type) || node.type === 'text' || node.type === 'hardBreak' || typeof node.text === 'string') return [inlineText(node)];
    return list(node.content).flatMap(kid => tipLines(kid, depth + 1));
  };
  function blockParagraphs(block) {
    const value = isObject(block) && 'value' in block ? block.value : block;
    const data = isObject(value) && 'data' in value ? value.data : value;
    if(typeof data === 'string') return htmlParagraphs(data);
    return tipLines(data).flatMap(line => line.split('\n')).map(line => line.replace(/\s+/g,' ').trim()).filter(Boolean);
  }
  const paragraphNode = text => ({type:'paragraph',content:[{type:'text',text}]});
  // Generated paragraphs (plus extraLines) first, then the user's own paragraphs that follow the marker.
  function mergeOwnText(generatedBlock, originalBlock, extraLines = []) {
    const block = mergeClone(generatedBlock || {value:{data:{type:'doc',content:[]}}});
    const generated = [...blockParagraphs(generatedBlock), ...extraLines];
    const keys = new Set(generated.map(paragraphKey)), texts = new Set(generated.map(normText));
    let own = blockParagraphs(originalBlock);
    const marker = own.lastIndexOf(MERGE_MARKER);
    if(marker >= 0) own = own.slice(marker + 1);
    // Before the marker a paragraph is the user's only if no generated shape or key claims it. After the marker it was the user's already,
    // so it stays unless it is an exact copy of generated text; this keeps lines such as «Оружие: …» the user wrote below the marker.
    own = own.filter(text => text !== MERGE_MARKER && (marker >= 0 ? !texts.has(normText(text)) : !isCreatorLine(text) && !keys.has(paragraphKey(text)) && !texts.has(normText(text))));
    block.value.data.content.push(...extraLines.map(paragraphNode));
    if(own.length) block.value.data.content.push(paragraphNode(MERGE_MARKER), ...own.map(paragraphNode));
    return block;
  }
  // options.baseline = {ac, speed}: what our exporter computed for this character at the sheet's source level.
  function mergeLssExport(generated, original, options = {}) {
    const source = Array.isArray(generated) ? generated[0] : generated;
    if(!isObject(source)) return Array.isArray(generated) ? mergeClone(generated) : [];
    const wrapper = mergeClone(source);
    const raw = Array.isArray(original) ? original[0] : original;
    let ownData = pick(raw, 'data');
    if(typeof ownData === 'string') { try { ownData = JSON.parse(ownData); } catch { return [wrapper]; } }
    if(!isObject(ownData)) return [wrapper];
    const data = mergeClone(typeof source.data === 'string' ? JSON.parse(source.data) : source.data);
    if(!isObject(data)) return [wrapper];
    const generatedKeys = new Set(Object.keys(data));
    const ownInfo = isObject(ownData.info) ? ownData.info : {};
    if(filled(ownData.name?.value)) data.name = mergeClone(ownData.name);
    for(const key of ['race','background','alignment','playerName','experience']) if(filled(pick(ownInfo,key)?.value)) data.info[key] = mergeClone(ownInfo[key]);
    const ownSub = isObject(ownData.subInfo) ? ownData.subInfo : {}, genSub = isObject(data.subInfo) ? data.subInfo : {};
    data.subInfo = Object.fromEntries([...new Set([...Object.keys(genSub), ...Object.keys(ownSub)])].filter(key => !MERGE_UNSAFE_KEYS.has(key)).flatMap(key => {
      const own = isObject(pick(ownSub,key)) ? ownSub[key] : undefined, gen = isObject(pick(genSub,key)) ? genSub[key] : undefined;
      if(!own && !gen) return [];
      return [[key, mergeClone(own && (filled(own.value) || !gen) ? own : gen)]];
    }));
    const ownVitality = isObject(ownData.vitality) ? ownData.vitality : {};
    for(const key of ['hp-temp','isDying','deathFails','deathSuccesses']) if(pick(ownVitality,key) !== undefined && pick(ownVitality,key) !== null) data.vitality[key] = mergeClone(ownVitality[key]);
    const [currentHp, originalMax, newMax] = [pick(pick(ownVitality,'hp-current'),'value'), pick(pick(ownVitality,'hp-max'),'value'), data.vitality['hp-max']?.value].map(value => looseNumber(value));
    if([currentHp, originalMax, newMax].every(value => Number.isFinite(value))) data.vitality['hp-current'] = {...data.vitality['hp-current'], value:Math.floor(Math.min(newMax, Math.max(0, currentHp + newMax - originalMax)))};
    // Armour class and speed follow the sheet; a difference from our calculation is reported in the traits (regenerated every cycle).
    const checks = [];
    // A sheet value is used only when plausible and when it differs from our baseline for the sheet's level: equal to the baseline means
    // the user did not override it, so the generated value (which follows level-ups, e.g. monk speed) stays.
    const baseline = isObject(options) && isObject(options.baseline) ? options.baseline : {};
    for(const [key, min, max] of [['ac',1,50],['speed',1,200]]) {
      const own = looseNumber(pick(pick(ownVitality,key),'value')), gen = looseNumber(data.vitality[key]?.value), base = looseNumber(pick(baseline,key));
      if(!Number.isFinite(own) || own < min || own > max) continue;
      if(Number.isFinite(base) && own === base) continue;
      data.vitality[key] = {...data.vitality[key], value:own};
      if(Number.isFinite(gen) && own !== gen) checks.push(key === 'ac' ? `Проверьте КД: в листе LSS ${own}, по расчёту мастера ${gen}.` : `Проверьте скорость: в листе LSS ${own} футов, по расчёту мастера ${gen} футов.`);
    }
    for(const key of ['coins','resources']) if(isObject(ownData[key])) data[key] = mergeClone(ownData[key]);
    for(const key of ['conditions','attunementsList']) if(Array.isArray(ownData[key])) data[key] = mergeClone(ownData[key]);
    const ownText = isObject(ownData.text) ? ownData.text : {};
    for(const key of Object.keys(ownText)) if(!MERGE_UNSAFE_KEYS.has(key) && !['prof','traits','attacks'].includes(key) && isObject(ownText[key])) data.text[key] = mergeClone(ownText[key]);
    for(const key of ['prof','traits','attacks']) data.text[key] = mergeOwnText(data.text[key], pick(ownText,key), key === 'traits' ? checks : []);
    // Unknown user keys (hiddenName, casterClass, weapons, bonusesSkills …) survive; a legacy skill map under `abilities` is replaced by `skills`.
    for(const key of Object.keys(ownData)) if(!generatedKeys.has(key) && !MERGE_UNSAFE_KEYS.has(key) && !['createdAt','updatedAt'].includes(key) && ownData[key] !== undefined && !(key === 'abilities' && isObject(ownData[key]) && Object.hasOwn(ownData[key],'athletics'))) data[key] = mergeClone(ownData[key]);
    // Weapons: a generated row whose name the user already has is not re-added; its bonus follows the user's row when that row is ours
    // ('weapon-creator-' id) and is dropped when it is a native LSS row (that row carries its own modifier). A generated id taken by a user row is renumbered.
    const rowName = row => row?.name?.value ?? (typeof row?.name === 'string' ? row.name : '');
    const ownRows = list(ownData.weaponsList).filter(row => isObject(row));
    const ownById = new Set(ownRows.map(row => row.id));
    const ownByName = new Map();
    for(const row of ownRows) { const key = normName(rowName(row)); if(!ownByName.has(key)) ownByName.set(key, row); }
    const genRows = list(data.weaponsList);
    const used = new Set([...ownById, ...genRows.map(row => row.id)]);
    let freshNumber = 0;
    const freshId = () => { while(used.has(`weapon-creator-${freshNumber}`)) freshNumber++; const id = `weapon-creator-${freshNumber}`; used.add(id); return id; };
    const weaponIds = new Map(), addedRows = [];
    for(const row of genRows) {
      const match = ownByName.get(normName(rowName(row)));
      if(match) { weaponIds.set(row.id, typeof match.id === 'string' && match.id.startsWith('weapon-creator-') ? match.id : null); continue; }
      const id = ownById.has(row.id) ? freshId() : row.id;
      weaponIds.set(row.id, id);
      addedRows.push({...row, id});
    }
    const isCreatorBonus = bonus => typeof bonus?.id === 'string' && bonus.id.startsWith('bonus-creator-');
    const ownBonuses = list(ownData.bonuses).filter(bonus => isObject(bonus) && !isCreatorBonus(bonus)).map(bonus => mergeClone(bonus));
    const genBonuses = list(data.bonuses).flatMap(bonus => {
      const weapon = /^weapon\.(.+)\.attack$/.exec(String(bonus?.target ?? ''));
      if(!weapon) return [bonus];
      if(!weaponIds.has(weapon[1])) return [];
      const id = weaponIds.get(weapon[1]);
      return id === null ? [] : [{...bonus, target:`weapon.${id}.attack`}];
    });
    data.bonuses = [...ownBonuses, ...genBonuses];
    data.weaponsList = [...ownRows.map(row => mergeClone(row)), ...addedRows];
    // Spell cards: our lists first, then the user's homebrew cards (ids outside the catalogue) when the sheet is a 2014 sheet.
    // A sheet whose edition is anything else keeps none of its card ids.
    const nativeIds = new Set(Object.values(SPELL_IDS));
    const isCustom = id => typeof id === 'string' && id !== '' && !nativeIds.has(id) && !MERGE_UNSAFE_KEYS.has(id);
    const editions = [raw.sheetEdition, raw.edition, pick(raw.spells,'edition')].filter(value => value !== undefined && value !== null && value !== '');
    const carriesCards = editions.every(value => String(value) === '2014');
    const cards = mergeClone(source.spells || {});
    const carried = new Set();
    if(carriesCards) {
      const ownSpells = isObject(raw.spells) ? raw.spells : {};
      for(const key of ['prepared','book','slotless']) {
        const ids = list(cards[key]), seen = new Set(ids);
        for(const id of list(pick(ownSpells,key))) if(isCustom(id) && !seen.has(id)) { ids.push(id); seen.add(id); carried.add(id); }
        cards[key] = ids;
      }
      const grants = list(cards.granted), grantIds = new Set(grants.map(grant => grant?.id));
      for(const grant of list(pick(ownSpells,'granted'))) if(isObject(grant) && isCustom(grant.id) && !grantIds.has(grant.id)) { grants.push({id:grant.id,source:typeof grant.source === 'string' ? grant.source : 'manual'}); grantIds.add(grant.id); carried.add(grant.id); }
      cards.granted = grants;
      // The casting ability of a carried homebrew card is copied from the original sheet.
      const ownAbilities = pick(pick(ownData,'spellsInfo'),'abilities');
      for(const id of carried) { const code = pick(ownAbilities,id); if(ABILITY_CODES.has(code)) { if(!isObject(data.spellsInfo.abilities)) data.spellsInfo.abilities = {}; data.spellsInfo.abilities[id] = code; } }
    }
    if(Array.isArray(raw.tags)) wrapper.tags = mergeClone(raw.tags);
    if(isObject(raw.disabledBlocks)) wrapper.disabledBlocks = {...wrapper.disabledBlocks, ...Object.fromEntries(Object.entries(raw.disabledBlocks).filter(([key,blocks]) => !MERGE_UNSAFE_KEYS.has(key) && Array.isArray(blocks)).map(([key,blocks]) => [key, mergeClone(blocks)]))};
    wrapper.spells = cards;
    wrapper.rooms = [];
    wrapper.linkAccess = 'none';
    wrapper.data = JSON.stringify(data);
    return [wrapper];
  }
  return {buildLssExport,richText,SPELL_IDS,MERGE_MARKER,mergeLssExport};
});
