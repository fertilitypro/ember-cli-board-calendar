import Component from '@ember/component';
import layout from '../templates/components/ebc-category';

export default Component.extend({
  classNames: ['ebc-category'],
  layout,


  didInsertElement() {
    this._super(...arguments);
    let position = this.$().position();
    let height = this.$().outerHeight();


    this.get('category').setProperties({
      top: position.top,
      height
    });
  }
});
