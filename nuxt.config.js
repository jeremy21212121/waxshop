
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Wax Shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The place for waxing in Kelowna' },
      { name: 'application-name', content: 'The place for waxing in Kelowna' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'msapplication-TileImage', content: '/mstile-144x144.png' },
      { name: 'theme-color', content: '#000000' }
    ],
    link: [
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=es5%2Ces6' }
    ]
  },
  generate: {
    fallback: true
    // routes: [
    //   '/',
    //   '/contact',
    //   '/services',
    //   '/promotion'
    // ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // '@/styles/test.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: 'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=es5%2Ces6', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // scss: {
    //   sourceMap: true
    // },
    // postcss: {
    //   // parser: 'postcss-scss',
    //   // plugins: {
    //   //   'sass-loader': {}
    //   // },
    //   // order: 'presetEnvAndCssnanoLast',
    //   // preset: {
    //   //   stage: 2,
    //   //   autoprefixer: {
    //   //     flexbox: true
    //   //   }
    //   // }
    //   plugins: {
    //     'postcss-nested': {},
    //     'postcss-import': {},
    //     'postcss-url': {},
    //     'postcss-preset-env': this.preset,
    //     'cssnano': { preset: 'default' } // disabled in dev mode
    //   },
    //   order: 'presetEnvAndCssnanoLast',
    //   preset: {
    //     stage: 2,
    //     autoprefixer: {
    //       flexbox: true,
    //       grid: true
    //     }
    //     // preserve: true
    //   }
    // },
    extend (config, ctx) {
      // if (ctx.isClient) {
      //  console.log(config)
      // }
    }
  }
}
