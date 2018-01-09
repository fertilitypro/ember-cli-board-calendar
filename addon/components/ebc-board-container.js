import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/ebc-board-container';

export default Component.extend({
  classNameBindings: ['isFixed:ebc-board-fixed-container:ebc-board-container'],
  attributeBindings: ['customStyle:style'],
  isFixed: false,

  customStyle: computed('board.containerWidth', {
    get() {
      return htmlSafe(`min-width:${this.get('board.containerWidth')}px`);
    }
  }),

  columnsContainerHeight: computed('board.columnHeight', 'board.fixedColumnHeight', 'isFixed', {
    get() {
      let isFixed = this.get('isFixed');
      let height = isFixed ? `${this.get('board.fixedColumnHeight')}px;` : `${this.get('board.columnHeight')}px;`
      return htmlSafe(`height: ${height}`);
    }
  }),
  layout
});
