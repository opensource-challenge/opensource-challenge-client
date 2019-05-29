import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query('contribution', {
      include: 'user',
      filter: {
        date: this.modelFor('challenge.day'),
        challenge: this.modelFor('challenge').id,
      },
    })
  },
})
