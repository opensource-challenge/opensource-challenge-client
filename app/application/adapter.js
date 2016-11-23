import DS from 'ember-data'
import DataAdapterMixin
  from 'ember-simple-auth/mixins/data-adapter-mixin'

const { JSONAPIAdapter } = DS

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: 'http://localhost:4000',
  namespace: 'api/v1',
  authorizer: 'authorizer:osc',

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
