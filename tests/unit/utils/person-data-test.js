import personData from 'invoices-guess-who/utils/person-data';
import { module, test } from 'qunit';

module('Unit | Utility | person-data', function() {

  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = personData();
    assert.ok(result);
  });
});
