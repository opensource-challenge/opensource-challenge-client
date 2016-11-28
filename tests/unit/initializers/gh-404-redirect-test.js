import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Ember from 'ember';
import Gh404RedirectInitializer from 'opensource-challenge-client/initializers/gh-404-redirect';

describe('Unit | Initializer | gh 404 redirect', function() {
  let application;

  beforeEach(function() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  });

  // Replace this with your real tests.
  it('works', function() {
    Gh404RedirectInitializer.initialize(application);

    // you would normally confirm the results of the initializer here
    expect(true).to.be.ok;
  });
});
