uoSmash.factory('tournamentService', [ '$http', function($http) {
	var _getTournamentResults = function(tid, game) {
		return $http.get('ranking-data/'+game+'-files/updated/'+tid+'.uotn');
	};

	var _getUpcomingTournaments = function() {
		return $http.get('data/upcomingtournaments.uotn');
	};

	var _getPastTournaments = function(game) {
		return $http.get('ranking-data/'+game+'-files/'+'tournamentlist.json');
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
