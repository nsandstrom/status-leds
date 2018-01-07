// scheduler.js

'use strict';

var messenger = require('@n_sandstrom/amqp-messenger')
var databaseQueue = process.env.DB_MANAGER_QUEUE
var providerQueue = process.env.PROVIDER_MANAGER_QUEUE

export default class Scheduler{
	
	start(){
		Scheduler.nextMinute()		
	}

	static fetchLeds(){
		try {
			let minute = new Date().getMinutes()
			let reqPath = "leds/pending/" + minute
			messenger.get(databaseQueue, reqPath ).then(function(message) {
				let leds = JSON.parse(message.content)
				leds.forEach(function(led){
					Scheduler.evaluate(led.id)
				})
				messenger.ack(message);
			});
		} catch(err) {
			console.log("Fetch cycle error")
		}
	}

	static evaluate(id){
		try {
			let reqPath = "leds/" + id
			let send_options = { persistent: true }
			messenger.get(databaseQueue, reqPath, send_options ).then(function(message) {

				let body = JSON.parse(message.content)
				let data = {id: body.id, config: body.config}
				reqPath = "providers/" + body.provider + "/conditions/" + body.condition

				messenger.ack(message);
				return messenger.send(providerQueue, reqPath, data).then(function(message) {				
					
				});
			}).catch(function(error){
				console.log(error)
			});
		} catch(err) {
			console.log("Led %s error", id)
		}
	}

	static nextMinute(){
		let startTime = new Date()
		let ms = 999 - startTime.getMilliseconds()
		let sec = 59 - startTime.getSeconds()
		let delay = 1000 * sec + ms

		setTimeout(function(){
			setInterval(Scheduler.fetchLeds, 60000);
			return true
		}, delay);
	}
}

