// src/AmqpCall.js

const messenger = require('@n_sandstrom/amqp-messenger')

export default class AmqpCall {

	static get(queue, reqPath){
		return new Promise((resolve, reject) => {
			messenger.get(queue, reqPath).then(function(message) {
				if(message.content){
					var body = JSON.parse(message.content)
					resolve(body)
				}
				messenger.ack(message);
				return 0
			}).catch(function(error){
				reject(error)
			});
		});
	}

	static post(queue, reqPath, data){
		return new Promise((resolve, reject) => {
			messenger.post(queue, reqPath, data).then(function(message) {
				if(message.content){
					var body = JSON.parse(message.content)
					resolve(body)
				}
				messenger.ack(message);
				return 0
			}).catch(function(error){
				reject(error)
			});
		});
	}
}
