import React from "react";
import ItemDetails from "./../item-details";
import {
  withNetworkHandlingDeteils,
  withRenderFunctionDeteils
} from "./../hoc-helper";

const HocedItemDetails = (props) => {
  const InnerOne = withNetworkHandlingDeteils(
    withRenderFunctionDeteils(ItemDetails),
  );

  return <InnerOne {...props} />;
};

export default HocedItemDetails;
