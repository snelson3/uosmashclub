uoSmash.controller('meleeRankingController', ['$scope', '$http', 'rankingService', 'profileService',
  function($scope, $http,rankingService,profileService) {
    $scope.profiles=[];    
    $scope.players=[];
    var player = "";

    $scope.getProfile = function(pid) {
      profileService.getProfile(pid).success(function(data) {
        $scope.profiles[$scope.profiles.length] = data;
    });};
    
    rankingService.getPlayerList('melee').success(function(data) {
      $scope.players = data;
      for (player in $scope.players) {
        $scope.getProfile($scope.players[player].name);
        }
     });

    $scope.orderProp="-rating";
  }
]);