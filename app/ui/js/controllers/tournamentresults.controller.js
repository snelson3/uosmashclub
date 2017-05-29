uoSmash.controller('tournamentResultsController', ['$scope', '$routeParams', 'tournamentService', 'rankingService',
    function($scope, $routeParams, tournamentService, rankingService) {
        $scope.orderProp = "place";


        tournamentService.getTournamentResults($routeParams.tourneyId).then(function(res) {
            if (res.statusText == "OK") {
                $scope.tournament = res.data;
            }
        });
    }]);