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