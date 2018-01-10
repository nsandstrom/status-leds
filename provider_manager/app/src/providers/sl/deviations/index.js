// properties [bool]

export default class Deviations {
	static properties(){
		// return [{"name": "trafficDeviation", "type": "boolean"}]
		return { "color": { "type": "rgb"}}
	}

	static config(){
		return {"station": {type: "text"}, "traffic": {type: "text"} }
	}

	static evaluate(config){
		return {}
	}
}