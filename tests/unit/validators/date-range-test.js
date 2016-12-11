import { module, test } from 'qunit';
import validateDateRange from 'opensource-challenge-client/validators/date-range';

module('Unit | Validator | date-range');

test('it exists', function(assert) {
  assert.ok(validateDateRange());
});
