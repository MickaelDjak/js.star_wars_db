import React, { Component } from "react";
import "./ItemList.css";

export default class ItemList extends Component {
  render() {
    return (
      <div className="card mb-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    );
  }
}
