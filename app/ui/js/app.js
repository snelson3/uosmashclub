
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'filters',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pmrankings', {templateUrl: 'ui/partials/pmrankings.html', controller: 'pmRankingController', img:'pmbowser', title:'Project M Rankings', rankings:true});
  $routeProvider.when('/meleerankings',{templateUrl:'ui/partials/meleerankings.html',controller: 'meleeRankingController', img:'falcon',title:'Melee Rankings',rankings:true});
  $routeProvider.when('/tournaments', {templateUrl: 'ui/partials/tournaments.html', controller: 'tournamentsController', img:'mango', title:'Tournaments'});
  $routeProvider.when('/contact', {templateUrl: 'ui/partials/contact.html', controller: 'contactController', img:'icies', title:'Contact Us'});
  $routeProvider.when('/tournaments/:tourneyId', {templateUrl: 'ui/partials/tournament.html', controller: 'tournamentResultsController',img:'mango', title:'Tournaments'});
  $routeProvider.when('/profiles/:playerId', {templateUrl: 'ui/partials/profile.html', controller: 'profileController'});
  $routeProvider.when('/rules',{templateUrl: 'ui/partials/rules.html',img:'foxo',title:'Ruleset'})
  $routeProvider.otherwise({redirectTo: 'pmrankings'});
}]);

