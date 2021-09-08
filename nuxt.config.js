export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'api-osa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.min.css' },
      { rel: "stylesheet", href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
      { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans&display=swap" rel="stylesheet'}
      
    ],
    script: [
      { defer:"true", src:"https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js" },
			{ defer:"true", src:"https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/plugins/unveilhooks/ls.unveilhooks.min.js" },
			{ defer:"true", src:"https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/plugins/bgset/ls.bgset.min.js" },
			{ defer:"true", src:"https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.min.js" },
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/globalStyles/_reset.scss',
    '~/assets/globalStyles/bootstrapGridCustom.scss',
    '~/assets/globalStyles/base.scss',
    '~/assets/globalStyles/button.scss',
    '~/assets/globalStyles/typography.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src:'~/plugins/Nav.js', mode: 'client'},
    // {src:'~/plugins/tabletotal.js', mode: 'client'},
    // {src:'~/plugins/slider.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    styleResources: {
      scss: './assets/globalStyles/_variables.scss',
    },
		optimization: {
      splitChunks: {
        chunks: 'async',
      }
    },
		cssSourceMap: true,
    extractCSS: true,
		splitChunks: {
      pages: false,
      vendor: false,
      commons: false,
      runtime: false,
      layouts: false
		},
		filenames:{
			css: '[name].css',
			app: '[name].js',
			manifest: 'manifest.js',
			chunk: '[name].js'
		},
	}
}
