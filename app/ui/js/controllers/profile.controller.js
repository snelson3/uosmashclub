uoSmash.controller('profileController', ['$scope', '$routeParams', '$http', 'profileService',
  function($scope, $routeParams, $http,profileService) {
    profileService.getProfile($routeParams.playerId).success(function(data) {
      $scope.player = data;
    });
  }]);
