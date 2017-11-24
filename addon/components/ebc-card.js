import Component from '@ember/component';
import layout from '../templates/components/ebc-card';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['ebc-card'],
  layout,
  attributeBindings: ['customStyle:style'],
  customStyle: computed('category.top', 'category.height', {
    get() {
      let top = this.get('category.top');
      let height = this.get('category.height');

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
