
import { A } from '@ember/array';
import EmberObject, { computed, get } from '@ember/object';
import RSVP  from 'rsvp';
import Category from 'ember-cli-board-calendar/classes/category';
import Column from 'ember-cli-board-calendar/classes/column';
import { isNone } from '@ember/utils';

export default class Board extends EmberObject.extend({
  loading: true,
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
    return new Category(category);
  }

  static createColumns(columns = []) {
    return A(columns.map((c) => Board.createColumn(c)));
  }

  static createCategories(categories = []) {
    return A(categories.map((c) => Board.createCategory(c)));
  }
}
