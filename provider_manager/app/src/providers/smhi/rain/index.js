// Rain condition v 0.0.1

'use strict';

import SMHIHelper from './../SMHIHelper'

export default class Rain {
	static properties(){
		return { "color": { "type": "rgb"}}
	}

	static configuration(){
		return {"location": {type: "location"}}
	}

	static evaluate(config, result){
		try {
			SMHIHelper.apiRequest(config.location.value).then(function(response){

				let forecasts = SMHIHelper.parseHours(response, 12)
				let pmin_sum = 0
				let pmax_sum = 0
				let pavg_sum = 0.0
				let pmin_max = 0
				forecasts.map(function(forecast){

					let pmin = SMHIHelper.findParam(forecast, "pmin")
					if (pmin > pmin_max) pmin_max = pmin
					pmin_sum += SMHIHelper.findParam(forecast, "pmin")
					pmax_sum += SMHIHelper.findParam(forecast, "pmax")
					let pavg = (SMHIHelper.findParam(forecast, "pmin") + SMHIHelper.findParam(forecast, "pmax")) / 2
					pavg_sum += pavg

					// console.log(pmin)
					// console.log(SMHIHelper.findParam(forecast, "pmax"))
					// console.log(pavg)
					// console.log("-------------------------")
				})

				// console.log("highest min: %s", pmin_max)
				// console.log("total min: %s", pmin_sum)
				// console.log("total max: %s", pmax_sum)
				// console.log("total avg: %s", pavg_sum/12)

				let red = 0
				let green = 0
				let blue = 0

				if(  ( pavg_sum > 1 ) || ( pavg_sum/forecasts.length > 0.2 ) || ( pmin_max > 0.2 ) ) {
					blue = 255
				}

				let evaluated = {
					"properties": {
						"color": {
							"red": red || 0,
							"green": green || 0,
							"blue": blue || 0
						}
					},
					updated: new Date()
				}
				result.send(evaluated)
			})

		} catch(err) {
			console.log("Error on %s - %s", result.id, err)
		}
	}
}
