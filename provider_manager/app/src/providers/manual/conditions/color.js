// properties  [rgb]

export default class Color {
	static properties(){
		return { "color": { "type": "rgb"}}
	}

	static configuration(){
		return { "targetColor": { "type": "rgb"} }
	}

	static evaluate(config){
		let color = config.targetColor.value
		let red = color.red
		let green = color.green
		let blue = color.blue
		return 	{
			"properties": {
				"color": {
					"type": "rgb",
					"value": {
						"red": red,
						"green": green,
						"blue": blue
					}
				}
			},
			"status": "OK"
		}
	}
}

/*
{
	"config": 
	{
		"targetColor": { "type": "rgb", "value": {"red": 255, "green": 0, "blue": 0	}  }
	}
}
*/