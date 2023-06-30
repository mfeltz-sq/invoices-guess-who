import Component from '@ember/component';
import getPeople from 'invoices-guess-who/utils/person-data';

function getRandomPerson(people) {
  const randomIndex = Math.floor(Math.random() * people.length);
  return people[randomIndex];
}

export default Component.extend({
  classNames: ['guessing-card'],

  init(...args) {
    this._super(...args);

    getPeople().then(result => {
      this.set('people', result);
      this.set('selectedPerson', getRandomPerson(result));
    })
  },

  selectedPerson: null,

  actions: {
    randomizePerson() {
      this.set('selectedPerson', getRandomPerson(this.get('people')));
    }
  }
});
