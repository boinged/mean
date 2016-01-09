var mongoose = require('mongoose');

var url = process.env.MONGOLAB_URL || 'mongodb://localhost/socialapp';
mongoose.connect(url);
module.exports = mongoose;
