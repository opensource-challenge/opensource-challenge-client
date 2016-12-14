import Ember from 'ember'
import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import moment from 'moment'

const { run } = Ember

describe('Integration | Component | post contribution form', function() {
  setupComponentTest('post-contribution-form', {
    integration: true
  })

  it('prefilled form', function() {
    this.set('model', {
      user: {},
      title: 'My Contribution',
      date: '2016-11-21',
      link: 'https://github.com/',
      description: 'Some github contribution'
    })

    this.render(hbs`{{post-contribution-form contribution=model}}`)
    expect(this.$()).to.have.length(1)

    expect(this.$('[name$="[title]"]').val()).to.equal('My Contribution')
    expect(this.$('[name$="[link]"]').val()).to.equal('https://github.com/')
    expect(this.$('[name$="[description]"]').val())
      .to.equal('Some github contribution')
    expect(this.$('.date-field > input').val()).to.equal('2016-11-21')
  })

  it('clicking the cancel button triggers oncancel event', function() {
    let cancelled = false

    this.set('model', {
      user: {},
      title: 'My Contribution',
      date: '2016-11-21',
      link: 'https://github.com/',
      description: 'Some github contribution'
    })
    this.set('cancel', () => cancelled = true)

    this.render(hbs`
      {{post-contribution-form contribution=model oncancel=(action cancel)}}
    `)

    this.$('button[label="Cancel"]').click()

    expect(cancelled).to.be.true
  })

  it('clicking submit on a valid changeset triggers onsave event', function() {
    let saved = false
    let changeset = null

    this.set('model', {
      user: {},
      title: 'My Contr',
      date: moment().format('YYYY-MM-DD'),
      link: 'https://github.com/',
      description: 'Some github contribution'
    })
    this.set('save', c => {
      changeset = c
      saved = true
    })

    this.render(hbs`
      {{post-contribution-form contribution=model onsave=(action save)}}
    `)

    expect(this.$(`[name$="[title]"]`).val())
      .to.equal('My Contr')

    run(() =>
      this.$(`[name$="[title]"]`)
        .val('My Contribution')
        .trigger('input')
    )

    run(() =>
      this.$('form button[type="submit"]').click()
    )

    expect(saved).to.be.true
    expect(changeset.get('title'))
      .to.equal('My Contribution')
  })

  it('clicking submit on an invalid changeset does not trigger onsave event',
      function() {
    let saved = false

    this.set('model', {
      user: {},
      title: 'My Contr',
      date: '2016-11-21',
      link: 'https://github.com/',
      description: 'Some github contribution'
    })
    this.set('save', () => saved = true)

    this.render(hbs`
      {{post-contribution-form contribution=model onsave=(action save)}}
    `)

    run(() =>
      this.$(`[name$="[date]"]`)
        .val('invalid date')
        .trigger('input')
    )

    run(() =>
      this.$('form button[type="submit"]').click()
    )

    expect(saved).to.be.false
  })
})
