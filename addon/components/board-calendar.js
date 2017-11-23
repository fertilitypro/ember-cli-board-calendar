import Ember from 'ember';

const { Component, A } = Ember;

import layout from '../templates/components/board-calendar';

const BoardCalendar = Component.extend({
  layout,
  boardActions: A(),
  board: null,
  rows: A(),
  header: A(),
  columns: A(),
  
});

BoardCalendar.reopenClass({
  positionalParams: ['board']
});

export default BoardCalendar;