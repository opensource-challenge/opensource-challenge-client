import Ember from 'ember'
import moment from 'moment'
import AuthenticatedRouteMixin
  from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { Route, inject } = Ember

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: inject.service(),

  queryParams: {
    date: {
      refreshModel: true
    }
  },

  model({ date = moment().format('YYYY-MM-DD') }) {
    let user = this.get('currentUser.user')

    let challenge = this.store.findRecord('challenge', 'current')

    return this.store.createRecord('contribution', { user, date, challenge })
  },

  deactivate() {
    if (this.get('currentModel.isNew')) {
      this.get('currentModel').destroyRecord()
    }
  },

  actions: {
    async save(record) {
      await record.save()

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
