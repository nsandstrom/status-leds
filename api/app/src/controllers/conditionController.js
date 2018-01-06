// api/controllers/conditionController.js

'use strict';

import Provider from '../models/Provider'


exports.list_all = async function(req, res) {
	try {
		let reqPath = 'providers/' + req.params.id + "/conditions"
		let conditions = await Provider.get(reqPath);
		res.json(conditions)
	} catch(err) {
		res.send(err)
	}
};

exports.show_one = async function(req, res) {
	try {
		let reqPath = 'providers/' + req.params.id + "/conditions/" + req.params.condition_id
		let condition = await Provider.get(reqPath);
		res.json(condition)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};
