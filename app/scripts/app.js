'use strict';

angular.module('bawdApp', [
  'ngCookies',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'chieffancypants.loadingBar'
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
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .when('/experiments', {
        templateUrl: 'views/experiments.html',
        controller: 'ExperimentsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('appCtrl', function (){
})
  .run(function($rootScope, cfpLoadingBar) {
  $rootScope.$on('$routeChangeStart', function() {
    cfpLoadingBar.start();
  });

  $rootScope.$on('$routeChangeSuccess', function() {
    cfpLoadingBar.complete();
  });
  // Do the same with $routeChangeError
});