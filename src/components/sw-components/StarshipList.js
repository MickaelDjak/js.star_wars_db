import {
  withNetworkHandlingListItem,
  withRenderListItem,
  withSwapiService
} from "./../hoc-helper";
import ItemList from "./../item-list";
import compose from "./../../services/compose";

const mapMethodsToProps = ({ swapiService, renderItems }) => {
  return {
    getData: swapiService.getAllStarships,
    renderList: renderItems.renderStarship
  };
};

export default compose(
  withSwapiService(mapMethodsToProps),
  withNetworkHandlingListItem,
  withRenderListItem
)(ItemList);
