import Ember from 'ember';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/ebc-column';

export default Ember.Component.extend({
  classNames: ['ebc-column'],
  layout,
  column: null,
  attributeBindings: ['customStyle:style'],
  isFixed: false,
  customStyle: computed('column.width', 'board.columnHeight', 'board.fixedColumnHeight', {
    get() {
      let height = this.get('isFixed') ? this.get('board.fixedColumnHeight') : this.get('board.columnHeight');
      return htmlSafe(`min-width:${this.get('column.width')};height:${height}px`);
    }
  }),

  cards: computed('column.cards', 'isFixed', {
    get() {
      return this.get('column.cards').filterBy('isFixed', this.get('isFixed'));
    }
  }),

  click(event) {
    this.get('onCellClick')(this.get('column'), event);
  }
});
