// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Inter': true,
        'Poppins': true,
        download: true,
        inject: true
      }
    }]
  ]
})
