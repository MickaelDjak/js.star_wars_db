import HocedItemDetails from "./HocedItemDetails";
import { withSwapiService } from "./../hoc-helper";

const mapMethodsToProps = ({ swapiService, itemDetails }) => {
  return {
    getData: swapiService.getPerson,
    renderDetails: itemDetails.personDetail
  };
};

export default withSwapiService(HocedItemDetails, mapMethodsToProps);
