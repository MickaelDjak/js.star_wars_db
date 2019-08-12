import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import ErrorHandler from "../error-handler/ErrorHandler";

const withNetworkHandlingDeteils  = (View) => {
  return class extends Component {
    state = {
      data: {},
      loading: false
    };

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
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
        data: {}
      });
    };

    onUpdateEntity = () => {
      const { itemId = null } = this.props;
      if (itemId === null) {
        return;
      }

      this.setState({ loading: true });

      this.props.getData(itemId).then(data => {
        this.setState({
          data: data,
          loading: false
        });
      });
    };

    render() {
      const { data, loading } = this.state;
      if (loading) {
        return <Spinner />;
      }

      return (
        <ErrorHandler>
          <View {...this.props} data={data} />
        </ErrorHandler>
      );
    }
  };
};

export default withNetworkHandlingDeteils;
