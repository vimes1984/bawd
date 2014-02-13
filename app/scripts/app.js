'use strict';
/*global $:false */
angular.module('bawdApp', [
  'ngCookies',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('appCtrl', function ($scope){
    $('.page_cont_wrap').css('border', '10px solid #2cd7ff');
 /*   $scope.pantonesAbout = [
        {name:'Pantone intro', url:'views/pantone_about.html'},
        {name:'Pantone one', url:'views/about_patone_one.html'},
        {name:'Pantone two', url:'views/about_patone_two.html'},
        {name:'Pantone three', url:'views/about_patone_three.html'},
        {name:'Pantone four', url:'views/about_patone_four.html'},
        {name:'Pantone five', url:'views/about_patone_five.html'},

      ];
    $scope.pantonesProject = [
      {name:'Pantone intro', url:'views/pantone_project.html'},
      {name:'Pantone one', url:'views/projects_patone_one.html'},
      {name:'Pantone two', url:'views/projects_patone_two.html'},
      {name:'Pantone three', url:'views/projects_patone_three.html'},
      {name:'Pantone four', url:'views/projects_patone_four.html'},
      {name:'Pantone five', url:'views/projects_patone_five.html'},

    ];    */  
        function border(valueWidth, color){
          $('.page_cont_wrap').css('border', valueWidth+'px solid #'+color);
        }
        border(10, '2cd7ff');      
  });