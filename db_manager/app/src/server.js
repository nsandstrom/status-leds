// server.js

'use strict';

var express = require('express'),
	app = express(),
	port = process.env.PORT || 80,
	mongoose = require('mongoose'),
	Led = require('./models/ledModel'),
	bodyParser = require('body-parser');

const connection_string = process.env.MONGODB_CONNECTION_STRING

mongoose.Promise = global.Promise
mongoose.connect(connection_string, {useMongoClient: true})

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

console.log('DB manager started on: ' + port);
