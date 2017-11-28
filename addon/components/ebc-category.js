import $ from 'jquery';
import Ember  from 'ember'; //TODO: CHange this to the namespace
import Component from '@ember/component';
import layout from '../templates/components/ebc-category';

export default Component.extend({
  classNames: ['ebc-category'],
  layout,
  repaint(){
    let position = this.$().position();
    let height = this.$().innerHeight();
    let borderTopWidth = this.$().css('border-top-width');

    this.get('category').setProperties({
      top: position.top + borderTopWidth,
      height
    });
  },
  didInsertElement() {
    this._super(...arguments);
    this.repaint();
    $(window).on('resize', this.repaint());
  }
});
