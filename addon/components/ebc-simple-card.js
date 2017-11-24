import Ember from 'ember';

const { Component } = Ember;

import layout from '../templates/components/ebc-simple-card';

export default Component.extend({
  classNames: ['ebc-simple-card'],
  layout,
  displayText: 'This is a card',

  actions: {
    onCardClick() {
      this.get('boardActions.onCardClick')();
    }
  }
});
