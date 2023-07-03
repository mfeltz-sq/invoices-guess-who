import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  routerService: service('router'),

  @action openPersonWindow() {
    const url = this.get('routerService').urlFor('your-card')
    window.open(url, 'your card', 'height=350,width=350');
  }
})
