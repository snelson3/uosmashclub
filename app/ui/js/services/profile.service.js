uoSmash.factory('profileService', [ '$http', function($http) {
	var _getProfile = function(pid, game) {
		return $http.get('ranking-data/'+game+'-files/players/'+pid+'.json');
	};

	return { getProfile : _getProfile };
}]);