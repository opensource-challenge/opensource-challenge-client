import Ember from 'ember'

const { Component, computed } = Ember

export default Component.extend({
  messageIsHTMLDocument: computed('error.message', function() {
    return /<!doctype/i.test(String(this.get('error.message')))
  })
})
