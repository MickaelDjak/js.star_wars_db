import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="Header ">
            <div className="Header-logo">
              <Link to="/">Star wars DB</Link>
            </div>
            <div className="Header-navigation nav">
              <Link className="nav-item nav-link" to="/people/">
                People
              </Link>
              <Link className="nav-item nav-link" to="/starships/">
                Starship
              </Link>
              <Link className="nav-item nav-link" to="/planets/">
                Planets
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
