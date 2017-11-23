
import EmberObject from '@ember/object';

export default class Column extends EmberObject.extend({
    options: null
}) {
 
  constructor(options = {}) {
    super();
    this.set('options', options);

    console.log('COLUMN DETECTED', options.label);
  }
}
