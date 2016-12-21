import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Ember from 'ember';
import RouterBurgermenuInitializer from 'opensource-challenge-client/initializers/router-burgermenu';

describe('Unit | Initializer | router burgermenu', function() {
  let application;

  beforeEach(function() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  });

  // Replace this with your real tests.
  it('works', function() {
    RouterBurgermenuInitializer.initialize(application);

    // you would normally confirm the results of the initializer here
    expect(true).to.be.ok;
  });
});
