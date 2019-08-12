import React from "react";
import { DataRecord } from "./../item-details";

const withRenderFunctionDeteils = (Wrapper, fields) => {
  return props => {
    return (
      <Wrapper {...props}>
        {props.renderDetails.map(el => {
          return (
            <DataRecord key={el.field} label={el.label} field={el.field} />
          );
        })}
      </Wrapper>
    );
  };
};

export default withRenderFunctionDeteils;
