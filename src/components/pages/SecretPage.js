import React from "react";
import { Redirect } from "react-router-dom";

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="card text-white bg-success  mb-3">
        <div className="card-header">Hello man ...</div>
        <div className="card-body">
          <h4 className="card-title">This page is full of secrets!</h4>
        </div>
      </div>
    );
  }

  return <Redirect to="/login" />;

  return (
    <div className="card text-white bg-danger mb-3">
      <div className="card-header">Oops ...</div>
      <div className="card-body">
        <h4 className="card-title">You should not see page !!!</h4>
      </div>
    </div>
  );
};

export default SecretPage;
