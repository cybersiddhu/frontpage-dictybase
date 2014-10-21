'use strict';

describe('Directive: dictyFooter', function () {

  // load the directive's module
  beforeEach(module('dictyFooterApp'));

  var element,scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dicty-footer></dicty-footer>');
    element = $compile(element)(scope);
  }));
});
