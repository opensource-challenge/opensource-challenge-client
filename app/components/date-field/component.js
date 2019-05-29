import Component from '@ember/component'
import { computed } from '@ember/object'
import moment from 'moment'

export default Component.extend({
  classNames: 'date-field',
  inputFormat: 'YYYY-MM-DD',

  value: computed('inputFormat', {
    set(prop, value) {
      return this.set('selected', moment(value, this.inputFormat))
    },
  }),
  selected: computed(function() {
    return moment()
  }),
  center: computed(function() {
    return this.selected
  }),

  change() {},
})
