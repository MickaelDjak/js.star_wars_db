import React, { Component } from "react";
import ErrorHandler from "../error-handler/ErrorHandler";
import DoubleColumnRow from "../double-column-row/DoubleColumnRow";
import { PersonList, PersonDetails } from "./../sw-components";

export default class PersonPage extends Component {
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
            left={<PersonList onSelect={this.onSelectItem} />}
            right={<PersonDetails itemId={this.state.itemId} />}
          />
        </ErrorHandler>
      </div>
    );
  }
}
