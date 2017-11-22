/* global filterXSS */
import showdown from 'showdown'

export function initialize() {
  showdown.extension('xssfilter', () => [
    {
      type: 'output',
      filter: text => filterXSS(text),
    },
  ])
}

export default {
  name: 'register-showdown-extensions',
  initialize,
}
