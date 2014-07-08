'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rankings', {templateUrl: 'partials/rankings.html', controller: 'MyCtrl1'});
  $routeProvider.when('/pr', {templateUrl: 'partials/powerrankings.html', controller: 'MyCtrl2'});
  $routeProvider.when('/tournaments', {templateUrl: 'partials/tournaments.html', controller: 'MyCtrl1'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'MyCtrl1'});
  $routeProvider.when('/submit', {templateUrl: 'partials/submit.html', controller: 'MyCtrl1'});
  $routeProvider.when('/tourney', {templateUrl: 'partials/tournament.html', controller: 'MyCtrl1'});
  $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'MyCtrl1'})
  $routeProvider.otherwise({redirectTo: '/rankings'});
}]);
