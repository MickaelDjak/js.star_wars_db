import React, { Component } from "react";
import SwapiService from "../../services/SwapiService";
import "./PeopleDetails.css";

export default class PeopleDetails extends Component {
  swapi = new SwapiService();

  state = {
    entity: {}
  };

  onUpdateEntity = entity => {
    this.setState({
      entity: entity
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log("PeopleDetails  componentDidMount");
    this.swapi
      .getPerson(nextProps.selectedEntityId)
      .then(this.onUpdateEntity)
      .catch(e => {});
  }

  render() {
    const key = Object.keys(this.state.entity);
    const img = this.state.entity.name ? (
      <img className="PeopleDetails-image" src={this.state.entity.imageUrl} alt=";" />
    ) : null;

    return (
      <div className="PeopleDetails">
        {img}
        <div className="PeopleDetails-info">
          {key.map(name => {
            return (
              <p key={name}>
                <span className="RandomPlanet-term  font-weight-bold">
                  {name}
                </span>
                <span className="text-muted">
                  {this.state.entity[`${name}`]}
                </span>
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}
