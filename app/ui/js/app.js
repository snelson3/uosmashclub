
// Declare app level module which depends on filters, and services
var uoSmash = angular.module('uoSmash', [
  'ngRoute',
  'filters',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pmrankings', {templateUrl: 'ui/templates/pmrankings.html', controller: 'pmRankingController', img:'pmbowser', title:'Project M Rankings', rankings:true});
  $routeProvider.when('/meleerankings',{templateUrl:'ui/templates/meleerankings.html',controller: 'meleeRankingController', img:'falcon',title:'Melee Rankings',rankings:true});
  $routeProvider.when('/tournaments', {templateUrl: 'ui/templates/tournaments.html', controller: 'tournamentsController', img:'mango', title:'Tournaments'});
  $routeProvider.when('/contact', {templateUrl: 'ui/templates/contact.html', controller: 'contactController', img:'icies', title:'Contact Us'});
  $routeProvider.when('/tournaments/:tourneyId', {templateUrl: 'ui/templates/tournament.html', controller: 'tournamentResultsController',img:'mango', title:'Tournaments'});
  $routeProvider.when('/profiles/:playerId', {templateUrl: 'ui/templates/profile.html', controller: 'profileController'});
  $routeProvider.when('/rules',{templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset'})
  $routeProvider.otherwise({redirectTo: 'pmrankings'});
}]);

