import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import ErrorHandler from "../error-handler/ErrorHandler";

const itemListHocHelper = (View, getData) => {
  return class extends Component {
    state = {
      data: [],
      loading: true
    };

    componentDidMount() {
      getData().then(this.onData);
    }

    componentDidUpdate(prevProps) {
      if (this.props.entityType !== prevProps.entityType) {
        this.setState({
          loading: true
        });
        getData().then(this.onData);
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

export default itemListHocHelper;
