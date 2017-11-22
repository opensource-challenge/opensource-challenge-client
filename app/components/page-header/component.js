import Ember from 'ember'

const { Component, inject } = Ember

export default Component.extend({
  tagName: '',
  session: inject.service(),
  menuItems: [
    {
      title: 'Adventskalender',
      route: 'index',
      currentWhen: 'index day post-contribution',
    },
    {
      title: 'About',
      route: 'about',
    },
    {
      title: 'Archiv',
      route: 'archive',
      currentWhen: 'archive challenge',
    },
    {
      title: 'Contributors',
      route: 'contributors',
    },
  ],
})
