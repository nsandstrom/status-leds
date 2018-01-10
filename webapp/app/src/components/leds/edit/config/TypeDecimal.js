// src/components/NewOrderPage.js
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
// import NotFoundPage from './../../NotFoundPage';

export default class TypeDecimal extends React.Component {

	constructor(props) {
		super(props);
		this.state = { value: props.value };
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps() {
	}

	componentDidMount() {
		console.log("decimal")
		console.log(this.props)
		console.log(this.state)
	}

	handleChange(event) {
		console.log("change in dec")
		let val = event.target.value
		// let val = parseFloat(event.target.value) || 0
		this.props.handleChange(this.props.name, val);
	}

	render() {
		return (
			<input type="text" 
				value={this.props.value || "0"}
				onChange={this.handleChange} 
			/>
		);
	}
}
