// Gera os posts em PNG 1080x1350: node render.js
const { chromium } = require('playwright'); const path = require('path'); const fs = require('fs');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  fs.mkdirSync(path.join(__dirname, 'saida'), { recursive: true });
  for (const [i, id] of ['fluido', 'codigo', 'nuvens', 'folhas'].entries()) {
    await p.goto('file://' + path.join(__dirname, 'index.html') + '?post=' + id);
    await p.evaluate(() => window.ready);
    await p.screenshot({ path: path.join(__dirname, 'saida', `post-${i + 1}-${id}.png`), clip: { x: 0, y: 0, width: 1080, height: 1350 } });
  }
  await b.close();
})();
