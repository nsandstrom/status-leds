// routes/ledRoutes.js

'use strict';
const express = require('express')

const led = require('../../controllers/ledController');


const ledRoutes = express.Router();

ledRoutes.route('/')
	.get(led.list_all)
	.post(led.create_new)

ledRoutes.route('/:id')
	.get(led.show_one)
	.post(led.update_one)
	.delete(led.delete_one)

ledRoutes.route('/:id/color')
	.get(led.show_one_color)


module.exports = ledRoutes
