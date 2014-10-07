'use strict';

var phonecatApp = angular.module('dictyFooterApp', []);

phonecatApp.controller('dictyFooterCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('links.json').success(function(data) {
      $scope.sections = data;
    });

    $scope.title = 'Dynamic Footer';
}]);
