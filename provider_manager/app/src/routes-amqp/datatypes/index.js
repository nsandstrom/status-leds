// routes/orderRoutes.js

'use strict';

const messenger = require('@n_sandstrom/amqp-messenger')

const datatype = require('../../controllers/datatypeController');


const datatypeRoutes = new messenger.Router()

datatypeRoutes.route('')
	.get(datatype.list_all)

datatypeRoutes.route(':id')
	.get(datatype.show_one)


module.exports = datatypeRoutes
