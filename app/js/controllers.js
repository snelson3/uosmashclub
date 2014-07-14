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
  $http.get('data/playerlist.json').success(function(data) {
    $scope.players = data;
  });
  $scope.orderProp="ELO";

  $scope.getProfile = function(pid) {
    $http.get('data/profiles/'+pid+'.json').success(function(data)
{
  $scope.profiles[$scope.profiles.length] = data;
}
      );
  };
  }]);


webcontrollers.controller('DummyCtrl',[function(){}]);