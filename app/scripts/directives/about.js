'use strict';
/*global $:false */
angular.module('bawdApp')
  .directive('about', function () {
    return {
      restrict: 'AE',
      link: function postLink($scope) {
				$scope.PrevNext = 'open';
				$scope.mainmenulink = '';
				$('.top_left_logo.white  img').css('position', 'fixed');
				$('#focus_force').focus();
      }
    };
  });
