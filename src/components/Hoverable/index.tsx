import React, { Component } from 'react';

interface Props {
  children: (hovering: boolean) => React.ReactNode;
}

interface State {
  hovering: boolean;
}

export default class Hoverable extends Component<Props, State> {
  state = {
    hovering: false,
  };

  mouseIn = () => {
    if (!this.state.hovering) {
      this.setState({ hovering: true });
    }
  };

  mouseOut = () => {
    if (this.state.hovering) {
      this.setState({ hovering: false });
    }
  };

  render() {
    return (
      <span onMouseOver={this.mouseIn} onMouseLeave={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </span>
    );
  }
}
