// Renderiza o anúncio quadro a quadro: node render.js [frames|keys|all]
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path'); const fs = require('fs');
const FPS = 30, DUR = 14, mode = process.argv[2] || 'all';
const OUT = path.join(__dirname, 'saida'); fs.mkdirSync(OUT, { recursive: true });
const KEYS = [0.8, 2.4, 3.9, 5.0, 6.8, 8.9, 10.6, 11.9, 13.6];
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  p.on('pageerror', e => console.error('ERRO NA PÁGINA', e.message));
  await p.goto('file://' + path.join(__dirname, 'index.html'));
  await p.evaluate(() => window.ready);
  const shot = async t => { await p.evaluate(t => window.render(t), t); return p.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1080, height: 1920 } }); };
  if (mode !== 'frames') for (const [i, t] of KEYS.entries()) { await p.evaluate(t => window.render(t), t); await p.screenshot({ path: path.join(OUT, `quadro-${i + 1}-${t.toFixed(1)}s.jpg`), type: "jpeg", quality: 90, clip: { x: 0, y: 0, width: 1080, height: 1920 } }); }
  if (mode !== 'keys') {
    const ff = spawn('ffmpeg', ['-y', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-', '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', path.join(OUT, 'craudio-crew-anuncio-14s.mp4')], { stdio: ['pipe', 'ignore', 'inherit'] });
    for (let f = 0; f < FPS * DUR; f++) { const buf = await shot(f / FPS); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); if (f % 60 === 0) console.log('quadro', f); }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  await b.close();
})();
