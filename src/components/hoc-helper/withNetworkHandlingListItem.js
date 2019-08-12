import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import ErrorHandler from "../error-handler/ErrorHandler";

const withNetworkHandlingListItem = View => {
  return class extends Component {
    state = {
      data: [],
      loading: true
    };

    componentDidMount() {
      this.props.getData().then(this.setData);
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.setState({ loading: true });
        this.props.getData().then(this.setData);
      }
    }

    setData = data => {
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
