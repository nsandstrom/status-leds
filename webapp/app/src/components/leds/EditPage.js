// src/components/CompletedPage/ShowOne.js
import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import LedForm from './LedForm'

import config from '../../data/config';

export default class EditPage extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {  led: undefined };

	    this.submitCallback = this.submitCallback.bind(this);
	    this.abortCallback = this.abortCallback.bind(this);
	}

	componentDidMount() {
		console.log("edit page")
		console.log(this.props)
		let api_url = config.api_url
		var self = this;
		$.getJSON(api_url + "/leds/" + this.props.params.id , function(response) { 
			console.log("fetch led")
			console.log(response)
			self.setState({ led: response });
		});
	}

	submitCallback(){
		console.log("submit")
		console.log(this.props)
		this.props.history.push(`/leds/${this.props.params.id}`);
	}

	abortCallback(){
		console.log("abort")
		this.props.history.push(`/leds/${this.props.params.id}`);
	}

	render() {

		let form = undefined
		if(this.state.led) {
			form = <LedForm led={this.state.led} isNew={false} abortCallback={this.abortCallback} submitCallback={this.submitCallback}  />
		}

		return (
				<div id="completed" className="screenshot">
					<h2>Edit {this.props.params.id}</h2>
					{form}
				</div>
		);
	}
}
