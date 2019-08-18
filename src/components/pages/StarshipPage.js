import React from "react";
import ErrorHandler from "../error-handler/ErrorHandler";
import { StarshipList } from "./../sw-components";
import { withRouter } from "react-router-dom";

const StarshipPage = ({ history }) => {
  return (
    <div>
      <ErrorHandler>
        <StarshipList
          onSelect={itemId => {
            history.push(itemId);
          }}
          like='card'
        />
      </ErrorHandler>
    </div>
  );
};

export default withRouter(StarshipPage);
