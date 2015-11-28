var bodyParser = require('body-parser');
var express = require('express');
var websockets = require('./websockets');

var app = express();
app.use(bodyParser.json());
app.use(require('./auth'));
app.use('/api/posts', require('./controllers/api/posts'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));
app.use('/', require('./controllers/static'));

var server = app.listen(3000, function() {
	console.log('Server listening on ', 3000);
});

websockets.connect(server);
