/* eslint-env node */
'use strict'

// eslint-disable-next-line
const EngineAddon = require('ember-engines/lib/engine-addon')

module.exports = EngineAddon.extend({
  name: 'admin',

  // eslint-disable-next-line
  lazyLoading: {
    enabled: true,
  },

  isDevelopingAddon() {
    return true
  },
})
