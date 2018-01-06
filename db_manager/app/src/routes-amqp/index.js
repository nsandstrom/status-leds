// routes-amqp/index.js

'use strict';

const messenger = require('@n_sandstrom/amqp-messenger')
const ledRoutes = require('./leds');

const routes = new messenger.Router()

routes.use('leds', ledRoutes)

module.exports = routes