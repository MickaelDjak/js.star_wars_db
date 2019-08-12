import {
  withNetworkHandlingListItem,
  withRenderListItem,
  withSwapiService
} from "./../hoc-helper";
import ItemList from "./../item-list";
import compose from "./../../services/compose";

const mapMethodsToProps = ({ swapiService, renderItems }) => {
  return {
    getData: swapiService.getAllPlanets,
    renderList: renderItems.renderPlanet
  };
};

export default compose(
  withSwapiService(mapMethodsToProps),
  withNetworkHandlingListItem,
  withRenderListItem
)(ItemList);
