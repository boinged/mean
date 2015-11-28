var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/socialapp', function() {
  console.log('mongodb connected');
});
module.exports = mongoose;
