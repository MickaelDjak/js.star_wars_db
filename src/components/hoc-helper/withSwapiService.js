import React from "react";

import { SwapiServiceConsumer } from "./../swapi-service-context";

const withSwapiService = (Wrapper, mapMethodsToProps) => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {context => {
          const methods = mapMethodsToProps(context);

          return <Wrapper {...props} {...methods} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
