uoSmash.factory('tournamentService', [ '$http', function($http) {
	var _getTournamentResults = function(tid) {
		return $http.get('data/tournaments/'+tid+'.json');
	};

	var _getUpcomingTournaments = function() {
		return $http.get('data/upcomingtournaments.json');
	};

	var _getPastTournaments = function() {
		return $http.get('data/pasttournaments.json');
	};

	return {
		getTournamentResults : _getTournamentResults,
		getUpcomingTournaments : _getUpcomingTournaments,
		getPastTournaments : _getPastTournaments
	 };
}]);