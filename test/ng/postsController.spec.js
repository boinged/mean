describe('PostsController', function() {
	beforeEach(module('app'));
	var $scope;
	var mockPostsService = {};

	beforeEach(inject(function($q) {
		mockPostsService.fetch = function() {
			var deferred = $q.defer();
			deferred.resolve([{
				username: 'boinged',
				body: 'first post'
			}, {
				username: 'boinged',
				body: 'second post'
			}]);
			return deferred.promise;
		};
	}));

	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		$controller('PostsController', {
			$scope: $scope,
			PostsService: mockPostsService
		});
	}));

	it('loads posts from the service', function() {
		$scope.$digest();
		expect($scope.posts).to.have.length(2);
	});
});
