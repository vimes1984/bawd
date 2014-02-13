'use strict';

angular.module('bawdApp')
  .directive('mainmenudir', function () {
    return {
      restrict: 'AE',
      link: function postLink($scope, $el, $rootScope) {
      	$scope.closemenu = function closemenu(){
      		$scope.$parent.mainmenulink = '';
      	};
      	$scope.closemenulink = function closemenulink(event, element){
      		    $scope.$parent.mainmenulink = '';
      	};
      	$scope.$on('$locationChangeStart', function(){
      		alert('test');
      		$scope.$apply(function(){
      		      		$scope.$parent.mainmenulink = '';
      		});
      	});
      }
    };
  })
  .directive('eatClick', function() {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
            event.preventDefault();
        });
    }
});
