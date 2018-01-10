// src/components/CompletedPage.js
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import config from '../data/config';
import NotFoundPage from './NotFoundPage';
import Preview from './leds/ShowOnePreview'
export default class ledPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { leds: [] };
  }

	componentDidMount() {
		console.log("load overview")
    let api_url = config.api_url
    console.log(this.props.params)
    if (this.props.params) {
        var self = this;
        $.getJSON(api_url + "/leds/" , function(response) { 
            response.sort(function(a,b) {return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);} );
            self.setState({ leds: response });
        });
    }
	}
	render() {
    // console.log(this.state.leds)
  	return (
    		<div id="completed" className="screenshots" >
      		<h2>Overview</h2>
            <table><tbody>
              <tr>
                <th> </th>
                <th>ID</th>
                <th>Source</th>
                <th>Condition</th>
                <th>Label</th>
                <th>Updated</th>
              </tr>
              {this.state.leds.map(led => <Preview key={led._id} {...led} />)}
            </tbody></table>
    		</div>
  	);
	}
}
