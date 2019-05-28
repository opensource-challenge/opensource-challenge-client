import { computed } from '@ember/object';
import { Ability } from 'ember-can'

export default Ability.extend({
  canEdit: computed('currentUser.user', 'model.user.id', function() {
    return (
      this.get('currentUser.user.id') === this.get('model.user.id') ||
      this.get('currentUser.user.admin')
    )
  }),
})
