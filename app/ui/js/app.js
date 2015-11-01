
// Declare app level module which depends on filters, and services
var uoSmash = angular.module('uoSmash', [
  'ngRoute',
  'filters',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pmrankings', {isJPG:true, templateUrl: 'ui/templates/pmrankings.html', controller: 'pmRankingController', img:'pmbowser', title:'Project M Rankings', rankings:true});
  $routeProvider.when('/meleerankings',{isJPG:true, templateUrl:'ui/templates/meleerankings.html',controller: 'meleeRankingController', img:'falcon',title:'Melee Rankings',rankings:true});
  $routeProvider.when('/tournaments', {isJPG:true, templateUrl: 'ui/templates/tournaments.html', controller: 'tournamentsController', img:'mango', title:'Tournaments'});
  $routeProvider.when('/contact', {isJPG:true, templateUrl: 'ui/templates/contact.html', controller: 'contactController', img:'icies', title:'Contact Us'});
  $routeProvider.when('/tournaments/:tourneyId', {isJPG:true, templateUrl: 'ui/templates/tournament.html', controller: 'tournamentResultsController',img:'mango', title:'Tournaments'});
  $routeProvider.when('/profiles/:playerId', {templateUrl: 'ui/templates/profile.html', controller: 'profileController'});
  $routeProvider.when('/rules',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset'});
  $routeProvider.when('/rankings',{isPNG:true, templateUrl: 'ui/templates/rankings.html',img:'uosmash',title:'UO Smash Club Rankings'});
  $routeProvider.otherwise({redirectTo: 'rankings'});
}]);

