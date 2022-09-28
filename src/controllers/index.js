const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const config = require('../config');
const users = require('../db');
const { hashPassword, comparePasswords } = require('../utils');

async function postLogin(req, res) {
	const { body } = req;

	const { username, password } = body || {};
	if (!username || !password) {
		res.status = 400;
		res.json({ error: 'Please provide all the information.' });
		return;
	}

	const user = users.find((u) => u.username === username);
	if (!user) {
		res.status = 403;
		res.json({ error: 'The username does not exists.' });
		return;
	}

	const doesPasswordMatch = await comparePasswords(
		password,
		user.hashedPassword
	);
	if (!doesPasswordMatch) {
		res.status = 403;
		res.json({ error: 'Invalid password' });
		return;
	}

	// 300 seconds
	const jwtExpirySeconds = 300;
	const token = jwt.sign({ username }, config.JWT_KEY, {
		algorithm: 'HS256',
		expiresIn: jwtExpirySeconds,
	});

	res.status = 201;
	res.json({ token });
}

async function postRegister(req, res, next) {
	const { body } = req;
	const { username, password } = body || {};
	if (!username || !password) {
		res.status = 400;
		res.json({ error: 'Please provide all the information.' });
		return;
	}

	const hashedPassword = await hashPassword(password);

	const user = {
		username,
		hashedPassword,
	};

	const alreadyExist = users.find((user) => user.username === username);

	if (alreadyExist) {
		next(boom.conflict('The user already exists.'));
		return;
	}

	users.push(user);
	res.status = 201;
	res.json({ users });
}

function getPrivate(req, res) {
	res.json({ message: `You've logged in succesfully.`, user: req.user });
}

function getTest(req, res) {
	res.json({ message: 'The API is working.' });
}

module.exports = {
	postLogin,
	postRegister,
	getPrivate,
	getTest,
};
