'use strict';

/* Controllers */

var dictycatApp = angular.module('dictyFooterApp', []);

dictycatApp.controller('dictyFooterList', function($scope) {
  $scope.title = 'Angular dictyBase: the Footer';
  $scope.sections = [
    {'name': 'Genomes',
     'snippet': 'Access to the dicty genomes available at the dictyweb'},
    {'name': 'Tools',
     'snippet': 'Access the dicty data through our set of tools'},
    {'name': 'dictyAccess',
     'snippet': 'The next generation tool for the anlysis of dicty genomes'},
    {'name': 'Stock Center',
 	 'snippet': 'The central central repository for Dictyostelium discoideum strains, isolates of other cellular slime mold species, plasmids, and commonly used bacteria'},
	{'name': 'Research', 
	 'snippet': 'All about Dictyostelium: protocols, techniques, anatomy ontology, etc'},
	{'name': 'Community',
	 'snippet': 'Access the information about the highly active dicty community'}
  ];
});
