import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'article',

  fallbackPicture:
    'https://www.puzzle.ch/wp-content/uploads/2015/11/Tux-960x720.jpg',

  picture: computed('item.user.picture', function() {
    return this.getWithDefault('item.user.picture', this.fallbackPicture)
  }),
})
