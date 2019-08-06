import React from "react";

const DoubleColumnRow = ({ left, right }) => {
  return (
    <div className="row">
      <div className="col-3">{left}</div>
      <div className="col-9">{right}</div>
    </div>
  );
};

export default DoubleColumnRow;
