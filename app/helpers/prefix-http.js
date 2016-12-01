import Ember from 'ember'

export function prefixHttp([ url ]) {
  return url.indexOf('http') === 0 ? url : `http://${url}`
}

export default Ember.Helper.helper(prefixHttp)
