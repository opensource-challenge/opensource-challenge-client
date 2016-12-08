import Ember from 'ember'
import AuthenticatedRouteMixin
  from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { Route, inject } = Ember

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: inject.service(),

  model({ id }) {
    return this.store.findRecord('contribution', id)
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
    }
  }
})
