import React, { Fragment } from "react";
import ErrorGenerator from './../error-generator';

const PlanetView = function({
  planet: { id, name, population, diameter, orbitalPeriod, imageUrl, stabImageUrl }
}) {
    
  return (
    <Fragment>
      <div
        className="RandomPlanet-photo"
        style={{
          backgroundImage: `url(${imageUrl}),url(${stabImageUrl})`
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
        <ErrorGenerator />
      </div>
    </Fragment>
  );
};

export default PlanetView;
