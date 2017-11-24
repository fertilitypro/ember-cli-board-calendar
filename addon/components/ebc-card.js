import Component from '@ember/component';
import layout from '../templates/components/ebc-card';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['ebc-card'],
  layout,
  attributeBindings: ['customStyle:style'],

  getDivisionTop(divisionMap = [], startDivision = 0) {
    return divisionMap[startDivision];
  },

  getCalculatedHeight(divisionMap = [], top = 0, endDivision = null) {
     let endPosition = divisionMap[endDivision];
     return endPosition - top;
  },

  top: computed('category.{top,divisionMap}', 'card.divStart', {
    get() {
      let divStart = this.get('card.divStart');
      let divisionMap = this.get('category.divisionMap');
      let top = this.get('category.top');

      return this.get('getDivisionTop')(divisionMap, divStart) + top;
    }
  }),

  height: computed('category.{height,divisionMap,top}', 'top', 'card.divEnd', {
    get() {
      let divEnd = this.get('card.divEnd');
      let divisionMap = this.get('category.divisionMap');
      let top = this.get('top') - this.get('category.top');

      return this.get('getCalculatedHeight')(divisionMap, top, divEnd);
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
      console.log('ACAAAAAAAA', categoryId, this.get('categories').findBy('categoryId', categoryId));
      return this.get('categories').findBy('categoryId', categoryId);
    }
  })
});
