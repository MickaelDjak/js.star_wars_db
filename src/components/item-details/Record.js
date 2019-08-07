import React from "react";

const Record = ({ label, fieldValue }) => {
  return (
    <p key={label}>
      <span className="RandomPlanet-term  font-weight-bold">{label}</span>
      <span className="text-muted">{fieldValue}</span>
    </p>
  );
};

export default Record;
