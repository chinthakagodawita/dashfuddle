import { moduleForModel, test } from 'ember-qunit';

moduleForModel('unfuddle-project', 'Unit | Model | unfuddle project', {
  // Specify the other units that are required for this test.
  needs: ['model:unfuddle-status', 'model:unfuddle-ticket']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
