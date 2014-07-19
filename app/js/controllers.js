'use strict';

/* Controllers */

var webcontrollers = angular.module('myApp.controllers', [])


  webcontrollers.controller('PowerRankingCtrl', ['$scope', '$http', 
  	function($scope, $http) {
	$http.get('data/pr/powerrankings.json').success(function(data) {
		$scope.ranking = data;
	});
$scope.orderProp="rank";
$scope.tyear="072014";
  }]);

webcontrollers.controller('ProfileCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/profiles/' + $routeParams.playerId + '.json').success(function(data) {
      //TODO make it so it will hide this without needing to have this null value in here
      $scope.player = data;
    });
  }]);

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
      $scope.entrants = 0;
      $http.get('data/tournaments/' + $routeParams.tourneyId + '.json').success(function(data) {
        $scope.tournament = data;
        for ($scope.entrant in data.results){
          $scope.entrants +=1;
        }
      });
      $scope.orderProp = "place";
    }]);

  webcontrollers.controller('ContactCtrl', ['$scope','$http',
    function($scope,$http){
      $http.get('data/facebookgroups.json').success(function(data) {
        $scope.facebook = data;
      });
    }
    ]);

webcontrollers.controller('DummyCtrl',['$scope',function($scope){
}]);


webcontrollers.controller('MainCtrl',['$scope','$route',function($scope, $route){
  $scope.$route = $route;

}]);