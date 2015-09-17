uoSmash.controller('profileController', ['$scope', '$routeParams', '$http', 'profileService',
  function($scope, $routeParams, $http,profileService) {
    
    $scope.getTournamentID = function (date,game) {
    	//check that date is formatted like nn/nn/nnnn
    	if (isNaN(date[0]) || isNaN(date[1]) || isNaN(date[3]) || isNaN(date[4])
    			|| isNaN(date[6]) || isNaN(date[7]) || isNaN(date[8]) || isNaN(date[9])
    				|| !isNaN(date[2]) || !isNaN(date[5]))
    	{
    		console.error("Invalid date for tournament " + date);
    		return "#";
    	}
    	else{
    		str = date[6]+date[7]+date[8]+date[9]+date[3]+date[4]+date[0]+date[1]
    		if (game[0] == "p"){
    			return str+"pm"
    		}
    		else{
    			return str+"m"
    		}
    	};
    };

    profileService.getProfile($routeParams.playerId).success(function(data) {
      $scope.player = data;
    });
  }]);
