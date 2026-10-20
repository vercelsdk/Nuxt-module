export default defineNuxtConfig({
  modules: ['my-module', '@vercel/analytics/nuxt', '@vercel/speed-insights'],
  devtools: { enabled: true },
  compatibilityDate: 'latest',
  myModule: {},
})
