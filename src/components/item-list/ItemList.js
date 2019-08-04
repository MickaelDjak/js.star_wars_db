import React, { Component } from "react";
import SwapiService from "../../services/SwapiService";

import "./ItemList.css";
import ItemListView from "./ItemListView";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {
  swapi = new SwapiService();

  state = {
    entities: [],
    selectedEntity: null
  };

  componentDidMount() {
    this.swapi.getAllPeople().then(this.onUpdateEntities);
  }

  onUpdateEntities = entities => {
    this.setState({
      entities: entities
    });
  };

  onError = () => {};

  render() {
    const { entities } = this.state;

    const content = entities.length ? (
      <ItemListView entities={entities} onSelect={this.props.onSelect} />
    ) : (
      <Spinner />
    );

    return (
      <div className="card mb-3">
        <ul className="list-group list-group-flush">{content}</ul>
      </div>
    );
  }
}
