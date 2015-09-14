uoSmash.controller('contactController', ['$scope','$http', 'contactService',
	function($scope,$http,contactService){
	  contactService.getFacebookGroups().success(function(data) {
	    $scope.facebook = data;
	  });
	}
]);
