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
    }
  }
})
