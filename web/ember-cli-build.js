/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
      fingerprint: {
          exclude: ['assets/images']
      }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/normalize-css/normalize.css');

  app.import('bower_components/codemirror/lib/codemirror.css');
  app.import('bower_components/codemirror/lib/codemirror.js');
  app.import('bower_components/codemirror/addon/edit/continuelist.js');
  app.import('bower_components/codemirror/mode/markdown/markdown.js');
  app.import('bower_components/codemirror/mode/xml/xml.js');
  app.import('bower_components/marked/lib/marked.js');

  app.import('bower_components/jquery.markdownify/lib/jquery.markdownify.css');
  app.import('bower_components/jquery.markdownify/lib/jquery.markdownify.js');

  app.import('bower_components/commonmark/dist/commonmark.js');

  return app.toTree();
};
