import React from "react";

const withRenderFunctionListItem = Wrapper => {
  return props => {
    return <Wrapper {...props}>{props.renderList}</Wrapper>;
  };
};

export default withRenderFunctionListItem;
