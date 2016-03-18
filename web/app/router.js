import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource("article", {
        path: "/article/:article_id"
    });

    this.resource("plant", {
        path: "/plant/:plant_id"
    });

    this.resource("category", {
        path: "/category/:category_id"
    });

    this.route('editor');
});

export default Router;
