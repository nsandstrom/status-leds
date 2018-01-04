// server.js

'use strict';

var express = require('express'),
	app = express(),
	port = process.env.PORT || 80,
	bodyParser = require('body-parser');

global.DB_MANAGER_URL = process.env.DB_MANAGER_URL;
global.PROVIDER_MANAGER_URL = process.env.PROVIDER_MANAGER_URL;

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

console.log('External API started on: ' + port);