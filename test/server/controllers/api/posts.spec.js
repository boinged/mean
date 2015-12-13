var expect = require('chai').expect;
var api = require('../../support/api');
var Post = require('../../../../models/post');

describe('controllers.api.posts', function() {
	beforeEach(function(done) {
		Post.remove({}, done);
	});
	describe('GET /api/posts', function() {
		beforeEach(function(done) {
			var posts = [{
				body: 'post1',
				username: 'boinged'
			}, {
				body: 'post2',
				username: 'boinged'
			}, {
				body: 'post3',
				username: 'boinged'
			}];
			Post.create(posts, done);
		});
		it('exists', function(done) {
			api.get('/api/posts')
				.expect(200)
				.end(done);
		});
		it('has 3 posts', function(done) {
			api.get('/api/posts')
				.expect(200)
				.expect(function(posts) {
					if (posts.body.length !== 3) {
						return "posts count should be 3";
					}
				})
				.end(done);
		});
	});
});
