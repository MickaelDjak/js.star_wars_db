import React, { Component } from "react";
import Header from "./../header";
import "./App.css";
import RandomPlanet from "./../random-planet";
import SwapiService from "../../services/SwapiService";
import ErrorHandler from "../error-handler/ErrorHandler";
import { SwapiServiceProvider } from "./../swapi-service-context";
import renderDetailFields from "../../services/renderDetailFields";
import renderListItems from "../../services/renderListItems";
import { PersonPage, StarshipPage, PlanetPage } from "./../pages";

export default class App extends Component {
  render() {
    return (
      <ErrorHandler>
        <SwapiServiceProvider
          value={{
            swapiService: new SwapiService(),
            itemDetails: renderDetailFields,
            renderItems: renderListItems
          }}
        >
          <div className="App container">
            <Header />
            <RandomPlanet />
            <PersonPage />
            <StarshipPage />
            <PlanetPage />
          </div>
        </SwapiServiceProvider>
      </ErrorHandler>
    );
  }
}
