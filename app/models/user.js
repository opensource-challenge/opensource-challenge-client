import DS from 'ember-data';

export default DS.Model.extend({
  contributions: DS.hasMany('contribution'),
  website: DS.attr('string'),
  picture: DS.attr('string'),
  name: DS.attr('string'),
  company: DS.attr('string')
});
