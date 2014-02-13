'use strict';
/*global $:false */
angular.module('bawdApp')
  .directive('about', function () {
    return {
      templateUrl: 'views/pantone-inner.html',
      restrict: 'AE',
      link: function postLink($scope, element) {
				$scope.PrevNext = 'open';
				$scope.mainmenulink = '';
				$('.top_left_logo.white  img').css('position', 'fixed');
				$('#focus_force').focus();
      }
    };
  });
