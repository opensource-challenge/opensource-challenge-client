import { not } from '@ember/object/computed'
import { computed } from '@ember/object'
import DS from 'ember-data'

const { Model, attr, hasMany } = DS

export default Model.extend({
  contributions: hasMany('contribution', { async: true }),
  name: attr('string'),
  startsOn: attr('date'),
  endsOn: attr('date'),
  closed: attr('boolean'),

  active: computed('startsOn', function() {
    return Date.now() >= this.startsOn
  }).volatile(),

  open: not('closed').readOnly(),
})
