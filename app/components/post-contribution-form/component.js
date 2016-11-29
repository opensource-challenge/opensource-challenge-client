import Ember from 'ember'
import ContributionValidations from '../../validations/contribution'

const { Component } = Ember

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
    }
  }
})
