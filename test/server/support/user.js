var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../../../config');
var User = require('../../../models/user');

exports.create = function(username, password, callback) {
	var user = new User({
		username: username
	});
	bcrypt.hash(password, 10, function(error, hash) {
		if (error) {
			return callback(error);
		}
		user.password = hash;
		user.save(function(error) {
			if (error) {
				return callback(error);
			}
			user.token = jwt.sign({
				username: user.username
			}, config.secret);
			callback(null, user);
		});
	});
};
