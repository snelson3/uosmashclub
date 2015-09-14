uoSmash.controller('tournamentResultsController', ['$scope', '$http', '$routeParams', 'tournamentService',
  function($scope,$http,$routeParams,tournamentService){
    $scope.entrants = 0;
    tournamentService.getTournamentResults($routeParams.tourneyId).success(function(data) {
      $scope.tournament = data;
      for ($scope.entrant in data.results){
        $scope.entrants +=1;
      }
    });
    $scope.orderProp = "-rankchange";
  }]);
