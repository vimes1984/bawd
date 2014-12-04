'use strict';
angular.module('bawdApp')
  .controller('ProjectCtrl', function ($scope) {
    $scope.pantones = [
      {name:'Pantone intro', url:'views/pantone_project.html'},
      {name:'Pantone one', url:'views/projects_pantone_one.html'},
      {name:'Pantone two', url:'views/projects_pantone_two.html'},
      {name:'Pantone three', url:'views/projects_pantone_three.html'},
      //{name:'Pantone four', url:'views/projects_pantone_four.html'},
     // {name:'Pantone five', url:'views/projects_pantone_five.html'},

    ];
    $scope.pantoneconter = 0;
    $scope.template = $scope.pantones[0].url;
    $scope.PrevNext = 'open';
    $scope.mainmenulink = '';
  });