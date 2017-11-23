import Ember from 'ember';
import layout from '../templates/components/ebc-header';

export default Ember.Component.extend({
  classNames: ['ebc-header'],  
  layout,
  columns: null,

  init() {
    this._super(...arguments);
    console.log('COLUMNS COUNT', this.get('columns.firstObject'));
  }
});
