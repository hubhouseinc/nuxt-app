// No .env here, add them in nuxt.config.ts if needed.
// Then call your config from script 
// ```
// <script setup>
//   const appConfig = useAppConfig()
// </script>
// ```


export default defineAppConfig({
    title: 'hub-house',
    theme: {
      dark: true,
      colors: {
        primary: '#ff0000'
      }
    }
})