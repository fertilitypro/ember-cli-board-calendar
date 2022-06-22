import $ from 'jquery';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/ebc-category';

export default Component.extend({
  classNames: ['ebc-category'],
  attributeBindings: ['customStyle:style', 'dataCy:data-cy'],
  layout,
  customStyle: computed('category.height', {
    get() {
      let height = parseInt(this.get('category.height'));
      return htmlSafe(`height:${height}px`);
    }
  }),

  dataCy: alias('category.dataCy'),

  repaint(){
    let position = this.$().position();
    let borderTopWidth = Math.round(parseInt(this.$().css('border-top-width')));
    let borderBottomWidth = Math.round(parseInt(this.$().css('border-bottom-width')));
    this.get('category').setProperties({
      top: position.top + this.$().parents('.ebc-board-container').scrollTop(),
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
