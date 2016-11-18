import Ember from 'ember'

const { Component, inject } = Ember

export default Component.extend({
  tagName: '',
  session: inject.service(),
  menuItems: [
    {
      title: 'Adventskalender',
      route: 'index',
      currentWhen: 'index day'
    },
    {
      title: 'About',
      route: 'about'
    },
    {
      title: 'Contributors',
      route: 'contributors'
    }
  ]
})
