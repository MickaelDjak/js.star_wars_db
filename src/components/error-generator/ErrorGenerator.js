import React, { Component } from "react";
import "./ErrorGenerator.css";

export default class ErrorGenerator extends Component {
  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className="btn btn-danger"
        onClick={() => {
          this.setState({ renderError: true });
        }}
      >
        Throw Error
      </button>
    );
  }
}
