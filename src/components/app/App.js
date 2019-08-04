import React, { Component } from "react";
import Header from "./../header";
import RandomPlanet from "./../random-planet";
import ItemList from "./../item-list";
import PeopleDetails from "./../people-details";
import "./App.css";

export default class App extends Component {
  state = {
    selectedEntityId: null
  };

  onSelect = id => {
    this.setState({
      selectedEntityId: id
    });
  };

  render() {
    
    return (
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <RandomPlanet />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <ItemList onSelect={this.onSelect} />
          </div>

          <div className="col-9">
            <PeopleDetails selectedEntityId={this.state.selectedEntityId} />
          </div>
        </div>
      </div>
    );
  }
}
