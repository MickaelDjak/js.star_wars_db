import React from "react";
import PropTypes from "prop-types";
import { AsList, AsCardColumns } from "./ListFactory";
import "./ItemList.css";

const ItemList = props => {
  const { like } = props;
  console.log(like);
  if (like === "list") {
    return <AsList {...props} />;
  }

  if (like === "card") {
    return <AsCardColumns {...props} />;
  }
};

ItemList.defaultProps = {
  onSelect: () => {},
  like: "list"
};

ItemList.propTypes = {
  onSelect: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
  like: PropTypes.string
};

export default ItemList;
