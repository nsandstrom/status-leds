// routes/orderRoutes.js

'use strict';

const messenger = require('@n_sandstrom/amqp-messenger')

const provider = require('../../controllers/providerController');


const providerRoutes = new messenger.Router()

providerRoutes.use(':id/conditions', require('./conditions'));

providerRoutes.route('')
	.get(provider.list_all)

providerRoutes.route(':id')
	.get(provider.show_one)

module.exports = providerRoutes
