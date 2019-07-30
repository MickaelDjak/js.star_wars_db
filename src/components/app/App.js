import React, { Component } from "react";
import Header from "./../header";
import RandomPlanet from "./../random-planet";
import ItemList from "./../item-list";
import PeopleDetails from "./../people-details";
import PlanetDetails from "./../planet-details";
import StarchipDetails from "./../starship-details";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <Header />
        <RandomPlanet />
        <ItemList />
        <PeopleDetails />
        <PlanetDetails />
        <StarchipDetails />
      </div>
    );
  }
}
