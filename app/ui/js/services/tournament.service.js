uoSmash.factory('tournamentService', [ '$http', function($http) {
	var _getTournamentResults = function(tid) {
		return $http.get('data/tournaments/'+tid+'.uotn');
	};

	var _getUpcomingTournaments = function() {
		return $http.get('data/upcomingtournaments.uotn');
	};

	var _getPastTournaments = function() {
		return $http.get('data/pasttournaments.uotn');
	};

	return {
		getTournamentResults : _getTournamentResults,
		getUpcomingTournaments : _getUpcomingTournaments,
		getPastTournaments : _getPastTournaments
	 };
}]);
