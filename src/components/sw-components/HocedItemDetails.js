import React from "react";
import ItemDetails from "./../item-details";
import {
  withNetworkHandlingDeteils,
  withRenderFunctionDeteils
} from "./../hoc-helper";

const HocedItemDetails = ({ getData, renderDetails, ...rest }) => {
  const InnerOne = withNetworkHandlingDeteils(
    withRenderFunctionDeteils(ItemDetails, renderDetails),
    getData
  );

  return <InnerOne {...rest} />;
};

export default HocedItemDetails;
