# Anúncio de 14 segundos

Primeira versão do anúncio da Craudio Crew, feita a partir de `project/briefing-anuncio-14s.md`.

- **Vídeo:** `saida/craudio-crew-anuncio-14s.mp4` (1080 × 1920, 30 fps, 14 s, sem trilha)
- **Quadros-chave para aprovação:** `saida/quadro-*.jpg`, um por linha da decupagem
- **Batidas para a trilha:** `saida/batidas.txt`

## Como funciona

`index.html` desenha o anúncio inteiro numa função `render(t)`: para cada instante `t`, em segundos, ela posiciona fundos, personagens e textos. Não usa animação CSS, então cada quadro sai sempre igual. `render.js` abre a página no Chromium, chama `render(t)` 420 vezes e manda os quadros para o ffmpeg.

Usa só material do design system: os cenários vivos de `project/assets/Cenarios/`, as poses da capivara e o Limitinho em vetor e as quatro fontes da marca (carregadas do Google Fonts).

## Para renderizar de novo

Precisa de Node com Playwright (Chromium) e ffmpeg.

```bash
node render.js keys
```

```bash
node render.js frames
```

`keys` gera só os 9 quadros-chave; `frames` gera só o vídeo; sem argumento, gera os dois.

## Onde mexer

- Tempos de cada cena: blocos `if (t ...)` dentro de `render(t)`.
- Textos da placa: seção "textos por cena".
- Velocidade da troca de letras: o `stagger` de cada chamada `morph(...)`.
