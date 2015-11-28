angular.module('app').controller('RegisterController', function($scope, UserService) {
	$scope.register = function(username, password) {
		console.log('register ' + username);
		UserService.createUser(username, password)
		.then(function(response) {
			$scope.$emit('login', response.data);
		});
	};
});
