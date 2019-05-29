import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  store: service(),

  tagName: 'section',

  _allContributions: computed(function() {
    return this.store.peekAll('contribution');
  }),
  contribution: computed('_allContributions.[]', function() {
    return this._allContributions
      .sortBy('insertedAt')
      .objectAt(this.get('_allContributions.length') - 1);
  }),
})
