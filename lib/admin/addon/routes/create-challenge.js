import { inject as service } from '@ember/service'
import Route from '@ember/routing/route'

export default Route.extend({
  store: service(),

  model() {
    return this.store.createRecord('challenge')
  },

  deactivate() {
    if (this.get('currentModel.isNew')) {
      this.store.unloadRecord(this.currentModel)
      this.currentModel = null
    }
  },

  actions: {
    async createChallenge(challenge) {
      await challenge.save()

      this.transitionTo('challenges')
    },
  },
})
