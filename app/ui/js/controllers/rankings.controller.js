uoSmash.controller('rankingsController', ['$scope', '$http', 'rankingService', 'profileService', '$route',
    function ($scope, $http, rankingService, profileService, $route) {
        $scope.game = $route.current.game;
        $scope.profiles = [];
        var player = "";


        $scope.getProfile = function (pid) {
            profileService.getProfile(pid, $route.current.game).then(function(res) {
                if (res.statusText == "OK") {
                    $scope.profiles.push(res.data);
                }
            });
        };

        $scope.getPlayers = function () {
            rankingService.getPlayerList($route.current.game).then(function (res) {
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
