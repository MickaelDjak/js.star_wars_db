import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import ErrorHandler from "../error-handler/ErrorHandler";

const deteilsHocHelper = (View, getData) => {
  return class extends Component {
    state = {
      data: {},
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
        data: {}
      });
    };

    onUpdateEntity = () => {
      const { selectedEntityId = null } = this.props;
      if (selectedEntityId === null) {
        return;
      }

      this.setState({ loading: true });

      getData(selectedEntityId).then(data => {
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

export default deteilsHocHelper;
