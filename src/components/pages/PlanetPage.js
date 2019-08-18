import React from "react";
import ErrorHandler from "../error-handler/ErrorHandler";
import { PlanetList } from "./../sw-components";
import { withRouter } from "react-router-dom";

const PlanetPage = ({ history }) => {
  return (
    <div>
      <ErrorHandler>
        <PlanetList
          onSelect={itemId => {
            history.push(itemId);
          }}
          like='card'
        />
      </ErrorHandler>
    </div>
  );
};

export default withRouter(PlanetPage);
