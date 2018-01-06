// server.js

'use strict';

var express = require('express'),
	messenger = require('@n_sandstrom/amqp-messenger'),
	app = express(),
	port = process.env.PORT || 80,
	mongoose = require('mongoose'),
	Led = require('./models/ledModel'),
	bodyParser = require('body-parser'),
	fs = require('fs');


// Initiate database connection
const connection_string = process.env.MONGODB_CONNECTION_STRING
mongoose.Promise = global.Promise
mongoose.connect(connection_string, {useMongoClient: true})

// Initiate http api
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes')
app.use(routes)

app.listen(port);

//initiate amqp connection
const listen_queue = process.env.DB_MANAGER_QUEUE
const amqp_host = process.env.AMQP_BROKER_HOSTNAME
const amqp_user = fs.readFileSync(process.env.AMQP_BROKER_USER_FILE, 'utf8').trim()
const amqp_password = fs.readFileSync(process.env.AMQP_BROKER_PASSWORD_FILE, 'utf8').trim()

let amqpHostname = "amqp://" + amqp_user + ":" + amqp_password + "@" + amqp_host
var amqpRoutes = require('./routes-amqp')
messenger.use(amqpRoutes)
messenger.connect(amqpHostname).then(function() {
	messenger.initQueue(listen_queue, {durable: true}).then(function(q) {
		messenger.listen(listen_queue)
	});
}).catch(console.warn);
console.log(messenger.router.toString())

console.log('DB manager started on port: %s and queue: %s', port, listen_queue);
