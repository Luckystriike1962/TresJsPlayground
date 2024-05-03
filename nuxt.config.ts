// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass'],
  components: true,
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@tresjs/nuxt'],
})
