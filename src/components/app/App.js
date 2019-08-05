import React, { Component } from "react";
import Header from "./../header";
import RandomPlanet from "./../random-planet";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page/PeoplePage";
import "./App.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleShowRandomPlanet = () => {
    this.setState(({ showRandomPlanet }) => {
      console.log(showRandomPlanet);
      return {
        showRandomPlanet: !showRandomPlanet
      };
    });
  };

  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {this.state.showRandomPlanet ? <RandomPlanet /> : null}
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-3">
            <span
              className="btn RandomPlanet-triger"
              onClick={() => this.toggleShowRandomPlanet()}
            >
              {this.state.showRandomPlanet ? "Hide" : "Show"} random planet
            </span>
          </div>
        </div>

        <div className="row">
          <PeoplePage />
        </div>

        <div className="row">
          <PeoplePage />
        </div>

        <div className="row">
          <PeoplePage />
        </div>
      </div>
    );
  }
}
