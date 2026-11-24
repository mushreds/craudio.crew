// node render.js beats  -> um quadro por batida (saida/batidas/*.png + folhas de contato)
// node render.js full   -> 60 fps, 3 subquadros por quadro (tmix), trilha mixada
// node render.js at 3.2 -> um quadro solto
const { chromium } = require('playwright');
const { spawn, execFileSync } = require('child_process');
const path = require('path'), fs = require('fs');
const OUT = path.join(__dirname, 'saida'); fs.mkdirSync(OUT, { recursive: true });
const FPS = 60, SUB = 3, DUR = 15, mode = process.argv[2] || 'beats';

async function page(b) {
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  p.on('pageerror', e => console.error('ERRO NA PÁGINA', e.message));
  p.on('console', m => console.log('[pág]', m.text()));
  await p.goto('file://' + path.join(__dirname, 'index.html'));
  await p.evaluate(() => window.ready);
  return p;
}
const shot = async (p, t, opts = {}) => { await p.evaluate(t => window.seek(t), t); return p.screenshot({ type: 'jpeg', quality: 93, ...opts }); };

(async () => {
  const b = await chromium.launch();
  if (mode === 'at') {
    const p = await page(b), t = +process.argv[3];
    await p.evaluate(t => window.seek(t), t); await p.screenshot({ path: path.join(OUT, `t-${t.toFixed(2)}.png`) });
  }
  if (mode === 'beats') {
    const dir = path.join(OUT, 'batidas'); fs.mkdirSync(dir, { recursive: true });
    const p = await page(b);
    for (let k = 0; k < 30; k++) { const t = k * 0.5 + 0.3; await p.evaluate(t => window.seek(t), t); await p.screenshot({ path: path.join(dir, `b${String(k).padStart(2, '0')}.png`) }); }
    for (const [i, a] of [[1, 0], [2, 15]]) execFileSync('ffmpeg', ['-y', '-v', 'error', '-start_number', String(a), '-i', path.join(dir, 'b%02d.png'), '-frames:v', '1', '-vf', 'scale=640:360,tile=3x5:padding=6:color=white', path.join(OUT, `folha-${i}.png`)]);
  }
  if (mode === 'full') {
    const NW = 3, pages = await Promise.all(Array.from({ length: NW }, () => page(b)));
    const total = FPS * DUR * SUB, frames = new Map(); let waiters = new Map();
    const raw = path.join(OUT, 'video-sem-audio.mp4');
    // subquadros centrados no instante do quadro: t = f/60 + (s-1)/180
    const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-c:v', 'mjpeg', '-framerate', String(FPS * SUB), '-i', '-',
      '-vf', `tmix=frames=${SUB}:weights='1 1 1',select='eq(mod(n\\,${SUB})\\,${SUB - 1})',setpts=N/${FPS}/TB`, '-r', String(FPS),
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', raw], { stdio: ['pipe', 'inherit', 'inherit'] });
    const tOf = n => (Math.floor(n / SUB) / FPS) + ((n % SUB) - (SUB - 1)) / (FPS * SUB) + 1 / (FPS * SUB);
    let next = 0;
    const workers = pages.map(async (p, w) => {
      for (let n = w; n < total; n += NW) {
        while (n - next > NW * 4) await new Promise(r => setTimeout(r, 5));
        frames.set(n, await shot(p, tOf(n)));
        const wk = waiters.get(n); if (wk) wk();
      }
    });
    for (; next < total; next++) {
      if (!frames.has(next)) await new Promise(r => waiters.set(next, r));
      const buf = frames.get(next); frames.delete(next);
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      if (next % 300 === 0) console.log('subquadro', next, '/', total);
    }
    await Promise.all(workers); ff.stdin.end(); await new Promise(r => ff.on('close', r));
    // trilha: atrasada 24 ms para as batidas caírem na grade de 0,5 s, cortada em 15 s
    execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', raw, '-i', path.join(__dirname, 'trilha.mp3'),
      '-filter_complex', '[1:a]adelay=24|24,atrim=0:15,afade=t=out:st=14.96:d=0.04[a]', '-map', '0:v', '-map', '[a]',
      '-c:v', 'copy', '-c:a', 'aac', '-b:a', '256k', '-shortest', '-movflags', '+faststart', path.join(OUT, 'craudio-crew-showreel-15s.mp4')]);
    fs.unlinkSync(raw);
  }
  await b.close();
})();
