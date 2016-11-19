/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'opensource-challenge-client',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-simple-auth': {
      authenticationRoute: 'index'
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          apiKey: 'c8992decd49d183b23d7',
          scope: 'user',
          redirectUri: 'http://localhost:4200/'
        },
        'google-oauth2-bearer': {
          apiKey: '586953290562-c896enmb9em22uv4bc4p63h97pp111h3.apps.googleusercontent.com',
          scope: 'profile email',
          redirectUri: 'http://localhost:4200/'
        }
      }
    },

    'ember-form-for': {
      errorsPath: 'error.PROPERTY_NAME.validation'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.torii.providers['github-oauth2'].apiKey = '6c73fd2b010ef9ef3d0c'
    ENV.torii.providers['github-oauth2'].redirectUri = 'https://www.opensource-challenge.ch/'
  }

  return ENV;
};
