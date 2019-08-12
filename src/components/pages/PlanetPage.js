import React, { Component } from "react";
import ErrorHandler from "../error-handler/ErrorHandler";
import DoubleColumnRow from "../double-column-row/DoubleColumnRow";
import { PlanetList, PlanetDetails } from "./../sw-components";

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
            left={<PlanetList onSelect={this.onSelectItem} />}
            right={<PlanetDetails itemId={this.state.itemId} />}
          />
        </ErrorHandler>
      </div>
    );
  }
}
