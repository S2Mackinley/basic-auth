'use strict';
const dotenv = require('dotenv');
require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server');

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGOD_URI;

mongoose
	.connect(MONGODB_URI, { usNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		server.start(PORT);
	})
	.catch((e) => console.error(e.message));
