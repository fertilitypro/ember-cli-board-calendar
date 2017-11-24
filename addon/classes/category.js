import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';



export default class Category extends EmberObject.extend({
    classNames: [],
    top: null,
    height: null,
    divisions: 30,
    label: '',


    divisionMap: computed('divisions','height', {
      get() {
        let height = this.get('height');
        let divisions = this.get('divisions');
        console.log(height, divisions);
        let stepHeight = Math.floor(height / divisions);

        console.log(stepHeight);
        
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
