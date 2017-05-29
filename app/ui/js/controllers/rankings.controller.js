uoSmash.controller('rankingsController', ['$scope', '$http', 'rankingService', 'profileService',
    function ($scope, $http, rankingService, profileService) {
        $scope.profiles = [];
        var player = "";


        $scope.getProfile = function (pid) {
            profileService.getProfile(pid).then(function(res) {
                if (res.statusText == "OK") {
                    $scope.profiles.push(res.data);
                }
            });
        };

        $scope.getPlayers = function (game) {
            rankingService.getPlayerList(game).then(function (res) {
                if (res.statusText == "OK") {
                    var players = res.data;
                    players.forEach(function (player) {
                        $scope.getProfile(player.name);
                    });
                }
            });
        };

        $scope.orderProp = "-rating";
    }
]);
