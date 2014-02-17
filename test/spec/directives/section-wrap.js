'use strict';

describe('Directive: sectionWrap', function () {

  // load the directive's module
  beforeEach(module('bawdApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<section-wrap></section-wrap>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sectionWrap directive');
  }));
});
