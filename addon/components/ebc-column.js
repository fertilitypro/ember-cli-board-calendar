import Ember from 'ember';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/ebc-column';

export default Ember.Component.extend({
  classNames: ['ebc-column'],
  layout,
  column: null,
  attributeBindings: ['customStyle:style'],
  customStyle: computed('column.width', 'board.columnHeight', {
    get() {
      return htmlSafe(
        `min-width:${this.get('column.width')};height: ${this.get('board.columnHeight')}px;`
      );
    }
  })
});
