import HocedItemDetails from "./HocedItemDetails";
import { withSwapiService } from "./../hoc-helper";

const mapMethodsToProps = ({ swapiService, itemDetails }) => {
  return {
    getData: swapiService.getPlanet,
    renderDetails: itemDetails.planetDetail
  };
};

export default withSwapiService(HocedItemDetails, mapMethodsToProps);
