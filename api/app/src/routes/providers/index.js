// routes/orderRoutes.js

'use strict';

const express = require('express')

const provider = require('../../controllers/providerController');


const providerRoutes = express.Router();

providerRoutes.use('/:id/conditions', require('./conditions'));

providerRoutes.route('/')
	.get(provider.list_all)

providerRoutes.route('/:id')
	.get(provider.show_one)


module.exports = providerRoutes
