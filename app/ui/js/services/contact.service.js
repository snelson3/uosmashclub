uoSmash.factory('contactService', [ '$http', function($http) {
	var _getFacebookGroups = function() {
		return $http.get('data/facebookgroups.json');
	};

	return { getFacebookGroups : _getFacebookGroups };
}]);