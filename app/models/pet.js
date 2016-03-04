import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  owner: DS.attr(),
  breed: DS.attr(),
  age: DS.attr()
});
