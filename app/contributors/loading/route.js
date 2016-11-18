import Ember from 'ember'

const { Route } = Ember

export default Route.extend({
  setupController(controller) {
    controller.set('dummies', Array(...Array(20)))
  }
})
