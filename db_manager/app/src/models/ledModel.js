// models/orderModel.js
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LedSchema = new Schema({
	id: {
		type: Number,
		required: 'Id must be provided'
	},
	location: {
		type: String,
		default: ""
	},
	provider: {
		type: String,
		required: 'Provider must be provided'
	},
	condition: {
		type: String,
		required: 'Condition must be provided'
	},
	config: {
		type: Schema.Types.Mixed,
		default: false
	},
	interval: {
		type: Number,
		required: 'Interval required'
	},
	properties: {
		color: {
			red: {
				type: Number,
				default: 0
			},
			green: {
				type: Number,
				default: 0
			},
			blue: {
				type: Number,
				default: 0
			}
		}
	},
	updated: Date
});

LedSchema.index({ "id": 1}, { "name": "uni_id_", "unique": true })

module.exports = mongoose.model('Led', LedSchema)
console.log("Loaded Led schema")