import Ember from 'ember';
import layout from '../templates/components/ebc-column';

export default Ember.Component.extend({
  classNames: ['ebc-column'],  
  layout,
  column: null
});
