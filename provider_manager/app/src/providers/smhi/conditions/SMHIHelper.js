// src/providers/smhi/conditions/SMHIHelper.js

'use strict';

import ApiCall from '../../../ApiCall'

var base_url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point"

export default class SMHIHelper{

	static apiRequest(location){
		var url = base_url + "/lon/" + location.long + "/lat/" + location.lat + "/data.json"
		return ApiCall.get(url);
	}

	static parseHours(data, hours){
		let now = new Date
		let cutof_date = new Date
		cutof_date.setHours(cutof_date.getHours() + hours)
		let forecasts = data.timeSeries.filter(SMHIHelper.is_within(now, cutof_date))
		return forecasts
	}

	static is_within(start_date, cutof_date) {	//Use with array.filter
		return function(forecast){
			let forecast_date = new Date(forecast.validTime)
			return start_date < forecast_date && forecast_date < cutof_date
		}
	}

	static findParam(forecast, param){
		return forecast.parameters.find(p => p.name == param).values[0]
	}

	static getPCategory(cat) {
		let categories = [
			"No precipitation",
			"Snow",
			"Snow and rain",
			"Rain",
			"Drizzle",
			"Freezing rain",
			"Freezing drizzle"
		]
		return categories[cat]
	}
}

