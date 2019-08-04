import React, { Fragment } from "react";

const PlanetView = function({
  planet: { id, name, population, diameter, orbitalPeriod, imageUrl }
}) {
  const imgUrlDefault =
    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    
  return (
    <Fragment>
      <div
        className="RandomPlanet-photo"
        style={{
          backgroundImage: `url(${imageUrl}), url(${imgUrlDefault})`
        }}
      />
      <div className="RandomPlanet-info">
        <h1 className="display-3">{name}</h1>

        <p>
          <span className="RandomPlanet-term font-weight-bold">Population</span>
          <span className="text-muted">{population}</span>
        </p>
        <p>
          <span className="RandomPlanet-term  font-weight-bold">Diameter</span>
          <span className="text-muted">{diameter}</span>
        </p>
        <p>
          <span className="RandomPlanet-term  font-weight-bold">
            Orbital period
          </span>
          <span className="text-muted">{orbitalPeriod}</span>
        </p>
      </div>
    </Fragment>
  );
};

export default PlanetView;
