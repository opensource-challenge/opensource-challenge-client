import Ember from 'ember'
import moment from 'moment'
import AuthenticatedRouteMixin
  from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { Route, inject } = Ember

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: inject.service(),
  currentChallenge: inject.service(),

  queryParams: {
    date: {
      refreshModel: true
    }
  },

  async model({ date = moment().format('YYYY-MM-DD') }) {
    let user = this.get('currentUser.user')

    let challenge = await this.get('currentChallenge').load()

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
