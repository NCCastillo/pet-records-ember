import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('pet');
  },

  actions: {
    save(model) {
      console.log("in the save function of new route");
      let pet = this.store.createRecord('pet', {
        name: model.get('name'),
        owner: model.get('owner'),
        breed: model.get('breed'),
        age: model.get('age')
      });

      pet.save();
    }
  }
});
