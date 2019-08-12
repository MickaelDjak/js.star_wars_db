import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import ErrorHandler from "../error-handler/ErrorHandler";

const withNetworkHandlingListItem  = (View, getData) => {
  return class extends Component {
    state = {
      data: [],
      loading: true
    };

    componentDidMount() {
      console.log(this);
      this.props.getData().then(this.onData);
    }

    componentDidUpdate(prevProps) {
      if (this.props.entityType !== prevProps.entityType) {
        this.setState({
          loading: true
        });
        this.props.getData().then(this.onData);
      }
    }

    onData = data => {
      this.setState({
        data: data,
        loading: false
      });
    };

    render() {
      const { data, loading } = this.state;

      if (loading) {
        return <Spinner />;
      }

      return (
        <ErrorHandler>
          <View {...this.props} data={data} />;
        </ErrorHandler>
      );
    }
  };
};

export default withNetworkHandlingListItem;
