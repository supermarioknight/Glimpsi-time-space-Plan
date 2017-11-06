// @flow

import React, { Component } from 'react';
import CardEditing from '../CardEditing';
import Card, { type Props } from '../Card';
import CardActions from '../CardActions';
import Hoverable from '../Hoverable';

type State = {
  editing: boolean,
};

export default class CardEditable extends Component<Props, State> {
  state = {
    editing: false,
  };

  startEditing = () => {
    this.setState({
      editing: true,
    });
  };

  cancelEditing = () => {
    this.setState({
      editing: false,
    });
  };

  save = (...args) => {
    this.props.onSave(...args);
    this.cancelEditing();
  };

  render() {
    const { editing } = this.state;
    const { onDelete, id } = this.props;

    return (
      <Hoverable>
        {(hovering) => editing ?
          <CardEditing {...this.props} onSave={this.save} onCancel={this.cancelEditing} />
          : (
            <Card {...this.props}>
              {hovering && <CardActions onEdit={this.startEditing} onDelete={() => onDelete(id)} />}
            </Card>
          )}
      </Hoverable>
    );
  }
}
