describe('making a post', function() {
	it('logs in and creates a new post', function() {
		browser.get('http://localhost:3001');
		element(by.css('nav .login')).click();
		// fill out and submit login form
		// submit a new post on the posts page
		// the user sohuld now see their post as the first post on the page
	});
});
