import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/ebc-board-container';

export default Component.extend({
  classNames: ['ebc-board-container'],
  attributeBindings: ['customStyle:style'],

  customStyle: computed('board.containerWidth', {
    get() {
      return htmlSafe(`width:${this.get('board.containerWidth')}px`);
    }
  }),

  columnsContainerHeight: computed('board.columnHeight', {
    get() {
      return htmlSafe(
        `height: ${this.get('board.columnHeight')}px;`
      );
    }
  }),
  layout
});
