import Ember from 'ember'

import moment from 'moment'

export default Ember.Component.extend({
  selected: moment(),

  actions: {
    /**
     * Open the dropdown
     *
     * @param {object} dropdown - The object from the basic-dropdown component
     */
    openDropdown(dropdown) {
      // can't think of another way to make the dropdown
      // known to this class so that chooseDate can
      // close the dropdown
      this.set('dropdown', dropdown)
      dropdown.actions.open()
    },
    /**
     * Action when the date is chosen
     *
     * @param {object} data - Data from the power-calendar
     */
    chooseDate(data) {
      this.get('dropdown').actions.close()
      this.set('selected', data.moment)
      this.sendAction('selectDate', data.moment)
    }
  }
})
