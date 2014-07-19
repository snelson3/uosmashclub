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
  $routeProvider.when('/rankings', {templateUrl: 'partials/rankings.html', controller: 'RankingCtrl'
  ,img: 'falcon', ttl: 'Oregon ELO Rankings'});
  $routeProvider.when('/pr', {templateUrl: 'partials/powerrankings.html', controller: 'PowerRankingCtrl'
  ,img: 'fox', ttl: 'Power Rankings'});
  $routeProvider.when('/tournaments', {templateUrl: 'partials/tournaments.html', controller: 'TournamentCtrl'
  ,img: 'mango', ttl: 'Tournaments'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'
  ,img: 'ices', ttl: 'Contact Smashers Near You'});
  $routeProvider.when('/submit', {templateUrl: 'partials/submit.html', controller: 'DummyCtrl'
  ,img: 'm2k', ttl: 'Submit a Tournament'});
  //can i get this to work but not actually change the URL?
  $routeProvider.when('/tournaments/:tourneyId', {templateUrl: 'partials/tournament.html', controller: 'TourneyCtrl'
  ,img: 'RMV', ttl: 'REMOVEMEREMOVEMEREMOVEME'});
  $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'ProfileCtrl'
  ,img: 'RMV', ttl: 'REMOVEMEREMOVEMERMEOVEME'});
  $routeProvider.when('/profiles/:playerId', {templateUrl: 'partials/profile.html', controller: 'ProfileCtrl'
  ,img: 'RMV', ttl: 'REMOVEMREMOVEMEREMOVEME'});
  $routeProvider.otherwise({redirectTo: '/rankings'});
  //should make a 404 page, its really easy
}]);

