
// Declare app level module which depends on filters, and services
var uoSmash = angular.module('uoSmash', [
  'ngRoute',
  'filters'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/melee/rankings',{isPNG:true, templateUrl:'ui/templates/rankings.tmpl.html',controller: 'rankingsController', img:'uosmash', title:'Melee Rankings',rankings:true, game:"melee"});
    $routeProvider.when('/melee/tournaments', {isJPG:true, templateUrl: 'ui/templates/tournaments.html', controller: 'tournamentsController', img:'mango', title:'Tournaments', game:"melee"});
    $routeProvider.when('/melee/contact', {isJPG:true, templateUrl: 'ui/templates/contact.html', controller: 'contactController', img:'icies', title:'Contact Us', game:"melee"});
    $routeProvider.when('/melee/tournaments/:tourneyId', {isJPG:true, templateUrl: 'ui/templates/tournament.html', controller: 'tournamentResultsController',img:'mango', title:'Tournaments', game:"melee"});
    $routeProvider.when('/melee/profiles/:playerId', {templateUrl: 'ui/templates/profile.html', controller: 'profileController', game: "melee"});
    $routeProvider.when('/melee/rules',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:"melee"});
    $routeProvider.when('/melee/matchups',{isPNG:false, templateUrl: 'ui/templates/matchups.html', controller: 'matchupsController', game:"melee"});
    $routeProvider.when('/melee/rules/collapse1',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:"melee"});
    $routeProvider.when('/melee/rules/collapse2',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:"melee"});
    $routeProvider.when('/melee/rules/collapse3',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:"melee"});
    $routeProvider.when('/melee/rules/collapse4',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:"melee"});
    $routeProvider.when('/melee/rules/collapse5',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:"melee"});
    $routeProvider.when('/melee/rules/collapse6',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:"melee"});
    $routeProvider.when('/melee/rules/collapse7',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:"melee"});

    $routeProvider.when('/sm4sh/rankings',{isPNG:true, templateUrl:'ui/templates/rankings.tmpl.html',controller:'rankingsController', img:'uosmash', title:'Smash 4 Rankings',rankings:true,game:'sm4sh'});
    $routeProvider.when('/sm4sh/tournaments', {isJPG:true, templateUrl: 'ui/templates/tournaments.html', controller: 'tournamentsController', img:'mango', title:'Tournaments', game:'sm4sh'});
    $routeProvider.when('/sm4sh/contact', {isJPG:true, templateUrl: 'ui/templates/contact.html', controller: 'contactController', img:'icies', title:'Contact Us', game:'sm4sh'});
    $routeProvider.when('/sm4sh/tournaments/:tourneyId', {isJPG:true, templateUrl: 'ui/templates/tournament.html', controller: 'tournamentResultsController',img:'mango', title:'Tournaments', game:'sm4sh'});
    $routeProvider.when('/sm4sh/profiles/:playerId', {templateUrl: 'ui/templates/profile.html', controller: 'profileController', game:'sm4sh'});
    $routeProvider.when('/sm4sh/rules',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:'sm4sh'});
    $routeProvider.when('/sm4sh/matchups',{isPNG:false, templateUrl: 'ui/templates/matchups.html', controller: 'matchupsController', game:'sm4sh'});
    $routeProvider.when('/sm4sh/rules/collapse1',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:'sm4sh'});
    $routeProvider.when('/sm4sh/rules/collapse2',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:'sm4sh'});
    $routeProvider.when('/sm4sh/rules/collapse3',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:'sm4sh'});
    $routeProvider.when('/sm4sh/rules/collapse4',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:'sm4sh'});
    $routeProvider.when('/sm4sh/rules/collapse5',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:'sm4sh'});
    $routeProvider.when('/sm4sh/rules/collapse6',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:'sm4sh'});
    $routeProvider.when('/sm4sh/rules/collapse7',{isJPG:true, templateUrl: 'ui/templates/rules.html',img:'foxo',title:'Ruleset', game:'sm4sh'});

    $routeProvider.otherwise({redirectTo: '/melee/rankings'});
}]);
