const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');
const test = require('node:test');

function createDOM() {
  class Element {
    constructor(tagName) {
      this.tagName = tagName.toUpperCase();
      this.children = [];
      this.parent = null;
      this.className = '';
      this.style = {};
      this.textContent = '';
      this.id = '';
      this.type = '';
      this.value = '';
      this.placeholder = '';
      this.checked = false;
    }
    appendChild(child) {
      child.parent = this;
      this.children.push(child);
      return child;
    }
    addEventListener() {
      // events are ignored in this minimal DOM
    }
    get classList() {
      const self = this;
      return {
        add: (...names) => {
          const set = new Set(self.className.split(/\s+/).filter(Boolean));
          names.forEach(n => set.add(n));
          self.className = Array.from(set).join(' ');
        },
        remove: (...names) => {
          const set = new Set(self.className.split(/\s+/).filter(Boolean));
          names.forEach(n => set.delete(n));
          self.className = Array.from(set).join(' ');
        }
      };
    }
    querySelectorAll(selector) {
      const results = [];
      const search = node => {
        let match = false;
        if (selector.startsWith('.')) {
          const cls = selector.slice(1);
          match = node.className.split(/\s+/).includes(cls);
        } else {
          match = node.tagName === selector.toUpperCase();
        }
        if (match) results.push(node);
        node.children.forEach(search);
      };
      this.children.forEach(search);
      return results;
    }
    querySelector(selector) {
      return this.querySelectorAll(selector)[0] || null;
    }
    set innerHTML(value) {
      this.children = [];
      this.textContent = value;
    }
    get innerHTML() {
      return this.textContent;
    }
  }
  const app = new Element('div');
  return {
    document: {
      getElementById: id => (id === 'app' ? app : null),
      createElement: tag => new Element(tag),
      addEventListener: (evt, cb) => { if (evt === 'DOMContentLoaded') cb(); }
    },
    root: app
  };
}

function loadScript(dom, config) {
  const context = {
    console,
    document: dom.document,
    fetch: (url) => Promise.resolve({
      json: () => Promise.resolve(config)
    })
  };
  vm.createContext(context);
  const script = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf-8');
  vm.runInContext(script, context, { filename: 'script.js' });
  return context;
}

function setCurrentPage(ctx, idx) {
  vm.runInContext(`currentPageIndex = ${idx}`, ctx);
}


async function flush() {
  await new Promise(resolve => setImmediate(resolve));
}

test('pages render according to config', async () => {
  const config = JSON.parse(fs.readFileSync(path.join(__dirname, '../config.json')));
  const dom = createDOM();
  const ctx = loadScript(dom, config);
  await flush();

  for (let i = 0; i < config.pages.length; i++) {
    setCurrentPage(ctx, i);
    ctx.renderPage();
    const page = config.pages[i];

    const titleEl = dom.root.querySelector('h2');
    assert.ok(titleEl, 'title element exists');
    assert.strictEqual(titleEl.textContent, page.title);

    let optIndex = 0;
    let inputIndex = 0;
    const optionDivs = dom.root.querySelectorAll('.options');
    for (const elem of page.elements || [page]) {
      if (elem.type === 'buttons' && elem.id !== 'race') {
        const div = optionDivs[optIndex++];
        assert.ok(div, 'buttons container exists');
        const buttons = div.querySelectorAll('button');
        assert.strictEqual(buttons.length, elem.options.length);
        const labels = buttons.map(b => b.querySelector('span').textContent);
        assert.deepStrictEqual(labels, elem.options.map(o => o.label));
      } else if (elem.type === 'text') {
        const inputs = dom.root.querySelectorAll('input').filter(i => i.type === 'text');
        const input = inputs[inputIndex++];
        assert.ok(input);
        assert.strictEqual(input.placeholder, elem.placeholder || '');
      } else if (elem.type === 'radio') {
        const div = optionDivs[optIndex++];
        assert.ok(div);
        const labels = div.querySelectorAll('label');
        assert.strictEqual(labels.length, elem.options.length);
        const texts = labels.map(l => l.querySelector('span').textContent);
        assert.deepStrictEqual(texts, elem.options.map(o => o.label));
      } else if (elem.type === 'checkbox') {
        const div = optionDivs[optIndex++];
        assert.ok(div);
        const labels = div.querySelectorAll('label');
        assert.strictEqual(labels.length, elem.options.length);
        const texts = labels.map(l => l.querySelector('span').textContent);
        assert.deepStrictEqual(texts, elem.options.map(o => o.label));
      } else if (elem.id === 'race') {
        const grid = dom.root.querySelector('.race-options-grid');
        assert.ok(grid);
        const buttons = grid.querySelectorAll('button');
        assert.strictEqual(buttons.length, elem.options.length);
        const labels = buttons.map(b => b.querySelector('span').textContent);
        assert.deepStrictEqual(labels, elem.options.map(o => o.label));
      }
    }
  }
});
