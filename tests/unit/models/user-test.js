import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Model | user', function(hooks) {
  setupTest(hooks)

  // Replace this with your real tests.
  it('exists', function() {
    const store = this.owner.lookup('service:store')

    store.push({
      data: {
        id: 1,
        type: 'user',
        attributes: {
          name: 'Damian',
        },
      },
    })

    const record = store.peekRecord('user', 1)
    expect(record.name).to.equal('Damian')
  })
})
