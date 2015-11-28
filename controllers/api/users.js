var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var User = require('../../models/user');
var config = require('../../config');

router.get('/', function(request, response, next) {
	if (!request.headers['x-auth']) {
		return response.sendStatus(401);
	}
	var token = request.headers['x-auth'];
	var auth = jwt.decode(token, config.secret);
	User.findOne({username: auth.username}, function(error, user) {
		if (error) {
			return next(error);
		}
		response.json(user);
	});
});

router.post('/', function(request, response, next) {
	var user = new User({username: request.body.username});
	bcrypt.hash(request.body.password, 10, function(error, hash) {
		user.password = hash;
		user.save(function(error, user) {
			if (error) {
				return next(error);
			}
			response.sendStatus(201);
		});
	});
});

module.exports = router;
