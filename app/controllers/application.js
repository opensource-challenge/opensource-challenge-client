import Ember from 'ember'
import Controller from '@ember/controller'

export default Controller.extend({
  get testing() {
    return Ember.testing
  },
})
