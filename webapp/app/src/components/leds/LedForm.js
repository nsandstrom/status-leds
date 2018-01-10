// src/components/NewOrderPage.js
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import config from '../../data/config';
import NotFoundPage from './../NotFoundPage';
import SelectProvider from './edit/SelectProvider'
import SelectCondition from './edit/SelectCondition'
import EnterCommon from './edit/EnterCommon'
import EnterConfig from './edit/EnterConfig'

export default class LedForm extends React.Component {

	constructor(props) {
		super(props);
		console.log("ledform")
		console.log(this.props)
		let id = ""
		let label = ""
		let interval = ""
		let provider = ""
		let condition = ""
		let config = {}
		if(this.props.led) {
			console.log("Led is provided")
			id = this.props.led.id || ""
			label = this.props.led.label || ""
			interval = this.props.led.interval || ""
			provider = this.props.led.provider || ""
			condition = this.props.led.condition || ""
			config = this.props.led.config || {}
		}
		this.state = { id: id, label: label, interval: interval, provider: provider, condition: condition, config: config, conditions: [] };

		this.handleChangeCommon = this.handleChangeCommon.bind(this);
		this.handleChangeProvider = this.handleChangeProvider.bind(this);
		this.handleChangeCondtion = this.handleChangeCondtion.bind(this);
		this.handleChangeConfig = this.handleChangeConfig.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAbort = this.handleAbort.bind(this);
	}

	componentDidMount() {
		// console.log(this.state)
		if(this.state.provider != "") this.getConditions()
	}

	handleChangeCommon(type, value) {
		let newVal = {}
		newVal[type] = value
		this.setState(newVal);
	}


	handleChangeProvider(event) {
		if (event.target.value != "") this.setState({provider: event.target.value, condition: "", config: {}}, this.getConditions );
	}

	handleChangeCondtion(event) {
		this.setState({condition: event.target.value, config: {}}, this.getConfig);
	}

	handleChangeConfig(newConfig) {
		// console.log("change config in main")
		// console.log(newConfig)
		this.setState({config: newConfig});
	}

	getConditions(){
		var self = this;
		let api_url = config.api_url		
		$.getJSON(api_url + "/providers/" + this.state.provider + "/conditions/" , function(response) { 
			// console.log("main get conds")
			if(response == null || response == {} ) return 0
			// console.log(response)
			self.setState({ conditions: response });
			
		});
	}

	getConfig(){
		if(this.state.condition != "") {
			// console.log("main fetch config")
			let api_url = config.api_url
			var self = this;
			$.getJSON(api_url + "/providers/" + self.state.provider + "/conditions/" + self.state.condition , function(response) { 
				// console.log("main get config")
				if(response == null  ){
					console.log("invalid config")
					self.setState({ config: {}})
				}
				else {
					// console.log(response)
					self.setState({ config: response.config });
				}
				
			});
		}
	}

	handleSubmit(){
		let data = {
			id: this.state.id,
			label: this.state.label,
			interval: this.state.interval,
			provider: this.state.provider,
			condition: this.state.condition,
			config: this.state.config,
			_method: "POST"
		}
		console.log(data)

		if(data.id == "") return 0
		

		let api_url = config.api_url
		let url = api_url + /leds/
		if(!this.props.isNew) url += data.id

		var self = this;
		$.post( url, data, function( data ) {
			console.log(data)
			self.props.submitCallback()
		}).fail(function( data ) {
			console.log("error: "+e);
    	});
	}

	handleAbort(){
		this.props.abortCallback()
	}

	render() {
		let provider = this.state.provider.toString()
		var conditionSelect
		if(this.state.provider != "") {
			conditionSelect = <SelectCondition
							handleChange={this.handleChangeCondtion}
							provider={provider}
							condition={this.state.condition}
							conditions={this.state.conditions} /> // /
		}
		else {
			conditionSelect = null
		}

		var enterConfig
		if(this.state.condition != "") {
			enterConfig = <EnterConfig
							handleChange={this.handleChangeConfig}
							provider={this.state.provider}
							condition={this.state.condition}
							config={this.state.config} /> // /
		}
		else {
			enterConfig = null
		}
		

		return (
			<div className="edit" >
				<EnterCommon handleChange={this.handleChangeCommon} isNew={this.props.isNew} label={this.state.label} interval={this.state.interval}  />
				<SelectProvider handleChange={this.handleChangeProvider} provider={this.state.provider} />
				{conditionSelect}
				{enterConfig}
				<div className="editSegment" >
					<button id="confirm" onClick={this.handleSubmit} >OK </button>
					<button id="cancel" onClick={this.handleAbort} >Cancel </button>
				</div>
			</div>
		);
	}
}
