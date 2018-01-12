// src/providers/smhi/conditions/SMHIHelper.js

'use strict';

import ApiCall from '../../ApiCall'

var fs = require('fs');

const base_url = "https://api.sl.se/api2/realtimedeparturesV4.json?"
const api_key = fs.readFileSync(process.env.SL_API_KEY_FILE, 'utf8').trim()

export default class SLHelper{

	static getRealtime(station){
		let url = base_url
		url += `key=${api_key}`
		url += `&SiteId=${station}`
		url += `&TimeWindow=30`
		return ApiCall.get(url);
	}

	static getHistory(location){
		var url = history_url + "/lon/" + location.long + "/lat/" + location.lat + "/data.json"
		return ApiCall.get(url);
	}

	static selectTraffic(response, traffic){
		// Select traffic type. Metros, Buses, Trains
		traffic = traffic.toLowerCase()
		
		if(traffic == "trains"){
			return response.ResponseData.Trains
		}

		else if(traffic == "buses"){
			return response.ResponseData.Buses
		}
		
		else if(traffic == "metros"){
			return response.ResponseData.Metros
		}
		
		else if(traffic == "subway"){
			return response.ResponseData.Metros
		}
		
		return []
		
	}

	static findParam(forecast, param){
		return forecast.parameters.find(p => p.name == param).values[0]
	}

}

