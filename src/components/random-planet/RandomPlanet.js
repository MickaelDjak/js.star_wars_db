import React, { Component } from "react";
import "./RandomPlanet.css";

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="RandomPlanet">
        <div className="RandomPlanet-photo">
          <img src="holder.js/300x200" />
        </div>
        <div className="RandomPlanet-info">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
        </div>
      </div>
    );
  }
}
