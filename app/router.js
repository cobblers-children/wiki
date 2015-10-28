import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource("plant", {
        path: "/plant/:plant_id"
    });
});

export default Router;
