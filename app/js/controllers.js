'use strict';

/* Controllers */

var webcontrollers = angular.module('myApp.controllers', [])


  webcontrollers.controller('PowerRankingCtrl', ['$scope', '$http', 
  	function($scope, $http) {
 /*TODO make 1 json file per power ranking and have a way to select which one. */
	$http.get('data/pr/powerrankings.json').success(function(data) {
		$scope.ranking = data;
	});
$scope.orderProp="rank";
$scope.tyear="072014";
  }]);

webcontrollers.controller('ProfileCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/profiles/' + $routeParams.playerId + '.json').success(function(data) {
      $scope.player = data;
    });
  }]);

//TODO get rid of the playerlist and just have it start reading from jsons if possible
  webcontrollers.controller('RankingCtrl', ['$scope', '$http', 
    function($scope, $http) {
      $scope.profiles=[];    
      var player = "";
      $scope.getProfile = function(pid) {
        $http.get('data/profiles/'+pid+'.json').success(function(data) {
          $scope.profiles[$scope.profiles.length] = data;
      });};
      
      $http.get('data/playerlist.json').success(function(data) {
        $scope.players = data;
        for (player in $scope.players) {
          $scope.getProfile($scope.players[player].name);
          }
       });
      $scope.orderProp="-ELO";
  }]);

  webcontrollers.controller('TournamentCtrl', ['$scope', '$http', 
    function($scope,$http){
      $http.get('data/upcomingtournaments.json').success(function(data) {
        $scope.futuretournaments = data;
      });
      $http.get('data/pasttournaments.json').success(function(data) {
        $scope.pasttournaments = data;
      });
    }]);

  webcontrollers.controller('TourneyCtrl', ['$scope', '$http', '$routeParams',
    function($scope,$http,$routeParams){
      $http.get('data/tournaments/' + $routeParams.tourneyId + '.json').success(function(data) {
        $scope.tournament = data;
      });
      $scope.orderProp = "place";
    }]);

webcontrollers.controller('DummyCtrl',[function(){}]);