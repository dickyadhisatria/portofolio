const fs = require('node:fs');
const path = require('node:path');

const outDir = path.join(__dirname, '..', 'out');
const basePath = '/portofolio';

function rewriteHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      rewriteHtml(full);
    } else if (entry.name.endsWith('.html')) {
      let html = fs.readFileSync(full, 'utf-8');
      const original = html;
      html = html.replace(
        /(src|href)=(["'])\/(?!portofolio\/|_next\/)/g,
        `$1=$2${basePath}/`,
      );
      if (html !== original) {
        fs.writeFileSync(full, html, 'utf-8');
      }
    }
  }
}

rewriteHtml(outDir);
