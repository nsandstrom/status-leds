// Temperature condition v 0.0.1

'use strict';

import SMHIHelper from './../SMHIHelper'

const high_diff_threshold = 3.0
const low_diff_threshold = 1.0

export default class Temperature {
	static properties(){
		return { "color": { "type": "rgb"}}
	}

	static config(){
		return {"location": {type: "location"}}
	}

	static evaluate(config, result){
		try {
			let p1 = SMHIHelper.getForecast(config.location.value)
			let p2 = SMHIHelper.getHistory(config.location.value)

			let hours
			if(config.hours) {
				hours = config.hours.value || 10
			}
			else {
				hours = 10
			}

			Promise.all([p1, p2]).then(values => {
				let forecasts = SMHIHelper.parseHours(values[0], 0, hours)
				let historics = SMHIHelper.parseHours(values[1], -24, -24 + hours)

				// console.log("new: %s, old: %s", forecasts.length, historics.length);

				let t_today = 0
				let t_yesterday = 0

				forecasts.map(function(forecast){
					t_today += SMHIHelper.findParam(forecast, "t")

					// console.log("Forecast:")
					// console.log(new Date(forecast.validTime))
					// console.log(SMHIHelper.findParam(forecast, "t"))
					// console.log("-------------------------")
				})

				historics.map(function(forecast){
					t_yesterday += SMHIHelper.findParam(forecast, "t")

					// console.log("History:")
					// console.log(new Date(forecast.validTime))
					// console.log(SMHIHelper.findParam(forecast, "t"))
					// console.log("-------------------------")
				})

				let t_avg_today = t_today / hours
				let t_avg_yesterday = t_yesterday / hours

				// console.log("Temp last: %s, new: %s", t_avg_yesterday, t_avg_today)
				// console.log("Diff: %s deg", t_avg_today - t_avg_yesterday)

				let red = 0
				let green = 0
				let blue = 0

				if (t_avg_today > t_avg_yesterday + high_diff_threshold ) {
					// Much warmer
					// console.log("Much warmer")
					red = 255
				}
				else if(t_avg_today > t_avg_yesterday + low_diff_threshold) {
					// A bit warmer
					// console.log("A bit warmer")
					red = 127
					green = 127
				}
				else if(t_avg_today + high_diff_threshold < t_avg_yesterday ){
					// Much colder
					// console.log("Much colder")
					blue = 255
				}
				else if(t_avg_today + low_diff_threshold < t_avg_yesterday ){
					// A bit colder
					// console.log("A bit colder")
					blue = 127
					green = 127
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

			});

		} catch(err) {
			console.log("Error on %s - %s", result.id, err)
		}
	}
}
