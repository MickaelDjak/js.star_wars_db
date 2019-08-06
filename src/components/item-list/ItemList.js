import React, { Component } from "react";
import "./ItemList.css";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {
  state = {
    entities: [],
    loading: true
  };

  componentDidMount() {
    this.props.getData().then(this.onUpdateEntities);
  }

  componentDidUpdate(prevProps) {
    if (this.props.entityType !== prevProps.entityType) {
      this.setState({
        loading: true
      });
      this.props.getData().then(this.onUpdateEntities);
    }
  }

  onUpdateEntities = entities => {
    this.setState({
      entities: entities,
      loading: false
    });
  };

  render() {
    const { entities, loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="card mb-3">
        <ul className="list-group list-group-flush">
          {entities.map(({ id, ...data }) => {
            return (
              <li
                key={id}
                className="list-group-item"
                onClick={() => {
                  this.props.onSelect(id);
                }}
              >
                {this.props.children(data)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
