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
  }
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Далее';
  nextBtn.addEventListener('click', () => {
    if (!character[page.id]) {
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
    btn.textContent = opt.label;
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
    btn.textContent = sub.label;
    btn.addEventListener('click', () => {
      character[id + '_sub'] = sub.value;
      subDiv.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
    subDiv.appendChild(btn);
  });
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
