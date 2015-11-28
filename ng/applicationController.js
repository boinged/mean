angular.module('app').controller('ApplicationController', function($scope) {
	$scope.$on('login', function(_, user) {
		$scope.currentUser = user;
	});
});
