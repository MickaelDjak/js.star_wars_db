import HocedItemList from "./HocedItemList";
import { withSwapiService } from "./../hoc-helper";

const mapMethodsToProps = ({ swapiService, renderItems }) => {
  return {
    getData: swapiService.getAllPeople,
    renderList: renderItems.renderPerson
  };
};

export default withSwapiService(HocedItemList, mapMethodsToProps);
