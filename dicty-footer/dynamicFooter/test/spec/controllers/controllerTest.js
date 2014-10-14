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
    // var num = 6;
    expect(scope.title).toEqual('Dynamic Footer (this is dynamic itself)');
    expect(scope.sections.menus).not.toBeNull();
  });

});

describe('A very simple test', function() {
  var a;

  it('This is the test', function() {
    a = true;

    expect(a).toBe(true);
  });
});

// Writing it in a different way
describe ('Footer Controller, simple test', function() {

  //Define the items that will be exposed in beforeEach
  var controller, scope;

  // The setup that needs to be defined for each test
  beforeEach(module('dictyFooterApp'));

  beforeEach(inject(function($controller, $rootScope) {
       scope = $rootScope.$new();
       controller = $controller('dictyFooterCtrl', {
            $scope: scope
       });
  }));
});


// describe('Footer Controller, more complex', function() {
//     var scope, createController, httpBackend;
//      beforeEach(module('dictyFooterApp'));

//     beforeEach(inject(function($controller, $rootScope, $httpBackend) {
//         scope = $rootScope.$new();
//         httpBackend = $httpBackend;
        
//         createController = function() {
//             return $controller('dictyFooterCtrl', {
//                 $scope: scope,
//                 $http: $httpBackend
//             });
//         };
//     }));
    
//     it('sets correct initial values', function() {
//         httpBackend.expectGET('templates/links.json');
//         createController();
//         httpBackend.flush();
//     });
// });





// The working test when everything was loaded in the controller:
// 
// describe('dictyFooter controllers', function () {

//   describe('dictyFooterController', function() {
//     // load the controller's module
//     beforeEach(module('dictyFooterApp'));

//       it('should create the list of main menu with 6 elements', inject(function($controller) {
//         var scope ={};
//         var ctrl;
//         ctrl = $controller('dictyFooterController', {$scope:scope} );
//         expect(scope.sections.length).toBe(6);
//       }));
//   });
// });
