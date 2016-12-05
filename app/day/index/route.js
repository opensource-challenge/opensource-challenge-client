import Ember from 'ember'

const { Route } = Ember

export default Route.extend({
  model() {
    return this.store.query('contribution', {
      include: 'user',
      filter: { date: this.modelFor('day') }
    })
  }
})
