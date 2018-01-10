// src/components/NewOrderPage.js
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import config from '../../../data/config';
import NotFoundPage from './../../NotFoundPage';

export default class SelectProvider extends React.Component {

	constructor(props) {
		super(props);
		this.state = {  providers: [] };
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		let api_url = config.api_url
		var self = this;
		$.getJSON(api_url + "/providers/" , function(response) { 
			self.setState({ providers: response });
		});
		
	}

	handleChange(event) {
		// this.setState({ selected: event.target.value });
		this.props.handleChange(event);
	}



	render() {
		var provider_options = this.state.providers.map((provider) => {
			return(
				<option value={provider.name}>{provider.name}</option> // /
			)
		});
		if (this.props.provider == "") provider_options.unshift( <option value="">select..</option> ) // /

		return (
			<div className="editSegment" >
				<h3>Data source</h3>
				<select value={this.props.provider} onChange={this.handleChange}>
					{provider_options}
				</select>
			</div>
		);
	}
}
