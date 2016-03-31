import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  'name'() { return faker.name.firstName() + ' ' + faker.name.lastName(); },
  'owner'() { return faker.name.findName(); },
  'breed'(i) {
    return faker.list.random('Mix Breed', 'Labrador Retriever', 'German Sherpard', 'Bull Dog', 'Beagle')(i);
  },
  'age'() { return Math.floor(Math.random() * 15) + 1 ; }
});
