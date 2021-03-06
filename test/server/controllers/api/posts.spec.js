var expect = require('chai').expect;
var api = require('../../support/api');
var user = require('../../support/user');
var Post = require('../../../../models/post');
var User = require('../../../../models/user');

describe('controllers.api.posts', function() {
	beforeEach(function(done) {
		Post.remove({}, function() {
			User.remove({}, done);
		});
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
	describe('POST /api/posts', function() {
		var token;

		beforeEach(function(done) {
			user.create('boinged', 'pass', function(error, user) {
				token = user.token;
				done(error);
			});
		});
		beforeEach(function(done) {
			api.post('/api/posts')
				.send({
					body: 'this is my new post'
				})
				.set('X-Auth', token)
				.expect(201)
				.end(done);
		});
		it('added 1 new post', function(done) {
			Post.findOne(function(error, post) {
				expect(post.body).to.equal('this is my new post');
				done(error);
			});
		});
	});
});
