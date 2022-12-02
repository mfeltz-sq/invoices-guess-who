import Controller from '@ember/controller';
import { action } from '@ember/object';
// import config from 'invoices-guess-who/config/environment';

export default class GameboardController extends Controller {
  @action openPersonWindow() {
    window.open(`/your-card`, 'your card', 'height=350,width=350');
  }
}
