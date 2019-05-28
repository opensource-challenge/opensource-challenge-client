import Route from '@ember/routing/route';

export default Route.extend({
  model({ user_id }) {
    return this.store.findRecord('user', user_id)
  },
})
