import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    async saveChallenge(challenge) {
      await challenge.save()

      this.transitionTo('challenge', challenge)
    },
  },
})
