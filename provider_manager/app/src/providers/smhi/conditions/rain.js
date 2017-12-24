// properties [[no, rain, snow]]

export default class Rain {
	static properties(){
		// return [{"name": "precipitation", "type": "select", "options" : ["no", "rain", "snow"]}]
		return { "color": { "type": "rgb"}}
	}

	static configuration(){
		return {"location": {type: "location"}}
	}

	static evaluate(config){
		return {}
	}
}