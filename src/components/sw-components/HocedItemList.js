import React from "react";
import ItemList from "../item-list/ItemList";
import {
  withNetworkHandlingListItem,
  withRenderFunctionListItem
} from "./../hoc-helper";

const HocedItemList = props => {
  const InnerOne = withNetworkHandlingListItem(
    withRenderFunctionListItem(ItemList)
  );

  return <InnerOne {...props} />;
};

export default HocedItemList;
