import Component from '@ember/component';
import people from 'invoices-guess-who/utils/person-data';

function getRandomPerson() {
  const randomIndex = Math.floor(Math.random() * people.length);
  return people[randomIndex];
}

export default Component.extend({
  classNames: ['guessing-card'],

  init(...args) {
    this._super(...args);

    this.set('selectedPerson', getRandomPerson());
  },

  selectedPerson: null,

  actions: {
    randomizePerson() {
      this.set('selectedPerson', getRandomPerson());
    }
  }
});
