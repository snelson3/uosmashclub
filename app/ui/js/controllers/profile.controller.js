uoSmash.controller('profileController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/profiles/' + $routeParams.playerId + '.json').success(function(data) {
      $scope.player = data;
    });
  }]);
