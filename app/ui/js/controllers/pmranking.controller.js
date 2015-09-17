uoSmash.controller('pmRankingController', ['$scope', '$http', 'rankingService', 'profileService',
  function($scope, $http,rankingService,profileService) {
    $scope.profiles=[];    
    var player = "";
    $scope.getProfile = function(pid) {
      profileService.getProfile(pid).success(function(data) {
        $scope.profiles[$scope.profiles.length] = data;
      });
    };
    
    rankingService.getPlayerList('pm').success(function(data) {
      $scope.players = data;
      for (player in $scope.players) {
        $scope.getProfile($scope.players[player].name);
        }
     });
    $scope.orderProp="-rating";
}]);
