import React from "react";
import SwapiService from "../../services/SwapiService";
import {
  renderPerson,
  renderPlanet,
  renderStarship
} from "../../services/RenderListItems";
import { itemListHocHelper } from "./../hoc-helper";
import ItemList from "../item-list/ItemList";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const withRenderFunction = (Wrapper, render) => {
  return props => {
    return <Wrapper {...props}>{render}</Wrapper>;
  };
};

const PersonList = itemListHocHelper(
  withRenderFunction(ItemList, renderPerson),
  getAllPeople
);

const PlanetList = itemListHocHelper(
  withRenderFunction(ItemList, renderPlanet),
  getAllPlanets
);

const StarshipList = itemListHocHelper(
  withRenderFunction(ItemList, renderStarship),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
