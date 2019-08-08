import React, { Component } from "react";
import Header from "./../header";
import "./App.css";
import RandomPlanet from "./../random-planet";
import ItemPage from "../item-page";
import SwapiService from "../../services/SwapiService";
import ErrorHandler from "../error-handler/ErrorHandler";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    itemId: null,
    entityType: "people"
  };

  toggleShowRandomPlanet = () => {
    this.setState(({ showRandomPlanet }) => {
      console.log(showRandomPlanet);
      return {
        showRandomPlanet: !showRandomPlanet
      };
    });
  };

  selectEntityType = type => {
    this.setState({
      entityType: type
    });
  };

  onSelectEntity = id => {
    this.setState({
      itemId: id
    });
  };

  render() {
    return (
      <ErrorHandler>
        <div className="App container">
          <div className="row">
            <div className="col-12">
              <Header selectEntityType={this.selectEntityType} />
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

          <ItemPage
            entityType={this.state.entityType}
            onSelect={this.onSelectEntity}
            itemId={this.state.itemId}
          />
        </div>
      </ErrorHandler>
    );
  }
}
