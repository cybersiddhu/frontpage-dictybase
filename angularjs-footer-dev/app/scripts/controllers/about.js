'use strict';

/**
 * @ngdoc function
 * @name angularjsFooterDevApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsFooterDevApp
 */
angular.module('angularjsFooterDevApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
