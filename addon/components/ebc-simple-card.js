import Ember from 'ember';

const { Component } = Ember;

import layout from '../templates/components/ebc-simple-card';

export default Component.extend({
  layout,

  actions: {
    onCardClick() {
      this.get('boardActions.onCardClick')();
    }
  }
});
