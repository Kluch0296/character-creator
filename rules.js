(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CharacterRules = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const ABILITIES = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
  const SKILLS = {
    athletics: 'Атлетика', acrobatics: 'Акробатика', sleight_of_hand: 'Ловкость рук', stealth: 'Скрытность',
    arcana: 'Магия', history: 'История', investigation: 'Анализ', nature: 'Природа', religion: 'Религия',
    animal_handling: 'Обращение с животными', insight: 'Проницательность', medicine: 'Медицина', perception: 'Восприятие', survival: 'Выживание',
    deception: 'Обман', intimidation: 'Запугивание', performance: 'Выступление', persuasion: 'Убеждение'
  };
  const SKILL_ABILITIES = Object.fromEntries(Object.keys(SKILLS).map((id, index) => [id, ABILITIES[index === 0 ? 0 : index < 4 ? 1 : index < 9 ? 3 : index < 14 ? 4 : 5]]));
  const TOOLS = {
    alchemist: 'Инструменты алхимика', brewer: 'Инструменты пивовара', calligrapher: 'Инструменты каллиграфа', carpenter: 'Инструменты плотника',
    cartographer: 'Инструменты картографа', cobbler: 'Инструменты сапожника', cook: 'Инструменты повара', glassblower: 'Инструменты стеклодува',
    jeweler: 'Инструменты ювелира', leatherworker: 'Инструменты кожевника', mason: 'Инструменты каменщика', painter: 'Инструменты художника',
    potter: 'Инструменты гончара', smith: 'Инструменты кузнеца', tinker: 'Инструменты ремонтника', weaver: 'Инструменты ткача', woodcarver: 'Инструменты резчика по дереву',
    disguise_kit: 'Набор для грима', forgery_kit: 'Набор для фальсификации', herbalism_kit: 'Набор травника', navigator: 'Инструменты навигатора',
    poisoner_kit: 'Набор отравителя', thieves_tools: 'Воровские инструменты', land_vehicles: 'Наземный транспорт', water_vehicles: 'Водный транспорт',
    dice: 'Игральные кости', dragonchess: 'Драконьи шахматы', playing_cards: 'Игральные карты', three_dragon_ante: 'Ставка трёх драконов',
    bagpipes: 'Волынка', drum: 'Барабан', dulcimer: 'Цимбалы', flute: 'Флейта', lute: 'Лютня', lyre: 'Лира', horn: 'Рожок', pan_flute: 'Свирель', shawm: 'Шалмей', viol: 'Виола'
  };
  const ARTISAN_TOOLS = Object.keys(TOOLS).slice(0, 17);
  const INSTRUMENTS = Object.keys(TOOLS).slice(-10);
  const GAMING_SETS = ['dice', 'dragonchess', 'playing_cards', 'three_dragon_ante'];
  const LANGUAGES = {
    common: 'Общий', dwarvish: 'Дварфский', elvish: 'Эльфийский', giant: 'Великаний', gnomish: 'Гномий', goblin: 'Гоблинский', halfling: 'Полуросличий', orc: 'Орочий',
    abyssal: 'Бездны', celestial: 'Небесный', draconic: 'Драконий', deep_speech: 'Глубинная Речь', infernal: 'Инфернальный', primordial: 'Первичный', sylvan: 'Сильван', undercommon: 'Подземный',
    aarakocra: 'Ааракокра', auran: 'Ауран (диалект Первичного)', aquan: 'Акван (диалект Первичного)', gith: 'Гитский', grung: 'Грунг', vedalken: 'Ведалкенский',
    quori: 'Квори', leonin: 'Леонин', loxodon: 'Локсодон', minotaur: 'Минотавр', gnoll:'Гнолльский', sahuagin:'Сахуагин', druidic: 'Друидический', thieves_cant: 'Воровской жаргон'
  };
  const CHOICE_LANGUAGES = Object.keys(LANGUAGES).filter(id => !['druidic', 'thieves_cant', 'auran', 'aquan'].includes(id));
  const WEAPONS = {
    simple: 'Простое оружие', martial: 'Воинское оружие', firearms: 'Огнестрельное оружие',
    club: 'Дубинка', dagger: 'Кинжал', greatclub: 'Палица', handaxe: 'Ручной топор', javelin: 'Метательное копьё', light_hammer: 'Лёгкий молот', mace: 'Булава', quarterstaff: 'Боевой посох', sickle: 'Серп', spear: 'Копьё',
    light_crossbow: 'Лёгкий арбалет', dart: 'Дротик', shortbow: 'Короткий лук', sling: 'Праща',
    battleaxe: 'Боевой топор', flail: 'Цеп', glaive: 'Глефа', greataxe: 'Секира', greatsword: 'Двуручный меч', halberd: 'Алебарда', lance: 'Длинное копьё', longsword: 'Длинный меч', maul: 'Молот', morningstar: 'Моргенштерн', pike: 'Пика', rapier: 'Рапира', scimitar: 'Скимитар', shortsword: 'Короткий меч', trident: 'Трезубец', war_pick: 'Боевая кирка', warhammer: 'Боевой молот', whip: 'Кнут', blowgun: 'Духовая трубка', hand_crossbow: 'Ручной арбалет', heavy_crossbow: 'Тяжёлый арбалет', longbow: 'Длинный лук', net: 'Сеть'
  };
  const SIMPLE_WEAPONS = Object.keys(WEAPONS).slice(3, 17);
  const MARTIAL_WEAPONS = Object.keys(WEAPONS).slice(17);
  WEAPONS.improvised='Импровизированное оружие';
  const ARMOR = {light: 'Лёгкие доспехи', medium: 'Средние доспехи', heavy: 'Тяжёлые доспехи', shield: 'Щиты'};
  const words = value => value ? value.split(' ') : [];
  const fixed = (type, ids) => words(ids).map(id => ({type, id}));
  const choice = (type, options, count = 1, label) => ({type, options: typeof options === 'string' ? words(options) : options, count, label});
  const allSkills = Object.keys(SKILLS), allTools = Object.keys(TOOLS);
  const flexible = {plans: [{id:'two_one',label:'+2 к одной и +1 к другой',choiceSlots:[2,1]}, {id:'three_ones',label:'+1 к трём разным',choiceSlots:[1,1,1]}],distinct:true};
  const asi = (str=0,dex=0,con=0,int=0,wis=0,cha=0) => Object.fromEntries(ABILITIES.map((id,i)=>[id,[str,dex,con,int,wis,cha][i]]).filter(([,v])=>v));
  const RACES = Object.create(null);
  function race(id, bonuses, languages, extra = {}) { RACES[id] = {abilities: {fixed: bonuses}, speed:30, languages:words(languages), ...extra}; }
  race('human',asi(1,1,1,1,1,1),'common',{abilities:{variantField:'human_feature',variants:{human_stats:{fixed:asi(1,1,1,1,1,1)},human_alt:{choiceSlots:[1,1],distinct:true}}},choices:[choice('language',CHOICE_LANGUAGES)]});
  race('elf',asi(0,2),'common elvish',{grants:fixed('skill','perception'),subraces:{high_elf:{abilities:asi(0,0,0,1),grants:fixed('weapon','longsword shortsword shortbow longbow'),choices:[choice('language',CHOICE_LANGUAGES)]},wood_elf:{abilities:asi(0,0,0,0,1),speed:35,grants:fixed('weapon','longsword shortsword shortbow longbow')},drow:{abilities:asi(0,0,0,0,0,1),darkvision:120,grants:fixed('weapon','rapier shortsword hand_crossbow')}},darkvision:60});
  race('aarakocra',asi(0,2,0,0,1),'common aarakocra auran',{speed:25,fly:50,flightRestriction:'medium-heavy'});
  race('aasimar',asi(0,0,0,0,0,2),'common celestial',{darkvision:60,subraces:{'aasimar-guardian':{abilities:asi(0,0,0,0,1)},'aasimar-punisher':{abilities:asi(0,0,1)},'fallen-aasimar':{abilities:asi(1)}}});
  race('autognome',{},'common',{abilities:flexible,size:'small',naturalArmor:{base:13,ability:'dexterity'},choices:[choice('tool',allTools,2),choice('language',CHOICE_LANGUAGES)]});
  race('astral-elf',{},'common',{abilities:flexible,darkvision:60,grants:fixed('skill','perception'),choices:[choice('skill',allSkills,1,'Астральный транс: навык (до следующего отдыха)'),choice('weaponOrTool',[...SIMPLE_WEAPONS,...MARTIAL_WEAPONS,...allTools],1,'Астральный транс: оружие или инструмент (до следующего отдыха)'),choice('language',CHOICE_LANGUAGES)]});
  race('bugbear',asi(2,1),'common goblin',{darkvision:60,grants:fixed('skill','stealth'),powerfulBuild:true});
  race('vedalken',asi(0,0,0,2,1),'common vedalken',{choices:[choice('skill','arcana history investigation medicine performance sleight_of_hand'),choice('tool',allTools),choice('language',CHOICE_LANGUAGES)],notes:['Неустанное усердие: +1к4 к проверкам выбранного расового навыка и инструмента.']});
  race('verdan',asi(0,0,1,0,0,2),'common goblin',{size:'small',grants:fixed('skill','persuasion'),choices:[choice('language',CHOICE_LANGUAGES)]});
  race('simic-hybrid',asi(0,0,2),'common',{abilities:{fixed:asi(0,0,2),choiceSlots:[1],excludeFixed:true},darkvision:60,choices:[choice('language','elvish vedalken')]});
  race('gith',asi(0,0,0,1),'common gith',{subraces:{gitzerai:{abilities:asi(0,0,0,0,2)},githyanki:{abilities:asi(2),grants:[...fixed('armor','light medium'),...fixed('weapon','shortsword longsword greatsword')],choices:[choice('skillOrTool',[...allSkills,...allTools]),choice('language',CHOICE_LANGUAGES)]}}});
  race('giff',{},'common',{abilities:flexible,swim:30,grants:fixed('weapon','firearms'),choices:[choice('language',CHOICE_LANGUAGES)],powerfulBuild:true});
  race('gnome',asi(0,0,0,2),'common gnomish',{speed:25,size:'small',darkvision:60,subraces:{'forest-gnome':{abilities:asi(0,1)},'rock-gnome':{abilities:asi(0,0,1),grants:fixed('tool','tinker')}}});
  race('goblin',asi(0,2,1),'common goblin',{size:'small',darkvision:60});
  race('goliath',asi(2,0,1),'common giant',{grants:fixed('skill','athletics'),powerfulBuild:true});
  race('grung',asi(0,2,1),'grung',{speed:25,climb:25,size:'small',grants:fixed('skill','perception'),notes:['Нуждается в погружении в воду на 1 час ежедневно; не знает Общий автоматически.']});
  race('dwarf',asi(0,0,2),'common dwarvish',{speed:25,darkvision:60,grants:fixed('weapon','battleaxe handaxe light_hammer warhammer'),choices:[choice('tool','smith brewer mason')],subraces:{'mountain-dwarf':{abilities:asi(2),grants:fixed('armor','light medium')},'hill-dwarf':{abilities:asi(0,0,0,0,1),hpBonus:1}}});
  race('genasi',asi(0,0,2),'common primordial',{subraces:{'air-genasi':{abilities:asi(0,1)},'earth-genasi':{abilities:asi(1)},'fire-genasi':{abilities:asi(0,0,0,1),darkvision:60},'water-genasi':{abilities:asi(0,0,0,0,1),swim:30}}});
  race('dragonborn',asi(2,0,0,0,0,1),'common draconic');
  race('harengon',{},'common',{abilities:flexible,grants:fixed('skill','perception'),initiativeProficiency:true,choices:[choice('language',CHOICE_LANGUAGES)]});
  race('kalashtar',asi(0,0,0,0,2,1),'common quori',{choices:[choice('language',CHOICE_LANGUAGES)]});
  race('kender',{},'common',{abilities:flexible,size:'small',choices:[choice('skill','insight investigation sleight_of_hand stealth survival'),choice('language',CHOICE_LANGUAGES)]});
  race('kenku',asi(0,2,0,0,1),'common auran',{choices:[choice('skill','acrobatics deception stealth sleight_of_hand',2)],notes:['Говорит только с помощью подражания услышанным звукам.']});
  race('centaur',asi(2,0,0,0,1),'common sylvan',{speed:40,powerfulBuild:true,choices:[choice('skill','animal_handling medicine nature survival')]});
  race('orc',asi(2,0,1),'common orc',{darkvision:60,powerfulBuild:true,choices:[choice('skill','animal_handling insight intimidation medicine nature perception survival',2)]});
  race('plasmoid',{},'common',{abilities:flexible,darkvision:60,choices:[choice('language',CHOICE_LANGUAGES)]});
  race('half-orc',asi(2,0,1),'common orc',{darkvision:60,grants:fixed('skill','intimidation')});
  race('halfling',asi(0,2),'common halfling',{speed:25,size:'small',subraces:{stocky:{abilities:asi(0,0,1)},'light-footed':{abilities:asi(0,0,0,0,0,1)}}});
  race('half-elf',asi(0,0,0,0,0,2),'common elvish',{abilities:{fixed:asi(0,0,0,0,0,2),choiceSlots:[1,1],distinct:true,excludeFixed:true},darkvision:60,choices:[choice('skill',allSkills,2),choice('language',CHOICE_LANGUAGES)]});
  race('kobold',asi(0,2),'common draconic',{size:'small',darkvision:60});
  race('warforged',asi(0,0,2),'common',{abilities:{fixed:asi(0,0,2),choiceSlots:[1],excludeFixed:true},acBonus:1,choices:[choice('skill',allSkills),choice('tool',allTools),choice('language',CHOICE_LANGUAGES)]});
  race('leonin',asi(1,0,2),'common leonin',{speed:35,darkvision:60,choices:[choice('skill','athletics intimidation perception survival')]});
  race('locathah',asi(2,1),'common aquan',{swim:30,naturalArmor:{base:12,ability:'dexterity'},grants:fixed('skill','athletics perception'),notes:['Нуждается в погружении в воду каждые 4 часа.']});
  race('loxodon',asi(0,0,2,0,1),'common loxodon',{naturalArmor:{base:12,ability:'constitution'},powerfulBuild:true});
  race('lizardfolk',asi(0,0,2,0,1),'common draconic',{swim:30,naturalArmor:{base:13,ability:'dexterity'},choices:[choice('skill','animal_handling nature perception stealth survival',2)]});
  race('minotaur',asi(2,0,1),'common minotaur',{choices:[choice('skill','intimidation persuasion')]});
  race('satyr',asi(0,1,0,0,0,2),'common sylvan',{speed:35,grants:fixed('skill','performance persuasion'),choices:[choice('tool',INSTRUMENTS)]});
  race('owlin',{},'common',{abilities:flexible,fly:30,flightRestriction:'medium-heavy',darkvision:120,grants:fixed('skill','stealth'),choices:[choice('language',CHOICE_LANGUAGES)]});
  race('tabaxi',asi(0,2,0,0,0,1),'common',{climb:20,darkvision:60,grants:fixed('skill','perception stealth'),choices:[choice('language',CHOICE_LANGUAGES)]});
  race('tiefling',asi(0,0,0,1,0,2),'common infernal',{darkvision:60});
  race('tortle',asi(2,0,0,0,1),'common aquan',{naturalArmor:{base:17},noArmor:true,grants:fixed('skill','survival')});
  race('thri-kreen',{},'common',{abilities:flexible,darkvision:60,naturalArmor:{base:13,ability:'dexterity'},choices:[choice('language',CHOICE_LANGUAGES)],notes:['Понимает известные языки; для общения использует телепатию.']});
  race('triton',asi(1,0,1,0,0,1),'common primordial',{swim:30,darkvision:60});
  race('firbolg',asi(1,0,0,0,2),'common elvish giant',{powerfulBuild:true});
  race('fairy',{},'common',{abilities:flexible,size:'small',fly:30,flightRestriction:'medium-heavy',choices:[choice('language',CHOICE_LANGUAGES)]});
  race('hadozee',{},'common',{abilities:flexible,climb:30,choices:[choice('language',CHOICE_LANGUAGES)]});
  race('hobgoblin',asi(0,0,2,1),'common goblin',{darkvision:60,grants:fixed('armor','light'),choices:[choice('weapon',MARTIAL_WEAPONS,2)]});
  race('changeling',asi(0,0,0,0,0,2),'common',{abilities:{fixed:asi(0,0,0,0,0,2),choiceSlots:[1],excludeFixed:true},choices:[choice('skill','deception insight intimidation persuasion',2),choice('language',CHOICE_LANGUAGES,2)]});
  race('shifter',{},'common',{darkvision:60,subraces:{'beasthide-shifter':{abilities:asi(1,0,2),grants:fixed('skill','athletics')},'longtooth-shifter':{abilities:asi(2,1),grants:fixed('skill','intimidation')},'swiftstride-shifter':{abilities:asi(0,2,0,0,0,1),grants:fixed('skill','acrobatics')},'wildhunt-shifter':{abilities:asi(0,1,0,0,2),grants:fixed('skill','survival')}}});
  race('yuan-ti-pureblood',asi(0,0,0,1,0,2),'common abyssal draconic',{darkvision:60});

  // Short original reminders, not full rulebook text. Conditional combat effects are
  // deliberately recorded as features rather than silently baked into permanent stats.
  const RACE_NOTES = {
    human:['Обычный человек: +1 ко всем характеристикам. Вариантный человек: два разных +1, навык и черта вместо этих бонусов.'],
    elf:['Наследие фей: преимущество против очарования; магия не усыпляет. Транс заменяет сон (4 часа).'],
    aarakocra:['Полёт 50 футов недоступен в средних и тяжёлых доспехах. Когти: безоружный удар наносит 1к4 + СИЛ рубящего урона.'],
    aasimar:['Сопротивление излучению и некротическому урону. Исцеляющие руки: действием восстановить хиты в размере уровня, один раз за продолжительный отдых. Преобразование подрасы появится только на 3-м уровне.'],
    autognome:['Тип: конструкт. Бронированный корпус: 13 + ЛОВ без доспеха. Создан для успеха: добавить 1к4 к атаке, проверке или спасброску, БМ раз за продолжительный отдых. Механическая природа: сопротивление яду, иммунитет к болезням, преимущество против паралича и отравления; не нужны пища, питьё и дыхание. Дозорный отдых; лечебная машина позволяет некоторые виды лечения и использование кости хитов при Починке.'],
    'astral-elf':['Наследие фей: преимущество против очарования. Звёздный шаг: бонусным действием телепортация на 30 футов, БМ раз за продолжительный отдых. Астральный транс: 4-часовой отдых, иммунитет к магическому сну; выбранные навык и оружие/инструмент можно менять после транса.'],
    bugbear:['Длинные руки: досягаемость рукопашной атаки в свой ход +5 футов. Мощное телосложение. Внезапная атака legacy: дополнительные 2к6 урона по застигнутой врасплох цели в первом раунде, один раз за бой.'],
    vedalken:['Преимущество на спасброски Интеллекта, Мудрости и Харизмы. Частичная амфибия: суммарно до 1 часа дыхания под водой за продолжительный отдых.'],
    verdan:['Чёрная кровь: перебросить 1 и 2 на костях хитов при коротком отдыхе. Ограниченная телепатия на 30 футов. Преимущество на спасброски Мудрости и Харизмы. На 5-м уровне размер меняется с Маленького на Средний.'],
    'simic-hybrid':['На 1-м уровне доступна только одна животная модификация. Второе улучшение выбирается на 5-м уровне.'],
    gith:['Псионика: расовая Волшебная рука невидима; дополнительные заклинания подрасы открываются на 3-м и 5-м уровнях.'],
    giff:['Мастерство огнестрельного оружия: игнорируется свойство «перезарядка» и помеха за дальнюю дистанцию. Астральная искра усиливает попадания оружием. Преимущество на проверки и спасброски Силы; мощное телосложение.'],
    gnome:['Гномья хитрость: преимущество на спасброски Интеллекта, Мудрости и Харизмы против магии.'],
    goblin:['Ярость мелких: раз за короткий/продолжительный отдых добавить уровень к урону атакой или заклинанием по существу крупнее вас. Проворство: Отход или Засада бонусным действием.'],
    goliath:['Каменная выносливость: реакцией уменьшить получаемый урон на 1к12 + ТЕЛ, раз за короткий/продолжительный отдых. Мощное телосложение. Горное рождение: сопротивление холоду и акклиматизация к высоте.'],
    grung:['Амфибия; иммунитет к яду и отравлению. Ядовитая кожа влияет на контакт с существами и колющее оружие. Прыжок без разбега: 25 футов в длину или 15 в высоту.'],
    dwarf:['Дварфская устойчивость: сопротивление яду и преимущество на спасброски от яда. Знание камня: удвоенный БМ в проверках Истории, связанных с каменной кладкой. Тяжёлый доспех не снижает скорость из-за недостатка Силы.'],
    genasi:['Legacy-дженази: общие бонусы ТЕЛ +2; стихийные способности определяются подрасой. Темновидение есть только у огненного дженази.'],
    dragonborn:['Драконье наследие определяет сопротивление урону и вид оружия дыхания. Дыхание: действие, 2к6 урона на 1-м уровне, Сл 8 + БМ + ТЕЛ; восстановление после короткого/продолжительного отдыха.'],
    harengon:['Заячий бросок: БМ к инициативе. Удачливая лапка: реакцией 1к4 к проваленному спасброску Ловкости при выполнении условий. Кроличий прыжок: бонусным действием 5 × БМ футов без провоцирования атак, БМ раз за продолжительный отдых.'],
    kalashtar:['Двойной разум: преимущество на спасброски Мудрости. Сопротивление психическому урону. Ментальная связь: телепатия на 10 × уровень футов. Отделение от снов защищает от эффектов, требующих сновидений.'],
    kender:['Бесстрашие: преимущество против испуга; провал можно обратить в успех раз за продолжительный отдых. Насмешка: бонусным действием воздействовать на цель в 60 футах, БМ раз за продолжительный отдых; характеристика Сл выбирается отдельно.'],
    kenku:['Мастер подделок: преимущество при создании подделок и копий. Подражание голосам и звукам: распознаётся Проницательностью против вашего Обмана.'],
    centaur:['Тип: фея. Копыта: 1к4 + СИЛ дробящего урона. Разбег 30 футов к цели и попадание рукопашным оружием позволяют удар копытами бонусным действием. Лошадиное тело увеличивает грузоподъёмность и затрудняет лазание.'],
    orc:['Агрессивность: бонусным действием перемещение на скорость к видимому/слышимому врагу. Мощное телосложение. Первобытная интуиция по исправлениям VGtM заменяет старое фиксированное Запугивание.'],
    plasmoid:['Тип: слизь. Аморфность: протискивание через отверстие в 1 дюйм без снаряжения; преимущество на начало и избегание захвата. Задержка дыхания 1 час. Сопротивление кислоте и яду; преимущество против отравления. Изменение формы и псевдопод.'],
    'half-orc':['Непоколебимая стойкость: при падении до 0 хитов без мгновенной смерти остаться с 1 хитом, раз за продолжительный отдых. Свирепые атаки: дополнительная кость оружия при критическом попадании рукопашным оружием.'],
    halfling:['Везучесть: перебрасывать 1 на к20 атаки, проверки и спасброска. Храбрость: преимущество против испуга. Проворство: можно проходить сквозь пространство существ большего размера.'],
    'half-elf':['Наследие фей: преимущество против очарования; магия не усыпляет. Универсальность навыков даёт два свободных владения.'],
    kobold:['Тактика стаи: преимущество атаки при союзнике рядом с целью и соблюдении условий. Чувствительность к солнцу: помеха атакам и проверкам Восприятия, основанным на зрении, на прямом солнце. Пресмыкательство: действием дать союзникам преимущество против близких врагов, раз за короткий/продолжительный отдых.'],
    warforged:['Сконструированная устойчивость: сопротивление яду, преимущество против отравления, иммунитет к болезням и магическому сну; не нужны пища, питьё и дыхание. Отдых стража. Встроенная защита: постоянный +1 к КД; интеграция доспеха требует времени.'],
    leonin:['Когти: 1к4 + СИЛ рубящего урона. Устрашающий рык: бонусным действием напугать выбранных существ в 10 футах, Сл 8 + БМ + ТЕЛ, раз за короткий/продолжительный отдых.'],
    locathah:['Ограниченная амфибия. Природный доспех: 12 + ЛОВ. Выносливость левиафана: преимущество на спасброски против очарования, испуга, паралича, отравления, ошеломления и магического сна.'],
    loxodon:['Мощное телосложение. Природный доспех: 12 + ТЕЛ. Хобот позволяет некоторые взаимодействия и захваты, но не заменяет руку для оружия или щита. Преимущество против очарования и испуга; чуткий нюх даёт преимущество отдельным проверкам Восприятия, Выживания и Анализа.'],
    lizardfolk:['Укус: 1к6 + СИЛ колющего урона. Задержка дыхания 15 минут. Природный доспех: 13 + ЛОВ. Умелый ремесленник создаёт простые предметы из останков. Голодная пасть: бонусная атака укусом с временными хитами при попадании, раз за короткий/продолжительный отдых.'],
    minotaur:['Рога: 1к6 + СИЛ колющего урона. Пронзающий разбег: после Рывка и перемещения 20 футов возможна атака рогами бонусным действием. Сокрушительные рога: после попадания рукопашной атакой в свой ход можно бонусным действием оттолкнуть цель при выполнении условий.'],
    satyr:['Тип: фея. Сопротивление магии: преимущество на спасброски против заклинаний и прочих магических эффектов. Таран: 1к4 + СИЛ дробящего урона. Весёлые прыжки увеличивают длину/высоту прыжка на 1к8 футов, расходуя передвижение.'],
    owlin:['Бесшумные перья дают Скрытность. Полёт равен скорости ходьбы и недоступен в средних и тяжёлых доспехах.'],
    tabaxi:['Кошачья ловкость удваивает скорость на текущий ход; восстановление после хода без перемещения. Когти: 1к4 + СИЛ рубящего урона и скорость лазания 20 футов.'],
    tiefling:['Адское сопротивление: сопротивление огню. Инфернальное наследие: Чудотворство с 1-го уровня; другие заклинания открываются на 3-м и 5-м уровнях.'],
    tortle:['Когти: 1к4 + СИЛ рубящего урона. Задержка дыхания 1 час. Панцирь: КД 17, щит учитывается; обычные доспехи не подходят. Защита панцирем действием временно даёт +4 КД и особые ограничения действий/движения; этот бонус не включён в постоянный КД.'],
    'thri-kreen':['Тип: монстр. Хитиновый панцирь: 13 + ЛОВ без доспеха; действие для изменения окраски и преимущества на Засаду до изменения окраски. Дополнительные руки способны на ограниченные взаимодействия и лёгкое оружие. Бессонность; телепатия с согласными существами до 120 футов.'],
    triton:['Амфибия. Сопротивление холоду и адаптация к глубинам. Посланник моря позволяет передавать простые идеи водным зверям. Управление воздухом и водой даёт расовые заклинания по уровню.'],
    firbolg:['Мощное телосложение. Скрытый шаг: невидимость бонусным действием до начала следующего хода или нарушающего её действия, раз за короткий/продолжительный отдых. Речь зверей и листвы: ограниченное общение с животными и растениями и преимущество на убеждение их. Магия фирболгов.'],
    fairy:['Тип: фея. Полёт равен скорости ходьбы и недоступен в средних и тяжёлых доспехах. Фейская магия: Друидизм с 1-го уровня; заклинания Огоньки феи и Увеличение/уменьшение открываются позднее.'],
    hadozee:['Ловкие ноги позволяют ограниченные взаимодействия бонусным действием. Планирование по исправленным правилам Spelljammer связано с падением; не является скоростью полёта. Уклонение хадози уменьшает урон реакцией на 1к6 + БМ, БМ раз за продолжительный отдых.'],
    hobgoblin:['Боевая подготовка даёт лёгкие доспехи и два воинских оружия. Спасение лица: добавить число видимых союзников в 30 футах (максимум +5) к проваленной атаке, проверке или спасброску, раз за короткий/продолжительный отдых.'],
    changeling:['Перевёртыш: действием менять внешность и голос, сохраняя игровые параметры; снаряжение не изменяется. Форма сохраняется до её отмены или смерти. Инстинкты дают два выбранных социальных навыка.'],
    shifter:['Смена формы: бонусным действием на 1 минуту получить временные хиты в размере уровня + ТЕЛ (минимум 1) и эффект подрасы; раз за короткий/продолжительный отдых. Временные хиты и бонусы формы не входят в постоянные характеристики.'],
    'yuan-ti-pureblood':['Сопротивление магии: преимущество на спасброски против заклинаний и прочих магических эффектов. Иммунитет к яду и отравлению. Врождённая магия змеиного наследия.']
  };
  const SUBRACE_NOTES = {
    high_elf:['Эльфийское оружие; один заговор волшебника (ИНТ) и дополнительный язык.'],
    wood_elf:['Эльфийское оружие; скорость 35 футов. Маскировка в дикой местности позволяет прятаться при лёгкой заслонённости природными явлениями.'],
    drow:['Чувствительность к солнцу: помеха атакам и зрительному Восприятию на прямом солнце. Магия дроу: Пляшущие огоньки с 1-го уровня, ХАР; последующие заклинания с 3-го и 5-го.'],
    'aasimar-guardian':['Сияющая душа станет доступна на 3-м уровне; на 1-м расового полёта нет.'],
    'aasimar-punisher':['Испускание сияния станет доступно на 3-м уровне.'],
    'fallen-aasimar':['Саван смерти станет доступен на 3-м уровне.'],
    gitzerai:['Ментальная дисциплина: преимущество против очарования и испуга. Расовая псионика использует Мудрость.'],
    githyanki:['Декадентское мастерство: язык и один навык/инструмент; воинское обучение даёт доспехи и оружие. Расовая псионика использует Интеллект.'],
    'forest-gnome':['Природная иллюзия: Малая иллюзия, ИНТ. Можно передавать простые идеи Маленьким и меньшим зверям звуками и жестами.'],
    'rock-gnome':['Знание изобретателя: удвоенный БМ для истории магических, алхимических и технологических предметов. Ремонтник позволяет создавать небольшие механизмы при затрате времени и материалов.'],
    'mountain-dwarf':['Владение лёгкими и средними доспехами; суммарный расовый бонус характеристик +4.'],
    'hill-dwarf':['Дварфская живучесть добавляет 1 к максимуму хитов за каждый уровень.'],
    'air-genasi':['Неограниченная задержка дыхания, пока не недееспособен. Смешаться с ветром: Левитация раз за продолжительный отдых, ТЕЛ.'],
    'earth-genasi':['Земляная прогулка игнорирует труднопроходимую местность из земли и камня. Слиться с камнем: Бесследное передвижение раз за продолжительный отдых, ТЕЛ.'],
    'fire-genasi':['Сопротивление огню. Огненная магия: Сотворение пламени с 1-го уровня, ТЕЛ; Огненные ладони с 3-го.'],
    'water-genasi':['Сопротивление кислоте, амфибия, плавание 30 футов. Формование воды с 1-го уровня, ТЕЛ; Сотворение или уничтожение воды с 3-го.'],
    stocky:['Устойчивость коренастых: преимущество против яда и сопротивление урону ядом.'],
    'light-footed':['Естественная скрытность: можно прятаться за существами хотя бы на один размер больше.'],
    'beasthide-shifter':['Зверошкура в изменённой форме: ещё 1к6 временных хитов и +1 КД.'],
    'longtooth-shifter':['Длиннозуб в изменённой форме: атака клыками бонусным действием, 1к6 + СИЛ колющего урона.'],
    'swiftstride-shifter':['Быстроног в изменённой форме: +10 футов ходьбы и реакция для перемещения на 10 футов без провоцирования атак, когда враг завершает ход в 5 футах.'],
    'wildhunt-shifter':['Дикий охотник в изменённой форме: преимущество на проверки Мудрости; существа в 30 футах не получают преимущество на атаки по вам, пока вы не недееспособны.']
  };
  Object.entries(RACE_NOTES).forEach(([id,notes])=>RACES[id].notes=[...notes,...(RACES[id].notes||[])]);
  Object.values(RACES).forEach(r=>Object.entries(r.subraces||{}).forEach(([id,sub])=>{sub.notes=SUBRACE_NOTES[id]||[];}));

  const CLASSES = Object.create(null);
  function klass(id, hitDie, saves, skills, count, armor, weapons, extra = {}) {
    CLASSES[id] = {hitDie,saves:words(saves),grants:[...fixed('armor',armor),...fixed('weapon',weapons)],choices:[choice('skill',skills === '*' ? allSkills : skills,count)],...extra};
  }
  klass('barbarian',12,'strength constitution','animal_handling athletics intimidation nature perception survival',2,'light medium shield','simple martial');
  klass('bard',8,'dexterity charisma','*',3,'light','simple hand_crossbow longsword rapier shortsword',{toolChoices:[choice('tool',INSTRUMENTS,3)],spellAbility:'charisma'});
  klass('fighter',10,'strength constitution','acrobatics animal_handling athletics history insight intimidation perception survival',2,'light medium heavy shield','simple martial');
  klass('wizard',6,'intelligence wisdom','arcana history insight investigation medicine religion',2,'','dagger dart sling quarterstaff light_crossbow',{spellAbility:'intelligence'});
  klass('druid',8,'intelligence wisdom','arcana animal_handling insight medicine nature perception religion survival',2,'light medium shield','club dagger dart javelin mace quarterstaff scimitar sickle sling spear',{tools:['herbalism_kit'],languages:['druidic'],spellAbility:'wisdom'});
  klass('cleric',8,'wisdom charisma','history insight medicine persuasion religion',2,'light medium shield','simple',{spellAbility:'wisdom'});
  klass('artificer',8,'constitution intelligence','arcana history investigation medicine nature perception sleight_of_hand',2,'light medium shield','simple',{tools:['thieves_tools','tinker'],toolChoices:[choice('tool',ARTISAN_TOOLS)],spellAbility:'intelligence'});
  klass('warlock',8,'wisdom charisma','arcana deception history intimidation investigation nature religion',2,'light','simple',{spellAbility:'charisma'});
  klass('monk',8,'strength dexterity','acrobatics athletics history insight religion stealth',2,'','simple shortsword',{toolChoices:[choice('tool',[...ARTISAN_TOOLS,...INSTRUMENTS])]});
  klass('paladin',10,'wisdom charisma','athletics insight intimidation medicine persuasion religion',2,'light medium heavy shield','simple martial');
  klass('rogue',8,'dexterity intelligence','acrobatics athletics deception insight intimidation investigation perception performance persuasion sleight_of_hand stealth',4,'light','simple hand_crossbow longsword rapier shortsword',{tools:['thieves_tools'],languages:['thieves_cant']});
  klass('ranger',10,'strength dexterity','animal_handling athletics insight investigation nature perception stealth survival',3,'light medium shield','simple martial');
  klass('sorcerer',6,'constitution charisma','arcana deception insight intimidation persuasion religion',2,'','dagger dart sling quarterstaff light_crossbow',{spellAbility:'charisma'});
  const BACKGROUNDS = Object.create(null);
  function background(id, skills, tools, choices = []) { BACKGROUNDS[id] = {grants:[...fixed('skill',skills),...fixed('tool',tools)],choices}; }
  background('entertainer','acrobatics performance','disguise_kit',[choice('tool',INSTRUMENTS)]);
  background('urchin','sleight_of_hand stealth','disguise_kit thieves_tools');
  background('noble','history persuasion','',[choice('tool',GAMING_SETS),choice('language',CHOICE_LANGUAGES)]);
  background('guild-artisan','insight persuasion','',[choice('tool',ARTISAN_TOOLS),choice('language',CHOICE_LANGUAGES)]);
  background('sailor','athletics perception','navigator water_vehicles');
  background('sage','arcana history','',[choice('language',CHOICE_LANGUAGES,2)]);
  background('folk-hero','animal_handling survival','land_vehicles',[choice('tool',ARTISAN_TOOLS)]);
  background('hermit','medicine religion','herbalism_kit',[choice('language',CHOICE_LANGUAGES)]);
  background('pirate','athletics perception','navigator water_vehicles');
  background('criminal','deception stealth','thieves_tools',[choice('tool',GAMING_SETS)]);
  background('acolyte','insight religion','',[choice('language',CHOICE_LANGUAGES,2)]);
  background('soldier','athletics intimidation','land_vehicles',[choice('tool',GAMING_SETS)]);
  background('outlander','athletics survival','',[choice('tool',INSTRUMENTS),choice('language',CHOICE_LANGUAGES)]);
  background('charlatan','deception sleight_of_hand','disguise_kit forgery_kit');

  const DEFERRED_FIELD_IDS = ['human_language','high_elf_language','vedalken_skill','vedalken_language','verdan_language','simic-hybrid_language','kenku_skill_1','kenku_skill_2','half_elf_skill_1','half_elf_skill_2','half_elf_language','lizardfolk_skill_1','lizardfolk_skill_2','changeling_skill_1','changeling_skill_2'];
  const DEFERRED_POPUP_IDS = ['human_language_popup','high_elf_language_popup','vedalken_skill_popup','vedalken_language_popup','verdan_language_popup','simic-hybrid_language_popup','kenku_skill_popup','half_elf_skill_popup','half_elf_language_popup','lizardfolk_skill_popup','changeling_skill_popup'];
  DEFERRED_FIELD_IDS.push(...DEFERRED_POPUP_IDS);
  const LABELS = {...SKILLS,...TOOLS,...LANGUAGES,...WEAPONS,...ARMOR};
  function labelFor(type,id) { return ({skill:SKILLS,tool:TOOLS,language:LANGUAGES,weapon:WEAPONS,armor:ARMOR}[type]||LABELS)[id]||id; }
  function abilityProfile(character) {
    const r = RACES[character.race];
    if (!r) return null;
    let p = r.abilities;
    if (p.variantField) {
      p = Object.hasOwn(p.variants,character[p.variantField]) ? p.variants[character[p.variantField]] : null;
      if (!p) return {missingVariant:true,variantField:r.abilities.variantField,fixed:{}};
    }
    const sub = r.subraces && Object.hasOwn(r.subraces,character.race_sub) && r.subraces[character.race_sub];
    const fixedBonuses={...(p.fixed||{})};
    Object.entries(sub&&sub.abilities||{}).forEach(([id,value])=>{fixedBonuses[id]=(fixedBonuses[id]||0)+value;});
    return {...p,fixed:fixedBonuses};
  }
  function abilityBonuses(character, extra = {}) {
    const p = abilityProfile(character), result = {...(p && p.fixed)};
    if (p && !p.missingVariant) {
      const plan = p.plans ? p.plans.find(v=>v.id===character.abilityBonusPlan) : p;
      const used = new Set();
      (plan && plan.choiceSlots || []).forEach((amount,i)=>{
        const id = character.abilityBonusChoices && character.abilityBonusChoices['slot_'+i];
        if (!ABILITIES.includes(id) || (p.distinct && used.has(id)) || (p.excludeFixed && result[id])) return;
        used.add(id); result[id] = (result[id]||0)+amount;
      });
    }
    Object.entries(extra.abilityBonuses||{}).forEach(([id,n])=>{if(ABILITIES.includes(id)&&Number.isFinite(n)) result[id]=(result[id]||0)+n;});
    return result;
  }
  function finalAbilities(character, extra = {}) {
    const bonuses = abilityBonuses(character,extra);
    return Object.fromEntries(ABILITIES.map(id=>[id,Number.isFinite(character.abilities && character.abilities[id]) ? character.abilities[id]+(bonuses[id]||0) : null]));
  }
  function validateAbilities(character, extra = {}) {
    const errors=[], p=abilityProfile(character);
    if(!p) return [{id:'race',message:'Выберите расу.'}];
    if(p.missingVariant) errors.push({id:p.variantField,message:'Выберите вариант человека.'});
    const base = ABILITIES.map(id=>character.abilities && character.abilities[id]);
    const method=character.abilityMethod||character.abilitiesMethod||'standard';
    if(method==='point_buy') {
      const costs={8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9};
      if(base.some(v=>!Number.isInteger(v)||!Object.hasOwn(costs,v))||base.reduce((sum,v)=>sum+(costs[v]||0),0)>27) errors.push({id:'abilities',message:'Покупка характеристик: значения от 8 до 15, суммарная стоимость не более 27 очков.'});
    } else if(method==='manual') {
      if(base.some(v=>!Number.isInteger(v)||v<3||v>18))errors.push({id:'abilities',message:'Введите шесть целых значений от 3 до 18 до расовых бонусов.'});
    } else if(method!=='standard'&&method!=='standard_array') {
      errors.push({id:'abilities',message:'Неизвестный способ определения характеристик.'});
    } else if(base.some(v=>!Number.isInteger(v)) || base.slice().sort((a,b)=>a-b).join(',')!=='8,10,12,13,14,15') errors.push({id:'abilities',message:'Распределите стандартный набор 15, 14, 13, 12, 10, 8 ровно по одному разу.'});
    const plan=p.plans ? p.plans.find(v=>v.id===character.abilityBonusPlan) : p;
    if(!plan) errors.push({id:'abilityBonusPlan',message:'Выберите схему расовых бонусов.'});
    const used=new Set(), slots=plan && plan.choiceSlots || [];
    slots.forEach((amount,i)=>{
      const id=character.abilityBonusChoices && character.abilityBonusChoices['slot_'+i];
      if(!ABILITIES.includes(id)||(p.distinct&&used.has(id))||(p.excludeFixed&&p.fixed[id])) errors.push({id:'abilityBonusChoices',message:'Выберите разные допустимые характеристики для расовых бонусов.'});
      used.add(id);
    });
    Object.keys(character.abilityBonusChoices||{}).forEach(id=>{if(!slots.some((_,i)=>id==='slot_'+i)) errors.push({id:'abilityBonusChoices',message:'Сохранённый бонус больше не относится к выбранной расе.'});});
    if(Object.values(finalAbilities(character,extra)).some(v=>v>20)) errors.push({id:'abilities',message:'Характеристика не может превышать 20.'});
    return errors;
  }

  const collection = {skill:'skills',tool:'tools',language:'languages',weapon:'weapons',armor:'armor',save:'savingThrows'};
  function optionType(type,id) {
    if(type==='skillOrTool') return Object.hasOwn(SKILLS,id)?'skill':'tool';
    if(type==='weaponOrTool') return Object.hasOwn(WEAPONS,id)?'weapon':'tool';
    return type;
  }
  function basicPlan(character, extra = {}) {
    const plan={fixed:[],slots:[],conflicts:[],errors:[]};
    const addChoices = (choices,source,prefix)=> (choices||[]).forEach((c,index)=>{
      for(let i=0;i<(c.count||1);i++) plan.slots.push({id:`${prefix}:${index}:${i}`,type:c.type,label:c.label||`${source}: ${c.type==='language'?'язык':c.type==='tool'?'инструмент':c.type==='weapon'?'оружие':'владение'} ${(c.count||1)>1?i+1:''}`.trim(),source,options:[...c.options],expertise:!!c.expertise});
    });
    const add = (data,source,prefix)=>{
      if(!data)return;
      (data.grants||[]).forEach(g=>plan.fixed.push({...g,source}));
      (data.languages||[]).forEach(id=>plan.fixed.push({type:'language',id,source}));
      (data.tools||[]).forEach(id=>plan.fixed.push({type:'tool',id,source}));
      (data.saves||[]).forEach(id=>plan.fixed.push({type:'save',id,source}));
      addChoices([...(data.choices||[]),...(data.toolChoices||[])],source,prefix);
    };
    add(RACES[character.race],'Раса','race:'+character.race);
    const r=RACES[character.race];
    if(r&&r.subraces) {
      if(!Object.hasOwn(r.subraces,character.race_sub)) plan.errors.push({id:'race_sub',message:'Выберите подрасу.'});
      else add(r.subraces[character.race_sub],'Подраса','subrace:'+character.race_sub);
    }
    if(character.race==='human'&&character.human_feature==='human_alt') addChoices([choice('skill',allSkills)],'Вариантный человек','human-alt');
    add(CLASSES[character.class],'Класс','class:'+character.class);
    add(BACKGROUNDS[character.background],'Предыстория','background:'+character.background);
    if(character.race && !r) plan.errors.push({id:'race',message:'Неизвестная раса.'});
    if(character.class && !CLASSES[character.class]) plan.errors.push({id:'class',message:'Неизвестный класс.'});
    if(character.background && !BACKGROUNDS[character.background]) plan.errors.push({id:'background',message:'Неизвестная предыстория.'});
    (extra.fixedProficiencies||[]).forEach(g=>plan.fixed.push({...g,source:g.source||'Особенность'}));
    (extra.savingThrowProficiencies||[]).filter(id=>ABILITIES.includes(id)).forEach(id=>plan.fixed.push({type:'save',id,source:'Черта'}));
    (extra.proficiencySlots||[]).forEach(s=>plan.slots.push({...s,options:[...s.options],source:s.source||'Особенность'}));
    const seen=new Map(), duplicateCounts=new Map();
    plan.fixed.forEach(g=>{
      const key=g.type+':'+g.id;
      if(seen.has(key)&&!g.noReplacement&&(g.type==='skill'||g.type==='tool')) {
        const duplicateNumber=(duplicateCounts.get(key)||0)+1;
        duplicateCounts.set(key,duplicateNumber);
        const slot={id:`replacement:${key}:${duplicateNumber}`,type:g.type,source:g.source,options:g.type==='skill'?allSkills:allTools,label:`Повторное владение «${LABELS[g.id]}»: замена`};
        plan.slots.push(slot);
        plan.conflicts.push({id:slot.id,type:g.type,proficiency:g.id,sources:[seen.get(key).source,g.source],message:`«${LABELS[g.id]}» дают ${seen.get(key).source.toLowerCase()} и ${g.source.toLowerCase()}. Выберите замену того же типа.`});
      } else if(!seen.has(key)) seen.set(key,g);
    });
    plan.fixed=[...seen.values()];
    return plan;
  }
  function resolveProficiencies(character,extra = {}) {
    const plan=basicPlan(character,extra), result={...plan,skills:[],tools:[],languages:[],weapons:[],armor:[],savingThrows:[],expertise:[],grants:[...plan.fixed]};
    const seen=new Set(), choices={...character.proficiencyChoices||{},...extra.progressionProficiencyChoices||{}};
    const add = g=>{const key=g.type+':'+g.id;if(!seen.has(key)&&collection[g.type]){seen.add(key);result[collection[g.type]].push(g.id);}};
    plan.fixed.forEach(add);
    const regular=plan.slots.filter(s=>!s.expertise && s.type!=='expertise');
    regular.forEach(s=>{
      const id=choices[s.id],type=optionType(s.type,id);
      if(!id) {result.errors.push({id:s.id,message:`Заполните выбор: ${s.label}.`});return;}
      if(!s.options.includes(id)) {result.errors.push({id:s.id,message:`«${LABELS[id]||id}» не входит в список для «${s.label}».`});return;}
      if(seen.has(type+':'+id)) {result.errors.push({id:s.id,message:`«${LABELS[id]||id}» уже получено из другого источника. Выберите другое владение.`});return;}
      const grant={type,id,source:s.source,slotId:s.id};add(grant);result.grants.push(grant);
      if(s.grantExpertise)result.expertise.push(id);
    });
    let expertiseSlots=plan.slots.filter(s=>s.expertise||s.type==='expertise');
    if(character.class==='rogue') expertiseSlots.push(...[0,1].map(i=>({id:'class:rogue:expertise:'+i,type:'expertise',expertise:true,source:'Компетентность плута',label:`Компетентность плута ${i+1}`,options:[...result.skills,...result.tools.filter(id=>id==='thieves_tools')]})));
    const expertSeen=new Set(result.expertise);
    expertiseSlots=expertiseSlots.map(s=>({...s,expertise:true,options:s.options.filter(id=>result.skills.includes(id)||result.tools.includes(id))}));
    expertiseSlots.forEach(s=>{
      const id=choices[s.id];
      if(!s.options.includes(id)||expertSeen.has(id)) {result.errors.push({id:s.id,message:'Для компетентности выберите разные навыки или инструменты, которыми уже владеете.'});return;}
      expertSeen.add(id);result.expertise.push(id);
    });
    result.slots=[...regular,...expertiseSlots];
    result.expertise=[...new Set([...result.expertise,...(extra.fixedExpertise||[]).filter(id=>result.skills.includes(id)||result.tools.includes(id))])];
    Object.keys(choices).forEach(id=>{if(!result.slots.some(s=>s.id===id)&&choices[id])result.errors.push({id,message:'Сохранённое владение больше не относится к текущему персонажу. Удалите устаревший выбор.'});});
    return result;
  }
  function getProficiencyPlan(character,extra = {}) {const r=resolveProficiencies(character,extra);return {fixed:r.fixed,slots:r.slots,conflicts:r.conflicts,errors:r.errors};}
  function derivedStats(character,extra = {}) {
    const abilities=finalAbilities(character,extra), modifiers=Object.fromEntries(ABILITIES.map(id=>[id,abilities[id]===null?0:Math.floor((abilities[id]-10)/2)]));
    const r=RACES[character.race]||{}, sub=r.subraces&&Object.hasOwn(r.subraces,character.race_sub)&&r.subraces[character.race_sub]||{}, c=CLASSES[character.class]||{}, proficiencies=resolveProficiencies(character,extra);
    const raceData={...r,...sub}, proficiencyBonus=2;
    const perLevel=(sub.hpBonus||0)+(extra.hpBonus||0), rolls=extra.hpRolls||[];
    const hp=c.hitDie ? extra.hpContributions ? Math.max(1,c.hitDie+modifiers.constitution+perLevel+(extra.startingClassHpBonus||0))+extra.hpContributions.reduce((sum,x)=>sum+Math.max(1,x.raw+modifiers.constitution+perLevel+(x.bonus||0)),0) : Math.max(1,c.hitDie+modifiers.constitution+perLevel)+rolls.reduce((sum,roll)=>sum+Math.max(1,roll+modifiers.constitution+perLevel),0):null;
    const acOptions=[{label:'Без доспеха',value:10+modifiers.dexterity}];
    if(raceData.naturalArmor) acOptions.push({label:'Природный доспех',value:raceData.naturalArmor.base+(modifiers[raceData.naturalArmor.ability]||0)});
    const shield=!!extra.shield, worn=extra.armor;
    if((extra.unarmoredDefense||character.class)==='barbarian'&&!worn)acOptions.push({label:'Защита без доспехов варвара',value:10+modifiers.dexterity+modifiers.constitution});
    if((extra.unarmoredDefense||character.class)==='monk'&&!worn&&!shield)acOptions.push({label:'Защита без доспехов монаха',value:10+modifiers.dexterity+modifiers.wisdom});
    (extra.acOptions||[]).forEach(o=>acOptions.push({...o}));
    let ac = Math.max(...acOptions.map(v=>v.value));
    if(worn&&!raceData.noArmor) ac=Number(worn.base)+(worn.dexterity===false?0:Math.min(modifiers.dexterity,worn.dexterityCap===undefined?Infinity:worn.dexterityCap));
    // Lizardfolk/locathah may retain their natural AC when armor would be worse.
    if(worn&&['lizardfolk','locathah','loxodon'].includes(character.race)) ac=Math.max(ac,raceData.naturalArmor.base+(modifiers[raceData.naturalArmor.ability]||0));
    ac+=(shield?2:0)+(r.acBonus||0)+(extra.acBonus||0);
    const saves=Object.fromEntries(ABILITIES.map(id=>[id,modifiers[id]+(proficiencies.savingThrows.includes(id)?proficiencyBonus:0)]));
    proficiencies.expertise=[...new Set([...proficiencies.expertise,...(extra.fixedExpertise||[]).filter(id=>proficiencies.skills.includes(id)||proficiencies.tools.includes(id))])];
    const skills=Object.fromEntries(Object.keys(SKILLS).map(id=>[id,modifiers[SKILL_ABILITIES[id]]+(proficiencies.skills.includes(id)?proficiencyBonus*(proficiencies.expertise.includes(id)?2:1):(extra.jackOfAllTrades?1:0))+(SKILL_ABILITIES[id]==='charisma'?(extra.charismaCheckBonus||0):0)]));
    const speed=Math.max(0,(raceData.speed||30)+(extra.speedBonus||0)-(worn&&worn.type==='heavy'&&worn.strength&&abilities.strength<worn.strength&&character.race!=='dwarf'?10:0));
    let fly=raceData.fly||0,climb=raceData.climb||0,swim=extra.swimOverride||raceData.swim||0;
    if(['fairy','owlin'].includes(character.race))fly=speed;
    if(character.race==='hadozee')climb=speed;
    if(character.race==='giff')swim=speed;
    if(character.race==='simic-hybrid'&&character.creation_simic_adaptation==='climb')climb=speed;
    if(character.race==='simic-hybrid'&&character.creation_simic_adaptation==='swim')swim=speed;
    if(raceData.flightRestriction==='medium-heavy'&&worn&&['medium','heavy'].includes(worn.type))fly=0;
    if(extra.armorClass!==undefined&&Number.isFinite(extra.armorClass))ac=extra.armorClass;
    const size=['harengon','owlin','hadozee','plasmoid','thri-kreen'].includes(character.race)&&['small','medium'].includes(character.creation_size)?character.creation_size:raceData.size||'medium';
    const spellAbility=extra.spellcasting?.ability||c.spellAbility;
    return {abilities,modifiers,proficiencies,proficiencyBonus,level:extra.effectiveLevel||1,hitDice:extra.effectiveLevel||1,hitDicePools:extra.hitDicePools||[{die:c.hitDie,count:extra.effectiveLevel||1}],hitDie:c.hitDie||null,hp,maxHp:hp,ac,armorClass:ac,acOptions,speed,swim,climb,fly,darkvision:extra.darkvisionOverride||raceData.darkvision||0,initiative:modifiers.dexterity+(r.initiativeProficiency?2:0)+(extra.initiativeBonus||0),saves,savingThrows:saves,skills,passivePerception:10+skills.perception+(extra.passivePerceptionBonus||0)+(extra.passiveBonus||0),passiveInvestigation:10+skills.investigation+(extra.passiveBonus||0),spellAbility:spellAbility||null,spellSaveDc:spellAbility?8+2+modifiers[spellAbility]:null,spellAttack:spellAbility?2+modifiers[spellAbility]:null,carryingCapacity:abilities.strength===null?null:abilities.strength*15*(r.powerfulBuild?2:1),size,notes:[...(r.notes||[]),...(sub.notes||[]),...(extra.notes||[])]};
  }
  return {ABILITIES,SKILLS,SKILL_ABILITIES,TOOLS,ARTISAN_TOOLS,INSTRUMENTS,GAMING_SETS,LANGUAGES,CHOICE_LANGUAGES,WEAPONS,SIMPLE_WEAPONS,MARTIAL_WEAPONS,ARMOR,LABELS,RACES,CLASSES,BACKGROUNDS,DEFERRED_FIELD_IDS,abilityProfile,abilityBonuses,finalAbilities,validateAbilities,getProficiencyPlan,resolveProficiencies,derivedStats,optionType,labelFor};
});
