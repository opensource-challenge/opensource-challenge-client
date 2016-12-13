import Ember from 'ember'

export function takeFirst([ array ]) {
  return array == null ? null : array[0]
}

export default Ember.Helper.helper(takeFirst)
