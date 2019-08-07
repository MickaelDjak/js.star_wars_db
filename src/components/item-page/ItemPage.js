import React, { Component } from "react";
import { DataRecord } from "../item-details/ItemDetails";
import DoubleColumnRow from "../double-column-row/DoubleColumnRow";
import ErrorHandler from "../error-handler/ErrorHandler";
import { PersonList, PersonDetails } from "./../sw-components";

export default class ItemPage extends Component {
  render() {
    const {
      entityType,
      onSelect,
      renderItem,
      selectedEntityId,
      renderContent
    } = this.props;

    const list = (
      <PersonList entityType={entityType} onSelect={onSelect}>
        {renderItem}
      </PersonList>
    );

    const details2 = (
      <PersonDetails
        entityType={entityType}
        selectedEntityId={selectedEntityId}
      >
        {renderContent.map(el => {
          return <DataRecord label={el.label} field={el.field} />;
        })}
      </PersonDetails>
    );

    return (
      <div>
        <ErrorHandler>
          <DoubleColumnRow left={list} right={details2} />
        </ErrorHandler>
      </div>
    );
  }
}
