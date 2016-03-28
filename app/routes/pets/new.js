import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },

  actions: {
    save(model) {
      console.log("in the save function of new route");

      let pet = this.store.createRecord('pet', {
        name: model.name,
        owner: model.owner,
        breed: model.breed,
        age: model.age
      });

      pet.save();
    }
  }
});
