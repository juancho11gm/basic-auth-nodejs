const test = require('./v1/test');
const user = require('./v1/user');

module.exports = function (app) {
	test(app);
	user(app);
};
