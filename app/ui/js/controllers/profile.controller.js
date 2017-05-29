uoSmash.controller('profileController', ['$scope', '$routeParams', '$http', 'profileService', 'tournamentService',
    function ($scope, $routeParams, $http, profileService, tournamentService) {

        $scope.getTournamentID = tournamentService.getTournamentID;

        $scope.getWins = function () {
            if ($scope.player) {
                return $scope.player.matches.filter(function (m) {
                    return m.win;
                }).length;
            }
        };

        profileService.getProfile($routeParams.playerId).success(function (data) {
            $scope.player = data;
            var sortedMatches = {};
            $scope.player.matches.forEach(function (match) {
                var date = $scope.getTournamentID(match.date);
                if (sortedMatches[match.date]) {
                    sortedMatches[match.date].matches.push(match);
                }
                else {
                    sortedMatches[match.date] = {matches: [], date: date};
                }
            });
            $scope.tournamentList = [];
            $scope.sortedMatches = sortedMatches;
            Object.keys(sortedMatches).forEach(function (k) {
                $scope.tournamentList.push(sortedMatches[k]);
            });
        });
    }]);
