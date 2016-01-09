var mongoose = require('mongoose');

var url = process.env.MONGOLAB_URL || 'mongodb://localhost/socialapp';
console.log('url ' + url);
mongoose.connect(url);
module.exports = mongoose;
