import { expect } from 'chai'
import { describeComponent, it } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent('post-contribution-form', 'Integration | Component | post contribution form',
  {
    integration: true
  },
  function() {
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
  }
)
