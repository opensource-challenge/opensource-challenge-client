import Ember from 'ember'

const { Component, computed, inject } = Ember

export default Component.extend({
  store: inject.service(),

  tagName: 'section',

  _allContributions: computed(function() {
    return this.get('store').peekAll('contribution')
  }),
  contribution: computed('_allContributions.[]', function() {
    return this.get('_allContributions')
      .sortBy('insertedAt')
      .objectAt(this.get('_allContributions.length') - 1)
  }),
})
