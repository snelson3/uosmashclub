
// Declare app level module which depends on filters, and services
var uoSmash = angular.module('uoSmash', [
  'ngRoute',
  'filters',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pmrankings', {isPNG:true, templateUrl: 'ui/templates/rankings.tmpl.html', controller: 'rankingsController', img:'uosmash', title:'Project M Rankings', rankings:true, game:"pm"});
  $routeProvider.when('/meleerankings',{isPNG:true, templateUrl:'ui/templates/rankings.tmpl.html',controller: 'rankingsController', img:'uosmash', title:'Melee Rankings',rankings:true, game:"melee"});
  $routeProvider.when('/s4rankings',{isPNG:true, templateUrl:'ui/templates/rankings.tmpl.html',controller:'rankingsController', img:'uosmash', title:'Smash 4 Rankings',rankings:true,game:'s4'});
  $routeProvider.when('/tournaments', {isJPG:true, templateUrl: 'ui/templates/tournaments.html', controller: 'tournamentsController', img:'mango', title:'Tournaments'});
  $routeProvider.when('/contact', {isJPG:true, templateUrl: 'ui/templates/contact.html', controller: 'contactController', img:'icies', title:'Contact Us'});
  $routeProvider.when('/tournaments/:tourneyId', {isJPG:true, templateUrl: 'ui/templates/tournament.html', controller: 'tournamentResultsController',img:'mango', title:'Tournaments'});
  $routeProvider.when('/profiles/:playerId', {templateUrl: 'ui/templates/profile.html', controller: 'profileController'});
  $routeProvider.when('/rules',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset'});
  $routeProvider.when('/rankings',{isPNG:true, templateUrl: 'ui/templates/rankings.html', controller: 'homeController', img:'uosmash',title:'UO Smash Club Rankings'});
  $routeProvider.otherwise({redirectTo: 'rankings'});
}]);
