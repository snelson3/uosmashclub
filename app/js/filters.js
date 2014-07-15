'use strict';

/* Filters */

angular.module('myApp.filters', []).

  /*filter('checkmark', ['version', function() {
    //this was a filter to only display people who have been in > 1 tourney, but it was broken and I decided not to use it
    return function(profiles) {
    	console.log("filtering");
    	var filtered = [];
    	for (var i = 0; i < profiles.length; i++) {
    		var profile = profiles[i];
    		if (profile.tournaments > 1){
    			filtered.push(profile);
    		}
    	}
      console.log(filtered);
      return filtered;
    };
  }]);
*/
  filter('elocolor', function() {
    return function (elo) {
      if (elo > 0){
        console.log(elo);
        console.log(elo.fontcolor("red"));
        return elo.fontcolor("blue");
      }
      else if (elo < 0){
        return elo.fontcolor("red");
      }
      return elo;
    };

  });


