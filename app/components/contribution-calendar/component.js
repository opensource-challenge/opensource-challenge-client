import Ember from 'ember'

const {
  Component,
  computed,
  A: emberA
} = Ember

export default Component.extend({
  items: computed(function() { return emberA() }),

  contributorIds: computed('items.[]', function() {
    return this.get('items')
      .map(i => i.belongsTo('user').link())
      .uniq()
  }),

  contributorCount: computed('contributorIds.[]', function() {
    return this.get('contributorIds').length
  })
})
