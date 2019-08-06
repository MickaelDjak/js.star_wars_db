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
    selectedEntityId: null,
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
      selectedEntityId: id
    });
  };

  getRenderItem = () => {
    switch (this.state.entityType) {
      case "people":
        return ({ name, gender, birthYear }) => {
          return `${name}  (${gender}, ${birthYear})`;
        };

      case "planet":
        return ({ name, diameter }) => {
          return `${name}  (${diameter})`;
        };

      case "starship":
        return ({ name, model }) => {
          return `${name}  (${model})`;
        };
    }
  };

  getRenderContent = () => {
    switch (this.state.entityType) {
      case "people":
        return [
          "birthYear",
          "eyeColor",
          "gender",
          "hairColor",
          "height172",
          "mass",
          "name",
          "skinColor"
        ];

      case "planet":
        return ["name"];

      case "starship":
        return ["name"];
    }
  };

  getAllItem = () => {
    switch (this.state.entityType) {
      case "people":
        return this.swapiService.getAllPeople;

      case "planet":
        return this.swapiService.getAllPlanets;

      case "starship":
        return this.swapiService.getAllStarships;
    }
  };

  getOneItem = () => {
    switch (this.state.entityType) {
      case "people":
        return this.swapiService.getPerson;

      case "planet":
        return this.swapiService.getPlanet;

      case "starship":
        return this.swapiService.getStarship;
    }
  };

  render() {
    const renderItem = this.getRenderItem();
    const renderContent = this.getRenderContent();
    const getAllItems = this.getAllItem();
    const getOneItem = this.getOneItem();

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
            getAllItems={getAllItems}
            getOneItem={getOneItem}
            selectedEntityId={this.state.selectedEntityId}
            renderItem={renderItem}
            renderContent={renderContent}
          />
        </div>
      </ErrorHandler>
    );
  }
}
