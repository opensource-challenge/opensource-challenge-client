import { expect } from 'chai'
import { it, describe } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | post contribution form', function() {
  setupComponentTest('post-contribution-form', {
    integration: true
  });

  it('renders', function() {
    this.set('model', {
      user: {},
      date: '2016-11-21',
      link: 'https://github.com/',
      description: 'Some github contribution'
    })

    this.render(hbs`{{post-contribution-form contribution=model}}`)
    expect(this.$()).to.have.length(1)
  })
})
