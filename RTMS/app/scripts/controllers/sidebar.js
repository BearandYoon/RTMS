'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the angularTestApp
 */
angular.module('RTMSApp')
  .controller('SidebarCtrl', function ($scope, $rootScope) {
  	$scope.toggleSidebarCollapse = function() {
  		$rootScope.IsSidebarCollapsed = !$rootScope.IsSidebarCollapsed;
  	}
  });
