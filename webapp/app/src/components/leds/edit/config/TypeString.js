// src/components/NewOrderPage.js
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
// import NotFoundPage from './../../NotFoundPage';

export default class TypeString extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps() {
	}

	componentDidMount() {
	}

	handleChange(event) {
		let val = event.target.value
		// let val = parseFloat(event.target.value) || 0
		this.props.handleChange(this.props.name, val);
	}

	render() {
		return (
			<input type="text" 
				value={this.props.value || ""}
				onChange={this.handleChange} 
			/>
		);
	}
}
