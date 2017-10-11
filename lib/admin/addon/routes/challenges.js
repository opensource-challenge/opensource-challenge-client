import { inject as service } from '@ember/service'
import Route from '@ember/routing/route'

export default Route.extend({
  store: service(),

  setupController(controller, model) {
    // TODO: Get rid of this.findRecord('challenge', 'current') in  host app
    controller.set('model', model.filter(challenge => challenge.id !== 'current'))
  },

  model() {
    return this.get('store').findAll('challenge')
  },
})
