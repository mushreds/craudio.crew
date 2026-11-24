# Briefing do anúncio

Briefing do anúncio de 14 segundos da Craudio Crew, pronto para colar numa sessão do Claude com o repositório `craudio.crew`. Adaptado de um briefing genérico de anúncio rápido para o design system v3.

Faça um anúncio rápido da Craudio Crew, com **14 segundos**, em **9:16 (1080×1920)** para Reels e Stories. Ele precisa terminar na assinatura da marca.

## 1. Pesquisa

- Leia primeiro o design system v3: `project/README.md` (o brand book, incluindo o Mapa das referências), `project/tokens.json`, `project/prompts-e-aplicacoes.md` e os componentes em `project/components/`.
- Use só os materiais da marca: a capivara em vetor (`assets/Personagem/capivara-vetor-*.svg`, `capivara-vista-*.svg` e as poses `capivara-pose-notebook`, `-cafe`, `-travesseiro` e `-grama`, com a folha `capivara-folha-v2.jpg` de referência), o Limitinho em vetor (`assets/Personagem/limitinho-v2.svg`), os quatro cenários e as referências em `assets/Referencias/`.
- Nada de foto ou imagem tirada da internet. Tudo que faltar é desenhado em vetor, dentro da paleta.

## 2. Direção

- Usar só a camada **Mundo**: degradê, brilho e desfoque estão liberados. Chão escuro (`fundo`, `roxo-profundo`) alternando com os chãos laranja (`laranja`, `laranja-queimado`). Nada de bege e nada de modo claro.
- O fio da história é **"um dia de trabalho com a IA"**, passando pelos quatro cenários: Fluido (trabalho), Código (rodou), Nuvens (o limite acabou) e Folhas (fui tocar na grama). Termina no Fluido, que é o cenário padrão.
- **A palavra gigante é a protagonista.** Ela se transforma de uma em outra (PROMPT → RESTO → LIMITE → RESET → GRAMA), sempre em Climate Crisis, caixa alta, esticada até 130% na vertical.
- **O limite acabando é mostrado pelo derretimento das letras.** O eixo Year da Climate Crisis vai de 1979 até 2019 enquanto o Limitinho esvazia. O máximo é 2019; 2050 nunca.
- A capivara aparece pequena, dentro de cada cenário e sempre com a pose daquele cenário. Ela não muda; o mundo é que muda em volta dela.

## 3. Decupagem

| Tempo | Cenário | O que acontece |
| --- | --- | --- |
| 0,0–1,2 s | Fluido | Corte seco: a faixa de fogo atravessa a tela e a palavra **PROMPT** entra batendo, com o conector "EU SÓ ESCREVO O" |
| 1,2–2,8 s | Fluido | PROMPT vira **RESTO**; "E ELE FAZ O" entra embaixo. A capivara com notebook dá zoom de pequena para média |
| 2,8–4,6 s | Código | As faixas do Fluido viram linhas de código em onda; o cursor laranja pisca. **PRIMEIRA** e depois **MEXE** ("RODOU DE / NINGUÉM") |
| 4,6–5,4 s | Código | Três cortes rápidos (0,25 s cada) com a capivara digitando em tamanhos diferentes, até três na tela ao mesmo tempo |
| 5,4–7,6 s | Nuvens | O Limitinho aparece e esvazia; a palavra **LIMITE** derrete de 1979 até 2019 no mesmo tempo |
| 7,6–9,2 s | Nuvens | LIMITE vira **RESET**, e RESET vira **CALMA**. A capivara dorme abraçada no travesseiro; as nuvens desfocadas passam na frente |
| 9,2–11,4 s | Folhas | As nuvens viram folhas recortadas girando em 3D simples; **GRAMA** entra ("FUI TOCAR NA"); a capivara deitada |
| 11,4–12,4 s | Tubos Gloss | Os tubos roxos se enroscam e fecham a tela (transição) |
| 12,4–14,0 s | Fluido | Assinatura: **CRAUDIO CREW** em Climate Crisis, a capivara calma ao lado e `CRAUDIO CREW · CENÁRIO FLUIDO` em JetBrains Mono. Parada de 1 s antes de acabar |

## 4. Regras

- **Nada de mal feito.** Cada transformação entre palavras e cenários precisa ser contínua, sem pulo e sem quadro quebrado. Revise quadro a quadro.
- **Um cenário por quadro.** Dois cenários só podem aparecer juntos durante a transição.
- **Contraste:** sobre chão laranja, o texto é sempre `fundo` ou `roxo-profundo`, nunca `tinta`. Sobre chão escuro, os conectores vão em `tinta` e as palavras gigantes em `roxo-claro` ou `laranja`.
- **Fontes:** só as quatro do sistema. Silkscreen aparece só em etiqueta curta, como "CENÁRIO · CÓDIGO".
- **Capivara:** sempre com contorno preto grosso; nunca brava e nunca sem o moletom. Não redesenhar de memória: partir dos vetores em `assets/Personagem/` e da folha v2.
- **Outras marcas:** nenhum nome, logo, asterisco ou mascote de empresa de IA, nem escondido no código da onda.

## 5. Técnicas (tudo é rápido)

- Animação de SVG dos elementos dos cenários: faixas, folhas, nuvens, pílulas e pixels.
- A mesma imagem pequena, depois grande, depois várias ao mesmo tempo.
- Transformação de palavras e derretimento pelo eixo Year.
- 3D simples nas folhas e nos tubos.
- Zooms em batida, com cortes acompanhando um BPM de cerca de 120 (um corte a cada 0,5 s ou 0,25 s).

## 6. Entrega

- MP4 em 1080×1920 a 30 fps, com 14 s, terminando na assinatura.
- Mais 9 quadros-chave em PNG (um por linha da decupagem) para aprovação antes do render final.
- Sem trilha embutida. Deixe marcados os tempos das batidas para encaixar o áudio depois.
