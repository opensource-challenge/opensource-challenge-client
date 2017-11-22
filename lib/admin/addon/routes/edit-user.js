import { inject as service } from '@ember/service'
import Route from '@ember/routing/route'

export default Route.extend({
  store: service(),

  model({ id }) {
    return this.get('store').findRecord('user', id)
  },
})
