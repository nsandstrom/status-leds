// src/components/CompletedPage/ShowOnePreview.js
import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import config from '../../data/config';

export default class ShowOnePreview extends React.Component {
	getInitialState() {
		return { }
	}

	componentDidMount() {
		console.log("load preview")
		// console.log(this.props)
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
		// let screenshot = this.props.screenshot
		// console.log(this.props)
		return (

			<tr>
				<td> <div className="ledStatusSmall" style= {{backgroundColor: this.RGB2ColorProp(this.props.properties.color)}}/></td>
				<td> <Link to={`/leds/${this.props.id}`}>
					{this.props.id} 
				</Link> </td>
				<td> {this.props.provider} </td>
				<td> {this.props.condition} </td>
				<td> {this.props.label} </td>
				<td> {this.formatDate(this.props.updated)} </td>
			</tr>
		);
	}
}
