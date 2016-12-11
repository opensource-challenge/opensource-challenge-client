import Ember from 'ember'

export default Ember.Component.extend({
  actions: {
    chooseDate(data) {
      this.set('selected', data.moment)
      this.sendAction('selectDate', data.moment)
    }
  }
})
