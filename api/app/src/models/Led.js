// src/models/Led.js

'use strict';

import ApiCall from '../ApiCall'


export default class Led {
	static async list_all(){
		try {
			let leds = await ApiCall.get(this.base_url)
			return leds
		} catch(err) {
			throw err
		}
	}

	static async show_one(id){
		try {
			let url = this.base_url + "/" + id
			let led = await ApiCall.get(url)
			return led
		} catch(err) {
			throw err
		}
	}

	static async create_new(data){
		try {
			let url = this.base_url
			let led = await ApiCall.post(url, data)
			return led
		} catch(err) {
			throw err
		}
	}

	static async update_one(id, data){
		try {
			let url = this.base_url + "/" + id
			let led = await ApiCall.post(url, data)
			return led
		} catch(err) {
			throw err
		}
	}
}

Led.base_url = DB_MANAGER_URL + "/leds"