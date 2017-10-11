import Ember from 'ember'
import DS from 'ember-data'

const { computed } = Ember
const { Model, attr, hasMany } = DS

export default Model.extend({
  contributions: hasMany('contribution'),
  name: attr('string'),
  startsOn: attr('date'),
  endsOn: attr('date'),
  closed: attr('boolean'),

  active: computed('startsOn', function() {
    return Date.now() >= this.get('startsOn')
  }).volatile(),

  open: computed.not('closed').readOnly(),
})
