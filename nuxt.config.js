/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-01-13 16:15:11
 * @LastEditors: hzf
 * @LastEditTime: 2022-01-14 17:19:45
 */
const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

export default {
  server: {
    port: 8088,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css',
    { src: 'scss/index.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/global',
    '@/plugins/element-ui',
    '@/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
    proxy: true,
  },
  proxy: {
    '/api': {
      target: process.env.BASE_URL,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extend(config) {
      config.resolve.alias['@c'] = resolve('components');
      config.resolve.alias['@s'] = resolve('static');
    },
  },

  router: {
    middleware: 'stats',
    // extendRoutes(routes, resolve) {
    //   [
    //     {
    //       name: 'Error',
    //       path: '*',
    //       component: resolve(__dirname, 'pages/error.vue')
    //     }
    //   ].forEach(route => {
    //     routes.push(route);
    //   });
    // }
  }
};
