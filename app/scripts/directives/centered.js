'use strict';

angular.module('bawdApp')
  .directive('centered', function () {
  return {
		restrict : 'ECA',
		transclude : true,
		template : '<div class="angular-center-container"><div class="angular-centered" ng-transclude></div></div>'
	};
});