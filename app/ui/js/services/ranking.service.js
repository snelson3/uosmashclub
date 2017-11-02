uoSmash.factory('rankingService', [ '$http', function($http) {
	var _getPlayerList = function(game) {
		return $http.get('ranking-data/'+game+'-files/playerlist.json');
	};
    
	return {
		getPlayerList : _getPlayerList
	}
}]);