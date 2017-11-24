import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';



export default class Category extends EmberObject.extend({
    classNames: [],
    categoryId: null,
    top: null,
    height: null,
    divisions: 30,
    label: '',
    divisionMap: computed('divisions','height', {
      get() {
        let height = parseInt(this.get('height'));
        let divisions = parseInt(this.get('divisions'));
        let stepHeight = height / divisions;

        let result = A([0]);
        for (let i = 1; i < divisions; i++ ) {
          result.push(i * stepHeight);
        }
        return result;
      }
    }).readOnly()
}) {

  constructor(options = {}) {
    super();
    this.setProperties(options);

    console.log('CATEGORY DETECTED', this.get('label'));
  }

}
