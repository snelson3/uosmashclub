'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('checkmark', ['version', function() {
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
