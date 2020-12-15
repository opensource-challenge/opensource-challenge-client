import { sort } from '@ember/object/computed'
import Component from '@ember/component'
import { computed } from '@ember/object'
import moment from 'moment'
import groupBy from '../../utils/group-by-macro'

export default Component.extend({
  archive: null,

  challenge: computed(() => ({
    startsOn: '2100-12-01',
    endsOn: '2100-12-24',
    active: true,
  })),

  sortedItems: sort(
    'items.[]',
    (a, b) => Date.parse(a.get('date')) - Date.parse(b.get('date')),
  ),

  groupedItems: groupBy('sortedItems', 'date'),

  calendarDays: computed('challenge', 'groupedItems.[]', function() {
    let items = this.groupedItems

    let start = moment(this.get('challenge.startsOn'))
    let end = moment(this.get('challenge.endsOn'))
    let days = {}

    for (let date = moment(start); date.diff(end) <= 0; date.add(1, 'day')) {
      let dateStr = date.format('YYYY-MM-DD')

      days[dateStr] = items[dateStr] || []
    }

    return days
  }),
})
