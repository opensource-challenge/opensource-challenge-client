import Ember from 'ember'

const { Route } = Ember

export default Route.extend({
  model({ user_id }) {
    return this.store.findRecord('user', user_id)
  }
})
