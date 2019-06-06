import { computed } from '@ember/object'
import Component from '@ember/component'

export default Component.extend({
  contributionsByUser: computed('challenge.contributions.[]', function() {
    return Object.values(
      this.get('challenge.contributions').reduce(
        (contributions, contribution) => {
          let userId = contribution.get('user.id')
          contributions[userId] = contributions[userId] || {
            user: contribution.get('user'),
            contributions: [],
          }
          contributions[userId].contributions.push(contribution)
          return contributions
        },
        {},
      ),
    ).sort((a, b) => b.contributions.length - a.contributions.length)
  }),
})
