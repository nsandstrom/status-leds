// api/controllers/datatypeController.js

'use strict';

import Datatype from '../datatypes';

exports.list_all = async function(req, res) {
	try {
		let datatypes = Datatype.list_all()
		res.json(datatypes)
	} catch(err) {
		res.send(err)
	}
};

exports.show_one = async function(req, res) {
	try {		
		res.json(Datatype.show_one(req.params.id))
	} catch(err) {
		res.send(err)
	}
}
