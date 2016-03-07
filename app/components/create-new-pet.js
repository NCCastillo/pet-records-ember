import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(newPet) {
      this.sendAction('save', newPet);
      this.set('newPet.name', null);
      this.set('newPet.owner', null);
      this.set('newPet.breed', null);
      this.set('newPet.age', null);
    },
    cancel() {
      console.log("Cancelling");
      return true;
    }
  }
});
