import Ember from 'ember'

const { Component } = Ember

export default Component.extend({
  hidden: true,

  actions: {
    toggle() {
      this.toggleProperty('hidden')
    }
  }
})
