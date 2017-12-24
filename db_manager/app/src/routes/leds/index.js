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


module.exports = ledRoutes
	// return ledRoutes


// };
