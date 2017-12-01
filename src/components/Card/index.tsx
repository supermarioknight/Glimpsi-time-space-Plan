import * as React from 'react';
import { Card as CardProps } from '../../features/types';
import { Root, DateTime, Minutes, Title, Location } from './styles';
export interface Props extends CardProps {
  children?: React.ReactNode;
}

const Card: React.StatelessComponent<Props> = ({
  title,
  location,
  time,
  duration,
  children,
}) => (
  <Root>
    <DateTime>
      Starts {time.format('hh:mma')}
      {duration ? <Minutes>{`${duration}min`}</Minutes> : null}
    </DateTime>

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
