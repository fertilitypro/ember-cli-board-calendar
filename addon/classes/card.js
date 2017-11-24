import EmberObject from '@ember/object';

export default class Card extends EmberObject.extend({
    classNames: [], 
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
