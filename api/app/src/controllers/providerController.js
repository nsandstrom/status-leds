// api/controllers/providerController.js

'use strict';

import Provider from '../models/Provider'


exports.list_all = async function(req, res) {
	try {
		let providers = await Provider.get('providers');
		res.json(providers)
	} catch(err) {
		res.send(err)
	}
};

exports.show_one = async function(req, res) {
	try {
		let provider = await Provider.get('providers/' + req.params.id);
		res.json(provider)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};
