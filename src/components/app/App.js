import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import SwapiService from "./../../services/SwapiService";
import renderDetailFields from "./../../services/renderDetailFields";
import renderListItems from "./../../services/renderListItems";

import Header from "./../header";
import ErrorHandler from "./../error-handler/ErrorHandler";
import RandomPlanet from "./../random-planet";
import { SwapiServiceProvider } from "./../swapi-service-context";
import {
  PersonPageWithTwoComponents,
  StarshipPage,
  PlanetPage,
  LoginPage,
  SecretPage
} from "./../pages";
import { StarshipDetails, PlanetDetails } from "../sw-components";

export default class App extends Component {
  state = {
    inLoggedIn: false
  };

  onLogin = e => {
    e.preventDefault();
    console.log(" try to login");
    this.setState({ inLoggedIn: true });
  };

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
              <Switch>
                <Route
                  path="/"
                  exact={true}
                  render={() => <h2>Welcome to star wars data base</h2>}
                />
                <Route
                  path="/people/:id?"
                  exact={true}
                  component={PersonPageWithTwoComponents}
                />
                <Route
                  path="/starships/"
                  exact={true}
                  component={StarshipPage}
                />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    return <StarshipDetails itemId={match.params.id} />;
                  }}
                />
                <Route path="/planets/" exact={true} component={PlanetPage} />
                <Route
                  path="/planets/:id"
                  render={({ match }) => {
                    return <PlanetDetails itemId={match.params.id} />;
                  }}
                />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={this.state.inLoggedIn}
                      onLogin={this.onLogin}
                    />
                  )}
                />
                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={this.state.inLoggedIn} />
                  )}
                />

                <Route
                  render={() => {
                    return <h2>This page not found</h2>;
                  }}
                />
              </Switch>
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorHandler>
    );
  }
}
