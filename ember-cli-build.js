'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const cssnext = require('postcss-cssnext')

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      exclude: ['assets/icons/'],
    },
    'ember-app-shell': {
      criticalCSSOptions: {
        ignore: [/font-face/, /font-family/],
      },
    },
    'ember-service-worker': {
      registrationStrategy: 'inline',
      versionStrategy: 'every-build',
    },
    'esw-index': {
      excludeScope: [
        /manifest.json$/,
        /robots.txt$/,
        /favicon.ico$/,
        /\.xml(?:$|\?)/,
      ],
    },
    postcssOptions: {
      compile: {
        enabled: false,
      },
      filter: {
        enabled: true,
        map: { inline: false },
        plugins: [
          {
            module: cssnext,
            options: {
              browsers: ['> 1%', 'last 3 versions', 'Firefox ESR'],
            },
          },
        ],
      },
    },
  })

  app.import('node_modules/xss/dist/xss.js')

  return app.toTree()
}
