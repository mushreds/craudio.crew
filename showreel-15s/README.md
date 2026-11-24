# Showreel 15 s: "Tudo escorre"

A pílula laranja (tudo que escorre na marca é pílula) vira letra, a letra derrete e vira o Limitinho, a areia dele vira dado, o dado ganha volume, o volume vira o mundo da capivara, e tudo escorre de volta para a mesma pílula. O último quadro é igual ao primeiro, então o vídeo roda em loop.

- 1920×1080, 60 fps, 15 s, 120 BPM (1 batida = 0,5 s, 30 batidas, 7,5 compassos).
- Camada Mundo do design system v3.
- **Fonte única:** Climate Crisis, inclusive nos conectores e números. O eixo YEAR (1979 → no máximo 2019) é o recurso de derreter.
- **Cores:** `laranja`, `roxo` e `roxo-claro`. O `fundo` faz o papel do preto e a `tinta` faz o do branco. O `contorno` preto e o focinho `laranja-escuro` aparecem só nos personagens, porque eles não são redesenhados.
- **Câmera:** travada e frontal, com o centro da tela como eixo. Quem se mexe são os objetos.
- **Trilha:** `trilha.mp3`, enviada pelo Gabriel. Tem 120 BPM e foi atrasada 24 ms para as batidas caírem na grade. O silêncio em 11,75 s e o drop em 12 s casam com a entrada do clímax.

## Storyboard

| Compasso | Batidas | O que acontece |
| --- | --- | --- |
| 1 · Gancho (0–2 s) | b0–b3 | A pílula estica, deita e vira uma barra. A barra se parte em 6 hastes, e cada haste cresce até virar uma letra de **PROMPT** |
| 2 · Tipo cinético (2–4 s) | b4–b7 | Entra "EU SÓ ESCREVO O" e PROMPT bate esticado a 130%. A palavra rola como caça-níquel até **RESTO** ("E ELE FAZ O"), cresce e derrete (YEAR 1979 → 2019), com pingos pendurados |
| 3 · Morph de forma (4–6 s) | b8–b11 | As letras escorrem pelos pingos, os pingos se juntam num círculo, o círculo vira pílula e a pílula vira a silhueta do **Limitinho**. Aparecem o rosto e a areia |
| 4 · Dado/UI (6–8 s) | b12–b15 | Painel "LIMITE" com barras de uso. O contador cai 100 → 70 → 35 → 0% e o Limitinho passa de tranquilo a avisando e depois a acabou. "LIMITE" derrete |
| 5 · 2D → 3D (8–10 s) | b16–b19 | **RESET**: a ampulheta gira 180° e o contador volta a 100. As barras saem do plano, viram colunas 3D, orbitam e terminam vistas de cima |
| 6 · O mundo muda, ela não (10–12 s) | b20–b23 | Os topos das colunas viram faixas e enchem a tela. A capivara surge, e o mundo troca a cada batida (RESET, CALMA, CALMA) enquanto ela fica parada. A última CALMA é sugada para dentro dela |
| 7 · Clímax (12–14 s) | b24–b27 | No drop, um anel 3D com PROMPT · RESTO · CALMA · RESET · LIMITE explode em volta da capivara, gira 72° por batida e implode |
| ½ · Título (14–15 s) | b28–b29 | **CRAUDIO CREW** nasce das hastes, volta para elas, e as hastes se fundem na pílula do primeiro quadro |

## Como renderizar

```bash
node render.js beats   # um quadro por batida + folhas de contato em saida/
node render.js full    # 60 fps, 3 subquadros por quadro misturados com tmix, trilha mixada
```

O `index.html` desenha tudo dentro de `window.seek(t)`, sem animação CSS, sem timer e sem estado guardado entre quadros. As curvas são exponenciais e de mola amortecida, sem quique. O borrão direcional acompanha a velocidade nos movimentos rápidos.
