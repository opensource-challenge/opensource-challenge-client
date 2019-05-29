import { Factory } from 'ember-cli-mirage'
import faker from 'faker'

export default Factory.extend({
  accessToken: () => faker.random.alphaNumeric(32),
  tokenType: 'Bearer',
  expiresIn: faker.date.future,
})
