myApp.controller('tournamentResultsController', ['$scope', '$http', '$routeParams',
  function($scope,$http,$routeParams){
    $scope.entrants = 0;
    $http.get('data/tournaments/' + $routeParams.tourneyId + '.json').success(function(data) {
      $scope.tournament = data;
      for ($scope.entrant in data.results){
        $scope.entrants +=1;
      }
    });
    $scope.orderProp = "-rankchange";
  }]);