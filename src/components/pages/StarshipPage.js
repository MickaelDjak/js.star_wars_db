import React, { Component } from "react";
import ErrorHandler from "../error-handler/ErrorHandler";
import DoubleColumnRow from "../double-column-row/DoubleColumnRow";
import { StarshipList, StarshipDetails } from "./../sw-components";

export default class PlanetPage extends Component {
  state = {
    itemId: null
  };

  onSelectItem = id => {
    this.setState({
      itemId: id
    });
  };

  render() {
    return (
      <div>
        <ErrorHandler>
          <DoubleColumnRow
            left={<StarshipList onSelect={this.onSelectItem} />}
            right={<StarshipDetails itemId={this.state.itemId} />}
          />
        </ErrorHandler>
      </div>
    );
  }
}
