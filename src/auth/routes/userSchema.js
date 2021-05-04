'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('../models/userSchema.js');

const basicAuth = require('../middleware/basicAuth.js');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
	try {
		req.body.password = await bcrypt.hash(req.body.password, 5);
		const user = new Users(req.body);
		const record = await user.save(req.body);
		res.status(201).json(record);
	} catch (e) {
		res.status(403).send('Error Creating User');
	}
});


router.post('/signin', basicAuth, async (req, res, next) => {
	res.status(200).json(req.user);
});

module.exports = router;
