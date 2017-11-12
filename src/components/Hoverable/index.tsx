import React, { Component } from 'react';

interface Props {
  children: (hovering: boolean) => React.ReactNode,
};

interface State {
  hovering: boolean,
};

export default class Hoverable extends Component<Props, State> {
  state = {
    hovering: false,
  };

  mouseIn = () => {
    this.setState({
      hovering: true,
    });
  };

  mouseOut = () => {
    this.setState({
      hovering: false,
    });
  };

  render () {
    return (
      <span onMouseEnter={this.mouseIn} onMouseLeave={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </span>
    );
  }
}
