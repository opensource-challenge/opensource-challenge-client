import Ember from 'ember'
import ContributionValidations from '../../validations/contribution'

const { Component, run } = Ember

export default Component.extend({
  ContributionValidations,

  classNames: [ 'layout-column-flex' ],

  contribution: null,
  validations: [],

  actions: {
    async save(changeset) {
      await changeset.validate()

      if (changeset.get('isValid')) {
        return this.sendAction('onsave', changeset)
      }
    },
    delete() {
      run.later(() => {
        this.sendAction('ondelete', this.get('contribution'))
      }, 400)
    },
    cancel() {
      return this.sendAction('oncancel')
    },
    /**
     * Action that receives the data from the datepicker
     *
     * @param {moment} date - The date selected in the datepicker
     */
    setDate(date) {
      // maybe use some config here instead of hard coded format?
      date = date.format('YYYY-MM-DD')
      this.set('contribution.date', date)
    }
  }
})
