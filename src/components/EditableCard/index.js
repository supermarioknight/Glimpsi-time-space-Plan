// @flow

import React, { Component } from 'react';
import CardEditing from '../CardEditing';
import Card, { type Props } from '../Card';
import CardActions from '../CardActions';
import Hoverable from '../Hoverable';
import editable from '../../decorators/editable';

type State = {
  editing: boolean,
};

export default editable(
class EditableCard extends Component<Props, State> {
  save = (...args) => {
    this.props.onSave(...args);
    this.props.setEditing(false);
  };

  render() {
    const { onDelete, id, editing } = this.props;

    return (
      <Hoverable>
        {(hovering) => editing ?
          <CardEditing {...this.props} onSave={this.save} onCancel={() => this.props.setEditing(false)} />
          : (
            <Card {...this.props}>
              {hovering && <CardActions onEdit={() => this.props.setEditing(true)} onDelete={() => onDelete(id)} />}
            </Card>
          )}
      </Hoverable>
    );
  }
}
);
