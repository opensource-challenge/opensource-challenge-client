import { Factory, faker } from 'ember-cli-mirage'

export default Factory.extend({
  accessToken: () => faker.random.alphaNumeric(32),
  tokenType: 'Bearer',
  expiresIn: faker.date.future,
})
