import React, { Component } from "react";
import ItemDetails from "../item-details/ItemDetails";
import ItemList from "../item-list/ItemList";
import DoubleColumnRow from "../double-column-row/DoubleColumnRow";
import ErrorHandler from "../error-handler/ErrorHandler";

export default class ItemPage extends Component {
  render() {
    const {
      entityType,
      onSelect,
      getAllItems,
      renderItem,
      selectedEntityId,
      getOneItem,
      renderContent
    } = this.props;

    const list = (
      <ItemList
        entityType={entityType}
        onSelect={onSelect}
        getData={getAllItems}
      >
        {renderItem}
      </ItemList>
    );

    const details = (
      <ItemDetails
        entityType={entityType}
        selectedEntityId={selectedEntityId}
        getOneItem={getOneItem}
        renderContent={renderContent}
      />
    );

    return (
      <div>
        <ErrorHandler>
          <DoubleColumnRow left={list} right={details} />
        </ErrorHandler>
      </div>
    );
  }
}
