'use strict';

describe('Controller: ProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('bawdApp'));

  var ProjectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectCtrl = $controller('ProjectCtrl', {
      $scope: scope
    });
  }));

});
