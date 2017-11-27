import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';



export default class Category extends EmberObject.extend({
  classNames: [],
  categoryId: null,
  divisions: 30,
  top: null,
  height: null,
  label: ''
}) {

  constructor(options = {}, categoryDivisions = 30) {
    super();
    this.setProperties(options);
    this.set('divisions', categoryDivisions);

    console.log('CATEGORY DETECTED', this.get('label'));
  }
}
