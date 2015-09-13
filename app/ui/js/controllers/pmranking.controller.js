uoSmash.controller('pmRankingController', ['$scope', '$http', 
  function($scope, $http) {
    $scope.profiles=[];    
    var player = "";
    $scope.getProfile = function(pid) {
      $http.get('data/profiles/'+pid+'.json').success(function(data) {
        $scope.profiles[$scope.profiles.length] = data;
    });};
    
    $http.get('data/pm-playerlist.json').success(function(data) {
      $scope.players = data;
      for (player in $scope.players) {
        $scope.getProfile($scope.players[player].name);
        }
     });
    $scope.orderProp="-rating";
}]);
