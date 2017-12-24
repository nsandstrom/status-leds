// routes/index.js

'use strict';

const express = require('express')
const routes = express.Router();

const providerRoutes = require('./providers');

routes.use('/providers', providerRoutes)

module.exports = routes