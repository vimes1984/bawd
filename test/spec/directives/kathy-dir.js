'use strict';

describe('Directive: KathyDir', function () {

  // load the directive's module
  beforeEach(module('bawdApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-kathy-dir></-kathy-dir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the KathyDir directive');
  }));
});
