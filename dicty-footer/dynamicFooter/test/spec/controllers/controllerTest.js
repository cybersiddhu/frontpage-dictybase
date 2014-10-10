'use strict';

describe('First clean test', function() {
  it('It contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});

describe('Testing the controller: dictyFooterCtrl', function() {
  // Load the main module
  beforeEach(module('dictyFooterApp'));

  var ctrl, scope;
  // Let's inject the $controller and the $rootScope services
  beforeEach(inject(function($controller,$rootScope) {
    scope = $rootScope.$new();
    ctrl  = $controller('dictyFooterCtrl', {$scope: scope});
  }));

  it('should access the title',
  function(){
    expect(scope.title).toEqual('Dynamic Footer (this is dynamic itself)');
  });

});


// describe("Unit Testing Basic Stuff", function() {

//   beforeEach(angular.mock.module('dictyFooterApp'));

//   it('should have a LoginCtrl controller', function() {
//     expect(dictyFooterApp.dictyFooterCtrl).toBeDefined();
//   });

// });

// describe('dictyFooter controllers', function () {

//   describe('dictyFooterList', function() {

//     // load the controller's module
//     beforeEach(module('dictyFooterApp'));
//       var number = 6;
//       it('should create the list of main menu with '+number+' elements', inject(function($controller) {
//         var scope ={},
//         ctrl = $controller('dictyFooterCtrl', {$scope:scope} );
//         expect(scope.sections.length).toBe(number);
//       }));
//   });
// });
