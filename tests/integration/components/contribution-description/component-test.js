import { expect } from 'chai'
import { it, describe } from 'mocha'
import { setupRenderingTest } from 'ember-mocha'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'
import { initialize } from '../../../../initializers/register-showdown-extensions'

describe('Integration | Component | contribution description', function(hooks) {
  initialize()

  setupRenderingTest(hooks)

  it('renders', async function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#contribution-description}}
    //     template content
    //   {{/contribution-description}}
    // `);

    await render(hbs`{{contribution-description}}`)
    expect(this.$()).to.exist
  })
})
