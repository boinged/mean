angular.module('app').controller('LoginController', function($scope, UserService, $location) {
	$scope.login = function(username, password) {
		UserService.login(username, password)
		.then(function(response) {
			$scope.$emit('login', response.data);
			$location.path('/');
		});
	};
});
