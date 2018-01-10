// src/components/NewOrderPage.js
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
// import config from '../../../data/config';
// import NotFoundPage from './../../NotFoundPage';
import Config from './config/Config';

export default class EnterConfig extends React.Component {

	constructor(props) {
		super(props);
		this.state = { config: {} };
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps() {
		// console.log("update config with")
		// console.log(this.props.config)
		// this.update()
	}

	componentDidMount() {
		// console.log("load config with")
		// console.log(this.props.config)
		// this.update()
	}

	handleChange(configName, configData) {
		let newConfig = $.extend({},this.props.config)
		newConfig[configName] = configData
		// console.log("config screen will return:")
		// console.log(newConfig)
		this.props.handleChange(newConfig);
	}



	render() {
		
		let configSets = Object.keys(this.props.config).map((config) => {
			// console.log(config)
			return(
				<Config name={config} content={this.props.config[config]} handleChange={this.handleChange} />
			)
		})
		return (
			<div className="editSegment" >
				<h3>Configuration</h3>
				{configSets}
			</div>
		);
	}
}
