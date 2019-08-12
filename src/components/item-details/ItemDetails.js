import React, { Children, cloneElement } from "react";
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

export default ItemDetails;

export { DataRecord };
