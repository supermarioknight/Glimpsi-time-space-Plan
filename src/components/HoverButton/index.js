// @flow

import React, { type Node, Component } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node,
  onClick: Function,
};

const Root = styled.div`
  position: relative;
  display: inline;
`;

const Button = styled.button`
  padding: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  left: ${(props) => props.position === 'left' ? 0 : '50%'};
  right: ${(props) => props.position === 'right' ? 0 : '50%'};
  background: none;
  border: none;
  position: absolute;
  cursor: pointer;
  font-size: 1em;
`;

export default class HoverButton extends Component<Props, *> {
  state = {
    hovering: false,
  };

  hoverOver = () => {
    this.setState({
      hovering: true,
    });
  };

  hoverOut = () => {
    this.setState({
      hovering: false,
    });
  };

  render () {
    const { children, ...props } = this.props;
    return (
      <Root
        onMouseOver={this.hoverOver}
        onMouseOut={this.hoverOut}
        {...props}
      >
        {children}

        {[
          <Button key="edit" position="left">
            edit
          </Button>,
          <Button key="delete" position="right">
            delete
          </Button>,
        ]}
      </Root>
    );
  };
}
