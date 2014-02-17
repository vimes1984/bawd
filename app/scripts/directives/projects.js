'use strict';
angular.module('bawdApp')
  .directive('projects', function () {
    return {
      templateUrl: 'views/pantone-inner-project.html',
      restrict: 'AE',
      controller: 'MenuCtrl',
      link: function postLink(){
      }
    };
  });
