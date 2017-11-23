import { A } from '@ember/array';
import EmberObject from '@ember/object';
import Card from 'ember-cli-board-calendar/classes/card';

export default class Column extends EmberObject.extend({
    options: null
}) {
  constructor(options = {}) {
    super();
    this.set('options', options);

    console.log('COLUMN DETECTED', options.label);

    this.setProperties({
      cards: Column.createCards(options.cards)
    })
  }

  static createCard(card = null) {
    return new Card(card);

  }

  static createCards(cards = []) {
    return A(cards.map((c) => Column.createCard(c))); 
  }
}
