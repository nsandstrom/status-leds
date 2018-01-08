// properties [bool]

export default class Deviations {
	static properties(){
		// return [{"name": "trafficDeviation", "type": "boolean"}]
		return { "color": { "type": "rgb"}}
	}

	static configuration(){
		return {"station": {type: "string"}, "traffic": {type: "string"} }
	}

	static evaluate(config){
		return {}
	}
}