import React, { Component } from "react";
import "./ItemList.css";

export default class ItemList extends Component {
  render() {
    return (
      <div class="card mb-3">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    );
  }
}
