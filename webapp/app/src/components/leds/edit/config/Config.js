// src/components/NewOrderPage.js
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import ServerConfig from '../../../../data/config';
import TypeDecimal from './TypeDecimal';
import TypeString from './TypeString';
import TypeNumber from './TypeNumber';

// import NotFoundPage from './../../NotFoundPage';

export default class Config extends React.Component {

	constructor(props) {
		super(props);
		this.state = { prototype: {} };
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
	// componentWillUpdate(nextProps) {
		// console.log("will update")
		// console.log(nextProps)
		// this.update()
	}

	componentDidMount() {
		// console.log("single config")
		// console.log(this.props)
		this.update(this.props.content.type)
	}

	update(type){
		var self = this;
		let api_url = ServerConfig.api_url		
		$.getJSON(api_url + "/datatypes/" + type , function(response) { 
			console.log("config get prototype: %s", type)
			if(response == null || response == {} ) return 0
			console.log(response)
			self.setState({ prototype: response });
			
		});
	}

	getField(name, type){
		let value = undefined
		if (this.props.content.value) {
			// console.log("has some values")
			if(this.props.content.value[name]) value = this.props.content.value[name]
		}
		// console.log(value)

		if(type == "decimal"){
			return(
				<TypeDecimal value={value} name={name} handleChange={this.handleChange} />  // /
			) 
		}

		if(type == "string"){
			return(
				<TypeString value={value} name={name} handleChange={this.handleChange} />  // /
			) 
		}

		if(type == "number"){
			return(
				<TypeNumber value={value} name={name} handleChange={this.handleChange} />  // /
			) 
		}


	}

	handleChange(name, value) {
		// console.log("change in config-set")
		let newConfigSet = $.extend({},this.props.content)
		if (!newConfigSet.value) newConfigSet.value = {}
		newConfigSet.value[name] = value
		// console.log(newConfigSet)
		this.props.handleChange(this.props.name, newConfigSet);
	}

	render() {
		let fields = Object.keys(this.state.prototype).map(field => {
			let displayName = ""
			if (field.charAt(0) != "_") displayName = field
			return(
				<p> {displayName} {this.getField(field, this.state.prototype[field])} </p>
				// <Decimal />
			)
		})

		return (
			<div className="configSet" >
				<h4>{this.props.name}</h4>
				{fields}
			</div>
		);
	}
}
