// server.js

'use strict';

var express = require('express'),
	messenger = require('@n_sandstrom/amqp-messenger'),
	app = express(),
	port = process.env.PORT || 80,
	bodyParser = require('body-parser'),
	fs = require('fs');

global.DB_MANAGER_URL = process.env.DB_MANAGER_URL;
global.PROVIDER_MANAGER_URL = process.env.PROVIDER_MANAGER_URL;

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
const amqp_host = process.env.AMQP_BROKER_HOSTNAME
const amqp_user = fs.readFileSync(process.env.AMQP_BROKER_USER_FILE, 'utf8').trim()
const amqp_password = fs.readFileSync(process.env.AMQP_BROKER_PASSWORD_FILE, 'utf8').trim()

let amqpHostname = "amqp://" + amqp_user + ":" + amqp_password + "@" + amqp_host

messenger.connect(amqpHostname).then(function() {

}).catch(console.warn);

console.log('External API started on port: %s', port);
