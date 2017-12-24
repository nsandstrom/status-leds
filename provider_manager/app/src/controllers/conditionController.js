// api/controllers/conditionController.js

'use strict';

import Providers from '../providers/providerManager.js';

exports.list_all = async function(req, res) {
	try {
		res.json(Providers.listConditions(req.params.id))
	} catch(err) {
		res.send(err)
	}
};

exports.show_one = async function(req, res) {
	try {		
		res.json(Providers.show_condition(req.params.id, req.params.condition_id))
	} catch(err) {
		console.log("Error " + err)
		res.send(err)
	}
}

exports.evaluate = async function(req, res) {
	try {
		res.json(Providers.evaluate_condition(req.params.id, req.params.condition_id, req.body.config))
	} catch(err) {
		console.log("Error " + err)
		res.send(err)
	}
}

//private
