import Ember from 'ember'
import moment from 'moment'

const { Component, computed } = Ember

export default Component.extend({
  classNames: 'date-field',
  inputFormat: 'YYYY-MM-DD',

  value: computed('inputFormat', {
    set(prop, value) {
      return this.set('selected', moment(value, this.get('inputFormat')))
    }
  }),
  selected: computed(function() {
    return moment()
  }),
  center: computed(function() {
    return this.get('selected')
  }),

  actions: {
    change(date) {
      this.sendAction('change', date)
    }
  }
})
