import React from "react";
import "./ErrorIndicator.css";
import icone from "./star-death-e.png";

const ErrorIndicator = function() {
  return (
    <div className="ErrorIndicator">
      <h2>Oops!!</h2>
      <img src={icone} alt='Something go wrong' />
      <span>Something go wrong</span>
      <span>We have alreas sent droids</span>
    </div>
  );
};

export default ErrorIndicator;
