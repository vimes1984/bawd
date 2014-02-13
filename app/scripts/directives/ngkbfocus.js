'use strict';

angular.module('bawdApp')
  .directive('ngkbfocus', function () {
    return {
      restrict: 'AE',
      link: function postLink(scope, element) {
        element[0].focus();
      }
    };
  });
