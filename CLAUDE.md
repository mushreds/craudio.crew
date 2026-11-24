# Craudio Crew: design system

Este repositório guarda o design system **Craudio Crew v3**. A página publicada fica em:

https://claude.ai/artifact/3sn5diKkNSPcue1xyhgLir

O repositório é a cópia versionada da página. As duas ficam iguais: o que muda aqui é publicado lá, e o que alguém muda direto na página volta para cá com um commit.

## Estrutura

- `project/` espelha exatamente a pasta `project/` da página (Artifact do tipo Design System).
  - `project/design-system.json`: o índice. `title`, `namespace`, grupos de assets e `lastChange`.
  - `project/README.md`: o brand book. Comece sempre por ele.
  - `project/tokens.json`: cores, tipografia, espaçamento e raios.
  - `project/prompts-e-aplicacoes.md`: os prompts do Google Flow e a lista de peças.
  - `project/components/<Nome>/README.md` e `preview.html`: guias e prévias de cada componente.
  - `project/assets/<Grupo>/*.jpg`: as imagens. Na página elas são uploads (assets), não arquivos; o índice liga cada nome ao id do upload (`blob`).
- Nunca crie `tokens.css`, `manifest.json` ou `api/`: quem gera esses arquivos é a página.

## Sincronizar: repositório → página (publicar)

1. Leia `project/design-system.json` da página (Artifact `read` com `path`) e compare com o daqui. Se a página mudou desde o último commit, traga essas mudanças primeiro (veja a seção seguinte).
2. Publique só os arquivos alterados de `project/`, em UMA chamada do Artifact:
   `url` = o link acima, `root` = a raiz deste repositório, `file_path` = o caminho absoluto de um arquivo alterado, `files` = os outros por caminho `project/...`.
3. Imagem nova em `project/assets/<Grupo>/`: suba antes com Artifact `publish` (`url`, `file_path` da imagem, `asset: true`). Depois registre no índice `assetGroups.<Grupo>.files.<nome>` = `{name, blob: <id retornado>, size, type}` e coloque o nome em `order`.
4. O índice vai por último e uma vez só. Atualize `lastChange` (`by`: "Gabriel", `via`: "Claude", `at`: agora, `note`: o que mudou).
5. Faça o commit e o push aqui com a mesma descrição.

## Sincronizar: página → repositório (puxar)

1. Liste os arquivos da página (Artifact `list`, `scope: "files"`) e leia os de `project/` cujo sha256 difere dos daqui.
2. Copie os arquivos para `project/`. Para asset novo no índice, baixe com Artifact `read` usando o id do blob como `path` e salve em `project/assets/<Grupo>/<nome>`.
3. Faça o commit ("sync: página → repo") e o push.

## Regras da marca que valem para qualquer mudança

- Nada de nome, logo, asterisco ou mascote de empresa de IA, em nenhuma camada. É uma marca de fã, sem vínculo.
- As referências com marca de terceiros ficam fora de `assets/`. Elas aparecem só descritas no Mapa das referências do `README.md`.
- Texto em português do Brasil.
