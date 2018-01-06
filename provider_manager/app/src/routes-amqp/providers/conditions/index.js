// routes/providers/conditions/index.js

'use strict';

const messenger = require('@n_sandstrom/amqp-messenger')

var condition = require('../../../controllers/conditionController');


const conditionRoutes = new messenger.Router()

conditionRoutes.route('')
	.get(condition.list_all)

conditionRoutes.route(':condition_id')
	.get(condition.show_one)
	.pub(condition.evaluate)

module.exports = conditionRoutes
