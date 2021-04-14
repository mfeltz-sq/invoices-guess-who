import Component from '@ember/component';

export default Component.extend({
  classNames: ['playing-card'],
  classNameBindings: ['isFlipped:playing-card--is-flipped'],

  isFlipped: false,
  click() {
    this.toggleProperty('isFlipped');
  },
});
