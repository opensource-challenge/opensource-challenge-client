import moment from 'moment'
import Ember from 'ember'
import groupBy from '../../utils/group-by-macro'

const {
  Component,
  computed
} = Ember

export default Component.extend({
  challenge: {
    startsOn: '2100-12-01',
    endsOn: '2100-12-24'
  },

  sortedItems: computed.sort('items.[]', (a, b) =>
    Date.parse(a.get('date')) - Date.parse(b.get('date'))
  ),

  groupedItems: groupBy('sortedItems', 'date'),

  calendarDays: computed('challenge', 'groupedItems.[]', function() {
    let items = this.get('groupedItems')

    let start = moment(this.get('challenge.startsOn'))
    let end = moment(this.get('challenge.endsOn'))
    let days = {}

    for (let date = moment(start); date.diff(end) <= 0; date.add(1, 'day')) {
      let dateStr = date.format('YYYY-MM-DD')

      days[dateStr] = items[dateStr] || []
    }

    return days
  })
})
