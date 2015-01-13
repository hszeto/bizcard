'use strict';

/**
 * @ngdoc function
 * @name bizcardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bizcardApp
 */
angular.module('bizcardApp')
  .controller('SearchCtrl', function ($scope, localStorageService) {

	var bizcardsInStore = localStorageService.get('bizcards');

	$scope.bizcards = bizcardsInStore || [];

	$scope.$watch('bizcards', function () {
	  localStorageService.set('bizcards', $scope.bizcards);
	}, true);

	$scope.orderProp = 'name';

	// Remove card function
	$scope.removeBizcard = function (index) {
	  $scope.bizcards.splice(index, 1);
	};

 });