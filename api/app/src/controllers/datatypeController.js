// api/controllers/datatypeController.js

'use strict';

import Provider from '../models/Provider'


exports.list_all = async function(req, res) {
	try {
		let datatypes = await Provider.get('datatypes');
		res.json(datatypes)
	} catch(err) {
		res.send(err)
	}
};

exports.show_one = async function(req, res) {
	try {
		let datatype = await Provider.get('datatypes/' + req.params.id);
		res.json(datatype)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};
