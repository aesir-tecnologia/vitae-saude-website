import colors from 'vuetify/es5/util/colors';
import pt from 'vuetify/es5/locale/pt';

export default {
  target: 'static',
  ssr: false,
  head: {
    htmlAttrs: {
      lang: 'pt-br'
    },
    titleTemplate: '%s - Vitae Saúde',
    title: 'Carregando',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Sua saúde na palma da mão.'
      }
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [
    '~/plugins/vee-validate',
    '~/plugins/axios',
    '~/plugins/vue-currency-filter'
  ],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  axios: {
    baseURL: 'https://api.vitaesaudevr.com.br/api',
    prefix: '/api',
    progress: false,
    proxy: false
  },
  proxy: {
    '/api': 'http://localhost:8000'
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Montserrat'
      }
    },
    lang: {
      locales: { pt },
      current: 'pt'
    },
    theme: {
      dark: false,
      themes: {
        dark: {},
        light: {
          primary: '#179d83',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#b00020',
          success: colors.green.darken2
        }
      }
    },
    treeShake: true
  },
  build: {
    extend(config, ctx) {}
  },
  pageTransition: 'fade-transition',
  auth: {
    redirect: {
      logout: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/cliente/login',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: {
            url: '/auth/cliente/logout',
            method: 'post'
          },
          user: {
            url: '/auth/cliente/me',
            method: 'get',
            propertyName: ''
          }
        },
        tokenRequired: true,
        tokenType: 'bearer'
      }
    }
  }
};
