// routes/index.js

'use strict';

const express = require('express')
const routes = express.Router();

const providerRoutes = require('./providers');
const datatypeRoutes = require('./datatypes');
const ledRoutes = require('./leds');

routes.use('/providers', providerRoutes)
routes.use('/datatypes', datatypeRoutes)
routes.use('/leds', ledRoutes)

module.exports = routes
