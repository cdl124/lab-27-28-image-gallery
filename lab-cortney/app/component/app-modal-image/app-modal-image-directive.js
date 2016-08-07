'use strict';

const angular = require('angular');

angular.module('imageGallery').directive('appModalImage', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-modal-image.html'),
    // controller: 'AppModalImageController',
    // controllerAs: 'appModalImageCtrl',
    // bindToController: true,
    scope: {
      image: '=',
      close: '&'
    }
  };
});
