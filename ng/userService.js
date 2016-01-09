angular.module('app').service('UserService', function($http) {
	var service = this;
	this.getUser = function() {
		return $http.get('/api/users').then(
			function(response) {
				return response.data;
			}
		);
	};
	this.login = function(username, password) {
		return $http.post('/api/sessions', {
			username: username,
			password: password
		}).then(function(response) {
			service.token = response.data;
			$http.defaults.headers.common['X-Auth'] = response.data;
			return service.getUser();
		});
	};
	this.register = function(username, password) {
		return $http.post('/api/users', {
				username: username,
				password: password
			})
			.then(function() {
				return service.login(username, password);
			});
	};
});
