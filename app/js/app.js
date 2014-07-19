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
  $routeProvider.when('/rankings', {templateUrl: 'partials/rankings.html', controller: 'RankingCtrl', img:'falcon', title:'Oregon ELO Rankings'});
  $routeProvider.when('/pr', {templateUrl: 'partials/powerrankings.html', controller: 'PowerRankingCtrl', img:'fox', title:'Power Rankings'});
  $routeProvider.when('/tournaments', {templateUrl: 'partials/tournaments.html', controller: 'TournamentCtrl', img:'mango', title:'Tournaments'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl', img:'icies', title:'Contact Us'});
  $routeProvider.when('/submit', {templateUrl: 'partials/submit.html', controller: 'DummyCtrl', img:'m2k', title:'Submit a tournament'});
  //can i get this to work but not actually change the URL?
  $routeProvider.when('/tournaments/:tourneyId', {templateUrl: 'partials/tournament.html', controller: 'TourneyCtrl',img:'mango', title:'Tournaments'});
  //$routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'ProfileCtrl'});
  $routeProvider.when('/profiles/:playerId', {templateUrl: 'partials/profile.html', controller: 'ProfileCtrl'});
  //TODO add a 404 page
  $routeProvider.otherwise({redirectTo: '/rankings'});
}]);

