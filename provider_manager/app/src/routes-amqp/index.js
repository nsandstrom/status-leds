// routes/index.js

'use strict';

const messenger = require('@n_sandstrom/amqp-messenger')
const routes = new messenger.Router()

const providerRoutes = require('./providers');

routes.use('providers', providerRoutes)

module.exports = routes