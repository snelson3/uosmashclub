uoSmash.controller('matchupsController', ['$scope', '$http', 'rankingService', 'profileService', '$route',
    function ($scope, $http, rankingService, profileService, $route) {
        $scope.game = $route.current.game;
        $scope.players = [];

        $scope.changeRadio = function(num) {
            $scope.incnum = num;
            rankingService.getPlayerList($route.current.game).then(function(res) {
                if (res.statusText == "OK") {
                    $scope.players = res.data.sort(function(a,b){
                        if (a.ELO < b.ELO)
                            return 1;
                        if (a.ELO == b.ELO)
                            return 0;
                        return -1;
                    }).slice(0,num);
                    $scope.scores = {};
                    $scope.playerlist = $scope.players.map(function(p) {
                        return p.name;
                    });
                    $scope.playerlist.forEach(function (player) {
                        var pscore = {};
                        profileService.getProfile(player,$route.current.game).then(function (res) {
                            if (res.statusText == "OK") {
                               $scope.playerlist.forEach(function (p) {
                                    pscore[p] = {"wins": 0, "losses": 0}
                                });
                                res.data.matches.forEach(function (m) {
                                    if ($scope.playerlist.indexOf(m.opponent_real_name) > -1) {
                                        if (m.win) {
                                            pscore[m.opponent_real_name].wins += 1
                                        }
                                        else {
                                            pscore[m.opponent_real_name].losses += 1
                                        }
                                    }
                                });
                            }
                        });
                        $scope.scores[player] = pscore;
                    });
                }
        });
        };

        $scope.changeRadio(10);
    }
]);
