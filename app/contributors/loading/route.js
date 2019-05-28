import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    controller.set('dummies', Array(...Array(35)))
  },
})
