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
  $routeProvider.when('/rankings', {templateUrl: 'partials/rankings.html', controller: 'RankingCtrl'});
  $routeProvider.when('/pr', {templateUrl: 'partials/powerrankings.html', controller: 'PowerRankingCtrl'});
  $routeProvider.when('/tournaments', {templateUrl: 'partials/tournaments.html', controller: 'TournamentCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'DummyCtrl'});
  $routeProvider.when('/submit', {templateUrl: 'partials/submit.html', controller: 'DummyCtrl'});
  //can i get this to work but not actually change the URL?
  $routeProvider.when('/tournaments/:tourneyId', {templateUrl: 'partials/tournament.html', controller: 'TourneyCtrl'});
  $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'ProfileCtrl'});
  $routeProvider.when('/profiles/:playerId', {templateUrl: 'partials/profile.html', controller: 'ProfileCtrl'});
  $routeProvider.otherwise({redirectTo: '/rankings'});
}]);

