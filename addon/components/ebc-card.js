import Component from '@ember/component';
import layout from '../templates/components/ebc-card';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['ebc-card'],
  layout,
  categories: computed.alias('board.categories'),
  totalDivisionsMap: computed.alias('board.totalDivisionsMap'),
  attributeBindings: ['customStyle:style'],

  getCalculatedHeight(divisionMap = [], top = 0, endDivision = null) {
     let endPosition = divisionMap[endDivision];
     return endPosition - top;
  },

  getCardStartIndex() {
    let categoryDivisions = this.get('board.categoryDivisions');
    let divStart = this.get('card.divStart');
    let catIndex = this.get('categories').indexOf(this.get('category'));
    let catStartIndex = (catIndex * categoryDivisions);
    return divStart + catStartIndex ;
  },

  top: computed('totalDivisionsMap.[]', 'card.divStart', {
    get() {
      return this.get('totalDivisionsMap')[this.getCardStartIndex()];
    }
  }),

  height: computed('totalDivisionsMap.[]', 'card.divEnd', 'top', {
    get() {
      let divEnd = this.get('card.divEnd');
      let totalDivisionsMap = this.get('totalDivisionsMap');
      console.log('TOTALDIVISON',  this.get('totalDivisionsMap'));

      console.log('ENDCARD', totalDivisionsMap[this.getCardStartIndex() + divEnd]);
      console.log('INDEXTOPCAT', this.getCardStartIndex() + divEnd);
      console.log('TOP',  this.get('top'));

      return totalDivisionsMap[this.getCardStartIndex() + divEnd] - this.get('top') ;

    }
  }),

  customStyle: computed('top', 'height', {
    get() {
      let top = this.get('top');
      let height = this.get('height');
      return `top:${top}px; height:${height}px;`;
    }
  }),
  category: computed('card.categoryId', 'categories.[]', {
    get() {
      let categoryId = this.get('card.categoryId')
      return this.get('categories').findBy('categoryId', categoryId);
    }
  })
});
