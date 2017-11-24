import Component from '@ember/component';
import layout from '../templates/components/ebc-category';

export default Component.extend({
  classNames: ['ebc-category'],
  layout,


  didInsertElement() {
    this._super(...arguments);
    let offset = this.$().offset();
    let height = this.$().outerHeight();

    this.get('category').setProperties({
      top: offset.top,
      height
    });
  }
});
