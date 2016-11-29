import ENV from '../config/environment'
import Ember from 'ember'
import AjaxService from 'ember-ajax/services/ajax'

const { inject, computed } = Ember

export default AjaxService.extend({
  session: inject.service(),

  host: ENV.APP.host,
  namespace: 'api/v1',

  headers: computed('session.data.authenticated.access_token', {
    get() {
      let headers = {
        Accept: 'application/vnd.api+json,application/json'
      }
      let token = this.get('session.data.authenticated.access_token')

      if (token) {
        headers.Authorization = `Bearer ${token}`
      }

      return headers
    }
  })
})
