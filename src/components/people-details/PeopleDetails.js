import React, { Component } from "react";
import "./PeopleDetails.css";

export default class PeopleDetails extends Component {
  render() {
    return (
      <div className='PeopleDetails'>
        <blockquote className="blockquote">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
    );
  }
}
