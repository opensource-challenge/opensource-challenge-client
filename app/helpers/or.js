import Ember from 'ember'

const { Helper: { helper } } = Ember

export function or(values) {
  return values.some(Boolean)
}

export default helper(or)
