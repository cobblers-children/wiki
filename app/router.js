import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("article", {
    path: "/article/:article_id"
  });

  this.resource("plant", {
      path: "/plant/:plant_id"
  });

  this.route('editor');
  this.route('intro');
  this.route('faq');
});

export default Router;
