import React from "react";
import ErrorHandler from "../error-handler/ErrorHandler";
import { PersonList } from "./../sw-components";
import { withRouter } from "react-router-dom";

const PersonPage = ({ history }) => {
  return (
    <div>
      <ErrorHandler>
        <PersonList
          onSelect={itemid => {
            history.push(itemid);
          }}
        />
      </ErrorHandler>
    </div>
  );
};

export default withRouter(PersonPage);
