// modules/landing.mjs

export default async (inlineOptions, nuxt) => {
    // You can do whatever you like here..

    console.log(inlineOptions.token) // `123`
    console.log(nuxt.options.dev) // `true` or `false`

    nuxt.hook('ready', async nuxt => {
      console.log('Nuxt is ready')
    })
  }
  