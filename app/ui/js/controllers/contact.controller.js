uoSmash.controller('contactController', ['$scope','$http',
function($scope,$http){
  $http.get('data/facebookgroups.json').success(function(data) {
    $scope.facebook = data;
  });
}
]);
