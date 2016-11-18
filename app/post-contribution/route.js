import Ember from 'ember'
import moment from 'moment'
import AuthenticatedRouteMixin
  from 'ember-simple-auth/mixins/authenticated-route-mixin'

const { Route, inject } = Ember

export default Route.extend(AuthenticatedRouteMixin, {
  session: inject.service(),

  queryParams: {
    date: {
      refreshModel: true
    }
  },

  model({ date = moment().format('YYYY-MM-DD') }) {
    let user = this.get('session.user')

    return this.store.createRecord('contribution', { user, date })
  },

  deactivate() {
    if (this.get('currentModel.isNew')) {
      this.get('currentModel').destroyRecord()
    }
  },

  actions: {
    save(record) {
      return record.save()
        .then(() => {
          this.transitionTo('day', record.get('date'))
        })
    }
  }
})
