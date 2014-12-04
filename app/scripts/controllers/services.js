'use strict';

angular.module('bawdApp')
  .controller('ServicesCtrl', function ($scope) {
    $scope.pantones = [
      {name:'Pantone intro', url:'views/services_pantone.html'},
      {name:'Pantone one', url:'views/services_pantone_one.html'},
      {name:'Pantone two', url:'views/services_pantone_teo.html'},
      {name:'Pantone three', url:'views/services_pantone_three.html'}
    ];
    $scope.pantoneconter = 0;
    $scope.template = $scope.pantones[0].url;
    $scope.PrevNext = 'open';
    $scope.mainmenulink = '';
  });
