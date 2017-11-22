import Ember from 'ember'
import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

const { Object: EmberObject } = Ember

describe('Integration | Component | contribution calendar', function() {
  setupComponentTest('contribution-calendar', {
    integration: true
  })

  it('renders', function() {
    this.set('challenge', EmberObject.create({
      startsOn: '2016-12-01',
      endsOn: '2016-12-24',
      contributions: []
    }))
    this.render(hbs`{{contribution-calendar challenge=challenge}}`)
    expect(this.$()).to.exist;
  })
})
