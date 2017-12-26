// src/models/Provider.js

'use strict';

import ApiCall from '../ApiCall'


export default class Provider {
	static async list_all(){
		try {
			let providers = await ApiCall.get(this.base_url)
			return providers
		} catch(err) {
			throw err
		}
	}

	static async show_one(id){
		try {
			let url = this.base_url + "/" + id
			let provider = await ApiCall.get(url)
			return provider
		} catch(err) {
			throw err
		}
	}

	static async list_all_conditions(id){
		try {
			let url = this.base_url + "/" + id + "/conditions"
			let conditions = await ApiCall.get(url)
			return conditions
		} catch(err) {
			throw err
		}
	}

	static async show_one_condition(id, condition_id){
		try {
			let url = this.base_url + "/" + id + "/conditions/" + condition_id
			let condition = await ApiCall.get(url)
			return condition
		} catch(err) {
			throw err
		}
	}
}

Provider.base_url = PROVIDER_MANAGER_URL + "/providers"