import * as React from 'react';
import styled from 'styled-components';
import { humanize } from '../../lib/date';
import { colors } from '../../assets/styles/variables';
import { Card as CardProps } from '../../features/types';

export interface Props extends CardProps {
  children?: React.ReactNode;
}

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;
  padding: 10px;
  font-family: sans-serif;
  width: 100%;
  max-width: 400px;
  height: 150px;
  background-size: cover;
  background-position: center center;
  background-color: ${colors.cardBackground};
  position: relative;
  margin: 12px 0;
`;

export const Title = styled.h2`
  font-family: serif;
  margin: 0;
  font-size: 26px;
`;

const Minutes = styled.div`margin-left: auto;`;

export const Location = styled.div`font-size: 18px;`;

export const DateTime = styled.div`
  display: flex;
  font-size: 16px;
`;

const Card: React.StatelessComponent<Props> = ({ title, location, start, duration, children }) => (
  <Root>
    <DateTime>
      {humanize(start)}
      <Minutes>{`${duration}min`}</Minutes>
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
