import { expect } from 'chai'
import { setupRenderingTest } from 'ember-mocha'
import { render } from '@ember/test-helpers'
import { describe, it } from 'mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | calendar entry', function(hooks) {
  setupRenderingTest(hooks)

  it('renders', async function() {
    await render(hbs`{{calendar-entry}}`)
    expect(this.$()).to.exist
  })

  describe('With picture', function() {
    it('renders the picture', async function() {
      this.set('entry', {
        user: {
          picture: 'http://placekitten.com/200/200',
        },
      })
      await render(hbs`{{calendar-entry item=entry}}`)

      expect(this.$('.avatar')).to.have.prop(
        'src',
        'http://placekitten.com/200/200',
      )
    })
  })

  describe('Without picture', function() {
    it('renders the fallback picture', async function() {
      this.set('entry', {
        user: {
          picture: undefined,
        },
      })
      await render(hbs`{{calendar-entry item=entry}}`)

      expect(this.$('.avatar')).to.have.prop(
        'src',
        'https://www.puzzle.ch/wp-content/uploads/2015/11/Tux-960x720.jpg',
      )
    })
  })

  describe('With link', function() {
    it('renders the link to the contribution', async function() {
      this.set('entry', {
        link: 'https://github.com/topaxi/opensource-challenge-client',
      })
      await render(hbs`{{calendar-entry item=entry}}`)

      expect(this.$('.contribution-link')).to.have.prop(
        'href',
        'https://github.com/topaxi/opensource-challenge-client',
      )
    })
  })

  describe('Without link', function() {
    it('does not render the contribution link', async function() {
      this.set('entry', {
        link: undefined,
      })
      await render(hbs`{{calendar-entry item=entry}}`)

      expect(this.$('.contribution-link')).to.not.exist
    })
  })
})
