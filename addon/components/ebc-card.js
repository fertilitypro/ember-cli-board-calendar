import Component from '@ember/component';
import layout from '../templates/components/ebc-card';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['ebc-card'],
  layout,
  categories: computed.alias('board.categories'),
  totalDivisionsMap: computed.alias('board.totalDivisionsMap'),
  attributeBindings: ['customStyle:style'],

  getDivisionTop(divisionMap = [], startDivision = 0) {
    return divisionMap[startDivision];
  },

  getCalculatedHeight(divisionMap = [], top = 0, endDivision = null) {
     let endPosition = divisionMap[endDivision];
     return endPosition - top;
  },

  top: computed('category.{divisionMap}', 'card.divStart', {
    get() {
      let divStart = this.get('card.divStart');
      let divisionMap = this.get('category.divisionMap');
      return this.get('getDivisionTop')(divisionMap, divStart);
    }
  }),

  height: computed('category.{height,top}','totalDivisionsMap.[]', 'top', 'card.divEnd', {
    get() {
      let divEnd = this.get('card.divEnd');
      let totalDivisionsMap = this.get('totalDivisionsMap');
      let top = this.get('top');
      return this.get('getCalculatedHeight')(totalDivisionsMap, top, divEnd);
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
