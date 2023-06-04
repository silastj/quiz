This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## LIB i18next - Translation
- npm i next-i18next
- No arquivo `next.config.js `
-- iremos deixar assim: 
`const {i18n} = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['www.google.com.br']
  },
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {key: 'Acess-Control-Allow-Origin', value: '*'}
        ]
      }
    ]
  },
  i18n
}

module.exports = nextConfig
`
-- depois cria um arquivo na raiz chamado
--- next-i18next.config.js
`const path = require('path')

module.exports = {
  i18n:{
    locales: ['pt', 'en'],
    defaultLocale: 'en',
    localeDetection: false,
    localePath:path.resolve('./public/locales'),
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development'
} `

- dentro da pasta raiz public criar a pasta locales dentro da pasta locales, criar pasta da linguagem ex: pasta en(english) e pasta pt(português)
-- dentro da pasta en e pt criar um arquivo json chamado common.json
`{
  "welcome": "Welcome site!!",
  "phrase": "You are viewing the site in",
  "language": "Inglês"
} `
-- na pasta en, colocamos os valores de cada chave em inglês  e repetimos isso em português.
- no arquivo __app.tsx iremos passar o:
`import { appWithTranslation } from 'next-i18next'`
- e passar o seu app como parametro `export default appWithTranslation(MyApp)`
- já na página que vc irá usar a tradução: importar esses três abaixo:
-- Iremos criar uma function com `import { GetStaticProps } from 'next' `
-- Iremos passar esse serverSideTranslations `import { serverSideTranslations } from 'next-i18next/serverSideTranslations'` 
-- Iremos usar o o hook da lib useTranslation `import { useTranslation } from 'next-i18next' `
- Antes de export default criar a função abaixo: 
`export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}`

## TEST nextJS
- tipos de teste:
-- Unitário(Unit Test) `Testar uma unica função de soma`
-- Teste de Integração(Integration Test) `Testar uma funcionalidade, ex: login , testar o funcionamento do login, ou excluir o produto. Testar  se o produto está sendo excluido `
-- Teste end-to-end(e2e, end-2-end) `Simula um usuario navegando no sistema ou site`




- End-2-end ( Cypress )
-- npm install -D cypress
--- temos o comando `npx cypress open` ou add no `package.json` nos scripts:
-- "cy:open": "cypress open",
   "cy:run": "cypress run"

- rodar o comando é: `npm run cy:open`
-- no arquivo `cypress.config.ts` iremos adicionar alguns configurações 
import { defineConfig } from "cypress";

` export default defineConfig({
  e2e: {
    baseUrl: 'http://locahost:3000',
    screenshotOnRunFailure: false,
    video:false,
    videoUploadOnPasses:false
  },
}); `

- criaremos uma pasta dentro da pasta cypress com o name `e2e` e iremos testar página por página
- dentro da pasta e2e iremos criar um arquivo `home.cy.ts`
- iremos pensar como usuario(via browser)para criar os teste

`
describe('Home', () => {
  //verificar se a home está ON
  it('should load the page', () => {
    cy.visit('/')
  });
  // verificar se está na linguagem en
  it('should load the page in english', () => {
    cy.visit('/')
    cy.get('body').should('contain', 'You are viewing the site in')
  });
  // verificar se está pagina está em portugues com a frase X
  it('should laod the page in wrong language', () => {
    cy.visit('/')
    cy.get('body').should('not.contain', 'Você está visualizando o site e')
  })
})
`
- rodar o comando npm run cy:open
- escolher o e2e
- escolher o electron
- clicar no arquivo que criamos e aguarda o teste finalizar.






## REACT HOOK FORM
- npm install react-hook-form

-- usar o template `https://react-hook-form.com/get-started#Quickstart`