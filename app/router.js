import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pets', function() {
    this.route('new');
    this.route('pet', { path: ':pet_id'}); //change this to slug
  });
});

export default Router;
