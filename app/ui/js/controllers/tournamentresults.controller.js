uoSmash.controller('tournamentResultsController', ['$scope', '$routeParams', 'tournamentService', 'rankingService',
    function($scope, $routeParams, tournamentService, rankingService) {
        $scope.game = 'melee';
        $scope.orderProp = "place";


        tournamentService.getTournamentResults($routeParams.tourneyId, $scope.game).then(function(res) {
            if (res.statusText == "OK") {
                $scope.tournament = res.data;
            }
        });
    }]);