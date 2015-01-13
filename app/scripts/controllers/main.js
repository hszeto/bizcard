'use strict';

/**
 * @ngdoc function
 * @name bizcardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bizcardApp
 */
angular.module('bizcardApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

	var bizcardsInStore = localStorageService.get('bizcards');

	$scope.bizcards = bizcardsInStore || [];

	$scope.$watch('bizcards', function () {
	  localStorageService.set('bizcards', $scope.bizcards);
	}, true);

	// Add card function
	$scope.addBizcard = function () {
	  $scope.bizcards.push($scope.bizcard);
	  $scope.bizcard = '';
	};

  });
