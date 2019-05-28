import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Model | contribution', function(hooks) {
  setupTest(hooks)

  // Replace this with your real tests.
  it('exists', function() {
    const store = this.owner.lookup('service:store')

    store.push({
      data: {
        id: 1,
        type: 'contribution',
        attributes: {
          title: 'Test',
        },
      },
    })

    const record = store.peekRecord('contribution', 1)
    expect(record.title).to.equal('Test')
  })
})
