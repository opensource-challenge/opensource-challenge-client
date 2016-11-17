/* eslint-env node */
'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const autoprefixer = require('autoprefixer')
const cssnext = require('postcss-cssnext')

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: false
      },
      filter: {
        enabled: true,
        plugins: [
          {
            module: cssnext,
            options: {
              browsers: [
                '> 1%',
                'last 3 versions',
                'Firefox ESR'
              ]
            }
          }
        ]
      }
    }
  })

  return app.toTree()
}
