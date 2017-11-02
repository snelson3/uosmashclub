uoSmash.controller('tournamentResultsController', ['$scope', '$routeParams', 'tournamentService', '$route',
    function($scope, $routeParams, tournamentService, $route) {
        $scope.game = $route.current.game;
        $scope.orderProp = "place";


        tournamentService.getTournamentResults($routeParams.tourneyId, $route.current.game).then(function(res) {
            if (res.statusText == "OK") {
                $scope.tournament = res.data;
            }
        });
    }]);