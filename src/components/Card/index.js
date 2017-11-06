// @flow

import React, { type Node } from 'react';
import styled from 'styled-components';
import { humanize } from '../../lib/date';

export type Props = {
  title: string,
  location: string,
  date: string,
  image: string,
  end: string,
  children?: Node,
};

export const Root = styled.div`
  display: inline-block;
  border-radius: 2px;
  padding: 5px;
  font-family: sans-serif;
  width: 300px;
  position: relative;
`;

export const Title = styled.h2`
  font-family: serif;
  margin: 0;
`;

export const Location = styled.div``;

export const DateTime = styled.div`
  text-align: right;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 150px;
  background-color: #eee;
`;

const Card = ({ title, location, start, end, image, children }: Props) => (
  <Root>
    <DateTime>{humanize(start)}{end && ` - ${humanize(end)}`}</DateTime>
    <HeroImage src={image} />
    <Title>{title}</Title>
    <Location>{location}</Location>
    {children}
  </Root>
);

Card.defaultProps = {
  image: '',
  end: '',
};

export default Card;
