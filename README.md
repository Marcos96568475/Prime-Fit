# Prime Fit

Página inicial da plataforma fitness Prime Fit, preparada para publicação no Vercel.

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador. O build de produção pode ser validado com `npm run build`.

## Deploy no Vercel

O projeto usa Next.js com App Router. O Vercel deve detectar o framework como `Next.js`, executar `npm run build` e deixar o campo **Output Directory** vazio: o adaptador do Next.js gerencia a saída `.next` automaticamente. O arquivo `vercel.json` declara apenas o framework e não substitui o pipeline nativo.

## Estrutura

- `app/`: layout, metadados SEO e página principal.
- `components/`: navegação, hero, planos e formulários da experiência.
- `lib/leads.ts`: contrato de envio de interessados, atualmente sem persistência.

O login é apenas a interface inicial. Nenhuma credencial, CPF ou senha é armazenada no frontend. Para a próxima etapa, `submitLead` deve chamar uma API segura que persista o cadastro e, após o processamento, conecte o fluxo de WhatsApp. Autenticação, usuários, planos e pagamentos devem ser adicionados no backend, com autorização por usuário para proteger os dados individuais.
