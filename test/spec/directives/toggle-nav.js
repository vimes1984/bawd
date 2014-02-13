'use strict';

describe('Directive: toggleNav', function () {

  // load the directive's module
  beforeEach(module('bawdApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<toggle-nav></toggle-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the toggleNav directive');
  }));
});
