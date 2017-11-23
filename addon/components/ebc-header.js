import Ember from 'ember';
import layout from '../templates/components/ebc-header';

export default Ember.Component.extend({
  layout,
  classNames: ['ebc-header'],
  columns: null,

  init() {
    this._super(...arguments);
    console.log('COLUMNS COUNT', this.get('columns.firstObject'));
  }
});
