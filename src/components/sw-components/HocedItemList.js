import React from "react";
import ItemList from "../item-list/ItemList";
import {
  withNetworkHandlingListItem,
  withRenderFunctionListItem
} from "./../hoc-helper";

const HocedItemList = props => {
  const { getData, renderList } = props;
  const InnerOne = withNetworkHandlingListItem(
    withRenderFunctionListItem(ItemList, renderList),
    getData
  );

  return <InnerOne {...props} />;
};

export default HocedItemList;
