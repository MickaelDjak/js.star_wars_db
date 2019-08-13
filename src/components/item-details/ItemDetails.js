import React, { Children, cloneElement } from "react";
import PropTypes from "prop-types";
import "./ItemDetails.css";
import ErrorGenerator from "./../error-generator";

const DataRecord = ({ data, label, field }) => {
  return (
    <p key={label}>
      <span className="RandomPlanet-term  font-weight-bold">{label}</span>
      <span className="text-muted">{data[field]}</span>
    </p>
  );
};

DataRecord.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
  field: PropTypes.string
};

const ItemDetails = ({ data, children }) => {
  if (JSON.stringify(data) === JSON.stringify({})) {
    return (
      <div className="ItemDetails">
        <span className="ItemDetails-empyt">Select a person from a list</span>
      </div>
    );
  }

  return (
    <div className="ItemDetails">
      <div
        className="ItemDetails-image"
        style={{
          backgroundImage: `url(${data.imageUrl}),url(${data.stabImageUrl})`
        }}
      />
      <div className="ItemDetails-info">
        {Children.map(children, child => {
          return cloneElement(child, { data: data });
        })}
        <ErrorGenerator />
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  data: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.object)
};

export default ItemDetails;

export { DataRecord };
