# Guia do projeto

Este repositório contém uma landing page construída com Vite, React, TypeScript e Tailwind CSS. Use estas instruções para editar,
testar e fazer o deploy da aplicação.

## Como editar o código

1. Certifique-se de ter Node.js e npm instalados ([instalação via nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).
2. Clone o repositório:

```sh
git clone <SEU_GIT_URL>
cd <NOME_DO_PROJETO>
```

3. Instale as dependências:

```sh
npm install
```

4. Execute o servidor de desenvolvimento com recarregamento automático (escolha um dos atalhos abaixo):

```sh
npm run dev
# ou
npm start
```

Você também pode editar arquivos diretamente no GitHub ou utilizar Codespaces se preferir um ambiente totalmente online.

## Tecnologias

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Como gerar build para produção

Execute o comando abaixo para gerar a versão pronta para deploy na pasta `dist`:

```sh
npm run build
```

Em seguida, sirva o conteúdo de `dist` com o provedor de hospedagem de sua preferência ou utilize um serviço de deploy contínuo
como Vercel, Netlify ou GitHub Pages.
