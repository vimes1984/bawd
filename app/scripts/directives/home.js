'use strict';

angular.module('bawdApp')
  .directive('home', function () {
  return {
      templateUrl: 'views/pantone-inner-home.html',
      restrict: 'AE',
      link: function postLink($scope, element) {
				$scope.PrevNext = 'open';
				$scope.mainmenulink = '';
				$('.top_left_logo.white  img').css('position', 'fixed');
				$('#focus_force').focus();
      }
    };
  });
