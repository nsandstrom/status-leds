// routes/index.js

'use strict';

const express = require('express')
const routes = express.Router();

const ledRoutes = require('./leds');

routes.use('/leds', ledRoutes)
// routes.use('/providers', providerRoutes)

module.exports = routes