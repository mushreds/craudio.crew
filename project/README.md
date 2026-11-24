# Craudio Crew v3

Um universo laranja e roxo onde a capivara vive. A v1 era "moletom preto com piada"; a v2 deu um mundo para o moletom e a piada: quatro cenários que viram fundo de post, embalagem, deskmat, forro e site. A reação que buscamos continua a mesma: sorriso de canto de boca e "sou eu".

Este sistema é a versão 0.3: uma cópia da v2 que vira a base de trabalho da identidade visual. Cores, fontes, personagens e os quatro cenários continuam iguais; o que entra é o mapa das referências (abaixo) e a variante Gloss do cenário Fluido. Nome, mascote e medidas ainda podem mudar.

## O que muda na v3

| Antes (v2) | Agora (v3) |
| --- | --- |
| Fluido só em mármore (viva) e massinha (chapada) | Fluido ganha uma terceira leitura, Gloss: tubos roxos 3D brilhantes, da `ref-tubos-a3.jpg` |
| Referências soltas nos assets | Mapa das referências: o que cada uma ensina e o que não pode ser copiado |

## Mapa das referências

O painel de referência da marca. Toda criação nova começa olhando para esta tabela. As imagens marcadas "em Referências" estão nos assets e vão como Image 1 nos prompts; as outras ficaram fora porque têm marca de terceiros, e só o clima delas vale.

| Referência | Onde está | O que pegamos | O que nunca copiamos |
| --- | --- | --- | --- |
| Mármore laranja e roxo | em Referências, `ref-fluido-a1.jpg` | A faixa de fogo dentro do roxo, as estrias finas | — |
| Massinha roxa sobre roxo | em Referências, `ref-blobs-a2.jpg` | As formas chapadas de pílula, a retícula de tecido | — |
| Tubos roxos brilhantes | em Referências, `ref-tubos-a3.jpg` | Volume 3D, brilho de vidro, tubos que se enroscam | Tom azulado dos reflexos: aqui o reflexo é `roxo-claro` ou `tinta` |
| Nuvens fofas em laranja | em Referências, `ref-nuvens-b2.jpg` | Nuvem nítida na frente e desfocada atrás, chuva em traço | — |
| Folhas recortadas em laranja | em Referências, `ref-folhas-b3.jpg` | Folha de papel recortado com sombra, anéis abertos | — |
| Onda de código com mascote pixel | fora, só descrita | Código virando onda, profundidade por opacidade | O mascote pixel, os ícones e os nomes de empresa |
| Pôster editorial com produto laranja | fora, só descrita | Céu azul limpo, foto de produto segurado na mão, título gigante cortado pela pessoa | O nome, o asterisco e o produto de outra marca |
| Robô laranja enferrujado com título pixel | fora, só descrita | Contraste de laranja sujo sobre preto, título em bloco de pixel | O título com nome de outra marca |

O pôster editorial ensina um caminho que a marca ainda não tem: foto de gente real com o produto (o moletom, a caneca) e a palavra gigante atrás da pessoa. Fica como pendência para a linha de campanha.

## O que mudou da v1

| Antes (v1) | Agora (v2) |
| --- | --- |
| Uma camada: a estampa no tecido | Duas camadas: Tecido (a estampa chapada) e Mundo (os cenários) |
| Fundo fluido genérico | Quatro cenários com função: Folhas, Nuvens, Fluido e Código |
| Roxo com dois valores diferentes (#8B6CF5 e #A68CFF) | `roxo` com um valor só e `roxo-claro` para texto sobre escuro |
| 4 cores + 2 de apoio | 12 tokens: entram `roxo-vibrante`, `roxo-claro`, `laranja-queimado` e `pessego` |
| Três fontes | Quatro: entra Silkscreen (`pixel`) só para etiquetas do modo terminal |
| Frase com palavra de enchimento ("ENFIM") | Todo conector é fala de verdade |
| Assinatura "ESTD 2026" | Assinatura com o cenário: `CRAUDIO CREW · CENÁRIO FLUIDO` |

## Duas camadas

**Tecido.** A estampa de costas no sanduíche, chapada, até três tintas, sem degradê e sem brilho. É o produto. Tudo da v1 continua valendo aqui.

**Mundo.** Os cenários, na versão viva: degradê, desfoque, brilho, textura. Vivem onde a impressão aguenta ou onde não há impressão: post, story, site, wallpaper, deskmat, caneca sublimada, forro da caixa, papel de seda.

A ponte entre as duas é a **versão chapada** de cada cenário: o mesmo desenho em duas tintas, que pode ir no tecido em lugares secundários (manga, barra, forro do capuz, etiqueta).

## Os quatro cenários

| Cenário | O que representa | Chão | Frase de estreia | Pose da capivara |
| --- | --- | --- | --- | --- |
| Fluido (e Gloss) | Trabalho e fluxo com a IA | `roxo-profundo` | Eu só escrevo o PROMPT e ele faz o RESTO | Notebook ou café |
| Folhas | O mundo real, fora da tela | `laranja-queimado` | Estourei o LIMITE, fui tocar na GRAMA | Deitada na grama |
| Nuvens | Soneca e espera do reset | `laranja` | Esperando o RESET com muita CALMA | Dormindo no travesseiro |
| Código | Modo terminal | `fundo` | Rodou de PRIMEIRA, ninguém MEXE | Digitando, olho aberto |

Regras:

- Uma frase, um cenário. Ao criar uma frase nova, decida o cenário antes da arte.
- Um cenário por peça. Nunca misturar dois padrões no mesmo quadro.
- Fluido é o cenário padrão da marca: na dúvida, ou em peças institucionais, use ele.
- A capivara não muda com o cenário. O mundo muda, ela não.
- O Limitinho mora nas Nuvens.

Veja os componentes de Cenário para a construção de cada um e o componente PostCenario para a aplicação no feed.

## Voz

- Humor de colega de trabalho: rimos do perrengue, nunca de alguém.
- Frases de até 8 palavras, em primeira pessoa quando der.
- Duas palavras ganham destaque gigante; o resto é conector pequeno. Todo conector é fala de verdade.
- Português do Brasil com acento certo. Inglês só onde o público fala assim: prompt, deploy, bug, reset.
- No cenário Código, o pseudocódigo também é piada: `capivara.cafe(++)`, `limite.resetar()`, `grama.tocar(pata)`.
- Se precisar explicar a piada, a estampa não entra.

## Cor

Duas famílias, roxa e laranja, mais tinta e fundo.

| Família | Tokens, do mais escuro ao mais claro |
| --- | --- |
| Roxa | `fundo`, `roxo-profundo`, `roxo-vibrante`, `roxo`, `roxo-claro` |
| Laranja | `laranja-escuro`, `laranja-queimado`, `laranja`, `pessego` |
| Neutros | `tinta`, `tinta-suave`, `contorno` |

Regras:

- Alternância continua: se as palavras gigantes são da família roxa, os conectores são da laranja, e o inverso.
- Laranja sempre aparece junto de roxo em algum ponto da peça. Nos cenários laranja (Folhas e Nuvens), o roxo entra no texto e no moletom da capivara.
- Texto sobre os chãos laranja (`laranja`, `laranja-queimado`) é sempre `fundo` ou `roxo-profundo`. `tinta` sobre laranja não passa no contraste.
- Texto sobre os chãos escuros (`fundo`, `roxo-profundo`) usa `tinta` nos conectores e `roxo-claro` ou `laranja` nas palavras gigantes.
- `roxo-vibrante` e `pessego` são cores de cenário: nunca para texto pequeno.
- No tecido: no máximo três tintas por estampa, sem degradê, sem brilho.

## Tipografia

| Estilo | Fonte | Uso |
| --- | --- | --- |
| `gigante`, `titulo` | Climate Crisis | As palavras de destaque, em caixa alta |
| `conector`, `subtitulo`, `corpo` | Baloo 2 | Tudo que liga e explica |
| `micro` | JetBrains Mono | Assinatura, microtexto e as linhas do cenário Código |
| `pixel` | Silkscreen | Etiquetas curtas: nome do cenário, selos, modo terminal |

As quatro são gratuitas no Google Fonts. Regras:

- Climate Crisis tem o eixo Year, de 1979 (cheia) a 2050 (derretida). Padrão 1979, máximo 2019, e só na palavra que a piada pede. Veja LetraDerretida.
- Esticar na vertical até 130% só as palavras gigantes.
- Silkscreen nunca em frase inteira nem em palavra gigante: é tempero, não prato.
- Nas estampas finais o texto é montado no editor com a fonte instalada. Gerador de imagem faz só a ilustração e o cenário.

## Personagem

A capivara é o mascote: o usuário, de moletom roxo com capuz, calma absoluta, olho semicerrado e meio sorriso. Ela nunca se abala. O Limitinho é o vilão fofo: o limite de uso em pessoa, uma ampulheta de silhueta única. Ela nunca se abala; ele sempre se abala.

- Contorno `contorno` grosso e uniforme, cor chapada, sombra mínima. Obrigatório sobre os cenários laranja.
- Pelo em `laranja`, focinho e orelha em `laranja-escuro`, moletom em `roxo`, cordões e objetos em `tinta`.
- Folhas oficiais em Personagem (assets). Veja os componentes Capivara e Limitinho.

## Estampa

Toda estampa de costas segue o sanduíche: conector, palavra gigante, personagem, conector, palavra gigante, assinatura. Veja o componente Estampa.

- Na frente: só a capivara pequena no peito esquerdo, sem frase.
- Na manga, barra ou forro do capuz: a versão chapada do cenário da frase (opcional).

## Onde cada camada aparece

| Peça | Camada | Cenário |
| --- | --- | --- |
| Moletom, costas | Tecido | Estampa sanduíche, sem cenário |
| Moletom, manga ou forro do capuz | Tecido | Versão chapada do cenário da frase |
| Post de feed e story | Mundo | O cenário da frase (veja PostCenario) |
| Deskmat e wallpaper | Mundo | Um cenário inteiro, capivara pequena no canto |
| Caneca (sublimação) | Mundo | Cenário em faixa ao redor, frase de um lado |
| Caixa e papel de seda | Mundo | Fluido por dentro, caixa preta por fora |
| Etiqueta e tag | Tecido | Selo em `pixel` com o nome do cenário |
| Site | Mundo | Cada seção num cenário, separadas por `space-5` |

## O que nunca fazer

- Escrever o nome ou usar logo, asterisco ou ícone de qualquer empresa de IA, em qualquer camada.
- Redesenhar mascote de terceiros, mesmo mudando pose ou cor. Isso inclui o bichinho pixel laranja de ferramenta de IA: no cenário Código o pixel é só quadradinho e cursor.
- Usar mais de três tintas, degradê ou brilho no tecido.
- Misturar dois cenários no mesmo quadro.
- Pôr texto `tinta` sobre chão laranja.
- Derreter a frase inteira: se tudo derrete, nada se lê.
- Parecer produto oficial ou licenciado. A marca é de fã, sem vínculo.

## Pendências para a próxima rodada

- Gerar no Flow a variante Gloss do Fluido (prompt em Prompts e aplicações) e decidir se ela entra só no digital ou também em embalagem.
- Testar a linha de campanha inspirada no pôster editorial: pessoa sem rosto visível de moletom Craudio Crew, palavra gigante atrás, céu ou chão de cenário.

- Gerar no Flow a versão viva de cada cenário (prompts em Prompts e aplicações) e substituir os desenhos de referência deste sistema.
- Vetorizar a versão chapada de cada cenário e testar em silk no tecido preto.
- Nova folha do Limitinho resolvendo a gota azul e os dois tons de areia.
- Analisar as próximas referências (artes e perfis do Instagram) e ver se algum cenário muda ou entra um quinto.
