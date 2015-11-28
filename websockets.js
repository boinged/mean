var _ = require('lodash');
var ws = require('ws');
var clients = [];

exports.connect = function(server) {
	var webSocketServer = new ws.Server({
		server: server
	});
	webSocketServer.on('connection', function(client) {
		clients.push(client);

		client.on('close', function() {
			_.remove(clients, clients);
		});
	});
};

exports.broadcast = function(topic, data) {
	var json = JSON.stringify({
		topic: topic,
		data: data
	});
	clients.forEach(function(client) {
		client.send(json);
	});
};
