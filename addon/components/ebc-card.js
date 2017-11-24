import Component from '@ember/component';
import layout from '../templates/components/ebc-card';

export default Component.extend({
  classNames: ['ebc-card'],
  layout,
  top: null,
  height: null,

  willRender() {
    this._super(...arguments);
    let categories = this.get('categories');
  }
});
