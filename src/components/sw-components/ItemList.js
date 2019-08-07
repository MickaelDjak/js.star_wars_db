import SwapiService from "../../services/SwapiService";
import {itemListHocHelper} from "./../hoc-helper";
import ItemList from "../item-list/ItemList";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const PersonList = itemListHocHelper(ItemList, getAllPeople);
const PlanetList = itemListHocHelper(ItemList, getAllPlanets);
const StarshipList = itemListHocHelper(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
