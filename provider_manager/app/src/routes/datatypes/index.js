// routes/orderRoutes.js

'use strict';

const express = require('express')

const datatype = require('../../controllers/datatypeController');


const datatypeRoutes = express.Router();

datatypeRoutes.route('/')
	.get(datatype.list_all)

datatypeRoutes.route('/:id')
	.get(datatype.show_one)


module.exports = datatypeRoutes
