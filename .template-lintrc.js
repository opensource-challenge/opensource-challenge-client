'use strict'

module.exports = {
  extends: 'recommended',
  rules: {
    'attribute-indentation': false,
    'no-implicit-this': {
      allow: [
        'party-popper',
        'service-worker-update-notify',
        'latest-contribution',
        'contribution-bubbles',
        'contribution-calendar',
      ],
    },
  },
}
