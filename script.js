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
    
    // Добавляем классы для стилизации
    if (elem.id === 'race') {
      btn.classList.add('race-' + opt.value);
    } else if (elem.id === 'class') {
      btn.classList.add('class-btn');
    }
    
    btn.addEventListener('click', () => {
      character[elem.id] = opt.value;
      // highlight selected option
      optionsDiv.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (opt.suboptions) {
        delete character[elem.id + '_sub'];
        renderSubOptions(optionsDiv, elem.id, opt.suboptions);
      } else {
        const subDiv = document.getElementById('sub-' + elem.id);
        if (subDiv) subDiv.remove();
        delete character[elem.id + '_sub'];
      }
    });
    optionsDiv.appendChild(btn);
  });
  container.appendChild(optionsDiv);
}

function renderSubOptions(parent, id, suboptions) {
  let subDiv = document.getElementById('sub-' + id);
  if (!subDiv) {
    subDiv = document.createElement('div');
    subDiv.id = 'sub-' + id;
    parent.appendChild(subDiv);
  }
  subDiv.innerHTML = '<p>Выберите подрасу:</p>';
  suboptions.forEach(sub => {
    const btn = document.createElement('button');
    btn.classList.add('option-btn');
    if (sub.image) {
      const img = document.createElement('img');
      img.src = sub.image;
      img.alt = sub.label;
      img.className = 'option-image';
      btn.appendChild(img);
    }
    const span = document.createElement('span');
    span.textContent = sub.label;
    btn.appendChild(span);
    btn.addEventListener('click', () => {
      character[id + '_sub'] = sub.value;
      subDiv.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
    subDiv.appendChild(btn);
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
