import SwapiService from "../../services/SwapiService";
import { deteilsHocHelper } from "./../hoc-helper";
import ItemDetails from "./../item-details";

const { getPerson, getPlanet, getStarship } = new SwapiService();

const PersonDetails = deteilsHocHelper(ItemDetails, getPerson);
const PlanetDetails = deteilsHocHelper(ItemDetails, getPlanet);
const StarshipDetails = deteilsHocHelper(ItemDetails, getStarship);

export { PersonDetails, PlanetDetails, StarshipDetails };
