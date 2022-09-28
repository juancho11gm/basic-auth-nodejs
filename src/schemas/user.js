const joi = require('joi');

const username = joi.string().alphanum();
const password = joi.string().min(8);

const createUserSchema = joi.object({
	username: username.required(),
	password: password.required(),
});

module.exports = {
	createUserSchema,
};
