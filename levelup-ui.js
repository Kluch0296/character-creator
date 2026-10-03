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

function advancementField(container,g,p,context) {
  const field=createElement('fieldset','advancement-field');
  field.appendChild(createElement('legend','field-label',g.label));
  const selected=Array.isArray(p.choices[g.id])?p.choices[g.id]:p.choices[g.id]?[p.choices[g.id]]:[];
  for(let i=0;i<g.count;i++) {
    const label=createElement('label','choice-help',g.count>1?`Выбор ${i+1} из ${g.count}`:'Ваш выбор');
    const id=`advancement-${g.id}-${i}`;label.htmlFor=id;field.appendChild(label);
    const select=createElement('select','mechanic-select');select.id=id;
    const empty=createElement('option','','Выберите…');empty.value='';select.appendChild(empty);
    for(const o of g.options) {const item=createElement('option','',o.label+(o.source?' · '+o.source:''));item.value=o.value;item.disabled=selected.includes(o.value)&&selected[i]!==o.value;select.appendChild(item);}
    select.value=selected[i]||'';
    select.addEventListener('change',()=>{
      const values=[...selected];values[i]=select.value;
      p.choices[g.id]=g.count===1?select.value:values.filter(Boolean);
      const active=LevelUpRules.getChoices(character,p,context);
      for(const key of Object.keys(p.choices))if(!active.some(group=>group.id===key))delete p.choices[key];
      // Preserve visibly invalid selections until the user repairs them; never commit silently.
      saveDraft('result');renderPage();document.getElementById(id)?.focus({preventScroll:true});
    });
    field.appendChild(select);
    const o=g.options.find(x=>x.value===selected[i]);
    if(o?.description)field.appendChild(createElement('p','choice-help',o.description));
    if(o){const spell=SpellInfo.get(o.value);if(spell)field.appendChild(createElement('p','choice-help',`${spell.schoolLabel||''} · ${spell.time||''} · ${spell.range||''}. ${spell.text||''}`));}
  }
  const link=createElement('a','reference-link','Правила и источник: '+g.source);
  link.href=g.options.find(o=>selected.includes(o.value))?.url||`https://5e14.dnd.su/class/${LevelUpData.references[character.class]}/`;
  link.target='_blank';link.rel='noopener noreferrer';field.appendChild(link);container.appendChild(field);
}

function showAdvancement(container) {
  cancelLiveRefresh();liveRefs=null;container.innerHTML='';container.setAttribute('aria-busy','false');
  const pending=character.pendingAdvancement;
  if(!pending||pending.version!==1||!Number.isInteger(pending.from)||!Number.isInteger(pending.to)||!pending.hp||typeof pending.choices!=='object'||Array.isArray(pending.choices)||pending.choices===null){
    const card=createElement('section','result-card advancement-card');card.setAttribute('role','alert');card.appendChild(createElement('h2','','Повреждён черновик повышения'));card.appendChild(createElement('p','','Повышение не применяется. Исходный герой сохранён; отмените повреждённый черновик и начните заново.'));const cancel=createElement('button','secondary-button','Отменить повышение');cancel.type='button';cancel.addEventListener('click',cancelAdvancement);card.appendChild(cancel);container.appendChild(card);return;
  }
  const p=character.pendingAdvancement,context=getAdvancementContext(),shell=createElement('div','app-shell');renderHeader(shell);
  const main=createElement('main','wizard-main advancement-main'),card=createElement('section','result-card advancement-card');
  const steps=['Хиты','Класс и владения','Заклинания','Проверка'];
  const step=Number.isInteger(p.step)&&p.step>=0&&p.step<4?p.step:0;
  card.appendChild(createElement('p','eyebrow',`Повышение ${p.from} → ${p.to} · шаг ${step+1} из 4`));
  const heading=createElement('h2','',steps[step]);heading.tabIndex=-1;card.appendChild(heading);
  card.appendChild(createElement('p','choice-help','Исходный герой сохранён. Все изменения применяются вместе после проверки.'));
  const progress=createElement('ol','advancement-progress');steps.forEach((name,i)=>{const item=createElement('li',i===step?'is-current':'',name);if(i===step)item.setAttribute('aria-current','step');progress.appendChild(item);});card.appendChild(progress);
  const groups=LevelUpRules.getChoices(character,p,context), errors=LevelUpRules.transition(character,p,context).errors;
  if(step===0){
    const die=CharacterRules.CLASSES[character.class]?.hitDie;
    const field=createElement('div','form-field');field.appendChild(createElement('p','choice-help',`Кость класса: к${die}. Прибавляем Телосложение и бонусы каждого уровня; минимум 1 хит.`));
    const label=createElement('label','field-label','Способ получения хитов');label.htmlFor='advancement-hp-mode';field.appendChild(label);
    const select=createElement('select','mechanic-select');select.id='advancement-hp-mode';
    for(const [id,name]of [['average',`Среднее: ${die/2+1}`],['roll','Ввести фактический бросок']]){const o=createElement('option','',name);o.value=id;select.appendChild(o);}
    select.value=p.hp?.mode||'';select.addEventListener('change',()=>{p.hp={mode:select.value,value:select.value==='average'?die/2+1:1};saveDraft('result');renderPage();document.getElementById('advancement-hp-mode')?.focus();});field.appendChild(select);
    if(p.hp?.mode==='roll'){const caption=createElement('label','field-label','Результат броска');caption.htmlFor='advancement-hp-roll';field.appendChild(caption);const input=createElement('input','mechanic-select');input.type='number';input.id='advancement-hp-roll';input.min=1;input.max=die;input.step=1;input.value=p.hp.value;input.addEventListener('input',()=>{p.hp.value=Number(input.value);saveDraft('result');});field.appendChild(input);}
    card.appendChild(field);
  } else if(step<3){
    const visible=groups.filter(g=>step===2?g.section==='spells':g.section!=='spells');
    if(!visible.length)card.appendChild(createElement('p','choice-help','Новых постоянных решений на этом шаге нет. Автоматические умения появятся в проверке.'));
    visible.forEach(g=>advancementField(card,g,p,context));
  } else {
    if(errors.length){const list=createElement('ul','validation-summary');list.setAttribute('role','alert');errors.forEach(e=>list.appendChild(createElement('li','',e.message)));card.appendChild(list);}
    else {
      const next=LevelUpRules.commit(character,p,context),base=CreationOptions.derive(next,context),extra=LevelUpRules.derive(next,context,base),after=CharacterRules.derivedStats(next,extra),before=getDerivedCharacter();
      const review=createElement('dl','summary-grid');appendDefinition(review,'Уровень',`${p.from} → ${p.to}`);appendDefinition(review,'Максимум хитов',`${before.hp} → ${after.hp}`);appendDefinition(review,'Кости хитов',`${p.from}к${before.hitDie} → ${p.to}к${after.hitDie}`);appendDefinition(review,'Подкласс',extra.subclass?.label||'—');appendDefinition(review,'Ячейки',extra.spellcasting?.pactSlots?`${extra.spellcasting.pactSlots.count} × ${extra.spellcasting.pactSlots.level}-й круг (короткий отдых)`:Object.entries(extra.spellcasting?.slotTiers||{}).map(([level,count])=>`${count} × ${level}-й круг`).join(', ')||'—');card.appendChild(review);
      appendResultList(card,'Ресурсы',(extra.resources||[]).map(x=>`${x.name}: ${x.max}, ${x.rest==='short-rest'?'короткий':'долгий'} отдых`));
      appendResultList(card,'Новые решения',groups.map(g=>g.label+': '+(Array.isArray(p.choices[g.id])?p.choices[g.id]:[p.choices[g.id]]).map(id=>g.options.find(o=>o.value===id)?.label||id).join(', ')));
      appendResultList(card,'Умения',extra.features.filter(f=>f.level===p.to).map(f=>f.name+': '+f.description));
      card.appendChild(createElement('p','choice-help','Формы Дикого облика, звёздные формы, модель доспеха, пушка, эссенция дракончика, формы оружия/фамильяра и лунная фаза выбираются при применении или отдыхе по своим правилам.'));
    }
  }
  const actions=createElement('div','result-actions');
  const button=(text,cls,fn)=>{const b=createElement('button',cls,text);b.type='button';b.addEventListener('click',fn);actions.appendChild(b);return b;};
  button('Отменить повышение','text-button',cancelAdvancement);
  if(step>0)button('← Назад','secondary-button',()=>{p.step=step-1;saveDraft('result');renderPage();scrollToPageTop();});
  if(step<3)button('Далее →','primary-button',()=>{p.step=step+1;saveDraft('result');renderPage();scrollToPageTop();});
  else {const commit=button('Применить повышение','primary-button',()=>{try{character=LevelUpRules.commit(character,p,context);saveDraft('result');renderPage();scrollToPageTop();}catch(e){showValidationErrors([{id:'advancement',message:e.message}]);}});commit.disabled=errors.length>0;}
  card.appendChild(actions);main.appendChild(card);shell.appendChild(main);container.appendChild(shell);heading.focus({preventScroll:true});
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
