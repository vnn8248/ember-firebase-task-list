/* eslint-disable prettier/prettier */
import EmberRouter from '@ember/routing/router';
import config from 'ember-firebase-task-list/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tasks', function () {
    this.route('new');
  });
});
