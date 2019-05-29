import { inject as service } from '@ember/service'
import Component from '@ember/component'
import { computed } from '@ember/object'

export default Component.extend({
  tagName: '',
  session: service(),
  menuItems: computed(() => [
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
  ]),
})
