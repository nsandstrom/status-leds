// api/controllers/providerController.js

'use strict';

import Provider from '../models/Provider'


exports.list_all = async function(req, res) {
	try {
		let providers = await Provider.list_all();
		res.json(providers)
	} catch(err) {
		res.send(err)
	}
};

exports.show_one = async function(req, res) {
	try {
		let provider = await Provider.show_one(req.params.id);
		res.json(provider)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};
