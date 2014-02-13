'use strict';

angular.module('bawdApp')
  .directive('toggleNav', function () {
    return {
      templateUrl: 'views/toggle-nav.html',
      restrict: 'AE',
      link: function postLink($scope, $el) {
      	$scope.mainmenulink = '';
      	$scope.togglethis = function togglethis(){
      		$scope.mainmenulink = 'views/menu.html';
      		$scope.openclosemenu = 'open_nav';
      	};

      }
    };
  });
