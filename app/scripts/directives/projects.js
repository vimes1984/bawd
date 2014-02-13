'use strict';

angular.module('bawdApp')
  .directive('projects', function () {
    return {
      templateUrl: 'views/pantone-inner-project.html',
      restrict: 'AE',
      link: function postLink($scope, element) {
				$scope.PrevNext = 'open';
				$scope.mainmenulink = '';
				$('.top_left_logo.white  img').css('position', 'fixed');
				$('#focus_force').focus();
      }
    };
  });
