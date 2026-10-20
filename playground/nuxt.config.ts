export default defineNuxtConfig({
  modules: ['my-module', '@vercel/analytics/nuxt'],
  devtools: { enabled: true },
  compatibilityDate: 'latest',
  myModule: {},
})
