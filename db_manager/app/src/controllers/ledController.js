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

		let led = new Led(req.body);
		let save_status = await led.save()
		res.json(save_status)
	} catch(err) {
		let errorMsg = err.message || "DB Create Error"
		console.log(errorMsg)
		res.send(errorMsg);
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

exports.pending = async function(req, res) {
	try {
		let minute = parseInt(req.params.minute)
		if (minute == NaN) minute = 1
		console.log("check time at minute %s", minute)
		let leds = await Led.aggregate([
			{ $project: {  _id: 0, id: 1, interval:1, remainder: { $mod: [ minute, "$interval" ] } }  },
			{ $match : {remainder:0} },
			{ $project: {   id: 1, interval: 1 } }
		])
		res.json(leds)
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