import * as React from 'react';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import { Root } from './styles';
import ConfirmButton from '../Button/Confirm';
import Button from '../Button';

interface Props {
  onEdit: (e: React.MouseEvent<HTMLElement>) => void;
  onDelete: (e: React.MouseEvent<HTMLElement>) => void;
}

const CardActions = ({ onEdit, onDelete }: Props) => (
  <Root>
    <ConfirmButton onClick={onDelete}>delete</ConfirmButton>
    <Button onClick={onEdit}>edit</Button>
  </Root>
);

export default withAnalyticsEvents<Props>({
  onDelete: createAnalyticsEvent =>
    createAnalyticsEvent({ action: 'Delete Card', category: 'Timeline' }).fire(),
})(CardActions);
