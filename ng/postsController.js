angular.module('app').controller('PostsController', function($scope, PostsService) {
	$scope.addPost = function() {
		if ($scope.postBody) {
			PostsService.create({
				body: $scope.postBody
			}).then(function(post) {
				$scope.postBody = null;
			});
		}
	};

	$scope.$on('ws:new_post', function(_, post) {
		$scope.$apply(function() {
			$scope.posts.unshift(post);
		});
	});

	PostsService.fetch()
		.then(function(posts) {
			$scope.posts = posts;
		});
});
