import HocedItemList from "./HocedItemList";
import { withSwapiService } from "./../hoc-helper";

const mapMethodsToProps = ({ swapiService, renderItems }) => {
  return {
    getData: swapiService.getAllStarships,
    renderList: renderItems.renderStarship
  };
};

export default withSwapiService(HocedItemList, mapMethodsToProps);