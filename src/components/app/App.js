import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import SwapiService from "./../../services/SwapiService";
import renderDetailFields from "./../../services/renderDetailFields";
import renderListItems from "./../../services/renderListItems";

import Header from "./../header";
import ErrorHandler from "./../error-handler/ErrorHandler";
import RandomPlanet from "./../random-planet";
import { SwapiServiceProvider } from "./../swapi-service-context";
import { PersonPage, StarshipPage, PlanetPage } from "./../pages";
import { StarshipDetails, PersonDetails, PlanetDetails } from "../sw-components";

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
          <BrowserRouter>
            <div className="App container">
              <Header />
              <RandomPlanet />
              <Route
                path="/"
                exact={true}
                render={() => <h2>Welcome to star wars data base</h2>}
              />
              <Route path="/people/" exact={true} component={PersonPage} />
              <Route
                path="/people/:id"
                render={({
                  match: {
                    params: { id }
                  }
                }) => {
                  return <PersonDetails itemId={id} />;
                }}
              />
              <Route path="/starships/" exact={true} component={StarshipPage} />
              <Route
                path="/starships/:id"
                render={({
                  match: {
                    params: { id }
                  }
                }) => {
                  return <StarshipDetails itemId={id} />;
                }}
              />
              <Route path="/planets/" exact={true} component={PlanetPage} />
              <Route
                path="/planets/:id"
                render={({
                  match: {
                    params: { id }
                  }
                }) => {
                  return <PlanetDetails itemId={id} />;
                }}
              />
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorHandler>
    );
  }
}
