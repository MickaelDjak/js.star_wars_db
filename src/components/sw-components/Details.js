import React from "react";
import SwapiService from "../../services/SwapiService";
import { deteilsHocHelper } from "./../hoc-helper";
import ItemDetails, { DataRecord } from "./../item-details";
import {
  personDetail,
  planetDetail,
  starshipDatails
} from "../../services/RenderDetailsFields";

const { getPerson, getPlanet, getStarship } = new SwapiService();

const withRenderedRecords = (Wrapper, fields) => {
  return props => {
    return (
      <Wrapper {...props}>
        {fields.map(el => {
          return (
            <DataRecord key={el.field} label={el.label} field={el.field} />
          );
        })}
      </Wrapper>
    );
  };
};

const PersonDetails = deteilsHocHelper(
  withRenderedRecords(ItemDetails, personDetail),
  getPerson
);

const PlanetDetails = deteilsHocHelper(
  withRenderedRecords(ItemDetails, planetDetail),
  getPlanet
);

const StarshipDetails = deteilsHocHelper(
  withRenderedRecords(ItemDetails, starshipDatails),
  getStarship
);

export { PersonDetails, PlanetDetails, StarshipDetails };
