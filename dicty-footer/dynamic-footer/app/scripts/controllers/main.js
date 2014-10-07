'use strict';

/**
 * @ngdoc function
 * @name angularjsFooterDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsFooterDevApp
 */
angular.module('angularjsFooterDevApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
