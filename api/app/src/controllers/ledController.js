// api/controllers/ledController.js

'use strict';

import Led from '../models/Led'


exports.list_all = async function(req, res) {
	try {
		let leds = await Led.list_all();
		res.json(leds)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};

exports.create_new = async function(req, res) {
	try {
		let new_led = await Led.create_new(req.body)
		res.json(new_led)
	} catch(err) {
		console.log(err)
		res.send(err);
	}
};

exports.show_one = async function(req, res) {
	try {
		let led = await Led.show_one(req.params.id);
		res.json(led)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};

exports.update_one = async function(req, res) {
	try {		
		let led = await Led.update_one(req.params.id, req.body)
		res.json(led)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};
