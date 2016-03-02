import { moduleForModel, test } from 'ember-qunit';

moduleForModel('unfuddle-ticket', 'Unit | Model | unfuddle ticket', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
