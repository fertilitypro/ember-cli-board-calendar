import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/ebc-header-cell';

export default Component.extend({
  layout,
  classNames: ['ebc-header-cell'],

  widthStyle: computed('width', {
    get() {
      return `width: ${this.get('width')}`;
    }
  })
});
