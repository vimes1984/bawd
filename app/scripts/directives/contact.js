'use strict';
angular.module('bawdApp')
  .directive('contact', function () {
    return {
      templateUrl: 'views/pantone-inner-contact.html',
      restrict: 'AE',
      link: function postLink() {
      }
    };
  });
