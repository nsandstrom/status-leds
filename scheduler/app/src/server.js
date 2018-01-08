// server.js

'use strict';

import Scheduler from './scheduler'

var messenger = require('@n_sandstrom/amqp-messenger'),
	fs = require('fs');

//initiate amqp connection
const amqp_host = process.env.AMQP_BROKER_HOSTNAME
const amqp_user = fs.readFileSync(process.env.AMQP_BROKER_USER_FILE, 'utf8').trim()
const amqp_password = fs.readFileSync(process.env.AMQP_BROKER_PASSWORD_FILE, 'utf8').trim()

let amqpHostname = "amqp://" + amqp_user + ":" + amqp_password + "@" + amqp_host

messenger.connect(amqpHostname).then(function() {
	let scheduler = new Scheduler()
	scheduler.start()
}).catch(console.warn);

console.log('Scheduler started');
