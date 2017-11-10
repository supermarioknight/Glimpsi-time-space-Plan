// @flow

import React, { Component, type ComponentType } from 'react';

type Props = {
  children: Function,
};

type State = {
  editing: boolean,
};

export default (WrappedComponent: ComponentType<*>) =>  class Editable extends Component<Props, State> {
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
