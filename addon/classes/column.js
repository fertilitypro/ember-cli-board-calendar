import { A } from '@ember/array';
import EmberObject from '@ember/object';
import { merge } from '@ember/polyfills';
import Card from 'ember-cli-board-calendar/classes/card';

export default class Column extends EmberObject.extend({
    columnId: null,
    classNames: null,
    width: '100px',
    label: '',
    showLabel: true
}) {
  constructor(options = {}) {
    super();
    this.setProperties(options);

    console.log('COLUMN DETECTED', options.label, this.get('showLabel'));

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
