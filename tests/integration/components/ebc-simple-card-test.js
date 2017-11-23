import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ebc-simple-card', 'Integration | Component | ebc simple card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ebc-simple-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ebc-simple-card}}
      template block text
    {{/ebc-simple-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
