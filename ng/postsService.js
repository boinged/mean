angular.module('app').service('PostsService', function($http) {
  this.create = function(post) {
    return $http.post('/api/posts', post);
  };
  this.fetch = function() {
    return $http.get('/api/posts').then(
			function(response) {
				return response.data;
			}
		);
  };
});
