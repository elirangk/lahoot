module.exports = function (/* ctx */) {
  return {
    supportTS: false,

    boot: [
      'serverConnection',
      'axios',
    ],

    css: ['app.sass'],

    extras: [
      'roboto-font',
      'material-icons', 
      'fontawesome-v5'

    ],

    build: {
      vueRouterMode: 'hash', // available values: 'hash', 'history'
      extendWebpack (cfg) {},
    },

    devServer: {
      https: false,
      port: 8080,
      open: true // opens browser window automatically
    },

    framework: {
      plugins: ['Notify'],
      iconSet: 'material-icons', // Quasar icon set
      lang: 'en-us', // Quasar language pack
      config: {notify: {}},
      importStrategy: 'auto',
    },

    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      manifest: {
        name: `Lahoot`,
        short_name: `Lahoot`,
        description: `Elirax-Dev`,
        display: 'standalone',
        orientation: 'portrait',

        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    cordova: {
    },

    capacitor: {
      hideSplashscreen: true
    },

    electron: {
      bundler: 'packager', // 'packager' or 'builder'

      packager: {
      },

      builder: {
        appId: ''
      },
      nodeIntegration: true,

      extendWebpack (/* cfg */) {
      }
    }
  }
}
