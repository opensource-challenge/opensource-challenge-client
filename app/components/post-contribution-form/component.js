import Component from '@ember/component'
import { computed } from '@ember/object'
import { run } from '@ember/runloop'
import ContributionValidations from '../../validations/contribution'

export default Component.extend({
  ContributionValidations,

  classNames: ['layout-column-flex'],

  contribution: null,
  validations: computed(() => []),

  onsave() {},
  oncancel() {},
  ondelete() {},

  actions: {
    async save(changeset) {
      await changeset.validate()

      if (changeset.get('isValid')) {
        return this.onsave(changeset)
      }
    },
    delete() {
      run.later(() => {
        this.ondelete(this.contribution)
      }, 400)
    },
    setDate(changeset, date) {
      changeset.set('date', date.format('YYYY-MM-DD'))
    },
  },
})
