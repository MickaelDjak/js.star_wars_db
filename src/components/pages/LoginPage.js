import React from "react";
import { Redirect } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div class="card border-info mb-3">
      <div class="card-header">Login to see secret page!</div>
      <div class="card-body">
        <button type="submit" className="btn btn btn-info" onClick={onLogin}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
