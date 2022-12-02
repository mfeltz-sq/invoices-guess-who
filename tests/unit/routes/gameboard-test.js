import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | gameboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:gameboard');
    assert.ok(route);
  });
});
