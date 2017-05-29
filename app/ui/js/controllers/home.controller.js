uoSmash.controller('homeController', ['$scope', '$http', 'rankingService', 'profileService',
    function ($scope, $http, rankingService, profileService) {
        $scope.meleeprofiles = [];
        $scope.pmprofiles = [];
        $scope.s4profiles = [];



        var player = "";


        $scope.getProfile = function (pid, profiles) {
            profileService.getProfile(pid).success(function (data) {
                profiles[profiles.length] = data;
            });
        };

        $scope.getPlayers = function () {
            rankingService.getPlayerList('melee').success(function (data) {
                $scope.players = data;
                for (player in $scope.players) {
                    $scope.getProfile($scope.players[player].name, $scope.meleeprofiles);
                }
                $scope.showMelee = true;
                console.log($scope)
            });

            rankingService.getPlayerList('pm').success(function (data) {
                $scope.players = data;
                for (player in $scope.players) {
                    $scope.getProfile($scope.players[player].name, $scope.pmprofiles);
                }
                $scope.showPM = true;
            });

            rankingService.getPlayerList('s4').success(function (data) {
                $scope.players = data;
                for (player in $scope.players) {
                    $scope.getProfile($scope.players[player].name, $scope.s4profiles);
                }
                $scope.showS4 = true
            });
        };

        $scope.getPlayers();

        $scope.orderProp = "-rating";
    }
]);
