'use strict';

/* Filters */

angular.module('filters', []).

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


