import React from "react";
import { PersonList, PersonDetails } from "./../sw-components";
import { withRouter } from "react-router-dom";
import DoubleColumnRow from "./../double-column-row";

const PersonPageWithTwoComponents = ({ history, match }) => {
  return (
    <DoubleColumnRow
      left={
        <PersonList
          onSelect={id => {
            history.push(id);
          }}
        />
      }
      right={<PersonDetails itemId={match.params.id} />}
    />
  );
};

export default withRouter(PersonPageWithTwoComponents);
