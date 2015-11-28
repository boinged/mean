angular.module('app').service('UserService', function($http) {
	var service = this;
	this.getUser = function() {
		return $http.get('/api/users');
	};
	this.login = function(username, password) {
		return $http.post('/api/sessions', {
			username: username, password: password
		})
		.then(function(value) {
			service.token = value.data;
			$http.defaults.headers.common['X-Auth'] = value.data;
			return service.getUser();
		});
	};
	this.createUser = function(username, password) {
		console.log('createUser ' + username);
		return $http.post('/api/users', {
			username: username, password: password
		})
		.then(function(value) {
			console.log(value);
			return service.login(username, password);
		});
	};
});
