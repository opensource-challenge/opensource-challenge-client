import moment from 'moment'
import Ember from 'ember'

const { Component, computed } = Ember

export default Component.extend({
  classNames: 'hover-box',
  classNameBindings: 'disabled',
  date: null,
  disabled: computed('date', function() {
    return moment(this.get('date')).diff(moment()) > 0
  })
})
