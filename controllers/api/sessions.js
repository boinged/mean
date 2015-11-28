var router = require('express').Router();
var User = require('../../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var config = require('../../config');

router.post('/', function(request, response, next) {
	User.findOne({username: request.body.username})
	.select('+password')
	.exec(function(error, user) {
		if (error) {
			return next(error);
		}
		if (!user) {
			return response.sendStatus(401);
		}
		bcrypt.compare(request.body.password, user.password, function(error, valid) {
			if (error) {
				return next(error);
			}
			if (!valid) {
				return response.sendStatus(401);
			}
			var token = jwt.encode({
				username: user.username
			}, config.secret);
			response.send(token);
		});
	});
});
module.exports = router;
