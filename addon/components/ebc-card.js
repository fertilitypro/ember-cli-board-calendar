import Component from '@ember/component';
import layout from '../templates/components/ebc-card';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['ebc-card'],
  layout,
  categories: computed.alias('board.categories'),
  totalDivisionsMap: computed.alias('board.totalDivisionsMap'),
  attributeBindings: ['customStyle:style'],

  // Gets the index
  getCardStartIndex() {
    let categoryDivisions = this.get('board.categoryDivisions');
    let divStart = this.get('card.divStart');
    let catIndex = this.get('categories').indexOf(this.get('category'));
    let catStartIndex = (catIndex * categoryDivisions);
    return divStart + catStartIndex;
  },

  top: computed('totalDivisionsMap.[]', 'card.divStart', 'board.categoryDivisions', 'category', {
    get() {
      return this.get('totalDivisionsMap')[this.getCardStartIndex()] + this.get('category.borderTopWidth');
    }
  }),

  height: computed('totalDivisionsMap.[]', 'card.divEnd', 'top', {
    get() {
      let divEnd = this.get('card.divEnd');
      let totalDivisionsMap = this.get('totalDivisionsMap');

      let bottomIndex = this.getCardStartIndex() + divEnd;
      let mapBound = totalDivisionsMap.get('length') - 1;
      if (bottomIndex > mapBound){
        console.warn('[ Out of bounds of totalDivisionMap ] Falling back to the last item');
        bottomIndex = mapBound;
      }

      //HOTFIX FIX THIS -30
      let height = totalDivisionsMap[bottomIndex] - this.get('category.borderBottomWidth') - this.get('top') - 30;
      this.set('card.height', height);
      return height;

    }
  }),

  customStyle: computed('top', 'height', {
    get() {
      let top = this.get('top');
      let height = this.get('height') < 30 ? 30 : this.get('height');
      return htmlSafe(`top:${top}px; height:${height}px;`);
    }
  }),
  category: computed('card.categoryId', 'categories.[]', {
    get() {
      let categoryId = this.get('card.categoryId')
      return this.get('categories').findBy('categoryId', categoryId);
    }
  })
});
