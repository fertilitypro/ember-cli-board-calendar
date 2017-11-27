import { A } from '@ember/array';
import EmberObject, { computed } from '@ember/object';
import RSVP  from 'rsvp';
import Category from 'ember-cli-board-calendar/classes/category';
import Column from 'ember-cli-board-calendar/classes/column';

export default class Board extends EmberObject.extend({
  loading: true,
  categoryDivisions: 30,
  categories: A(),
  columns: null,
  didResize: false,

  totalDivisionsMap: computed('didResize','categories.@each.{height,top}', {
    get() {
      let divisionsMap = A();
      this.get('categories').forEach((category) => {
        let height = parseInt(category.get('height'));
        let divisions = parseInt(this.get('categoryDivisions'));
        let stepHeight = height / divisions;
        let top = parseInt(category.get('top'));

        for (let i = 0; i < divisions; i++ ) {
          divisionsMap.push((i * stepHeight) + top);
        }
      });
      return divisionsMap;
    }
  })
}) {

  constructor(columns = [], categories = []) {
    super();

    new RSVP.Promise((resolve) => {
      let cats = Board.createCategories(categories);
      resolve(cats);
    }).then((cats) => {
      this.setProperties({
        categories: cats,
        columns: Board.createColumns(columns)
      });
    }).catch((error) => {
      console.error('Something happened', error);
    }).finally(() => {
      this.set('loading', false);
    });
  }

  static createColumn(column = null) {
    return new Column(column);
  }

  static createCategory(category = null) {
    return new Category(category, Board.categoryDivisions);
  }

  static createColumns(columns = []) {
    return A(columns.map((c) => Board.createColumn(c)));
  }

  static createCategories(categories = []) {
    return A(categories.map((c) => Board.createCategory(c)));
  }
}
