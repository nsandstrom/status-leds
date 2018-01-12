// properties [bool]

'use strict';

import SLHelper from './../SLHelper'

export default class Deviations {
	static properties(){
		// return [{"name": "trafficDeviation", "type": "boolean"}]
		return { "color": { "type": "rgb"}}
	}

	static config(){
		return {"station": {type: "text"}, "traffic": {type: "text"}, "lines": {type: "text"}, "direction": {type: "number"} }
	}

	static evaluate(config, result){
		let station = ""
		let traffic = ""
		let lines = []
		let direction = 0

		if(config.station && config.station.value) {	station = config.station.value._text || ""  }
		if(config.traffic && config.traffic.value) {	traffic = config.traffic.value._text || ""	}
		if(config.lines && config.lines.value){
			let linesRaw = config.lines.value._text || ""
			if(linesRaw.trim() != "") lines = linesRaw.split(",").map(item => item.trim());
		}
		if(config.direction && config.direction.value) { direction = parseInt(config.direction.value._number) || 0}

		// console.log(station)
		// console.log(traffic)
		// console.log(lines)
		// console.log(direction)

		SLHelper.getRealtime(station).then(function(response){
			// Select traffic type. Metros, Buses, Trains

			let departures = SLHelper.selectTraffic(response, traffic)
			console.log("total %s", departures.length)


			let filtered = departures.filter( departure => {
				let isOk = true
				if( lines.length > 0 && !lines.includes(departure.LineNumber) ) isOk = false

				if( direction > 0 && departure.JourneyDirection != direction) isOk = false
				return isOk
			})
			console.log("filtered %s", filtered.length)
			let departuresCount = filtered.length
			let trainTimes = []
			let maxDelay = 0
			let totalDelay = 0
			filtered.map( time => {
				let delay = (( new Date(time.ExpectedDateTime)) - (new Date(time.TimeTabledDateTime))  ) / 60000
				if(delay > maxDelay) maxDelay = delay
				totalDelay += delay
				let trainTime = [delay, time.TimeTabledDateTime, time.ExpectedDateTime]
				trainTimes.push(trainTime)
			})
			let avgDelay = ( totalDelay / departuresCount ) || 0

			// console.log(trainTimes)

			console.log("avg delay: %s", avgDelay)
			console.log("max delay: %s", maxDelay)

			let red = 0
			let green = 100
			let blue = 0

			if(  avgDelay > 10 || maxDelay > 15 ) {
				red = 255
				green = 0
			}
			else if( avgDelay > 5 || maxDelay > 8 ) {
				red = 127
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

		})
		return {}
	}
}