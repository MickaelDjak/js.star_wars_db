import React, { Fragment } from "react";

const renderListItems = {
  renderPerson({ name, gender, birthYear }) {
    return (
      <Fragment>
        <h5 className="card-title">{`${name}`}</h5>
        <h6 className="card-subtitle text-muted">{`${gender} ${birthYear}`}</h6>
      </Fragment>
    );
  },

  renderPlanet({ name, diameter }) {
    return (
      <Fragment>
        <h5 className="card-title">{`${name}`}</h5>
        <h6 className="card-subtitle text-muted">{`${diameter}`}</h6>
      </Fragment>
    );
  },

  renderStarship({ name, starshipClass }) {
    return (
      <Fragment>
        <h5 className="card-title">{`${name}`}</h5>
        <h6 className="card-subtitle text-muted">{`${starshipClass}`}</h6>
      </Fragment>
    );
  }
};

export default renderListItems;
