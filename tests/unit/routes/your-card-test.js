import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | your-card', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:your-card');
    assert.ok(route);
  });
});
