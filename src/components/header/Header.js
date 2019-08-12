import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="Header ">
            <div className="Header-logo">Star wars DB</div>
            <div className="Header-navigation nav">
              <button className="nav-itemnav-link active">People</button>
              <button className="nav-item nav-link">Planets</button>
              <button className="nav-item nav-link">Starship</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
