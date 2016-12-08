/* global showdown, filterXSS */

export function initialize() {
  showdown.extension('xssfilter', () => [
    {
      type: 'output',
      filter: text => filterXSS(text)
    }
  ])
}

export default {
  name: 'register-showdown-extensions',
  initialize
}
