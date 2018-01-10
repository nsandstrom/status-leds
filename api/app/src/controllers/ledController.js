// api/controllers/ledController.js

'use strict';

import Led from '../models/Led'


exports.list_all = async function(req, res) {
	try {
		let leds = await Led.get('leds');
		res.json(leds)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};

exports.create_new = async function(req, res) {
	try {
		let new_led = await Led.post('leds', req.body)
		res.json(new_led)
	} catch(err) {
		console.log(err)
		res.send(err);
	}
};

exports.show_one = async function(req, res) {
	try {
		let led = await Led.get('leds/' + req.params.id);
		res.json(led)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};

exports.update_one = async function(req, res) {
	try {		
		let led = await Led.post('leds/' + req.params.id, req.body)
		res.json(led)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};

exports.delete_one = async function(req, res) {
	try {
		let led = await Led.send('leds/' + req.params.id + "/delete", req.body)
		res.json(led)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
};

exports.show_one_color = async function(req, res) {
	try {
		let led = await Led.get('leds/' + req.params.id);
		let ledColor = led.properties.color
		res.json(ledColor)
	} catch(err) {
		console.log(err)
		res.statusCode = (500)
		res.send("error")
	}
};
