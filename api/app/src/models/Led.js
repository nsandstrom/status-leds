// src/models/Led.js

'use strict';

import AmqpCall from '../AmqpCall'

const queue = 'db_queue'

export default class Led {

	static get(reqPath){
		return AmqpCall.get(queue, reqPath)
	}

	static post(reqPath, data){
		return AmqpCall.post(queue, reqPath, data)
	}
}
