// require('dotenv').config()

export default {
  axios: {
    baseURL: 'http://devapi.emotion.co.kr/api/v1/',
    browserBaseURL: '/api/v1/',
    // 새로고침 시 뜨고(ssr) 뒤로가기나 링크를 클릭을 할 땐 안뜸(csr)
    // csr 을 했다가 ssr을 했다가 하기 때문
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'http://devapi.emotion.co.kr',
      changeOrigin: true
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-nuxt-work',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseUrl: process.env.BASE_URL || 'http://devapi.emotion.co.kr'
  },

  serverMiddleware: ['~/api/index.js']
  // /api 폴더에 있는 index.js 을 이용하여 미들웨어를 구축하겠다는 선언
}
