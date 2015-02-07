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
  $routeProvider.when('/pmrankings', {templateUrl: 'partials/pmrankings.html', controller: 'pmRankingCtrl', img:'pmbowser', title:'Project M Rankings', rankings:true});
  $routeProvider.when('/meleerankings',{templateUrl:'partials/meleerankings.html',controller: 'meleeRankingCtrl', img:'falcon',title:'Melee Rankings',rankings:true});
  $routeProvider.when('/tournaments', {templateUrl: 'partials/tournaments.html', controller: 'TournamentCtrl', img:'mango', title:'Tournaments'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl', img:'icies', title:'Contact Us'});
  //can i get this to work but not actually change the URL?
  $routeProvider.when('/tournaments/:tourneyId', {templateUrl: 'partials/tournament.html', controller: 'TourneyCtrl',img:'mango', title:'Tournaments'});
  //$routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'ProfileCtrl'});
  $routeProvider.when('/profiles/:playerId', {templateUrl: 'partials/profile.html', controller: 'ProfileCtrl'});
  //TODO add a 404 page
  $routeProvider.when('/rules',{templateUrl: 'partials/rules.html',img:'foxo',title:'Ruleset'})
  $routeProvider.otherwise({redirectTo: '/pmrankings'});
}]);

