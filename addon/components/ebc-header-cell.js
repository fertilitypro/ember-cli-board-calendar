import Component from '@ember/component';
import layout from '../templates/components/ebc-header-cell';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['ebc-header-cell'],
  attributeBindings: ['customStyle:style'],
  customStyle: computed('columnWidth', {
    get() {
      return htmlSafe(`min-width:${this.get('columnWidth')};`);
    }
  })
});
