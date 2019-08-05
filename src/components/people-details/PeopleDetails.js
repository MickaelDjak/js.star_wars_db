import React, { Component } from "react";
import SwapiService from "../../services/SwapiService";
import Spinner from "../spinner/spinner";
import PeopleViewer from "./PeopleViewer";
import "./PeopleDetails.css";
import ErrorGenerator from "../error-generator/ErrorGenerator";

export default class PeopleDetails extends Component {
  swapi = new SwapiService();

  state = {
    entity: {},
    loading: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedEntityId !== prevProps.selectedEntityId) {
      this.onUpdateEntity();
    }
  }

  componentDidMount() {
    this.onUpdateEntity();
  }

  onUpdateEntity = () => {
    const { selectedEntityId = null } = this.props;
    if (selectedEntityId === null) {
      return;
    }

    this.setState({ loading: true });

    this.swapi.getPerson(selectedEntityId).then(entity => {
      this.setState({
        entity: entity,
        loading: false
      });
    });
  };

  render() {
    const { entity, loading } = this.state;
    const content = loading ? <Spinner /> : <PeopleViewer entity={entity} />;

    return (
      <div className="PeopleDetails">
        {content}
        <ErrorGenerator />
      </div>
    );
  }
}
