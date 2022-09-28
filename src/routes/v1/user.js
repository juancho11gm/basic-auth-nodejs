const express = require('express');
const passport = require('passport');
const { createUserSchema } = require('../../schemas/user');
const validatorHandler = require('../../middlewares/validator');
const { postLogin, postRegister, getPrivate } = require('../../controllers');
const router = express.Router();

module.exports = function (app) {
	app.use('/user', router);

	router
		.get(
			'/private',
			passport.authenticate('jwt', { session: false }),
			getPrivate
		)
		.post('/login', validatorHandler(createUserSchema, 'body'), postLogin)
		.post(
			'/register',
			validatorHandler(createUserSchema, 'body'),
			postRegister
		);
};
