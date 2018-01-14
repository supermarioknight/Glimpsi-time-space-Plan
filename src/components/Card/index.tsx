import * as React from 'react';
import { Card as CardProps } from '../../features/types';
import { Root, DateTime, Minutes, Title, Location } from './styles';
import Label from '../Label';
import { Marker } from '../Map/styles';

export interface Props extends CardProps {
  children?: React.ReactNode;
  markerId?: number;
  focused?: boolean;
}

const Card: React.StatelessComponent<Props> = ({
  title,
  location,
  time,
  duration,
  children,
  markerId,
  labels,
  ...props
}) => (
  <Root {...props}>
    <DateTime>
      Starts {time.format('hh:mma')}
      {duration ? <Minutes>{`${duration}min`}</Minutes> : null}
    </DateTime>

    {markerId && <Marker>{markerId}</Marker>}

    <div>{labels && labels.map(label => <Label key={label}>{label}</Label>)}</div>

    <div>
      <Title>{title}</Title>
      <Location>{location.formattedAddress}</Location>
    </div>

    {children}
  </Root>
);

Card.defaultProps = {
  children: undefined,
};

export default Card;
