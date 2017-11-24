import EmberObject from '@ember/object';

export default class Card extends EmberObject.extend({
    classNames: [],
    divStart: 0,
    divEnd: null,
    zIndex: 1,
    top: null,
    height: null,
    componentName: 'ebc-simple-card'
}) {

  constructor(options = {}) {
    super();
    this.setProperties(options);
    console.log('Card DETECTED');
  }
}
