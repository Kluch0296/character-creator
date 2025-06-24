let config;
let character = {};
let currentPageIndex = 0;

function loadConfig() {
  fetch('config.json')
    .then(res => res.json())
    .then(data => {
      config = data;
      renderPage();
    })
    .catch(err => console.error('Ошибка загрузки конфигурации', err));
}

document.addEventListener('DOMContentLoaded', loadConfig);

function renderPage() {
  const app = document.getElementById('app');
  app.innerHTML = '';
  if (currentPageIndex >= config.pages.length) {
    showResult(app);
    return;
  }
  const page = config.pages[currentPageIndex];
  const progressContainer = document.createElement('div');
  progressContainer.className = 'progress-container';
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.style.width = (currentPageIndex / config.pages.length) * 100 + '%';
  progressContainer.appendChild(progressBar);
  app.appendChild(progressContainer);

  const pageIndicator = document.createElement('div');
  pageIndicator.className = 'page-indicator';
  pageIndicator.textContent = `${currentPageIndex + 1} / ${config.pages.length}`;
  app.appendChild(pageIndicator);
  const title = document.createElement('h2');
  title.textContent = page.title;
  app.appendChild(title);

  const elements = page.elements || [page];
  elements.forEach(elem => {
    if (page.elements && elem.title) {
      const subTitle = document.createElement('h3');
      subTitle.textContent = elem.title;
      app.appendChild(subTitle);
    }

    if (elem.type === 'buttons') {
      renderButtons(app, elem);
    } else if (elem.type === 'text') {
      renderTextInput(app, elem);
    } else if (elem.type === 'radio') {
      renderRadio(app, elem);
    } else if (elem.type === 'checkbox') {
      renderCheckboxes(app, elem);
    }
  });
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Далее';
  nextBtn.addEventListener('click', () => {
    let invalid = false;
    elements.forEach(elem => {
      if (elem.type === 'checkbox') {
        if (!character[elem.id] || character[elem.id].length === 0) invalid = true;
      } else if (elem.type === 'text') {
        if (!character[elem.id] || character[elem.id].trim() === '') invalid = true;
      } else {
        if (!character[elem.id]) invalid = true;
      }
    });
    if (invalid) {
      nextBtn.classList.add('shake');
      nextBtn.addEventListener('animationend', () => nextBtn.classList.remove('shake'), { once: true });
      return;
    }
    currentPageIndex++;
    renderPage();
  });
  app.appendChild(nextBtn);
}

function renderButtons(container, elem) {
  if (elem.id === 'race') {
    renderRaceSelection(container, elem);
    return;
  }
  
  // Обычная логика для других кнопок
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';
  elem.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.classList.add('option-btn');
    if (opt.image) {
      const img = document.createElement('img');
      img.src = opt.image;
      img.alt = opt.label;
      img.className = 'option-image';
      btn.appendChild(img);
    }
    const span = document.createElement('span');
    span.textContent = opt.label;
    btn.appendChild(span);
    
    if (elem.id === 'class') {
      btn.classList.add('class-btn');
    }
    
    btn.addEventListener('click', () => {
      character[elem.id] = opt.value;
      optionsDiv.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
    optionsDiv.appendChild(btn);
  });
  container.appendChild(optionsDiv);
}

function renderRaceSelection(container, elem) {
  const raceContainer = document.createElement('div');
  raceContainer.className = 'race-selection-container';
  
  // Левая часть - сетка рас
  const raceGrid = document.createElement('div');
  raceGrid.className = 'race-options-grid';
  
  // Правая часть - детали расы  
  const detailsPanel = document.createElement('div');
  detailsPanel.className = 'race-details-panel';
  detailsPanel.innerHTML = '<h3>Выберите расу</h3><p class="race-description">Выберите расу из списка слева, чтобы увидеть подробности</p>';
  
  elem.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.classList.add('option-btn', 'race-' + opt.value);
    
    if (opt.image) {
      const img = document.createElement('img');
      img.src = opt.image;
      img.alt = opt.label;
      img.className = 'option-image';
      btn.appendChild(img);
    }
    
    const span = document.createElement('span');
    span.textContent = opt.label;
    btn.appendChild(span);
    
    btn.addEventListener('click', () => {
      character.race = opt.value;
      
      // Обновляем визуальное состояние кнопок
      raceGrid.querySelectorAll('button').forEach(b => {
        b.classList.remove('race-selected');
        b.classList.add('race-dimmed');
      });
      btn.classList.remove('race-dimmed');
      btn.classList.add('race-selected');
      
      // Обновляем панель деталей
      updateRaceDetails(detailsPanel, opt);
      
      // Очищаем предыдущие выборы подрас и доп. полей
      delete character.race_sub;
      clearAdditionalFields('race');
    });
    
    raceGrid.appendChild(btn);
  });
  
  raceContainer.appendChild(raceGrid);
  raceContainer.appendChild(detailsPanel);
  container.appendChild(raceContainer);
}

function updateRaceDetails(panel, raceOption) {
  panel.innerHTML = '';
  
  // Заголовок
  const title = document.createElement('h3');
  title.textContent = raceOption.label;
  panel.appendChild(title);
  
  // Описание
  if (raceOption.description) {
    const desc = document.createElement('p');
    desc.className = 'race-description';
    desc.textContent = raceOption.description;
    panel.appendChild(desc);
  }
  
  // Ссылка
  if (raceOption.link) {
    const link = document.createElement('a');
    link.href = raceOption.link;
    link.target = '_blank';
    link.className = 'race-link';
    link.textContent = '📖 Подробнее на dnd.su';
    panel.appendChild(link);
  }
  
  // Подрасы
  if (raceOption.suboptions) {
    const subraceSection = document.createElement('div');
    subraceSection.className = 'subrace-section';
    
    const subraceTitle = document.createElement('h4');
    subraceTitle.textContent = 'Выберите подрасу:';
    subraceSection.appendChild(subraceTitle);
    
    const subraceOptions = document.createElement('div');
    subraceOptions.className = 'subrace-options';
    
    raceOption.suboptions.forEach(sub => {
      const subBtn = document.createElement('button');
      subBtn.className = 'subrace-btn';
      subBtn.textContent = sub.label;
      
      subBtn.addEventListener('click', () => {
        character.race_sub = sub.value;
        subraceOptions.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
        subBtn.classList.add('selected');
        
        // Обновляем дополнительные поля для подрасы
        updateAdditionalFields(panel, sub);
      });
      
      subraceOptions.appendChild(subBtn);
    });
    
    subraceSection.appendChild(subraceOptions);
    panel.appendChild(subraceSection);
  }
  
  // Дополнительные поля для основной расы
  if (raceOption.additionalFields) {
    updateAdditionalFields(panel, raceOption);
  }
}

function updateAdditionalFields(panel, option) {
  // Удаляем предыдущие дополнительные поля
  const existingFields = panel.querySelector('.additional-fields');
  if (existingFields) {
    existingFields.remove();
  }
  
  if (!option.additionalFields) return;
  
  const fieldsContainer = document.createElement('div');
  fieldsContainer.className = 'additional-fields';
  
  option.additionalFields.forEach(field => {
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'additional-field';
    
    const fieldTitle = document.createElement('h5');
    fieldTitle.textContent = field.title;
    fieldDiv.appendChild(fieldTitle);
    
    if (field.type === 'radio') {
      field.options.forEach(opt => {
        const label = document.createElement('label');
        label.className = 'input-group';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = field.id;
        input.value = opt.value;
        input.addEventListener('change', () => {
          character[field.id] = opt.value;
        });
        
        label.appendChild(input);
        
        const span = document.createElement('span');
        span.textContent = opt.label;
        label.appendChild(span);
        
        fieldDiv.appendChild(label);
      });
    } else if (field.type === 'checkbox') {
      if (!character[field.id]) character[field.id] = [];
      
      field.options.forEach(opt => {
        const label = document.createElement('label');
        label.className = 'input-group';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = opt.value;
        input.addEventListener('change', () => {
          if (input.checked) {
            if (!character[field.id].includes(opt.value)) {
              character[field.id].push(opt.value);
            }
          } else {
            character[field.id] = character[field.id].filter(v => v !== opt.value);
          }
        });
        
        label.appendChild(input);
        
        const span = document.createElement('span');
        span.textContent = opt.label;
        label.appendChild(span);
        
        fieldDiv.appendChild(label);
      });
    }
    
    fieldsContainer.appendChild(fieldDiv);
  });
  
  // Добавляем информационное поле
  const infoSection = document.createElement('div');
  infoSection.className = 'info-section';
  infoSection.innerHTML = `
    <h5>💡 Совет</h5>
    <p>Выбор расы влияет на базовые характеристики и доступные способности. Изучите описание на dnd.su для принятия обоснованного решения.</p>
  `;
  fieldsContainer.appendChild(infoSection);
  
  panel.appendChild(fieldsContainer);
}

function clearAdditionalFields(prefix) {
  Object.keys(character).forEach(key => {
    if (key.startsWith(prefix + '_') && key !== prefix + '_sub') {
      delete character[key];
    }
  });
}

function renderTextInput(container, elem) {
  const wrapper = document.createElement('div');
  wrapper.className = 'text-wrapper';
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = elem.placeholder || '';
  if (character[elem.id]) input.value = character[elem.id];
  input.addEventListener('input', () => {
    character[elem.id] = input.value;
  });
  wrapper.appendChild(input);
  container.appendChild(wrapper);
}

function renderRadio(container, elem) {
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';
  elem.options.forEach(opt => {
    const label = document.createElement('label');
    label.className = 'input-group';
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = elem.id;
    input.value = opt.value;
    if (character[elem.id] === opt.value) input.checked = true;
    input.addEventListener('change', () => {
      character[elem.id] = opt.value;
    });
    label.appendChild(input);
    if (opt.image) {
      const img = document.createElement('img');
      img.src = opt.image;
      img.alt = opt.label;
      img.className = 'option-image';
      label.appendChild(img);
    }
    const span = document.createElement('span');
    span.textContent = opt.label;
    label.appendChild(span);
    optionsDiv.appendChild(label);
  });
  container.appendChild(optionsDiv);
}

function renderCheckboxes(container, elem) {
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';
  if (!Array.isArray(character[elem.id])) {
    character[elem.id] = [];
  }
  elem.options.forEach(opt => {
    const label = document.createElement('label');
    label.className = 'input-group';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = opt.value;
    input.checked = character[elem.id].includes(opt.value);
    input.addEventListener('change', () => {
      if (input.checked) {
        if (!character[elem.id].includes(opt.value)) {
          character[elem.id].push(opt.value);
        }
      } else {
        character[elem.id] = character[elem.id].filter(v => v !== opt.value);
      }
    });
    label.appendChild(input);
    if (opt.image) {
      const img = document.createElement('img');
      img.src = opt.image;
      img.alt = opt.label;
      img.className = 'option-image';
      label.appendChild(img);
    }
    const span = document.createElement('span');
    span.textContent = opt.label;
    label.appendChild(span);
    optionsDiv.appendChild(label);
  });
  container.appendChild(optionsDiv);
}

function showResult(container) {
  const title = document.createElement('h2');
  title.textContent = 'Результат';

  const resultBlock = document.createElement('div');
  resultBlock.className = 'result';
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(character, null, 2);
  resultBlock.appendChild(pre);

  const restartBtn = document.createElement('button');
  restartBtn.textContent = 'Начать заново';
  restartBtn.addEventListener('click', () => {
    character = {};
    currentPageIndex = 0;
    renderPage();
  });

  container.appendChild(title);
  container.appendChild(resultBlock);
  container.appendChild(restartBtn);
}
