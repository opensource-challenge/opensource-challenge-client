import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  currentChallenge: service(),

  setupController(controller, model) {
    controller.set('model', model)
  },

  model() {
    return this.store.findRecord('challenge', 'current', {
      include: 'contributions',
    })
  },

  afterModel(model) {
    this.set('currentChallenge.challenge', model)
  },
})
