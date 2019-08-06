import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header ">
        <div className="Header-logo">Star wars DB</div>

        <div className="Header-navigation nav">
          <button className="nav-itemnav-link active" onClick={() => {this.props.selectEntityType('people')}}>
            People
          </button>
          <button className="nav-item nav-link" onClick={() => {this.props.selectEntityType('planet')}}>
            Planets
          </button>

          <button className="nav-item nav-link" onClick={() => {this.props.selectEntityType('starship')}}>
            Starship
          </button>
        </div>
      </div>
    );
  }
}
