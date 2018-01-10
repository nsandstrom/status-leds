// src/components/NewOrderPage.js
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import config from '../../../data/config';
import NotFoundPage from './../../NotFoundPage';

export default class SelectProvider extends React.Component {

	constructor(props) {
		super(props);
		this.state = { conditions: [] };
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps() {
		// this.update()
	}

	componentDidMount() {
		// this.update()
	}

	update() {
		var self = this;
		setTimeout(function(){
			let api_url = config.api_url
			
			$.getJSON(api_url + "/providers/" + self.props.provider + "/conditions/" , function(response) { 
				console.log("get conds")
				if(response == null || response == {} ) return 0
				console.log(response)
				self.setState({ conditions: response });
				
			});
		}, 100);
	}

	handleChange(event) {
		// this.setState({ selected: event.target.value });
		this.props.handleChange(event);
	}



	render() {
		// console.log(this.state)
		try {
			var condition_options = this.props.conditions.map((condition) => {
				return(
					<option value={condition}>{condition}</option>	// /
				)
			})
			if (this.props.condition == "")  condition_options.unshift( <option value="">select..</option> )	// /
		} catch (error) {
			var condition_options = []
		}

		return (
			<div className="editSegment" >
				<h3>Condition</h3>
				<select value={this.props.condition} onChange={this.handleChange}>
					{condition_options}
				</select>
			</div>
		);
	}
}
