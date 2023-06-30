import Component from '@ember/component';
import getPeople from 'invoices-guess-who/utils/person-data';

export default Component.extend({
  init(...args) {
    this._super(...args);
    getPeople().then(result => {
      this.set('people', result);
    });
  },

  classNames: ['person-grid'],

  people: []
});
