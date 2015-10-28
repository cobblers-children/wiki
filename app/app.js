import Ember from 'ember';
import Resolver from 'ember/resolver';
import DS from 'ember-data';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
    ApplicationSerializer: DS.RESTSerializer
});

Ember.Application.initializer({
    name: 'preload-data',
    initialize: function(container, application) {
        var store = container.lookup('store:main');

        application.deferReadiness();

        Ember.$.getJSON('/plant_data.json').then(function(plant_json) {
            store.pushPayload(plant_json);
            application.advanceReadiness();
        });
    }
});

loadInitializers(App, config.modulePrefix);

export default App;
