import Ember from 'ember'

const { Route, inject } = Ember

export default Route.extend({
  currentChallenge: inject.service(),

  setupController(controller, model) {
    controller.set('model', model)
  },

  model() {
    return this.store.findRecord('challenge', 'current', {
      include: 'contributions'
    })
  },

  afterModel(model) {
    this.set('currentChallenge.challenge', model)
  }
})
