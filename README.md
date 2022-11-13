# Hub Home

- MVP based on Nuxt 3 with Domain Driven approach
- Domain are represented by Nuxt module

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

[![Netlify Status](https://api.netlify.com/api/v1/badges/6b1bdf3a-bc8f-4184-b7fa-e7307d856bc5/deploy-status)](https://app.netlify.com/sites/hub-house/deploys)

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## ENV

Add env in nuxt config
```js
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }
})
```

Override `apiSecret` from `.env` with `NUXT_API_SECRET=api_secret_token`

Then, you will be able to get env in your script
```js
<script setup>
const runtimeConfig = useRuntimeConfig()
</script>
```


