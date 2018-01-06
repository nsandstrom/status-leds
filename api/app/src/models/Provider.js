// src/models/Provider.js

'use strict';

import AmqpCall from '../AmqpCall'

const queue = 'provider_queue'

export default class Provider {

	static get(reqPath){
		return AmqpCall.get(queue, reqPath)
	}

	static post(reqPath, data){
		return AmqpCall.post(queue, reqPath, data)
	}
}
