import React, { Component } from "react";
import DoubleColumnRow from "../double-column-row/DoubleColumnRow";
import ErrorHandler from "../error-handler/ErrorHandler";
import { PersonList, PersonDetails } from "./../sw-components";

export default class ItemPage extends Component {
  render() {
    const { entityType, onSelect, itemId } = this.props;

    const list = <PersonList entityType={entityType} onSelect={onSelect} />;

    const details = <PersonDetails entityType={entityType} itemId={itemId} />;

    return (
      <div>
        <ErrorHandler>
          <DoubleColumnRow left={list} right={details} />
        </ErrorHandler>
      </div>
    );
  }
}
