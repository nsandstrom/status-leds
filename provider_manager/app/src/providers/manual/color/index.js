// properties  [rgb]

var messenger = require('@n_sandstrom/amqp-messenger')

export default class Color {
	static properties(){
		return { "color": { "type": "rgb"}}
	}

	static config(){
		return { "targetColor": { "type": "rgb"} }
	}

	static evaluate(config, result){
		try {
			let color = config.targetColor.value
			let red = color.red
			let green = color.green
			let blue = color.blue
			let evaluated = {
				"properties": {
					"color": {
						"red": red || 0,
						"green": green || 0,
						"blue": blue || 0
					}
				},
				updated: new Date()
			}
			result.send(evaluated)
		} catch(err) {
			console.log("Error on %s - %s", result.id, err)
		}
	}
}

/*
{
	"config": 
	{
		"targetColor": { "type": "rgb", "value": {"red": 255, "green": 0, "blue": 0	}  }
	}

	"properties":
	{
		"color": { "red": 255, "green": 0, "blue":0 }
	}
}
*/
