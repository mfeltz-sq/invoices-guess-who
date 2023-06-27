'use strict';

define("invoices-guess-who/tests/integration/components/guessing-card-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | guessing-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "xTYcYE0W",
        "block": "{\"symbols\":[],\"statements\":[[5,\"guessing-card\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WyLvaxkd",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"guessing-card\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("invoices-guess-who/tests/integration/components/person-card-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | person-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "UV2y3GXG",
        "block": "{\"symbols\":[],\"statements\":[[5,\"person-card\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "U2T7dFz9",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"person-card\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("invoices-guess-who/tests/integration/components/person-grid-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | person-grid', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Kc3JOcqe",
        "block": "{\"symbols\":[],\"statements\":[[5,\"person-grid\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "bXml4XDJ",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"person-grid\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("invoices-guess-who/tests/integration/components/playing-card-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | playing-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "E0KHZ0lc",
        "block": "{\"symbols\":[],\"statements\":[[5,\"playing-card\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0MUY3hgp",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"playing-card\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("invoices-guess-who/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/guessing-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/guessing-card.js should pass ESLint\n\n');
  });
  QUnit.test('components/person-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/person-card.js should pass ESLint\n\n');
  });
  QUnit.test('components/person-grid.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/person-grid.js should pass ESLint\n\n14:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('components/playing-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/playing-card.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/gameboard.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/gameboard.js should pass ESLint\n\n6:3 - Parsing error: Unexpected character \'@\' (null)');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/gameboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/gameboard.js should pass ESLint\n\n');
  });
  QUnit.test('routes/your-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/your-card.js should pass ESLint\n\n');
  });
  QUnit.test('utils/person-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/person-data.js should pass ESLint\n\n');
  });
});
define("invoices-guess-who/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('invoices-guess-who/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'invoices-guess-who/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('invoices-guess-who/templates/components/guessing-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'invoices-guess-who/templates/components/guessing-card.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('invoices-guess-who/templates/components/person-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'invoices-guess-who/templates/components/person-card.hbs should pass TemplateLint.\n\ninvoices-guess-who/templates/components/person-card.hbs\n  1:0  error  img tags must have an alt attribute  img-alt-attributes\n');
  });
  QUnit.test('invoices-guess-who/templates/components/person-grid.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'invoices-guess-who/templates/components/person-grid.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('invoices-guess-who/templates/components/playing-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'invoices-guess-who/templates/components/playing-card.hbs should pass TemplateLint.\n\ninvoices-guess-who/templates/components/playing-card.hbs\n  3:6  error  Incorrect indentation for `<PersonCard>` beginning at L3:C6. Expected `<PersonCard>` to be at an indentation of 4 but was found at 6.  block-indentation\n  4:2  error  Using an {{else}} block with {{unless}} should be avoided.  simple-unless\n');
  });
  QUnit.test('invoices-guess-who/templates/gameboard.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'invoices-guess-who/templates/gameboard.hbs should pass TemplateLint.\n\ninvoices-guess-who/templates/gameboard.hbs\n  7:10  error  Incorrect indentation for `Take turns asking yes or no questions to try and guess the other players card by process of elimination.\n        ` beginning at L7:C10. Expected `Take turns asking yes or no questions to try and guess the other players card by process of elimination.\n        ` to be at an indentation of 8 but was found at 10.  block-indentation\n');
  });
  QUnit.test('invoices-guess-who/templates/your-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'invoices-guess-who/templates/your-card.hbs should pass TemplateLint.\n\n');
  });
});
define("invoices-guess-who/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/guessing-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/guessing-card-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/person-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/person-card-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/person-grid-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/person-grid-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/playing-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/playing-card-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/gameboard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/gameboard-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/your-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/your-card-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/person-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/person-data-test.js should pass ESLint\n\n');
  });
});
define("invoices-guess-who/tests/test-helper", ["invoices-guess-who/app", "invoices-guess-who/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("invoices-guess-who/tests/unit/routes/gameboard-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | gameboard', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:gameboard');
      assert.ok(route);
    });
  });
});
define("invoices-guess-who/tests/unit/routes/your-card-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | your-card', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:your-card');
      assert.ok(route);
    });
  });
});
define("invoices-guess-who/tests/unit/utils/person-data-test", ["invoices-guess-who/utils/person-data", "qunit"], function (_personData, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | person-data', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _personData.default)();
      assert.ok(result);
    });
  });
});
define('invoices-guess-who/config/environment', [], function() {
  var prefix = 'invoices-guess-who';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('invoices-guess-who/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
