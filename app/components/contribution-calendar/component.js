import Ember from 'ember'

const { Component, computed } = Ember

export default Component.extend({
  items: computed(function() { return [] }),
})
