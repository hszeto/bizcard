'use strict';

/**
 * @ngdoc function
 * @name bizcardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bizcardApp
 */
angular.module('bizcardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
