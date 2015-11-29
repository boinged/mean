exports.config = {
	framework: 'mocha',
	specs: [
		'test/endtoend/**/*.spec.js'
	],
	mochaOpts: {
		enableTimeouts: false
	},
	onPrepare: function() {
		process.env.PORT = 3001;
		require('./index');
	}
};
