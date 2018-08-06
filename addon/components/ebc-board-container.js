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
  actions: {
    cellClick(column, event){
      let board = this.get('board');
      let categories = this.get('isFixed') ? board.get('fixedCategories') : board.get('regularCategories');
      let offsetY = event.pageY + this.$().scrollTop() - Math.floor(this.$().offset().top)
      let catHeight = board.get('columnHeight') / categories.get('length');
      let catIndex = Math.floor(offsetY / catHeight);
      let category = categories.objectAt(catIndex);

      this.get('boardActions.onSelectCell')(column, category);
    }
  },
  layout
});
