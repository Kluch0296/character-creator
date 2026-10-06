/* Level-one character creation, D&D 5e 2014. No DOM or persistent state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.CreationOptions = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const words = s => s ? s.split(' ') : [];
  const unique = xs => [...new Set(xs)];
  const values = v => Array.isArray(v) ? v : (v ? [v] : []);
  const mod = n => Math.floor((Number(n || 10) - 10) / 2);
  const ABILITIES = {strength:'Сила',dexterity:'Ловкость',constitution:'Телосложение',intelligence:'Интеллект',wisdom:'Мудрость',charisma:'Харизма'};
  const CLASSES = {bard:'Бард',cleric:'Жрец',druid:'Друид',sorcerer:'Чародей',warlock:'Колдун',wizard:'Волшебник',artificer:'Изобретатель'};
  const CASTING = {bard:['charisma',2,4],cleric:['wisdom',3,'prepared'],druid:['wisdom',2,'prepared'],sorcerer:['charisma',4,2],warlock:['charisma',2,2],wizard:['intelligence',3,'book'],artificer:['intelligence',2,'prepared']};
  const SPELL_NAMES = {
    'acid-splash':'Брызги кислоты','blade-ward':'Защита от оружия','chill-touch':'Леденящее прикосновение','dancing-lights':'Пляшущие огоньки','druidcraft':'Искусство друидов','eldritch-blast':'Мистический заряд','fire-bolt':'Огненный снаряд','friends':'Дружба','guidance':'Указание','light':'Свет','mage-hand':'Волшебная рука','mending':'Починка','message':'Сообщение','minor-illusion':'Малая иллюзия','poison-spray':'Ядовитые брызги','prestidigitation':'Фокусы','produce-flame':'Сотворение пламени','ray-of-frost':'Луч холода','resistance':'Сопротивление','sacred-flame':'Священное пламя','shillelagh':'Дубинка','shocking-grasp':'Электрошок','spare-the-dying':'Уход за умирающим','thaumaturgy':'Чудотворство','thorn-whip':'Терновый кнут','true-strike':'Меткий удар','vicious-mockery':'Злая насмешка',
    'alarm':'Сигнал тревоги','animal-friendship':'Дружба с животными','armor-of-agathys':'Доспех Агатиса','arms-of-hadar':'Руки Хадара','bane':'Порча','bless':'Благословение','burning-hands':'Огненные ладони','charm-person':'Очарование личности','chromatic-orb':'Цветной шарик','color-spray':'Цветные брызги','command':'Приказ','compelled-duel':'Принуждённая дуэль','comprehend-languages':'Понимание языков','create-or-destroy-water':'Сотворение или уничтожение воды','cure-wounds':'Лечение ран','detect-evil-and-good':'Обнаружение зла и добра','detect-magic':'Обнаружение магии','detect-poison-and-disease':'Обнаружение болезней и яда','disguise-self':'Маскировка','dissonant-whispers':'Диссонирующий шёпот','divine-favor':'Божественное благоволение','ensnaring-strike':'Опутывающий удар','entangle':'Опутывание','expeditious-retreat':'Поспешное отступление','faerie-fire':'Огонь фей','false-life':'Псевдожизнь','feather-fall':'Падение пёрышком','find-familiar':'Поиск фамильяра','fog-cloud':'Туманное облако','goodberry':'Чудо-ягоды','grease':'Скольжение','guiding-bolt':'Направляющий снаряд','healing-word':'Лечащее слово','hellish-rebuke':'Адское возмездие','heroism':'Героизм','hex':'Сглаз','identify':'Опознание','illusory-script':'Иллюзорное письмо','inflict-wounds':'Нанесение ран','jump':'Прыжок','longstrider':'Скороход','mage-armor':'Доспехи мага','magic-missile':'Волшебная стрела','protection-from-evil-and-good':'Защита от зла и добра','purify-food-and-drink':'Очищение пищи и питья','ray-of-sickness':'Луч болезни','sanctuary':'Убежище','searing-smite':'Палящая кара','shield':'Щит','shield-of-faith':'Щит веры','silent-image':'Безмолвный образ','sleep':'Усыпление','speak-with-animals':'Разговор с животными','tashas-hideous-laughter':'Жуткий смех Таши','tensers-floating-disk':'Тензеров парящий диск','thunderwave':'Волна грома','unseen-servant':'Невидимый слуга','witch-bolt':'Ведьмин снаряд','absorb-elements':'Поглощение стихий','catapult':'Катапульта','snare':'Силок','booming-blade':'Громовой клинок','green-flame-blade':'Клинок зелёного пламени','frostbite':'Обморожение','thorn-whip':'Терновый кнут','magic-stone':'Волшебный камень','create-bonfire':'Сотворение костра','thunderclap':'Раскат грома',
    'control-flames':'Власть над огнём','sword-burst':'Вспышка мечей','lightning-lure':'Лассо молнии','mold-earth':'Лепка земли','infestation':'Нашествие','toll-the-dead':'Погребальный звон','mind-sliver':'Расщепление разума','shape-water':'Формование воды','gust':'Шквал','tashas-caustic-brew':'Едкий отвар Таши'
  };
  const LISTS = {
    bard:[words('blade-ward dancing-lights friends light mage-hand mending message minor-illusion prestidigitation true-strike vicious-mockery'),words('animal-friendship bane charm-person comprehend-languages cure-wounds detect-magic disguise-self dissonant-whispers faerie-fire feather-fall healing-word heroism identify illusory-script longstrider silent-image sleep speak-with-animals tashas-hideous-laughter thunderwave unseen-servant')],
    cleric:[words('guidance light mending resistance sacred-flame spare-the-dying thaumaturgy'),words('bane bless command create-or-destroy-water cure-wounds detect-evil-and-good detect-magic detect-poison-and-disease guiding-bolt healing-word inflict-wounds protection-from-evil-and-good purify-food-and-drink sanctuary shield-of-faith')],
    druid:[words('druidcraft guidance mending poison-spray produce-flame resistance shillelagh thorn-whip'),words('animal-friendship charm-person create-or-destroy-water cure-wounds detect-magic detect-poison-and-disease entangle faerie-fire fog-cloud goodberry healing-word jump longstrider purify-food-and-drink speak-with-animals thunderwave')],
    sorcerer:[words('acid-splash blade-ward chill-touch dancing-lights fire-bolt friends light mage-hand mending message minor-illusion poison-spray prestidigitation ray-of-frost shocking-grasp true-strike'),words('burning-hands charm-person chromatic-orb color-spray comprehend-languages detect-magic disguise-self expeditious-retreat false-life feather-fall fog-cloud jump mage-armor magic-missile ray-of-sickness shield silent-image sleep thunderwave witch-bolt')],
    warlock:[words('blade-ward chill-touch eldritch-blast friends mage-hand minor-illusion poison-spray prestidigitation true-strike'),words('armor-of-agathys arms-of-hadar charm-person comprehend-languages expeditious-retreat hellish-rebuke hex illusory-script protection-from-evil-and-good unseen-servant witch-bolt')],
    wizard:[words('acid-splash blade-ward chill-touch dancing-lights fire-bolt friends light mage-hand mending message minor-illusion poison-spray prestidigitation ray-of-frost shocking-grasp true-strike'),words('alarm burning-hands charm-person chromatic-orb color-spray comprehend-languages detect-magic disguise-self expeditious-retreat false-life feather-fall find-familiar fog-cloud grease identify illusory-script jump longstrider mage-armor magic-missile protection-from-evil-and-good ray-of-sickness shield silent-image sleep tashas-hideous-laughter tensers-floating-disk thunderwave unseen-servant witch-bolt')],
    artificer:[words('acid-splash booming-blade create-bonfire dancing-lights fire-bolt frostbite green-flame-blade guidance light lightning-lure mage-hand magic-stone mending message poison-spray prestidigitation ray-of-frost resistance shocking-grasp spare-the-dying sword-burst thorn-whip thunderclap'),words('absorb-elements alarm catapult cure-wounds detect-magic disguise-self expeditious-retreat faerie-fire false-life feather-fall grease identify jump longstrider purify-food-and-drink sanctuary snare tashas-caustic-brew')]
  };
  const RITUALS = words('ceremony alarm comprehend-languages detect-magic detect-poison-and-disease find-familiar identify illusory-script purify-food-and-drink speak-with-animals tensers-floating-disk unseen-servant');
  const ATTACK_CANTRIPS = words('chill-touch eldritch-blast fire-bolt produce-flame ray-of-frost shocking-grasp thorn-whip booming-blade green-flame-blade primal-savagery');
  const DOMAINS = {knowledge:{label:'Знание',spells:['command','identify']},life:{label:'Жизнь',spells:['bless','cure-wounds']},light:{label:'Свет',spells:['burning-hands','faerie-fire']},nature:{label:'Природа',spells:['animal-friendship','speak-with-animals']},tempest:{label:'Буря',spells:['fog-cloud','thunderwave']},trickery:{label:'Обман',spells:['charm-person','disguise-self']},war:{label:'Война',spells:['divine-favor','shield-of-faith']}};
  const PATRONS = {archfey:{label:'Архифея',spells:['faerie-fire','sleep']},fiend:{label:'Исчадие',spells:['burning-hands','command']},'great-old-one':{label:'Великий Древний',spells:['dissonant-whispers','tashas-hideous-laughter']}};
  const DRAGONS = {black:'Чёрный — кислота',blue:'Синий — электричество',brass:'Латунный — огонь',bronze:'Бронзовый — электричество',copper:'Медный — кислота',gold:'Золотой — огонь',green:'Зелёный — яд',red:'Красный — огонь',silver:'Серебряный — холод',white:'Белый — холод'};
  const FEATS = {
    alert:{label:'Бдительный',text:'+5 к инициативе; нельзя застать врасплох в сознании; скрытый атакующий не получает преимущества только из-за невидимости.'},
    athlete:{label:'Атлет',ability:['strength','dexterity'],text:'Подъём из положения лёжа за 5 футов; лазание без дополнительной траты; разбег для прыжка 5 футов.'},
    actor:{label:'Артистичный',fixed:'charisma',text:'Преимущество на Обман и Выступление при выдаче себя за другого; подражание голосам.'},
    charger:{label:'Налётчик',text:'После действия Рывок — атака или толчок бонусным действием; при прямом разбеге 10 футов +5 урона либо толчок на 10 футов.'},
    'crossbow-expert':{label:'Эксперт в арбалетах',text:'Игнорирование свойства «перезарядка» знакомых арбалетов; стрельба вблизи без помехи; особая бонусная атака ручным арбалетом. Свободная рука для боеприпасов по-прежнему нужна.'},
    'defensive-duelist':{label:'Оборонительный дуэлянт',requires:['dexterity',13],text:'Реакция: +2 к КД от одной рукопашной атаки при фехтовальном оружии, которым владеете.'},
    'dual-wielder':{label:'Мастер двух оружий',text:'+1 КД при двух рукопашных оружиях в руках; бой двумя оружиями не требует лёгкого оружия; можно достать два оружия одновременно.'},
    'dungeon-delver':{label:'Исследователь подземелий',text:'Преимущество на поиск тайных дверей и спасброски от ловушек; сопротивление урону ловушек; быстрый темп не мешает искать ловушки.'},
    durable:{label:'Крепкий',fixed:'constitution',text:'При трате кости хитов минимум восстановленных хитов равен удвоенному модификатору Телосложения (минимум 2).'},
    'elemental-adept':{label:'Адепт стихий',spellPrerequisite:true,text:'Заклинания выбранной стихии игнорируют сопротивление; единицы на костях урона считаются двойками.'},
    grappler:{label:'Борец',requires:['strength',13],text:'Преимущество на атаки захваченного вами существа; действие для попытки удержать его (оба становитесь опутанными).'},
    'great-weapon-master':{label:'Мастер большого оружия',text:'После критического попадания или убийства рукопашным оружием — бонусная атака; знакомое тяжёлое оружие допускает −5 к атаке ради +10 урона.'},
    healer:{label:'Лекарь',text:'Комплект целителя стабилизирует с восстановлением 1 хита; действие и заряд восстанавливают 1к6 + 4 + число костей хитов (раз на короткий/долгий отдых для цели).'},
    'heavily-armored':{label:'Тяжелобронированный',fixed:'strength',armorPrerequisite:'medium',armor:['heavy']},
    'heavy-armor-master':{label:'Мастер тяжёлых доспехов',fixed:'strength',armorPrerequisite:'heavy',text:'В тяжёлых доспехах −3 дробящего, колющего и рубящего урона от немагического оружия.'},
    'inspiring-leader':{label:'Воодушевляющий лидер',requires:['charisma',13],text:'После 10 минут речи до шести союзников получают временные хиты: 1 + модификатор Харизмы, один раз между отдыхами для каждой цели.'},
    'keen-mind':{label:'Отличная память',fixed:'intelligence',text:'Знание севера, времени до заката/рассвета и точная память о событиях последнего месяца.'},
    'lightly-armored':{label:'Легкобронированный',ability:['strength','dexterity'],armor:['light']},
    linguist:{label:'Лингвист',fixed:'intelligence',text:'Три дополнительных языка; создание шифров.'},
    lucky:{label:'Везунчик',text:'3 очка удачи на долгий отдых: дополнительная к20 для атаки, проверки, спасброска либо атаки против вас.'},
    'mage-slayer':{label:'Убийца магов',text:'Реакция-атака на заклинание в 5 футах; помеха концентрации после вашего урона; преимущество на спасброски от заклинаний существ в 5 футах.'},
    'magic-initiate':{label:'Посвящённый в магию',text:'Два заговора и одно заклинание 1-го уровня одного класса; это заклинание один раз на долгий отдых.'},
    'martial-adept':{label:'Воинский адепт',text:'Два приёма мастера боевых искусств и одна кость превосходства к6 на короткий/долгий отдых.'},
    'medium-armor-master':{label:'Мастер средних доспехов',armorPrerequisite:'medium',text:'Средние доспехи не дают помеху Скрытности; предел бонуса Ловкости к КД увеличен с 2 до 3.'},
    mobile:{label:'Подвижный',text:'+10 футов скорости; после рукопашной атаки цель не совершает по вам провоцированную атаку в этот ход; Рывок игнорирует дополнительные затраты труднопроходимой местности.'},
    'moderately-armored':{label:'Среднебронированный',ability:['strength','dexterity'],armorPrerequisite:'light',armor:['medium','shield']},
    'mounted-combatant':{label:'Верховой боец',text:'Преимущество рукопашных атак по меньшим пешим целям; перенаправление атак с ездового животного; улучшенные спасброски Ловкости животного.'},
    observant:{label:'Внимательный',ability:['intelligence','wisdom'],text:'+5 к пассивным Восприятию и Анализу; чтение по губам на известном языке.'},
    'polearm-master':{label:'Мастер древкового оружия',text:'Бонусная атака обратным концом глефы, алебарды, боевого посоха или копья (к4); провоцированная атака при входе в вашу досягаемость подходящего древкового оружия.'},
    resilient:{label:'Устойчивый',ability:Object.keys(ABILITIES),text:'+1 к выбранной характеристике и владение её спасброском.'},
    'ritual-caster':{label:'Ритуальный заклинатель',text:'Ритуальная книга с двумя ритуалами 1-го уровня выбранного класса. Требуется Интеллект или Мудрость 13.'},
    'savage-attacker':{label:'Дикий атакующий',text:'Раз в ход можно перебросить кости урона рукопашного оружия и выбрать один из результатов.'},
    sentinel:{label:'Страж',text:'Попадание провоцированной атакой обнуляет скорость; Отход не защищает от неё; реакция-атака, когда враг рядом атакует другую цель без этой черты.'},
    sharpshooter:{label:'Меткий стрелок',text:'Дальняя дистанция без помехи; игнорирование половинного и трёхчетвертного укрытия; знакомое дальнобойное оружие допускает −5 к атаке ради +10 урона.'},
    'shield-master':{label:'Мастер щитов',text:'После действия Атака — толчок щитом бонусным действием; бонус щита к спасброскам Ловкости против одиночной цели; реакция для предотвращения урона после успешного спасброска Ловкости.'},
    skilled:{label:'Умелый',text:'Три владения: любые навыки или инструменты, выбираются на итоговом шаге.'},
    skulker:{label:'Проныра',requires:['dexterity',13],text:'Можно прятаться при слабой заслонённости; промах из укрытия не выдаёт позицию; тусклый свет не мешает зрительному Восприятию.'},
    'spell-sniper':{label:'Меткие заклинания',spellPrerequisite:true,text:'Один атакующий заговор; удвоение дальности атакующих заклинаний; дальние атаки заклинаниями игнорируют половинное и трёхчетвертное укрытие.'},
    'tavern-brawler':{label:'Драчун',ability:['strength','constitution'],text:'Владение импровизированным оружием; безоружный удар к4; после попадания им или импровизированным оружием — захват бонусным действием.'},
    tough:{label:'Крепкий орешек',text:'+2 хита за каждый уровень персонажа.'},
    'war-caster':{label:'Боевой заклинатель',spellPrerequisite:true,text:'Преимущество спасбросков Телосложения для концентрации; соматические компоненты с занятыми оружием/щитом руками; особая реакция-заклинание вместо провоцированной атаки.'},
    'weapon-master':{label:'Мастер оружия',ability:['strength','dexterity'],text:'Владение четырьмя видами простого или воинского оружия.'}
  };
  const MANEUVERS = {"commanders-strike":"Атака командующего",disarming:'Обезоруживающая атака',distracting:'Отвлекающий удар',evasive:'Уклонение',feinting:'Финт',goading:'Провоцирующая атака',lunging:'Выпад',maneuvering:'Маневрирующая атака',menacing:'Угрожающая атака',parry:'Парирование',precision:'Точная атака',pushing:'Толкающая атака',rally:'Сплочение',riposte:'Ответный удар',sweeping:'Размашистая атака',trip:'Опрокидывающая атака'};
  const WEAPONS = {};
  function weapon(id,label,damage,type,group,props='') { WEAPONS[id]={id,label,damage,type,group,properties:words(props)}; }
  [
    ['club','Дубинка','1d4','bludgeoning','simple','light'],['dagger','Кинжал','1d4','piercing','simple','finesse light thrown'],['greatclub','Палица','1d8','bludgeoning','simple','two-handed'],['handaxe','Ручной топор','1d6','slashing','simple','light thrown'],['javelin','Метательное копьё','1d6','piercing','simple','thrown'],['light-hammer','Лёгкий молот','1d4','bludgeoning','simple','light thrown'],['mace','Булава','1d6','bludgeoning','simple',''],['quarterstaff','Боевой посох','1d6','bludgeoning','simple','versatile'],['sickle','Серп','1d4','slashing','simple','light'],['spear','Копьё','1d6','piercing','simple','thrown versatile'],['light-crossbow','Лёгкий арбалет','1d8','piercing','simple','ranged ammunition loading two-handed'],['dart','Дротик','1d4','piercing','simple','ranged finesse thrown'],['shortbow','Короткий лук','1d6','piercing','simple','ranged ammunition two-handed'],['sling','Праща','1d4','bludgeoning','simple','ranged ammunition'],
    ['battleaxe','Боевой топор','1d8','slashing','martial','versatile'],['flail','Цеп','1d8','bludgeoning','martial',''],['glaive','Глефа','1d10','slashing','martial','heavy reach two-handed'],['greataxe','Секира','1d12','slashing','martial','heavy two-handed'],['greatsword','Двуручный меч','2d6','slashing','martial','heavy two-handed'],['halberd','Алебарда','1d10','slashing','martial','heavy reach two-handed'],['lance','Длинное копьё','1d12','piercing','martial','reach special'],['longsword','Длинный меч','1d8','slashing','martial','versatile'],['maul','Молот','2d6','bludgeoning','martial','heavy two-handed'],['morningstar','Моргенштерн','1d8','piercing','martial',''],['pike','Пика','1d10','piercing','martial','heavy reach two-handed'],['rapier','Рапира','1d8','piercing','martial','finesse'],['scimitar','Скимитар','1d6','slashing','martial','finesse light'],['shortsword','Короткий меч','1d6','piercing','martial','finesse light'],['trident','Трезубец','1d6','piercing','martial','thrown versatile'],['war-pick','Боевая кирка','1d8','piercing','martial',''],['warhammer','Боевой молот','1d8','bludgeoning','martial','versatile'],['whip','Кнут','1d4','slashing','martial','finesse reach'],['blowgun','Духовая трубка','1','piercing','martial','ranged ammunition loading'],['hand-crossbow','Ручной арбалет','1d6','piercing','martial','ranged ammunition light loading'],['heavy-crossbow','Тяжёлый арбалет','1d10','piercing','martial','ranged ammunition heavy loading two-handed'],['longbow','Длинный лук','1d8','piercing','martial','ranged ammunition heavy two-handed'],['net','Сеть','0','none','martial','ranged thrown special']
  ].forEach(row=>weapon(...row));
  const ARMOR = {none:{label:'Без доспеха',base:10,dex:Infinity},leather:{label:'Кожаный доспех',base:11,dex:Infinity,type:'light'},'studded-leather':{label:'Проклёпанный кожаный доспех',base:12,dex:Infinity,type:'light'},'scale-mail':{label:'Чешуйчатый доспех',base:14,dex:2,type:'medium',stealthDisadvantage:true},'chain-mail':{label:'Кольчуга',base:16,dex:0,type:'heavy',strength:13,stealthDisadvantage:true}};
  const ITEMS = {...Object.fromEntries(Object.entries(WEAPONS).map(([k,v])=>[k,v.label])),...Object.fromEntries(Object.entries(ARMOR).map(([k,v])=>[k,v.label])),shield:'Щит',arrows:'Стрелы',bolts:'Арбалетные болты',quiver:'Колчан','explorer-pack':'Набор путешественника','dungeoneer-pack':'Набор исследователя подземелий','burglar-pack':'Набор взломщика','priest-pack':'Набор священника','scholar-pack':'Набор учёного','diplomat-pack':'Набор дипломата','entertainer-pack':'Набор артиста','component-pouch':'Мешочек с компонентами','arcane-focus':'Магическая фокусировка','druidic-focus':'Друидическая фокусировка','holy-symbol':'Священный символ',spellbook:'Книга заклинаний','thieves-tools':'Воровские инструменты',lute:'Лютня',drum:'Барабан',flute:'Флейта',horn:'Рожок',lyre:'Лира',bagpipes:'Волынка',dulcimer:'Цимбалы','pan-flute':'Свирель',shawm:'Шалмей',viol:'Виола'};
  const INSTRUMENTS = words('lute drum flute horn lyre bagpipes dulcimer pan-flute shawm viol');
  const options = (ids,names=ITEMS) => ids.map(value=>({value,label:typeof names[value]==='object'?names[value].label:(names[value]||value),...(typeof names[value]==='object'&&names[value].text?{description:names[value].text}:{})}));
  const choose = (id,label,ids,count=1,names=ITEMS,section='equipment') => ({id:`creation_${id}`,label,count,options:options(ids,names),section});
  const simple = Object.keys(WEAPONS).filter(k=>WEAPONS[k].group==='simple');
  const martial = Object.keys(WEAPONS).filter(k=>WEAPONS[k].group==='martial');
  const melee = ids=>ids.filter(k=>!WEAPONS[k].properties.includes('ranged'));
  const equipmentGroups = {
    barbarian:[['weapon','Основное оружие',melee(martial)],['secondary','Второе оружие',['two-handaxes',...simple]]],
    bard:[['weapon','Оружие',['rapier','longsword',...simple]],['pack','Набор',['diplomat-pack','entertainer-pack']],['instrument','Музыкальный инструмент',INSTRUMENTS]],
    cleric:[['weapon','Оружие',['mace','warhammer']],['armor','Доспех',['scale-mail','leather','chain-mail']],['secondary','Дополнительное оружие',['crossbow-bolts',...simple]],['pack','Набор',['priest-pack','explorer-pack']]],
    druid:[['shield_weapon','Щит или оружие',['shield',...simple]],['weapon','Оружие',['scimitar',...melee(simple)]]],
    fighter:[['armor','Доспех',['chain-mail','leather-longbow']],['weapon','Первое воинское оружие',martial],['shield_weapon','Щит или второе воинское оружие',['shield',...martial]],['secondary','Дополнительное оружие',['crossbow-bolts','two-handaxes']],['pack','Набор',['dungeoneer-pack','explorer-pack']]],
    monk:[['weapon','Оружие',['shortsword',...simple]],['pack','Набор',['dungeoneer-pack','explorer-pack']]],
    paladin:[['weapon','Первое воинское оружие',martial],['shield_weapon','Щит или второе воинское оружие',['shield',...martial]],['secondary','Метательное или простое оружие',['five-javelins',...melee(simple)]],['pack','Набор',['priest-pack','explorer-pack']]],
    ranger:[['armor','Доспех',['scale-mail','leather']],['weapon','Первое рукопашное оружие',['shortsword',...melee(simple)]],['second_weapon','Второе рукопашное оружие',['shortsword',...melee(simple)]],['pack','Набор',['dungeoneer-pack','explorer-pack']]],
    rogue:[['weapon','Основное оружие',['rapier','shortsword']],['secondary','Дополнительное оружие',['shortbow-arrows','shortsword']],['pack','Набор',['burglar-pack','dungeoneer-pack','explorer-pack']]],
    sorcerer:[['weapon','Оружие',['crossbow-bolts',...simple]],['focus','Материальные компоненты',['component-pouch','arcane-focus']],['pack','Набор',['dungeoneer-pack','explorer-pack']]],
    warlock:[['weapon','Оружие',['crossbow-bolts',...simple]],['focus','Материальные компоненты',['component-pouch','arcane-focus']],['pack','Набор',['scholar-pack','dungeoneer-pack']],['secondary','Дополнительное простое оружие',simple]],
    wizard:[['weapon','Оружие',['quarterstaff','dagger']],['focus','Материальные компоненты',['component-pouch','arcane-focus']],['pack','Набор',['scholar-pack','explorer-pack']]],
    artificer:[['weapon','Первое простое оружие',simple],['second_weapon','Второе простое оружие',simple],['armor','Доспех',['studded-leather','scale-mail']]]
  };
  const BUNDLES = {'two-handaxes':[['handaxe',2]],'five-javelins':[['javelin',5]],'crossbow-bolts':[['light-crossbow',1],['bolts',20]],'shortbow-arrows':[['shortbow',1],['arrows',20],['quiver',1]],'leather-longbow':[['leather',1],['longbow',1],['arrows',20],['quiver',1]]};
  Object.assign(ITEMS,{'two-handaxes':'Два ручных топора','five-javelins':'Пять метательных копий','crossbow-bolts':'Лёгкий арбалет и 20 болтов','shortbow-arrows':'Короткий лук, колчан и 20 стрел','leather-longbow':'Кожаный доспех, длинный лук, колчан и 20 стрел'});
  const FIXED_EQUIPMENT = {barbarian:[['explorer-pack',1],['javelin',4]],bard:[['leather',1],['dagger',1]],cleric:[['shield',1],['holy-symbol',1]],druid:[['leather',1],['explorer-pack',1],['druidic-focus',1]],fighter:[],monk:[['dart',10]],paladin:[['chain-mail',1],['holy-symbol',1]],ranger:[['longbow',1],['arrows',20],['quiver',1]],rogue:[['leather',1],['dagger',2],['thieves-tools',1]],sorcerer:[['dagger',2]],warlock:[['leather',1],['dagger',2]],wizard:[['spellbook',1]],artificer:[['light-crossbow',1],['bolts',20],['thieves-tools',1],['dungeoneer-pack',1]]};
  const STYLES = {archery:'Стрельба (+2 к атакам дальнобойным оружием)',defense:'Оборона (+1 КД в доспехах)',dueling:'Дуэлянт (+2 урона одним рукопашным оружием)',great_weapon:'Бой большим оружием (переброс 1 и 2 урона)',protection:'Защита (реакция со щитом)',two_weapon:'Бой двумя оружиями (модификатор к урону второй руки)','blind-fighting':'Бой вслепую (TCE): слепое зрение 10 футов','interception':'Перехват (TCE): с оружием или щитом реакцией уменьшите урон союзнику в 5 футах на 1к10 + мастерство','superior-technique':'Превосходная техника (TCE): один приём и одна кость к6 за короткий или долгий отдых','thrown-weapon-fighting':'Бой метательным оружием (TCE): извлечение частью атаки, +2 урона дальнобойной атаки','unarmed-fighting':'Бой без оружия (TCE): 1к6 + СИЛ, без оружия и щита 1к8 + СИЛ; 1к4 урона захваченной цели в начале хода'};
  const ENEMIES = {aberrations:'Аберрации',beasts:'Звери',celestials:'Небожители',constructs:'Конструкты',dragons:'Драконы',elementals:'Элементали',fey:'Феи',fiends:'Исчадия',giants:'Великаны',monstrosities:'Чудовища',oozes:'Слизи',plants:'Растения',undead:'Нежить',humanoids:'Два вида гуманоидов'};
  const HUMANOIDS = {humans:'Люди',elves:'Эльфы',dwarves:'Дварфы',halflings:'Полурослики',gnomes:'Гномы',orcs:'Орки',goblinoids:'Гоблиноиды',gnolls:'Гноллы',kobolds:'Кобольды',lizardfolk:'Людоящеры',sahuagin:'Сахуагины',merfolk:'Мерфолки',grimlocks:'Гримлоки',gith:'Гиты'};
  const TERRAINS = {arctic:'Арктика',coast:'Побережье',desert:'Пустыня',forest:'Лес',grassland:'Луга',mountain:'Горы',swamp:'Болото',underdark:'Подземье'};
  Object.assign(ITEMS,{'common-clothes':'Обычная одежда','fine-clothes':'Отличная одежда','travelers-clothes':'Дорожная одежда','dark-clothes':'Тёмная одежда с капюшоном',pouch:'Поясной кошель',costume:'Костюм',favor:'Подарок поклонника','small-knife':'Небольшой нож','city-map':'Карта родного города','pet-mouse':'Ручная мышь',keepsake:'Памятная вещь родителей','signet-ring':'Кольцо-печатка',pedigree:'Свиток родословной','guild-letter':'Письмо из гильдии','silk-rope':'Шёлковая верёвка, 50 футов','lucky-charm':'Счастливый талисман',ink:'Бутылочка чернил','ink-pen':'Писчее перо','unanswered-letter':'Письмо с вопросом без ответа',shovel:'Лопата','iron-pot':'Железный горшок','scroll-case':'Футляр со свитками заметок','winter-blanket':'Зимнее одеяло','herbalism-kit':'Набор травника',crowbar:'Ломик','prayer-book':'Молитвенник','prayer-wheel':'Молитвенное колесо',incense:'Палочка ладана',vestments:'Облачение',insignia:'Воинский знак отличия',trophy:'Трофей',dice:'Игральные кости','playing-cards':'Колода карт','hunting-trap':'Охотничий капкан','disguise-kit':'Набор для грима','loaded-dice':'Мошеннические игральные кости','marked-cards':'Краплёная колода','fake-signet':'Печатка вымышленного герцога'});
  const BACKGROUND_EQUIPMENT={
    entertainer:[['costume',1],['favor',1]],urchin:[['small-knife',1],['city-map',1],['pet-mouse',1],['keepsake',1],['common-clothes',1]],noble:[['fine-clothes',1],['signet-ring',1],['pedigree',1]],'guild-artisan':[['guild-letter',1],['travelers-clothes',1]],sailor:[['club',1],['silk-rope',1],['lucky-charm',1],['common-clothes',1]],sage:[['ink',1],['ink-pen',1],['small-knife',1],['unanswered-letter',1],['common-clothes',1]],'folk-hero':[['shovel',1],['iron-pot',1],['common-clothes',1]],hermit:[['scroll-case',1],['winter-blanket',1],['common-clothes',1],['herbalism-kit',1]],criminal:[['crowbar',1],['dark-clothes',1]],acolyte:[['holy-symbol',1],['incense',5],['vestments',1],['common-clothes',1]],soldier:[['insignia',1],['trophy',1],['common-clothes',1]],outlander:[['quarterstaff',1],['hunting-trap',1],['trophy',1],['travelers-clothes',1]],charlatan:[['fine-clothes',1],['disguise-kit',1]]
  };
  BACKGROUND_EQUIPMENT.pirate=BACKGROUND_EQUIPMENT.sailor;
  const BACKGROUND_GOLD={entertainer:15,urchin:10,noble:25,'guild-artisan':15,sailor:10,pirate:10,sage:10,'folk-hero':10,hermit:5,criminal:15,acolyte:15,soldier:10,outlander:10,charlatan:15};
  const BACKGROUND_FEATURES={entertainer:['По многочисленным просьбам','Можете найти место для выступления, которое обеспечивает скромный или комфортный кров и пищу за ежедневные выступления.'],urchin:['Городские тайны','Вне боя вы и ведомые вами спутники перемещаетесь по городу вдвое быстрее.'],noble:['Привилегированность','В высшем обществе к вам относятся как к своему; можете получить аудиенцию у местной знати.'],'guild-artisan':['Членство в гильдии','Гильдия предоставляет связи, поддержку и помощь; взносы 5 зм в месяц.'],sailor:['Морской переход','Можете договориться о бесплатном переходе на знакомом судне; вы и спутники помогаете экипажу, маршрут и срок зависят от капитана.'],pirate:['Дурная репутация','Многие боятся сообщать властям о ваших мелких нарушениях; серьёзные преступления не остаются безнаказанными.'],sage:['Исследователь','Если не знаете сведения, обычно знаете, где или у кого их искать; доступ и получение могут требовать приключения.'],'folk-hero':['Деревенское гостеприимство','Простолюдины помогают укрыться, отдохнуть и восстановиться, пока это не подвергает их серьёзной опасности.'],hermit:['Откровение','Важное открытие определяется вместе с Мастером и связывает отшельничество с кампанией.'],criminal:['Криминальные связи','Надёжный посредник связывает вас с преступным миром, в том числе через дальние расстояния.'],acolyte:['Приют для верующих','В храмах своей веры можете рассчитывать на скромное содержание и помощь; дорогостоящие компоненты заклинаний оплачиваются отдельно.'],soldier:['Воинское звание','Военное звание даёт влияние в бывшей организации, доступ к некоторым ресурсам и помощь дружественных солдат.'],outlander:['Скиталец','Хорошо запоминаете карты и местность; в подходящей местности находите пищу и воду себе и ещё пяти существам.'],charlatan:['Вторая личность','Есть запасная личность с документами и знакомствами; умеете подделывать документы, образец которых видели.']};
  const activeFeat = c => c.race==='human' && c.human_feature==='human_alt' ? c.creation_feat : null;
  function spellList(cls,level,c={}) { return unique([...(LISTS[cls]?.[level]||[]),...(cls==='warlock'&&level===1?(PATRONS[c.creation_patron]?.spells||[]):[]),...(levelup()?.spellList(cls,level,c,undefined,true)||[])]); }
  function baseArmor(c) {
    const byClass = {barbarian:['light','medium','shield'],bard:['light'],cleric:['light','medium','shield'],druid:['light','medium','shield'],fighter:['light','medium','heavy','shield'],paladin:['light','medium','heavy','shield'],ranger:['light','medium','shield'],rogue:['light'],warlock:['light'],artificer:['light','medium','shield']};
    const result = [...(byClass[c.class]||[])];
    if(c.class==='cleric'&&c.creation_domain&&['life','nature','tempest','war','forge','order','twilight'].includes(c.creation_domain.replace(/^creation_/,''))) result.push('heavy');
    if(c.race==='dwarf'&&c.race_sub==='mountain-dwarf') result.push('light','medium');
    if(c.race==='gith'&&c.race_sub==='githyanki') result.push('light','medium');
    if(c.race==='hobgoblin') result.push('light');
    return unique(result);
  }
  function getEquipment(c) {
    const all = (FIXED_EQUIPMENT[c.class]||[]).map(x=>[...x]);
    for(const [id,,ids] of equipmentGroups[c.class]||[]) {
      const selected=c[`creation_${id}`];
      if(ids.includes(selected)) all.push(...(BUNDLES[selected]||[[selected,1]]));
    }
    if(BACKGROUND_EQUIPMENT[c.background]) {
      all.push(...BACKGROUND_EQUIPMENT[c.background].map(x=>[...x]),['pouch',1]);
      const extra={acolyte:['prayer-book','prayer-wheel'],soldier:['dice','playing-cards'],charlatan:['loaded-dice','marked-cards','fake-signet']}[c.background];
      if(extra?.includes(c.creation_background_item)) all.push([c.creation_background_item,1]);
      if(['entertainer','guild-artisan','folk-hero'].includes(c.background)) {
        const r=catalogs(), tool=c.proficiencyChoices?.[`background:${c.background}:0:0`];
        const allowed=c.background==='entertainer'?(r.INSTRUMENTS||[]):(r.ARTISAN_TOOLS||[]);
        if(allowed.includes(tool)) all.push([tool,1]);
      }
    }
    const merged=new Map(); all.forEach(([id,quantity])=>merged.set(id,(merged.get(id)||0)+quantity));
    return [...merged].map(([id,quantity])=>({id,label:ITEMS[id]||catalogs().TOOLS?.[id]||id,quantity}));
  }
  function levelup() { const api=typeof module==='object'&&module.exports ? require('./levelup-rules') : (typeof LevelUpRules!=='undefined'?LevelUpRules:null); if(api)api.setSpellNames(SPELL_NAMES);return api; }
  function getChoices(c={},context={}) {
    const a=context.abilities||c.abilities||{};
    const result=[];
    const add=(...args)=>result.push(choose(...args));
    const backgroundItem={acolyte:['prayer-book','prayer-wheel'],soldier:['dice','playing-cards'],charlatan:['loaded-dice','marked-cards','fake-signet']}[c.background];
    if(backgroundItem) add('background_item','Предмет предыстории',backgroundItem);
    if(c.race==='dragonborn') add('dragonborn_ancestry','Драконье наследие',Object.keys(DRAGONS),1,DRAGONS,'race');
    if(c.race==='simic-hybrid') add('simic_adaptation','Животное улучшение 1-го уровня',['climb','swim','glide'],1,{climb:'Проворный скалолаз: скорость лазания равна скорости ходьбы',swim:'Подводная адаптация: дыхание под водой и скорость плавания равна ходьбе',glide:'Планирующие крылья: замедление падения и планирование'},'race');
    if(c.race==='kender') add('kender_ability','Характеристика для Насмешки',['intelligence','wisdom','charisma'],1,ABILITIES,'race');
    if(['harengon','plasmoid','owlin','thri-kreen','hadozee'].includes(c.race)) add('size','Размер персонажа',['small','medium'],1,{small:'Маленький',medium:'Средний'},'race');
    if(c.class==='cleric') add('domain','Божественный домен (PHB 2014)',Object.keys(DOMAINS),1,DOMAINS,'class');
    if(c.class==='sorcerer') {
      add('origin','Происхождение магии (PHB 2014)',['draconic','wild'],1,{draconic:'Драконья кровь',wild:'Дикая магия'},'class');
      if(c.creation_origin==='draconic') add('dragon','Драконий предок',Object.keys(DRAGONS),1,DRAGONS,'class');
    }
    if(c.class==='warlock') add('patron','Покровитель (PHB 2014)',Object.keys(PATRONS),1,PATRONS,'class');
    if(c.class==='fighter') add('style','Боевой стиль',Object.keys(STYLES),1,STYLES,'class');
    if(c.class==='ranger') {
      add('favored_enemy','Избранный враг',Object.keys(ENEMIES),1,ENEMIES,'class');
      if(c.creation_favored_enemy==='humanoids') add('humanoids','Два вида гуманоидов',Object.keys(HUMANOIDS),2,HUMANOIDS,'class');
      add('terrain','Исследователь природы: местность',Object.keys(TERRAINS),1,TERRAINS,'class');
    }
    if(c.race==='human'&&c.human_feature==='human_alt') {
      add('feat','Черта вариантного человека (PHB 2014)',Object.keys(FEATS),1,FEATS,'feat');
      const feat=FEATS[activeFeat(c)];
      if(feat?.text) result[result.length-1].description=feat.text;
      if(feat?.ability) add('feat_ability','Характеристика черты: +1',feat.ability,1,ABILITIES,'feat');
      if(activeFeat(c)==='elemental-adept') add('feat_element','Стихия',['acid','cold','fire','lightning','thunder'],1,{acid:'Кислота',cold:'Холод',fire:'Огонь',lightning:'Электричество',thunder:'Звук'},'feat');
      if(activeFeat(c)==='martial-adept') add('maneuvers','Два боевых приёма',Object.keys(MANEUVERS),2,MANEUVERS,'feat');
      if(['magic-initiate','ritual-caster','spell-sniper'].includes(activeFeat(c))) {
        add('feat_class','Класс заклинаний черты',Object.keys(CLASSES).filter(k=>k!=='artificer'&&(activeFeat(c)!=='spell-sniper'||spellList(k,0).some(id=>ATTACK_CANTRIPS.includes(id)))),1,CLASSES,'feat');
        const cls=c.creation_feat_class;
        if(CLASSES[cls]&&cls!=='artificer') {
          if(activeFeat(c)==='magic-initiate') { add('feat_cantrips','Заговоры черты',spellList(cls,0),2,SPELL_NAMES,'spells'); add('feat_spells','Заклинание черты',spellList(cls,1),1,SPELL_NAMES,'spells'); }
          if(activeFeat(c)==='ritual-caster') add('feat_spells','Ритуальная книга: два ритуала',spellList(cls,1).filter(id=>RITUALS.includes(id)),2,SPELL_NAMES,'spells');
          if(activeFeat(c)==='spell-sniper') add('feat_cantrips','Атакующий заговор',spellList(cls,0).filter(id=>ATTACK_CANTRIPS.includes(id)),1,SPELL_NAMES,'spells');
        }
      }
    }
    for(const [id,label,ids] of equipmentGroups[c.class]||[]) {
      let allowed=ids;
      if(c.class==='cleric'&&id==='weapon'&&!['death','tempest','war','twilight'].includes(c.creation_domain)&&c.race!=='dwarf') allowed=ids.filter(k=>k!=='warhammer');
      if(c.class==='cleric'&&id==='armor'&&!baseArmor(c).includes('heavy')&&activeFeat(c)!=='heavily-armored') allowed=ids.filter(k=>k!=='chain-mail');
      add(id,label,unique(allowed));
    }
    const equipment=getEquipment(c);
    const armor=equipment.filter(i=>ARMOR[i.id]).map(i=>i.id);
    if(armor.length) add('worn_armor','Надетый доспех',['none',...armor]);
    if(equipment.some(i=>i.id==='shield')) add('shield_equipped','Использовать щит',['yes','no'],1,{yes:'Щит надет (+2 КД, занимает руку)',no:'Щит убран'});
    if(['fairy','astral-elf'].includes(c.race)) add('racial_spell_ability','Характеристика расовых заклинаний',['intelligence','wisdom','charisma'],1,ABILITIES,'spells');
    const casting=CASTING[c.class];
    if(casting) {
      let cantrips=spellList(c.class,0,c).filter(id=>!levelup()?.automaticSpells(c).includes(id));
      if(c.class==='cleric'&&c.creation_domain==='light') cantrips=cantrips.filter(id=>id!=='light');
      if(c.class==='cleric'&&['arcana','death'].includes(c.creation_domain)) cantrips=cantrips.filter(id=>!values(c.creation_domain_cantrips).includes(id));
      add('cantrips','Заговоры класса',cantrips,casting[1],SPELL_NAMES,'spells');
      const prep=Math.min(c.class==='wizard'?6:Infinity,Math.max(1,mod(a[casting[0]])+(c.class==='artificer'?0:1)));
      if(casting[2]==='book') {
        add('spellbook','Книга волшебника: шесть заклинаний 1-го уровня',spellList('wizard',1),6,SPELL_NAMES,'spells');
        add('prepared','Подготовленные заклинания из книги',values(c.creation_spellbook).filter(id=>spellList('wizard',1).includes(id)),prep,SPELL_NAMES,'spells');
      } else if(casting[2]==='prepared') add('prepared','Подготовленные заклинания 1-го уровня',spellList(c.class,1,c).filter(id=>!levelup()?.automaticSpells(c).includes(id)),prep,SPELL_NAMES,'spells');
      else add('known_spells','Известные заклинания 1-го уровня',spellList(c.class,1,c).filter(id=>!levelup()?.automaticSpells(c).includes(id)),casting[2],SPELL_NAMES,'spells');
    }
    if(c.class==='cleric'&&c.creation_domain==='nature') add('nature_cantrip','Заговор домена Природы',spellList('druid',0),1,SPELL_NAMES,'spells');
    const supplement = levelup()?.creationChoices(c, context) || [];
    return result.filter(g=>!supplement.some(s=>s.id===g.id)&&!(c.class==='ranger'&&c.creation_favored_feature==='favored-foe'&&['creation_favored_enemy','creation_humanoids'].includes(g.id))&&!(c.class==='ranger'&&c.creation_explorer_feature==='deft-explorer'&&g.id==='creation_terrain')).concat(supplement);
  }
  function catalogs() {
    if(typeof module==='object'&&module.exports) return require('./rules.js');
    return typeof CharacterRules!=='undefined'?CharacterRules:{};
  }
  function raceSpells(c) {
    const result=[];
    const add=(id,ability,usage='Заговор',level=0)=>result.push({id,label:SPELL_NAMES[id]||({levitate:'Левитация','pass-without-trace':'Бесследное передвижение'}[id])||id,ability,usage,level,source:'Раса'});
    if(c.race==='elf'&&c.race_sub==='high_elf'&&c.high_elf_cantrip) add(c.high_elf_cantrip,'intelligence');
    if(c.race==='elf'&&c.race_sub==='drow') add('dancing-lights','charisma');
    if(c.race==='gnome'&&c.race_sub==='forest-gnome') add('minor-illusion','intelligence');
    if(c.race==='aasimar') add('light','charisma');
    if(c.race==='tiefling') add('thaumaturgy','charisma');
    if(c.race==='genasi') {
      if(c.race_sub==='fire-genasi') add('produce-flame','constitution');
      if(c.race_sub==='water-genasi') add('shape-water','constitution');
      if(c.race_sub==='air-genasi') add('levitate','constitution','1 раз / долгий отдых',2);
      if(c.race_sub==='earth-genasi') add('pass-without-trace','constitution','1 раз / долгий отдых',2);
    }
    if(c.race==='gith') add('mage-hand',c.race_sub==='gitzerai'?'wisdom':'intelligence','Заговор, рука невидима');
    if(c.race==='triton') add('fog-cloud','charisma','1 раз / долгий отдых',1);
    if(c.race==='firbolg') {add('detect-magic','wisdom','1 раз / короткий или долгий отдых',1);add('disguise-self','wisdom','1 раз / короткий или долгий отдых; можно выглядеть на 3 фута ниже',1);}
    if(c.race==='yuan-ti-pureblood') {add('poison-spray','charisma');add('animal-friendship','charisma','Неограниченно, только на змей',1);}
    if(c.race==='fairy') add('druidcraft',c.creation_racial_spell_ability||'charisma');
    if(c.race==='astral-elf'&&['dancing-lights','light','sacred-flame'].includes(c.astral_elf_astral_fire)) add(c.astral_elf_astral_fire,c.creation_racial_spell_ability||'charisma');
    return result;
  }
  function validate(c={},context={}) {
    const errors=[];
    const error=(field,message)=>errors.push({id:field,field,message});
    for(const group of getChoices(c,context)) {
      const selection=values(c[group.id]);
      if(group.optional&&!selection.length)continue;
      if(selection.length!==group.count||unique(selection).length!==selection.length||selection.some(id=>!group.options.some(o=>o.value===id))) error(group.id,`${group.label}: выберите ${group.count} различных допустимых вариантов.`);
    }
    const feat=FEATS[activeFeat(c)],a=context.abilities||c.abilities||{};
    if(feat) {
      if(feat.requires&&Number(a[feat.requires[0]]||0)<feat.requires[1]) error('creation_feat',`${feat.label}: требуется ${ABILITIES[feat.requires[0]]} ${feat.requires[1]}.`);
      if(feat.armorPrerequisite&&!baseArmor(c).includes(feat.armorPrerequisite)) error('creation_feat',`${feat.label}: отсутствует обязательное владение доспехами.`);
      if(feat.spellPrerequisite&&!CASTING[c.class]&&!raceSpells(c).length) error('creation_feat',`${feat.label}: требуется возможность сотворить хотя бы одно заклинание.`);
      if(activeFeat(c)==='ritual-caster'&&Number(a.intelligence||0)<13&&Number(a.wisdom||0)<13) error('creation_feat','Ритуальный заклинатель: требуется Интеллект или Мудрость 13.');
    }
    if(c.class==='ranger'&&c.creation_weapon&&c.creation_second_weapon&&(c.creation_weapon==='shortsword')!==(c.creation_second_weapon==='shortsword')) error('creation_second_weapon','Следопыт получает два коротких меча либо два простых рукопашных оружия; смешивать эти комплекты нельзя.');
    const worn=getEquipment(c).some(i=>i.id===c.creation_worn_armor)?ARMOR[c.creation_worn_armor]:null;
    if(c.race==='tortle'&&worn) error('creation_worn_armor','Тортл не может носить доспех: выберите «Без доспеха».');
    return errors;
  }
  function derive(c={},context={}) {
    const r=catalogs();
    const a=context.abilities||c.abilities||{};
    const featId=activeFeat(c),feat=FEATS[featId];
    const domain=c.class==='cleric'?c.creation_domain:null;
    const result={abilityBonuses:{},fixedProficiencies:[],proficiencySlots:[],savingThrowProficiencies:[],hpBonus:0,acBonus:0,acOptions:[],initiativeBonus:0,speedBonus:0,passiveBonus:0,features:[],notes:[],equipment:getEquipment(c),money:{cp:0,sp:0,ep:0,gp:BACKGROUND_GOLD[c.background]||0,pp:0},attacks:[],spellcasting:null,raceSpells:raceSpells(c),spells:[]};
    const grant=(type,id,source)=>result.fixedProficiencies.push({type,id,source:source||'Особенность класса / черта'});
    const slot=(id,type,ids,label,count=1,extras={})=>{for(let i=0;i<count;i++)result.proficiencySlots.push({id:`creation:${id}:${i}`,type,options:ids,label:count>1?`${label} ${i+1}`:label,...extras});};
    const feature=(name,text)=>result.features.push({name,description:text||''});
    if(BACKGROUND_FEATURES[c.background]) feature(...BACKGROUND_FEATURES[c.background]);
    if(feat) {
      feature(`Черта: ${feat.label}`,feat.text);
      const ab=feat.fixed||(feat.ability?.includes(c.creation_feat_ability)?c.creation_feat_ability:null);
      if(ab) result.abilityBonuses[ab]=1;
      (feat.armor||[]).forEach(id=>grant('armor',id,feat.label));
      if(featId==='resilient'&&ab) result.savingThrowProficiencies.push(ab);
      if(featId==='tough') result.hpBonus+=2;
      if(featId==='alert') result.initiativeBonus=5;
      if(featId==='mobile') result.speedBonus=10;
      if(featId==='observant') result.passiveBonus=5;
      if(featId==='tavern-brawler') grant('weapon','improvised','Драчун');
      if(featId==='skilled') slot('skilled','skillOrTool',[...Object.keys(r.SKILLS||{}),...Object.keys(r.TOOLS||{})],'Умелый: навык или инструмент',3);
      if(featId==='linguist') slot('linguist','language',r.CHOICE_LANGUAGES||[],'Лингвист: язык',3);
      if(featId==='weapon-master') slot('weapon-master','weapon',Object.keys(WEAPONS).map(id=>id.replaceAll('-','_')),'Мастер оружия',4);
      if(featId==='elemental-adept'&&c.creation_feat_element) feature('Адепт стихий: выбранная стихия',c.creation_feat_element);
      if(featId==='martial-adept') feature('Боевые приёмы',values(c.creation_maneuvers).filter(id=>MANEUVERS[id]).map(id=>MANEUVERS[id]).join(', ')+`; кость превосходства 1к6; Сл ${10+Math.max(mod(a.strength),mod(a.dexterity))}`);
    }
    const CLASS_FEATURES={barbarian:['Ярость: 2 / долгий отдых, +2 урона рукопашным оружием от Силы; сопротивление дробящему, колющему и рубящему урону без тяжёлого доспеха.','Защита без доспехов: 10 + ЛОВ + ТЕЛ, разрешён щит.'],bard:[`Бардовское вдохновение: к6; ${Math.max(1,mod(a.charisma))} / долгий отдых; бонусное действие, союзник в 60 футах.`],cleric:[],druid:['Друидический язык; ритуальное колдовство для подготовленных ритуалов. Дикий облик появляется только на 2-м уровне.'],fighter:['Второе дыхание: бонусное действие, 1к10 + 1 хитов, 1 / короткий или долгий отдых.'],monk:['Защита без доспехов: 10 + ЛОВ + МДР без щита.','Боевые искусства: к4; без доспеха/щита и с монашеским оружием можно использовать Ловкость и атаковать безоружно бонусным действием.'],paladin:[`Божественное чувство: ${Math.max(0,1+mod(a.charisma))} / долгий отдых, 60 футов.`, 'Наложение рук: запас 5 хитов / долгий отдых. Заклинания и Божественная кара появятся на 2-м уровне.'],ranger:['Избранный враг: преимущество на Выживание для выслеживания и Интеллект для воспоминаний о врагах.','Исследователь природы: удвоение владения подходящих проверок Интеллекта/Мудрости в избранной местности и бонусы путешествий. Заклинания появятся на 2-м уровне.'],rogue:['Скрытая атака: +1к6 раз в ход при подходящих условиях и фехтовальном/дальнобойном оружии.','Воровской жаргон. Компетентность: два владения на итоговом шаге.'],sorcerer:[],warlock:['Магия договора: одна ячейка 1-го уровня, восстанавливается за короткий или долгий отдых. Воззания появятся на 2-м уровне.'],wizard:['Магическое восстановление: один раз в день после короткого отдыха вернуть одну ячейку 1-го уровня. Ритуалы из книги не требуется подготавливать.'],artificer:[`Магическое tinkering (Магическое мастерство): до ${Math.max(1,mod(a.intelligence))} крошечных предметов с незначительными эффектами. Для всех заклинаний нужны знакомые воровские/ремесленные инструменты как фокусировка.`]};
    (CLASS_FEATURES[c.class]||[]).forEach(text=>feature('Умение 1-го уровня',text));
    if(c.class==='fighter'&&STYLES[c.creation_style]) feature('Боевой стиль',STYLES[c.creation_style]);
    if(c.class==='ranger') {
      if(ENEMIES[c.creation_favored_enemy]) feature('Избранный враг',ENEMIES[c.creation_favored_enemy]+(c.creation_favored_enemy==='humanoids'?`: ${values(c.creation_humanoids).map(id=>HUMANOIDS[id]).filter(Boolean).join(', ')}`:''));
      if(TERRAINS[c.creation_terrain]) feature('Исследователь природы',TERRAINS[c.creation_terrain]);
      const enemyLanguages={aberrations:['deep_speech','undercommon'],beasts:[],celestials:['celestial'],constructs:[],dragons:['draconic'],elementals:['primordial'],fey:['sylvan','elvish'],fiends:['abyssal','infernal'],giants:['giant'],monstrosities:[],oozes:[],plants:[],undead:[]};
      const humanoidLanguages={humans:['common'],elves:['elvish'],dwarves:['dwarvish'],halflings:['halfling'],gnomes:['gnomish'],orcs:['orc'],goblinoids:['goblin'],gnolls:['gnoll'],kobolds:['draconic'],lizardfolk:['draconic'],sahuagin:['sahuagin'],merfolk:['aquan'],grimlocks:['undercommon'],gith:['gith']};
      const languages=c.creation_favored_enemy==='humanoids'?unique(values(c.creation_humanoids).flatMap(id=>humanoidLanguages[id]||[])):(enemyLanguages[c.creation_favored_enemy]||[]);
      const knownLanguages=r.resolveProficiencies?.(c)?.languages||[];
      const newLanguages=languages.filter(id=>!knownLanguages.includes(id));
      if(newLanguages.length) slot('favored-enemy-language','language',newLanguages,'Язык избранного врага');
      else if(languages.length) feature('Язык избранного врага','Подходящие языки уже известны: это умение не даёт произвольную замену языка.');
      else if(c.creation_favored_enemy) feature('Язык избранного врага','Дополнительный язык даётся, если избранные враги говорят на нём. Для выбранной категории нет универсального языка; конкретный язык согласуйте с Мастером.');
    }
    if(domain&&DOMAINS[domain]) {
      feature('Божественный домен',DOMAINS[domain].label);
      if(['life','nature','tempest','war','forge','order','twilight'].includes(domain)) grant('armor','heavy','Божественный домен');
      if(['death','tempest','war','twilight'].includes(domain)) grant('weapon','martial','Божественный домен');
      if(domain==='knowledge') {slot('knowledge-skill','skill',words('arcana history nature religion'),'Благословение знаний: навык с компетентностью',2,{grantExpertise:true});slot('knowledge-language','language',r.CHOICE_LANGUAGES||[],'Благословение знаний: язык',2);}
      if(domain==='nature') slot('nature-skill','skill',words('animal_handling nature survival'),'Послушник природы: навык');
      const texts={life:'Поборник жизни: заклинания лечения 1-го уровня и выше восстанавливают дополнительно 2 + уровень заклинания.',light:`Защищающая вспышка: реакция, помеха атаке видимого существа в 30 футах; ${Math.max(1,mod(a.wisdom))} / долгий отдых.`,tempest:`Гнев бури: реакция после попадания существа в 5 футах, 2к8 электричеством или звуком (ЛОВ, половина); ${Math.max(1,mod(a.wisdom))} / долгий отдых.`,trickery:'Благословение обманщика: действием касание другого существа — преимущество на Скрытность на 1 час (или до нового применения).',war:`Боевой священник: после действия Атака можно атаковать оружием бонусным действием; ${Math.max(1,mod(a.wisdom))} / долгий отдых.`};
      if(texts[domain]) feature('Умение домена',texts[domain]);
    }
    if(c.class==='sorcerer'&&c.creation_origin==='draconic') {
      result.hpBonus+=1; grant('language','draconic','Драконий предок');
      if(DRAGONS[c.creation_dragon]) feature('Драконий предок',DRAGONS[c.creation_dragon]+'; удвоение бонуса владения в подходящих проверках Харизмы при общении с драконами. Сопротивление стихии пока не получено.');
      result.acOptions.push({label:'Драконья устойчивость (без доспехов)',value:13+mod(a.dexterity)});
    }
    if(c.class==='sorcerer'&&c.creation_origin==='wild') feature('Дикая магия','Прилив дикой магии по решению Мастера после заклинания чародея; Поток хаоса даёт преимущество на одну атаку, проверку или спасбросок и восстанавливается после долгого отдыха или указанного Мастером прилива.');
    if(c.class==='warlock'&&PATRONS[c.creation_patron]) {
      const features={archfey:'Фейское присутствие: действием куб 10 футов, МДР против испуга/очарования до конца вашего следующего хода; 1 / короткий или долгий отдых.',fiend:`Благословение тёмного: при снижении хитов враждебного существа до 0 получаете ${Math.max(1,1+mod(a.charisma))} временных хитов.`, 'great-old-one':'Пробуждённый разум: телепатически обращаться к видимому существу в 30 футах, понимающему хотя бы один язык.'};
      feature('Покровитель: '+PATRONS[c.creation_patron].label,features[c.creation_patron]);
    }
    const wornId=result.equipment.some(i=>i.id===c.creation_worn_armor)?c.creation_worn_armor:'none';
    const worn=ARMOR[wornId];
    result.armor=worn&&wornId!=='none'&&c.race!=='tortle'?{id:wornId,label:worn.label,type:worn.type,base:worn.base,strength:worn.strength,dexterity:worn.type!=='heavy',dexterityCap:worn.type==='medium'&&featId==='medium-armor-master'?3:(Number.isFinite(worn.dex)?worn.dex:undefined),stealthDisadvantage:!!worn.stealthDisadvantage&&!(worn.type==='medium'&&featId==='medium-armor-master')}:null;
    result.shield=c.creation_shield_equipped==='yes'&&result.equipment.some(i=>i.id==='shield');
    if(result.armor&&c.class==='fighter'&&c.creation_style==='defense') result.acBonus+=1;
    if(result.armor?.type==='heavy'&&Number(a.strength||0)<(worn.strength||0)&&c.race!=='dwarf') result.notes.push('Сила ниже требования кольчуги: скорость снижена на 10 футов.');
    if(result.shield) result.notes.push('Щит занимает руку: для двуручного оружия его нужно снять действием. КД указан с выбранным состоянием щита.');
    const grantedWeapons=[...((context.proficiencies||r.resolveProficiencies?.(c,result))?.weapons||[]),...(r.CLASSES?.[c.class]?.grants||[]).filter(g=>g.type==='weapon').map(g=>g.id),...result.fixedProficiencies.filter(g=>g.type==='weapon').map(g=>g.id)];
    for(const item of result.equipment.filter(i=>WEAPONS[i.id])) {
      const w=WEAPONS[item.id],p=w.properties;
      const monkWeapon=c.class==='monk'&&!result.armor&&!result.shield&&(w.id==='shortsword'||(w.group==='simple'&&!p.includes('two-handed')&&!p.includes('heavy')&&!p.includes('ranged')));
      const ability=p.includes('finesse')||monkWeapon? (mod(a.dexterity)>mod(a.strength)?'dexterity':'strength'):(p.includes('ranged')?'dexterity':'strength');
      const proficient=grantedWeapons.includes(w.id.replaceAll('-','_'))||grantedWeapons.includes(w.group);
      const style=c.class==='fighter'?c.creation_style:null;
      const bonus=mod(a[ability])+(proficient?2:0)+(style==='archery'&&p.includes('ranged')?2:0);
      const dealsDamage=w.damage!=='0';
      let damageBonus=dealsDamage?mod(a[ability]):0;
      if(style==='dueling'&&!p.includes('ranged')&&!p.includes('two-handed'))damageBonus+=2;
      if(dealsDamage&&style==='thrown-weapon-fighting'&&p.includes('thrown')&&p.includes('ranged'))damageBonus+=2;
      const notes=[];
      if(style==='dueling'&&!p.includes('ranged')&&!p.includes('two-handed')) notes.push('Дуэлянт: +2 урона, когда в другой руке нет оружия (щит допустим).');
      if(style==='great_weapon'&&(p.includes('two-handed')||p.includes('versatile'))) notes.push('При атаке двумя руками перебросьте 1 и 2 на костях урона.');
      if(style==='thrown-weapon-fighting'&&p.includes('thrown')&&p.includes('ranged'))notes.push(dealsDamage?'Дальнобойная атака метательным оружием: +2 к урону; можно извлечь оружие частью атаки.':'Бой метательным оружием: можно извлечь оружие частью атаки; сеть не наносит урон.');
      if(result.shield&&p.includes('two-handed')) notes.push('Перед атакой необходимо снять щит.');
      if(!proficient) notes.push('Нет владения: бонус мастерства к атаке не добавлен.');
      if(p.includes('versatile')) notes.push(`Двумя руками: ${w.damage==='1d6'?'1d8':'1d10'}.`);
      result.attacks.push({...w,ability,proficient,attackBonus:bonus,damageBonus,notes,damage:dealsDamage?`${w.damage}${damageBonus>=0?'+':''}${damageBonus}`:'0'});
      if(style==='thrown-weapon-fighting'&&p.includes('thrown')&&!p.includes('ranged')) {
        const thrownBonus=mod(a[ability])+2;
        result.attacks.push({...w,id:`${w.id}-thrown`,label:`${w.label} (метание)`,thrownVariant:true,ability,proficient,attackBonus:mod(a[ability])+(proficient?2:0),damageBonus:thrownBonus,damage:`${w.damage}${thrownBonus>=0?'+':''}${thrownBonus}`,notes:['Бой метательным оружием: +2 к урону при метании; оружие можно извлечь частью атаки.',...(proficient?[]:['Нет владения: бонус мастерства к атаке не добавлен.'])]});
      }
    }
    const martialArts=c.class==='monk'&&!result.armor&&!result.shield;
    const unarmedAbility=martialArts&&mod(a.dexterity)>mod(a.strength)?'dexterity':'strength';
    const unarmedDie=c.class==='fighter'&&c.creation_style==='unarmed-fighting'?'1d6':martialArts||featId==='tavern-brawler'?'1d4':'1';
    result.attacks.push({id:'unarmed',label:'Безоружный удар',type:'bludgeoning',group:'unarmed',properties:[],ability:unarmedAbility,proficient:true,attackBonus:2+mod(a[unarmedAbility]),damageBonus:mod(a[unarmedAbility]),damage:`${unarmedDie}${mod(a[unarmedAbility])>=0?'+':''}${mod(a[unarmedAbility])}`,notes:c.class==='fighter'&&c.creation_style==='unarmed-fighting'?['Без оружия и щита в руках кость урона становится к8. В начале хода 1к4 дробящего урона одному захваченному существу.']:[]});
    const natural={aarakocra:['Когти','1d4','slashing'],tabaxi:['Когти','1d4','slashing'],tortle:['Когти','1d4','slashing'],leonin:['Когти','1d4','slashing'],lizardfolk:['Укус','1d6','piercing'],minotaur:['Рога','1d6','piercing'],centaur:['Копыта','1d4','bludgeoning'],satyr:['Таран','1d4','bludgeoning']};
    if(c.race==='shifter'&&c.race_sub==='longtooth-shifter') natural.shifter=['Укус (только во время смены облика)','1d6','piercing'];
    if(natural[c.race]) {
      const [label,die,type]=natural[c.race],bonus=mod(a[unarmedAbility]);
      result.attacks.push({id:'racial-natural-weapon',label,type,group:'natural',properties:[],ability:unarmedAbility,proficient:true,attackBonus:2+bonus,damageBonus:bonus,damage:`${die}${bonus>=0?'+':''}${bonus}`,notes:c.race==='shifter'?['Требуется активная смена облика.']:[]});
    }
    if(c.race==='dragonborn'&&DRAGONS[c.creation_dragonborn_ancestry]) {
      const color=c.creation_dragonborn_ancestry,cone=['gold','green','red','silver','white'].includes(color),conSave=['green','silver','white'].includes(color);
      feature('Драконье наследие',DRAGONS[color]+'; сопротивление соответствующему типу урона.');
      feature('Оружие дыхания',`Действие; 2к6 урона; ${cone?'15-футовый конус':'линия 5 × 30 футов'}; ${conSave?'Телосложение':'Ловкость'}, Сл ${10+mod(a.constitution)}, при успехе половина; 1 / короткий или долгий отдых.`);
    }
    if(c.race==='simic-hybrid') {
      const texts={climb:'Скорость лазания равна скорости ходьбы.',swim:'Дыхание воздухом и водой; скорость плавания равна скорости ходьбы.',glide:'При падении и в сознании вычитайте 100 футов при расчёте урона; на каждый фут снижения можете переместиться до 2 футов горизонтально.'};
      if(texts[c.creation_simic_adaptation]) feature('Животное улучшение',texts[c.creation_simic_adaptation]);
    }
    if(c.race==='kender'&&['intelligence','wisdom','charisma'].includes(c.creation_kender_ability)) feature('Насмешка',`Бонусное действие, видимое существо в 60 футах, слышащее и понимающее вас; МДР Сл ${10+mod(a[c.creation_kender_ability])}; при провале помеха на атаки не по вам до начала вашего следующего хода. 2 / долгий отдых.`);
    const casting=CASTING[c.class];
    if(casting) {
      const [ability,count,mode]=casting;
      const allowedCantrips=spellList(c.class,0,c);
      const cantrips=unique(values(c.creation_cantrips).filter(id=>allowedCantrips.includes(id)));
      if(domain==='light') cantrips.push('light');
      const known=values(c.creation_known_spells).filter(id=>spellList(c.class,1,c).includes(id));
      const book=c.class==='wizard'?values(c.creation_spellbook).filter(id=>spellList('wizard',1).includes(id)):[];
      const prepared=values(c.creation_prepared).filter(id=>(mode==='book'?book:spellList(c.class,1,c)).includes(id));
      const alwaysPrepared=c.class==='cleric'&&domain?(levelup()?.automaticSpells(c).filter(id=>spellList(c.class,1,c).includes(id))||DOMAINS[domain]?.spells||[]):[];
      result.spellcasting={ability,attackBonus:2+mod(a[ability]),saveDC:10+mod(a[ability]),slots: c.class==='warlock'?1:2,slotLevel:1,slotRecovery:c.class==='warlock'?'short-rest':'long-rest',mode,cantrips:unique(cantrips),known:typeof mode==='number'?known:[],spellbook:book,prepared:['prepared','book'].includes(mode)?unique([...prepared,...alwaysPrepared]):[],alwaysPrepared,cantripCount:count,preparedCount:Math.min(c.class==='wizard'?6:Infinity,Math.max(1,mod(a[ability])+(c.class==='artificer'?0:1)))};
      const push=(ids,level,status)=>ids.forEach(id=>result.spells.push({id,label:SPELL_NAMES[id]||id,level,ability,source:CLASSES[c.class],status,limitExempt:alwaysPrepared.includes(id)||(domain==='light'&&id==='light')}));
      push(result.spellcasting.cantrips,0,'cantrip');
      if(typeof mode==='number') push(known,1,'known');
      else {push(result.spellcasting.prepared,1,'prepared');push(book.filter(id=>!prepared.includes(id)),1,'spellbook');}
      if(domain==='nature'&&spellList('druid',0).includes(c.creation_nature_cantrip)) result.spells.push({id:c.creation_nature_cantrip,label:SPELL_NAMES[c.creation_nature_cantrip],level:0,ability:'wisdom',source:'Домен Природы',status:'cantrip',limitExempt:true});
    }
    result.spells.push(...result.raceSpells.map(s=>({...s,status:'racial',limitExempt:true})));
    if(['magic-initiate','ritual-caster','spell-sniper'].includes(featId)&&CASTING[c.creation_feat_class]&&c.creation_feat_class!=='artificer') {
      const ability=CASTING[c.creation_feat_class][0];
      if(featId!=='ritual-caster') values(c.creation_feat_cantrips).filter(id=>spellList(c.creation_feat_class,0).includes(id)&&(featId!=='spell-sniper'||ATTACK_CANTRIPS.includes(id))).forEach(id=>result.spells.push({id,label:SPELL_NAMES[id],level:0,ability,source:feat.label,status:'cantrip',limitExempt:true}));
      if(featId!=='spell-sniper') values(c.creation_feat_spells).filter(id=>spellList(c.creation_feat_class,1).includes(id)&&(featId!=='ritual-caster'||RITUALS.includes(id))).forEach(id=>result.spells.push({id,label:SPELL_NAMES[id],level:1,ability,source:feat.label,status:featId==='ritual-caster'?'ritual':'feat',usage:featId==='ritual-caster'?'Только ритуал':'1 раз / долгий отдых'}));
    }
    result.notes.push(...result.features.map(f=>`${f.name}: ${f.description}`));
    return levelup()?.creationExtras(c, context, result) || result;
  }
  // A secondary class receives its features and casting choices, never a second
  // race, background, starting kit, saving throws or full set of class skills.
  function classChoices(c,context={}) {
    const projected={...c,race:undefined,background:undefined,human_feature:undefined};
    return getChoices(projected,context).filter(g=>['class','spells','proficiencies'].includes(g.section)&&!['creation_racial_spell_ability'].includes(g.id));
  }
  function classExtras(c,context={}) {
    const result=derive({...c,race:undefined,background:undefined,human_feature:undefined},context);
    result.equipment=[];result.money={};result.attacks=[];result.armor=null;result.shield=false;
    result.savingThrowProficiencies=[];result.abilityBonuses={};result.raceSpells=[];
    return result;
  }
  return {getChoices,validate,derive,classChoices,classExtras,getEquipment,raceSpells,spellList,FEATS,DOMAINS,PATRONS,SPELL_NAMES,LISTS,WEAPONS,ARMOR,CASTING};
});
