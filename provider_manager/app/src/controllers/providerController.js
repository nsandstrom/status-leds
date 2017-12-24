// api/controllers/providerController.js

'use strict';

import Providers from '../providers/providerManager.js';

exports.list_all = async function(req, res) {
	try {
		let orders = Providers['list_all']()
		res.json(orders)
	} catch(err) {
		res.send(err)
	}
};

exports.show_one = async function(req, res) {
	try {		
		res.json(Providers.show_one(req.params.id))
	} catch(err) {
		res.send(err)
	}
}

//private
