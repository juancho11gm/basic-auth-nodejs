const express = require('express');
const { getTest } = require('../../controllers');
const router = express.Router();

module.exports = function (app) {
	app.use('/', router);
	router.get('/', getTest);
};
