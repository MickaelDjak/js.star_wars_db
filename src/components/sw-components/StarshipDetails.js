import ItemDetails from "./../item-details";
import compose from "./../../services/compose";
import {
  withSwapiService,
  withNetworkHandlingDeteils,
  withRenderDeteils
} from "./../hoc-helper";

const mapMethodsToProps = ({ swapiService, itemDetails }) => {
  return {
    getData: swapiService.getStarship,
    renderDetails: itemDetails.starshipDatail
  };
};

export default compose(
  withSwapiService(mapMethodsToProps),
  withNetworkHandlingDeteils,
  withRenderDeteils
)(ItemDetails);
