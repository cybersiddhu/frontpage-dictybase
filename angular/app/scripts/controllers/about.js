'use strict';

/**
 * @ngdoc function
 * @name dictyFrontpageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dictyFrontpageApp
 */
angular.module('dictyFrontpageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
