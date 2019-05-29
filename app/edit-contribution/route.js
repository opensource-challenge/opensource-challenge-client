import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: service(),

  model({ id }) {
    return this.store.findRecord('contribution', id)
  },

  afterModel(model) {
    return model.get('challenge')
  },

  actions: {
    async save(record) {
      await record.save()

      this.transitionTo('day', record.get('date'))
    },
    async delete(record) {
      await record.destroyRecord()

      this.transitionTo('day', record.get('date'))
    },
    cancel() {
      if (window.history.length > 1) {
        window.history.back()

        return
      }

      this.transitionTo('index')
    },
  },
})
