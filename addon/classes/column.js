import { A } from '@ember/array';
import EmberObject from '@ember/object';
import Card from 'ember-cli-board-calendar/classes/card';

export default class Column extends EmberObject.extend({
    classNames: [],
    columnId: null,
    cards: [],
    width: '100px',
    label: '',
    showLabel: true
}) {
  constructor(options = {}) {
    super();
    this.setProperties(options);
    this.set('cards', Column.createCards(options.cards));
  }

  static createCard(card = null) {
    return new Card(card);
  }

  static createCards(cards = []) {
    return A(cards.map((c) => Column.createCard(c)));
  }
}
