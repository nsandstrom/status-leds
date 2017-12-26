// api/controllers/conditionController.js

'use strict';

import Provider from '../models/Provider'


exports.list_all = async function(req, res) {
	try {
		let conditions = await Provider.list_all_conditions(req.params.id);
		res.json(conditions)
	} catch(err) {
		res.send(err)
	}
};

exports.show_one = async function(req, res) {
	try {
		let condition = await Provider.show_one_condition(req.params.id, req.params.condition_id);
		res.json(condition)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};
