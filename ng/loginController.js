angular.module('app').controller('LoginController', function($scope, UserService, $location) {
	$scope.login = function(username, password) {
		UserService.login(username, password)
		.then(function(user) {
			$scope.$emit('login', user);
			$location.path('/');
		});
	};
});
