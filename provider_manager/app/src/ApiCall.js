// src/ApiCall.js

var request = require('request');

export default class ApiCall {
	static get(address){
		return new Promise((resolve, reject) => {
			request(address, function(error, response, body) {
				if(error) {
					reject(error)
					return false
				}
				if(response.statusCode === 200) {
					resolve(JSON.parse(body))
				}
				else {
					reject(response.statusCode)
				}
			});
		});
	}

	static post(address, data){
		return new Promise((resolve, reject) => {
			request.post(address, {form: data}, function(error, response, body) {
				if(error) {
					reject(error)
					return false
				}
				if(response.statusCode === 200) {
					resolve(JSON.parse(body))
				}
				else {
					reject(response.statusCode)
				}
			});
		});
	}
}