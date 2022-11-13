// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
          apiBase: '/api'
        }
    },
    typescript: {
        shim: false // not used as TypeScript Vue Plugin (Volar)
    },
    // modules: [
    //     // Use package name
    //     '@nuxtjs/landing',
    //   ]
})
