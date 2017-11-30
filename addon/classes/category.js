import EmberObject from '@ember/object';

export default class Category extends EmberObject.extend({
  classNames: [],
  categoryId: null,
  divisions: 30,
  top: null,
  height: null,
  borderTopWidth: null,
  borderBottomWidth: null,
  label: ''
}) {

  constructor(options = {}, categoryDivisions = 30) {
    super();
    this.setProperties(options);
    this.set('divisions', categoryDivisions);
  }
}
