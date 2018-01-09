// api/controllers/conditionController.js

'use strict';

import Provider from '../providers/providerManager.js';

exports.list_all = async function(req, res) {
	try {
		res.json(Provider.listConditions(req.params.id))
	} catch(err) {
		res.send(err)
	}
};

exports.show_one = async function(req, res) {
	try {		
		res.json(Provider.show_condition(req.params.id, req.params.condition_id))
	} catch(err) {
		console.log("Error " + err)
		res.send(err)
	}
}

exports.evaluate = async function(req, res) {
	try {
		Provider.evaluate_condition(req.params.id, req.params.condition_id, req.body.id, req.body.config)
		if(res) res.json("Order received")
	} catch(err) {
		console.log("Error " + err)
		res.send(err)
	}
}
