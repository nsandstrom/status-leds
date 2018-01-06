// routes-amqp/leds/index.js

'use strict';
const messenger = require('@n_sandstrom/amqp-messenger')

const led = require('../../controllers/ledController');

const ledRoutes = new messenger.Router()

ledRoutes.route('')
	.get(led.list_all)
	.post(led.create_new)

ledRoutes.route(':id')
	.get(led.show_one)
	.post(led.update_one)

module.exports = ledRoutes
