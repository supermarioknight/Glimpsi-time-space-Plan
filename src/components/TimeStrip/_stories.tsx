import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import TimeStrip from './';

const Child = styled.div`
  display: inline-block;
  width: 250px;
  height: 200px;
  background-color: grey;
`;

const current = {
  date: '2017-11-04T10:00:00',
  duration: 30,
};

const next = {
  date: '2017-11-04T10:10:00',
  duration: 30,
};

storiesOf('TimeStrip', module).add('overlap', () => (
  <div>
    <TimeStrip current={current} next={next}>
      <Child />
    </TimeStrip>
    <TimeStrip current={current}>
      <Child />
    </TimeStrip>
  </div>
));
