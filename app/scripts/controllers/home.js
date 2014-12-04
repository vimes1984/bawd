'use strict';

angular.module('bawdApp')
  .controller('HomeCtrl', function ($scope) {
  $scope.togglehideshow = true;

  $scope.mainmenulink = 'views/menu.html';
  $scope.templatehome = 'views/pantone-inner-home.html';
  $scope.templatecontact = 'views/pantone-inner-contact.html';
  $scope.templateprojects = 'views/pantone-inner-project.html';
  $scope.templateabout = 'views/pantone-inner.html';
});