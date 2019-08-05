import React, { Fragment } from "react";

const PeopleViewer = function({ entity }) {
  const key = Object.keys(entity);

  const img = entity.name ? (
    <img className="PeopleDetails-image" src={entity.imageUrl} alt=";" />
  ) : null;

  if (Object.keys(entity).length === 0) {
    return (
      <span className="PeopleDetails-empyt">Select a person from a list </span>
    );
  }

  return (
    <Fragment>
      {img}
      <div className="PeopleDetails-info">
        {key.map(name => {
          return (
            <p key={name}>
              <span className="RandomPlanet-term  font-weight-bold">
                {name}
              </span>
              <span className="text-muted">{entity[`${name}`]}</span>
            </p>
          );
        })}
      </div>
    </Fragment>
  );
};

export default PeopleViewer;
