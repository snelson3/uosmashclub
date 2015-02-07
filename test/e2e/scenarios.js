'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /rankings when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/rankings");
  });


  describe('rankings', function() {

    beforeEach(function() {
      browser.get('index.html#/rankings');
    });


    it('should render rankings when user navigates to /rankings', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for rankings/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/powerrankings');
    });


    it('should render view2 when user navigates to /powerrankings', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for powerrankings/);
    });

  });
});
