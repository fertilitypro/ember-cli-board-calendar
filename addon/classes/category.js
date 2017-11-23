import EmberObject from '@ember/object';

export default class Category extends EmberObject.extend({
    options: null
}) {
 
  constructor(options = {}) {
    super();
    this.set('options', options);

    console.log('CATEGORY DETECTED', options.label);    
  }
}
