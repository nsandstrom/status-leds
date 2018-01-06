// providers/providers.js

'use strict';

import Provider from './'
import Result from './result'

export default class ProviderManager {

	static list_all(){
		let list = []
		Object.keys(Provider).map(m => {list.unshift(Provider[m].list())});
		return list;
	}

	static show_one(provider){
		if (provider in Provider) {
			return Provider[provider].list()
		}
		else {
			return null
		}
	}

	static listConditionProperties(provider, condition){
		return getProvider(provider).listConditions()
	}

	static listConditions(provider){
		return getProvider(provider).listConditions()
	}

	static show_condition(provider, condition){
		return getProvider(provider).showCondition(condition)
	}

	static evaluate_condition(provider, condition, led_id, config){
		let res = new Result(led_id);
		getProvider(provider).getCondition(condition).evaluate(config, res);
	}

	static verify(word){
		return true
	}
}

function getProvider(provider){
	return Provider[provider]
}

function getCondition(provider, condition){
	return getProvider(provider).getCondition(condition)
}