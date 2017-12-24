// api/controllers/providerController.js

'use strict';


var mongoose = require('mongoose'),
	Led = mongoose.model('Led');


exports.list_all = async function(req, res) {
	try {
		let leds = await Led.find({}).limit(1000);
		res.json(leds)
	} catch(err) {
		res.send(err)
	}
};

exports.create_new = async function(req, res) {
	try {
		console.log(req.body)
		// let parsed_urls = parse_urls(req.body.url)
		let response = {}

		// if (parsed_urls.accepted.length == 0)
		// 	throw(response)

		// let orders = build_order(parsed_urls.accepted);

		let led = new Led(req.body);
		let save_status = await led.save()
		response.accepted = save_status
		res.json(save_status)
	} catch(err) {
		console.log(err)
		res.send(err);
	}
}

exports.show_one = async function(req, res) {
	try {		
		let led = await Led.findOne({id: req.params.id})
		res.json(led)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
}

exports.update_one = async function(req, res) {
	try {		
		let led = await Led.findOneAndUpdate({id: req.params.id}, req.body, {new: true})
		res.json(led)
	} catch(err) {
		console.log(err)
		res.send(err)
	}
}

//private

/*
{ 
	"id": 15,
	"provider": "Manual",
	"condition": "Color",
	"interval": 15,
	"config" : {
        "color": {
            "type": "rgb",
            "value": {
                "red": 255,
                "green": 0,
                "blue": 0
            }
        }
    }
	
}
*/