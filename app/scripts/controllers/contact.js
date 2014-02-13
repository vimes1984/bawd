'use strict';

angular.module('bawdApp')
  .controller('ContactCtrl', function ($scope) {
  	  $scope.pantones = [
			{name:'Pantone intro', url:'views/pantone_about.html'},
			{name:'Pantone one', url:'views/about_patone_one.html'},
			{name:'Pantone two', url:'views/about_patone_two.html'},
			{name:'Pantone three', url:'views/about_patone_three.html'},
			{name:'Pantone four', url:'views/about_patone_four.html'},
			{name:'Pantone five', url:'views/about_patone_five.html'},

		];
  $scope.pantoneconter = 0;
  $scope.template = $scope.pantones[0].url;
  $scope.PrevNext = 'open';
  $scope.mainmenulink = '';

});