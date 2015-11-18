import angular from 'angular';
import '../app-core/index';

import PicController from './controllers/pic.controller';

import PicService from './services/pic.service';

import isaacImage from './directives/pic.directive';

angular
  .module('app.pics', ['app.core'])
  .controller('PicController', PicController)
  .service('PicService', PicService)
  .directive('isaacImage', isaacImage)
;