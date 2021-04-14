import Component from '@ember/component';
import people from 'invoices-guess-who/utils/person-data';

export default Component.extend({
  classNames: ['person-grid'],

  people,
});
