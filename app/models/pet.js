import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  owner: DS.attr('string'),
  breed: DS.attr('string'),
  age: DS.attr('number')
});
