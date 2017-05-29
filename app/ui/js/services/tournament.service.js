uoSmash.factory('tournamentService', [ '$http', function($http) {
	var _getTournamentResults = function(tid) {
		return $http.get('data/tournaments/'+tid+'.uotn');
	};

	var _getUpcomingTournaments = function() {
		return $http.get('data/upcomingtournaments.uotn');
	};

	var _getPastTournaments = function() {
		return $http.get('data/melee-tournamentlist.json');
	};

    var _getTournamentID = function (date) {
        var id = '';
        for (var i = 0; i < date.length; i ++) {
            var c = date[i];
            if (c != '/')
                id = id + c;
        }
        return id;
    };

    
	return {
		getTournamentResults : _getTournamentResults,
		getUpcomingTournaments : _getUpcomingTournaments,
		getPastTournaments : _getPastTournaments,
        getTournamentID : _getTournamentID
	 };
}]);
