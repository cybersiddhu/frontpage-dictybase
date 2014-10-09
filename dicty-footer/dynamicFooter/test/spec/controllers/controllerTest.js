'use strict';

describe('dictyFooter controllers', function () {

  describe('dictyFooterList', function() {

    // load the controller's module
    beforeEach(module('dictyFooterApp'));
      var number = 6;
      it('should create the list of main menu with '+number+' elements', inject(function($controller) {
        var scope ={},
        ctrl = $controller('dictyFooterCtrl', {$scope:scope} );
        expect(scope.sections.length).toBe(number);
      }));
  });
});
