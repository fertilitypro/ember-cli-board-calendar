import EmberObject from '@ember/object';

export default class Card extends EmberObject.extend({
    classNames: [],
    divStart: 0,
    divEnd: null,
    top: null,
    height: null,
    isFixed: false,
    componentName: 'ebc-simple-card'
}) {

  constructor(options = {}) {
    super();
    this.setProperties(options);
  }
}
