describe('postsService', function() {
	beforeEach(module('app'));
	var PostsService;
	var $httpBackend;

	beforeEach(inject(function(_PostsService_, _$httpBackend_) {
		PostsService = _PostsService_;
		$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.flush();
	});

	describe('#fetch', function() {
		beforeEach(function() {
			$httpBackend.expect('GET', '/api/posts')
				.respond([{
					username: 'boinged',
					body: 'first post'
				}, {
					username: 'boinged',
					body: 'second post'
				}]);
		});
		it('gets 2 posts', function() {
			PostsService.fetch().success(function(posts) {
				expect(posts).to.have.length(2);
			});
		});
	});

	describe('#create', function() {
		beforeEach(function() {
			$httpBackend.expect('POST', '/api/posts')
			.respond({
				username: 'boinged',
				body: 'created post'
			});
		});
		it('creates a post', function() {
			PostsService.create({username: 'boinged', body: 'created post'}).success(function(response) {
				expect(response).to.exist;
				expect(response.username).to.equal('boinged');
			});
		});
	});
});
