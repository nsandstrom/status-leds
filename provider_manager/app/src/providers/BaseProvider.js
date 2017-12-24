// src/providers/BaseProvider.js

'use strict';



export default class Provider{

	static name_old(){
		return name
	}

	static list(){
		return {"name": this.name, "conditions": this.listConditions()}
	}

	static listConditionProperties(condition_id){
		return this.Conditions[condition_id].properties()
	}

	static listConditions() {
		let list = []
		Object.keys(this.Conditions).map(cd => {list.unshift(this.Conditions[cd].name)});
		return list
	}

	static getCondition(condition_id){
		return this.Conditions[condition_id]
	}

	static showCondition(condition_id){
		let condition = this.Conditions[condition_id]
		let list = {}
		list["name"] = condition.name
		list["properties"] = condition.properties()
		list["configuration"] = condition.configuration()
		return list
	}
	
}

Provider.moduleName = "BaseName"
Provider.Conditions = []


