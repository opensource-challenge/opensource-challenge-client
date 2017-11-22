import { expect } from 'chai'
import { setupComponentTest } from 'ember-mocha';
import { describe, it } from 'mocha';
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | calendar entry', function() {
  setupComponentTest('calendar-entry', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{calendar-entry}}`)
    expect(this.$()).to.exist
  })

  describe('With picture', function() {
    it('renders the picture', function() {
      this.set('entry', {
        user: {
          picture: 'http://placekitten.com/200/200'
        }
      })
      this.render(hbs`{{calendar-entry item=entry}}`)

      expect(this.$('.avatar'))
        .to.have.prop('src', 'http://placekitten.com/200/200')
    })
  })

  describe('Without picture', function() {
    it('renders the fallback picture', function() {
      this.set('entry', {
        user: {
          picture: undefined
        }
      })
      this.render(hbs`{{calendar-entry item=entry}}`)

      expect(this.$('.avatar'))
        .to.have.prop(
          'src',
          'https://www.puzzle.ch/wp-content/uploads/2015/11/Tux-960x720.jpg'
        )
    })
  })

  describe('With link', function() {
    it('renders the link to the contribution', function() {
      this.set('entry', {
        link: 'https://github.com/topaxi/opensource-challenge-client'
      })
      this.render(hbs`{{calendar-entry item=entry}}`)

      expect(this.$('.contribution-link'))
        .to.have.prop(
          'href',
          'https://github.com/topaxi/opensource-challenge-client'
        )
    })
  })

  describe('Without link', function() {
    it('does not render the contribution link', function() {
      this.set('entry', {
        link: undefined
      })
      this.render(hbs`{{calendar-entry item=entry}}`)

      expect(this.$('.contribution-link')).to.not.exist
    })
  })
})
