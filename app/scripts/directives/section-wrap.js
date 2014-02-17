'use strict';

angular.module('bawdApp')
  .directive('sectionWrap', function () {
    return {
      templateUrl: 'views/section-wrap.html',
      restrict: 'E',
      link: function postLink() {
      }
    };
  });
