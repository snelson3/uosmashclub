/* Directives */


angular.module('uoSmash.directives', []).directive("matchupSpread", ["profileService", function (profileService) {
    return {
        scope: {
            players: '=' // A string
        },
        templateUrl: 'app/ui/templates/matchup.spread.directive.html',
        replace: false,
        restrict: "E",
        link: function (scope, element) {
            
        }

    }
}]);