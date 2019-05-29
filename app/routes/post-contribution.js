import { inject as service } from '@ember/service'
import Route from '@ember/routing/route'
import moment from 'moment'
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: service(),
  currentChallenge: service(),

  queryParams: {
    date: {
      refreshModel: true,
    },
  },

  async model({ date = moment().format('YYYY-MM-DD') }) {
    let user = this.get('currentUser.user')

    let challenge = await this.currentChallenge.load()

    return this.store.createRecord('contribution', { user, date, challenge })
  },

  deactivate() {
    if (this.get('currentModel.isNew')) {
      this.store.unloadRecord(this.currentModel)
      this.currentModel = null
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
    },
  },
})
