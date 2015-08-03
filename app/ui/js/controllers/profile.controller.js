myApp.controller('profileController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/profiles/' + $routeParams.playerId + '.json').success(function(data) {
      //TODO make it so it will hide this without needing to have this null value in here
      $scope.player = data;
    });
  }]);