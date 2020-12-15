import { assign } from '@ember/polyfills'
import { inject as service } from '@ember/service'
import { isPresent } from '@ember/utils'
import ENV from '../config/environment'
import JSONAPIAdapter from '@ember-data/adapter/json-api'
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'

const TIMEOUT = 10000

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.APP.host,
  namespace: 'api/v1',
  session: service(),

  get headers() {
    let { access_token: token } = this.get('session.data.authenticated')
    return {
      'Authorization': `Bearer ${token}`
    };
  },

  ajaxOptions(url, type, options) {
    return assign(this._super(url, type, options), { timeout: TIMEOUT })
  },

  urlForCreateRecord(modelName /*, snapshot*/) {
    switch (modelName) {
      case 'user':
      case 'users':
        return this._super(...arguments).replace('users', 'register')
      default:
        return this._super(...arguments)
    }
  },
})
