import React from "react";

const withRenderFunctionListItem = (Wrapper, render) => {
  return props => {
    return <Wrapper {...props}>{render}</Wrapper>;
  };
};

export default withRenderFunctionListItem;
