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

      pet.save().then(() => {
        this.transitionTo('pets.pet', pet);
      }, () => {
        console.log("opps something went wrong");
      });
    }
  },

  cancel() {
    // need to fix this. Cancel action does not get to here from component.
    console.log("inside route for cancel");
    this.transitionTo('pets');
  }
});
