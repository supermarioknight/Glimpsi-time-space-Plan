import React, { Component } from 'react';
import CardEditing, { OnSave } from '../CardEditing';
import Card, { Props as CardProps } from '../Card';
import CardActions from '../CardActions';
import Hoverable from '../Hoverable';
import { Card as CardType } from '../../state/timeline/reducer';
import editable, { InjectedProps } from '../../decorators/editable';

interface Props extends InjectedProps, CardProps {
  id: string;
  onDelete: (id: string) => void;
  onEditing: (id: string) => void;
  onSave: OnSave;
}

export default editable<Props>(
  class EditableCard extends Component<Props> {
    save = (values: CardType) => {
      this.props.onSave(values);
      this.props.setEditing(false);
    };

    render() {
      const { onDelete, id, editing, onEditing } = this.props;

      return (
        <Hoverable>
          {hovering =>
            editing ? (
              <CardEditing
                {...this.props}
                onSave={this.save}
                onCancel={() => this.props.setEditing(false)}
              />
            ) : (
              <Card {...this.props}>
                {hovering && (
                  <CardActions onEdit={() => onEditing(id)} onDelete={() => onDelete(id)} />
                )}
              </Card>
            )
          }
        </Hoverable>
      );
    }
  }
);
