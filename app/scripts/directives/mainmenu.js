'use strict';
/*global $:false */
angular.module('bawdApp')
  .directive('mainmenudir', function () {
    return {
      restrict: 'AE',
      controller: 'MenuCtrl'
    };
  })
  .directive('eatClick', function() {
    return function(scope, element) {
        $(element).click(function(event) {
            event.preventDefault();
          });
      };
  });