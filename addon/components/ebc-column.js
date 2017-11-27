import Ember from 'ember';
import { computed } from '@ember/object';
import layout from '../templates/components/ebc-column';

export default Ember.Component.extend({
  classNames: ['ebc-column'],
  layout,
  column: null
});
