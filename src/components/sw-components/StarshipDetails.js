import HocedItemDetails from "./HocedItemDetails";
import { withSwapiService } from "./../hoc-helper";

const mapMethodsToProps = ({ swapiService, itemDetails }) => {
  return {
    getData: swapiService.getStarship,
    renderDetails: itemDetails.starshipDatail
  };
};

export default withSwapiService(HocedItemDetails, mapMethodsToProps);
