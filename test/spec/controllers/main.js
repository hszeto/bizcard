'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('bizcardApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of bizcards to the scope', function () {
    expect(scope.bizcards.length).toBe(3);
  });

  it('should add then remove a card from the list', function () {
    scope.bizcard = 'Test card 4';
    scope.addBizcard();
    scope.removeBizcard(3);
    expect(scope.bizcards.length).toBe(3);
  });


});
