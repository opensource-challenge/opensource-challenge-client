import EmberObject from '@ember/object';
import { expect } from 'chai'
import { describe, it } from 'mocha'
import groupByMacro from 'opensource-challenge-client/utils/group-by-macro'

describe('Unit | Utility | group by macro', function() {
  it('works', function() {
    let Obj = EmberObject.extend({
      grouped: groupByMacro('items', 'date'),
    })
    let obj = Obj.create({
      items: [
        { id: 1, date: '2016-12-01' },
        { id: 2, date: '2016-12-01' },
        { id: 3, date: '2016-12-02' },
        { id: 4, date: '2016-12-02' },
        { id: 5, date: '2016-12-03' },
        { id: 6, date: '2016-12-03' },
      ],
    })

    expect(obj.get('grouped')).to.deep.equal([
      {
        property: 'date',
        value: '2016-12-01',
        items: [{ id: 1, date: '2016-12-01' }, { id: 2, date: '2016-12-01' }],
      },
      {
        property: 'date',
        value: '2016-12-02',
        items: [{ id: 3, date: '2016-12-02' }, { id: 4, date: '2016-12-02' }],
      },
      {
        property: 'date',
        value: '2016-12-03',
        items: [{ id: 5, date: '2016-12-03' }, { id: 6, date: '2016-12-03' }],
      },
    ])
  })
})
