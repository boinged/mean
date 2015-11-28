angular.module('app')
	.run(function($rootScope, $timeout) {
		(function connect() {
			var url = 'ws://localhost:3000';
			var connection = new WebSocket(url);
			connection.onopen = function() {
				console.log('WebSocket connected');
			};
			connection.onclose = function() {
				console.log('WebSocket closed. Reconnecting...');
				$timeout(connect, 10 * 1000);
			};
			connection.onmessage = function(message) {
				console.log(message);
				var payload = JSON.parse(message.data);
				$rootScope.$broadcast('ws:' + payload.topic, payload.data);
			};
		})();
	});
