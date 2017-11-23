
import { A } from '@ember/array';
import EmberObject, { computed, get } from '@ember/object';
import Category from 'ember-cli-board-calendar/classes/category';
import Column from 'ember-cli-board-calendar/classes/column';
import { isNone } from '@ember/utils';

export default class Board extends EmberObject.extend({
  
}) {
 
  constructor(columns = [], rows = []) {
    super();

    this.setProperties({
      columns: Board.createColumns(columns),
      categories: Board.createCategories(rows)
    });
  }

  static createColumn(column = null) {
    return new Column(column);
  }

  static createCategory(category = null) {
    return new Category(category);
  }

  static createColumns(columns = []) {
    return columns.map((c) => Board.createCategory(c));     
  }

  static createCategories(categories = []) {
    return categories.map((c) => Board.createColumn(c)); 
  }
}
