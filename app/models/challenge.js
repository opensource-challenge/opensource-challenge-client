import { not } from '@ember/object/computed'
import DS from 'ember-data'

const { Model, attr, hasMany } = DS

export default Model.extend({
  contributions: hasMany('contribution', { async: true }),
  name: attr('string'),
  shortname: attr('string'),
  startsOn: attr('date'),
  endsOn: attr('date'),
  closed: attr('boolean'),
  get active() {
    return Date.now() >= this.startsOn
  },
  open: not('closed').readOnly(),
})
