import Component from '@ember/component';
import layout from '../templates/components/ebc-header';

export default Component.extend({
  layout,
  classNames: ['ebc-header'],
  classNameBindings: ['fixHeader:ebc-header__fixed'],
  columns: null,
  fixHeader: false
});
