'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('PowerRankingCtrl', ['$scope', '$http', 
  	function($scope, $http) {
 /*TODO make 1 json file per power ranking and have a way to select which one. */
	$http.get('data/pr/powerrankings.json').success(function(data) {
		$scope.ranking = data;
	});
$scope.orderProp="rank";
$scope.tyear="072014";
  }]);

