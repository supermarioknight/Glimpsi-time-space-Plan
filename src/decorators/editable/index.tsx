import React, { Component, ComponentType } from 'react';

export interface InjectedProps {
  editing: boolean,
  setEditing: (editing: boolean) => void,
}

interface State {
  editing: boolean,
};

export default (WrappedComponent: ComponentType<any>) =>  class Editable extends Component<{}, State> {
  state = {
    editing: false,
  };

  setEditing = (editing: boolean) => {
    this.setState({
      editing,
    });
  };

  render() {
    const props = {
      ...this.props,
      setEditing: this.setEditing,
      editing: this.state.editing,
    };

    return <WrappedComponent {...props} />;
  }
}
