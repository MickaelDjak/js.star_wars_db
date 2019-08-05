import React, { Component, Fragment } from "react";
import PeopleDetails from "../people-details/PeopleDetails";
import ItemList from "../item-list/ItemList";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

export default class PeoplePage extends Component {
  state = {
    selectedEntityId: null,
    hasError: false
  };

  onSelect = id => {
    this.setState({
      selectedEntityId: id
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if(this.state.hasError){
      return <ErrorIndicator/>
    }

    return (
      <Fragment>
        <div className="col-3">
          <ItemList onSelect={this.onSelect} />
        </div>

        <div className="col-9">
          <PeopleDetails selectedEntityId={this.state.selectedEntityId} />
        </div>
      </Fragment>
    );
  }
}
