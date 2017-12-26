// routes/index.js

'use strict';

const express = require('express')
const routes = express.Router();

const providerRoutes = require('./providers');
const ledRoutes = require('./leds');

routes.use('/providers', providerRoutes)
routes.use('/leds', ledRoutes)

module.exports = routes