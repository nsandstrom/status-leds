// providers/result.js

var messenger = require('@n_sandstrom/amqp-messenger')
var db_queue = process.env.DB_MANAGER_QUEUE
var basePath = "leds/"

export default class Result {
	constructor(id){
		this.id = id;
	}

	send(result){
		messenger.post(db_queue, basePath + this.id, result).then(function(message) {
			if(message.content){
				let body = JSON.parse(message.content)
				console.log("Received reply from DB, id %s", body.id);
				messenger.ack(message);
			}
		}).catch(console.warn);
	}
}