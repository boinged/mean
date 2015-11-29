angular.module('app')
	.service('WebSocketService', function($rootScope, $timeout, $window) {
		var service = this;

		var websocketHost = function() {
			if ($window.location.protocol === 'https:') {
				return 'wss://' + $window.location.host;
			} else {
				return 'ws://' + $window.location.host;
			}
		};

		var connection;

		this.connect = function() {
			var url = websocketHost();
			console.log('connecting to ' + url);
			connection = new WebSocket(url);
			connection.onopen = function() {
				console.log('WebSocket connected');
			};
			connection.onclose = function() {
				console.log('WebSocket closed. Reconnecting...');
				$timeout(service.connect, 10 * 1000);
			};
			connection.onmessage = function(message) {
				console.log(message);
				var payload = JSON.parse(message.data);
				$rootScope.$broadcast('ws:' + payload.topic, payload.data);
			};
		};

		this.send = function(topic, data) {
			var json = JSON.stringify({topic:topic, data:data});
			connection.send(json);
		};
	})
	.run(function(WebSocketService, $rootScope, $timeout) {
		WebSocketService.connect();
	});
