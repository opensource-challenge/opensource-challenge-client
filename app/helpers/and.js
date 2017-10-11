import Ember from 'ember'

export function and(params) {
  return params.every(Boolean)
}

export default Ember.Helper.helper(and)
