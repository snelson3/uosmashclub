uoSmash.factory('rankingService', [ '$http', function($http) {
	var _getPlayerList = function(game) {
		return $http.get('data/'+game+'-playerlist.json');
	};

	return {
		getPlayerList : _getPlayerList
	}
}]);