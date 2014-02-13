'use strict';

describe('Directive: about', function () {

  // load the directive's module
  beforeEach(module('bawdApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<about></about>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the about directive');
  }));
});
