import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment'

export default Component.extend({
  classNames: 'hover-box',
  classNameBindings: 'disabled',
  archive: null,
  challenge: null,
  date: null,
  disabled: computed('date', function() {
    return moment(this.date).diff(moment()) > 0;
  }),
})
