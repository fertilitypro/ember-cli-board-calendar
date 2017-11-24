import EmberObject from '@ember/object';

export default class Category extends EmberObject.extend({
    classNames: [],
    top: null,
    height: null,
    divisions: 1,
    label: ''
}) {
 
  constructor(options = {}) {
    super();
    this.setProperties(options);

    console.log('CATEGORY DETECTED', this.get('label'));    
  }

}
