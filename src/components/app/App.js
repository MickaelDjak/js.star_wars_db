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
        return ({ name, starshipClass }) => {
          return `${name}  (${starshipClass})`;
        };
    }
  };

  getRenderContent = () => {
    switch (this.state.entityType) {
      case "people":
        return [
          { field: "birthYear", label: "Birth year" },
          { field: "eyeColor", label: "Eye color" },
          { field: "gender", label: "Gender" },
          { field: "hairColor", label: "Hair color" },
          { field: "height", label: "Height" },
          { field: "mass", label: "Mass" },
          { field: "name", label: "Name" },
          { field: "skinColor", label: "Skin color" }
        ];

      case "planet":
        return [
          { field: "name", label: "Name" },
          { field: "climate", label: "Climate" },
          { field: "diameter", label: "Diameter" },
          { field: "gravity", label: "Gravity" },
          { field: "orbitalPeriod", label: "Orbital period" },
          { field: "population", label: "Population" },
          { field: "rotationPeriod", label: "Rotation period" },
          { field: "surfaceWater", label: "Surface water" },
          { field: "terrain", label: "Terrain" }
        ];

      case "starship":
        return [
          { field: "name", label: "Name" },
          { field: "MGLT", label: "MGLT" },
          { field: "cargoCapacity", label: "Cargo capacity" },
          { field: "consumables", label: "Consumables" },
          { field: "costInCredits", label: "Cost in credits" },
          { field: "crew", label: "Crew" },
          { field: "hyperdriveRating", label: "Hyperdrive rating" },
          { field: "length", label: "Length" },
          { field: "manufacturer", label: "Manufacturer" },
          { field: "maxAtmospheringSpeed", label: "Max atmosphering speed" },
          { field: "model", label: "Model" },
          { field: "passengers", label: "Passengers" },
          { field: "starshipClass", label: "Starship class" },
        ];
    }
  };

  render() {
    const renderItem = this.getRenderItem();
    const renderContent = this.getRenderContent();

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
            selectedEntityId={this.state.selectedEntityId}
            renderItem={renderItem}
            renderContent={renderContent}
          />
        </div>
      </ErrorHandler>
    );
  }
}
