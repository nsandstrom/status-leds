// src/components/NewOrderPage.js
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
// import config from '../../../data/config';
// import NotFoundPage from './../../NotFoundPage';
import Config from './config/Config';

export default class EnterCommon extends React.Component {

	constructor(props) {
		super(props);
		this.state = { };
		this.handleChangeId = this.handleChangeId.bind(this);
		this.handleChangeLabel = this.handleChangeLabel.bind(this);
		this.handleChangeInterval = this.handleChangeInterval.bind(this);
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

	handleChangeId(event) {
		this.props.handleChange("id", event.target.value);
	}

	handleChangeLabel(event) {
		this.props.handleChange("label", event.target.value);
	}
	
	handleChangeInterval(event) {
		this.props.handleChange("interval", event.target.value);
	}



	render() {

		let id = undefined
		if(this.props.isNew){
			id = <p>ID <input type="text"
						onChange={this.handleChangeId} 
					/>
				</p>
		}
		
		return (
			<div className="editSegment" >
				{id}
				<p>label <input type="text"
					value={this.props.label}
					onChange={this.handleChangeLabel} 
				/> </p>
				<p>interval <input type="text"
					value={this.props.interval}
					onChange={this.handleChangeInterval} 
				/> </p>
				
			</div>
		);
	}
}
