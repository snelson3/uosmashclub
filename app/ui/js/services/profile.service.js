uoSmash.factory('profileService', [ '$http', function($http) {
	var _getProfile = function(pid) {
		return $http.get('data/profiles/'+pid+'.json');
	};

	return { getProfile : _getProfile };
}]);