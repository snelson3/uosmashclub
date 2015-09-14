uoSmash.controller('tournamentsController', ['$scope', '$http', 'tournamentService',
    function($scope,$http,tournamentService){
      tournamentService.getUpcomingTournaments().success(function(data) {
        $scope.futuretournaments = data;
      });
      tournamentService.getPastTournaments().success(function(data) {
        $scope.pasttournaments = data;
      });
      $scope.orderProp = "date";
    }]);