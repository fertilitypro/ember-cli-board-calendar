import EmberObject from '@ember/object';

export default class Category extends EmberObject.extend({
  classNames: [],
  categoryId: null,
  divisions: 30,
  top: null,
  height: '40px',
  borderTopWidth: null,
  borderBottomWidth: null,
  label: '',
  isFixed: false
}) {

  constructor(options = {}, categoryDivisions = 30) {
    super();
    this.setProperties(options);
    this.set('divisions', categoryDivisions);
  }
}
