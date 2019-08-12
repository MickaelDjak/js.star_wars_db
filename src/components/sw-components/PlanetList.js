import HocedItemList from "./HocedItemList";
import { withSwapiService } from "./../hoc-helper";

const mapMethodsToProps = ({ swapiService, renderItems }) => {
  return {
    getData: swapiService.getAllPlanets,
    renderList: renderItems.renderPlanet
  };
};

export default withSwapiService(HocedItemList, mapMethodsToProps);
