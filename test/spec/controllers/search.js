'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('bizcardApp'));

  var SearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of bizcards to the scope', function () {
  //   expect(scope.bizcards.length).toBe(3);
  // });
});
