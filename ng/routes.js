angular.module('app').config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'PostsController',
			templateUrl: 'posts.html'
		})
		.when('/register', {
			controller: 'RegisterController',
			templateUrl: 'register.html'
		})
		.when('/login', {
			controller: 'LoginController',
			templateUrl: 'login.html'
		});
});
