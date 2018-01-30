import * as React from 'react';
import { Card as CardProps } from '../../features/types';
import { Root, DateTime, Title, Location, Notes, NoWrap } from './styles';
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
    <DateTime title="All times are in the locations timezone.">
      {props.start.format('hh:mma')}
      {duration ? (
        <React.Fragment>
          {` until `}
          {props.start
            .clone()
            .add(duration, 'minutes')
            .format('hh:mma')}
        </React.Fragment>
      ) : (
        undefined
      )}
    </DateTime>

    <LabelGroup>{labels && labels.map(label => <Label key={label}>{label}</Label>)}</LabelGroup>

    <div>
      <Title title={title}>
        {markerId && <Marker small>{markerId}</Marker>} <NoWrap>{title}</NoWrap>
      </Title>

      <Location tabIndex={0} title={location.formattedAddress}>
        {location.formattedAddress}
      </Location>

      <Notes title={notes}>{notes}</Notes>
    </div>

    {children}
  </Root>
);

Card.defaultProps = {
  children: undefined,
};

export default Card;
