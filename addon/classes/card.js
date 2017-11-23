import EmberObject from '@ember/object';

export default class Card extends EmberObject.extend({
    options: null
}) {
 
  constructor(options = {}) {
    super();
    this.set('options', options);

    console.log('Card DETECTED');
  }
}
