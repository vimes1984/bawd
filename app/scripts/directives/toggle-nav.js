'use strict';

angular.module('bawdApp')
  .directive('toggleNav', function () {
    return {
      templateUrl: 'views/toggle-nav.html',
      restrict: 'AE',
      controller: 'MenuCtrl',
      link: function(){
      }
    };
  });
