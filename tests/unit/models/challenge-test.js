import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Model | challenge', function(hooks) {
  setupTest(hooks)

  it('exists', function() {
    const store = this.owner.lookup('service:store')

    store.push({
      data: {
        id: 1,
        type: 'challenge',
        attributes: {
          name: 'Damians Open Source Challenge',
        },
      },
    })

    const record = store.peekRecord('challenge', 1)
    expect(record.name).to.equal('Damians Open Source Challenge')
  })
})
