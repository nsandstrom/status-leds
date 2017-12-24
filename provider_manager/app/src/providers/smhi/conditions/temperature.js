//properties [int(-10 .. 10)]

export default class Temperature {
	static properties(){
		// return [{"name": "temperature", "type": "integer", "min": -10, "max": 10}]
		return { "color": { "type": "rgb"}}
	}

	static configuration(){
		return {"location": {type: "location"}}
	}

	static evaluate(config){
		return {}
	}
}