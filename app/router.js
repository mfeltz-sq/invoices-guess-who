import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('gameboard', { path: '/'});
  this.route('your-card');
});

Router.reopen({
  location: 'hash'
});

export default Router;
