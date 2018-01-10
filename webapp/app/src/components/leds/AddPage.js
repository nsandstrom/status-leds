// src/components/CompletedPage/ShowOne.js
import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import LedForm from './LedForm'

import config from '../../data/config';

export default class AddPage extends React.Component {
	constructor(props) {
	    super(props);

	    this.submitCallback = this.submitCallback.bind(this);
	    this.abortCallback = this.abortCallback.bind(this);
	}

	componentDidMount() {
		
	}

	submitCallback(){
		console.log("submit")
		console.log(this.props)
		this.props.history.push(`/leds`);
	}

	abortCallback(){
		console.log("abort")
		this.props.history.push(`/leds`);
	}

	render() {

		return (
				<div id="completed" className="screenshot">
					<h2>Add new</h2>
					{<LedForm isNew={true} abortCallback={this.abortCallback} submitCallback={this.submitCallback} />}
				</div>
		);
	}
}
