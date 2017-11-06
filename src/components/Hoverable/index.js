// @flow

import React, { Component } from 'react';

export default class Hoverable extends Component {
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
