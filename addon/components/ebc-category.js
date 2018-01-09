import $ from 'jquery';
import Component from '@ember/component';
import layout from '../templates/components/ebc-category';

export default Component.extend({
  classNames: ['ebc-category'],
  layout,
  repaint(){
    let position = this.$().position();
    let height = Math.round(parseInt(this.$().innerHeight()));
    let borderTopWidth = Math.round(parseInt(this.$().css('border-top-width')));
    let borderBottomWidth = Math.round(parseInt(this.$().css('border-bottom-width')));
    this.get('category').setProperties({
      top: position.top + this.$().parents('.ebc-board-container').scrollTop(),
      height: height,
      borderTopWidth,
      borderBottomWidth
    });
  },
  didInsertElement() {
    this._super(...arguments);
    this.repaint();
    $(window).on('resize', this.repaint());
  },

  willDestroy() {
    this._super(...arguments);
    $(window).off('resize');
  }
});
