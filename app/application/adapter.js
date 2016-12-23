import ENV from '../config/environment'
import DS from 'ember-data'
import DataAdapterMixin
  from 'ember-simple-auth/mixins/data-adapter-mixin'

const { JSONAPIAdapter } = DS
const TIMEOUT = 10000

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.APP.host,
  namespace: 'api/v1',
  authorizer: 'authorizer:osc',

  ajaxOptions(url, type, options) {
    return Object.assign(this._super(url, type, options), { timeout: TIMEOUT })
  },

  urlForCreateRecord(modelName/*, snapshot*/) {
    switch (modelName) {
      case 'user':
      case 'users':
        return this._super(...arguments).replace('users', 'register')
      default:
        return this._super(...arguments)
    }
  }
})
