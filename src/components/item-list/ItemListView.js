import React, { Fragment } from "react";
import "./ItemList.css";

const ItemListView = function(props) {
    const {entities, onSelect} = props
    return (
    <Fragment>
      {entities.map(({ id, name }) => {
        return (
          <li
            key={id}
            className="list-group-item"
            onClick={() => {
              onSelect(id);
            }}
          >
            {name}
          </li>
        );
      })}
    </Fragment>
  );
};

export default ItemListView;
