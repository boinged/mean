angular.module('app').controller('RegisterController', function($scope, UserService, $location) {
	$scope.register = function(username, password) {
		UserService.register(username, password)
		.then(function(user) {
			$scope.$emit('login', user);
			$location.path('/');
		});
	};
});
