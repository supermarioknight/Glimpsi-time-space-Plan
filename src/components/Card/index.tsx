import * as React from 'react';
import { Card as CardProps } from '../../features/types';
import { Root, DateTime, Minutes, Title, Location, Notes, NoWrap } from './styles';
import Label, { LabelGroup } from '../Label';
import { Marker } from '../Map/styles';

export interface Props extends CardProps {
  children?: React.ReactNode;
  markerId?: number;
  focused?: boolean;
}

const Card: React.StatelessComponent<Props> = ({
  title,
  location,
  duration,
  children,
  notes,
  markerId,
  labels,
  ...props
}) => (
  <Root {...props}>
    <DateTime>
      Starts at {props.start.format('hh:mma')}
      {duration ? <Minutes>Goes for {`${duration}min`}</Minutes> : null}
    </DateTime>

    <LabelGroup>{labels && labels.map(label => <Label key={label}>{label}</Label>)}</LabelGroup>

    <div>
      <Title>
        {markerId && <Marker small>{markerId}</Marker>} <NoWrap>{title}</NoWrap>
      </Title>

      <Location tabIndex={0}>{location.formattedAddress}</Location>
      <Notes>{notes}</Notes>
    </div>

    {children}
  </Root>
);

Card.defaultProps = {
  children: undefined,
};

export default Card;
