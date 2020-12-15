import { assign } from '@ember/polyfills'
import { inject as service } from '@ember/service'
import { isPresent } from '@ember/utils'
import ENV from '../config/environment'
import DS from 'ember-data'
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'

const { JSONAPIAdapter } = DS
const TIMEOUT = 10000

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.APP.host,
  namespace: 'api/v1',
  session: service(),

  authorize(xhr) {
    let { access_token: token } = this.get('session.data.authenticated')

    if (isPresent(token)) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    }
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
