myApp.controller('tournamentsController', ['$scope', '$http', 
    function($scope,$http){
      $http.get('data/upcomingtournaments.json').success(function(data) {
        $scope.futuretournaments = data;
      });
      $http.get('data/pasttournaments.json').success(function(data) {
        $scope.pasttournaments = data;
      });
      $scope.orderProp = "date";
    }]);