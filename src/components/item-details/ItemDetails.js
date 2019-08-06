import React, { Component } from "react";
import "./ItemDetails.css";
import Spinner from "../spinner/spinner";
import ItemViewer from "./ItemViewer";
import ErrorGenerator from "../error-generator";

export default class ItemDetails extends Component {
  state = {
    entity: {},
    loading: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedEntityId !== prevProps.selectedEntityId) {
      this.onUpdateEntity();
    }

    if (this.props.entityType !== prevProps.entityType) {
      this.onChangeEntityType();
    }
  }

  componentDidMount() {
    this.onUpdateEntity();
  }

  onChangeEntityType = () => {
    this.setState({
      entity: {}
    });
  };

  onUpdateEntity = () => {
    const { selectedEntityId = null } = this.props;
    if (selectedEntityId === null) {
      return;
    }

    this.setState({ loading: true });

    this.props.getOneItem(selectedEntityId).then(entity => {
      this.setState({
        entity: entity,
        loading: false
      });
    });
  };

  render() {
    const { entity, loading } = this.state;
    const { renderContent } = this.props;

    const content = loading ? (
      <Spinner />
    ) : (
      <ItemViewer entity={entity} kayList={renderContent} />
    );

    return (
      <div className="ItemDetails">
        {content}
        <ErrorGenerator />
      </div>
    );
  }
}
