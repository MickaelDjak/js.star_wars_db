import React from "react";
import PropTypes from 'prop-types';

const DoubleColumnRow = ({ left, right }) => {
  return (
    <div className="row">
      <div className="col-3">{left}</div>
      <div className="col-9">{right}</div>
    </div>
  );
};

DoubleColumnRow.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default DoubleColumnRow;
