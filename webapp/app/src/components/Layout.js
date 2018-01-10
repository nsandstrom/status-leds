// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <h1>Smart status leds </h1>
          <Link to="/leds"> View all </Link> | 
          <Link to="/leds/new"> Add new </Link> 
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          
        </footer>
      </div>
    );
  }
}
