import React, { Fragment } from "react";

const ItemViewer = function({ entity, kayList }) {
  if (Object.keys(entity).length === 0) {
    return (
      <span className="ItemDetails-empyt">Select a person from a list </span>
    );
  }
  const img = entity.name ? (
    <img className="ItemDetails-image" src={entity.imageUrl} alt=";" />
  ) : null;

  return (
    <Fragment>
      {img}
      <div className="ItemDetails-info">
        {kayList.map(name => {
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

export default ItemViewer;
