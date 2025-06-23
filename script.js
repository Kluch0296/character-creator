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

  if (page.type === 'buttons') {
    renderButtons(app, page);
  } else if (page.type === 'text') {
    renderTextInput(app, page);
  } else if (page.type === 'radio') {
    renderRadio(app, page);
  } else if (page.type === 'checkbox') {
    renderCheckboxes(app, page);
  }
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Далее';
  nextBtn.addEventListener('click', () => {
    let invalid = false;
    if (page.type === 'checkbox') {
      invalid = !character[page.id] || character[page.id].length === 0;
    } else if (page.type === 'text') {
      invalid = !character[page.id] || character[page.id].trim() === '';
    } else {
      invalid = !character[page.id];
    }
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

function renderButtons(container, page) {
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';
  page.options.forEach(opt => {
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
    if (page.id === 'race') {
      btn.classList.add('race-' + opt.value);
    }
    btn.addEventListener('click', () => {
      character[page.id] = opt.value;
      // highlight selected option
      optionsDiv.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (opt.suboptions) {
        delete character[page.id + '_sub'];
        renderSubOptions(optionsDiv, page.id, opt.suboptions);
      } else {
        const subDiv = document.getElementById('sub-' + page.id);
        if (subDiv) subDiv.remove();
        delete character[page.id + '_sub'];
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

function renderTextInput(container, page) {
  const wrapper = document.createElement('div');
  wrapper.className = 'text-wrapper';
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = page.placeholder || '';
  if (character[page.id]) input.value = character[page.id];
  input.addEventListener('input', () => {
    character[page.id] = input.value;
  });
  wrapper.appendChild(input);
  container.appendChild(wrapper);
}

function renderRadio(container, page) {
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';
  page.options.forEach(opt => {
    const label = document.createElement('label');
    label.className = 'input-group';
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = page.id;
    input.value = opt.value;
    if (character[page.id] === opt.value) input.checked = true;
    input.addEventListener('change', () => {
      character[page.id] = opt.value;
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

function renderCheckboxes(container, page) {
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';
  if (!Array.isArray(character[page.id])) {
    character[page.id] = [];
  }
  page.options.forEach(opt => {
    const label = document.createElement('label');
    label.className = 'input-group';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = opt.value;
    input.checked = character[page.id].includes(opt.value);
    input.addEventListener('change', () => {
      if (input.checked) {
        if (!character[page.id].includes(opt.value)) {
          character[page.id].push(opt.value);
        }
      } else {
        character[page.id] = character[page.id].filter(v => v !== opt.value);
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
