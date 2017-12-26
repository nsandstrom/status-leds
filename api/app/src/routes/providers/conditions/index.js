// routes/providers/conditions/index.js

'use strict';

const express = require('express')

var condition = require('../../../controllers/conditionController');


const conditionRoutes = express.Router({ mergeParams: true });

conditionRoutes.route('/')
	.get(condition.list_all)

conditionRoutes.route('/:condition_id')
	.get(condition.show_one)


module.exports = conditionRoutes