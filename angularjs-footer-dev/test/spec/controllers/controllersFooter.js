'use strict';

describe('dictyFooter controllers', function () {

  describe('dictyFooterList', function() {

    // load the controller's module
    beforeEach(module('dictyFooterApp'));

      it('should create the list of main menu with 6 elements', inject(function($controller) {
        var scope ={},
        ctrl = $controller('dictyFooterList', {$scope:scope} );
        expect(scope.sections.length).toBe(6);
      }));
  });
});
