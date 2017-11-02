uoSmash.controller('tournamentsController', ['$scope', '$http', 'tournamentService', '$route',
    function ($scope, $http, tournamentService, $route) {
        $scope.game = $route.current.game;
        // tournamentService.getUpcomingTournaments().success(function (data) {
        //     $scope.futuretournaments = data;
        // });
        tournamentService.getPastTournaments($route.current.game).success(function (data) {
            $scope.pasttournaments = data;
        });
        $scope.orderProp = "date";
        $scope.getTournamentID = tournamentService.getTournamentID;
    }]);