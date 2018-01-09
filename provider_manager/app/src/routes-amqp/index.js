// routes/index.js

'use strict';

const messenger = require('@n_sandstrom/amqp-messenger')
const routes = new messenger.Router()

const providerRoutes = require('./providers');
const datatypeRoutes = require('./datatypes');

routes.use('providers', providerRoutes)
routes.use('datatypes', datatypeRoutes)

module.exports = routes
