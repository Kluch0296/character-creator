/* Pending advancement is saved beside, never over, the committed character. */
function getAdvancementContext() {
  const abilities=getCreationContext().abilities;
  const creation=CreationOptions.derive(character,{abilities});
  return {abilities,baseExtras:creation,proficiencies:CharacterRules.resolveProficiencies(character,creation)};
}

function startAdvancement() {
  try {
    character.pendingAdvancement=LevelUpRules.begin(character,getAdvancementContext());
    character.pendingAdvancement.step=0;
    saveDraft('result');renderPage();scrollToPageTop();
  } catch(error) { showValidationErrors([{id:'advancement',message:error.message}]); }
}

function cancelAdvancement() {
  delete character.pendingAdvancement;
  saveDraft('result');renderPage();scrollToPageTop();
}

function advancementSelection(p, id) {
  return Array.isArray(p.choices[id]) ? p.choices[id] : p.choices[id] ? [p.choices[id]] : [];
}

function refreshAdvancement(p, context, focusKey, groupId) {
  const active = new Set(LevelUpRules.getChoices(character, p, context).map(group => group.id));
  for (const key of Object.keys(p.choices)) if (!active.has(key)) delete p.choices[key];
  saveDraft('result');renderPage();
  if (focusKey) {
    const target=getApp().querySelector(`[data-focus-key="${focusKey}"]`);
    let node=target,hidden=false;while(node){if(node.hidden)hidden=true;node=node.parentNode;}
    if (target&&!hidden) target.focus({preventScroll:true});
    else if (groupId) {const field=document.getElementById(`field-${groupId}`);(field?.querySelector('input')||field?.querySelector('legend'))?.focus({preventScroll:true});}
  }
}

function advancementField(container, g, p, context) {
  const selected = advancementSelection(p, g.id), spell = isSpellChoice(g);
  const field = createElement('fieldset', `advancement-field pick-group${spell ? ' pick-group--spells' : ''}`);
  field.id = `field-${g.id}`;
  const legend = createElement('legend', 'field-label', g.label);legend.tabIndex=-1;field.appendChild(legend);
  const counter = createElement('span', `pick-counter${selected.length === g.count ? ' is-complete' : ''}`, `${selected.length} / ${g.count}`);
  counter.setAttribute('aria-live', 'polite');field.appendChild(counter);
  if (g.description) field.appendChild(createElement('p', 'choice-help', g.description));
  field.appendChild(createElement('p', 'pick-hint', g.count === 1 ? 'Выберите карточку. Повторное нажатие снимает выбор.' : `Выберите ${g.count}. Нажмите выбранную карточку, чтобы снять выбор.`));
  // Selected choices stay removable even when a filter hides their original card.
  const selectedRow = createElement('div', 'advancement-selected');
  selectedRow.setAttribute('aria-label', `Выбрано: ${g.label}`);
  for (const value of selected) {
    const option = g.options.find(item => item.value === value);
    const clear = createElement('button', 'advancement-selected__clear', `${option?.label || value} ×`);
    clear.type = 'button';clear.setAttribute('aria-label', `Снять выбор: ${option?.label || value}`);
    clear.setAttribute('data-focus-key', `clear:${g.id}:${value}`);
    clear.addEventListener('click', () => {
      const next = selected.filter(id => id !== value);p.choices[g.id] = g.count === 1 ? next[0] || '' : next;
      refreshAdvancement(p, context, `${g.id}:${value}`, g.id);
    });selectedRow.appendChild(clear);
  }
  field.appendChild(selectedRow);
  const cards = g.options.map(option => {
    const on = selected.includes(option.value), locked = g.count > 1 && selected.length >= g.count && !on;
    const card = spell ? createSpellCard(g, option, {selected:on,locked}) : createOptionCard(g, option, {selected:on,locked,multi:g.count > 1});
    const main = spell ? card.querySelector('.spell-card__main') : card;
    main.addEventListener('click', () => {
      const next = selected.filter(id => id !== option.value);
      if (!on) {if (g.count > 1 && selected.length >= g.count) return;if (g.count === 1) next.length = 0;next.push(option.value);}
      p.choices[g.id] = g.count === 1 ? next[0] || '' : next;
      refreshAdvancement(p, context, `${g.id}:${option.value}`, g.id);
    });
    if (spell && option.url) {const source = createElement('a', 'reference-link', `${option.source || 'Описание'} ↗`);source.href=option.url;source.target='_blank';source.rel='noopener noreferrer';card.appendChild(source);}
    return {card,option};
  });
  if (!cards.length) field.appendChild(createElement('p', 'choice-help', 'Сначала сделайте предыдущие выборы — варианты появятся здесь.'));
  const filters = renderPickerFilters(g, cards, spell);field.appendChild(filters.bar);
  const grid = createElement('div', spell ? 'spell-grid' : 'pick-grid');cards.forEach(({card}) => grid.appendChild(card));field.appendChild(grid);
  applyPickerFilter(g.id, cards, spell, filters.chips);
  const link=createElement('a','reference-link',`Правила и источник: ${g.source || 'PHB'}`);
  link.href=g.options.find(o=>selected.includes(o.value))?.url||`https://5e14.dnd.su/class/${LevelUpData.references[p.classId || character.class]}/`;
  link.target='_blank';link.rel='noopener noreferrer';field.appendChild(link);container.appendChild(field);
}

function advancementClassPicker(card, p, context) {
  card.appendChild(createElement('p', 'choice-help', 'Продолжите текущий класс или возьмите первый уровень другого. Мультиклассирование — опциональное правило, согласуйте его с Мастером.'));
  const grid = createElement('div', 'advancement-classes');
  const options = LevelUpRules.classOptions ? LevelUpRules.classOptions(character, context) : [{value:character.class,label:getSelectedOption('class',character.class)?.label,level:p.from,nextLevel:p.to,eligible:true}];
  for (const option of options) {
    const item = createElement('div', `advancement-class${!option.eligible ? ' is-unavailable' : ''}`);
    const button = createElement('button', `pick-card${option.value === (p.classId || character.class) ? ' is-selected' : ''}`);button.type='button';button.disabled=!option.eligible;
    button.setAttribute('aria-pressed', option.value === (p.classId || character.class) ? 'true' : 'false');button.setAttribute('data-focus-key',`advancement-class:${option.value}`);
    button.appendChild(createElement('span','pick-card__name',plainLabel(option.label)));
    button.appendChild(createElement('span','pick-card__text',option.level ? `${option.level} → ${option.nextLevel} уровень класса` : 'Новый класс · 1-й уровень'));
    button.addEventListener('click',()=>{
      if (option.value === (p.classId || character.class)) return;
      character.pendingAdvancement=LevelUpRules.selectClass(character,p,option.value,context);character.pendingAdvancement.step=0;
      saveDraft('result');renderPage();focusByKey(getApp(),`advancement-class:${option.value}`);
    });item.appendChild(button);
    if (option.requirements) item.appendChild(createElement('p','choice-help',Array.isArray(option.requirements)?option.requirements.join('; '):String(option.requirements)));
    if (option.unmet?.length) item.appendChild(createElement('p','conflict-note',`Не выполнено: ${Array.isArray(option.unmet)?option.unmet.join('; '):option.unmet}`));
    if (option.url) {const source=createElement('a','reference-link','Правила класса ↗');source.href=option.url;source.target='_blank';source.rel='noopener noreferrer';item.appendChild(source);}
    grid.appendChild(item);
  }card.appendChild(grid);
}

function advancementHp(p, context) {
  if (LevelUpRules.hpGain) return LevelUpRules.hpGain(character,p,context);
  const die=CharacterRules.CLASSES[p.classId || character.class]?.hitDie,raw=p.hp?.value;
  const constitution=Math.floor((context.abilities.constitution-10)/2),bonus=context.baseExtras.hpBonus||0;
  return {die,raw,constitution,bonus,gain:Math.max(1,raw+constitution+bonus)};
}

function advancementHpField(card, p, context, onChange) {
  const gain=advancementHp(p,context),die=gain.die,average=die/2+1;
  const averageGain=advancementHp({...p,hp:{mode:'average',value:average}},context);
  const field=createElement('div','form-field');
  field.appendChild(createElement('p','choice-help',`Кость выбранного класса: к${die}. Минимальная прибавка — 1 хит.`));
  const label=createElement('label','field-label','Способ получения хитов');label.htmlFor='advancement-hp-mode';field.appendChild(label);
  const select=createElement('select','mechanic-select');select.id='advancement-hp-mode';
  for (const [id,name] of [['average',`Среднее: +${averageGain.gain} хитов (${average} + ТЕЛ ${signedValue(averageGain.constitution)}${averageGain.bonus ? ` + бонусы ${averageGain.bonus}` : ''})`],['roll','Ввести фактический бросок']]) {const option=createElement('option','',name);option.value=id;select.appendChild(option);}
  select.value=p.hp.mode;select.addEventListener('change',()=>{p.hp={mode:select.value,value:select.value==='average'?average:1};saveDraft('result');renderPage();document.getElementById('advancement-hp-mode')?.focus({preventScroll:true});});field.appendChild(select);
  const strip=createElement('p','advancement-hp-strip');strip.setAttribute('aria-live','polite');field.appendChild(strip);
  const updateStrip=()=>{const hp=advancementHp(p,context);const valid=Number.isInteger(hp.raw)&&hp.raw>=1&&hp.raw<=die;strip.textContent=valid?`${hp.raw} кость + (${signedValue(hp.constitution)}) ТЕЛ${hp.bonus ? ` + ${hp.bonus} бонусы` : ''} = +${hp.gain} хитов`:`Введите целый бросок от 1 до ${die}.`;};updateStrip();
  if (p.hp.mode==='roll') {const caption=createElement('label','field-label','Результат броска');caption.htmlFor='advancement-hp-roll';field.appendChild(caption);const input=createElement('input','mechanic-select');input.type='number';input.id='advancement-hp-roll';input.min=1;input.max=die;input.step=1;input.value=p.hp.value;input.addEventListener('input',()=>{p.hp.value=input.value.trim()===''?null:Number(input.value);saveDraft('result');updateStrip();onChange();});field.appendChild(input);}
  card.appendChild(field);
}

function showAdvancement(container) {
  cancelLiveRefresh();liveRefs=null;container.innerHTML='';container.setAttribute('aria-busy','false');
  const pending=character.pendingAdvancement;
  if(!pending||![1,2].includes(pending.version)||!Number.isInteger(pending.from)||!Number.isInteger(pending.to)||!pending.hp||typeof pending.choices!=='object'||Array.isArray(pending.choices)||pending.choices===null){
    const card=createElement('section','result-card advancement-card');card.setAttribute('role','alert');card.appendChild(createElement('h2','','Повреждён черновик повышения'));card.appendChild(createElement('p','','Повышение не применяется. Исходный герой сохранён; отмените повреждённый черновик и начните заново.'));const cancel=createElement('button','secondary-button','Отменить повышение');cancel.type='button';cancel.addEventListener('click',cancelAdvancement);card.appendChild(cancel);container.appendChild(card);return;
  }
  const p=character.pendingAdvancement,context=getAdvancementContext(),shell=createElement('div','app-shell');renderHeader(shell);
  const main=createElement('main','wizard-main advancement-main'),layout=createElement('div','advancement-layout'),card=createElement('section','result-card advancement-card');
  const steps=['Класс','Хиты','Умения и владения','Заклинания','Проверка'];
  if (p.version===1 && p.uiVersion!==2) {p.step=Number.isInteger(p.step)?p.step+1:0;p.uiVersion=2;}
  const step=Number.isInteger(p.step)&&p.step>=0&&p.step<steps.length?p.step:0;
  card.appendChild(createElement('p','eyebrow',`Общий уровень ${p.from} → ${p.to} · шаг ${step+1} из ${steps.length}`));
  const heading=createElement('h2','',steps[step]);heading.tabIndex=-1;card.appendChild(heading);
  card.appendChild(createElement('p','choice-help','Исходный герой сохранён. Все изменения применяются вместе после проверки.'));
  card.appendChild(createElement('p','advancement-class-line',`Выбранный класс: ${plainLabel(getSelectedOption('class',p.classId || character.class)?.label)} · общий уровень ${p.to}`));
  const progress=createElement('ol','advancement-progress');steps.forEach((name,i)=>{const item=createElement('li',i===step?'is-current':'',name);if(i===step)item.setAttribute('aria-current','step');progress.appendChild(item);});card.appendChild(progress);
  const groups=LevelUpRules.getChoices(character,p,context),transition=LevelUpRules.transition(character,p,context),errors=transition.errors;
  const aside=createElement('aside','character-sheet advancement-sheet');aside.setAttribute('aria-label','Лист персонажа при повышении');
  const updateSheet=()=>{
    const current=LevelUpRules.transition(character,p,context),base=context.baseExtras,committed=LevelUpRules.derive(character,context,base);
    const extras=current.errors.length?committed:LevelUpRules.derive(character,context,base,current.state);
    const stats=CharacterRules.derivedStats(character,extras),hp=advancementHp(p,context);
    const eligible=!LevelUpRules.classOptions||LevelUpRules.classOptions(character,context).some(option=>option.value===(p.classId||character.class)&&option.eligible);
    const validHp=eligible&&Number.isInteger(hp.raw)&&hp.raw>=1&&hp.raw<=hp.die&&(p.hp.mode==='roll'||p.hp.mode==='average'&&hp.raw===hp.die/2+1);
    if (current.errors.length&&validHp) {stats.hp+=hp.gain;stats.maxHp=stats.hp;}
    renderCharacterSheet(aside,null,{character,extras,stats,label:current.errors.length?(validHp?'Предпросмотр хитов':'Сохранённый герой'):'Предпросмотр повышения',note:current.errors.length?(validHp?'Умения и магия показывают сохранённого героя, пока выборы не завершены. Хиты учитывают допустимую прибавку.':'Укажите допустимые класс, хиты и решения. До проверки здесь показан сохранённый герой.'):'Все решения проверены. Изменения применятся после подтверждения.'});
  };updateSheet();
  if(step===0){
    advancementClassPicker(card,p,context);
  } else if(step===1){
    advancementHpField(card,p,context,updateSheet);
  } else if(step<4){
    const visible=groups.filter(g=>step===3?g.section==='spells':g.section!=='spells');
    if(!visible.length)card.appendChild(createElement('p','choice-help','Новых постоянных решений на этом шаге нет. Автоматические умения появятся в проверке.'));
    visible.forEach(g=>advancementField(card,g,p,context));
  } else {
    if(errors.length){const list=createElement('ul','validation-summary');list.setAttribute('role','alert');errors.forEach(e=>list.appendChild(createElement('li','',e.message)));card.appendChild(list);}
    else {
      const extra=LevelUpRules.derive(character,context,context.baseExtras,transition.state),after=CharacterRules.derivedStats(character,extra),before=getDerivedCharacter();
      const review=createElement('dl','summary-grid');appendDefinition(review,'Общий уровень',`${p.from} → ${p.to}`);appendDefinition(review,'Классы',characterClassLabel(character,extra));appendDefinition(review,'Максимум хитов',`${before.hp} → ${after.hp} (+${advancementHp(p,context).gain})`);appendDefinition(review,'Кости хитов',characterHitDiceLabel(after,extra));appendDefinition(review,'Подклассы',extra.subclasses?.map(item=>item.label).join(', ')||extra.subclass?.label||'—');
      const slots=Object.entries(extra.spellcasting?.slotTiers||{}).map(([level,count])=>`${count} × ${level}-й круг`);if(extra.spellcasting?.pactSlots) slots.push(`${extra.spellcasting.pactSlots.count} × ${extra.spellcasting.pactSlots.level}-й круг (договор, короткий отдых)`);appendDefinition(review,'Ячейки',slots.join('; ')||'—');card.appendChild(review);
      appendResultList(card,'Ресурсы',(extra.resources||[]).map(x=>`${x.name}: ${x.max}, ${x.rest==='short-rest'?'короткий':'долгий'} отдых`));
      appendResultList(card,'Новые решения',groups.map(g=>g.label+': '+(Array.isArray(p.choices[g.id])?p.choices[g.id]:[p.choices[g.id]]).map(id=>g.options.find(o=>o.value===id)?.label||id).join(', ')));
      appendResultList(card,'Умения',(extra.features||[]).map(f=>f.name+': '+f.description));
      card.appendChild(createElement('p','choice-help','Формы Дикого облика, звёздные формы, модель доспеха, пушка, эссенция дракончика, формы оружия/фамильяра и лунная фаза выбираются при применении или отдыхе по своим правилам.'));
    }
  }
  const actions=createElement('div','result-actions');
  const button=(text,cls,fn)=>{const b=createElement('button',cls,text);b.type='button';b.addEventListener('click',fn);actions.appendChild(b);return b;};
  button('Отменить повышение','text-button',cancelAdvancement);
  if(step>0)button('← Назад','secondary-button',()=>{p.step=step-1;saveDraft('result');renderPage();scrollToPageTop();});
  if(step<4)button('Далее →','primary-button',()=>{p.step=step+1;saveDraft('result');renderPage();scrollToPageTop();});
  else {const commit=button('Применить повышение','primary-button',()=>{try{character=LevelUpRules.commit(character,p,context);saveDraft('result');renderPage();scrollToPageTop();}catch(e){showValidationErrors([{id:'advancement',message:e.message}]);}});commit.disabled=errors.length>0;}
  card.appendChild(actions);layout.appendChild(card);layout.appendChild(aside);main.appendChild(layout);shell.appendChild(main);container.appendChild(shell);heading.focus({preventScroll:true});
}

function confirmProgressionResetForEdit(onConfirm=()=>renderPage()) {
  if(!character.advancement&&!character.pendingAdvancement)return true;
  const existing=document.getElementById('progression-reset-dialog');if(existing)return false;
  const previousFocus=document.activeElement;const overlay=createElement('div','progression-reset-overlay'),dialog=createElement('section','result-card progression-reset-dialog');dialog.id='progression-reset-dialog';dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');dialog.setAttribute('aria-labelledby','progression-reset-title');
  const title=createElement('h2','','Сбросить прокачку для редактирования?');title.id='progression-reset-title';dialog.appendChild(title);
  dialog.appendChild(createElement('p','','Редактирование исходных выборов сбросит повышения до 1-го уровня. Имя, характеристики, снаряжение и решения создания сохранятся. Пока вы не подтвердите, герой останется прежним.'));
  const actions=createElement('div','result-actions'),cancel=createElement('button','secondary-button','Оставить героя'),confirm=createElement('button','primary-button','Сбросить прокачку и продолжить');cancel.type=confirm.type='button';
  const dismiss=()=>{overlay.remove();previousFocus?.focus({preventScroll:true});};cancel.addEventListener('click',dismiss);confirm.addEventListener('click',()=>{character=LevelUpRules.reset(character);saveDraft('result');overlay.remove();onConfirm();});
  dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();dismiss();}if(event.key==='Tab'){event.preventDefault();(document.activeElement===cancel?confirm:cancel).focus();}});
  actions.appendChild(cancel);actions.appendChild(confirm);dialog.appendChild(actions);overlay.appendChild(dialog);getApp().appendChild(overlay);cancel.focus();return false;
}
