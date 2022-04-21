This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### NextJS setup

```bash
npm run dev
# or
yarn dev
```
# initial
  - yarn create next-app name --typescript

# config
  - editorConfig
  - Eslint
    - yarn eslint --init
      - (selecionar p pegar tanto node e browser)
      - pode usar airbnb (ponto e virgula) ou standard (n usa ponto e virgula)
      - instalar usando `npm` e apagar `npm.lock`, `yarn` em seguida

    - yarn add eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D

    - yarn add eslint-plugin-react-hooks

      .eslintrc
        extends:
          "plugin:react-hooks/recommended",
          "plugin:prettier/recommended"

        "rules":
        "react/react-in-jsx-scope": "off"

        "settings": {
          "react": {
            "version": "detect"
          }
        },

  - prettier
    - yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
    - pasta `.prettierrc.js
      module.exports = {
        semi: true, // ponto e virgula
        trailingComma: 'all', // virgula sobrando em obj
        singleQuote: true, //  aspas simples
        printWidth: 80, // largura tela
        tabWidth: 2 // tab dois espaços
      }

  - styled-components
    - yarn add styled-components
    - yarn add -D @types/styled-components
    - yarn add -D babel-plugin-styled-components

    - Depois é criar a pasta `styles->global-styles.ts`
    - criar arq `babelrc.js`  =  qnd desativado javascript, o css sai, add ele fica

  - _documents

# map
  - src
    - pages   =  `tudo que estiver dentro de pages são rotas, e tudo que tiver
    um underline (-) ele descosidera como rota`
      - index.tsx
      - _documents.tsx
        `url: https://nextjs.org/docs/advanced-features/custom-document`
        - ele envolve todas paginas, mas permite q renderize o HTML
        - file is only rendered on the server

  - styles
    - global-styles.ts  = nosso estilo globral
    - theme, adicionar
    - Tipar o styled-components 
      - dentro de `styles->styles-components.d.ts`
        - pegar nosso `thema` e tipar
# about
  - limpar o projeto, apagar pasta `styles`.
  - pasta `page` quem ficar dentro dessa pagina ja é uma rota, tem q esta
    - sem o anderline

