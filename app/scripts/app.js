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
    $scope.menu = 'views/menu.html';
    $scope.pantoneMenu =  'views/pantone_menu.html';
    $(document).ready(function ($) {
      $('.page_cont_wrap').css('border', '10px solid #aaFFFF');
    });
  });
