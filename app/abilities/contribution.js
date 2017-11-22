import Ember from 'ember'
import { Ability } from 'ember-can'

const { computed } = Ember

export default Ability.extend({
  canEdit: computed('currentUser.user', 'model.user.id', function() {
    return (
      this.get('currentUser.user.id') === this.get('model.user.id') ||
      this.get('currentUser.user.admin')
    )
  }),
})
