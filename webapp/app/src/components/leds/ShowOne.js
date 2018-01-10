// src/components/CompletedPage/ShowOne.js
import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import config from '../../data/config';

export default class ShowOne extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { led: {}, color: {} };
	    console.log("Show one")
	    console.log(this.props)

	   	this.handleDelete = this.handleDelete.bind(this);
	    // var self = this
	    // setInterval(function(){
	    // 	self.updateColor(self.props.params.id)
	    // }, 15000);
	}

	componentDidMount() {
		console.log("load one")
		console.log(this.props.params.id)
		let api_url = config.api_url
		if (this.props.params) {
			var self = this;
			$.getJSON(api_url + "/leds/" + this.props.params.id, function(response) { 
					let color = {}
					if(response.properties.color) color = response.properties.color
					self.setState({ led: response, color: color });
			});
		}
	}

	updateColor(id){
		let api_url = config.api_url
		try {
			if (id) {
				var self = this;
				$.getJSON(api_url + "/leds/" + id + "/color", function(response) { 
						self.setState({ color: response });
				});
			}
		} catch(error) {

		}
	}

	handleDelete(){
		let api_url = config.api_url
		try {
			if (confirm("Delete Led" + this.props.params.id +"?")){
				$.ajax({
				    url: api_url + "/leds/" + this.props.params.id,
				    type: 'DELETE',
				    success: function(result) {
				        // Do something with the result
				    }
				});
			}
		} catch(error){

		}
	}

	RGB2ColorProp(color)
	{
		console.log("color");
		return this.RGB2Color(color.red,color.green,color.blue);
	}

	RGB2Color(r,g,b)
	{	
		console.log("color3");
		return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
	}
	
	byte2Hex (n)
	{
		var nybHexString = "0123456789ABCDEF";
		return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
	}

	formatDate(dateString){
		try {
			return dateString.split('.')[0].split('T').join(' ')
		} catch(error){
			return ""
		}
	}

	render() {
		let view
		if(this.state.led.id) {
			console.log("showled")
			console.log(this.state.led)
			view = <div id="completed" className="led">
					<div className="ledStatusLarge" style= {{backgroundColor: this.RGB2ColorProp(this.state.color)}}/>
					<table>
						<tbody>
						<tr><td>ID</td> <td> {this.state.led.id} </td> </tr>
						<tr><td>Source date</td> <td> {this.state.led.provider} </td> </tr>
						<tr><td>Condition</td> <td> {this.state.led.condition} </td> </tr>
						<tr><td>Label</td> <td> {this.state.led.label} </td> </tr>
						<tr><td>Interval</td> <td> {this.state.led.interval} </td> </tr>
						<tr><td>Updated</td> <td> {this.formatDate(this.state.led.updated)} </td> </tr>
						</tbody>
					</table>
					<Link to={`/leds/${this.state.led.id}/edit`}>
						Edit
					</Link> - 
					<Link to={`/leds/`} onClick={this.handleDelete} >Delete</Link>
				</div>
		}

		return (
			<div>
				{view}
			</div>
		);
	}
}
