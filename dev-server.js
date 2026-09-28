// A dependency-free, loopback-only development server. npm start
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.png': 'image/png', '.ico': 'image/x-icon', '.md': 'text/plain' };
const server = http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end(); return; }
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  const relative = path.relative(root, file);
  if (relative.startsWith('..') || path.isAbsolute(relative) || relative.split(/[\\/]/).some(part => part.startsWith('.'))) {
    res.writeHead(403).end(); return;
  }
  fs.readFile(file, (error, body) => {
    if (error) { res.writeHead(404).end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': (types[path.extname(file)] || 'application/octet-stream') + '; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(body);
  });
});
server.listen(Number(process.env.PORT || 8000), '127.0.0.1', () => console.log(`Character creator: http://127.0.0.1:${server.address().port}`));
