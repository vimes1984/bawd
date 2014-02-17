'use strict';
angular.module('bawdApp')
  .directive('home', function () {
  return {
      restrict: 'AE',
      controller: 'MenuCtrl',
      link: function postLink() {
      }
    };
});